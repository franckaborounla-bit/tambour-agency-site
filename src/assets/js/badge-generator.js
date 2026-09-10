// =========================================================
// TAMBOUR AGENCY : badge-generator.js
// Page publique /b/[slug] : charge une campagne, compose la
// photo de l'utilisateur avec le cadre (Canvas), permet de
// zoomer/déplacer la photo, ajoute le filigrane Tambour Agency
// et propose le téléchargement du badge final.
// =========================================================
(function () {
  "use strict";

  var slug = decodeURIComponent(window.location.pathname.replace(/^\/b\//, "").replace(/\/+$/, ""));

  var loading = document.getElementById("bLoading");
  var errorBox = document.getElementById("bError");
  var content = document.getElementById("bContent");
  var title = document.getElementById("bTitle");
  var crumbName = document.getElementById("bCrumbName");
  var canvas = document.getElementById("bCanvas");
  var photoInput = document.getElementById("bPhoto");
  var controls = document.getElementById("bControls");
  var zoomSlider = document.getElementById("bZoom");
  var downloadBtn = document.getElementById("bDownload");

  if (!slug || !canvas) return;

  var ctx = canvas.getContext("2d");
  var frameImg = new Image();
  var userImg = null;
  var scalePct = 100;
  var offsetX = 0, offsetY = 0;
  var dragging = false, lastX = 0, lastY = 0;
  var frameLoaded = false;

  function draw() {
    var W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = "#f4efe8";
    ctx.fillRect(0, 0, W, H);

    if (userImg) {
      var baseScale = Math.max(W / userImg.naturalWidth, H / userImg.naturalHeight);
      var s = baseScale * (scalePct / 100);
      var iw = userImg.naturalWidth * s;
      var ih = userImg.naturalHeight * s;
      var x = (W - iw) / 2 + offsetX;
      var y = (H - ih) / 2 + offsetY;
      ctx.drawImage(userImg, x, y, iw, ih);
    }

    if (frameLoaded) {
      ctx.drawImage(frameImg, 0, 0, W, H);
    }

    // Filigrane Tambour Agency
    ctx.save();
    var fontSize = Math.round(W * 0.034);
    ctx.font = "700 " + fontSize + "px Inter, Arial, sans-serif";
    ctx.textBaseline = "bottom";
    var text = "Tambour Agency";
    var pad = W * 0.035;
    var tw = ctx.measureText(text).width;
    ctx.lineWidth = Math.max(2, W * 0.005);
    ctx.strokeStyle = "rgba(23,19,15,0.45)";
    ctx.strokeText(text, W - tw - pad, H - pad);
    ctx.fillStyle = "rgba(255,255,255,0.92)";
    ctx.fillText(text, W - tw - pad, H - pad);
    ctx.restore();
  }

  function setCanvasResolution(w, h) {
    var maxDim = 1000;
    var scale = Math.min(1, maxDim / Math.max(w, h));
    canvas.width = Math.round(w * scale);
    canvas.height = Math.round(h * scale);
    canvas.style.aspectRatio = w + " / " + h;
  }

  function loadCampaign() {
    fetch("/api/campaigns/" + encodeURIComponent(slug))
      .then(function (r) {
        if (!r.ok) throw new Error("not-found");
        return r.json();
      })
      .then(function (data) {
        title.textContent = "Créez votre badge : " + data.name;
        crumbName.textContent = data.name;
        document.title = data.name + " | Badge Tambour Agency";

        frameImg.crossOrigin = "anonymous";
        frameImg.onload = function () {
          setCanvasResolution(frameImg.naturalWidth || 1000, frameImg.naturalHeight || 1000);
          frameLoaded = true;
          draw();
        };
        frameImg.src = data.frameUrl;

        loading.style.display = "none";
        content.style.display = "block";
      })
      .catch(function () {
        loading.style.display = "none";
        errorBox.style.display = "block";
      });
  }

  photoInput.addEventListener("change", function () {
    var file = photoInput.files[0];
    if (!file) return;
    var img = new Image();
    img.onload = function () {
      userImg = img;
      scalePct = 100;
      offsetX = 0;
      offsetY = 0;
      zoomSlider.value = 100;
      controls.style.display = "block";
      downloadBtn.disabled = false;
      draw();
    };
    img.src = URL.createObjectURL(file);
  });

  zoomSlider.addEventListener("input", function () {
    scalePct = parseInt(zoomSlider.value, 10) || 100;
    draw();
  });

  function pointerDown(e) {
    if (!userImg) return;
    dragging = true;
    var p = e.touches ? e.touches[0] : e;
    lastX = p.clientX;
    lastY = p.clientY;
    canvas.style.cursor = "grabbing";
  }
  function pointerMove(e) {
    if (!dragging || !userImg) return;
    var p = e.touches ? e.touches[0] : e;
    var rect = canvas.getBoundingClientRect();
    var ratio = canvas.width / rect.width;
    offsetX += (p.clientX - lastX) * ratio;
    offsetY += (p.clientY - lastY) * ratio;
    lastX = p.clientX;
    lastY = p.clientY;
    draw();
    if (e.touches) e.preventDefault();
  }
  function pointerUp() {
    dragging = false;
    canvas.style.cursor = "grab";
  }

  canvas.addEventListener("mousedown", pointerDown);
  window.addEventListener("mousemove", pointerMove);
  window.addEventListener("mouseup", pointerUp);
  canvas.addEventListener("touchstart", pointerDown, { passive: true });
  canvas.addEventListener("touchmove", pointerMove, { passive: false });
  canvas.addEventListener("touchend", pointerUp);

  downloadBtn.addEventListener("click", function () {
    if (!userImg) return;
    canvas.toBlob(function (blob) {
      if (!blob) return;
      var url = URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = slug + "-badge.png";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
    }, "image/png");

    fetch("/api/campaigns/" + encodeURIComponent(slug) + "/track", { method: "POST" }).catch(function () {});
  });

  loadCampaign();
})();

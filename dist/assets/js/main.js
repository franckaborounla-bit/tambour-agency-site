// =========================================================
// TAMBOUR AGENCY — main.js
// Nav, reveal-on-scroll, compteurs, hero canvas "pulsation",
// curseur premium, formulaires (contact / formation)
// =========================================================
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Header scroll state ---------- */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 40);
    var btt = document.querySelector(".back-to-top");
    if (btt) btt.classList.toggle("show", window.scrollY > 700);
  }
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav toggle ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var navLinks = document.querySelector(".nav-links");
  if (toggle && navLinks) {
    toggle.addEventListener("click", function () {
      navLinks.classList.toggle("is-open");
      document.body.style.overflow = navLinks.classList.contains("is-open") ? "hidden" : "";
    });
    navLinks.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        navLinks.classList.remove("is-open");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- Animated counters ---------- */
  var counters = document.querySelectorAll("[data-count]");
  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var suffix = el.getAttribute("data-suffix") || "";
    var dur = 1600, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    if (reduceMotion) { el.textContent = target + suffix; return; }
    requestAnimationFrame(step);
  }
  if ("IntersectionObserver" in window && counters.length) {
    var ioc = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animateCount(e.target); ioc.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (c) { ioc.observe(c); });
  }

  /* ---------- Filters (Réalisations) ---------- */
  var filterBtns = document.querySelectorAll(".filter-btn");
  var workCards = document.querySelectorAll("[data-cat]");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(function (b) { b.classList.remove("is-active"); });
      btn.classList.add("is-active");
      var cat = btn.getAttribute("data-filter");
      workCards.forEach(function (card) {
        var show = cat === "all" || card.getAttribute("data-cat") === cat;
        card.style.display = show ? "" : "none";
      });
    });
  });

  /* ---------- Custom cursor (desktop, fine pointer only) ---------- */
  if (window.matchMedia("(hover:hover) and (pointer:fine)").matches && !reduceMotion) {
    var dot = document.createElement("div");
    var ring = document.createElement("div");
    dot.className = "cursor-dot"; ring.className = "cursor-ring";
    document.body.appendChild(dot); document.body.appendChild(ring);
    var rx = 0, ry = 0, dx = 0, dy = 0;
    document.addEventListener("mousemove", function (e) {
      dx = e.clientX; dy = e.clientY;
      dot.style.left = dx + "px"; dot.style.top = dy + "px";
    });
    (function loop() {
      rx += (dx - rx) * 0.18; ry += (dy - ry) * 0.18;
      ring.style.left = rx + "px"; ring.style.top = ry + "px";
      requestAnimationFrame(loop);
    })();
    document.querySelectorAll("a, button, .filter-btn").forEach(function (el) {
      el.addEventListener("mouseenter", function () { ring.style.width = "50px"; ring.style.height = "50px"; ring.style.opacity = ".4"; });
      el.addEventListener("mouseleave", function () { ring.style.width = "32px"; ring.style.height = "32px"; ring.style.opacity = ".7"; });
    });
  }

  /* ---------- Hero canvas — visuel "pulsation" (placeholder vidéo) ----------
     À REMPLACER : dès que la vidéo de marque définitive est disponible,
     remplacer le <canvas id="heroCanvas"> par une balise <video autoplay muted loop playsinline>
     pointant vers /assets/video/hero.mp4 (+ .webm). Voir DEPLOY.md. */
  var canvas = document.getElementById("heroCanvas");
  if (canvas) {
    var ctx = canvas.getContext("2d");
    var w, h, dpr = Math.min(window.devicePixelRatio || 1, 2);
    var particles = [];
    var COLORS = ["#E45327", "#F5A423", "#ffffff"];

    function resize() {
      w = canvas.offsetWidth; h = canvas.offsetHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function initParticles() {
      particles = [];
      var count = Math.round((w * h) / 26000);
      for (var i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: 1 + Math.random() * 2.4,
          speed: 0.15 + Math.random() * 0.4,
          phase: Math.random() * Math.PI * 2,
          color: COLORS[i % COLORS.length],
        });
      }
    }
    resize(); initParticles();
    window.addEventListener("resize", function () { resize(); initParticles(); });

    var t = 0;
    function drawRings() {
      var cx = w * 0.72, cy = h * 0.42;
      for (var i = 0; i < 4; i++) {
        var progress = ((t * 0.00035) + i / 4) % 1;
        var radius = progress * Math.max(w, h) * 0.62;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(245,164,35," + (0.35 * (1 - progress)) + ")";
        ctx.lineWidth = 1.4;
        ctx.stroke();
      }
    }
    function drawParticles() {
      particles.forEach(function (p) {
        var yy = p.y + Math.sin(t * 0.001 * p.speed + p.phase) * 18;
        ctx.beginPath();
        ctx.arc(p.x, yy, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.55;
        ctx.fill();
        ctx.globalAlpha = 1;
      });
    }
    function frame() {
      t += 16;
      ctx.clearRect(0, 0, w, h);
      var grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, "#1f1912");
      grad.addColorStop(1, "#17130f");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      drawRings();
      drawParticles();
      if (!reduceMotion) requestAnimationFrame(frame);
    }
    frame();
  }

  /* ---------- Forms: contact / devis / formation ----------
     Pas de backend par défaut sur un site statique Cloudflare Pages.
     Ce script simule un envoi réussi côté client après validation.
     Pour un envoi réel : brancher une Cloudflare Pages Function (/functions/api/*)
     ou un service tiers (Web3Forms, Formspree...). Voir DEPLOY.md. */
  document.querySelectorAll("form[data-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = form.querySelector("button[type=submit]");
      var success = form.parentElement.querySelector(".form-success");
      if (btn) { btn.disabled = true; btn.textContent = "Envoi en cours..."; }
      setTimeout(function () {
        form.style.display = "none";
        if (success) success.classList.add("show");
        else alert("Merci, votre demande a bien été reçue.");
      }, 700);
    });
  });
})();

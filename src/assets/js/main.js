// =========================================================
// TAMBOUR AGENCY — main.js
// Nav, reveal-on-scroll, compteurs, hero vidéo,
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

  /* ---------- Hero vidéo ----------
     Vidéo de marque en lecture automatique, muette et en boucle.
     Respecte prefers-reduced-motion : on met en pause et on garde
     l'image poster affichée pour les utilisateurs sensibles au mouvement. */
  var heroVideo = document.querySelector(".hero-video");
  if (heroVideo) {
    if (reduceMotion) {
      heroVideo.pause();
      heroVideo.removeAttribute("autoplay");
    } else {
      var playPromise = heroVideo.play();
      if (playPromise && playPromise.catch) {
        playPromise.catch(function () { /* autoplay bloqué par le navigateur : le poster reste affiché */ });
      }
    }
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

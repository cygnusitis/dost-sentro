/* DOST-SENTRO - global script.js
 * Loaded on every page with: <script src="script.js" defer></script>
 * (the Tailwind CDN <script> stays in each <head> and loads first).
 */
(function () {
	"use strict";

	/* ---- Tailwind (Play CDN) theme configuration ------------------------ */
				var tailwindConfig = {
					darkMode: "class",
					theme: {
						extend: {
							colors: {
								"surface-variant": "#dae2fd",
								"inverse-on-surface": "#eef0ff",
								"secondary-container": "#5199fe",
								"on-error-container": "#93000a",
								"on-primary-fixed": "#001849",
								"tertiary": "#180d00",
								"secondary-fixed": "#d6e3ff",
								"on-error": "#ffffff",
								"tertiary-fixed": "#ffdead",
								"on-tertiary-fixed-variant": "#604100",
								"tertiary-container": "#332100",
								"surface-container-lowest": "#ffffff",
								"surface-container-high": "#e2e7ff",
								"on-primary-container": "#738aca",
								"on-secondary": "#ffffff",
								"on-primary-fixed-variant": "#2d447f",
								"on-secondary-fixed-variant": "#00468b",
								"error-container": "#ffdad6",
								"primary-container": "#00205b",
								"surface-bright": "#faf8ff",
								"on-background": "#131b2e",
								"surface-dim": "#d2d9f4",
								"surface-container-highest": "#dae2fd",
								"primary-fixed": "#dae2ff",
								"on-tertiary-fixed": "#281900",
								"on-tertiary": "#ffffff",
								"primary": "#000d2f",
								"outline": "#757681",
								"surface-container": "#eaedff",
								"on-surface": "#131b2e",
								"tertiary-fixed-dim": "#ffba3b",
								"surface-tint": "#455c99",
								"primary-fixed-dim": "#b2c5ff",
								"error": "#ba1a1a",
								"on-primary": "#ffffff",
								"on-surface-variant": "#444650",
								"on-secondary-fixed": "#001b3d",
								"surface-container-low": "#f2f3ff",
								"on-secondary-container": "#003063",
								"outline-variant": "#c5c6d1",
								"surface": "#faf8ff",
								"inverse-surface": "#283044",
								"secondary-fixed-dim": "#a8c8ff",
								"on-tertiary-container": "#b98100",
								"background": "#faf8ff",
								"inverse-primary": "#b2c5ff",
								"secondary": "#005db5"
							},
							borderRadius: {
								DEFAULT: "0.125rem",
								lg: "0.25rem",
								xl: "0.5rem",
								full: "0.75rem"
							},
							spacing: {
								"space-xs": "0.25rem",
								"space-lg": "1.5rem",
								"gutter-desktop": "2rem",
								"space-sm": "0.5rem",
								"margin-tablet": "2rem",
								"space-xl": "2rem",
								margin: "1.5rem",
								"space-md": "1rem",
								"margin-desktop": "3rem",
								"gutter-mobile": "1rem",
								gutter: "1.5rem"
							},
							fontFamily: {
								"display-lg": ["Poppins", "sans-serif"],
								"display-lg-mobile": ["Poppins", "sans-serif"],
								"headline-xl": ["Poppins", "sans-serif"],
								"headline-xl-mobile": ["Poppins", "sans-serif"],
								"headline-lg": ["Montserrat", "sans-serif"],
								"headline-md": ["Montserrat", "sans-serif"],
								"headline-sm": ["Montserrat", "sans-serif"],
								"label-lg": ["Poppins", "sans-serif"],
								"label-md": ["Poppins", "sans-serif"],
								"label-sm": ["Poppins", "sans-serif"],
								"body-lg": ["Poppins", "sans-serif"],
								"body-md": ["Poppins", "sans-serif"],
								"body-sm": ["Poppins", "sans-serif"]
							},
							fontSize: {
								"label-lg": ["0.875rem", {
									lineHeight: "1.4",
									letterSpacing: "0.02em",
									fontWeight: "600"
								}],
								"display-lg-mobile": ["2.25rem", {
									lineHeight: "1.2",
									letterSpacing: "-0.02em",
									fontWeight: "700"
								}],
								"label-md": ["0.75rem", {
									lineHeight: "1.4",
									letterSpacing: "0.04em",
									fontWeight: "600"
								}],
								"headline-xl": ["2.5rem", {
									lineHeight: "1.2",
									letterSpacing: "-0.02em",
									fontWeight: "700"
								}],
								"display-lg": ["3.5rem", {
									lineHeight: "1.15",
									letterSpacing: "-0.025em",
									fontWeight: "700"
								}],
								"headline-lg": ["2rem", {
									lineHeight: "1.25",
									letterSpacing: "-0.015em",
									fontWeight: "600"
								}],
								"body-sm": ["0.875rem", {
									lineHeight: "1.5",
									letterSpacing: "0.005em",
									fontWeight: "400"
								}],
								"headline-md": ["1.5rem", {
									lineHeight: "1.3",
									letterSpacing: "-0.01em",
									fontWeight: "600"
								}],
								"body-lg": ["1.125rem", {
									lineHeight: "1.6",
									letterSpacing: "0em",
									fontWeight: "400"
								}],
								"headline-xl-mobile": ["1.875rem", {
									lineHeight: "1.25",
									letterSpacing: "-0.015em",
									fontWeight: "700"
								}],
								"headline-sm": ["1.25rem", {
									lineHeight: "1.4",
									letterSpacing: "0em",
									fontWeight: "600"
								}],
								"body-md": ["1rem", {
									lineHeight: "1.55",
									letterSpacing: "0em",
									fontWeight: "400"
								}],
								"label-sm": ["0.6875rem", {
									lineHeight: "1.3",
									letterSpacing: "0.06em",
									fontWeight: "700"
								}]
							}
						}
					}
				};
		

	/* ---- Apply configuration -------------------------------------------- */
	// Fonts: titles/display -> Poppins, secondary headings -> Montserrat, body -> Poppins.
	if (window.tailwind) {
		window.tailwind.config = tailwindConfig;
		// Because this file is deferred, nudge the Tailwind CDN to rebuild with the custom theme.
		document.documentElement.classList.add("tw-ready");
	}

	/* ---- Mobile burger menu ----------------------------------------------- */
	function initMobileNav() {
		var toggle = document.getElementById("nav-toggle");
		var nav = document.getElementById("site-nav");
		if (!toggle || !nav) return;

		function setOpen(open) {
			nav.classList.toggle("is-open", open);
			toggle.classList.toggle("is-open", open);
			toggle.setAttribute("aria-expanded", open ? "true" : "false");
		}

		toggle.addEventListener("click", function (e) {
			e.stopPropagation();
			setOpen(!nav.classList.contains("is-open"));
		});
		nav.addEventListener("click", function (e) {
			if (e.target.closest("a")) setOpen(false);
		});
		document.addEventListener("click", function (e) {
			if (!nav.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
		});
		document.addEventListener("keydown", function (e) {
			if (e.key === "Escape") setOpen(false);
		});
		window.addEventListener("resize", function () {
			if (window.innerWidth >= 768) setOpen(false);
		});
	}

	initMobileNav();
})();

import gsap from "gsap";

function initMouseFollower() {
  if (typeof window !== "undefined") {
    window.addEventListener("mousemove", (e) => {
      gsap.quickTo(".magic-mouse", "x", { ease: "power3" })(e.pageX);
      gsap.quickTo(".magic-mouse", "y", { ease: "power3" })(e.pageY);
    });
  }
}

function setInitialStateAnimations() {
  return gsap
    .timeline()
    .set(".text-slide-up, .name .char", { y: "101%" })
    .set(".horizontal-line", { width: 0 })
    .set(".scroll, .preloader-heading span, .bio", { autoAlpha: 0 })
    .set(".qr", { x: "200%", rotate: 90 });
}

function initPreloader() {
  const columnPerDigit =
    document.querySelectorAll(".preloader-percent-last-digits span").length - 1;
  const yOffset = `${-100 * columnPerDigit}%`;

  return gsap
    .timeline()
    .to(".preloader-heading span", {
      y: 0,
      stagger: 0.1,
      duration: 1.5,
      autoAlpha: 1,
      ease: "power4.out",
    })
    .to(".preloader-percent-last-digits", {
      y: yOffset,
      ease: "power2.inOut",
      duration: 2,
    })
    .to(
      ".preloader-percent-mid-digits",
      { y: yOffset, ease: "power2.inOut", duration: 3 },
      "<",
    )
    .to(
      ".preloader-percent-first-digits",
      { y: 0, ease: "power2.inOut", duration: 1.75, delay: 2 },
      "<",
    )
    .to(".preloader-progress", {
      width: "65%",
      duration: 1.5,
      ease: "power2.out",
    })
    .to(".preloader-progress", {
      width: "100%",
      autoAlpha: 0,
      duration: 0.5,
      ease: "power3.out",
    })
    .to(".preloader-bg-top", { top: "-50%", duration: 1, ease: "power4.inOut" })
    .to(
      ".preloader-bg-bottom",
      { top: "100%", duration: 1, ease: "power4.inOut" },
      "<",
    )
    .set(".preloader", { display: "none" });
}

function initTopHeadingSection() {
  return gsap
    .timeline()
    .to(".horizontal-line", {
      width: "100%",
      duration: 1.5,
      stagger: 0.15,
      ease: "power4.inOut",
    })
    .to(
      ".vertical-line",
      {
        bottom: 0,
        duration: 1.5,
        stagger: 0.15,
        ease: "power4.inOut",
      },
      "<",
    )
    .to(".text-slide-up", {
      y: 0,
      duration: 0.25,
      stagger: 0.1,
      ease: "power3.out",
    });
}

function initHeroSection() {
  return gsap
    .timeline()
    .to(
      ".name .char",
      { y: 0, delay: 0.1, stagger: 0.1, duration: 0.75, ease: "circ.out" },
      "<",
    )
    .to(".bio", { autoAlpha: 1, duration: 0.35 })
    .to(".qr", { x: 0, rotate: 0, duration: 1.5, ease: "power2" })
    .to(".scroll-it", { autoAlpha: 1, delay: 0.1, ease: "power4.out" })
    .to(".scroll", { autoAlpha: 1, duration: 0.75, ease: "power4.out" }, "<");
}

export function initGlobalAnimations() {
  initMouseFollower();

  const tl = gsap.timeline();
  tl.add(setInitialStateAnimations())
    .delay(0.5)
    .add(initPreloader())
    .add(initTopHeadingSection())
    .add(initHeroSection());
}

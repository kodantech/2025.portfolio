import gsap from "gsap";

export const initPreloader = async () => {
  const tl = gsap.timeline();

  await new Promise((r) => setTimeout(r, 500));

  const columnPerDigit =
    document.querySelectorAll(".last-digits span").length - 1;
  const yOffset = `${-100 * columnPerDigit}%`;

  tl.set(".heading span", { autoAlpha: 0 })

    .to(".heading span", {
      y: 0,
      stagger: 0.1,
      duration: 1.5,
      autoAlpha: 1,
      ease: "power4.out",
    })

    .to(".last-digits", { y: yOffset, ease: "power2.inOut", duration: 2 })

    .to(".mid-digits", { y: yOffset, ease: "power2.inOut", duration: 3 }, "<")

    .to(
      ".first-digits",
      { y: 0, ease: "power2.inOut", duration: 1.75, delay: 2 },
      "<",
    )

    .to(".progress", { width: "65%", duration: 1.5, ease: "power2.out" })

    .to(".progress", {
      width: "100%",
      autoAlpha: 0,
      duration: 0.5,
      ease: "power3.out",
    })

    .to(".top-bg", { top: "-50%", duration: 1, ease: "power4.inOut" })

    .to(".bottom-bg", { top: "100%", duration: 1, ease: "power4.inOut" }, "<")

    .to(".preloader", { display: "none" });
};

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const PinAnimation = ({ children, className, id }) => {
  useEffect(() => {
    let pinGroups = gsap.utils.toArray(".pin-group");
    let pinGroupContent = gsap.utils.toArray(".pin-group > *");

    pinGroups.forEach((pingroup) => {
      ScrollTrigger.create({
        trigger: pingroup,
        start: "center center",
        end: "+=" + window.innerHeight / 2,
      });
    });

    gsap.set(pinGroupContent, {
      opacity: 0,
      y: 100,
    });

    const enterConfig = { y: 0, opacity: 1, duration: 0.4 };

    pinGroupContent.forEach((e) => {
      ScrollTrigger.create({
        trigger: e,
        start: "top 100%",
        end: "bottom 0%",
        onEnter: () => gsap.to(e, enterConfig),
        onEnterBack: () => gsap.to(e, enterConfig),
        onLeave: () => gsap.to(e, { y: -100, opacity: 0, duration: 0.4 }),
        onLeaveBack: () => gsap.to(e, { y: 100, opacity: 0, duration: 0.4 }),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className={`pin-group ${className}`} id={id}>
      {children}
    </div>
  );
};

export default PinAnimation;

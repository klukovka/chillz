import PinAnimation from "../../../components/PinAnimation";
import WorkflowItem from "./WorkflowItem";

export default function WorkflowSection() {
  const steps = [
    {
      title: "Deep Dive",
      subtitle: "🌊 Before we make waves, we need to know the tides!",
      description:
        "We take a deep dive into your niche, analyze competitors, and gather insights. This way, we don’t just scratch the surface—we explore every hidden treasure to get you the best results.",
      style: { color: "#7DC8F7" },
    },
    {
      title: "Shell & Tell",
      subtitle: "🐚 Let’s open up and shell out some ideas! ",
      description:
        "We sit down, sip some virtual coconut water, and listen. We want to understand your business as if it were our own. You talk, we take notes (a lot of them), and together, we find the best way to bring your vision to life.  (Let’s get real—you talk, we listen. Over coffee, cocktails, or a virtual hangout, we’ll break down your brand’s vision and goals. No corporate blah-blah, just a chill convo where the best ideas spark.)",
      primary: true,
    },
    {
      title: "Let’s Get Crackin’!",
      subtitle:
        "🦀 Time to crack some creative shells and cook up something amazing!",
      description:
        "Now it’s time to mix up something legendary! Depending on your needs, we craft your strategy, visuals, or whatever else your brand craves. No cookie-cutter solutions—only tailor-made creativity with a spicy twist.",
      style: { color: "#F94C29" },
    },
    {
      title: "Tide Guide",
      subtitle: "⚓ Smooth sailing starts with a solid plan!",
      description:
        "We don’t just hand you a bunch of ideas—we present a clear, actionable roadmap. Whether it’s your brand’s communication plan, content strategy, or creative concept, we make sure you know exactly what steps to take next.",
      style: { color: "#9B4DFF" },
    },
    {
      title: "Crab Check",
      subtitle: "🛟 Even the best yachts need a check-up!",
      description:
        "We don’t just drop the mic and bounce. We track the results, fine-tune where needed, and keep you ahead of the game. Because real success isn’t just about the launch—it’s about staying on top.",
      style: { color: "#EF4B8D" },
    },
  ];
  return (
    <>
      <PinAnimation>
        <h1>our workflow 🌴</h1>
      </PinAnimation>
      {steps.map((item, index) => (
        <PinAnimation key={`workflow_item_${index}`}>
          <WorkflowItem item={item} />
        </PinAnimation>
      ))}
    </>
  );
}

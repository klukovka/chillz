import Matter from "matter-js";
import { useEffect, useRef } from "react";

const PhysicsContainer = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);

  useEffect(() => {
    const engine = Matter.Engine.create();
    engineRef.current = engine;
    const { world } = engine;

    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: Math.min(window.innerWidth, 780),
        height: 400,
        wireframes: false,
        background: "transparent",
      },
    });

    const boxA = Matter.Bodies.rectangle(400, 200, 80, 80);
    const ballA = Matter.Bodies.circle(380, 100, 40, { restitution: 0.8 });
    const ballB = Matter.Bodies.circle(460, 10, 40, { restitution: 0.8 });
    const ground = Matter.Bodies.rectangle(400, 380, 810, 1, {
      isStatic: true,
      render: {
        fillStyle: "transparent",
        lineWidth: 0,
      },
    });

    Matter.Composite.add(world, [boxA, ballA, ballB, ground]);

    Matter.Render.run(render);
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    return () => {
      Matter.Render.stop(render);
      Matter.World.clear(world);
      Matter.Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, [window.innerWidth]);

  return (
    <div ref={sceneRef} style={{ display: "flex", justifyContent: "end" }} />
  );
};

export default PhysicsContainer;

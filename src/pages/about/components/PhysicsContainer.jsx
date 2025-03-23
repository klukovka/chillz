import Matter from "matter-js";
import { useCallback, useEffect, useRef, useState } from "react";

const PhysicsContainer = ({ elements = [], height = 400, className }) => {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const renderRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: Math.min(window.innerWidth - 100, 800),
  });

  // Function to update dimensions on resize
  const updateDimensions = useCallback(() => {
    setDimensions({
      width: Math.min(window.innerWidth - 100, 800),
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 1 }
    );

    if (sceneRef.current) observer.observe(sceneRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !elements || elements.length === 0) return;

    const { width } = dimensions;

    // Clean up old simulation if it exists
    if (engineRef.current) {
      Matter.Render.stop(renderRef.current);
      Matter.World.clear(engineRef.current.world);
      Matter.Engine.clear(engineRef.current);
      renderRef.current.canvas.remove();
      renderRef.current.textures = {};
    }

    // Create Matter.js engine and world
    const engine = Matter.Engine.create();
    engineRef.current = engine;
    const { world } = engine;

    // Create renderer
    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: width,
        height: height,
        wireframes: false,
        background: "transparent",
      },
    });
    renderRef.current = render;

    // Create physics-based elements dynamically
    const elementBodies = elements.map((element) => {
      const itemHeight = (element.height * dimensions.width) / 800;
      return Matter.Bodies.rectangle(
        (element.offset * dimensions.width) / 800, // Spread items across columns
        element.fallHeight - height, // Staggered heights
        (element.width * dimensions.width) / 800, // Width
        itemHeight, // Height
        {
          restitution: 0.2,
          chamfer: { radius: itemHeight / 2 }, // Rounded corners
          render: {
            fillStyle: "#ffffff", // White background
            strokeStyle: "#9B4DFF", // Purple border
            lineWidth: 2,
          },
          label: element.text, // Store text inside label
        }
      );
    });

    // Create boundary walls to prevent elements from falling out
    const walls = [
      Matter.Bodies.rectangle(width / 2, height, width, 1, {
        isStatic: true,
        render: { fillStyle: "transparent", lineWidth: 0 },
      }), // Floor
      Matter.Bodies.rectangle(0, height / 2, 1, height, {
        isStatic: true,
        render: { fillStyle: "transparent", lineWidth: 0 },
      }), // Left wall
      Matter.Bodies.rectangle(width, height / 2, 1, height, {
        isStatic: true,
        render: { fillStyle: "transparent", lineWidth: 0 },
      }), // Right wall
    ];

    Matter.Composite.add(world, [...walls, ...elementBodies]);

    // Custom rendering function to draw text on objects
    Matter.Events.on(render, "afterRender", function () {
      const ctx = render.context;
      const fontSize = dimensions.width * 0.03;
      const font = `700 ${fontSize}px 'Montserrat Alternates'`;
      ctx.font = font;
      ctx.fillStyle = "#9B4DFF"; // Purple text
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      elementBodies.forEach((body) => {
        const { x, y } = body.position;
        const lines = body.label.split("\n"); // Split text into lines
        const lineHeight = fontSize + 2;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(body.angle); // Rotate text with the body

        lines.forEach((line, index) => {
          ctx.fillText(line, 0, (index - lines.length / 2 + 0.5) * lineHeight);
        });
        ctx.restore();
      });
    });

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
  }, [isVisible, dimensions, elements, height]);

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [updateDimensions]);

  return (
    <div
      ref={sceneRef}
      style={{ display: "flex", justifyContent: "end" }}
      className={className}
    />
  );
};

export default PhysicsContainer;

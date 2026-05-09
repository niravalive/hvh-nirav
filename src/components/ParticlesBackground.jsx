import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // optional loaded handler
  };

  const options = {
    fullScreen: { enable: true, zIndex: -1 },
    background: {
      color: {
        value: "#ffffff",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: false, // Stopped generating new items per click
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        push: {
          quantity: 2,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#e7be83",
      },
      links: {
        enable: false, // Turn off connecting bols/lines
      },
      move: {
        direction: "top", // Float upwards gently
        enable: true,
        outModes: {
          default: "out", // They flow out of the screen and reappear
        },
        random: true,
        speed: 1.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 20, // Reduced number for larger floating items
      },
      opacity: {
        value: 0.1, // Subtle floating effect
      },
      rotate: {
        value: 0,
        random: true,
        animation: {
          enable: true,
          speed: 2,
        },
      },
      shape: {
        type: "image",
        options: {
          image: [
            // Armchair/Sofa SVG
            {
              src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23e7be83' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M20 9V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2'/><path d='M2 13v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6'/><path d='M2 16h20'/></svg>",
              width: 32,
              height: 32,
            },
            // Wood/Box SVG
            {
              src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23e7be83' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='m7.5 4.27 9 5.15'/><path d='M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z'/><path d='m3.3 7 8.7 5 8.7-5'/><path d='M12 22V12'/></svg>",
              width: 32,
              height: 32,
            },
            // Lamp/Light SVG
            {
              src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23e7be83' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M8 2h8l4 10H4L8 2Z'/><path d='M12 12v6'/><path d='M8 22h8'/></svg>",
              width: 32,
              height: 32,
            },
            // Geometric Block
            {
              src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23e7be83' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='3' y='3' width='18' height='18' rx='2' ry='2'/></svg>",
              width: 32,
              height: 32,
            }
          ],
        },
      },
      size: {
        value: { min: 15, max: 25 }, // Larger size for the shapes
      },
    },
    detectRetina: true,
  };

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export default ParticlesBackground;

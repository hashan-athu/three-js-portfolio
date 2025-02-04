import { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";

const About = () => {
  const globeRef = useRef();
  const gData = Array.from({ length: 5 }, (_, i) => ({
    lat: 7.8731, // Latitude of Sri Lanka
    lng: 80.7718, // Longitude of Sri Lanka
    maxR: 20,
    propagationSpeed: 20,
    repeatPeriod: 1000 + i * 500, // Staggered ripple effect
  }));

  const colorInterpolator = (t) => `rgba(255,100,50,${Math.sqrt(1 - t)})`;

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.pointOfView(
        { lat: 7.8731, lng: 80.7718, altitude: 2 },
        3000 // Animation duration (ms)
      );
    }
  }, []);

  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("hello@hashanathurugiriya.me");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Hi, I&apos;m Hashan Athurugiriya</p>
              <p className="grid-subtext">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptates porro animi architecto minima, eius inventore nostrum
                excepturi deleniti quos? Suscipit neque eveniet iste quaerat
                eius ab deleniti esse cupiditate dolores.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="gird-2"
              className="w-full sm:w-max-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
                reiciendis delectus ratione alias cum vero facere.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl wo-full sm:h-[326px] h-fit flex justify-contern items-center">
              <Globe
                ref={globeRef}
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.jpg"
                ringsData={gData}
                ringColor={() => colorInterpolator}
                ringMaxRadius="maxR"
                ringPropagationSpeed="propagationSpeed"
                ringRepeatPeriod="repeatPeriod"
              />
            </div>
            <div>
              <p className="grid-headtext">I work remotely from Sri Lanka</p>
              <p className="grid-subtext">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                totam harum illo dolorem rem id ducimus consequatur.
              </p>
              <a href="#contact" className="w-fit">
                <Button
                  name="Contact Me"
                  isBeam
                  containerClass="w-full mt-10"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                possimus cupiditate cumque perferendis iure eum aperiam veniam,
                et dolorem explicabo architecto aspernatur labore recusandae
                quod minus, necessitatibus doloribus! Illo, eum!
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact Me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="Copy"
                />
                <p className="lg:text-lg md:text-xl text-gray_gradient text-white">
                  hello@hashanathurugiriya.me
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

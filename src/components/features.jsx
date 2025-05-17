import BentoCard from "./BentoCard";

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Into the Metagame Layer
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Immerse yourself in a rich and ever-expanding universe where a
            vibrant array of products converge into an interconnected overlay
            experience on your world.
          </p>
        </div>
        <div
          className="border-hsla relative mb-7 h-96 overflow-hidden
         rounded-md md:h-[65vh] w-full"
        >
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                redi<b>n</b>t
              </>
            }
            description="A cross-platform metagame app, turning your
        activities across Web2 and Web3 games into a rewarding"
            isComingSoon
          />
        </div>
        <div className="grid h-[135h] grid-cols-2 grid-rows-3 gap-7">
          <div className="bentro-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  zigma<b>n</b>t
                </>
              }
              description="The NFT collection merging Zentry’s IP, AI, and gaming—pushing the 
              boundaries of NFT innovation."
            />
          </div>

          <div className="bentro-tilt_1 row-span-1 ms-32 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-3.mp4"
              title={
                <>
                  n<b>e</b>xus
                </>
              }
              description="The metagame portal uniting humans & AI to play, compete and earn,
               shaping profiles that reflect their legacy."
            />
          </div>
          <div className="bentro-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="videos/feature-4.mp4"
              title={
                <>
                  az<b>u</b>l
                </>
              }
              description="The agent of agents elevating agentic AI experience to be more fun and productive."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

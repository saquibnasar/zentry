const About = () => {
  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-10px">
          Welcom to Zentry
        </h2>
        <div className="mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]">
          Disc<b>o</b>ver the the world&apos;s <br /> l<b>a</b>rgest shared
          adventure
        </div>

        <div className="about-subtext">
          <p>
            The Game of games begins-your life, now an epic MMORPG Zentry unites
            every player from countless games and platfroms
          </p>
        </div>
      </div>
      <div className="h-dvh">
        <div className="mask-clip">
          <img
            className="absolute left-0 top-0 size-full object-cover"
            src="img/about.webp"
            alt="background"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

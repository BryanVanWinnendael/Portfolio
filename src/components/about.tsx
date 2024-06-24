const About = () => {
  const calculateAge = () => {
    const birthDate = new Date("2002-03-29");
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDifference = currentDate.getMonth() - birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  const phrases = [
    "my name is Bryan Van Winnendael,",
    `I'm a ${calculateAge()} year old full stack developer based in Belgium`,
  ];

  return (
    <div id="about" className="text-secondary font-medium h-screen">
      <article className="w-full h-full flex flex-col justify-center items-start p-7 sm:max-w-[90%]">
        <p className="lg:text-6xl md:text-5xl text-3xl leading-none tracking-tight font-normal">
          My name is Bryan Van Winnendael. I&apos;m a {calculateAge()} year old
          full stack developer based in Belgium. My work is driven by a passion
          for innovation and a commitment to pushing the boundaries of what is
          possible. I aspire to create meaningful work that solves a problem.
        </p>
      </article>
    </div>
  );
};

export default About;

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
        <p className="lg:text-7xl md:text-5xl text-3xl tracking-tight font-normal">
          My name is Bryan Van Winnendael. I&apos;m a {calculateAge()} year old
          full stack developer based in Belgium. My work is driven by a desire
          to create impactful solutions that address real-world problems. I
          strive to blend creativity with technical expertise, crafting
          meaningful projects that make a difference.
        </p>
      </article>
    </div>
  );
};

export default About;

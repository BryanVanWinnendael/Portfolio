"use client"

import Copy from "@/components/copy"
import Link from "next/link"

const experiences = [
  {
    title: "JAVA DEVELOPER",
    company: "YPTO",
    href: "https://www.ypto.be/en/",
    date: "JUNE 2025 — PRESENT",
    description: [
      "Java Developer for the Commercial Channels & Products team.",
      "Developing backend systems using Java, Spring Boot, SQL, Maven, Git, JUnit, SonarQube, and Jenkins.",
    ],
  },
  {
    title: "INTERN SOFTWARE DEVELOPER",
    company: "IMEC",
    href: "https://www.imec-int.com/en",
    date: "MARCH 2023 — JUNE 2023",
    description: [
      "Developed the backend infrastructure with FastAPI and Python.",
      "Architected and implemented the frontend interface using Next.js.",
      "Collaborated with team members to gather requirements, refine specifications, and iterate on features throughout the development lifecycle.",
    ],
  },
]

const works = [
  {
    name: "Netweb",
    description: "web application for",
    link: "Imec",
    href: "https://www.imec-int.com/en",
    suffix: "to manage network devices.",
  },
  {
    name: "Noted",
    description: "note taking app inspired by Notion and Obsidian.",
  },
  {
    name: "Point Cloud Processor",
    description: "desktop application for detecting planes in a point cloud.",
  },
]

const Section = ({
  title,
  children,
  className = "",
}: {
  title: string
  children: React.ReactNode
  className?: string
}) => {
  return (
    <section className={className}>
      <Copy delay={0.5}>
        <h2 className="mb-4 tracking-wide text-muted">{title}</h2>
      </Copy>

      {children}
    </section>
  )
}

const About = () => {
  return (
    <main className="min-h-screen w-full bg-white px-4 pt-16 pb-32 text-xs leading-4 text-black md:px-6 md:pt-24 md:pb-40">
      <div className="mx-auto w-full max-w-400">
        <header className="mb-14 md:mb-20">
          <Copy>
            <h1 className="text-4xl tracking-tight md:text-7xl lg:text-8xl">
              <span className="bg-accent text-white">BRYAN</span>
              <br />
              VAN WINNENDAEL
            </h1>
          </Copy>
        </header>

        <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-12 md:gap-y-16">
          <Section title="BIO" className="md:col-span-3">
            <Copy>
              <p className="max-w-xs">
                Software developer based in Winksele, Belgium.
              </p>
            </Copy>
          </Section>

          <Section title="EXPERIENCE" className="md:col-span-5">
            <div className="space-y-8">
              {experiences.map((experience) => (
                <Copy key={experience.company}>
                  <div>
                    <p>
                      {experience.title},{" "}
                      <Link
                        href={experience.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-accent text-white underline underline-offset-2"
                      >
                        {experience.company}
                      </Link>
                      <span className="ml-2 text-muted">{experience.date}</span>
                    </p>

                    <div className="mt-2 space-y-1 pl-4 leading-relaxed font-medium">
                      {experience.description.map((item) => (
                        <p key={item}>— {item}</p>
                      ))}
                    </div>
                  </div>
                </Copy>
              ))}
            </div>
          </Section>

          <Section title="SELECTED WORKS" className="md:col-span-4">
            <Copy>
              <div className="space-y-2">
                {works.map((work, index) => (
                  <p key={work.name}>
                    <span className="text-muted">
                      ({String(index + 1).padStart(2, "0")})
                    </span>{" "}
                    <span>{work.name}</span>, {work.description}{" "}
                    {work.link && (
                      <>
                        <Link
                          href={work.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-accent text-white underline underline-offset-2"
                        >
                          {work.link}
                        </Link>{" "}
                      </>
                    )}
                    {work.suffix}
                  </p>
                ))}
              </div>
            </Copy>
          </Section>

          <Section title="EDUCATION" className="md:col-span-4">
            <Copy>
              <div className="space-y-2">
                <p>
                  APPLIED COMPUTER SCIENCE,{" "}
                  <Link
                    href="https://www.ucll.be/en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent text-white underline underline-offset-2"
                  >
                    UCLL
                  </Link>
                </p>

                <p>
                  Studied applied computer science for three years and graduated
                  in 2023 <span className="text-muted">cum laude</span>.
                </p>
              </div>
            </Copy>
          </Section>
        </div>
      </div>
    </main>
  )
}

export default About

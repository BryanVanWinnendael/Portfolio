"use client";
import ProjectsGrid from "@/components/projectsGrid";
import HomeAnimation from "@/components/homeAnimation";
import Contact from "@/components/contact";
import { useStates } from "@/context/stateContext";

export default function Home() {
  const { setActiveNav } = useStates();
  setActiveNav("home");
  return (
    <>
      <HomeAnimation />
      <ProjectsGrid />
      <Contact />
    </>
  );
}

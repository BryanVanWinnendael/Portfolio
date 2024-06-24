"use client";
import { useStates } from "@/context/stateContext";
import { Link } from "next-view-transitions";

const BackNavigation = ({ title }: { title: string }) => {
  const { activeNav, setActiveNav } = useStates();
  const isArchived = activeNav === "archive";

  if (activeNav === "home") setActiveNav("project");

  return (
    <div className={`flex gap-1 px-5 rounded-lg bg-primary pt-5 pb-3`}>
      <Link
        href={
          (isArchived ? "/archive#projects-" : "/#projects-") +
          title.replace(/\s/g, "").toLowerCase()
        }
        className="leading-7 [&:not(:first-child)]:mt-6 underline text-blue-500"
      >
        {isArchived ? "archive" : "select work"}
      </Link>
      <p>/</p>
      <p className="scroll-m-20 text-xl font-semibold tracking-tight">
        {title}
      </p>
    </div>
  );
};

export default BackNavigation;

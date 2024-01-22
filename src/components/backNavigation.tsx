const BackNavigation = ({ title }: { title: string }) => {
  return (
    <div className="flex gap-1 mx-5 mt-14">
      <a href={"/#projects-" + title.replace(/\s/g, '').toLowerCase()} className="leading-7 [&:not(:first-child)]:mt-6 underline">
        Projects
      </a>
      <p>/</p>
      <p className="scroll-m-20 text-xl font-semibold tracking-tight">{title}</p>
    </div>
  )
}

export default BackNavigation
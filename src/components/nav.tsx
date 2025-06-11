"use client"

import TransitionLink from "./transitionLink"

export default function Nav() {
  return (
    <nav className="w-full fixed top-0 z-50 p-4">
      <ul className="flex gap-1 text-black font-semibold">
        <li className="flex w-fit">
          <TransitionLink href="/" label="About" />
        </li>
        <p>/</p>
        <li className="flex w-fit">
          <TransitionLink href="/works" label="Works" />
        </li>
        <p>/</p>
        <li className="flex w-fit">
          <TransitionLink href="/contact" label="Contact" />
        </li>
      </ul>
    </nav>
  )
}

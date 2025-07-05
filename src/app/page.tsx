import About from "@/components/about"
import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "About | Bryan Van Winnendael",
  description: "Portfolio",
}
const Page = () => {
  return <About />
}

export default Page

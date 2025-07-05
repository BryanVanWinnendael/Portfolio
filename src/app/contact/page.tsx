import Contact from "@/components/contact"
import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "Contact | Bryan Van Winnendael",
  description: "Portfolio",
}
const Page = () => {
  return <Contact />
}

export default Page

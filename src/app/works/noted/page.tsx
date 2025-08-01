import Noted from "@/components/works/noted"
import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "Noted | Bryan Van Winnendael",
  description: "Portfolio",
}
const Page = () => {
  return <Noted />
}

export default Page

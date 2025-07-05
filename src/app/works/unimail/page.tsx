import UniMail from "@/components/works/uniMail"
import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "UniMail | Bryan Van Winnendael",
  description: "Portfolio",
}
const Page = () => {
  return <UniMail />
}

export default Page

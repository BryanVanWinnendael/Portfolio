import Harbor from "@/components/works/harbor"
import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "Harbor | Bryan Van Winnendael",
  description: "Portfolio",
}
const Page = () => {
  return <Harbor />
}

export default Page

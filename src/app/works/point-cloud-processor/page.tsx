import PointCloudProcessor from "@/components/works/pointCloudProcessor"
import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "Point Cloud Processor | Bryan Van Winnendael",
  description: "Portfolio",
}
const Page = () => {
  return <PointCloudProcessor />
}

export default Page

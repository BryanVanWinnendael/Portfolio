import { Metadata } from "next/types"
import ShoppingList from "@/components/works/shoppingList"

export const metadata: Metadata = {
  title: "Shopping List | Bryan Van Winnendael",
  description: "Portfolio",
}
const Page = () => {
  return <ShoppingList />
}

export default Page

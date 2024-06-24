import Archive from "@/components/archive";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Archive - Bryan Van Winnendael",
  description: "Portfolio - Bryan Van Winnendael",
};

const Page = () => {
  const msg = "%c Hi 👋! Welcome to my portfolio!";
  const stylesArray = [
    "font-size: 12px",
    "background: #000000",
    "display: inline-block",
    "color: #ffffff",
    "padding: 8px 19px",
    "border-radius: 8px",
    "font-weight: bold",
  ].join(";");

  console.log(msg, stylesArray);

  return <Archive />;
};

export default Page;

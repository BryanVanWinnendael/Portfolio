import type { Metadata } from "next"
import "./globals.css"
import Nav from "@/components/nav"
import localFont from "next/font/local"
import LenisWrapper from "@/components/lenisWrapper"
import Footer from "@/components/footer"

const grotesque = localFont({
  variable: "--grotesque",
  src: [
    {
      path: "../assets/fonts/HKGroteskWide-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/HKGroteskWide-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/HKGroteskWide-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/HKGroteskWide-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/HKGroteskWide-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/HKGroteskWide-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../assets/fonts/HKGroteskWide-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
})

const phemisterFont = localFont({
  variable: "--phemister",
  src: [
    {
      path: "../assets/fonts/FHPhemisterDisplayTest-RegularItalic-BF650d0aab03a84.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/FHPhemisterDisplayTest-Light-BF650d0aab40815.otf",
      weight: "100",
      style: "normal",
    },
  ],
})

export const metadata: Metadata = {
  title: "Bryan Van Winnendael",
  description: "Portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <LenisWrapper>
        <body
          className={`${grotesque.className} ${phemisterFont.style} antialiased font-semibold w-screen overflow-x-hidden`}
        >
          <Nav />
          <main className="min-h-screen w-screen">{children}</main>
          <Footer />
        </body>
      </LenisWrapper>
    </html>
  )
}

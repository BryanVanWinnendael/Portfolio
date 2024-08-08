import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import LenisWrapper from "@/components/lenisWrapper";
import { StateProvider } from "@/context/stateContext";
import { ViewTransitions } from "next-view-transitions";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Portfolio - Bryan Van Winnendael",
  description: "Portfolio - Bryan Van Winnendael",
};

const poppins = Poppins({
  weight: ["700", "400"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <LenisWrapper>
        <html lang="en" className={poppins.className}>
          <StateProvider>
            <body className="bg-secondary">
              {children}
              <Footer />
            </body>
          </StateProvider>
        </html>
      </LenisWrapper>
    </ViewTransitions>
  );
}

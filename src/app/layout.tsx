import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import LenisWrapper from "@/components/lenisWrapper";
import { StateProvider } from "@/context/stateContext";
import { ViewTransitions } from "next-view-transitions";

export const metadata: Metadata = {
  title: "Portfolio - Bryan Van Winnendael",
  description: "Portfolio - Bryan Van Winnendael",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <LenisWrapper>
        <html lang="en">
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

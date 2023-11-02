import type { Metadata } from "next";
import "@/styles/globals.css";
import NavMobile from "@/components/NavMobile";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import AuthContext from "@/lib/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Providers from "@/components/Providers";
export const metadata: Metadata = {
  title: "Real.",
  description: "Socialmedia web application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <body className="font-primary bg-background min-h-screen w-screen text-dark">
        <Providers>
          <AuthContext>
            <div className="px-[15px] md:px-0">
              <NavMobile />
              <div className="md:pl-24 lg:pl-56 my-[70px] md:my-0 w-full h-full flex items-center justify-center ">
                {children}
              </div>
            </div>
            <Navbar />
            <Toaster />
          </AuthContext>
        </Providers>
      </body>
    </html>
  );
}

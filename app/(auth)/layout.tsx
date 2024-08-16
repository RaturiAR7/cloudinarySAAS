import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cloudinary SaaS",
  description: "Upload videos to cloudinary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang='en'>
        <body>
          <div className='w-full min-h-screen h-full flex justify-center items-center'>
            {children}
          </div>
        </body>
      </html>
    </>
  );
}

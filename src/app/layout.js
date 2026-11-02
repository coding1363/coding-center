import "./globals.css";
import BinaryBackground from "@/components/BinaryBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Coding Center | Learn Today, Build Your Skills",
  description: "IT Training Institute in Chini Masjid, Saidpur, Nilphamari",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="night">
      <body className="min-h-screen relative flex justify-center bg-vsBg text-vsText overflow-x-hidden">
        {/* ২ নং সমাধান: পুরো প্রজেক্টের যেকোনো ক্লিকেবল লেখা বা বাটনে প্রথমে ব্লু থাকবে, মাউস নিলে বা ক্লিক করলে সাদা হবে */}
        <style>{`
          a, button {
            color: #38bdf8;
            transition: color 0.25s ease;
          }
          a:hover, a:active, button:hover, button:active {
            color: #ffffff !important;
          }
        `}</style>

        <BinaryBackground />

        {/* ৩ নং সমাধান: মোবাইলে পারফেক্ট থাকবে এবং ডেস্কটপেও সম্পূর্ণ স্ক্রিন জুড়ে সুন্দরভাবে খুলবে */}
        <div className="relative z-10 w-full max-w-md md:max-w-3xl lg:max-w-5xl xl:max-w-7xl min-h-screen flex flex-col bg-vsBg/85 shadow-2xl border-x border-vsBorder transition-all duration-300">
          <Header />
          <main className="flex-1 w-full px-0 md:px-6 lg:px-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
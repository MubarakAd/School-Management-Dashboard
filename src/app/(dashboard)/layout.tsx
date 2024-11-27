import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar/Navbar";
import UserCard from "@/components/UserCard/UserCard";
import Image from "next/image";
import Link from "next/link";

export default function Dashboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
      <div className=" h-screen flex ">
        <div className=" text-sm w-[14%] md:w-[8%] h-[100%] lg:w-[16%] xl:w-[14%] overflow-scroll hide-scrollbar lg:pb-4">
          <Link href={'/'} className="flex items-center justify-center gap-2 py-2 ">
          <Image src={"/logo.png"} alt={"logo"} width={28} height={28}/>
          <span className="hidden lg:block">SchoolMA</span>
          </Link>
          <Menu/>
        </div>
        <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] h-[100%] overflow-scroll hide-scrollbar bg-slate-100">
          <Navbar/>
          {children}
        </div>
      </div>

  );
}

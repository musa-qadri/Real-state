import Activity from "@/components/Activity";
import Hero from "@/components/Hero";
import Living from "@/components/Living";
import Modren from "@/components/Modren";
import Navbar from "@/components/Navbar";
import Visit from "@/components/Visit";
import Image from "next/image";

export default function Home() {
  return (
    <>

    <Hero/>
    <Modren/>
    <Living/>
    <Visit/>
    <Activity/>
    </>
  );
}

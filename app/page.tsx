import Navbar from "@/app/mandja-web/_components/navbar";
import { Communauty } from "@/components/home/communauty";
import { Culture } from "@/components/home/culture";
import { HeadLine } from "@/components/home/headline";
import { MainCarousel } from "@/components/home/main-carousel";

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="flex flex-col bg-gray-50">
        <MainCarousel />
        <Culture />
        <HeadLine/>
        <Communauty/>
      </div>
    </>    
  );
}

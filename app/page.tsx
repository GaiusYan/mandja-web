import { Culture } from "@/components/home/culture";
import { HeadLine } from "@/components/home/headline";
import { MainCarousel } from "@/components/home/main-carousel";


export default function Home() {
  return (
    <div className="flex flex-col items-center bg-gray-50 h-full">
      <MainCarousel />
      <Culture />
      <HeadLine/>
    </div>
  );
}

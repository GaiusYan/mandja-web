import { Communauty } from "@/components/home/communauty";
import { Culture } from "@/components/home/culture";
import { HeadLine } from "@/components/home/headline";
import { MainCarousel } from "@/components/home/main-carousel";
import Navbar from "@/app/mandja-web/_components/navbar";


const HomePage = () => {
    return (
        <> 
            <Navbar/>
            <div className="flex flex-col items-center bg-gray-50 h-full">
                <MainCarousel />
                <Culture />
                <HeadLine/>
                <Communauty/>
            </div>
        </>
    )
}

export default HomePage;
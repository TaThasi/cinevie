import NewsCardBento from "./NewsCardBento";
import NewsCard from "./NewsCard";

export default function Bento() {
    return (
        <div className=" flex flex-col lg:flex-row justify-start items-start w-full gap-4 lg:h-[890px]">
            <div className="w-[100%] lg:w-[70%] h-full rounded-2xl  aspect-[2/1] lg:aspect-[unset] overflow-hidden">
                <NewsCardBento title="MeTV Toons Brings Warner Bros. Classic Cartoons Together In National Weigel Broadcasting Network - Deadline" image_url="https://deadline.com/wp-content/uploads/2023/11/Wile-E.-Coyote-1-e1702010387762.jpg?w=1024"/>
            </div>
            <div className="w-[100%] lg:w-[30%] rounded-2xl flex flex-col md:flex-row lg:flex-col justify-center h-full gap-x-2 gap-y-4">
                <div className="lg:h-1/2 w-[100%] md:w-[50%] lg:w-full aspect-[2/1] lg:aspect-[unset] rounded-2xl overflow-hidden">
                    <NewsCardBento title="The Rolling Stones..." image_url="https://bloximages.newyork1.vip.townnews.com/nola.com/content/tncms/assets/v3/editorial/3/0d/30d08df2-a106-5755-a571-c4c8b01ed231/663426c86f818.image.jpg?crop=1718%2C902%2C0%2C152&resize=1200%2C630&order=crop%2Cresize"/>
                </div>
                <div className="lg:h-1/2 w-[100%] md:w-[50%] lg:w-full aspect-[2/1] lg:aspect-[unset] rounded-2xl overflow-hidden">
                    <NewsCardBento title="Yes, that's Jennifer..." image_url="https://ew.com/thmb/zot1sv4--mCUB0608CoeJV9-WDI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/JENNIFER-LOVE-HEWITT-911-050224-1-55f7766a04a4452980c7d6d04ad7d1c1.jpg" />
                </div>
            </div>
        </div>
    )
}
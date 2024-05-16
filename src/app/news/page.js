import Bento from "@/components/Bento";
import NewsCard from "@/components/NewsCard";
import NewsCardBento from "@/components/NewsCardBento";
import PaginationNews from "@/components/Pagination";
import news from "@/constant/News";
export default function NewsPage() {    
    return (
        <main>
            <section className=" bg-black">
                <div className="relative flex justify-start items-start">
                    <div className=" w-full h-full px-8 sm:px-20 pb-12 mt-10 gap-y-8 flex flex-col rounded-xl">
                        <h1 className=" font-bold text-3xl">Today news</h1>
                        <Bento />
                    </div>
                </div>
            </section>

            {/*  */}
            <section>
                <div className="relative flex justify-start items-start">
                    <div className=" w-full px-8 sm:px-20 pb-12 mt-10 gap-y-8 flex flex-col rounded-xl h-auto" >
                        <h1 className=" font-bold text-3xl">Trending news</h1>
                        
                        <div className=" flex flex-col justify-start gap-y-12">
                        {/* 0 */}
                        {news.slice(0,3).map((item, index) => (
                            <div className=" w-full h-full" key={index}>
                                <div className=" w-full lg:h-[256px] flex flex-col md:flex-row justify-between gap-8">
                                    <div className="w-full md:w-[428px] h-full rounded-2xl overflow-hidden" style={{ aspectRatio: 2 }}>
                                        <NewsCardBento image_url={item.urlToImage}/>
                                    </div>
                                        <div className=" h-full w-full md:w-[65%] flex flex-col justify-start gap-y-4 ">
                                            <h2 className=" font-bold text-2xl line-clamp-2">{item.title}</h2>
                                            <p className=" font-normal text-xl text-gray-500 line-clamp-3">
                                                {item.description}
                                            </p>
                                        </div>
                                </div>
                            </div>
                        ))}

                                
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="relative flex justify-start items-start bg-black">
                    <div className=" w-full px-8 sm:px-20 mt-10 gap-y-8 flex flex-col rounded-xl h-full justify-center">
                        <h1 className=" font-bold text-3xl">Latest news</h1>
                        <div className=" flex flex-col justify-start gap-y-12 h-full w-full">
                            <div className=" flex flex-col gap-x-[24px] w-full gap-y-14">
                                <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between gap-x-4 gap-y-16">
                                    {news.slice(0,9).map((item, index) => (
                                        <div className=" flex flex-col justify-start gap-y-2" key={index}>
                                            <div className=" w-full rounded-2xl overflow-hidden" style={{ aspectRatio: 2/1 }}>
                                                <NewsCardBento image_url={item.urlToImage}/>
                                            </div>
                                            <div className=" flex flex-col justify-start">
                                                <p className=" text-sm text-gray-500">23hr ago</p>
                                                <p className=" text-sm ">{item.title}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <PaginationNews/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
        
}
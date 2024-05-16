import { CircleArrowOutUpRight } from 'lucide-react';

export default function NewsCardBento({title, image_url}) {
    return (
        <div className="relative w-full h-full rounded-xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-black/[.4]"></div>
            <img src={image_url} alt="News image" className="w-full h-full object-cover rounded-xl" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white flex justify-between z-50">
                <div className=' w-[65%]'>
                    <h3 className="text-xl font-medium mb-2 line-clamp-2 md:line-clamp-3">{title}</h3>
                </div>
                <button className="flex items-center text-sm text-white">
                    <CircleArrowOutUpRight className="ml-1 w-8 h-8" />
                </button>
            </div>
        </div>
    );
}

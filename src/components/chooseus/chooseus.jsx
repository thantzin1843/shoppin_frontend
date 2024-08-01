export default function ChooseUs(){
    return (
        <div className="flex flex-wrap">
           <div className="sm:w-full md:w-1/3">
            <img src="/girlOne.jpg" className="rounded-xl w-full" alt="" />
           </div>
           <div className="sm:w-full md:w-2/3 px-5">
                <div className="">
                <div className="text-4xl font-semibold mb-5">Why Choose Us </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis tempora, aliquid, magnam est ratione officia dicta nobis excepturi inventore deleniti nam laudantium asperiores esse mollitia corrupti facere architecto odio magni.</p>
                <button className="border-2 mt-5 border-orange-400 px-5 py-3 rounded-full hover:bg-orange-400 transition-all duration-100 ease-out ">Shop Now</button>
                </div>
                <div className="w-full ">
                <img src="/nike.webp" className="rounded-xl w-full object-cover h-[250px] mt-[47px]" alt="" />
                </div>
           </div>
        </div>
    )
}
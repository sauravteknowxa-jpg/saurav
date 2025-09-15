function Blog(){
    return(
        <>
             <div className="w-full bg-gray-300 md:p-10  ">
                <div className=" mx-auto flex flex-col md:flex-row gap-4 bg-gray-300 p-2 md:py-20 w-full">
                        <div className="flex flex-col items-center md:items-start text-center md:text-left justify-center gap-12 md:w-1/2  p-0 md:p-6 ">
                        <h2 className="text-2xl lg:text-6xl text-left font-semibold text-black">Work Process</h2>
                        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 w-full">
                            <p className="text-xs lg:text-2xl text-gray-600">Driven by design and powered by code, I create digital interfaces that feel intuitive and perform seamlessly. Every layout, animation, and component is crafted with intention — merging usability with visual clarity,</p>
                            <p className="text-xs lg:text-2xl text-gray-600">I blend clean design with efficient code to build engaging, user-friendly web experiences that stand out.</p>
                        </div> 

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:w-1/2 gap-12 bg-gray-300 ">
                        <div className="flex flex-col items-start justify-start gap-6 bg-white shadow-2xl rounded-4xl p-8">
                                <img src="/image/R.jpg" alt="" />
                                <span className="text-2xl font-semibold">1. Research</span>
                                <p className="text-xs lg:text-2xl text-gray-600">Design meets function in every pixel, blending clarity with intuitive motion.</p>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-6 bg-white shadow-2xl rounded-4xl p-8">
                                <img src="/image/A.jpg" alt="" />
                                <span className="text-2xl font-semibold">2. Analyze</span>
                                <p className="text-xs lg:text-2xl text-gray-600">Crafting clean, thoughtful interfaces where form flows seamlessly into function and clarity.</p>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-6 bg-white shadow-2xl rounded-4xl p-8">
                                <img src="/image/D.jpg" alt="" />
                                <span className="text-2xl font-semibold">3. Design</span>
                                <p className="text-xs lg:text-2xl text-gray-600">I design seamless digital experiences with precision, purpose, and a touch of elegance.</p>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-6 bg-white shadow-2xl rounded-4xl p-8">
                                <img src="/image/L.jpg" alt="" />
                                <span className="text-2xl font-semibold">4. Launch</span>
                                <p className="text-xs lg:text-2xl text-gray-600">I craft digital products where thoughtful design meets performance-driven, responsive development.</p>
                        </div>
                    </div>

                </div>
                </div>
           
        </>
    )
}
export default Blog;
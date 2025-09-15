function About(){
    return(
        <>
            <div className="w-full flex justify-center px-8  mt-36 mb-24">
                <div className="  flex flex-col md:flex-row gap-4 bg-[#fff] p-2 md:px-20 md:py-20 w-full rounded-4xl shadow-2xl  " >
                    <div className="flex items-stretch justify-center  md:w-1/2 w-full">
                        <img
                        src="/image/Saurav2.jpg"
                        alt=""
                        className="h-auto w-auto rounded-4xl"
                        />
                    </div>
                    <div className="flex flex-col items-center md:items-start text-center md:text-left justify-center gap-12 md:w-1/2  p-0 md:p-6 ">
                        <h2 className="text-2xl lg:text-6xl text-left font-semibold text-black">I am Professional User Experience Designer</h2>
                        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 w-full">
                            <p className="text-xs lg:text-2xl">I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences.</p>
                            <p className="text-xs lg:text-2xl">I design and develop services for customers specializing creating stylish, modern websites, web services.</p>
                        </div>
                        <div className="flex flex-wrap items-center md:items-start text-center md:text-left justify-center gap-8 p-0 ">
                                <button className="flex flex-col w-48 h-15 items-center justify-center rounded-xl p-3 py-5 bg-purple-600 text-white cursor-pointer">
                                    <span className="text-2xl font-semibold">My Projects</span> 
                                </button>
                                <button className="flex flex-col w-48 h-15 items-center justify-center rounded-xl p-3 py-5 bg-white text-black hover:text-purple-600 border-2 border-slate-200 cursor-pointer">
                                    <span className="text-2xl font-semibold">Download CV</span> 
                                </button>
                        </div>
                    </div>                  
                </div>
            </div>

        </>
    )
}
export default About;
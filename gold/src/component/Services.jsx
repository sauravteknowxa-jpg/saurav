function Services(){
    return(
        <>
                <div className="w-full bg-gray-300 md:p-10  ">
                <div className=" mx-auto flex flex-col md:flex-row gap-4 bg-gray-300 p-2  md:py-20 w-full">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left justify-center gap-12 md:w-1/2  p-0 md:p-6 ">
                        <h2 className="text-2xl lg:text-6xl text-left font-semibold text-black">What I do?</h2>
                        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 w-full">
                            <p className="text-xs lg:text-3xl text-gray-500 font-semibold">I specialize in designing user experiences, crafting engaging interfaces, and building robust web applications that deliver value and usability.</p>
                            <p className="text-xs lg:text-3xl text-gray-500 font-semibold">My approach combines creativity and technical expertise to deliver solutions that are both visually appealing and highly functional for users.</p>
                            
                        </div> 
                        <button className="flex flex-col w-40 h-15 items-center justify-center rounded-xl p-4 py-5 bg-purple-600 text-white cursor-pointer">
                                <span className="text-2xl font-semibold">Say Hello!</span> 
                            </button>
                    </div>
                    <div className="grid grid-cols-1  md:w-1/2 gap-12 bg-gray-300 ">
                        <div className="flex flex-col items-start justify-start gap-6 bg-white shadow-2xl rounded-4xl p-8">
                                
                                <span className="text-2xl font-semibold">User Experience (UX)</span>
                                <p className="text-xs lg:text-2xl text-gray-600">I design intuitive and enjoyable experiences by understanding user needs, conducting research, and creating wireframes and prototypes that enhance usability.</p>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-6 bg-white shadow-2xl rounded-4xl p-8">
                                
                                
                                <span className="text-2xl font-semibold">User Interface (UI)</span>
                                <p className="text-xs lg:text-2xl text-gray-600">I craft visually appealing and consistent interfaces, focusing on layout, color, and typography to ensure a seamless and engaging user journey.</p>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-6 bg-white shadow-2xl rounded-4xl p-8">
                                
                                <span className="text-2xl font-semibold">Web Development</span>
                                <p className="text-xs lg:text-2xl text-gray-600">I build responsive and high-performance web applications using modern technologies, ensuring accessibility, scalability, and maintainability.</p>
                        </div>        
                    </div>

                </div>
                </div>
            
        </>
    )
}
export default Services;
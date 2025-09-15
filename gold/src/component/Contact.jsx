function Contact(){
    return(
        <>
            <div className="w-full ">
                        <div className="bg-gray-900 flex flex-col items-center justify-center gap-12 w-full py-30 px-96 ">
                            <div className="text-center flex flex-col items-center justify-center gap-12">
                                   <h1 className="text-2xl lg:text-6xl text-center font-bold text-white">
                                        Do you have a Project Idea? Let's discuss your project! 
                                    </h1>
                                    <p className="text-xl md:text-4xl text-center font-normal text-[#A5ACB5]">I'm always open to discussing new projects and creative ideas. Let's connect and build something amazing together.</p>
                                    <button className="flex flex-wrap w-72 h-18 items-center justify-center gap-4 rounded-sm px-5 py-5 bg-purple-600 text-white cursor-pointer">
                                            <span className="text-2xl font-semibold">Let's work Together</span> 
                                            <img src="/image/Warrow.jpg" alt="" />
                                    </button>
                            </div>
                            
                        </div>
                </div>

        </>
    )
}
export default Contact;
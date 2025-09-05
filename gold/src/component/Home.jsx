function Home(){
    return(
        <>
            <div className="w-full  mt-24 mb-24">
                <div className="mx-auto  flex flex-col md:flex-row gap-4 bg-[#fff] sm:px-6 md:px-10 lg:px-14 py-4 md:py-16 w-full">
                    <div className="flex flex-col  justify-center gap-8 md:w-1/2 w-full  ">
                        <div className="flex flex-col  gap-6  w-full  ">
                            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-left font-bold text-black">Hello, I'm Saurav Kumar</h1>
                            <p className="text-xs lg:text-2xl">I'm a Freelance UI/UX Designer and Front-end Developer based in Bhopal, India. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</p>
                            <button className="flex flex-col w-40 h-15 items-center justify-center rounded-xl p-4 py-5 bg-purple-600 text-white cursor-pointer">
                                <span className="text-2xl font-semibold">Say Hello!</span> 
                            </button>
                        </div>
                        <div className="flex flex-col md:flex-row w-full items-center justify-between gap-4 p-2">
                                <div className="bg-[#F6EBFE] flex flex-col items-center justify-between py-6 gap-2 w-1/3">
                                    <p>5 Y.</p>
                                    <p>Experience</p>
                                </div>
                                <div className="bg-[#F6EBFE] flex flex-col items-center justify-between py-6 gap-2 w-1/3">
                                    <p>250+ </p>
                                    <p>Projects Completed</p>
                                </div>
                                <div className="bg-[#F6EBFE] flex flex-col items-center justify-between py-6 gap-2 w-1/3">
                                    <p>58</p>
                                    <p>Happy Clients</p>
                                </div>
                        </div>
                    </div>
                    <div className="flex items-stretch justify-end  md:w-1/2 w-full">
                        <img
                        src="/image/Saurav1.jpg"
                        alt=""
                        className="h-auto w-auto rounded-4xl"
                        />
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center px-8  mt-36 mb-24">
                <div className="  flex flex-col md:flex-row gap-4 bg-[#fff] p-2 md:px-20 md:py-20 w-full rounded-4xl shadow-2xl  " >
                    <div className="flex items-stretch justify-center  md:w-1/2 w-full">
                        <img
                        src="/image/Saurav1.jpg"
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
                
                <div className="w-full mt-36 mb-28">
                    <div className="bg-white flex flex-col items-center justify-center gap-12 w-full py-6  px-96 ">
                        <span className="text-xl md:text-6xl text-center font-semibold">Portfolio</span>
                        <p className="text-xs lg:text-3xl text-gray-400 text-center px-20">Here's a selection of my recent work, showcasing my skills in creating user-centric and visually appealing interfaces.</p>
                    </div>
                    <div className="mx-auto grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 items-center justify-end w-full gap-6 md:p-10">
                            <div className="w-full outline-[#FFFFFF] hover:shadow-2xl duration-300 transition-all shadow-gray-300 border border-gray-200 rounded-2xl">
                                    <img src="/image/A1.png" alt="" />
                                    <div className="p-4 sm:p-16 flex flex-col gap-4">
                                        <p className="text-gray-400 text-sm font-bold">UI-UX DESIGN</p>
                                        <p className="text-gray-800 text-2xl font-bold text-wrap">Product Admin Dashboard</p>
                                        <p className="text-gray-600 text-xl text-wrap">I focus on crafting smooth, responsive interfaces that balance aesthetic appeal with practical functionality.</p>
                                        <a className="flex flex-wrap w-48 h-14 items-center justify-center gap-4 rounded-sm px-5 bg-white text-black cursor-pointer border border-gray-200">
                                            <span className="text-2xl font-semibold">Case Study</span> 
                                            <img src="/image/Barrow.jpg" alt="" />
                                     </a>
                                    </div>
                            </div>
                            <div className="w-full outline-[#FFFFFF] hover:shadow-2xl duration-300 transition-all shadow-gray-300 border border-gray-200 rounded-2xl">
                                    <img src="/image/A2.png" alt="" />
                                    <div className="p-4 sm:p-16 flex flex-col gap-4">
                                        <p className="text-gray-400 text-sm font-bold">UI-UX DESIGN</p>
                                        <p className="text-gray-800 text-2xl font-bold text-wrap">Product Admin Dashboard</p>
                                        <p className="text-gray-600 text-xl text-wrap">Designed an intuitive dashboard for product management, emphasizing clarity and user efficiency.</p>
                                        <a className="flex flex-wrap w-48 h-14 items-center justify-center gap-4 rounded-sm px-5  bg-white text-black cursor-pointer border border-gray-200">
                                            <span className="text-2xl font-semibold">Case Study</span> 
                                            <img src="/image/Barrow.jpg" alt="" />
                                     </a>
                                    </div>
                            </div>
                            <div className="w-full outline-[#FFFFFF] hover:shadow-2xl duration-300 transition-all shadow-gray-300 border border-gray-200 rounded-2xl">
                                    <img src="/image/A3.png" alt="" />
                                    <div className="p-4 sm:p-16 flex flex-col gap-4">
                                        <p className="text-gray-400 text-sm font-bold">UI-UX DESIGN</p>
                                        <p className="text-gray-800 text-2xl font-bold text-wrap">Product Admin Dashboard</p>
                                        <p className="text-gray-600 text-xl text-wrap">Developed a modern admin panel with a focus on usability and seamless navigation for end users and so on.</p>
                                        <a className="flex flex-wrap w-48 h-14 items-center justify-center gap-4 rounded-sm px-5  bg-white text-black cursor-pointer border border-gray-200">
                                            <span className="text-2xl font-semibold">Case Study</span> 
                                            <img src="/image/Barrow.jpg" alt="" />
                                     </a>
                                    </div>
                            </div>
                            <div className="w-full outline-[#FFFFFF] hover:shadow-2xl duration-300 transition-all shadow-gray-300 border border-gray-200 rounded-2xl">
                                    <img src="/image/A4.png" alt="" />
                                    <div className="p-4 sm:p-16 flex flex-col gap-4">
                                        <p className="text-gray-400 text-sm font-bold">UI-UX DESIGN</p>
                                        <p className="text-gray-800 text-2xl font-bold text-wrap">Product Admin Dashboard</p>
                                        <p className="text-gray-600 text-xl text-wrap">Created a responsive dashboard layout that adapts smoothly across devices and screen sizes and so on.</p>
                                        <a className="flex flex-wrap w-48 h-14 items-center justify-center gap-4 rounded-sm px-5  bg-white text-black cursor-pointer border border-gray-200">
                                            <span className="text-2xl font-semibold">Case Study</span> 
                                            <img src="/image/Barrow.jpg" alt="" />
                                     </a>
                                    </div>
                            </div>
                            <div className="w-full outline-[#FFFFFF] hover:shadow-2xl duration-300 transition-all shadow-gray-300 border border-gray-200 rounded-2xl">
                                    <img src="/image/A5.png" alt="" />
                                    <div className="p-4 sm:p-16 flex flex-col gap-4">
                                        <p className="text-gray-400 text-sm font-bold">UI-UX DESIGN</p>
                                        <p className="text-gray-800 text-2xl font-bold text-wrap">Product Admin Dashboard</p>
                                        <p className="text-gray-600 text-xl text-wrap">Implemented interactive charts and widgets to visualize product data effectively for stakeholders.</p>
                                        <a className="flex flex-wrap w-48 h-14 items-center justify-center gap-4 rounded-sm px-5  bg-white text-black cursor-pointer border border-gray-200">
                                            <span className="text-2xl font-semibold">Case Study</span> 
                                            <img src="/image/Barrow.jpg" alt="" />
                                     </a>
                                    </div>
                            </div>
                            <div className="w-full outline-[#FFFFFF] hover:shadow-2xl duration-300 transition-all shadow-gray-300 border border-gray-200 rounded-2xl">
                                    <img src="/image/A6.png" alt="" />
                                    <div className="p-4 sm:p-16 flex flex-col gap-4">
                                        <p className="text-gray-400 text-sm font-bold">UI-UX DESIGN</p>
                                        <p className="text-gray-800 text-2xl font-bold text-wrap">Product Admin Dashboard</p>
                                        <p className="text-gray-600 text-xl text-wrap">Enhanced user experience by streamlining workflows and optimizing interface components and so on.</p>
                                        <a className="flex flex-wrap w-48 h-14 items-center justify-center gap-4 rounded-sm px-5  bg-white text-black cursor-pointer border border-gray-200">
                                            <span className="text-2xl font-semibold text-center">Case Study</span> 
                                            <img src="/image/Barrow.jpg" alt="" />
                                     </a>
                                    </div>
                            </div>          
                    </div>
                    <div className="bg-white flex flex-col items-center justify-center gap-12 w-full py-6  px-96 ">
                        <button className="flex flex-col w-48 h-15 items-center justify-center rounded-xl p-3 py-5 bg-purple-600 text-white cursor-pointer">
                                    <span className="text-2xl font-semibold text-center">More Project</span> 
                     </button>

                    </div>
                    
                </div>

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

                <div className="w-full mt-36 mb-28">
                    <div className="bg-white flex flex-col items-center justify-center gap-12 w-full py-6  px-96 ">
                        <span className="text-6xl text-center">Blog</span>
                        <p className="text-xs lg:text-3xl text-gray-400 text-center">Check out my recent blog posts where I share insights on design, development, and the latest industry trends.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center justify-end w-full gap-6 md:p-10">
                            <div className="w-full outline-[#FFFFFF] hover:shadow-2xl duration-300 transition-all shadow-gray-300 border border-gray-200 rounded-2xl">
                                    <img src="/image/B1.jpg" alt="" />
                                    <div className="p-4 sm:p-16 flex flex-col gap-4">
                                         <p className="text-gray-400 text-lg font-semibold">22 Oct 2022 / 246 comments</p>
                                        <p className="text-gray-600 text-2xl font-semibold text-wrap">Designing Engaging User Interfaces for M ....</p>
                                   
                                        
                                    </div>
                            </div>
                            <div className="w-full outline-[#FFFFFF] hover:shadow-2xl duration-300 transition-all shadow-gray-300 border border-gray-200 rounded-2xl">
                                    <img src="/image/B2.jpg" alt="" />
                                    <div className="p-4 sm:p-15 flex flex-col gap-4">
                                         <p className="text-gray-400 text-lg font-semibold">22 Oct 2022 / 246 comments</p>
                                        <p className="text-gray-600 text-2xl font-semibold text-wrap">Tips for Effective Dashboard Layouta and ....</p>
                                   
                                    </div>
                            </div>
                            <div className="w-full outline-[#FFFFFF] hover:shadow-2xl duration-300 transition-all shadow-gray-300 border border-gray-200 rounded-2xl">
                                    <img src="/image/B3.jpg" alt="" />
                                    <div className="p-4 sm:p-16 flex flex-col gap-4">
                                        <p className="text-gray-400 text-lg font-semibold"> 22 Oct 2022 / 246 comments</p>
                                        <p className="text-gray-600 text-2xl font-semibold text-wrap">How to Visualize Data for Better Product ....</p>
                                   
                                        
                                    </div>
                            </div>
                            <div className="w-full outline-[#FFFFFF] hover:shadow-2xl duration-300 transition-all shadow-gray-300 border border-gray-200 rounded-2xl">
                                    <img src="/image/B4.jpg" alt="" />
                                    <div className="p-4 sm:p-16 flex flex-col gap-4">
                                         <p className="text-gray-400 text-lg font-semibold">22 Oct 2022 / 246 comments</p>
                                        <p className="text-gray-600 text-2xl font-semibold text-wrap">Responsive Design: Adapting to All Devic ....</p>
                                   
                                    </div>
                            </div>                        
                    </div>      
                </div>

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
            
                <div className="w-full mt-36 mb-28">
                    <div className="bg-white flex flex-col items-center justify-center gap-12 w-full py-6  px-96 ">
                        <span className="text-xl md:text-6xl text-center font-semibold">Happy Clients</span>
                        <p className="text-xs lg:text-3xl text-gray-400 text-center px-20">I've had the pleasure of working with a diverse range of companies, from startups to established brands.</p>
                    </div>
                    <div className="bg-white flex flex-wrap items-center justify-between gap-8 py-12 px-10 w-full">
                            <img src="/image/Linkdin.jpg" alt="" />
                            <img src="/image/amazon.jpg" alt="" />
                            <img src="/image/dribble.jpg" alt="" />
                            <img src="/image/google.jpg" alt="" />
                            <img src="/image/spotify.jpg" alt="" />
                    </div>
                </div>

                <div className="w-full mt-36 mb-28">
                    <div className="bg-white flex flex-col items-center justify-center gap-12 w-full   px-96 ">
                        <span className="text-xl md:text-6xl text-center font-semibold">Testimonial</span>
                        <p className="text-xs lg:text-3xl text-gray-400 text-center px-20">Working with this team was a fantastic experience. Their attention to detail and commitment to quality exceeded our expectations.</p>
                        <p className="text-xs lg:text-3xl text-gray-600 font-semibold text-center px-2">" From the initial consultation to the final delivery, every step was handled professionally. The end result was a product that not only met our needs but also impressed our stakeholders. Highly recommended! "</p>
                        <p className="text-xs lg:text-3xl text-center">
                            <span className="text-xl md:text-3xl text-center font-semibold">Saurav Kumar</span>
                            <h3 className="text-xl md:text-2xl text-center text-gray-400 font-semibold p-3">Full Stack Developer , Teknowxa Company</h3>
                
                        </p>

                    </div>
                </div>

                <div className="w-full flex justify-center px-8  mt-36 -mb-20">
                    <div className="  flex flex-col md:flex-row gap-4 bg-[#fff] p-2 md:px-20 md:py-20 w-full rounded-4xl shadow-2xl shadow-slate-300 " >
                       <div className="flex flex-col items-start justify-start gap-6  md:w-1/2 w-full px-16">
                            <h1 className="text-xl md:text-4xl text-start font-semibold">Let’s discuss your Project</h1>
                            <p className="text-xl md:text-2xl text-start text-gray-300 font-semibold " >I'm available for freelance work. Drop me a line if you have a project you think I'd be a good fit for.</p>
                            <div className="flex flex-wrap items-center justify-start gap-6 p-6 hover:shadow-2xl shadow-slate-300 cursor-pointer rounded-2xl">
                                    <img src="/image/address.jpg" alt="" />
                                    <div className="flex flex-col items-center justify-start gap-2">
                                        <span className="text-xs lg:text-2xl text-gray-400 ">Address:</span>
                                        <h1 className="text-xs lg:text-2xl text-gray-900 font-semibold ">Kharagpur, Bihta, Patna, Bihar </h1>
                                    </div>
                            </div>
                            <div className="flex flex-wrap items-center justify-start gap-6 p-6 hover:shadow-2xl shadow-slate-300 cursor-pointer rounded-2xl">
                                    <img src="/image/mail.jpg" alt="" />
                                    <div className="flex flex-col items-center justify-start gap-2">
                                        <span className="text-xs lg:text-2xl text-gray-400 ">My Email:</span>
                                        <h1 className="text-xs lg:text-2xl text-gray-900 font-semibold ">sauravkr5060@gmail.com </h1>
                                    </div>
                            </div>
                            <div className="flex flex-wrap items-center justify-start gap-6 p-6 hover:shadow-2xl shadow-slate-300 cursor-pointer rounded-2xl">
                                    <img src="/image/phone.jpg" alt="" />
                                    <div className="flex flex-col items-center justify-start gap-2">
                                        <span className="text-xs lg:text-2xl text-gray-400 ">Call Me Now:</span>
                                        <h1 className="text-xs lg:text-2xl text-gray-900 font-semibold ">+91 6207841176 </h1>
                                    </div>
                            </div>
                       </div>

                       <div className="flex flex-col items-center justify-start gap-6  md:w-1/2 w-full">
                            <h1 className="text-xs lg:text-2xl text-gray-400 px-16 text-left">I'm always open to discussing product design work or partnership opportunities.</h1>
                            <form action="" className="w-full px-16 flex flex-col gap-12">

                                <div>
                                    <input type="text" placeholder="Name*" className="w-full text-lg"/>
                                    <hr className="border-gray-400" />
                                </div>

                                <div>
                                    <input type="mail" placeholder="Email*" className="w-full text-lg"/>
                                    <hr className="border-gray-400" />
                                </div>
                                
                                <div>
                                    <input type="text" placeholder="Location*" className="w-full text-lg"/>
                                    <hr className="border-gray-400" />
                                </div>

                                <div className="flex gap-4">
                                        <div className="w-1/2">
                                                <input type="text" placeholder="Budget*" className="w-full text-lg"/>
                                                <hr className="border-gray-400" />
                                        </div>
                                        <div className="w-1/2">
                                                <input type="text" placeholder="Subject*" className="w-full text-lg"/>
                                                <hr className="border-gray-400" />
                                        </div>
                                </div>
                                  
                                  <div>
                                    <input type="text" placeholder="Message*" className="w-full text-lg"/>
                                    <hr className="border-gray-400" />
                                </div>

                                <button className="flex flex-col w-48 h-15 items-center justify-center rounded-xl p-3 py-5 bg-purple-600 text-white cursor-pointer">
                                    <span className="text-2xl font-semibold">Submit</span> 
                                </button>

                                    
                          </form>
                            
                        </div> 
                    </div>
                </div>

                <div className="w-full bg-black pt-30">
                      <div className="  flex flex-wrap gap-4 items-center justify-between bg-black p-2 md:px-20 md:py-20 w-full " >
                            <div className="flex flex-col md:flex-row justify-center items-center gap-3 p-2">
                                    <img src="/image/S1.jpg" alt="" className=" rounded-4xl w-full h-full " />
                                    <a href="">
                                        <h3 className="text-xl md:text-4xl font-semibold text-gray-400">
                                            Saurav
                                        </h3>
                                    </a>
                             </div>

                             <div className="flex flex-wrap items-center justify-center gap-6 font-bold text-gray-400">
                                <ul className="flex flex-wrap items-center justify-center gap-14 font-bold text-base">
                                    <li>
                                        <a href="#home" >Home</a>
                                    </li>
                                    <li>
                                        <a href="#about">About</a>
                                    </li>
                                    <li>
                                        <a href="#process">Process</a>
                                    </li>
                                    <li>
                                        <a href="#portfolio">Portfolio</a>
                                    </li>
                                    <li>
                                        <a href="#blog">Blog</a>
                                    </li>
                                    <li>
                                        <a href="services">Services</a>
                                    </li>
                                    <li>
                                        <a href="">Contact</a>
                                    </li>
                                </ul>
                            </div>  

                            <h1 className="text-xs lg:text-xl font-semibold text-gray-400 ">Copyright © 2025 Picto.</h1>
                      
                      </div>
                        <h1 className="text-xs lg:text-2xl text-center font-semibold text-gray-400 pb-12">Developed with ❤️ by <span className="text-white font-bold">ThemeWagon</span> </h1>
                </div>
                    
        </>
    )
}
export default Home;
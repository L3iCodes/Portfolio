import Header from "../components/Header"
import { Icon } from "@iconify/react"
import InfoCard from "../components/InfoCard"

export default function AboutPage(){
    return(
        <div className="flex flex-col gap-15 w-full h-full">
            <Header 
                main={<span className="font-bold">About Me</span>}
                subtitle={<>Hi, am <span className="font-medium text-text">Jan Wilhelm Sy</span>, a fresh Computer Science fresh graduate from Bicol University. <br/><br/>An aspiring full-stack developer. Interested in web development and AI. Currently, learning and mastering React and other backend technologies. My experience also include  deep learning and NLP projects developed during research and applied work.</>}
                includeImg={true}
            />

            <div className="flex flex-col gap-5 md:flex-row ">
                <div className="flex flex-col md:w-[50%] gap-5">

                    {/* Education INFO */}
                    <InfoCard 
                        title={'Education'}
                        icon={"mdi:education-outline"}
                        >
                            <div className="flex flex-col ml-5 gap-5">
                                <div className="flex gap-2">
                                    <div className="flex flex-col items-center mt-1">
                                        <div className="w-[15px] h-[15px] rounded-full bg-primary" />
                                        <div className="w-[5px] h-full rounded-[5px] mt-[-1px] bg-primary"/>
                                    </div>
                                    <div className="flex flex-col text-subtext">
                                        <h3 className="font-medium !text-text/90">Bicol University</h3>
                                        <h4>BS Computer Science, <span className=" italic">cum laude</span></h4>
                                        <h4>August 2021 - June 2025</h4>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <div className="flex flex-col items-center mt-1">
                                        <div className="w-[15px] h-[15px] rounded-full bg-primary" />
                                        <div className="w-[5px] h-full rounded-[5px] mt-[-1px] bg-primary"/>
                                    </div>
                                    <div className="flex flex-col text-subtext">
                                        <h3 className="font-medium !text-text/90">STI College of Legazpi</h3>
                                        <h4>Information Communication Technology</h4>
                                        <h4>June 2019 - June 2021</h4>
                                    </div>
                                </div>
                            </div>
                    </InfoCard>

                    {/* Skills INFO */}
                    <InfoCard 
                        title={"Skills"}
                        icon={'mdi:stars-outline'}
                        >
                            <div className="flex flex-col gap-2 ml-8 text-subtext">
                                <h4><span className="!text-text/90">Web Development</span> - Javascript, React, Node.JS, ExpressJS, MongoDB</h4>
                                <h4><span className="!text-text/90">Frontend Styling</span> - HTML, CSS, TailwindCSS</h4>
                                <h4><span className="!text-text/90">Machine Learning / AI</span> -Python, Tensorflow, Keras, HuggingFace</h4>
                                <h4><span className="!text-text/90">Tools</span> - GitHub, VS Code, Figma, Canva</h4>
                            </div>
                        
                    </InfoCard>

                    {/* Experience INFO */}
                    <InfoCard
                        title={'Experience'}
                        icon={'material-symbols:work-outline'}
                        >
                            <div className="flex flex-col ml-8 gap-5">
                                <div className="text-subtext">
                                    <h3 className="font-medium !text-text/90">Iraya Energies</h3>
                                    <h4>Kuala Lumpur, Malaysia (Remote)</h4>
                                    <h4>Student Intern</h4>
                                    <h4>August 19-20, 2024</h4>
                                    <br/> <h4>Contributed to the development of Raya, a  chatbot application designed to process unstructured data and enable  document retrieval through conversational interfaces.</h4>
                                </div>
                                
                            </div>
                    </InfoCard>
                </div>

                <div className="flex flex-col md:w-[50%] gap-5">
                    {/* Others INFO */}
                    <InfoCard
                        title={'Seminars & Workshops'}
                        icon={'mdi:calendar-outline'}
                        >
                            <div className="flex flex-col ml-5 gap-5">
                                <div className="flex gap-2">
                                    <div className="flex flex-col items-center mt-1">
                                        <div className="w-[15px] h-[15px] rounded-full bg-primary" />
                                        <div className="w-[5px] h-full rounded-[5px] mt-[-1px] bg-primary"/>
                                    </div>
                                    <div className="flex flex-col text-subtext">
                                        <h3 className="font-medium !text-text/90">AI.Deas for Impact: AI for Innovation and Social Impact Workshop <span className="text-subtext">| DICT</span></h3>
                                        <h4>1st Place | Best AI Idea</h4>
                                        <h4>August 19-20, 2024</h4>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <div className="flex flex-col items-center mt-1">
                                        <div className="w-[15px] h-[15px] rounded-full bg-primary" />
                                        <div className="w-[5px] h-full rounded-[5px] mt-[-1px] bg-primary"/>
                                    </div>
                                    <div className="flex flex-col text-subtext">
                                        <h3 className="font-medium !text-text/90">Bicol Student Research Summit: NurTURe</h3>
                                        <h4>Participant</h4>
                                        <h4>May 23, 2025</h4>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <div className="flex flex-col items-center mt-1">
                                        <div className="w-[15px] h-[15px] rounded-full bg-primary" />
                                        <div className="w-[5px] h-full rounded-[5px] mt-[-1px] bg-primary"/>
                                    </div>
                                    <div className="flex flex-col text-subtext">
                                        <h3 className="font-medium !text-text/90">ACCeSS Updated: Cybersecurity and the Expanding Digital Horizon </h3>
                                        <h4>Participant</h4>
                                        <h4>March 28, 2024</h4>
                                    </div>
                                </div>
                            </div>
                    </InfoCard>

                    <InfoCard
                        title={'Contact'}
                        icon={'mdi:contact-outline'}
                        className={'h-full relative overflow-hidden'}
                        >
                            <div className="w-full h-full absolute left-0 top-0 bg-secondary/1 backdrop-blur-[1px]" />
                            <h5 className="text-subtext mt-[-10px]">If you are interested in what I could offer. Please contact me</h5>

                            <form className="flex flex-col w-full mt-5 gap-3 h-full">
                                
                                <div className="flex w-full gap-3">
                                    <div className="flex flex-col w-full gap-1">
                                        <h4 className="text-text/90 !text-[12px]">Name</h4>
                                        <input 
                                            type="text" 
                                            placeholder="Your name"
                                            className="w-full text-[12px] px-2 py-1 border-1 border-accent bg-secondary rounded-[5px]"
                                        />
                                    </div>

                                    <div className="flex flex-col w-full gap-1">
                                        <h4 className="text-text/90 !text-[12px]">Name</h4>
                                        <input 
                                            type="text" 
                                            placeholder="Your email"
                                            className="w-full text-[12px] px-2 py-1 border-1 border-accent bg-secondary rounded-[5px]"
                                        />
                                    </div>
                                </div>
                                <textarea className="text-[12px] px-2 py-1 border-1 border-accent bg-secondary rounded-[5px] h-full min-h-[130px] resize-none"/>
                                <button 
                                    onClick={(e) => e.preventDefault()}
                                    className="text-[12px] bg-primary p-2 rounded-[5px] hover:bg-accent active:bg-primary border-1 border-accent cursor-pointer"
                                    >Send message
                                </button>
                            </form>
                    </InfoCard>
                </div>
            </div>
        </div>
    )
}
// import PageBackground from "../utils/PageBackground";
// import {Link} from 'react-router-dom';

// functionalitis to add - onclick navigate in Li, 
// import portfolioImg from '../assets/portfolio-img.jpg';
import aboutmeImg from '../assets/aboutMeImg.png';
import {TypeAnimation} from 'react-type-animation';

const Header = () => {
    return (
        <div className='m-[3rem] bg-black rounded-3xl shadow-cyan'>
            <div className="h-[90vh] text-white">
                {/* <PageBackground/> */}
                <div className="">
                    <ul className="list-none flex justify-center pt-4 font-bold select-none">
                        <li className="mt-[0.25rem] mx-[100px] relative group"><a href="#home">
                        HOME</a>
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-300 transition-all duration-500 group-hover:w-full"></span>
                        </li>
                        <li className="mt-[0.25rem] mx-[100px] relative group"><a href="#about">
                        ABOUT</a>
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-300 transition-all duration-500 group-hover:w-full"></span>
                        </li>
                        <li className="mt-[0.25rem] mx-[100px] relative group"><a href="#work">
                        WORK</a>
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-300 transition-all duration-500 group-hover:w-full"></span>
                        </li>
                        <li className="mt-[0.25rem] mx-[100px] relative group"><a href="#contact">
                        CONTACT</a>
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-300 transition-all duration-500 group-hover:w-full"></span>
                        </li>
                    </ul>
                </div>
                <div className="flex h-[100vh] justify-between mt-[10rem]">
                    <div className="w-full flex flex-col items-center">
                        <div className="">
                            <p className="text-white font-bold text-4xl">Hello, I am</p>
                            <h1 className="text-cyan-300 font-bold text-[14rem] ml-12">Dhruv</h1>
                            <p className="white font-bold text-6xl pl-0">
                                <TypeAnimation
                                    sequence={[
                                        // Same substring at the start will only be typed out once, initially
                                        'MERN Stack Developer',
                                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                                        'Java Developer',
                                        1000,
                                        'Tech Enthusiast',
                                        1000,
                                        'Fitness Freak',
                                        1000
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    // style={{ fontSize: '2em', display: 'inline-block' }}
                                    repeat={Infinity}
                                />
                            </p>
                            {/* <span className="white font-bold text-5xl pl-0">Role</span> */}
                        </div>
                    </div>
                    <div className=" text-black w-full">
                        <div className="flex items-center justify-center">
                            <div className="md:w-1/2 flex justify-center">
                                <img src={aboutmeImg} alt="About me" className="h-[20rem] md:h-[32rem] animate-blob shadow-cyan"></img>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
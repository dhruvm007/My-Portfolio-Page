import aboutmeImg from '../assets/aboutMeImg.png';

const About = () => {
    return (
        <div id="about" className="bg-gradient-grey m-[3rem] rounded-3xl h-[90vh] flex border-b-[0.1rem] border-cyan-400 items-center">
            <div className="w-[95%] flex flex-col md:flex-row justify-center p-[2rem]">
                <div className="md:w-1/2 flex justify-center">
                    <img src={aboutmeImg} alt="About me" className="h-[20rem] md:h-[32rem] animate-blob shadow-cyan"></img>
                </div>    
                <div className="md:w-1/2 flex flex-col">
                    <h1 className='text-white text-5xl md:text-7xl font-extrabold'>About Me</h1>
                    <p className='text-white text-2xl mt-[2rem]'>
                        Driven by a passion for problem-solving, I'm a BTech student diving deep into the world of software development.
                        My toolkit includes Java for robust Data Structures and Algorithms, complemented by a strong foundation in MERN stack for full-stack applications.
                        Beyond the code, I balance my life with regular gym sessions and the strategic play of football, fostering discipline and teamwork.
                        I'm always eager to learn and contribute to innovative projects, blending technical proficiency with a dynamic, well-rounded approach.
                    </p>
                    <button className='text-white bg-zinc-900 border-2 rounded-xl w-[20%] p-[0.75rem] mt-[3rem] hover:border-cyan-400 duration-500 hover:shadow-cyan'>
                        My Resume
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About;
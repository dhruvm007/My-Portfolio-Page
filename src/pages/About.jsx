import java from '../assets/Java_icon.svg';
import cpp from '../assets/cpp_icon.svg';
import python from '../assets/python_icon.svg';
import js from '../assets/js_icon.svg';
import ts from '../assets/ts_icon.svg';
import html from '../assets/html_icon.svg';
import css from '../assets/css_icon.svg';
import tailwind from '../assets/tailwind_icon.svg';
import react from '../assets/react_icon.svg';
import express from '../assets/express_icon.svg';
import node from '../assets/nodejs_icon.svg';
import sql from '../assets/sql_icon.svg';
import mongodb from '../assets/mongo_icon.svg';
import git from '../assets/git_icon.svg';
import github from '../assets/github_icon.svg';
import postman from '../assets/postman_icon.svg';
import unity from '../assets/unity_icon.svg';
import vite from '../assets/vite_icon.svg';

const About = () => {
    const skills = [
        { src: java, alt: "Java" },
        { src: cpp, alt: "CPP" },
        { src: python, alt: "Python" },
        { src: js, alt: "JavaScript" },
        { src: ts, alt: "TypeScript" },
        { src: html, alt: "HTML" },
        { src: css, alt: "CSS" },
        { src: tailwind, alt: "Tailwind CSS" },
        { src: react, alt: "React" },
        { src: express, alt: "Express Js" },
        { src: node, alt: "Node Js" },
        { src: sql, alt: "SQL" },
        { src: mongodb, alt: "MongoDB" },
        { src: git, alt: "Git" },
        { src: github, alt: "Github" },
        { src: postman, alt: "Postman" },
        { src: unity, alt: "Unity" },
        { src: vite, alt: "Vite" },
    ];
    return (
        <div id="about" className="bg-black m-[3rem] p-[5rem] rounded-3xl h-[90vh] flex flex-col shadow-cyan items-center">
            <h1 className='text-white text-5xl md:text-7xl font-extrabold'>About Me</h1>
            <div className="w-[95%] flex flex-col justify-center p-[2rem]">
                <p className='text-white text-2xl mt-[2rem] text-center'>
                    Driven by a passion for problem-solving and innovation, I am exploring the ever-evolving landscape of software development. My technical journey began with a strong command of Java, which has shaped my understanding of Data Structures and Algorithms and honed my analytical thinking. Building on this foundation, I’ve expanded my skill set into the MERN stack, enabling me to design and develop full-stack web applications that combine functionality with intuitive user experiences.
                    Beyond my technical pursuits, I believe in maintaining a balanced and disciplined lifestyle. Regular gym sessions not only help me stay physically active but also instill resilience and focus, qualities that I bring into every project I undertake. As a committed football player, I value teamwork, strategy, and the drive to continuously improve—traits that mirror my approach to software development.
                    I am always eager to learn, grow, and contribute to meaningful projects that push the boundaries of technology. Whether collaborating with a team or working independently, I aim to blend technical proficiency with a dynamic, well-rounded perspective to deliver impactful solutions.
                </p>
                <div className="overflow-hidden w-full mt-[6rem]">
                    <div className="flex animate-scroll-smooth space-x-14">
                        {[...Array(3)].flatMap((_, setIndex) => 
                            skills.map((skill, index) => (
                                <img 
                                    src={skill.src} 
                                    key={`${skill.alt}-${setIndex}-${index}`} 
                                    alt={skill.alt} 
                                    className="h-16 flex-shrink-0 w-auto" 
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
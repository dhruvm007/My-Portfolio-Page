import Form from '../utils/Form.jsx';
import { Linkedin, Instagram, Github, Code, Mail, Twitter } from 'lucide-react';

const Contact = () => {
    return (
        <div id='contact' className='h-[55vh] bg-black mt-[3rem] flex p-[2rem] shadow-cyan'>
            <div className='w-[50%] flex justify-center border-r-[0.1rem] border-r-gray-700'>
                <Form/>
            </div>
            <div className='pl-[2rem]'>
                <div className="flex justify-center text-3xl font-bold text-white mt-[1rem]">
                    My Socials
                </div>
                <ul className='flex flex-col justify-center gap-5 text-white mt-[2rem]'>
                    <a className="hover:text-cyan-500 duration-300" href='https://www.linkedin.com/in/dhruv-mutreja-868b71232/' target='_blank'>
                        <li className='flex gap-4'>
                            <Linkedin className="inline"/>
                            Linkedin
                        </li>
                    </a>
                    <a className="hover:text-cyan-500 duration-300" href='https://www.instagram.com/bulkydhruv/' target='_blank'>
                        <li className='flex gap-4'>
                            <Instagram className="inline"/>
                            Instagram
                        </li>
                    </a>
                    <a className="hover:text-cyan-500 duration-300" href='https://github.com/dhruvm007' target='_blank'>
                        <li className='flex gap-4'>
                            <Github className="inline"/>
                            Github
                        </li>
                    </a>
                    <a className="hover:text-cyan-500 duration-300" href='https://leetcode.com/u/Dhruvm07/' target='_blank'>
                        <li className='flex gap-4'>
                            <Code className="inline"/>
                            Leetcode
                        </li>
                    </a>
                    <a className="hover:text-cyan-500 duration-300" href='https://x.com/dhruuvvv_' target='_blank'>
                        <li className='flex gap-4'>
                            <Twitter className="inline"/>
                            X / Twitter
                        </li>
                    </a>
                </ul>
            </div>
        </div>
    )
}

export default Contact;
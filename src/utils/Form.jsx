import { useState } from 'react';
import contactMe from '../assets/contact_thumb.png'
import { toast } from 'react-toastify';

const Form = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        try{
            const response = await fetch('https://getform.io/f/adrgzpna', {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: "application/json",
                }
            });
            if(response.ok){
                setSubmitted(true);
                toast.success("Response Submitted");
                e.target.reset();
            }
            else{
                toast.error("Failed to submit! Please Try again.")
                console.log("message"+response.message);
            }
        }
        catch(error){
            toast.error(error.message);
        }
    }
    return (
        <form
            acceptCharset="UTF-8"
            id="form"
            method='POST'
            className="flex flex-col gap-4 px-[2rem] rounded-2xl border w-[70%] border-gray-700 bg-black text-white"
            onSubmit={handleFormSubmit}
        >
            <div className="flex justify-center text-3xl font-bold mt-[1rem]">
                Contact Me
            </div>
            <div className='flex w-full gap-6'>
                <div className='flex flex-col gap-2 w-[50%]'>
                    <input
                        className="w-full bg-zinc-900 rounded-lg p-[0.5rem] outline-none border border-gray-700 focus:border-gray-700"
                        type='text'
                        name='name'
                        autoComplete='off'
                        placeholder='Your Name' />
                    <input
                        className="w-full bg-zinc-900 rounded-lg p-[0.5rem] outline-none border border-gray-700 focus:border-gray-700"
                        type='email'
                        name='email'
                        autoComplete='off'
                        placeholder='Your Email' />
                    <textarea
                        className="w-full bg-zinc-900 rounded-lg p-[0.5rem] h-[10rem] resize-none outline-none border border-gray-700 focus:border-gray-700"
                        name='message'
                        autoComplete='off'
                        placeholder='Your Message' />
                </div>
                <div>
                    <img
                        src={contactMe}
                        alt="ContactMe"
                        className='h-[16.4rem] w-[16.3rem] rounded-2xl border border-gray-700'
                    />
                </div>
            </div>
            <div className="flex justify-center mt-[1.5rem] h-[2rem]">
                <button
                    className="border border-gray-700 text-white rounded-full bg-zinc-900 w-[35%] h-[2.5rem] font-semibold hover:h-[2.7rem] hover:w-[37%] hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300"
                    type='submit'>
                    Submit
                </button>
            </div>
        </form>
    )
}

export default Form;
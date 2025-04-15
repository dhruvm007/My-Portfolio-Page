const Form = () => {
    return (
        <form className="flex flex-col gap-4 px-[2rem] rounded-2xl w-[50%] bg-cyan-400 text-black">
            <div className="flex justify-center text-3xl font-bold mt-[1rem]">
                Contact Me
            </div>
            <input className="bg-white rounded-lg p-[0.5rem] " type='text' placeholder='Your Name' />
            <input className="bg-white rounded-lg p-[0.5rem] " type='email' placeholder='Your Email' />
            <textarea className="bg-white rounded-lg p-[0.5rem] h-[10rem] resize-none" placeholder='Your Message' />
            <div className="flex justify-center mt-[1.5rem] h-[2rem]">
                <button 
                    className="border-[0.2rem] text-white rounded-full bg-zinc-900 w-[35%] h-[2.5rem] font-semibold hover:h-[2.7rem] hover:w-[37%] duration-300"
                    type='submit'>
                    Submit
                </button>
            </div>
        </form>
    )
}

export default Form;
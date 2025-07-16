
export const CardDescription = ({ childCard, myCardDetails, setMyCardDetails, description, title, viewMore, setViewMore }) => {
    return (
        <>
            <div className='w-[80%] flex gap-32 justify-center mt-[5rem]'>
                <div>
                    {childCard}
                </div>
                <div className="text-white">
                    <div className="text-5xl font-bold">
                        {title}
                    </div>
                    <div className="text-xl mt-[1.5rem]">
                        {description}
                    </div>
                    <div className="mt-[1.5rem] flex gap-6">
                        {(title === "ClipSync") ?
                            (<a
                                className="border rounded-lg px-[0.5rem] py-[0.4rem] border-cyan-400"
                                href="https://github.com/dhruvm007/ClipSync"
                                target="_blank"
                            >
                                View Code
                            </a>) : (
                                <a
                                    className="border rounded-lg px-[0.5rem] py-[0.4rem] border-cyan-400"
                                >
                                    View Code
                                </a>
                            )
                        }
                        <button
                            className="border rounded-lg px-[0.5rem] py-[0.4rem] border-cyan-400"
                            onClick={() => {
                                setMyCardDetails({
                                    ...myCardDetails, cardNumber: "", description: ""
                                });
                                setViewMore('');
                            }}
                        >
                            Hide Description
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
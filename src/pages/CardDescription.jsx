
export const CardDescription = ({ childCard, myCardDetails, description, title }) => {
    return (
        <>
            <div className='w-[80%] flex gap-32 justify-center mt-[10rem]'>
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
                </div>
            </div>
        </>
    )
}
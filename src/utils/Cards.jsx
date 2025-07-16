import cookBuddyImg from '../assets/cookbuddy_poster2.png';
import placemateImg from '../assets/placemate_poster.png';
import clipsyncImg from '../assets/clipsync_poster.png';
import { useState } from 'react';
import { cookBuddyFunction, clipSyncFunction, placeMateFunction } from './ProjectDescription';

export const BaseCard = ({ image, title, setMyCardDetails, myCardDetails, description, summary, viewMore, setViewMore }) => {
    // const[clicked, setClicked] = useState("");
    // const allCards = ["card1", "card2", "card3"];
    // const hidden = clicked?(allCards.filter(card=>card!=clicked)):[];
    // console.log(hidden);
    return (
        <>
            <div className="group relative p-[0.5rem] flex flex-col items-center h-[22rem] w-[25rem] rounded-3xl text-white font-bold"
            >
                <div className={`${(myCardDetails.cardNumber) ? "" : "group-hover:blur-sm group-hover:opacity-80"} transition-all duration-300`}>
                    <img
                        className='rounded-3xl h-[22rem] w-[25rem]'
                        src={image}></img>
                </div>
                {!myCardDetails.cardNumber && <div className='mt-[1rem]'>
                    <h1 className='text-2xl font-semibold'>{title}</h1>
                </div>}
                <div className={`absolute inset-0 flex flex-col gap-4 justify-center items-center opacity-0 ${(myCardDetails.cardNumber) ? "" : "group-hover:opacity-100"} transition-opacity duration-300`}>
                    {!myCardDetails.cardNumber && (
                        <>
                            <h1 className={`px-[2rem] text-center`}>
                                {summary}
                            </h1>
                            <button
                                className='p-[0.5rem] rounded-xl border-2 border-cyan-400'
                                onClick={() => {
                                    setViewMore(title);
                                    setMyCardDetails({
                                        ...myCardDetails, cardNumber: title, description: description
                                    });
                                    // setMyCardDetails((myCardDetails?.cardNumber===title?
                                    //                 {...myCardDetails, cardNumber: "", description: ""  }
                                    //                 :
                                    //                 { ...myCardDetails, cardNumber: title, description: description }
                                    //                 ));
                                }}
                            >
                                View More
                            </button>
                        </>
                    )}
                </div>
                {/* <div className='text-cyan-400 text-xl'>
                    <h1>{title}</h1>
                </div>
                <div className='flex justify-center bg-zinc-900 text-cyan-400 border-[0.1rem] border-cyan-400 rounded-3xl font-bold h-[2rem] w-[50%] hover:h-[2.3rem] hover:w-[55%] duration-300'>
                    <button
                        onClick={() => {
                            // setViewButton(!viewButton);
                            setMyCardDetails((myCardDetails?.cardNumber===title?
                                            {...myCardDetails, cardNumber: "", description: ""  }
                                            :
                                            { ...myCardDetails, cardNumber: title, description: description }
                                            ));
                        }}
                        className='transition-all duration-500 ease-in-out'
                    >
                        {!(myCardDetails?.cardNumber===title) ? "View Description" : "Hide Description"}
                    </button>
                </div>   */}
            </div>
        </>
    )
}

export const Card1 = ({ setMyCardDetails, myCardDetails, description, viewMore, setViewMore }) => {
    return <BaseCard
        image={cookBuddyImg}
        title="CookBuddy"
        setMyCardDetails={setMyCardDetails}
        myCardDetails={myCardDetails}
        description={description}
        summary={cookBuddyFunction}
        viewMore={viewMore}
        setViewMore={setViewMore}
    />
}
export const Card2 = ({ setMyCardDetails, myCardDetails, description, viewMore, setViewMore }) => {
    return <BaseCard
        image={clipsyncImg}
        title="ClipSync"
        setMyCardDetails={setMyCardDetails}
        myCardDetails={myCardDetails}
        description={description}
        summary={clipSyncFunction}
        viewMore={viewMore}
        setViewMore={setViewMore}
    />
}
export const Card3 = ({ setMyCardDetails, myCardDetails, description, viewMore, setViewMore }) => {
    return <BaseCard
        image={placemateImg}
        title="PlaceMate"
        setMyCardDetails={setMyCardDetails}
        myCardDetails={myCardDetails}
        description={description}
        summary={placeMateFunction}
        viewMore={viewMore}
        setViewMore={setViewMore}
    />
}


// view code button hyperlink add karna hai
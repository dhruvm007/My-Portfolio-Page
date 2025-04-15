import cookBuddyImg from '../assets/cookBuddy.png';
import { useState } from 'react';

export const BaseCard = ({ image, title, setMyCardDetails, myCardDetails, description }) => {
    // const[clicked, setClicked] = useState("");
    const [viewButton, setViewButton] = useState(false);
    // const allCards = ["card1", "card2", "card3"];
    // const hidden = clicked?(allCards.filter(card=>card!=clicked)):[];
    // console.log(hidden);
    return (
        <div className="bg-zinc-900 p-[0.5rem] flex flex-col items-center gap-6 w-[20vw] h-[20rem] rounded-3xl text-white font-bold border-t-[0.1rem] border-t-cyan-400 shadow-lg shadow-cyan-400 hover:shadow-cyan duration-500`"
        >
            <div className=''>
                <img
                    className='rounded-t-3xl rounded-b-xl'
                    src={image}></img>
            </div>
            <div className='text-cyan-400 text-xl'>
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
            </div>  
        </div>
    )
}

export const Card1 = ({ setMyCardDetails, myCardDetails, description }) => {
    return <BaseCard image={cookBuddyImg} title="Card1" setMyCardDetails={setMyCardDetails} myCardDetails={myCardDetails} description={description} />
}
export const Card2 = ({ setMyCardDetails, myCardDetails, description }) => {
    return <BaseCard image={cookBuddyImg} title="Card2" setMyCardDetails={setMyCardDetails} myCardDetails={myCardDetails} description={description} />
}
export const Card3 = ({ setMyCardDetails, myCardDetails, description }) => {
    return <BaseCard image={cookBuddyImg} title="Card3" setMyCardDetails={setMyCardDetails} myCardDetails={myCardDetails} description={description} />
}
// export const Card2 = () => {
//     return (
//         <div className='p-[1rem] break-words flex flex-col w-[20vw] h-[20rem] rounded-3xl text-white font-bold border-t-[0.1rem] border-t-cyan-400 shadow-lg shadow-cyan-400 hover:shadow-cyan duration-500'>
//             <div className=''>
//                 <img></img>
//             </div>
//             <div className='flex justify-center'>
//                 <h1></h1>
//             </div>
//         </div>
//     )
// }

// export const Card3 = () => {
//     return (
//         <div className='p-[1rem] break-words flex flex-col w-[20vw] h-[20rem] rounded-3xl text-white font-bold border-t-[0.1rem] border-t-cyan-400 shadow-lg shadow-cyan-400 hover:shadow-cyan duration-500'>
//             <div className=''>
//                 <img></img>
//             </div>
//             <div className='flex justify-center'>
//                 <h1></h1>
//             </div>
//         </div>
//     )
// }
import aboutmeImg from '../assets/aboutMeImg.png';
import { Card1, Card2, Card3 } from './Cards.jsx';
import { CardDescription } from './CardDescription.jsx';
import { useState } from 'react';
import {cookBuddyDescription, clipSync, placeMate } from '../utils/ProjectDescription.jsx';

const Work = () => {
    // const [clicked, setClicked] = useState("");
    // const allCards = ["card1", "card2", "card3"];
    // const hidden = clicked ? (allCards.filter(card => card != clicked)) : [];
    // const cardNumbers = ["1", "2", "3"];

    const [myCardDetails, setMyCardDetails] = useState({
        cardNumber: "",
        description: "",
        childCard: null,
    });

    return (
        <div id="about" className="bg-gradient-grey m-[3rem] rounded-3xl h-[90vh] flex flex-col items-center">
            <div className="flex justify-center">
                <h1 className='text-white text-5xl md:text-7xl font-extrabold mt-[6rem]'>Work</h1>
            </div>

            {
                !myCardDetails.cardNumber ?
                    <div className='w-full flex gap-32 justify-center mt-[10rem]'>
                        {/* clicked is being sent as a prop
                not using clicked state in the baseCard child because that is independent component
                if one child is clicked, the other doesn't know
             */}
                        <>

                            <Card1 myCardDetails={myCardDetails} setMyCardDetails={setMyCardDetails} />
                            <Card2 myCardDetails={myCardDetails} setMyCardDetails={setMyCardDetails} />
                            <Card3 myCardDetails={myCardDetails} setMyCardDetails={setMyCardDetails} />
                        </>
                    </div> :
                    <CardDescription 
                        childCard={
                            myCardDetails.cardNumber === "Card1" ? 
                                <Card1 myCardDetails={myCardDetails} setMyCardDetails={setMyCardDetails} description={cookBuddyDescription} />
                            : myCardDetails.cardNumber === "Card2" ? 
                                <Card2 myCardDetails={myCardDetails} setMyCardDetails={setMyCardDetails} description={clipSync}/>
                            : 
                                <Card3 myCardDetails={myCardDetails} setMyCardDetails={setMyCardDetails} description={placeMate}/>
                            }
                        cardNumber="card1"
                        myCardDetails={myCardDetails}
                        setMyCardDetails={setMyCardDetails}
                        description={
                            myCardDetails.cardNumber === "Card1"? cookBuddyDescription :
                            myCardDetails.cardNumber === "Card2"? clipSync : placeMate
                        }
                        title={myCardDetails.cardNumber}
                        />
            }
        </div>
    )
}

export default Work;
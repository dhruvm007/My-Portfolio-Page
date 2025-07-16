import { Card1, Card2, Card3 } from '../utils/Cards.jsx';
import { CardDescription } from '../utils/CardDescription.jsx';
import { useState } from 'react';
import { cookBuddyDescription, clipSyncDescription, placeMateDescription } from '../utils/ProjectDescription.jsx';

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
    const [viewMore, setViewMore] = useState('');

    return (
        <div id="work" className="bg-black m-[3rem] rounded-3xl h-[90vh] flex flex-col shadow-cyan items-center">
            <div className="flex justify-center">
                <h1 className='text-white text-5xl md:text-7xl font-extrabold mt-[4.5rem]'>Work</h1>
            </div>

            {
                !myCardDetails.cardNumber ?
                    <div className='w-full flex gap-32 justify-center mt-[5rem]'>
                        {/* clicked is being sent as a prop
                not using clicked state in the baseCard child because that is independent component
                if one child is clicked, the other doesn't know
             */}
                        {/* <> */}
                        <Card1
                            myCardDetails={myCardDetails}
                            setMyCardDetails={setMyCardDetails}
                            viewMore={viewMore}
                            setViewMore={setViewMore}
                        />
                        <Card2
                            myCardDetails={myCardDetails}
                            setMyCardDetails={setMyCardDetails}
                            viewMore={viewMore}
                            setViewMore={setViewMore}
                        />
                        <Card3
                            myCardDetails={myCardDetails}
                            setMyCardDetails={setMyCardDetails}
                            viewMore={viewMore}
                            setViewMore={setViewMore}
                        />
                        {/* </> */}
                    </div> :
                    <CardDescription
                        childCard={
                            myCardDetails.cardNumber === "CookBuddy" ?
                                <Card1 myCardDetails={myCardDetails} setMyCardDetails={setMyCardDetails} description={cookBuddyDescription} />
                                : myCardDetails.cardNumber === "ClipSync" ?
                                    <Card2 myCardDetails={myCardDetails} setMyCardDetails={setMyCardDetails} description={clipSyncDescription} />
                                    :
                                    <Card3 myCardDetails={myCardDetails} setMyCardDetails={setMyCardDetails} description={placeMateDescription} />
                        }
                        cardNumber={myCardDetails.cardNumber}
                        myCardDetails={myCardDetails}
                        setMyCardDetails={setMyCardDetails}
                        description={
                            myCardDetails.cardNumber === "CookBuddy" ? cookBuddyDescription :
                                myCardDetails.cardNumber === "ClipSync" ? clipSyncDescription : placeMateDescription
                        }
                        title={myCardDetails.cardNumber}
                        viewMore={viewMore}
                        setViewMore={setViewMore}
                    />
            }
        </div>
    )
}

export default Work;
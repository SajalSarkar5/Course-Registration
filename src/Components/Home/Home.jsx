import { useEffect } from "react";
import { useState } from "react";
import Card from "../card/card";
import Course from "../Course/Course";


const Home = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('FakeData.json')
        .then(res => res.json())
        .then(data => setCards(data))
    }, [])


    return (
        <div>
            <header>
                <h1 className="text-4xl text-[#1C1B1B] font-bold text-center my-11">Course Registration</h1>
            </header>

            <main className="flex gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 w-3/4">
                {
                    cards.map((card, i) => <Card key={i} card={card}></Card>)
                }
                </div>

                <div className="w-1/4">
                    <Course></Course>
                </div>
            </main>
        </div>
    );
};

export default Home;
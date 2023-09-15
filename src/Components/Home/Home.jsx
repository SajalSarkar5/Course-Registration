import { useEffect } from "react";
import { useState } from "react";
import Card from "../card/card";
import Course from "../Course/Course";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
    const [cards, setCards] = useState([]);
    const [selectCourseName, setSelectCourseName] = useState([]);
    const [Remaining, setRemaining] = useState(0);
    const [totalRemaining, setTotalRemaining] = useState(0);

    useEffect(() => {
        fetch('FakeData.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    const handleSelectActor = (card) => {
        const isExist = selectCourseName.find(item => item.id == card.id)
        let count = card.Credit;

        if (isExist) {
            toast("Already select");
        } else {

            selectCourseName.forEach((item) => {
                count = count + item.Credit;
            })
            const creditRemaining = 20 - count;
            if (count > 20) {
                return toast("Total Credit Hour Limit Up");
            } else {
                setTotalRemaining(count);
                setRemaining(creditRemaining);
                setSelectCourseName([...selectCourseName, card]);
            }
        }   
    }


    return (
        <div>
            <header>
                <h1 className="text-4xl text-[#1C1B1B] font-bold text-center my-11">Course Registration</h1>
            </header>

            <main className="flex flex-col-reverse lg:flex-row px-4 gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:w-3/4">
                    {
                        cards.map((card, i) => <Card key={i} card={card} handleSelectActor={handleSelectActor}></Card>)
                    }
                </div>

                <div className="w-full lg:w-1/4">
                    <Course selectCourseName={selectCourseName} Remaining={Remaining} totalRemaining={totalRemaining}></Course>
                </div>
            </main>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default Home;
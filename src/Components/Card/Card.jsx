

const Card = ({ card }) => {
    const {cover_image, title, description, price, Credit} = card;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl p-4">
                <figure><img className="w-full" src={cover_image} alt="Shoes" /></figure>
                <div >
                    <h2 className="text-lg text-[#1C1B1B] font-semibold">{title}</h2>
                    <p className="text-sm text-[#737272] font-normal py-3">{description}</p>
                    <div className="flex justify-between items-center py-4">
                        <p className="text-base text-[#737272] font-medium">Price: {price}</p>
                        <p className="text-base text-[#737272] font-medium">Credit: {Credit} hr</p>
                    </div>
                    <div className="">
                        <button className="btn bg-[#2F80ED] hover:bg-sky-500 w-full text-lg font-semibold text-[#FFF] capitalize">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
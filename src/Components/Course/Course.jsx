

const Course = ({ selectCourseName }) => {
    
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl p-6">
                <h3 className="text-lg text-[#2F80ED] font-bold pb-5">Credit Hour Remaining <span></span> hr</h3>
                <hr />
                <div>
                    <h2 className="text-xl text-[#1C1B1B] font-bold py-5">Course Name</h2>
                    {
                        selectCourseName.map((card, i) => (
                            <ol key={i}>
                                <li>{card.title}</li>
                            </ol>
                        ))
                    }
                    <div className="py-4">
                        <hr />
                    </div>
                    <h5 className="text-base text-[#474747] font-medium py-4">Total Credit Hour : <span></span></h5>
                    <hr />
                    <h4 className="text-base text-[#474747] font-semibold py-4">Total Price : <span></span> USD</h4>
                </div>
            </div>
        </div>
    );
};

export default Course;
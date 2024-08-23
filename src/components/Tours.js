import Cards from "./Cards";

function Tour({tours,interestHandler}){
    // console.log(tours);
    return(
        <>
        <div className="container">
            <h1  className="title">Tour with Fun</h1>
            <div className="cards">{
                tours.map((tour) =>{
                    return(<Cards key={tour.id} {...tour} interestHandler={interestHandler}></Cards>)
                })
            }
            </div>
        </div>
        </>
    );
}

export default Tour;
import { useState } from "react";

function Cards({id,name,price,image,info,interestHandler}){
    const [readMore,setReadMore]=useState(false);
    const description =readMore?info:info.substring(0,200);
    function readMoreHandler(){
        setReadMore(!readMore);
    }
    return(
        <div className="card">
            <div>
                <img className="image" src={image} alt="placeImage"/>
            </div>
            <div className="">
                <h2 className="tour-name">{name}</h2>
                <h3 className="tour-price">{price}</h3>
                <p className="tour-info">
                    {description}
                    <span className="read-more" onClick={readMoreHandler}>
                        ...{readMore?"ShowLess":"ReadMore"}
                    </span>
                </p>
            </div>
            <div>
                <button className="btn-red" onClick={()=>interestHandler(id)}>Not Interested</button>
            </div>
        </div>
    )
}

export default Cards;
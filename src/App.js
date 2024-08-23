import './App.css';
import data from './data';
import Tours from './components/Tours'
import {useState} from "react";

function App() {
  // src=require('./ram.jpg');
  // console.log(src);
  const [tours,setTours]=useState(data);
  function interestHandler(id){
    setTours(tours.filter((tour)=> tour.id!==id));
  }
  if(tours.length===0){
    return(
      <>
      <div className='refresh'>
      <h3 className='refresh-heading'>No More Tours Left to Visit</h3>
      <button className='refresh-btn btn-white' onClick={()=>setTours(data)}>Refresh</button>
      </div>
      </>
    )
  }
  return (
    <div className="">
      <Tours tours={tours} interestHandler={interestHandler}></Tours>
    </div>
  );
}

export default App;

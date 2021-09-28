import React,{useState, useEffect} from 'react';
import './style.css';


 const UseEffect = () => {
        const [myNum, setmyNum]=React.useState(0);
   
        useEffect(()=>{
            document.title= `You clicked ${myNum} times`;
        });
        return (
            <>
            <div className="center_div">
                <p>{myNum}</p>
                <div class="button2" onClick={()=>setmyNum(myNum+1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
                      
            </div>
            </>
        )
}
export default UseEffect;

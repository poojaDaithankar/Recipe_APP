import React from 'react';


 const MenuCard = ({menuData}) => {
    // console.log(menuData);
    return (
        <>
         <section className="main-card-container">
        {menuData.map((curElem) =>{

        const {id, name, image, decription} = curElem;
            return(
                <>
               
                <div className="card-container" key={id} >
                <div className="card">
                    <div className="card-body">
                     <span className="card-number">{id}</span> 
                     <span className="card-Author" >{name}</span> 
                    <h2 className="card-title">{name}</h2>
                    <span className="card-description">{decription} </span>
                    <div className="card-read">Read</div>
                    </div>
                    <img src={image} alt="images" className="card-media" />
                    <span className="card-tag">order Now</span>
                    
                </div>
            </div> 
             
          
            </> 
            
        )})}
     </section>
         
        </>
         
    )
}
export default MenuCard;

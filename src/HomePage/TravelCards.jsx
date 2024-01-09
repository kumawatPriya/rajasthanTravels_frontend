import React, { useEffect, useState } from "react";

function TravelCards() {
   const [api, setApi] = useState([])
   const getCards = async () => {
      const response = await fetch('http://localhost:1100/travelCards');
      const getres = await response.json();
      setApi(getres)
      console.log(getres)
   }

   useEffect(() => {
      getCards()
   }, [])
   return (
      <>
         <div className="travel-packages-heading">
            <h1>Popular Packages in Rajasthan</h1>
         </div>
         <div className="travel-info-bx-main">
         {
            api.map((data) => {
               return (
                  <>

                        <div className="travel-info-bx">
                           <img src={data.image} alt="" />
                           <div className="travel-info-bx-content">
                           <h4>{data.title}</h4>
                           <h5>{data.subtitle}</h5>
                           <p className="trip-days">{data.days}</p>
                           <h3>{data.destination}</h3>
                           <p>{data.price}</p>
                           </div >
                           <div className="travle-info-button">
                           <button>{data.button}</button>
                           </div>
                        </div>
                  </>
               )
            })
         }
         </div>

      </>
   )
}

export { TravelCards }
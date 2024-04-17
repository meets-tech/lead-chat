import { useEffect, useState } from "react";
import Image from 'next/image'
import BoxNovidades from "../component/boxNovidades";

function Novidades() {
 
      
  return (
    // <!-- Slider -->
      <section className="container">

    
         <div className="col-12">
         <BoxNovidades />
         </div>
        
       
      </section>
  );
}

export default Novidades;

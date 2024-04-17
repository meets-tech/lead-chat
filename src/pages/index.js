import { useEffect } from "react";

import Cta from "../element/cta";


import Header from '../layout/header';
import Secao from "../element/secao";
import Novidades from "../element/novidades";
import IntegrarSetores from "../element/integrar-setores";
import Somos from "../element/somos";
import Planos from "../element/planos";
import Perguntas from "../element/perguntas";
import Footer from "../layout/footer";


export default function Index2() {

  useEffect(() => {

	  }, []);

 
  return (
    <>
        <Header />
      <div className="page-content">
        <Secao />
        <Somos />
        <IntegrarSetores />
        <Planos />  
        <Perguntas />       
      </div>
      
      <Footer />
    </>
  );
}





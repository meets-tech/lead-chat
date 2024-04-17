import React, { useEffect, useState } from 'react';
import Link from "next/link";




function Sucesso() {


  return (
    <>


      <div className="page-content page-teste d-flex align-items-center">
      <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5GJQK9J"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>

        <section className="teste-gratis">

                <div className="col-12 d-flex justify-content-center">
                    <div className="sucesso d-flex align-items-center justify-content-center flex-wrap col-md-5 p-5 text-center">
                      <img src="../images/icon/check.svg"  />
                      <h2 className="text-white">Obrigado! Seu Pagamento foi Realizado com Sucesso! <br/><br/> Entraremos em contato para liberar seu acesso e daremos continuidade ao parocesso de implantação.</h2>
                      {/* <h5 className="text-primary">Você receberá um e-mail para ativação da sua conta em instantes.</h5> */}
                  
                    </div>
                  
                </div>

        </section>
       
      </div>

    </>
  );
}

export default Sucesso;

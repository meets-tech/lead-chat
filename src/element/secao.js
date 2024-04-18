import { useEffect, useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import Image from 'next/image';


function Secao () {
	const [state, setState] = useState({
		dominio: null,
		fone: null,
		email: null,
		mailto: null,
		whatsapp_link: null,
		whatsapp_number: null,
		link_site: null
	})

    return (
   
		<div className="banner-three">
			<div className="container">
				<div className="row align-items-center justify-content-center">
					<div className="col-md-10">
						<div className="">
							<ul className="fotos">
								<li className="element">
									<img className="text-rotate rotate" src="images/icon/text-leads.svg" alt="" />
									<img className="foto" src="images/icon/foto-leads.png" alt="" />
								</li>
								<li className="mais">
									<img src="images/icon/mais.svg" alt="" />
								</li>
								<li className="element">
									<img className="text-rotate rotate" src="images/icon/text-whatsapp.svg" alt="" />
									<img className="foto" src="images/icon/foto-whatsapp.png" alt="" />
								</li>
								<li className="mais">
									<img src="images/icon/mais.svg" alt="" />
								</li>
								<li className="element">
									<img className="text-rotate rotate" src="images/icon/text-leadchat.svg" alt="" />
									<img className="foto" src="images/icon/foto-leadchat.png" alt="" />
								</li>
								<li className="mais">
									<img src="images/icon/igual.svg" alt="" />
								</li>
								<li className="element">
									<img className="text-rotate rotate" src="images/icon/text-vendas.svg" alt="" />
									<img className="foto" src="images/icon/foto-vendas.png" alt="" />
								</li>
							</ul>
						</div>
						<div className="banner-content text-center text-white">
							<h1 className="m-b20 c-at center-mob" data-aos="fade-right" data-aos-duration="100">Chatbot com Central de Atendimento de WhatsApp.<br/> <span>Automatize e Simplifique seu atendimento.</span></h1>
							<h6 className="mt-2 center-mob" data-aos="fade-right" data-aos-duration="300">Receba, atenda e converta leads e clientes do WhatsApp em um só lugar!<br/> Gerencie tudo em uma única tela:</h6>
							<div className="center-mob">
								<a href="https://app.leadchat.com.br/login" target="_blank" data-aos="fade-up" data-aos-duration="500" className="btn m-2 btn-teste rounded">Comece seu teste grátis</a>
								<a href="https://wa.me/558192991786" target="_blank" data-aos="fade-up" data-aos-duration="300" className="btn m-2 btn-light rounded">Falar com um consultor</a>
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</div>
    
    )
  }
  
  export default Secao;
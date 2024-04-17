import { useState } from "react";

function AllServices2() {
	const [open, setOpen] = useState("p2")
	return (
		<>

		<section className=" pb-5">
			<div className="container border-top">
				<div className="row align-items-center">
				<div className="">
						{/* <div className="section-head style-3 text-center">
							<h2 className="title">Por que escolher o Meets CRM?</h2>
							<h3 className="sub-title m-b20">temos soluções de negócios  que se encaixam muito bem nas suas necessidades</h3>
						</div> */}
						<div className="row">
							<div class="col-lg-3 col-md-12">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-xl" data-aos="fade-up" data-aos-duration="300">
										<img src="images/icon/departamento.svg" alt="" />
									</div>
									<div class="icon-content text-center plr-mob" data-aos="fade-up" data-aos-duration="500">
										<h4 class="dlab-tilte">Bot por departamentos</h4>
										<p>Encaminhe seu cliente para o departamento correto.</p>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-12">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-xl" data-aos="fade-up" data-aos-duration="700">
										<img src="images/icon/multibot.svg" alt="" />
									</div>
									<div class="icon-content text-center plr-mob" data-aos="fade-up" data-aos-duration="900">
										<h4 class="dlab-tilte">Multibot</h4>
										<p>Crie vários bots para cada canal ou linha do WhatsApp.</p>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-12">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-xl" data-aos="fade-up" data-aos-duration="1500">
										<img src="images/icon/chatbot-flow.svg" alt="" />
									</div>
									<div class="icon-content text-center plr-mob" data-aos="fade-up" data-aos-duration="1700">
										<h4 class="dlab-tilte">Chatbot Flow</h4>
										<p>Construa seu bot rapidamente usando nosso sistema visual Flow.</p>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-12">
								<div class="d-flex flex-column align-items-center justify-content-center">
									<div class="icon-bx-xl" data-aos="fade-up" data-aos-duration="1100">
										<img src="images/icon/bot-api.svg" alt="" />
									</div>
									<div class="icon-content text-center plr-mob" data-aos="fade-up" data-aos-duration="1300">
										<h4 class="dlab-tilte">Integrações Bot + API</h4>
										<p>Nos consulte sobre a possibilidade de integrações com api de terceiros. <br/>*Sob demanda.</p>
									</div>
								</div>
							</div>
							
						</div>
				</div>
				</div>
			</div>
		</section>

		</>
	)
}

export default AllServices2;
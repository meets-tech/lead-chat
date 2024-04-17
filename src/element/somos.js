import { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "../layout/footer";
import Header from "../layout/header";


function Somos() {
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
    <div className="">
        <section id="somos" className="container pt-6 pb-5">

			<div class="row justify-content-md-center mb-5" data-aos="fade-up" data-aos-duration="200">
					<div class="col-lg-6 col-md-6 col-12 pos-relative text-center" data-aos="fade-up" data-aos-duration="100">
						<img className="icon-bot move-3" src="images/banner/robo-meets-bot.png" alt="" />
						<img className="man-plano" src="images/banner/up-grade.png" alt="" /> 
					</div>
					<div class="col-lg-6 col-md-6 col-12 d-flex align-items-lg-center align-items-md-start plr-mob" data-aos="fade-up" data-aos-duration="200">
						<div className=" justify-content-md-center">
							<h3>Assuma o controle do seu negócio com um chatbot multifuncional!</h3>
							<h5 className="sub-title">Automatize tarefas repetitivas e liberte tempo para se concentrar no que realmente importa:</h5>
							<div className="row">
								<div className="col-lg-6 col-md-12 mt-3">
									<h5>Marketing:</h5>
									<p>Envie mensagens em massa e capture leads com mais eficiência.</p>
								</div>
								<div className="col-lg-6 col-md-12 mt-3">
									<h5>Geração de leads:</h5>
									<p>Capture leads qualificados 24 horas por dia, 7 dias por semana, através de chatbots e formulários inteligentes.</p>
								</div>
								<div className="col-lg-6 col-md-12 mt-3">
									<h5>Atendimento ao cliente:</h5>
									<p>Responda perguntas frequentes, resolva problemas e ofereça suporte instantâneo aos seus clientes.</p>
								</div>
								<div className="col-lg-6 col-md-12 mt-3">
									<h5>E muito mais:</h5>
									<p>Explore as infinitas possibilidades de automação para otimizar seu negócio.</p>
								</div>
							</div>
						</div>
					</div>
				</div>

			<div className="align-items-center">
				<div className="head style-3 mt-5 text-center">
					<h2 className="title">Principais Funcionalidades</h2>
					<h3 className="sub-title m-b20">Veja tudo que você terá em mãos no dia a dia para profissionalizar seus atendimentos.</h3>
				</div>
				<div className="row principais">
					<div class="col-lg-3 col-md-12">
						<div class="d-flex flex-column card rounded">
							<div class="" data-aos="fade-up" data-aos-duration="300">
								<img src="images/icon/multi-atendentes.svg" alt="" />
							</div>
							<div class="icon-content" data-aos="fade-up" data-aos-duration="500">
								<h4 class="dlab-tilte">Centralize suas conversas</h4>
								<p>Tenha acesso a todas as suas conversas do WhatsApp em um só lugar, facilitando a organização e o acompanhamento.</p>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-12">
						<div class="d-flex flex-column card rounded">
							<div class="" data-aos="fade-up" data-aos-duration="700">
								<img src="images/icon/dashboard.svg" alt="" />
							</div>
							<div class="icon-content" data-aos="fade-up" data-aos-duration="900">
								<h4 class="dlab-tilte">Dashboard</h4>
								<p>Visualize na tela inicial tudo que está acontecendo em tempo real. Faça filtro para obter informações específicas e assim tomar decisões assertivas.</p>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-12">
						<div class="d-flex flex-column card rounded">
							<div class="" data-aos="fade-up" data-aos-duration="1100">
								<img src="images/icon/troca-atendimento.svg" alt="" />
							</div>
							<div class="icon-content" data-aos="fade-up" data-aos-duration="1300">
								<h4 class="dlab-tilte">Transferir atendimento</h4>
								<p>Transfira um atendimento sempre que precisar, para um outro atendente ou setor.</p>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-12">
						<div class="d-flex flex-column card rounded">
							<div class="" data-aos="fade-up" data-aos-duration="1500">
								<img src="images/icon/agendamentos.svg" alt="" />
							</div>
							<div class="icon-content" data-aos="fade-up" data-aos-duration="1700">
								<h4 class="dlab-tilte">Agendamentos</h4>
								<p>Agende mensagens personalizadas e até anexe arquivos se necessário e dispare no dia e hora desejada.</p>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-12">
						<div class="d-flex flex-column card rounded">
							<div class="" data-aos="fade-up" data-aos-duration="1500">
								<img src="images/icon/comunicacao.svg" alt="" />
							</div>
							<div class="icon-content" data-aos="fade-up" data-aos-duration="1700">
								<h4 class="dlab-tilte">Comunicação eficiente</h4>
								<p>Responda seus leads e clientes com rapidez e agilidade, sem precisar alternar entre diferentes plataformas.</p>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-12">
						<div class="d-flex flex-column card rounded">
							<div class="" data-aos="fade-up" data-aos-duration="1500">
								<img src="images/icon/fluxo.svg" alt="" />
							</div>
							<div class="icon-content" data-aos="fade-up" data-aos-duration="1700">
								<h4 class="dlab-tilte">Crie oportunidades dentro do fluxo</h4>
								<p>Identifique e converta leads em clientes com mais facilidade.</p>
							</div>
						</div>
					</div>
					
					<div class="col-lg-3 col-md-12">
						<div class="d-flex flex-column card rounded">
							<div class="" data-aos="fade-up" data-aos-duration="1500">
								<img src="images/icon/resposta-rapida.svg" alt="" />
							</div>
							<div class="icon-content" data-aos="fade-up" data-aos-duration="1700">
								<h4 class="dlab-tilte">Respostas rápidas</h4>
								<p>Cadastre respostas rápidas para dar mais velocidade ao atendimento</p>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-12">
						<div class="d-flex flex-column card rounded">
							<div class="" data-aos="fade-up" data-aos-duration="1500">
								<img src="images/icon/perfil-adm.svg" alt="" />
							</div>
							<div class="icon-content" data-aos="fade-up" data-aos-duration="1700">
								<h4 class="dlab-tilte">Perfil administrador</h4>
								<p>O administrador tem acesso a todos os atendimentos, podendo ainda direcionar um lead para um atendente específico.</p>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-12">
						<div class="d-flex flex-column card rounded">
							<div class="" data-aos="fade-up" data-aos-duration="1500">
								<img src="images/icon/tags.svg" alt="" />
							</div>
							<div class="icon-content" data-aos="fade-up" data-aos-duration="1700">
								<h4 class="dlab-tilte">Organize com Tags</h4>
								<p>Classifique suas conversas por tags personalizadas para facilitar a busca e o acompanhamento.</p>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-12">
						<div class="d-flex flex-column card rounded">
							<div class="" data-aos="fade-up" data-aos-duration="1500">
								<img src="images/icon/chat-interno.svg" alt="" />
							</div>
							<div class="icon-content" data-aos="fade-up" data-aos-duration="1700">
								<h4 class="dlab-tilte">Chat interno</h4>
								<p>Abra conversas com outros atendentes a qualquer momento.</p>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-12">
						<div class="d-flex flex-column card rounded">
							<div class="" data-aos="fade-up" data-aos-duration="1500">
								<img src="images/icon/muito-mais.svg" alt="" />
							</div>
							<div class="icon-content" data-aos="fade-up" data-aos-duration="1700">
								<h4 class="dlab-tilte">E muito mais...</h4>
								<p>Explore outras funcionalidades que te ajudarão a otimizar o atendimento e aumentar suas vendas.</p>
							</div>
						</div>
					</div>
				</div>

				<div className="row align-items-center mt-5">
					<div className="col-lg-6 col-md-12">
						<h5 className="sub-title">Não para por ai!</h5>
						<h4>Se precisar incrementar ainda mais sua central de atendimento, dispomos de add-ons extras para elevar o nível dos atendimentos.</h4>
						<a href="https://wa.me/558192991786" target="_blank" data-aos="fade-up" data-aos-duration="300" className="btn btn-primary btn-round">Entre em contato para falar sobre suas necessidades</a>
					</div>
					<ul className="d-flex col-lg-6 col-md-12 mt-4 text-center align-items-center justify-content-center addons">
						<li className="col-lg-4 col-md-12 pl-0">
							<div className="card rounded p-4">
							<img src="images/icon/api-externa.svg" alt="" />
							API Externa
							</div>
						</li>
						<li className="col-lg-4 col-md-12">
							<div className="card rounded p-4">
							<img src="images/icon/conexoes.svg" alt="" />
							Conexões
							</div>
						</li>
						<li className="col-lg-4 col-md-12 pr-0">
							<div className="card rounded p-4">
							<img src="images/icon/outros.svg" alt="" />
							Outros
							</div>
						</li>
					</ul>
				</div>
				
			</div>
		</section>
	</div>
  );
}
  
  export default Somos;
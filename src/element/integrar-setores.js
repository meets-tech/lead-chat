import { useEffect, useState } from "react";
import Image from 'next/image'

function IntegrarSetores() {

    return (
    
		<div id="vantagens" className="bg-white">
        <section className="container pt-6 pb-5 vantagens">
		
			<div className="col-lg-12 col-md-12 text-center">
				<h5 className="sub-title">Não te deixamos na mão!</h5>
				<h3>Vantagens de escolher a Lead Chat</h3>
			</div>

					<div className="row mt-5">
						<div class="col-lg-4 col-md-12 mb-4">
							<div class="d-flex flex-column rounded box-setores" data-aos="fade-up" data-aos-duration="200">
								<div class="pb-3" data-aos="fade-up" data-aos-duration="100">
									<img src="images/icon/setores/atendimento.svg" alt="" />
								</div>
								<div class="" data-aos="fade-up" data-aos-duration="200">
									<h4 class="">Suporte Permanente</h4>
									<p>Conte conosco para tirar suas dúvidas no dia-a-dia com suporte permanente. Nosso atendimento são por ticket, Chat e E-mail.</p>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-12 mb-4">
						<div class="d-flex flex-column rounded box-setores" data-aos="fade-up" data-aos-duration="400">
								<div class="pb-3" data-aos="fade-up" data-aos-duration="300">
									<img src="images/icon/setores/privacidade.svg" alt="" />
								</div>
								<div class="" data-aos="fade-up" data-aos-duration="400">
									<h4 class="">Privacidade</h4>
									<p>Cada cliente possui uma base de dados exclusiva, garantindo a separação completa de informações.</p>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-12 mb-4">
						<div class="d-flex flex-column rounded box-setores" data-aos="fade-up" data-aos-duration="600">
								<div class="pb-3" data-aos="fade-up" data-aos-duration="500">
									<img src="images/icon/setores/seguranca.svg" alt="" />
								</div>
								<div class="" data-aos="fade-up" data-aos-duration="600">
									<h4 class="">Segurança</h4>
									<p>Estamos hospedados da Amazon AWS. Contamos com servidores de última geração para garantir a integridade de seus dados.</p>
								</div>
							</div>
						</div>					
					</div>

			</section>
		</div>
    
  );
}
  
  export default IntegrarSetores;
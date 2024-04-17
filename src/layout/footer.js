import { useEffect, useState } from "react";
//import absoluteUrl from 'next-absolute-url'

export default function Footer(props) {
	//const { origin } = absoluteUrl(req)

	//console.log("props footer", props);
	
	
	
	useEffect(() => {
		
		
	  }, []);
	

	return (
	  <>
	  {/* <!-- Footer --> */}
	  <footer className="site-footer pt-3">
			  <div className="container">
				  <div className="row pt-2 pb-2">
					  
						<div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
							<div className="widget style-1 center-mob">
								<h5 className="footer-title">Lead Chat</h5>
								<ul className="center-mob">
									<li><a href="/termos-e-condicoes"><img className="custom-logo-white" src="../images/icon/termos.svg" alt="" /> Termos e Condições</a></li>
									<li><a href="/politica-de-privacidade"><img className="custom-logo-white" src="../images/icon/politica.svg" alt="" /> Política de privacidade</a></li>
								</ul>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-4  col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="1.0s">
							<div className="widget style-1 center-mob">
								<h5 className="footer-title">Suporte</h5>
								<ul className="center-mob">
									{/* <li><a href="#"><img className="custom-logo-white" src="../images/icon/skype.svg" alt="" /> atendimento</a></li> */}
									<li><a href="https://wa.me/558192991786" className="whats" target="_blank"><img className="custom-logo-white" src="../images/icon/whatsapp.svg" alt="" /> 55 81 9299-1786</a></li>
								</ul>
							</div>
						</div>
						
						<div className="d-flex col-xl-6 col-lg-12 col-md-12 col-sm-6 center-mob align-items-end justify-content-lg-end justify-content-md-between">
							<div className="aws">
								<img src="images/icon/aws.svg" alt=""/>
								<p>Estamos hospedados<br/> na Amazon web<br/> services</p>
							</div>
							<div className="espirito text-right">
								<img src="images/logo/espirito-santo.svg" alt=""/>	
								<p>De tanto ele insistir,<br/> o anjo lhe tocou<br/> E abençoado ele foi.</p>
							</div>					  
						</div>
				  </div>
			  </div>

		  {/* <!-- footer bottom part --> */}
		  <div className="footer-bottom">
			  <div className="container">
				  <div className="row align-items-center">
					  <div className="col-md-12"> 
						  <span className="copyright-text">Copyright © {new Date().getFullYear()} <a href="#" target="_blank">Lead Chat</a>. Todos os direitos reservados.</span>
					  </div>
				  </div>
			  </div>
		  </div>
	  
		  <div className="icon-whats">
		  <a href="https://wa.me/558192991786" className="whats" target="_blank"><span className="fa fa-whatsapp"></span></a>
		  </div>
		  
		  
		  
	  
	  </footer>
	  {/* <!-- Footer End --> */}
	  </>
	)
  }

  

  

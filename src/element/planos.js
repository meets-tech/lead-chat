
import Toggle from "../component/precosToggle";
function Planos() {
    return (
      
    <div className="bg-white">
      <section id="planos" className="container pt-4 pb-4">
          
          <div class="d-flex box-plano rounded mb-5" data-aos="fade-up" data-aos-duration="200">
            <div class="col-lg-6 col-md-6 col-12 text-plano" data-aos="fade-up" data-aos-duration="200">
              <div className=" pl-5">
                <h4 class="tit-preco">Temos planos a partir de</h4>
                <h3>R$49,90 por usuário.</h3>
                <p>Entre em contato com nossos consultores para mais informações sobre o melhor plano para sua empresa.</p>
                <div>
                <a href="https://app.leadchat.com.br/login" target="_blank" data-aos="fade-up" data-aos-duration="300" className="btn btn-primary mr-3 rounded">Faça um teste grátis</a>
                <a href="https://wa.me/558192991786" target="_blank" data-aos="fade-up" data-aos-duration="300" className="btn btn-crm mr-3 rounded">Saber sobre os planos</a>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-12 text-center" data-aos="fade-up" data-aos-duration="100">
              <img className="" src="images/banner/mulher-planos.png" alt="" />
            </div>
          </div>
        
      </section>
    </div>
  
    )
  }
  
  export default Planos;
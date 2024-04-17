
import Toggle from "../component/precosToggle";
function Box() {
    return (
      
    <div className="bg-white">
      <section id="planos" className="container">

          <div class="row justify-content-md-center pos-relative" data-aos="fade-up" data-aos-duration="200">
          <div class="col-lg-6 col-md-6 col-12 pos-relative text-center" data-aos="fade-up" data-aos-duration="100">
              <img className="icon-bot move-3" src="images/banner/robo-meets-bot.png" alt="" />
              <img className="man-plano" src="images/banner/up-grade.png" alt="" /> 
            </div>
            <div class="col-lg-6 col-md-6 col-12 d-flex align-items-lg-center align-items-md-start plr-mob" data-aos="fade-up" data-aos-duration="200">
              <div className=" justify-content-md-center">

                <h5 className="sub-title"> Dê um upgrade e venda mais.</h5>
                <h3>Voce sabia que o Lead Chat pode ficar ainda melhor?</h3>
                <h6>Conheça o meets bot e agilize ainda mais o atendimento dos seus leads/clientes.</h6>
              <div className="mt-4">
                <a href="https://www.meets.com.br/meets-bot" target="_blank" data-aos="fade-up" data-aos-duration="300" className="btn btn-bot mr-3 rounded text-white">Meets Bot</a>
              </div>
              </div>
            </div>
            
          </div>
        
      </section>
    </div>
  
    )
  }
  
  export default Box;
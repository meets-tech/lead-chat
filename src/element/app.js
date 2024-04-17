
import Toggle from "../component/precosToggle";
function App() {
    return (
      
    <div className="bg-white">
      <section className="container pt-6 pb-6">
          
          <div id="app" class="d-flex justify-content-md-center rounded flex-row-reverse pos-relative" data-aos="fade-up" data-aos-duration="200">
            
            <div class="col-lg-6 col-md-6 col-12 d-flex align-items-lg-center align-items-md-start" data-aos="fade-up" data-aos-duration="200">
              <div className="head justify-content-md-center">
                <h3 class="sub-title">Leve o Lead Chat com você.</h3>
                <h2 className="">Acesse o app e tenha o controle de despesas de produção nas suas mãos.</h2>
                <div className="btn-store">
                  <a href="https://despesasapp.sistemajobb.com.br/login" target="_blank" data-aos="fade-up" data-aos-duration="300" className="btn"><img src="images/icon/btn-app-store.svg" alt="" /></a>
                  <a href="https://despesasapp.sistemajobb.com.br/login" target="_blank" data-aos="fade-up" data-aos-duration="300" className="btn"><img src="images/icon/btn-google-play.svg" alt="" /></a>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-12 pos-relative banner-app" data-aos="fade-up" data-aos-duration="100">
              <img className="apps move-4" src="images/banner/app-jobb.png" alt="" />
            </div>
          </div>
        
      </section>
    </div>
  
    )
  }
  
  export default App;
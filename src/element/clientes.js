import ClientSlider from "../component/clientSlider";
import TestimonialSlider from "../component/testimonialSlider";

function Clientes() {
    return (
  
            <section className="container pt-6 pb-3">
                <div className="container">
                    <div className="head text-center mb-0">
                        <h2 className="title">Nossos clientes recomendam!</h2>
                        <h3 className="sub-title m-b20">Já são mais de 300 produtoras parceiras</h3>
                    </div>
                    <div className="clients-carousel owl-none owl-carousel owl-loaded owl-drag">
                        <ClientSlider />
                    </div>
                    <div className="depoimentos text-center mb-4">
                        <h5 className="sub-title">O que eles dizem sobre o Jobb</h5>
                        <TestimonialSlider />
                    </div>
                </div>
            </section>     

    );
}

export default Clientes;

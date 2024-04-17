import { useState } from 'react';
import Slider from "react-slick";


function BoxNovidades() {
    const [asd, setAsd] = useState();
    const settings = {
        arrows:false,
        centerMode:true,
        slidesToShow:2,
        dots:true,
        infinite:true,
        slidesToScroll:1,
        autoplay:true,
		responsive: [
			
			{
			  breakpoint: 1320,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
				centerMode:false,
			  }
			},
			{
			  breakpoint: 720,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
				centerMode:false,
			  }
			},
		]	
	};
const renderArrows = () => {
    return (
      <div className="owl-nav">
        <div
          className="owl-prev"
          onClick={() => asd.slickPrev()}
        >
          <i className="fa fa-arrow-left"></i>
        </div>
        <div
          className="owl-next"
          onClick={() => asd.slickNext()}
        >
          <i className="fa fa-arrow-right"></i>
        </div>
      </div>
    );
  };
    return (
        <>
        <div id='slide-novidades' className="testimonials-carousel1 owl-carousel owl-theme owl-btn-2 owl-btn-white owl-btn-center">
            <Slider
                ref={c => setAsd(c)}
                {...settings}              
            >
                <div className="item wow fadeInUp"  data-wow-duration="2s" data-wow-delay="0.2s" >
                    <div className="card rounded p-4">
                        <div className='d-flex align-items-center'>
                            <img src="images/icon/link.svg" alt="link" />
                            <span className='tag ml-3'>Nova Funcionalidade</span>
                        </div>
                        <div className="">
                            <h3>O Lead Chat agora tem envio de cadastro de fornecedores por link.</h3>
                            <p>Agora seu fornecedor tem a facilidade de atualizar os próprios dados que ficam salvos automaticamente no sistema da sua produtora em apenas 1 clique.</p>
                        </div>
                    </div>
                </div>
                <div className="item wow fadeInUp"  data-wow-duration="2s" data-wow-delay="0.2s" >
                    <div className="card rounded p-4">
                        <div className='d-flex align-items-center'>
                            <img src="images/icon/d4sign.svg" alt="d4sign" />
                            <span className='tag ml-3'>Nova Integração</span>
                        </div>
                        <div className="">
                            <h3>Já estamos integrados a D4sign. Tenha a praticidade da assinatura digital.</h3>
                            <p>Além de você gerar os contratos em PDF de uma maneira prática e automatizada, agora você já pode enviar os contratos para seus clientes e fornecedores assinarem online.</p>
                        </div>
                    </div>
                </div>
                <div className="item wow fadeInUp"  data-wow-duration="2s" data-wow-delay="0.2s" >
                    <div className="card rounded p-4">
                        <div>
                            <img src="images/icon/nfse.svg" alt="nfse" />
                        </div>
                        <div className="">
                            <h3>Emissão de nota fiscal eletrônica</h3>
                            <p>A emissão de nota fiscal eletrônica integrada ao sistema financeiro traz agilidade e eficiência, eliminando a necessidade de digitação manual das informações. Além disso, a integração permite a automação do processo de envio, garantindo maior segurança e transparência nas transações comerciais.</p>
                        </div>
                    </div>
                </div>
                <div className="item wow fadeInUp"  data-wow-duration="2s" data-wow-delay="0.2s" >
                    <div className="card rounded p-4">
                        <div>
                            <img src="images/icon/pdf.svg" alt="pdf" />
                        </div>
                        <div className="">
                            <h3>Geração de contrato em PDF</h3>
                            <p>Crie contratos em PDF e tenha a flexibilidade de cadastrar vários modelos de contratos em nosso sistema. Isso permite que você personalize e envie contratos aos fornecedores ou clientes de maneira prática, atendendo às suas necessidades específicas de negócios.</p>

                        </div>
                    </div>
                </div>
                <div className="item wow fadeInUp"  data-wow-duration="2s" data-wow-delay="0.2s" >
                    <div className="card rounded p-4">
                        <div>
                            <img src="images/icon/ofx.svg" alt="ofx" />
                        </div>
                        <div className="">
                            <h3>Conciliação bancária inteligente por arquivo Ofx</h3>
                            <p>Tenha praticidade e economize tempo com nossa solução de conciliação bancária. Simplificamos o processo para que você possa gerenciar suas finanças com facilidade, economizando tempo valioso e esforço. </p>

                        </div>
                    </div>
                </div>
       
            </Slider>
            {renderArrows()}
            </div>
        </>
    );
}

export default BoxNovidades;

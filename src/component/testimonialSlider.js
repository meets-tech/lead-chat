import { useState } from 'react';
import Slider from "react-slick";


function TestimonialSlider() {
    const [asd, setAsd] = useState();
    const settings = {
        arrows:false,
        centerMode:true,
        slidesToShow:1,
        dots:true,
        infinite:true,
        slidesToScroll:1,
        autoplay:true,
		responsive: [
			
			{
			  breakpoint: 1320,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
				centerMode:false,
			  }
			},
			{
			  breakpoint: 480,
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
        <div className="testimonials-carousel1 owl-carousel owl-theme owl-btn-2 owl-btn-white owl-btn-center">
            <Slider
                ref={c => setAsd(c)}
                {...settings} 
                
            >
                <div className="item wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                    <div className="testimonial-1">
                        <div className="testimonial-text">
                            <p>
                                “O Jobb nos permitiu um salto da profissionalização do setor de contas. Nos dá total segurança na gestão financeira dos projetos e prestação de contas além de termos um suporte muito ágil para qualquer necessidade.”
                            </p>
                        </div>
                        <div className="testimonial-detail">
                            <div className="testimonial-pic">
                                <img src="images/depoimentos/juliana-villas.jpg" alt="juliana-villas" />
                            </div>
                            <div className="clearfix">
                                <strong className="testimonial-name">
                                Juliana Villas 
                                </strong>
                                <span className="testimonial-position">
                                Terravista Filmes{" "}
                                </span>
                                <ul className="star-rating">
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                    <div className="testimonial-1">
                        <div className="testimonial-text">
                            <p>
                                “A implementação do Lead Chat aqui na produtora foi transformadora. É um software completo e, ao mesmo tempo, prático e fácil de usar. Integrou os setores da empresa e tornou-se essencial. Hoje não sabemos viver sem”
                            </p>
                        </div>
                        <div className="testimonial-detail">
                            <div className="testimonial-pic">
                                <img src="images/depoimentos/barbara-varela.jpg" alt="barbara-varela" />
                            </div>
                            <div className="clearfix">
                                <strong className="testimonial-name">
                                Bárbara Varela
                                </strong>
                                <span className="testimonial-position">
                                Paralelo 15 Filmes{" "}
                                </span>
                                <ul className="star-rating">
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                    <div className="testimonial-1">
                        <div className="testimonial-text">
                            <p>
                                “O Jobb é vital para a Sanfona. Temos total controle de orçamentos, custos, lucratividade, pagamentos e os relatórios mais específicos de forma rápida e muito intuitiva. Recomendo até pros meus concorrentes.”
                            </p>
                        </div>
                        <div className="testimonial-detail">
                            <div className="testimonial-pic">
                                <img src="images/depoimentos/alfredo-valtier.jpg" alt="alfredo-valtier" />
                            </div>
                            <div className="clearfix">
                                <strong className="testimonial-name">
                                    Alfredo Valtier
                                </strong>
                                <span className="testimonial-position">
                                    Sanfona Filmes{" "}
                                </span>
                                <ul className="star-rating">
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.4s"
                >
                    <div className="testimonial-1">
                        <div className="testimonial-text">
                            <p>
                                “Otimizamos todas as fases dos nossos projetos. Conseguimos concentrar as informações para depois analisá-las.”
                            </p>
                        </div>
                        <div className="testimonial-detail">
                            <div className="testimonial-pic">
                                <img src="images/depoimentos/ofir-figueiredo.jpg" alt="" />
                            </div>
                            <div className="clearfix">
                                <strong className="testimonial-name">
                                Ofir Figueiredo
                                </strong>
                                <span className="testimonial-position">
                                Rec Produtores{" "}
                                </span>
                                <ul className="star-rating">
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.4s"
                >
                    <div className="testimonial-1">
                        <div className="testimonial-text">
                            <p>
                                “Conseguimos dar maior agilidade em nossos projetos e processos, aumentando assim nosso crescimento e retorno de respostas aos clientes.”
                            </p>
                        </div>
                        <div className="testimonial-detail">
                            <div className="testimonial-pic">
                                <img src="images/depoimentos/elisangela.jpg" alt="" />
                            </div>
                            <div className="clearfix">
                                <strong className="testimonial-name">
                                Elisangela 
                                </strong>
                                <span className="testimonial-position">
                                Guerrilha Filmes{" "}
                                </span>
                                <ul className="star-rating">
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.4s"
                >
                    <div className="testimonial-1">
                        <div className="testimonial-text">
                            <p>
                                “Somos clientes há alguns anos e a ferramenta está totalmente incorporada ao dia a dia da produtora. Hoje não vejo a Chá sem o Sistema Jobb!”
                            </p>
                        </div>
                        <div className="testimonial-detail">
                            <div className="testimonial-pic">
                                <img src="images/depoimentos/philip.jpg" alt="" />
                            </div>
                            <div className="clearfix">
                                <strong className="testimonial-name">
                                Philip Moss 
                                </strong>
                                <span className="testimonial-position">
                                Sócio diretor, Chá das 5{" "}
                                </span>
                                <ul className="star-rating">
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.6s"
                >
                    <div className="testimonial-1">
                        <div className="testimonial-text">
                            <p>
                                “Conseguimos dar maior agilidade em nossos projetos e processos, aumentando assim nosso crescimento e retorno de respostas aos clientes.”
                            </p>
                        </div>
                        <div className="testimonial-detail">
                            <div className="testimonial-pic">
                                <img
                                    src="images/depoimentos/elisangela.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="clearfix">
                                <strong className="testimonial-name">
                                    Elisangela
                                </strong>
                                <span className="testimonial-position">
                                Guerrilha Filmes{" "}
                                </span>
                                <ul className="star-rating">
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.6s"
                >
                    <div className="testimonial-1">
                        <div className="testimonial-text">
                            <p>
                                “Somos clientes há alguns anos e a ferramenta está totalmente incorporada ao dia a dia da produtora. Hoje não vejo a Chá sem o Sistema Jobb!”
                            </p>
                        </div>
                        <div className="testimonial-detail">
                            <div className="testimonial-pic">
                                <img
                                    src="images/depoimentos/philip.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="clearfix">
                                <strong className="testimonial-name">
                                    Philip Moss
                                </strong>
                                <span className="testimonial-position">
                                    	Sócio diretor, Chá das 5{" "}
                                </span>
                                <ul className="star-rating">
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.6s"
                >
                    <div className="testimonial-1">
                        <div className="testimonial-text">
                            <p>
                                “O Jobb nos permitiu um salto da profissionalização do setor de contas. Nos dá total segurança na gestão financeira dos projetos e prestação de contas além de termos um suporte muito ágil para qualquer necessidade.”
                            </p>
                        </div>
                        <div className="testimonial-detail">
                            <div className="testimonial-pic">
                                <img
                                    src="images/depoimentos/barbara.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="clearfix">
                                <strong className="testimonial-name">
                                    Bárbara Varela
                                </strong>
                                <span className="testimonial-position">
                                    Produtora 
                                    Paralelo 15 Filmes{" "}
                                </span>
                                <ul className="star-rating">
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.6s"
                >
                    <div className="testimonial-1">
                        <div className="testimonial-text">
                            <p>
                                “A implementação do Lead Chat aqui na produtora foi transformadora. É um software completo e, ao mesmo tempo, prático e fácil de usar. Integrou os setores da empresa e tornou-se essencial. Hoje não sabemos viver sem.”
                            </p>
                        </div>
                        <div className="testimonial-detail">
                            <div className="testimonial-pic">
                                <img
                                    src="images/depoimentos/juliana.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="clearfix">
                                <strong className="testimonial-name">
                                    Juliana Villas
                                </strong>
                                <span className="testimonial-position">
                                Financeiro da Terravista Filmes{" "}
                                </span>
                                <ul className="star-rating">
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> */}
            </Slider>
            {renderArrows()}
            </div>
        </>
    );
}

export default TestimonialSlider;

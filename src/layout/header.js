import Link from 'next/link';
import { useEffect, useState } from "react";
import * as Unicons from '@iconscout/react-unicons';
import { useScrollPosition } from '@n8tb1t/use-scroll-position'


import React from 'react'
import Select from 'react-select'

function Header() {
    
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState("home");
    const [header, setHeader] = useState("fixed");
    const [header_, setHeader_] = useState();
    
    useScrollPosition(({ currPos }) => {
       if (currPos.y < -200) {
        header_ && header_[0].classList.add("is-fixed");
       } else if (currPos.y > -200) {
        header_ && header_[0].classList.remove("is-fixed");
       } 
     })
    
    useEffect(() => {
        setHeader_(document.getElementsByClassName("main-bar-wraper"));
      }, []);

      const chageHeader = (value) => {
        setHeader(value);
        if (value === "fixed") {
          header_[0].classList.add("sticky-header");
          header_[0].classList.remove("sticky-no");
        } else {
          header_[0].classList.add("sticky-no");
          header_[0].classList.remove("sticky-header");
          header_[0].classList.remove("is-fixed");
        }
      };

      const options = [
        { value: 'PT', label: 'PT' },
        { value: 'ES', label: 'ES' },
        { value: 'EN', label: 'EN' }
      ]
      
   
    // header === "fixed" && scrollPosition > 0
    // ? header_ && header_[0].classList.add("is-fixed")
    // : header_ && header_[0].classList.remove("is-fixed");
  
    return <>

        {/* <div className="breve">
        <p><Unicons.UilInstagram /> Novidafdsfgdfgde!! Agora o Instagram Direct está integrado ao Meets.</p>
        </div> */}

        <header id='home' className="site-header mo-left header-transparent">

            <div className="sticky-header main-bar-wraper navbar-expand-lg">
                <div className="main-bar clearfix ">
                    <div className="container clearfix">
                        {/* <!-- Website Logo --> */}
                        <div className="logo-header mostion logo-dark">
                            <Link href="/">

                                <img className="custom-logo-white" src="../images/logo/logo-lead-chat-white.svg" alt="" />
                                <img className="custom-logo" src="../images/logo/logo-lead-chat.svg" alt="" />

                            </Link>
                        </div>
                        {/* <!-- Nav Toggle Button --> */}
                        <button
                            className={`navbar-toggler collapsed navicon justify-content-end ${
                                show ? "open" : ""
                            }`}
                            onClick={() => setShow(!show)}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        {/* <!-- Extra Nav --> */}
                        <div className="extra-nav">
                            <div className="extra-cell">
                                <Link
                                    href="https://app.leadchat.com.br/login"
                                    target="_blank"
                                    className="btn btn-teste rounded"
                                    rel="noreferrer">
                                    Teste Grátis
                                </Link>   
                            </div>
                        </div>
                        
                        <div
                            className={`header-nav navbar-collapse collapse justify-content-end ${
                                show ? "show" : ""
                            }`}
                            id="navbarNavDropdown"
                        >
                            <div className="logo-header">
                                <Link href="/index">
                                    <img src="images/logo/logo-jobb.svg" alt="" />
                                </Link>
                            </div>

                            <ul className="nav navbar-nav navbar">                    
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="#somos">Funcionalidades</Link></li>
                                <li><Link href="#vantagens">Vantagens</Link></li>
                                {/* <li><Link
                                    href=""
                                    target="_blank"
                                    rel="noreferrer">Ajuda</Link>
                                </li> */}
                                
                            </ul>
                             <div className="dlab-social-icon">
                                <div className="extra-cell d-flex flex-column">
                                    <Link
                                        href="https://app.leadchat.com.br/login"
                                        className="btn btn-teste rounded-xl"
                                        target="_blank"
                                        rel="noreferrer">
                                        Teste Grátis
                                    </Link>
                                    {/* <Link
                                        href="login"
                                        className="btn btn-login rounded-xl"
                                        target="_blank"
                                        rel="noreferrer">
                                        Login
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Main Header End --> */}
        </header>
    </>;
}

export default Header;

import { useEffect, useState } from "react";
import Accordion from 'react-bootstrap/Accordion';


function Perguntas() {

    const defaultContent =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  
    return (
      <section id="" className="container pt-6 pb-5">
        <div className="align-items-center">
          <div className="head style-3 text-center">
            <h2 className="title mb-4">Perguntas frequentes</h2>
          </div>
          <div className="row">
            <div className="col-12">
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>O que é o Leadchat?</Accordion.Header>
              <Accordion.Body>
              É uma plataforma de automação com chatbot e WhatsApp que ajuda você a conectar seu cliente de forma rápida e eficiente em tempo real.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Não conheço de tecnologia. Como vou saber o que fazer?</Accordion.Header>
              <Accordion.Body>
              Você receberá suporte do nosso time. Iremos  te ajudar a construir seu bot e conectar sua linha.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Como conectar meu WhatsApp com o Leadchat?</Accordion.Header>
              <Accordion.Body>
              A conexão com o Leadchat é a mesma realizada com o WhatsApp web. Basta escanear o QR Code da plataforma e seu WhatsApp estará conectado.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Quantos números de WhatsApp consigo conectar na plataforma?</Accordion.Header>
              <Accordion.Body>
              Inicialmente você pode conectar um número de WhatsApp quando cria sua conta. Para mais de um número você pode solicitar no nosso suporte.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Quantas pessoas você pode conversar ou alcançar com seus robôs?</Accordion.Header>
              <Accordion.Body>
                <h6>No Plano Digital</h6>
                <ul>
                <li>Alcance: Converse com até 300 pessoas diferentes por mês.</li>
                <li>Ideal para: Começar a automatizar suas conversas e interações com o público, testar diferentes abordagens e mensurar resultados.</li>
                </ul>
                <h6>No Plano Mágico</h6> 
                <ul>
                  <li>Alcance: Converse com até 1000 pessoas diferentes por mês</li>
                  <li>Ideal para: Quem está em evolução com seus clientes</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>O que acontece após atender todas as pessoas no mês com o meu plano?</Accordion.Header>
              <Accordion.Body>
              Você tem um custo de R$ 0,10 centavos  por conversa  extras.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        </div>
      </div>
    </section>
    );
  }
export default Perguntas;

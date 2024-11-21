import React, { useState } from 'react'
import type { HeadFC, PageProps } from "gatsby"

import Modal from "react-modal"

const customStyles = { 
    content: { 
        maxWidth: '600px',
        top: '50%', 
        left: '50%', 
        right: 'auto', 
        bottom: 'auto', 
        marginRight: '-50%', 
        transform: 'translate(-50%, -50%)'
        }, 
    overlay: { backgroundColor: 'rgba(0, 0, 0, 0.8'}
}

// Componentes
import HeaderComponent from "../components/headerComponent"
import FooterComponent from '../components/footerComponent'

// Imagens
import FogueteImagem from "../images/foguete-3d.png"
import {HeartIcon} from "@heroicons/react/24/outline"
import DesignDeServicoImagem from "../images/design-de-servico.svg"
import DesignDeAppsImagem from "../images/design-de-apps-e-sites.svg"
import IdentidadeVisualImagem from "../images/identidade-visual.svg"
import PresencaEmRedeImagem from "../images/presenca-em-rede.svg"
import Metadata from '../components/metadata'



const IndexPage = () => {
    const [modalIsOpen, setIsOpen] = useState(false); 
    const [modalContent, setModalContent] = useState(null); 
    const openModal = (content) => { setModalContent(content); setIsOpen(true); }; 
    const closeModal = () => { setIsOpen(false); setModalContent(null); };
    
  return (
    <div>
        <header id="header" className="pt-10 lg:text-left xl:pb-10 bg-gradient-to-b from-[#c5eaf9] to-white">
          <HeaderComponent />
            <div className="mx-auto max-w-6xl px-4 sm:px-8 grid lg:grid lg:grid-cols-2 lg:gap-x-8 flex">
                
                <div className="flex flex-col items-center justify-center lg:items-baseline lg:mt-32 lg:order-1 mb-16 order-2 sm:order-2 xl:mr-12 xl:mt-10">
                    
                    <h1 className="mb-5 text-center lg:text-left">Sua empresa melhor, direto ao ponto.</h1>
                    <p className="mb-8 text-center lg:text-left">Que tal um site leve, um logotipo original ou inovar no que você vende?
                        Você pensa, nós fazemos!</p>
                    <a className="page-scroll bg-purple-700 hover:bg-purple-800 text-white px-6 pt-3 pb-2.5 rounded-full flex " href="#features"><HeartIcon className=" mt-0.5 mr-2.5 size-5 flex-none" />Saiba Mais</a>
                </div>
                <div className="flex md:justify-center justify-start order-1 sm:order-1 m-5 sm:m-20 lg:m-1 lg:order-2">
                    <img className="inline md:h-96 lg:h-auto lg:m-1" src={FogueteImagem} alt="alternative" />
                </div>
            </div>
        </header>
        

       
        <div id="features" className="mx-auto max-w-6xl lg:pt-40 pt-20 px-4 sm:px-8">

            <div className="mb-10 max-w-2xl text-center mx-auto">
            <p className="mt-2 text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-balance">
            Uma empresa digital e <span className="text-gradient">multidisciplinar</span>
          </p>
          <p className="mt-4 text-lg/8 text-gray-600">
          Combinamos nossas habilidades para criar soluções inovadoras e transformar desafios em ótimos resultados.
          </p>
            </div>
            
            <div className="flex flex-col lg:flex-row sm:gap-x-4 gap-y-4 mt-16 sm:mt-20 lg:mt-24" >

                <div className="flex-1 bg-amarelo flex flex-col items-center p-10 rounded-xl">
                    <div className="bg-white rounded-full p-7 mb-6">
                        <img src={DesignDeServicoImagem} className="w-20 h-20" alt="alternative" />
                    </div>
                    <div className="text-center">
                        <h5 className="mb-7">Design de Serviço</h5>
                        <button onClick={() => openModal('design-de-servico')} className="border border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white px-6 py-3 popup-with-move-anim rounded-full">Saiba Mais</button>
                    </div>
                </div>
                

                
                <div className="flex-1 bg-verde flex flex-col items-center p-10 rounded-xl">
                    <div className="bg-white rounded-full p-7 mb-6">
                        <img src={PresencaEmRedeImagem} className="w-20 h-20" alt="alternative" />
                    </div>
                    <div className="text-center">
                        <h5 className="mb-7">Presença em Redes Sociais</h5>
                        <button onClick={() => openModal('presenca-em-redes-sociais')} className="border border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white px-6 py-3 popup-with-move-anim rounded-full">Saiba Mais</button>
                    </div>
                </div>
                

               
                <div className="flex-1 bg-roxo flex flex-col items-center p-10 rounded-xl">
                    <div className="bg-white rounded-full p-7 mb-6">
                        <img src={IdentidadeVisualImagem} className="w-20 h-20" alt="alternative" />
                    </div>
                    <div className="text-center">
                        <h5 className="mb-7">Identidade Visual</h5>
                        <button onClick={() => openModal('identidade-visual')} className="border border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white px-6 py-3 popup-with-move-anim rounded-full">Saiba Mais</button>
                    </div>
                </div>
                

                
                <div className="flex-1 bg-rosa flex flex-col items-center p-10 rounded-xl">
                    <div className="bg-white rounded-full p-7 mb-6">
                        <img src={DesignDeAppsImagem} className="w-20 h-20" alt="alternative" />
                    </div>
                    <div className="text-center">
                        <h5 className="mb-7">Design de Sites e Aplicativos</h5>
                        <button onClick={() => openModal('design-de-sites-e-aplicativos')} className="border border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white px-6 py-3 popup-with-move-anim rounded-full">Saiba Mais</button>
                    </div>
                </div>
               
            </div> 
        </div> 
        <div className="App"> 
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}> 
                <button onClick={closeModal} title="Fechar (Esc)" type="button" className="absolute right-0 top-0 mr-4 mt-4">
                    <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
                    </svg>
                </button> 
                {modalContent === 'design-de-servico' && ( 
                    <div> 
                        <h3 className="mb-2"><img className="h-10" src={DesignDeServicoImagem} alt="Imagem: Design de Serviço" /> Design de Serviço </h3> 
                        <hr className="w-11 h-0.5 mt-0.5 mb-4 ml-0 border-none bg-amarelo" /> 
                        <p className="mb-6">Te ajudamos a inovar, criando um serviço encantador que supere as expectativas dos clientes e destaque seu diferencial.</p> 
                        <p> <strong>Como?</strong> <br /> Entendendo seu público e desenhando uma oferta coerente, que vá além da experiência e considere o lado da empresa na hora de fazer ajustes. </p> 
                    </div> 
                )} 

                {modalContent === 'presenca-em-redes-sociais' && ( 
                    <div> 
                        <h3 className="mb-2"> <img className="h-10" src={PresencaEmRedeImagem} alt="Imagem: Presença em Redes Sociais" /> Presença em Redes Sociais </h3> 
                        <hr className="w-11 h-0.5 mt-0.5 mb-4 ml-0 border-none bg-verde" /> 
                        <p className="mb-6">Fazemos com que suas postagens tenham total sintonia com a identidade visual da empresa, para atrair o público e elevar o desempenho das suas redes sociais.</p> 
                        <p> <strong>Como?</strong> <br /> Criando modelos para você não se preocupar com o layout e focar no conteúdo das postagens. Assim, você ganha tempo na hora de postar. </p> 
                    </div> 
                )} 

                {modalContent === 'identidade-visual' && ( 
                    <div> 
                        <h3 className="mb-2"> <img className="h-10" src={IdentidadeVisualImagem} alt="Imagem: Identidade Visual" /> Identidade Visual </h3> 
                        <hr className="w-11 h-0.5 mt-0.5 mb-4 ml-0 border-none bg-roxo" /> 
                        <p className="mb-6">Criamos identidades visuais originais, que refletem a essência do seu negócio, onde cada detalhe é cuidadosamente alinhado à sua marca.</p> 
                        <p> <strong>Como?</strong> <br /> Construindo o manual de identidade visual, contendo o logotipo, cores e tipos de letra escolhidos para a empresa, além de exemplos de aplicação (canecas, site, camisetas, app). </p> 
                    </div> 
                )} 
                    
                {modalContent === 'design-de-sites-e-aplicativos' && ( 
                    <div> 
                        <h3 className="mb-2"> <img className="h-10" src={DesignDeAppsImagem} alt="Imagem: Design de Sites e Aplicativos" /> Design de Sites e Aplicativos </h3> 
                        <hr className="w-11 h-0.5 mt-0.5 mb-4 ml-0 border-none bg-rosa-escuro" /> 
                        <p className="mb-6">Proporcionamos uma experiência de navegação agradável e diferenciada para o seu cliente, seja no site ou em aplicativos.</p> 
                        <p> <strong>Como?</strong> <br /> Usando as mais recentes tecnologias e tendências de design, desenhamos layouts funcionais e intuitivos, seguindo a identidade visual da sua empresa. </p> 
                    </div> 
                )} 
            </Modal> 
        </div>

        {/* Footer */}
        <FooterComponent />
  </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
<>
    <Metadata />
</>
)

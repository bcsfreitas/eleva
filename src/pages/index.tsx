import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

// Componentes
import HeaderComponent from "../components/header"


const IndexPage = () => {
  return (
    <div>
        <header id="header" className="header py-10 text-center lg:text-left xl:pb-20">
          <HeaderComponent />
            <div className="container px-4 sm:px-8 grid lg:grid lg:grid-cols-2 lg:gap-x-8 flex ">
                
                <div className="flex flex-col items-center justify-center lg:items-baseline lg:mt-32 lg:order-1 mb-16 order-2 sm:order-2 xl:mr-12 xl:mt-10">
                    
                    <h1 className="mb-5">Sua empresa melhor, direto ao ponto.</h1>
                    <h2 className="p-large mb-8">Que tal um site leve, um logotipo original ou inovar no que você vende?
                        Você pensa, nós fazemos!</h2>
                    <a className="btn-solid-lg page-scroll bg-rosa" href="#features"><i className="fa fa-heart"></i>Saiba Mais</a>
                </div>
                <div className="xl:text-right order-1 sm:order-1 m-5 sm:m-20 lg:m-1 lg:order-2">
                    <img className="inline md:h-96 lg:h-auto lg:m-1" src="images/foguete-3d.png" alt="alternative" />
                </div>
            </div>
        </header>
        

       
        <div id="features" className="cards-3">
            <div className="mb-10">
                <h3 className="mb-2 lg:max-w-3xl lg:mx-auto">Uma empresa digital e <span className="text-gradient">multidisciplinar</span></h3>
                <h6>Combinamos nossas habilidades para criar soluções inovadoras e transformar desafios em ótimos resultados.</h6>
            </div>
            
            <div className="container px-4 sm:px-8 xl:px-4 flex flex-col lg:flex-row sm:gap-4">

               
                <div className="card design-de-servico flex flex-col items-center">
                    <div className="card-image">
                        <img src="images/design-de-servico.svg" alt="alternative" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Design de Serviço</h5>
                        <a className="btn-outline-reg popup-with-move-anim" href="#lightbox-design-de-servico">Saiba Mais</a>
                    </div>
                </div>
                

                
                <div className="card presenca-em-rede flex flex-col items-center">
                    <div className="card-image">
                        <img src="images/presenca-em-rede.svg" alt="alternative" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Presença em Redes Sociais</h5>
                        <a className="btn-outline-reg popup-with-move-anim" href="#lightbox-presenca-em-redes-sociais">Saiba Mais</a>
                    </div>
                </div>
                

               
                <div className="card identidade-visual flex flex-col items-center">
                    <div className="card-image">
                        <img src="images/identidade-visual.svg" alt="alternative" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Identidade Visual</h5>
                        <a className="btn-outline-reg popup-with-move-anim" href="#lightbox-identidade-visual">Saiba Mais</a>
                    </div>
                </div>
                

                
                <div className="card design-de-apps-e-sites flex flex-col items-center">
                    <div className="card-image">
                        <img src="images/design-de-apps-e-sites.svg" alt="alternative" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Design de Sites e Aplicativos</h5>
                        <a className="btn-outline-reg popup-with-move-anim" href="#lightbox-design-de-sites-e-aplicativos">Saiba Mais</a>
                    </div>
                </div>
               
            </div> 
        </div> 
        

        {/* Design de Serviço Lightbox */} 
        <div id="lightbox-design-de-servico" className="lightbox-basic zoom-anim-dialog mfp-hide">
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
                <button title="Fechar (Esc)" type="button" className="mfp-close x-button">×</button>
                <div className="lg:col-span-12">
                    <h3 className="mb-2"><img className="h-10" src="images/design-de-servico.svg" alt="Imagem: Design de Serviço" />Design de Serviço</h3>
                    <hr className="w-11 h-0.5 mt-0.5 mb-4 ml-0 border-none bg-amarelo" />
                    <p className="mb-6">Te ajudamos a inovar, criando um serviço encantador que supere as expectativas dos clientes e destaque seu diferencial.</p>
                    <p><strong>Como?</strong> <br />Entendendo seu público e desenhando uma oferta coerente, que vá além da experiência e considere o lado da empresa na hora de fazer ajustes.</p>
                </div> {/* end of col */}
            </div> {/* end of row */}
        </div> {/* end of lightbox-basic */}
        {/* end of Design de Serviço Lightbox */}

        {/* Presença em Redes Sociais Lightbox */} 
        <div id="lightbox-presenca-em-redes-sociais" className="lightbox-basic zoom-anim-dialog mfp-hide">
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
                <button title="Fechar (Esc)" type="button" className="mfp-close x-button">×</button>
                <div className="lg:col-span-12">
                    <h3 className="mb-2"><img className="h-10" src="images/presenca-em-rede.svg" alt="Imagem: Presença em Redes Sociais" />Presença em Redes Sociais</h3>
                    <hr className="w-11 h-0.5 mt-0.5 mb-4 ml-0 border-none bg-verde" />
                    <p className="mb-6">Fazemos com que suas postagens tenham total sintonia com a identidade visual da empresa, para atrair o público e elevar o desempenho das suas redes sociais.</p>
                    <p><strong>Como?</strong> <br />Criando modelos para você não se preocupar com o layout e focar no conteúdo das postagens. Assim, você ganha tempo na hora de postar.</p>
                </div> {/* end of col */}
            </div> {/* end of row */}
        </div> {/* end of lightbox-basic */}
        {/* end of Presença em Redes Sociais Lightbox */}

        {/* Identidade Visual Lightbox */} 
        <div id="lightbox-identidade-visual" className="lightbox-basic zoom-anim-dialog mfp-hide">
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
                <button title="Fechar (Esc)" type="button" className="mfp-close x-button">×</button>
                <div className="lg:col-span-12">
                    <h3 className="mb-2"><img className="h-10" src="images/identidade-visual.svg" alt="Imagem: Identidade Visual" />Identidade Visual</h3>
                    <hr className="w-11 h-0.5 mt-0.5 mb-4 ml-0 border-none bg-roxo" />
                    <p className="mb-6">Criamos identidades visuais originais, que refletem a essência do seu negócio, onde cada detalhe é cuidadosamente alinhado à sua marca.</p>
                    <p><strong>Como?</strong> <br />Construindo o manual de identidade visual, contendo o logotipo, cores e tipos de letra escolhidos para a empresa, além de exemplos de aplicação (canecas, site, camisetas, app).</p>
                </div> {/* end of col */}
            </div> {/* end of row */}
        </div> {/* end of lightbox-basic */}
        {/* end of Identidade Visual Lightbox */}

        {/* Design de Sites e Aplicativos Lightbox */} 
        <div id="lightbox-design-de-sites-e-aplicativos" className="lightbox-basic zoom-anim-dialog mfp-hide">
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
                <button title="Fechar (Esc)" type="button" className="mfp-close x-button">×</button>
                <div className="lg:col-span-12">
                    <h3 className="mb-2"><img className="h-10" src="images/design-de-apps-e-sites.svg" alt="Imagem: Design de Sites e Aplicativos" />Design de Sites e Aplicativos</h3>
                    <hr className="w-11 h-0.5 mt-0.5 mb-4 ml-0 border-none bg-rosa-escuro" />
                    <p className="mb-6">Proporcionamos uma experiência de navegação agradável e diferenciada para o seu cliente, seja no site ou em aplicativos.</p>
                    <p><strong>Como?</strong> <br />Usando as mais recentes tecnologias e tendências de design, desenhamos layouts funcionais e intuitivos, seguindo a identidade visual da sua empresa.</p>
                </div> {/* end of col */}
            </div> {/* end of row */}
        </div> {/* end of lightbox-basic */}
        {/* end of Design de Sites e Aplicativos Lightbox */}
         

        {/* end of lightbox */}

        {/* Footer */}
        <div className="footer">
            <div className="container px-4 sm:px-8">
                <h3 className="mb-2 lg:max-w-3xl lg:mx-auto">Vamos bater um papo?</h3>
                <p className="lg:max-w-3xl lg:mx-auto">Fale com a gente e vamos descobrir, juntos, como podemos te ajudar. </p>
                <p className="mb-8 lg:max-w-3xl lg:mx-auto">Você também pode entrar em contato utilizando o email <a className="text-rosa">contato@elevainovacao.com.br</a></p>
                <div className="social-container">
                    <span className="fa-stack">
                        <a target="_blank" href="https://www.instagram.com/eleva.inovacao/">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-instagram fa-stack-1x"></i>
                        </a>
                    </span>
                    <span className="fa-stack">
                        <a target="_blank" href="https://w.app/aZP7jl">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-whatsapp fa-stack-1x"></i>
                        </a>
                    </span>
                    <span className="fa-stack">
                        <a target="_blank" href="https://facebook.com/elevainovacao">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-facebook fa-stack-1x"></i>
                        </a>
                    </span>
                    <span className="fa-stack">
                        <a target="_blank" href="mailto:contato@elevainovacao.com.br">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fa fa-envelope fa-stack-1x"></i>
                        </a>
                    </span>
                </div> {/* end of social-container */}
            </div> {/* end of container */}
        </div> {/* end of footer */}
        {/* end of footer */}


        {/* Copyright */}
        <div className="copyright">
            <div className="container px-4 sm:px-8">

                <p className="pb-2 p-small statement">Copyright © <span id="data"></span> - <a href="#your-link" className="no-underline">Eleva</a></p>
            </div> 

        {/* end of container */}
        </div> {/* end of copyright */}
        {/* end of copyright */}


        {/* Scripts */}
        <script src="js/jquery.min.js"></script> {/* jQuery for JavaScript plugins */}
        <script src="js/jquery.easing.min.js"></script> {/* jQuery Easing for smooth scrolling between anchors */}
        <script src="js/jquery.magnific-popup.js"></script> {/* Magnific Popup for lightboxes */}
        <script src="js/scripts.js"></script> {/* Custom scripts */}
        <script>
            const d = new Date();
            let year = d.getFullYear();
            document.getElementById("data").innerHTML = year;
        </script>
  </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Eleva</title>

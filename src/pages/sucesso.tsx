import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

// Componentes
import HeaderComponent from "../components/headerComponent"
import QuestionarioComponent from "../components/questionario/questionarioComponent"

// Imagens
import SucessoImagem from "../images/sucesso.png";

const QuestionarioPage: React.FC<PageProps> = () => {
    return (
        <div>
            <header id="header" className="header pt-10 lg:text-left xl:pb-10 bg-gradient-to-b from-[#c5eaf9] to-white">
            <HeaderComponent />
            <div className="mx-auto max-w-6xl px-4 sm:px-8 grid lg:grid lg:grid-cols-2 lg:gap-x-8 flex ">
                
                <div className="flex flex-col justify-center lg:items-baseline lg:order-1 mb-1 order-2 sm:order-2 xl:mr-12 xl:mt-10">
                    
                    <h1 className="text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-3xl mb-5">Questionário enviado <br />com sucesso!</h1>
                    <p className="text-lg mb-8">Nossa equipe já recebeu o seu questionário e vai começar as avaliações necesárias para te atender da melhor forma possível!.</p>
                    <p className="text-lg mb-8">Entraremos em contato em breve!</p>
                </div>
                <div className="xl:text-right order-1 sm:order-1 m-5 lg:m-1 lg:order-2 flex justify-center lg:justify-start mt-20 lg:mt-2">
                    <img className="h-40 lg:h-auto lg:m-1" src={SucessoImagem} alt="alternative" />
                </div>
            </div>
        </header>
      </div>
    )
}

export default QuestionarioPage

export const Head: HeadFC = () => <title>Eleva - Formulário de Briefing de Cliente</title>
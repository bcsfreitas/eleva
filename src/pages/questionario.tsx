import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

// Componentes
import HeaderComponent from "../components/header"
import QuestionarioComponent from "../components/questionario/questionarioComponent"

// Imagens
import BriefingImagem from "../images/briefing.png";

const QuestionarioPage: React.FC<PageProps> = () => {
    return (
        <div>
            <header id="header" className="header pt-10 lg:text-left xl:pb-10 bg-gradient-to-b from-[#c5eaf9] to-white">
            <HeaderComponent />
            <div className="mx-auto max-w-6xl px-4 sm:px-8 grid lg:grid lg:grid-cols-2 lg:gap-x-8 flex ">
                
                <div className="flex flex-col justify-center lg:items-baseline lg:order-1 mb-1 order-2 sm:order-2 xl:mr-12 xl:mt-10">
                    
                    <h1 className="text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-3xl mb-5">Questionário de novo cliente</h1>
                    <p className="text-lg mb-8">Preencha o formulário abaixo para termos uma idéia inicial do que você precisa para o seu negócio Raquel por favor melhora esse texto.</p>
                </div>
                <div className="xl:text-right order-1 sm:order-1 m-5 lg:m-1 lg:order-2 flex justify-center lg:justify-start mt-20 lg:mt-2">
                    <img className="h-40 lg:h-auto lg:m-1" src={BriefingImagem} alt="alternative" />
                </div>
            </div>
        </header>
        <QuestionarioComponent />
      </div>
    )
}

export default QuestionarioPage

export const Head: HeadFC = () => <title>Eleva - Formulário de Briefing de Cliente</title>
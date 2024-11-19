import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import InputMask from 'react-input-mask';

const Form = () => {
  const [state, handleSubmit] = useForm("mbljkyoz");

  if (state.succeeded) {
    return <p>Formulário enviado com sucesso!</p>;
  }

  return (
    <div className="min-h-screen mb-10">
      <div className="w-full mx-auto max-w-6xl px-4 sm:px-8">
        <p>* Campos Obrigatórios</p>
        <form onSubmit={handleSubmit} className='max-w-3xl'>
          <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
            <div className="mb-6">
              <label htmlFor="nomeCompleto" className="block text-gray-700">Nome *</label>
              <input
                type="text"
                id="nomeCompleto"
                name="nomeCompleto"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
              <ValidationError prefix="Nome" field="nomeCompleto" errors={state.errors} />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700">E-mail de Contato *</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
          </div>

          <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
            <div className="mb-6">
                <label htmlFor="telefone" className="block text-gray-700">Telefone de Contato *</label>
                <input
                  type="number"
                  id="telefone"
                  name="telefone"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
                <ValidationError prefix="Telefone" field="telefone" errors={state.errors} />
            </div>
            <div className="mb-6">
              <label htmlFor="nomeEmpresa" className="block text-gray-700">Nome da Empresa</label>
              <input
                type="text"
                id="nomeEmpresa"
                name="nomeEmpresa"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
              <ValidationError prefix="Nome da Empresa" field="nomeEmpresa" errors={state.errors} />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="descricaoProjeto" className="block text-gray-700">Descreva brevemente a sua necessidade *</label>
            <textarea
              id="descricaoProjeto"
              name="descricaoProjeto"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
            <ValidationError prefix="Descrição do Projeto" field="descricaoProjeto" errors={state.errors} />
          </div>
          <div className="mb-6">
            <label htmlFor="objetivos" className="block text-gray-700">Quais objetivos você e sua empresa querem alcançar?</label>
            <textarea
              id="objetivos"
              name="objetivos"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"

            />
            <ValidationError prefix="Objetivos" field="objetivos" errors={state.errors} />
          </div>
          <div className="mb-6">
            <label htmlFor="publicoAlvo" className="block text-gray-700">Quem é o seu público-alvo principal?</label>
            <input
              type="text"
              id="publicoAlvo"
              name="publicoAlvo"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"

            />
            <ValidationError prefix="Público-Alvo" field="publicoAlvo" errors={state.errors} />
          </div>
          <div className="mb-6">
            <label htmlFor="desafiosPublico" className="block text-gray-700">Quais são os principais desafios do seu público-alvo que o projeto precisa abordar?</label>
            <textarea
              id="desafiosPublico"
              name="desafiosPublico"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            <ValidationError prefix="Desafios" field="desafiosPublico" errors={state.errors} />
          </div>
          <div className="mb-6">
            <label htmlFor="especificacoes" className="block text-gray-700">Há algo específico que você gostaria de incluir no projeto?</label>
            <textarea
              id="especificacoes"
              name="especificacoes"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            <ValidationError prefix="Especificações" field="especificacoes" errors={state.errors} />
          </div>
          <div className="mb-6">
            <label htmlFor="inspiracoes" className="block text-gray-700">Existem soluções no mercado que você admira e gostaria que seu projeto fosse inspirado? Se sim, quais?</label>
            <textarea
              id="inspiracoes"
              name="inspiracoes"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            <ValidationError prefix="Inspirações" field="inspiracoes" errors={state.errors} />
          </div>
          <div className="mb-6">
            <label htmlFor="prazo" className="block text-gray-700">Qual é o prazo ideal para o projeto?</label>
            <input
              type="text"
              id="prazo"
              name="prazo"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            <ValidationError prefix="Prazo" field="prazo" errors={state.errors} />
          </div>
          <div className="mb-6">
            <label htmlFor="informacoesAdicionais" className="block text-gray-700">Há algo mais que você gostaria de compartilhar sobre seu projeto?</label>
            <textarea
              id="informacoesAdicionais"
              name="informacoesAdicionais"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            <ValidationError prefix="Informações Adicionais" field="informacoesAdicionais" errors={state.errors} />
          </div>
          <div>
            <button type="submit" className="btn-solid-lg w-full px-6 py-3 bg-purple-600 text-white font-bold rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50" disabled={state.submitting}>
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;

const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  const { nomeCompleto, email, telefone, nomeEmpresa, setorEmpresa, descricaoProjeto, objetivos, publicoAlvo, desafiosPublico, especificacoes, inspiracoes, prazo, informacoesAdicionais } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // ou o host do seu serviço de e-mail
    port: 587,
    secure: false,
    auth: {
      user: 'elevainovacao@gmail.com', // substitua pelo seu email
      pass: 'ijfv cgzn oxgq tbfe' // substitua pela sua senha de aplicativo
    }
  });

  const mailOptions = {
    from: '"Mailer" <seu-email@gmail.com>',
    to: 'elevainovacao@gmail.com', // substitua pelo destinatário
    subject: 'Novo Briefing de Cliente',
    text: `
      Nome Completo: ${nomeCompleto}
      E-mail: ${email}
      Telefone: ${telefone}
      Nome da Empresa: ${nomeEmpresa}
      Setor da Empresa: ${setorEmpresa}
      Descrição do Projeto: ${descricaoProjeto}
      Objetivos: ${objetivos}
      Público-Alvo: ${publicoAlvo}
      Desafios do Público-Alvo: ${desafiosPublico}
      Especificações: ${especificacoes}
      Inspirações: ${inspiracoes}
      Prazo: ${prazo}
      Informações Adicionais: ${informacoesAdicionais}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'E-mail enviado com sucesso!' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Erro ao enviar e-mail' })
    };
  }
};


export default function Sobre() {
  return (
    <div id="sobre" className="container mx-auto px-4 py-8 h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-center mb-4 text-laranja-claro">Sobre Nós</h1>
      <p className="text-lg text-center mb-6">Facilitando sua jornada no trânsito há mais de uma década com excelência em serviços de documentação veicular.</p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-3 text-laranja-claro">Serviços Personalizados</h2>
          <p className="mb-4">Oferecemos um serviço único de busca e entrega de veículos, incluindo caminhões, para maior comodidade e eficiência.</p>
          <h2 className="text-2xl font-semibold mb-3 text-laranja-claro">Atendimento Excepcional</h2>
          <p>Nosso compromisso é com um atendimento de qualidade, garantindo a satisfação total dos nossos clientes.</p>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-3 text-laranja-claro">Abrangência Regional</h2>
          <p>Atendemos com excelência em Santa Cruz do Sul, Vera Cruz e Sinimbu, oferecendo soluções ágeis e eficientes para todas as suas necessidades de trânsito.</p>
        </div>
      </div>
    </div>
  )
}
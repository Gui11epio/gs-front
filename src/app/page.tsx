export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center bg-gray-300">
      <main className="w-full max-w-4xl px-4 py-8 ">

        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-limeGreen mb-4">A ideia do ITER</h1>
          <p className="text-gray-700 leading-relaxed">
            Percebemos que muitas empresas que realizam a coleta e reciclagem desses materiais possuem dificuldade em fazer com que as pessoas doem esses materiais para elas. Com isso, pensamos em uma solução onde ajudamos na coleta desses materiais e recompensamos os usuários que realizarem as doações.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-limeGreen mb-4">A proposta do nosso site</h1>
          <p className="text-gray-700 leading-relaxed">
            Nosso objetivo é conectar empresas recicladoras a pessoas que desejam doar materiais recicláveis, criando um sistema eficiente e incentivador. Dessa forma, buscamos contribuir para a sustentabilidade ambiental e social.
          </p>
        </div>

        <br />

        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-limeGreen mb-4">CRIE UM CADASTRO PARA PODER USAR A NOSSA LOJA</h1>
          <p className="text-right font-bold text-gray-500 text-center mt-4">
            NÃO TEM UMA CONTA?{" "}
            <a href="/cadastro" className="font-bold text-blue-500 hover:underline">
              Cadastre-se
            </a>
          </p>
        </div>

      </main>
    </div>
  );
}
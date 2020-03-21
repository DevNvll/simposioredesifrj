export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full bg-gray-800">
      <div className="container flex flex-col items-center justify-between w-full pt-10 pb-10 xl:items-start xl:flex-row">
        <div className="flex flex-col justify-center xl:items-start xl:w-1/4">
          <div className="items-center xl:items-start">
            <h3 className="text-xl font-bold text-center text-white md:text-left">
              1º Simpósio de Redes
            </h3>
            <p className="mt-2 text-center text-gray-100 md:text-left">
              Região dos Lagos
            </p>
          </div>
          <div className="items-center xl:mt-6 xl:items-start">
            <h3 className="mt-10 text-xl font-bold text-center text-white md:mt-4 md:text-left">
              Sobre o Evento
            </h3>
            <p className="w-full mt-2 text-sm text-center text-gray-100 md:text-left md:w-4/5">
              Evento focado em Redes para o IFRJ e demais participantes da
              cidade.
            </p>
          </div>
          <div className="items-center xl:mt-6 xl:items-start">
            <h3 className="mt-10 text-xl font-bold text-center text-white md:text-left md:mt-4">
              Nossa Localização
            </h3>
            <p className="w-full mt-2 text-sm text-center text-gray-100 md:text-left md:w-4/5">
              R. José Pinto de Macedo, s/n - Prainha, Arraial do Cabo - RJ,
              28930-000
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between w-full xl:w-1/4">
          <h3 className="w-full mt-10 text-xl font-bold text-center text-white md:text-left md:w-auto md:mt-0">
            Informações
          </h3>
          <ul className="w-full md:w-auto">
            <li className="flex items-center justify-center w-full mt-3 md:text-left md:w-auto md:justify-start">
              <a className="text-sm text-center text-gray-100 cursor-pointer hover:underline hover:font-bold">
                Inicio
              </a>
            </li>
            <li className="flex items-center justify-center w-full mt-5 md:mt-3 md:text-left md:w-auto md:justify-start">
              <a className="text-sm text-center text-gray-100 cursor-pointer hover:underline hover:font-bold">
                Programação
              </a>
            </li>
            <li className="flex items-center justify-center w-full mt-5 md:mt-3 md:text-left md:w-auto md:justify-start">
              <a className="text-sm text-center text-gray-100 cursor-pointer hover:underline hover:font-bold">
                Submissões
              </a>
            </li>
            <li className="flex items-center justify-center w-full mt-5 md:mt-3 md:text-left md:w-auto md:justify-start">
              <a className="text-sm text-center text-gray-100 cursor-pointer hover:underline hover:font-bold">
                Pré-Inscrições
              </a>
            </li>
            <li className="flex items-center justify-center w-full mt-5 md:mt-3 md:text-left md:w-auto md:justify-start">
              <a className="text-sm text-center text-gray-100 cursor-pointer hover:underline hover:font-bold">
                Fale com a Organização
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start justify-between w-full xl:w-1/4">
          <h3 className="w-full mt-10 text-xl font-bold text-center text-white md:text-left md:w-auto md:mt-0">
            Comissão Organizadora
          </h3>
          <ul className="w-full md:w-auto">
            <li className="w-full mt-3 text-sm text-center text-gray-100 md:w-auto md:text-left">
              Prof. Álvaro Gonçalves de Barros
            </li>
            <li className="w-full mt-5 text-sm text-center text-gray-100 md:text-left md:w-auto md:mt-3">
              Prof. Anderson Albuquerque
            </li>
            <li className="w-full mt-5 text-sm text-center text-gray-100 md:text-left md:w-auto md:mt-3">
              Prof. Armando Martins de Souza
            </li>
            <li className="w-full mt-5 text-sm text-center text-gray-100 md:text-left md:w-auto md:mt-3">
              Prof. Carlos Roberto de Oliveira
            </li>
            <li className="w-full mt-5 text-sm text-center text-gray-100 md:text-left md:w-auto md:mt-3">
              Prof. Marcelo Simas Matos
            </li>
            <li className="w-full mt-5 text-sm text-center text-gray-100 md:text-left md:w-auto md:mt-3">
              Prof. Rafael de Oliveira Costa
            </li>
            <li className="w-full mt-5 text-sm text-center text-gray-100 md:text-left md:w-auto md:mt-3">
              Prof. Rafael Guimarães Botelho
            </li>
            <li className="w-full mt-5 text-sm text-center text-gray-100 md:text-left md:w-auto md:mt-3">
              Prof. Wenderson Buenos Aires
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start justify-between w-full xl:w-1/4">
          <h3 className="w-full mt-10 text-xl font-bold text-center text-white md:text-left md:mt-0 md:w-auto">
            Nosso Contato
          </h3>
          <div className="flex items-center justify-center w-full mt-6 md:mt-3 md:justify-start md:w-auto">
            <i className="p-4 mr-4 bg-white rounded-full fa fa-phone text-primary-700" />
            <p className="text-base text-gray-400">(22) 2622-6216</p>
          </div>
          <div className="flex items-center justify-center w-full mt-6 md:mt-3 md:justify-start md:w-auto">
            <i className="p-4 mr-4 bg-white rounded-full fa fa-envelope text-primary-700" />
            <p className="text-base text-gray-400">redes.cac@ifrj.edu.br</p>
          </div>
          <h3 className="w-full mt-10 text-xl font-bold text-center text-white md:text-left md:mt-10 md:w-auto">
            Nossas Mídias
          </h3>
          <div className="flex items-center justify-center w-full mt-3 md:justify-between">
            <div className="flex items-center justify-start mt-3">
              <i className="flex items-center justify-center w-16 h-16 mr-4 text-3xl bg-white rounded-full fab fa-facebook-f fa-fw text-primary-700" />
            </div>
            <div className="flex items-center justify-start mt-3">
              <i className="flex items-center justify-center w-16 h-16 mr-4 text-3xl bg-white rounded-full fab fa-instagram fa-fw text-primary-700" />
            </div>
            <div className="flex items-center justify-start mt-3">
              <i className="flex items-center justify-center w-16 h-16 mr-4 text-3xl bg-white rounded-full fab fa-linkedin-in fa-fw text-primary-700" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full pt-2 pb-2 bg-gray-900 align-center">
        <div className="container flex flex-col items-center justify-between w-full py-4 xl:flex-row">
          <p className="mt-3 text-sm text-gray-400 md:mt-0 md:text-base">
            2020 © Copyright - All Rights Reserved
          </p>
          <p className="mt-5 mb-3 text-sm text-gray-400 md:mb-0 md:mt-0 md:text-base">
            Desenvolvido por{" "}
            <a
              rel="noreferrer"
              className="font-bold text-gray-400 underline hover:text-primary-400"
              href="https://github.com/DevNvll"
              target="_blank"
            >
              Henrick Mello
            </a>{" "}
            e{" "}
            <a
              rel="noreferrer"
              className="font-bold text-gray-400 underline hover:text-primary-400"
              href="https://davibrancol.com.br"
              target="_blank"
            >
              Davi Brancol
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

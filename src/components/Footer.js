export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full bg-gray-800">
      <div className="container flex items-start justify-between pt-10 pb-10">
        <div className="flex flex-col items-start justify-between w-1/4">
          <div>
            <h3 className="text-xl font-bold text-white">
              1º Simpósio de Redes
            </h3>
            <p className="mt-2 text-gray-100">Região dos Lagos</p>
          </div>
          <div className="mt-6">
            <h3 className="mt-4 text-xl font-bold text-white">
              Sobre o Evento
            </h3>
            <p className="w-4/5 mt-2 text-sm text-gray-100">
              Evento focado em Redes para o IFRJ e demais participantes da
              cidade.
            </p>
          </div>
          <div className="mt-6">
            <h3 className="mt-4 text-xl font-bold text-white">
              Nossa Localização
            </h3>
            <p className="w-4/5 mt-2 text-sm text-gray-100">
              R. José Pinto de Macedo, s/n - Prainha, Arraial do Cabo - RJ,
              28930-000
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between w-1/4">
          <h3 className="text-xl font-bold text-white">Informações</h3>
          <ul>
            <li className="mt-3">
              <a className="text-sm text-gray-100 cursor-pointer hover:underline hover:font-bold">
                Inicio
              </a>
            </li>
            <li className="mt-3">
              <a className="text-sm text-gray-100 cursor-pointer hover:underline hover:font-bold">
                Programação
              </a>
            </li>
            <li className="mt-3">
              <a className="text-sm text-gray-100 cursor-pointer hover:underline hover:font-bold">
                Submissões
              </a>
            </li>
            <li className="mt-3">
              <a className="text-sm text-gray-100 cursor-pointer hover:underline hover:font-bold">
                Pré-Inscrições
              </a>
            </li>
            <li className="mt-3">
              <a className="text-sm text-gray-100 cursor-pointer hover:underline hover:font-bold">
                Fale com a Organização
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start justify-between w-1/4">
          <h3 className="text-xl font-bold text-white">
            Comissão Organizadora
          </h3>
          <ul>
            <li className="mt-3 text-sm text-gray-100">
              Prof. Álvaro Gonçalves de Barros
            </li>
            <li className="mt-3 text-sm text-gray-100">
              Prof. Anderson Albuquerque
            </li>
            <li className="mt-3 text-sm text-gray-100">
              Prof. Armando Martins de Souza
            </li>
            <li className="mt-3 text-sm text-gray-100">
              Prof. Carlos Roberto de Oliveira
            </li>
            <li className="mt-3 text-sm text-gray-100">
              Prof. Marcelo Simas Matos
            </li>
            <li className="mt-3 text-sm text-gray-100">
              Prof. Rafael de Oliveira Costa
            </li>
            <li className="mt-3 text-sm text-gray-100">
              Prof. Rafael Guimarães Botelho
            </li>
            <li className="mt-3 text-sm text-gray-100">
              Prof. Wenderson Buenos Aires
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start justify-between w-1/4">
          <h3 className="text-xl font-bold text-white">Nosso Contato</h3>
          <div className="flex items-center justify-start mt-3">
            <i className="p-4 mr-4 bg-white rounded-full fa fa-phone text-primary-700" />
            <p className="text-base text-gray-400">(21) 98156-6216</p>
          </div>
          <div className="flex items-center justify-start mt-3">
            <i className="p-4 mr-4 bg-white rounded-full fa fa-envelope text-primary-700" />
            <p className="text-base text-gray-400">
              daviduartebrancol@gmail.com
            </p>
          </div>
          <h3 className="mt-6 text-xl font-bold text-white">Nossas Mídias</h3>
          <div className="flex items-center justify-between w-full mt-3">
            <div className="flex items-center justify-start mt-3">
              <i className="flex items-center justify-center w-16 h-16 mr-4 text-3xl bg-white rounded-full fab fa-facebook-f fa-fw text-primary-700" />
            </div>
            <div className="flex items-center justify-start mt-3">
              <i className="flex items-center justify-center w-16 h-16 mr-4 text-3xl bg-white rounded-full fab fa-instagram fa-fw text-primary-700" />
            </div>
            <div className="flex items-center justify-start mt-3">
              <i className="flex items-center justify-center w-16 h-16 mr-4 text-3xl bg-white rounded-full fab fa-linkedin-in fa-fw text-primary-700" />
            </div>
            <div className="flex items-center justify-start mt-3">
              <i className="flex items-center justify-center w-16 h-16 mr-4 text-3xl bg-white rounded-full fab fa-github-alt fa-fw text-primary-700" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full pt-2 pb-2 bg-gray-900 align-center">
        <div className="container flex items-center justify-between w-full py-4">
          <p className="text-gray-400">
            2020 © Copyright - All Rights Reserved
          </p>
          <p className="text-gray-400">
            Desenvolvido por{" "}
            <a
              className="font-bold text-gray-400 underline hover:text-primary-400"
              href="https://github.com/DevNvll"
              target="_blank"
            >
              Henrick Mello
            </a>{" "}
            e{" "}
            <a
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

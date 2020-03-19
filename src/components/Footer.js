export function Footer() {
  return (
    <footer className="flex flex-col items-center h-auto w-full bg-gray-800 text-gray-400 self-end">
      <div className="container py-12 h-full flex justify-between w-full">
        <div className="max-w-24">
          <h2 className="text-xl font-bold">Comissão Organizadora</h2>
          <ul className="py-4">
            <li className="text-sm"> Prof. Álvaro Gonçalves de Barros </li>
            <li className="text-sm"> Prof. Anderson Albuquerque </li>
            <li className="text-sm"> Prof. Armando Martins de Souza </li>
            <li className="text-sm"> Prof. Carlos Roberto de Oliveira </li>
            <li className="text-sm"> Prof. Marcelo Simas Matos </li>
            <li className="text-sm"> Prof. Rafael de Oliveira Costa </li>
            <li className="text-sm"> Prof. Rafael Guimarães Botelho </li>
            <li className="text-sm"> Prof. Wenderson Buenos Aires </li>
          </ul>
        </div>
        <div className="max-w-24">
          <h2 className="text-xl font-bold">Endereço</h2>
          <div className="py-4">
            <p>
              R. José Pinto de Macedo, s/n - Prainha, Arraial do Cabo - RJ,
              28930-000
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex bg-gray-900 justify-center align-center">
        <div className="container py-4 flex items-center justify-between w-full">
          <p>2020 © Copyright - All Rights Reserved</p>
          <p>
            Desenvolvido por{" "}
            <a
              className="font-bold underline hover:text-primary-400"
              href="https://github.com/DevNvll"
              target="_blank"
            >
              Henrick Mello
            </a>{" "}
            e{" "}
            <a
              className="font-bold underline hover:text-primary-400"
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

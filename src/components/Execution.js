import coordenation from "../assets/img/logo/coordenation-white.png"
import ifrj from "../assets/img/logo/logo-ifrj-white.png"
import years from "../assets/img/logo/support-10years.png"
import revista from "../assets/img/logo/support-revista.png"
import extension from "../assets/img/logo/support-extension.png"

export function Execution() {
  return (
    <div className="flex items-center justify-center w-full pt-10 pb-20 bg-gray-900 shadow-lg">
      <div className="container flex flex-col items-center justify-center">
        <h2 className="mt-10 text-3xl font-semibold text-gray-200">
          Realização e Suporte
        </h2>
        <div className="flex flex-col items-center justify-around w-full mt-10 md:flex-row">
          <img
            className="w-64 opacity-50 cursor-pointer hover:opacity-100"
            src={coordenation}
            alt="Coordenação IFRJ"
          />
          <img
            className="w-64 opacity-50 cursor-pointer hover:opacity-100"
            src={ifrj}
            alt="IFRJ"
          />
          <img
            className="h-20 opacity-50 cursor-pointer hover:opacity-100"
            src={extension}
            alt="Coordenação IFRJ"
          />
          <img
            className="h-20 opacity-50 cursor-pointer hover:opacity-100"
            src={revista}
            alt="IFRJ"
          />
          <img
            className="h-20 opacity-50 cursor-pointer hover:opacity-100"
            src={years}
            alt="IFRJ"
          />
        </div>
      </div>
    </div>
  )
}

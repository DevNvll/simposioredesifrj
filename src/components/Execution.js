import coordenation from "../assets/img/logo/coordenation-white.png"
import ifrj from "../assets/img/logo/logo-ifrj-white.png"
import years from "../assets/img/logo/support-10years.png"
import revista from "../assets/img/logo/support-revista.png"
import extension from "../assets/img/logo/support-extension.png"

export function Execution() {
  return (
    <div className="flex w-full bg-gray-900 justify-center items-center pb-20 pt-10 shadow-lg">
      <div className="container flex justify-center items-center flex-col">
        <h2 className="mt-10 text-gray-200 font-semibold text-3xl">
          Realização e Suporte
        </h2>
        <div className="w-full flex justify-around items-center mt-10">
          <img
            className="w-64 opacity-50 hover:opacity-100 cursor-pointer"
            src={coordenation}
            alt="Coordenação IFRJ"
          />
          <img
            className="w-64 opacity-50 hover:opacity-100 cursor-pointer"
            src={ifrj}
            alt="IFRJ"
          />
          <img
            className="h-20 opacity-50 hover:opacity-100 cursor-pointer"
            src={extension}
            alt="Coordenação IFRJ"
          />
          <img
            className="h-20 opacity-50 hover:opacity-100 cursor-pointer"
            src={revista}
            alt="IFRJ"
          />
          <img
            className="h-20 opacity-50 hover:opacity-100 cursor-pointer"
            src={years}
            alt="IFRJ"
          />
        </div>
      </div>
    </div>
  )
}

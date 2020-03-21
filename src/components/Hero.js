import heroImage from "../assets/undraw_connected_world_wuay.svg"
import wave from "../assets/wave.svg"

export function Hero(props) {
  return (
    <div className="relative flex flex-col-reverse items-center justify-center min-h-screen pt-5 pb-10 bg-gray-900 xl:bg-white xl:flex-row xl:min-h-0 xl:pt-20">
      <div className="container relative z-20 flex flex-col-reverse items-center justify-between xl:flex-row">
        <div className="flex flex-col items-center w-full px-4 text-center xl:items-start xl:w-auto xl:px-0 xl:text-left">
          <h1 className="w-full text-3xl font-bold text-gray-300 xl:text-4xl xl:w-4/5">
            1º Simpósio de Redes da Região dos Lagos
          </h1>
          <h2 className="mt-4 text-lg text-gray-500 xl:text-xl">
            8 e 9 de Outubro no IFRJ Campus Arraial do Cabo
          </h2>
          <div className="flex flex-col justify-center mt-8 xl:flex-row xl:mt-12 xl:justify-start">
            <button
              ariaLabel="Inscreva-se"
              className="px-6 py-4 font-bold text-white transition duration-200 ease-in-out rounded shadow bg-primary-400 hover:bg-primary-300"
            >
              Inscreva-se
            </button>
            <button
              ariaLabel="Informações para Submissões"
              className="px-6 py-4 ml-4 font-bold transition duration-200 ease-in-out bg-transparent rounded text-primary-400 hover:text-primary-300 "
            >
              Informações para Submissões
            </button>
          </div>
        </div>
        <img
          src={heroImage}
          className="w-64 custom-map-image xl:-mr-20"
          alt="Mundo conectado"
        />
      </div>
      <div
        className="absolute top-0 w-full bg-gray-900"
        style={{ height: "60%" }}
      />
      <img
        src={wave}
        className="absolute z-10 custom-hero-wave xl:top-0 "
        ariaHidden
      />
    </div>
  )
}

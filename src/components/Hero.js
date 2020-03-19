import heroImage from "../assets/undraw_connected_world_wuay.svg"
import wave from "../assets/wave.svg"

export function Hero(props) {
  return (
    <div className="relative flex flex-col-reverse md:flex-row justify-center items-center pb-10 pt-5 bg-white">
      <div className="relative container flex justify-between items-center z-20">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-gray-300 w-4/5">
            1º Simpósio de Redes da Região dos Lagos
          </h1>
          <h2 className="text-xl text-gray-500 mt-4">
            8 e 9 de Outubro no IFRJ Campus Arraial do Cabo
          </h2>
          <div className="lg:mt-12 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <button className="px-6 py-4 font-bold text-white transition duration-200 ease-in-out bg-primary-400 rounded shadow hover:bg-primary-300">
              Inscreva-se
            </button>
            <button className="px-6 py-4 ml-4 font-bold text-primary-400 transition duration-200 ease-in-out bg-transparent rounded hover:text-primary-300 ">
              Informações para Submissões
            </button>
          </div>
        </div>
        <img
          src={heroImage}
          className="w-64 -mr-20"
          style={{ width: "700px" }}
        />
      </div>
      <img src={wave} className="absolute z-10 top-0" />
    </div>
  )
}

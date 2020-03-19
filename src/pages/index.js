import HeaderImage from "../assets/undraw_connected_world_wuay.svg"

function Navbar() {
  return (
    <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start">
      <div
        class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"
        style={{ width: "350px" }}
      >
        <div class="flex items-center justify-between w-full md:w-auto">
          <a href="#">
            <img
              class="h-8 w-auto sm:h-10"
              src="/img/logos/workflow-mark-on-white.svg"
              alt=""
            />
          </a>
          <div class="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            >
              <svg
                class="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="hidden md:block md:ml-10 md:pr-4">
        <a
          href="#"
          class=" font-bold text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 transition duration-150 ease-in-out"
        >
          Inscrições
        </a>
        <a
          href="#"
          class="ml-8  font-bold text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 transition duration-150 ease-in-out"
        >
          Sobre
        </a>
      </div>
    </nav>
  )
}

export default function Index() {
  return (
    <div className="w-full min-h-screen">
      <header className="w-full bg-gray-900 sm:h-vh">
        <div class="pt-6 px-4 sm:px-6 lg:px-8">
          <Navbar />
        </div>
        <div className="container flex flex-col-reverse justify-around mx-auto mt-10 md:py-16 md:mt-20 md:flex-row ">
          <div className="flex flex-col">
            <h1 className="text-5xl font-bold text-green-500">
              1º Simpósio de Redes da Região dos Lagos
            </h1>
            <h2 className="text-2xl text-gray-500">
              8 e 9 de Outubro no{" "}
              <span className="text-green-500">
                IFRJ Campus Arraial do Cabo
              </span>
            </h2>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <button className="px-6 py-4 font-bold text-white transition duration-200 ease-in-out bg-green-500 rounded shadow hover:bg-green-400">
                Inscreva-se
              </button>
              <button className="px-6 py-4 ml-4 font-bold text-green-500 transition duration-200 ease-in-out bg-gray-800 rounded hover:bg-gray-700">
                Informações para Submissões
              </button>
            </div>
          </div>
          <img
            src={HeaderImage}
            className="w-64 lg:-mt-24"
            style={{ width: "600px" }}
          />
        </div>
      </header>
      <main>test</main>
    </div>
  )
}

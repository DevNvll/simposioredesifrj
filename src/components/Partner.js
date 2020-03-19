import handshake from "../assets/img/undraw/handshake.svg"

export function Partner() {
  return (
    <div className="flex w-full bg-gray-100 justify-center items-center pb-10 pt-10 shadow-lg">
      <div className="container flex justify-center items-center flex-col">
        <h2 className="mt-10 text-primary-700 font-semibold text-3xl">
          Patrocinio
        </h2>
        <img
          className=""
          src={handshake}
          alt="Coordenação IFRJ"
          style={{ width: "400px" }}
        />
        <div className="w-full flex justify-between items-center mt-10"></div>
      </div>
    </div>
  )
}

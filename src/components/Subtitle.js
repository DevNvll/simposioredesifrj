import handshake from "../assets/img/undraw/handshake.svg"

export function Subtitle({ title, description }) {
  return (
    <div className="flex items-center justify-center w-full pt-10 pb-10 bg-gray-900 shadow-lg">
      <div className="container flex flex-col items-center justify-center">
        <h2 className="text-3xl font-semibold text-white">{title}</h2>
        <p className="w-4/5 py-4 leading-loose text-center text-gray-200 md:w-full">
          {description}
        </p>
      </div>
    </div>
  )
}

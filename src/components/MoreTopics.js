import education from "../assets/img/undraw/education.svg"
import application from "../assets/img/undraw/application.svg"
import security from "../assets/img/undraw/security.svg"

export function MoreTopics(props) {
  return (
    <div className="flex justify-center pt-20 pb-20 align-center">
      <div className="container flex flex-col items-center justify-between xl:flex-row">
        <div className="flex flex-col items-center justify-center w-full mx-4 xl:mr-16 xl:w-1/3 ">
          <img
            className="w-64"
            src={education}
            alt="Topic Icon"
            style={{ height: "250px" }}
          />
          <h2 className="mt-10 text-3xl font-bold text-primary-700">
            Redes na Educação
          </h2>
          <p className="px-4 mt-8 text-base leading-loose text-justify text-gray-900 xl:px-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full mx-4 mt-6 xl:w-1/3 xl:mx-0 xl:mt-0">
          <img
            className="w-64"
            src={security}
            alt="Topic Icon"
            style={{ height: "250px" }}
          />
          <h2 className="mt-10 text-3xl font-bold text-primary-700">
            Segurança
          </h2>
          <p className="px-4 mt-8 text-base leading-loose text-justify text-gray-900 xl:px-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full mx-4 mt-6 xl:ml-16 xl:w-1/3 xl:mt-0">
          <img
            className="w-64"
            src={application}
            alt="Topic Icon"
            style={{ height: "250px" }}
          />
          <h2 className="mt-10 text-3xl font-bold text-primary-700">
            Serviços e Aplicações
          </h2>
          <p className="px-4 mt-8 text-base leading-loose text-justify text-gray-900 xl:px-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  )
}

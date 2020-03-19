import education from "../assets/img/undraw/education.svg"
import application from "../assets/img/undraw/application.svg"
import security from "../assets/img/undraw/security.svg"

export function MoreTopics(props) {
  return (
    <div className="flex justify-center align-center pb-20 pt-20">
      <div className="container flex justify-between items-center">
        <div className="flex justify-center items-center flex-col w-1/3 mr-16">
          <img
            className="w-64"
            src={education}
            alt="Topic Icon"
            style={{ height: "250px" }}
          />
          <h2 className="mt-10 text-primary-700 font-bold text-3xl">
            Redes na Educação
          </h2>
          <p className="mt-8 text-gray-900 text-base leading-loose text-justify">
            Descrição referente ao tópico citado conforme programação dita e
            também conforme meu lorem ipsum improvisado de cabeça aquii que se
            jesus eu preciso acordar amanhã
          </p>
        </div>
        <div className="flex justify-center items-center flex-col w-1/3">
          <img
            className="w-64"
            src={security}
            alt="Topic Icon"
            style={{ height: "250px" }}
          />
          <h2 className="mt-10 text-primary-700 font-bold text-3xl">
            Segurança
          </h2>
          <p className="mt-8 text-gray-900 text-base leading-loose text-justify">
            Descrição referente ao tópico citado conforme programação dita e
            também conforme meu lorem ipsum improvisado de cabeça aquii que se
            jesus eu preciso acordar amanhã
          </p>
        </div>
        <div className="flex justify-center items-center flex-col w-1/3 ml-16">
          <img
            className="w-64"
            src={application}
            alt="Topic Icon"
            style={{ height: "250px" }}
          />
          <h2 className="mt-10 text-primary-700 font-bold text-3xl">
            Serviços e Aplicações
          </h2>
          <p className="mt-8 text-gray-900 text-base leading-loose text-justify">
            Descrição referente ao tópico citado conforme programação dita e
            também conforme meu lorem ipsum improvisado de cabeça aquii que se
            jesus eu preciso acordar amanhã
          </p>
        </div>
      </div>
    </div>
  )
}

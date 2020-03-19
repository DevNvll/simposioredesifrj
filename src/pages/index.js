import Head from "next/head"
import {
  Navbar,
  Hero,
  Topic,
  MoreTopics,
  Execution,
  Footer,
  Partner
} from "../components"

export default function Index() {
  return (
    <>
      <Head>
        <title>1º Simpósio de Redes da Região dos Lagos</title>
      </Head>
      <div
        className="flex flex-col items-start justify-start w-full min-h-screen"
        style={{ paddingTop: "100px" }}
      >
        <div className="w-full bg-white sm:h-vh">
          <Navbar />
          <Hero />
          <Topic
            image="iot"
            title="Internet das Coisas"
            description="Desde seus móveis eletromésticos, até lampadas e máquinas de lavar, todos estão conectados nessa grande rede."
          />
          <Topic
            image="ethernet"
            title="Infraestrutura de Redes"
            description="Evento focado na contextualização da importância e funções da Infraestrutura das redes de computadores."
            reversed
          />

          <MoreTopics />
          <Execution />
          <Topic
            image="handshake"
            title="Patrocinadores"
            description="Ajude nosso evento a crescer e entre como patrocinador da nossa campanha, saiba as vantagens para sua empresa."
          />
        </div>
        <Footer />
      </div>
    </>
  )
}

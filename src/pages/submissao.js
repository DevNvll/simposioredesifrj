import Head from "next/head"
import { Navbar, Footer, Subtitle } from "../components"

export default function Submissao() {
  return (
    <>
      <Head>
        <title>Submissões - 1º Simpósio de Redes da Região dos Lagos</title>
      </Head>
      <div className="min-h-screen" style={{ paddingTop: "80px" }}>
        <Navbar />
        <Subtitle
          title="Submissões"
          description="O 1º Simpósio de Redes da Região dos Lagos estará recebendo submissões de trabalhos relacionados à área do evento. Pesquisadores, estudantes e profissionais da área poderão submeter trabalhos nas seguintes formas:"
        />
        <Footer />
      </div>
    </>
  )
}

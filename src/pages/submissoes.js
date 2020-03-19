import { Navbar, Footer, Subtitle } from "../components"
import handshake from "../assets/img/undraw/handshake.svg"

export default function Submissao() {
  return (
    <div className="min-h-screen" style={{ paddingTop: "100px" }}>
      <Navbar />
      <Subtitle
        title="Programação"
        description="1º Simpósio de Redes da Região dos Lagos acontecerá durante os dias 08
          e 09 de outubro de 2020. Sua programação acontecerá ao longo dos dois
          dias, iniciando às 08:00 e finalizando às 22:00, com diversas
          atividades durante todo o período. Em breve a programação estará sendo
          montada e divulgada."
      />
      <Footer />
    </div>
  )
}

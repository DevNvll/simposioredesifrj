import { Navbar, Footer } from "../components"

export default function Programacao() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className=" w-full bg-gray-900">
        <div className="px-6">
          <h1 className="font-semibold text-3xl text-white py-6">
            Programação
          </h1>
        </div>
      </div>
      <main className="h-full container px-6">
        <p className="py-4">
          1º Simpósio de Redes da Região dos Lagos acontecerá durante os dias 08
          e 09 de outubro de 2020. Sua programação acontecerá ao longo dos dois
          dias, iniciando às 08:00 e finalizando às 22:00, com diversas
          atividades durante todo o período. Em breve a programação estará sendo
          montada e divulgada.
        </p>
        <p className="py-4">As vagas serão limitadas.</p>
      </main>
      <Footer />
    </div>
  )
}

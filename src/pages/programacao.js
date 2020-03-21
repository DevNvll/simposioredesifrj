import Head from "next/head"
import { Navbar, Footer, Subtitle } from "../components"

export default function Programacao() {
  return (
    <>
      <Head>
        <title>Programação - 1º Simpósio de Redes da Região dos Lagos</title>
      </Head>
      <div className="min-h-screen" style={{ paddingTop: "90px" }}>
        <Navbar />
        <Subtitle
          title="Programação"
          description="1º Simpósio de Redes da Região dos Lagos acontecerá durante os dias 08
          e 09 de outubro de 2020. Sua programação acontecerá ao longo dos dois
          dias, iniciando às 08:00 e finalizando às 22:00, com diversas
          atividades durante todo o período. Em breve a programação estará sendo
          montada e divulgada."
        />
        <div className="flex items-center justify-center w-full pt-20 pb-20">
          <div className="container flex flex-wrap items-center justify-between md:flex-no-wrap">
            <div className="p-4 border border-gray-400 border-none rounded-lg md:border-solid">
              <table className="rounded-lg">
                <thead>
                  <th
                    colSpan="4"
                    className="px-4 py-2 text-3xl font-bold text-white bg-gray-800 rounded-t-lg border-3"
                  >
                    08 de Outubro
                  </th>
                </thead>
                <tbody>
                  <tr className="bg-gray-400">
                    <td className="px-4 py-2 font-mono font-bold border">
                      08:00 - 09:00
                    </td>
                    <td className="px-4 py-2 border">Credenciamento</td>
                  </tr>
                  <tr className="bg-gray-300">
                    <td className="px-4 py-2 font-mono font-bold border">
                      09:00 - 10:00
                    </td>
                    <td className="px-4 py-2 border">Palestra de Abertura</td>
                  </tr>
                  <tr className="bg-gray-400">
                    <td className="px-4 py-2 font-mono font-bold border">
                      10:00 - 10:15
                    </td>
                    <td className="px-4 py-2 border">Coffe Break</td>
                  </tr>
                  <tr className="bg-gray-300">
                    <td className="px-4 py-2 font-mono font-bold border">
                      10:15 - 12:00
                    </td>
                    <td className="px-4 py-2 border">
                      Apresentação dos trabalhos em forma de banner
                    </td>
                  </tr>
                  <tr className="bg-gray-400">
                    <td className="px-4 py-2 font-mono font-bold border">
                      12:00 - 13:00
                    </td>
                    <td className="px-4 py-2 border">Almoço</td>
                  </tr>
                  <tr className="bg-gray-300">
                    <td className="px-4 py-2 font-mono font-bold border">
                      13:00 - 17:00
                    </td>
                    <td className="px-4 py-2 border">
                      Mini-cursos e Sessões Técnicas
                    </td>
                  </tr>
                  <tr className="bg-gray-400">
                    <td className="px-4 py-2 font-mono font-bold border">
                      17:00 - 17:15
                    </td>
                    <td className="px-4 py-2 border">Coffe Break</td>
                  </tr>
                  <tr className="bg-gray-300">
                    <td className="px-4 py-2 font-mono font-bold border">
                      17:15 - 18:15
                    </td>
                    <td className="px-4 py-2 border">Palestra 1</td>
                  </tr>
                  <tr className="bg-gray-400">
                    <td className="px-4 py-2 font-mono font-bold border">
                      18:30 - 19:30
                    </td>
                    <td className="px-4 py-2 border">Palestra 2</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 border border-gray-400 border-none rounded-lg md:border-solid">
              <table className="rounded-lg">
                <thead>
                  <th
                    colspan="2"
                    className="px-4 py-2 text-3xl font-bold text-white bg-gray-800 rounded-t-lg border-3"
                  >
                    09 de Outubro
                  </th>
                </thead>
                <tbody>
                  <tr className="bg-gray-400">
                    <td className="px-4 py-2 font-mono font-bold border">
                      08:00 - 10:00
                    </td>
                    <td className="px-4 py-2 border">
                      Apresentação dos trabalhos em forma de banner
                    </td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="px-4 py-2 font-mono font-bold border">
                      10:00 - 10:15
                    </td>
                    <td className="px-4 py-2 border">Coffe Break</td>
                  </tr>
                  <tr className="bg-gray-400">
                    <td className="px-4 py-2 font-mono font-bold border">
                      10:15 - 12:00
                    </td>
                    <td className="px-4 py-2 border">
                      Apresentação dos trabalhos em forma de banner
                    </td>
                  </tr>
                  <tr className="bg-gray-300">
                    <td className="px-4 py-2 font-mono font-bold border">
                      12:00 - 13:00
                    </td>
                    <td className="px-4 py-2 border">Almoço</td>
                  </tr>
                  <tr className="bg-gray-400">
                    <td className="px-4 py-2 font-mono font-bold border">
                      13:00 - 17:00
                    </td>
                    <td className="px-4 py-2 border">
                      Mini-cursos e Sessões Técnicas
                    </td>
                  </tr>
                  <tr className="bg-gray-300">
                    <td className="px-4 py-2 font-mono font-bold border">
                      17:00 - 17:15
                    </td>
                    <td className="px-4 py-2 border">Coffe Break</td>
                  </tr>
                  <tr className="bg-gray-400">
                    <td className="px-4 py-2 font-mono font-bold border">
                      17:15 - 18:15
                    </td>
                    <td className="px-4 py-2 border">Palestra 1</td>
                  </tr>
                  <tr className="bg-gray-300">
                    <td className="px-4 py-2 font-mono font-bold border">
                      18:30 - 19:30
                    </td>
                    <td className="px-4 py-2 border">Palestra 2</td>
                  </tr>
                  <tr className="bg-gray-400">
                    <td className="px-4 py-2 font-mono font-bold border">
                      19:30 - 20:30
                    </td>
                    <td className="px-4 py-2 border">
                      Palestra de Encerramento
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

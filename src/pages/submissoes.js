import Head from "next/head"
import easyChair from "../assets/img/sub/easychair.png"
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
          description="O 1º Simpósio de Redes da Região dos Lagos estará recebendo submissões de trabalhos relacionados à área do evento."
        />
        <div className="container py-8 mx-auto">
          <p>
            Pesquisadores, estudantes e profissionais da área poderão submeter
            trabalhos nas seguintes formas:
            <br />
            <br />
          </p>
          <div className="mb-8">
            <ul>
              <li>
                <strong>
                  - Resumos expandidos – para trabalhos em andamento;
                </strong>
              </li>
              <li>
                <strong> - Artigos – para trabalhos concluídos;</strong>
              </li>
              <li>
                <strong>- Propostas de mini-cursos;</strong>
              </li>
              <li>
                <strong>- Sessões Técnicas.</strong>
              </li>
            </ul>
          </div>

          <hr className="m-4" />
          <h2 className="my-4 text-xl font-semibold">Datas Importantes:</h2>
          <table className="w-full p-4 border border-gray-500 border-solid table-fixed md:w-1/2">
            <tbody>
              <tr>
                <td className="px-4 py-2 border">Início das submissões:</td>
                <td className="px-4 py-2 border">10/04/2020</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="px-4 py-2 border">
                  Encerramento das submissões:
                </td>
                <td className="px-4 py-2 border">10/08/2020</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">
                  Divulgação dos trabalhos aprovados:
                </td>
                <td className="px-4 py-2 border">A partir de 10/09/2020</td>
              </tr>
            </tbody>
          </table>
          <hr className="m-4" />
          <h2 className="mb-4 text-2xl font-semibold">
            Informações importantes sobre a submissão:
          </h2>
          <ul>
            <li>
              - Todos os trabalhos submetidos devem ser inéditos, não podendo
              estar em processo de avaliação em qualquer periódico ou outro
              evento;
            </li>
            <li>- Respeitar a data limite para as submissões;</li>
            <li>- Respeitar o número máximo de autores;</li>
            <li>
              - Atender às normas da formatação dos modelos de submissão
              disponibilizados.
            </li>
          </ul>
          <hr className="m-4" />
          <p>
            Todas as submissões deverão ser feitas pelo Sistema Easy Chair,
            sendo submetidos no link da plataforma relacionada ao evento.
          </p>
          <img
            src={easyChair}
            alt="Screenshot do sistema EasyChair"
            className="mx-auto"
          />
          <p className="font-semibold text-center">
            O prazo para as submissões será até 10/08/2020.
          </p>
          <hr className="m-4" />
          <p className="my-4">
            Submissões de <b>Resumos Expandidos</b>:
          </p>
          <p className="my-4">
            Os resumos expandidos devem ser relacionados a trabalhos em
            andamento e deverão ter entre 4 e 5 páginas, contando resumo,
            palavras-chave, introdução, desenvolvimento, conclusões e
            referencial teórico. Deverão ser escritos na fonte Arial tamanho 12,
            com espaçamento simples, tamanho de página A4 e margens: 3 cm para
            margem superior e esquerda e 2 cm para as margens inferior e
            direita.
          </p>

          <p className="my-4">
            Sua submissão não deverá possuir identificação dos autores nem
            qualquer relação no texto que possa identificá-los, garantindo uma
            avaliação às cegas.
          </p>
          <p className="my-4">
            Os resumos expandidos serão avaliados e, caso aprovados, serão
            direcionados para apresentação oral, de 15 minutos com mais 5 de
            arguição ou em forma de banners. Todos os trabalhos aprovados serão
            publicados nos Anais do Simpósio pela Revista TecnoEduc.
          </p>
          <p className="my-4">
            Informações e orientações para a elaboração do Resumo Expandido
            podem ser encontradas no arquivo disponível:{" "}
            <a
              href="/Modelo-do-Resumo-expandido.docx"
              rel="noopener"
              className="text-secondary-400 visited:text-secondary-500"
            >
              ModeloResumoExpandido.docx
            </a>
          </p>

          <hr className="m-4" />
          <p className="my-4">
            Submissões de <b>Artigos</b>:
          </p>
          <p className="my-4">
            Para submissões dos Artigos, os mesmos deverão possuir entre 8 a 10
            páginas, baseados em estudos e pesquisas já concluídas, ter até 4
            autores e seguir o formato do modelo disponibilizado pelo evento. O
            modelo para artigos do 1º Simpósio de Redes da Região dos Lagos
            segue o proposto pela SBC – Sociedade Brasileira de Computação e
            estará disposto aqui no site para download.
          </p>
          <p className="my-4">
            Sua submissão não deverá possuir identificação dos autores nem
            qualquer relação no texto que possa identificá-los, garantindo uma
            avaliação às cegas.
          </p>
          <p className="my-4">
            Todos os artigos submetidos e aprovados serão direcionados para
            apresentação oral, de 15 minutos e com 5 de arguição, e publicados
            em uma edição extra da Revista TecnoEduc, Periódico Científico do
            Campus Arraial do Cabo.
          </p>
          <p className="my-4">
            O modelo para elaboração do artigo pode ser baixado no link:{" "}
            <a
              href="/sbc_template-Simpósio-Redes-RL.doc"
              rel="noopener"
              className="text-secondary-400 visited:text-secondary-500"
            >
              ModeloSBC-ArtigoSimposioRedes.docx
            </a>
          </p>
          <hr className="m-4" />
          <p className="my-4">
            Submissões de <b>Propostas de Mini-cursos</b>:
          </p>
          <p className="my-4">
            A proposta de mini-curso deverá seguir o modelo disponibilizado e
            submetido também pela plataforma EasyChair. Deve-se propor
            mini-cursos com carga horária de 2 ou 4 horas, com intervalo de 15
            minutos, caso seja apresentada uma proposta de 4 horas.
          </p>
          <p className="my-4">
            A comissão irá julgar as propostas de acordo com a relevância das
            ações perante o tema do Simpósio e da importância do
            assunto/aprendizado frente a área de conhecimento.
          </p>
          <p className="my-4">
            Informações e orientações devem seguir o{" "}
            <a
              href="/Modelo-para-Proposta-de-mini-curso.docx"
              rel="noopener"
              className="text-secondary-400 visited:text-secondary-500"
            >
              ModeloParaPropostadeMini-Curso.docx
            </a>
          </p>
          <hr className="m-4" />
          <p className="my-4">
            Submissões de Propostas de <b>Sessões Técnicas</b>:
          </p>
          <p className="my-4">
            As Sessões Técnicas deverão ser relatos de casos práticos ou estudos
            de caso dentro da área de conhecimento do Simpósio. Relatos de
            implementações de serviços ou aplicações relacionados às redes,
            casos de segurança, informações técnicas relevantes, implementações
            e situações de mercado e empregabilidade, entre outros.
          </p>
          <p className="my-4">
            Sua submissão também deverá acontecer pela plataforma EasyChair e
            seguir o modelo disponibilizado. Para a apresentação, deverá ser
            feito um planejamento de 45 minutos com outros 5 de arguição e
            debate.
          </p>
          <p className="my-4">
            O modelo de arquivo para a preparação da proposta das Sessões
            Técnicas pode ser baixado no link:{" "}
            <a
              href="/Modelo-de-Proposta-para-Sessão-Técnica.docx"
              rel="noopener"
              className="text-secondary-400 visited:text-secondary-500"
            >
              ModeloSessãoTécnica.docx
            </a>
          </p>
        </div>
        <Footer />
      </div>
    </>
  )
}

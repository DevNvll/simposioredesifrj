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
import { useScrollPosition } from "../hooks/useScrollPos"
import { useState, useEffect } from "react"

export default function Index() {
  const [scrolled, setScroll] = useState(false)

  useEffect(() => {
    setScroll(Boolean(window?.pageYOffset > 100))
  }, [])

  useScrollPosition(({ prevPos, currPos }) => {
    setScroll(currPos.y < -100)
  }, [])

  return (
    <>
      <Head>
        <title>1º Simpósio de Redes da Região dos Lagos</title>
        <meta description="1º Simpósio de Redes de computadores realizado no IFRJ Campus Arraial do Cabo Região dos Lagos" />
      </Head>
      <div className="flex flex-col items-start justify-start w-full min-h-screen">
        <div className="w-full bg-white sm:h-vh">
          <Navbar scrolled={scrolled} landing />
          <Hero />
          <Topic
            image="iot"
            title="Internet das Coisas"
            description='Hoje nossas coisas estão conectadas, e ficarão ainda mais! Vamos entender melhor os impactos do "iot" em nossas vidas.'
          />
          <Topic
            image="ethernet"
            title="Infraestrutura de Redes"
            description="Entenda melhor o impacto da conexão e suporte acerca dos equipamentos da rede de uma empresa ou conjunto residencial."
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

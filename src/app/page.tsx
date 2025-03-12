'use client'

import { Body } from "@/components/body";
import { Header } from "@/components/header";
import { Title } from "@/components/title";
import { ContainerPage } from "./styles";
import { Footer } from "@/components/footer";

export default function Home() {
  return (<>
    <ContainerPage>
     <Header />
     <Title />
     <Body />
     <Footer />
    </ContainerPage>
    </>
  );
}

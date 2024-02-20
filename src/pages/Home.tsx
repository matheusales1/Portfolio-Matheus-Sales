import { About } from "./About/About"
import { Conhecimentos } from "./Conhecimentos/Conhecimentos"
import { Contato } from "./Contato/Contato"
import { Footer } from "./Footer/Footer"
import { Header } from "./Header/Header"
import { Main } from "./Main/Main"
import Projetos from "./Projetos/Projetos"
import { Testimony } from "./Testimony/Testimony"


export const Home = () => {
    return (
        <div >
            <Header />
            <Main />
            <About />
            <Projetos />
            <Conhecimentos />
            <Testimony />
            <Contato />
            <Footer />
        </div>
    )
}
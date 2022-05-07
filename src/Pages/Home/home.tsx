import '../../Assets/CSS/home.css'
import '../../Assets/CSS/global.css'

import { Footer } from "../../Components/Footer/footer"
import { Header } from "../../Components/Header/header"

import Financeiro from '../../Assets/IMG/centroFinanceiro.png'

export const Home = ():JSX.Element =>{
    return(
        <div>
            <Header></Header>
            <main className='mainHome'>
                <section className='alinhamentoMain alinhamentoMainHome'>
                    <section className='sectionUmHome'>
                        <h1 className="h1Home">PointTour</h1>
                        <img src={Financeiro} alt="Centro financeiro de São Paulo" className='imgHome' />
                    </section>
                    <section className='sectionDoisHome'>
                        <div>
                            <p className='pHome'> São Paulo, centro financeiro do Brasil, está entre as cidades mais populosas do mundo, com diversas instituições culturais e uma rica tradição arquitetônica. Há prédios simbólicos como a catedral neogótica, o Edifício Martinelli, um arranha-céu inaugurado em 1929, e o Edifício Copan, com suas linhas curvas projetadas pelo arquiteto modernista Oscar Niemeyer. A igreja em estilo colonial do Pátio do Colégio marca o local onde os padres jesuítas fundaram a cidade em 1554.</p>
                        </div>
                        <br />
                        <div>
                            <p className='pHome'>A PointTour é um site que te ajuda a economizar na hora de visitar os pontos turisticos de São Paulo. Existem centenas de sites de turismo com diferentes preços e promoções Encontre o melhor roteiro com preços atraentes</p>
                        </div>
                    </section>
                </section>
            </main>
            <Footer></Footer>
        </div>
    )
}
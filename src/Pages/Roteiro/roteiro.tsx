import { Header } from "../../Components/Header/header"
import { Footer } from "../../Components/Footer/footer"
import { Modal } from "../../Components/Modal/modal"


import '../../Assets/CSS/roteiro.css'
import { useState } from "react"

export const Roteiro = ():JSX.Element => {

    const [modal, setModal] = useState('hide')

    const modalFuncionamento = (estado:string) => {
        if(estado === 'hide'){
            setModal('show')
        }
        else{
            setModal('hide')
        }
    }

    return(
        <div>
            <Header></Header>
            <main>              
                <Modal card = {modal} fechar = {modalFuncionamento}></Modal>
                <section className="sectionPaiDeTodos">
                    <section className="sectionUmRoteiro">
                        <div className="divH1">
                            <h1 className="h1Roteiro">Roteiro</h1>
                        </div>
                        <div className="divPaiInputs">
                            <div className="divInputs">
                                <p className="pRoteiro">Local</p>
                                <input className="inputsRoteiro" type="text" />
                            </div>
                            <div className="divInputs">
                                <p className="pRoteiro">Endereço</p>
                                <input className="inputsRoteiro" type="text" />
                            </div>
                            <div className="divTextArea">
                                <p className="pRoteiro">descrição</p>
                                <textarea className="textAreaRoteiro"></textarea>
                            </div>
                            <div className="divMasterCadastrar">
                                <div className="divBaseMaster">
                                    <p className="pRoteiro">Funcionamento</p>
                                    <input className="inputsRoteiro" type="text" />
                                </div>
                                <div className="divCadastrar">
                                    <button className="cadastrarRoteiro">Cadastrar</button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="sectionDoisRoteiro">
                        <div className="divCardRoteiro">
                            <div className="divQuadrado"><p>MASP</p></div>
                            <div className="divBrancaCard">
                                <p className="pRoteiro maxP">Um dos maiores símbolos da arquitetura moderna, o Museu de Arte de São Paulo é tido como um dos marcos de São Paulo, conhecido no país inteiro e ao redor do mundo. Essa é só um pouco da história do MASP, que tem muito mais a ser contado.</p>
                                <div className="divEditarExcluir">
                                    <button className="editar">Editar</button>
                                    <button className="excluir">Ecluir</button>
                                </div>
                                <div className="divSaibaMais">
                                    <button className="saibaMais" onClick={() => modalFuncionamento(modal)}>Saiba Mais</button>
                                </div>
                            </div>
                        </div>

                        <div className="divCardRoteiro">
                            <div className="divQuadrado"><p>Ibirapuera</p></div>
                            <div className="divBrancaCard">
                                <p className="pRoteiro maxP">No meio da selva de pedra, o Parque do Ibirapuera – Ibira para os mais íntimos – reluz como uma grande área verde. Para muitos é o pulmão da capital paulista, uma das principais atrações de SP, abriga dezenas de atividades para curtir todos os dias da semana</p>
                                <div className="divEditarExcluir">
                                    <button className="editar">Editar</button>
                                    <button className="excluir">Ecluir</button>
                                </div>
                                <div className="divSaibaMais">
                                    <button className="saibaMais" onClick={() => modalFuncionamento(modal)}>Saiba Mais</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </main>
            <Footer></Footer>

        </div>
    )
}
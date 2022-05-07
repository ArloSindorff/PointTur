import '../../Assets/CSS/global.css'
import '../../Assets/CSS/modal.css'

export const Modal = (props:any):JSX.Element => {
    return(
        <div>
            <div className={`fundoModal ${props.card}`}></div>
            <div className={`modalCard ${props.card}`}>
                <div className='headerMini'>
                    <div className='alinhamentoHeaderMini'>
                        <button className='buttunFechamento' onClick={props.fechar}>X</button>
                    </div>
                </div>
                <div className='nomeCard'>
                    <p>MASP</p>
                </div>
                <div className='DivPModal'>
                    <p className='pMaioresModal'> Av. Paulista, 1578 - Bela Vista, São Paulo - SP, 01310-200</p>
                    <p className='pMaioresModal'>Um dos maiores símbolos da arquitetura moderna, o Museu de Arte de São Paulo é tido como um dos marcos de São Paulo, conhecido no país inteiro e ao redor do mundo. Essa é só um pouco da história do MASP, que tem muito mais a ser contado.</p>
                    <p className='horariosModal'>Todas as terças das 10 as 20hs</p>
                 </div>
             </div>
        </div>
    )
}
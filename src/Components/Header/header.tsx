import '../../Assets/CSS/header.css'
import '../../Assets/CSS/global.css'
import { Link } from 'react-router-dom'

export const Header = ():JSX.Element => {
    return(
        <div>
            <div className="Header">
                <div className="alinhamentoHeader">
                    <div className='espaçamentoPHeader'>
                        <button className='bDoHeader'><Link className='Link' to='/'>PointTour</Link></button>
                        <button className='bDoHeader'><Link className='Link' to='/Roteiro'>Roteiro</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
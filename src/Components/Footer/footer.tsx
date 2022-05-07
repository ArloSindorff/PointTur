import '../../Assets/CSS/footer.css'
import '../../Assets/CSS/global.css'

import Whats from '../../Assets/IMG/Whats.png'
import Inst from '../../Assets/IMG/Inst.png'
import Face from '../../Assets/IMG/Face.png'
import Twiter from '../../Assets/IMG/Twiter.png'

export const Footer = ():JSX.Element => {
    return(
        <div>
            <div className='footer'>
                <div className='footerAlinhamento'>
                    <div>
                        <p className='pFooter'>Todos os direirtos reservados</p>
                    </div>
                    <div className='imgsFooter'>
                        <img src={Whats} alt="Logo do WhatsApp" className='logosFooter' />
                        <img src={Inst} alt="Logo do Instagram" className='logosInstaFooter' />
                        <img src={Face} alt="Logo do Facebook" className='logosFaceFooter' />
                        <img src={Twiter} alt="Logo do Twiter" className='logosFooter' />
                    </div>
                </div>
            </div>
        </div>
    )
}
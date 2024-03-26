import { faFacebook, faInstagram, faTiktok, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer=()=> {
    return(
     <div style={{backgroundColor: 'lightskyblue',
     display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
     paddingTop:'15px', paddingBottom:'20px'}}>
        <FontAwesomeIcon icon= {faInstagram }style={{width:'35px', height: '35px'}} />
        <FontAwesomeIcon icon={faFacebook} style={{width:'35px', height: '35px'}}/>
        <div>
        <FontAwesomeIcon icon={faWhatsapp}style={{width:'35px', height: '35px'}}/>
        <h6 style={{fontSize: '20px'}}>+57 3133550351</h6>
        </div>
        <FontAwesomeIcon icon={faTiktok} style={{width:'35px', height: '35px'}}/>
        <FontAwesomeIcon icon={faTwitter} style={{width:'35px', height: '35px'}}/>
        </div>
        
    )
}
export default Footer
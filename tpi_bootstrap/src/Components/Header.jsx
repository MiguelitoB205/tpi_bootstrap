import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from  '@fortawesome/free-solid-svg-icons'

const Header =()=>{
    
    return(
        <div className='header' style={{backgroundColor:'lightblue'}}>
            <FontAwesomeIcon icon={ faBook } style={{width: '45px', height: '45px'}} />
            <h1 style={{color: 'blueviolet', fontSize: '40px'}}>Sabiduría Mundial</h1>
            <Navbar/>

        </div>
        
    )
}
export default Header;
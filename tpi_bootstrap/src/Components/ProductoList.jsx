import {Link} from 'react-router-dom'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

 const ProductoList = ({ favoritos, setFavoritos, objeto}) =>{

    const  {id, nombre, imagen, titulo, autor, categoria, precio, resena} = objeto
     
   const miLocalStorage = localStorage.setItem('objeto', objeto)
    
  

    return(
<div>
     <div className="container-items" >
        <div style={{backgroundColor: 'skyblue', borderRadius: '10px', margin: '50px'}}>
            <Link to={'/productoDetalle/' + id}>
        <h1 style={{padding: '29px'}}>{nombre}</h1>
            <img src={imagen} width='150px' height='150px' style={{margin: '34px'}}/>
            <p><strong>Título: </strong> {titulo}</p>
            <p><strong> Autor: </strong> {autor}</p>
            <p><strong>Categoría: </strong> {categoria}</p>
            <p><strong>Precio: </strong>{precio}</p>
            <p><strong>Descripción: </strong>{resena}</p>
            
            </Link>
            <button style={{margin:'35px'}} onClick={() =>{setFavoritos ([...favoritos, objeto] ), miLocalStorage}} >
          <FontAwesomeIcon icon={faHeart} style={{width: '50px', height: '50px', color: 'red', backgroundColor: 'pink'}}/>
      </button>
            </div>

            
        </div>
            
        </div>
    )
}
export default ProductoList
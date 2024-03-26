import React from 'react'
import { Link, Outlet} from 'react-router-dom'
    

const CategoriaList = ({item}) => {
    const {categoria_id, nombre} = item

  return (
    <div >

      <div  >
            <Link to={'/categoriaDetalle/' + categoria_id}  >
          <div >  
            <h4>{nombre}</h4>
            </div>
            </Link>
            </div>
        
        <Outlet/>
    </div>
  )
}

export default CategoriaList

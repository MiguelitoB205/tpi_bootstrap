import CategoriaList from "./CategoriaList";

const CategoriaContainer=()=>{
    
    const categorias = [
    {categoria_id: 1, nombre: 'Filosofía y religión'},
    {categoria_id: 2, nombre: 'Poesía'},
    {categoria_id: 3, nombre: 'Ciencias Naturales'},
    {categoria_id: 4, nombre: 'Matemáticas'},
    {categoria_id: 5, nombre: 'Historia y geografía'},
    {categoria_id: 6, nombre: 'Infantil'},
    {categoria_id: 7, nombre: 'Literatura'},
    {categoria_id: 8, nombre: 'Literatura en inglés'}]

    
    return(
        <div style={{display: 'grid', justifyContent: 'space-between', gridTemplateColumns: '50% 50%'}}>
            {categorias.map(categoria =>
                <CategoriaList  key={categoria.categoria_id} item={categoria}/>)}
        </div>
    )
}
export default CategoriaContainer;
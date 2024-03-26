import React from "react"
import   {useParams}  from "react-router-dom"
import Header from "../Components/Header"
import Footer from "../Components/Footer"


const CategoriaDetalle= () => {

  const libros=[
    {
      id: 1,
      imagen: 'https://storage.googleapis.com/catalogo-libros/extralarge/bd060bfa-a375-991a-06ec-5eea8e6d4998_imagen.PNG',
      nombre: 'Sagrada Biblia Latinoamericana',
        titulo:'Sagrada Biblia Latinoamericana',
        autor: 'Varios',
        categoria: 'Filosofía y religión',
        precio: '$120.990',
        resena: 'Libro apto para orar, contiene las enseñanzas de nuestro Señor Jesucristo.De igual modo cuenta la historia de un pueblo que comenzó a experimentar la providencia Divina, y como nace el culto a Dios.',
        categoria_id: 1
      
      
    },
    {
      id: 2, imagen:'https://i.ebayimg.com/images/g/6HQAAOSwWxRl4MXI/s-l960.jpg',nombre: 'Pinocho', titulo:'Pinocho',
        autor:'Carlo Colodi', categoria: 'Infantil',precio: '$340.990', resena: 'Se trata de un niño que nace de una obra de arte por Geppetto el carpintero, quien al decir mentiras, le crece la nariz, muy divertida historia para los niños que quieren aprender',
        categoria_id: 6
      
    },
    {
      id:3,
      imagen: 'https://panamericana.vtexassets.com/arquivos/ids/363554-1200-auto?v=637366676080330000&width=1200&height=auto&aspect=true',
      nombre: 'La patasola',
      
        titulo: 'La patasola',
        autor: 'Beatriz Caballero, Iván Cardozo y Esmeralda Pinzón',
        categoria: 'Literatura',
        precio: '$230.990',
        resena: 'Para los amantes de los mitos y leyendas, es un excelente libro que ofrece gran entretenimiento a los lectores.',
        categoria_id: 7
      }
    ,
    {
      id:4,
      imagen: 'https://panamericana.vtexassets.com/arquivos/ids/171593-600-auto?v=636209442788070000&width=600&height=auto&aspect=true',
      nombre: 'Romeo and Julieth',
      
        titulo: 'Romeo and Julieth',
        autor: 'William Shakespeare',
        categoria: 'Literatura en inglés',
        precio: '$90.990',
        resena: 'Para los que quieran aprender inglés leyendo, es una obra que se trata de de dos familias en disputa, de las cuales salen la legendaria pareja que, al casarse, se genera un conflicto entre aquéllos.',
        categoria_id: 8
      

    },
    {
      id: 5,
      imagen: 'https://panamericana.vtexassets.com/arquivos/ids/478228-800-auto?v=638095746914400000&width=800&height=auto&aspect=true',
      nombre: 'Atlas de Colombia y del Mundo',
      
        titulo: 'Atlas de Colombia y del Mundo',
        autor: 'Varios',
        categoria: 'Historia y Geografía',
        precio: '$180.990',
        resena: 'Ofrece información interesante sobre la geografía de nuestro país y del mundo entero. Contiene información de croquis, océanos, hidrografía, relieve y también explica la división política de Colombia y de todos los continentes',
        categoria_id: 5
      
    },
    {
      id: 6,
      imagen: 'https://panamericana.vtexassets.com/arquivos/ids/306415-800-auto?v=636778917865400000&width=800&height=auto&aspect=true',
      nombre: 'Brújula para el mundo contemporáneo',
      
        titulo:'Brújula para el mundo contemporáneo',
        autor: 'Diana Uribe',
        categoria: 'Historia y geografía',
        precio: '$450.990',
        resena: 'Diana Uribe es una excelente historiadora, quien relata los hechos históricos, quien además sigue relatando la historia contemporánea',
        categoria_id: 5
      
    },
    {
      id: 7,
      imagen:'https://upinforma.com/nuevo/images/noticias/gabo.jpg',
      nombre: 'Relato de un náufrago',
      
        titulo: 'Relato de un náufrago',
        autor: 'Gabriel García Márquez',
        categoria: 'Literatura',
        precio: '$230.990',
        resena: 'Gabriel García Márquez era un excelente autor de libros colombianos, uno de ellos, relatos de un náufrago, historia que relata el testimonio de un marinero que sufre el naufragio al momento de regresar a Colombia, que fue una experiencia súper dura de supervivencia.',
        categoria_id: 7
      
    },
    {
      id: 8,
      imagen: 'https://panamericana.vtexassets.com/arquivos/ids/483261-800-auto?v=638126093090500000&width=800&height=auto&aspect=true',
      nombre: 'Álgebra de Baldor',
      
        titulo: 'Algebra de Baldor',
        autor: 'Aurelio Baldor',
        categoria: 'Matemáticas',
        precio: '$360.990',
        resena: 'Para los amantes de las matemáticas y el áñgebra, es un manual en donde aparecen ejercicios para el desarrollo de la lógica matemática',
        categoria_id: 4
      
    },
    {
      id: 9,
      imagen: 'https://images.cdn3.buscalibre.com/fit-in/360x360/61/dd/61ddbfdec1a7bfeee392cc0f29af52af.jpg',
      nombre: 'Historia de la matemática',
      
        titulo: 'Historia de la matemática',
        autor: 'Carl B. Boyer',
        categoria: 'Matemáticas',
        precio: '$230.990',
        resena: 'Libro que cuenta el origen de los números que conocemos y como a lo largo de la historia se ha desarrollado la lógica matemática.',
        categoria_id: 4
      
    },
    {
      id: 10,
      imagen:'https://images.cdn3.buscalibre.com/fit-in/360x360/fa/50/fa500f5878c50872066bdfb4ebc65b89.jpg',
      nombre: 'Poemas de otros',
      
        titulo: 'Poemas de otros',
        autor: 'Mario Benedetti',
        categoria: 'Poesía',
        precio: '$460.990',
        resena: 'Para los fanáticos de la poesía, es un libro para aprender a dedicar poemas y canciones a sus parejas, escrito por un gran poéta sudamericano.',
        categoria_id: 2
      
    }

  ]
  const params = useParams()
  

  const categoriasSeleccionadas = libros.find(libro=> libro.categoria_id ===Number(params.categoria_id));
    
    console.log(categoriasSeleccionadas);

  
    return(
      <>
      <Header/>
      <div style={{backgroundColor: 'violet', fontSize: '30px'}}>
        {categoriasSeleccionadas ? (
          <div key={categoriasSeleccionadas.categoria_id}>
            <h1>{categoriasSeleccionadas.nombre}</h1>
            <img src={categoriasSeleccionadas.imagen} alt="" width='350px' height='250px' />
            <p><strong>Título: </strong> {categoriasSeleccionadas.titulo}</p>
            <p><strong>Autor: </strong> {categoriasSeleccionadas.autor}</p>
            <p><strong>Categoría: </strong> {categoriasSeleccionadas.categoria}</p>
            <p><strong>Precio: </strong>{categoriasSeleccionadas.precio}</p>
            <p><strong>Reseña: </strong> {categoriasSeleccionadas.resena}</p>
          </div>
        ): (
          <h1>Error del servidor!!!</h1>
        )}
      </div>
      <Footer/>
      </>
      
    )
}
export default CategoriaDetalle
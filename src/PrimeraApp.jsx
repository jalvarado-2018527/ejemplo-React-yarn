import React from 'react'
import PropTypes from 'prop-types'

export const PrimeraApp = ( { nombre, titulo, numero }) => {
  
  
  
  
    return (
        <>
            <h1>PrimeraApp</h1>
            <h2>  { titulo }  </h2>
            <h3>  { numero }  </h3>
            <h4>  { nombre }  </h4>
            <button className='btn btn-danger'>saludar</button>
        </>
    
        
    )
}

PrimeraApp.propType ={
    titulo: PropTypes.string.isRequired,
    numero: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,



}

PrimeraApp.defaultProps={
    titulo : "no hay titulo",
    numero: 4,
    nombre: 'jairo',
}
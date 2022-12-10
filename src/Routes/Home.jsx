import React from 'react'
import Card from '../Components/Card'
import { useContext } from 'react'
import { ContextoGlobal } from '../Components/utils/global.context' 

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {equipo} = useContext(ContextoGlobal)
  
  return (
    < >
      <h1>Home</h1>
      <div className='card-grid'>
        {equipo.length ? equipo.map(dentist => <Card {...dentist} key={dentist.id} />) : null}
        {/* Aqui deberias renderizar las cards */}
      </div>
    </>
  )
}

export default Home
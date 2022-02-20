import React, {useState} from 'react'
import {Container} from 'react-bootstrap'
import Map from '../../Map'
import Products from '../../pages/Product/Products'


const Wrap = () => {
  const [loading, setLoading] = useState(true)
  return (
    <Container>
        <Map/>
        <Products loading={loading} setLoading={setLoading}/>
    </Container>
    
  )
}

export default Wrap
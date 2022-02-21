import React, {useState} from 'react'
import {Container} from 'react-bootstrap'
import Categories from '../../categories/Categories'
import Map from '../../Map'
import Products from '../../pages/Product/Products'
import SliderTop from '../../sliders/SliderTop'


const Wrap = () => {
  const [loading, setLoading] = useState(true)
  return (
    <Container>
        <Map/>
        <SliderTop/>
        <Categories/>
        <Products loading={loading} setLoading={setLoading}/>
        <Products loading={loading} setLoading={setLoading}/>
    </Container>
    
  )
}

export default Wrap
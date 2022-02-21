import React from 'react'
import {Row, Col} from 'react-bootstrap'

import './Categories.css'

const Categories = () => {
  return (
    <Row className='categories' style={{margin: 'auto'}}>
        <Col lg="12" className='categories__title'>Danh mục</Col>
        <Col lg="1" className='category'>
               <img className='category__img' src="https://picsum.photos/seed/picsum/200/200" alt="alt" />
               <p className='category__name'>Danh muc</p>
        </Col>
        <Col lg="1" className='category'>
               <img className='category__img' src="https://picsum.photos/seed/picsum/200/200" alt="alt" />
               <p className='category__name'>Danh muc</p>
        </Col>
        <Col lg="1" className='category'>
               <img className='category__img' src="https://picsum.photos/seed/picsum/200/200" alt="alt" />
               <p className='category__name'>Danh muc</p>
        </Col>
        
        
    </Row>
  )
}

export default Categories
import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './Product.css'

const Product = (doc) => {

  return (
    <Col lg="2" style={{paddingBottom: '20px'}}>
    <Link className='card' to="xxx"><Card>
        <Card.Img variant="top" src="https://picsum.photos/200/200?grayscale" />
        <Card.Body>
            <Card.Title className='card__title'>{doc.name}</Card.Title>
            <Card.Text className='card__price'>
            {doc.price}
            </Card.Text>
        </Card.Body>
    </Card>
    </Link>
    </Col>
  )
}

export default Product
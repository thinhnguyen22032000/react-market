import React, { useEffect, useState } from 'react'
import Product from './Product'
import { Col, Row, Spinner } from 'react-bootstrap'


import { collection, onSnapshot, query } from 'firebase/firestore'
import {db} from '../../../config/config'

const Products = ({loading, setLoading}) => {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    let q = query(collection(db, 'products'))
    onSnapshot(q, (snapshot) => {
      setProducts(snapshot.docs.map(doc => ({
        ...doc.data(), id: doc.id
      })))
      setLoading(false)
    })
  }, [])
  
  if(loading) {
    console.log('loading...')
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
  }
  
  return (
    <Row style={{marginTop: '20px'}}>
      <Col lg='12' style={{padding:'10px'}}>Sản phẩm mới</Col>
        {
         products.map(doc => {
             return <Product key={doc.id} {...doc}/>
         } )
        }
    </Row>
  )
}

export default Products
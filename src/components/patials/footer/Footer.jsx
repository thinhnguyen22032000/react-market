import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {AiFillFacebook, AiFillYoutube, AiFillInstagram} from 'react-icons/ai'
import './Footer.css'

const Footer = () => {
  return (
    <Container fluid>

      <Row className='footer'>
        <Col lg='4' className='footer__block'>
          <div className='block__title'>Theo dõi chúng tôi</div>
          <div className='block__list'>
            <div className='block__list-item'>
              <div className='block__list-item-icon'>
               <AiFillFacebook/>
              </div>
              <div className='block__list-item-text'>
              facebook
              </div>
            </div>
            <div className='block__list-item'>
            <div className='block__list-item-icon'>
              <AiFillYoutube/>
              </div>
              <div className='block__list-item-text'>
              youtobe
              </div>
            </div>
            <div className='block__list-item'>
            <div className='block__list-item-icon'>
              <AiFillInstagram/>
              </div>
              <div className='block__list-item-text'>
              instagram
              </div>
            </div>
          </div>
        </Col>
        

      </Row>
      
    </Container>
  )
}

export default Footer
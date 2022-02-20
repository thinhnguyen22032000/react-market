import React from 'react'
import { Navbar, Container, Nav, Button, InputGroup, FormControl } from 'react-bootstrap'
import {AiOutlineSearch, AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom'

import './Header.css'

const Header = () => {
  return (
    <Navbar className='header' expand="lg" variant="light">
        <Container>
            <Navbar.Brand className="header__logo"><Link className='header__logo__link' to="/">GreenLand</Link></Navbar.Brand>
            <Nav.Item>
                <InputGroup>
                    <FormControl
                    placeholder="Tìm kiếm"
                    aria-label="Recipient's username with two button addons"
                    />
                    <Button variant="outline-secondary"><AiOutlineSearch/></Button>
                </InputGroup>
            </Nav.Item>
            <Nav>
                <Nav.Link href="#home">Đăng kí</Nav.Link>
                <Nav.Link href="#features">Đăng nhập</Nav.Link>
                <Nav.Link><AiOutlineShoppingCart/></Nav.Link>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header

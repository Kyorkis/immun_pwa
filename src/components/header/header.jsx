import React from 'react'
import ReactDOM from 'react-dom'
import './header.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {LinkContainer} from 'react-router-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
import Image from 'react-bootstrap/Image'
import NavLink from 'react-bootstrap/NavLink';

export default class Header extends React.Component{
    render(){
        return(
            <Container fluid="true "className='p-0 '>
                <Navbar className="pl-5 pr-5 ">
                        <LinkContainer to="/">
                            <Navbar.Brand >
                                <Image fluid='true' src="http://kyorkis.pythonanywhere.com/static/img/logo_min.png"/>
                            </Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle/>
                        <Navbar.Collapse className="justify-content-center text-white">
                            <Nav >
                                <NavDropdown title="О Центре" >
                                    <LinkContainer to="/history">
                                        <NavDropdown.Item>
                                            История центра
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/method'>
                                        <NavDropdown.Item>
                                            Метод ГП
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    
                                    <Dropdown.Divider />
                                    <LinkContainer to='/about_author'>
                                        <NavDropdown.Item>
                                            Об авторе метода
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    
                                </NavDropdown>
                                <NavDropdown title="Наши услуги">
                                    <LinkContainer to='/lechim'>
                                        <NavDropdown.Item>
                                            Мы лечим
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    
                                    <LinkContainer to='/analizy'>
                                        <NavDropdown.Item>
                                            Анализы
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                                <NavDropdown title="Наши врачи">
                                    <LinkContainer to ='/raspisaniye'>
                                        <NavDropdown.Item>
                                            Расписание врачей
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/vrachi'>
                                        <NavDropdown.Item>
                                            Список врачей
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    
                                </NavDropdown>
                                <LinkContainer to="/contacts">
                                    <NavLink>
                                        Контакты
                                    </NavLink>
                                </LinkContainer>
                                
                            </Nav>
                        </Navbar.Collapse>
                        <Row className="contacts-container">
                            <Col sm={12} >
                                <a href="tel:+74994454083" className="text-white">+74994454083</a>
                            </Col>
                            <Col sm={12}>
                                <a href="tel:+79032298832" className="text-white">+79032298832</a>
                            </Col>
                        </Row>
                    
                </Navbar>
            </Container>
        )
    }
}
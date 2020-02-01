import React from 'react'
import './footer.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'
import FormGroup from 'react-bootstrap/FormGroup'
const Footer = () => {
    return(
        <Container fluid="true" className="footer">
            <Row className="p-5 justify-content-around">
                <Col md={12} lg={4} className="m-auto">
                    <Form>
                        <FormGroup>
                            <Form.Label className='text-white'>
                                Ваше имя
                            </Form.Label>
                            <Form.Control type="text" placeholder="Введите Имя"/>
                        </FormGroup>
                        <FormGroup>
                            <Form.Label className='text-white'>
                                Текст вопроса
                            </Form.Label>
                            <Form.Control type="text" placeholder="Введите текст вопроса"/>
                        </FormGroup>
                    </Form>
                </Col >
                <Col md={12} lg={4}  className="m-auto text-center">
                    <Image fluid="true" src='http://kyorkis.pythonanywhere.com/static/img/logo_footer.png'/>
                </Col>
                <Col md={12} lg={4}  className='text-white'>
                    <p>immun.ru © 2003 - 2019 Все права защищены. Для связи: mail@immun.ru</p>
                    <p>Медицинский центр иммунокоррекции им. Р.Н. Ходановой. ООО "ВИТЕЛА"</p>
                    <p>Лицензия на медицинскую деятельность № ЛО-77-01-010176 от 29 апреля 2015г. бессрочная.</p>
                    <p>16+ Материал сайта не предназначены для детей младше 16 лет.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer
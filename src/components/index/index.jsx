import React from 'react'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Slider from '../slider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard,faHandshake,faNotesMedical,faRubleSign,faCommentMedical } from '@fortawesome/free-solid-svg-icons'

import './index.css'

const Index = () => {
    return(
        <React.Fragment>
           <Slider/>
           <Container fluid="true" className="mt-5">
                <Row >
                    <Col className="banner text-center p-5 d-flex justify-content-center mb-5">
                        <div className="d-flex flex-column bg-success text-white col-lg-5 col-md-7 col-sm-9 p-5 ">
                            <h2>Метод гепомунктуры</h2>
                            <p>Уникальный метод гемопунктуры центра им. Ходановой позволяет с большой эффективностью бороться с аллергическими заболеваниями, бронхитами и другими аутоимунными болезнями</p>
                            <Button  variant="primary">Узнать больше</Button>
                        </div>
                    </Col>   
                </Row>
           </Container>
           <Container fluid="true" className="mb-5">
               <Row className="flex-column">
                    <Col className="text-center">
                        <h2>Сильный иммунитет – Ваше здоровье</h2>
                    </Col>
                    <Col className="text-center">
                        <h3>Добро пожаловать в МЦИК им. Р.Н. Ходановой</h3>
                    </Col>
                    <Col className="text-center">
                        <p>Главная задача нашего медицинского центра: сделать Вас здоровыми и уверенными в себе!</p>
                    </Col>
                    <Col className="text-center">
                        <p>У нас собрана команда лучших специалистов, которая работает для Вас, чтобы Вы были здоровы и счастливы!</p>
                    </Col>
                    <Col className="text-center">
                        <p>МЦИК им. Ходановой Р.Н. - один из первых негосударственных медицинских центров иммунологии и аллергологии в Москве, был создан с целью предоставления жителям столицы современного лечения и профилактики заболеваний.</p>
                    </Col>
                    <Col className="text-center">
                        <p>Более 30 лет успешной работы центра в России позволили накопить бесценный опыт врачебной практики, выйти на качественно-новый, высокий уровень диагностики и обслуживания пациентов.</p>
                    </Col>
                    <Col className="text-center">
                        <p>Мы с гордостью можем предложить нашим пациентам системный подход в диагностике и лечении заболеваний.</p>
                    </Col>
                    <Col className="text-center">
                        <p>При посещении МЦИК им. Ходановой Р.Н. Вы можете быть уверены, что находитесь в самых надежных руках.</p>
                    </Col>
               </Row>
               <Row className="justify-content-center">
                    <Col lg={12} className='text-center'>
                        <h2>Ваше здоровье для нас - наша основная задача!</h2>
                    </Col>
                    <Col lg={12} className='text-center'>
                        <h3>МЫ ГАРАНТИРУЕМ:</h3>
                    </Col>
                    <Col lg={7} className="d-flex flex-row mb-1">
                        <FontAwesomeIcon icon={faCreditCard} size="5x" className="mr-2"/>
                        <p >
                            Никаких дополнительных расходов и скрытых трат. Возможность оплаты по пластиковой карте
                        </p>
                    </Col>
                    <Col lg={7} className="d-flex flex-row mb-1">
                        <FontAwesomeIcon icon={faHandshake} size="5x" className="mr-2"/>
                        <p >
                        Особое уважение к пациенту и приветливый персонал
                        </p>
                    </Col>
                    <Col lg={7} className="d-flex flex-row mb-1">
                        <FontAwesomeIcon icon={faNotesMedical} size="5x" className="mr-2"/>
                        <p >
                        Только качественную медицинскую помощь
                        </p>
                    </Col>
                    <Col lg={7} className="d-flex flex-row mb-1">
                        <FontAwesomeIcon icon={faRubleSign} size="5x" className="mr-2"/>
                        <p >
                        Низкие цены на анализы.
                        </p>
                    </Col>
                    <Col lg={7} className="d-flex flex-row mb-1">
                        <FontAwesomeIcon icon={faCommentMedical} size="5x" className="mr-2"/>
                        <p >
                        Полную информационную поддержку от Вашего врача: результаты диагностики, расшифровка анализов, рекомендуемые программы лечения и послелечебное общение, советы по профилактике
                        </p>
                    </Col>
               </Row>
           </Container>
        </React.Fragment>
        
    )
}

export default Index
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCapsules,faBrain,faBookMedical,faGrinWink,faLock } from '@fortawesome/free-solid-svg-icons'
import './lechim.css'
function Lechim(props){
    return(
        <Container fluid="true" className="w-75">
            <Row className="justify-content-around">
                <Col sm={12} className="text-center mb-5">
                    <h1>Мы лечим</h1>
                    <h2>5 ПРИЧИН, ПОЧЕМУ К НАМ СТОИТ ОБРАТИТЬСЯ:</h2>
                </Col>
                <Col xl={4}lg={6}md={12} className="d-flex align-items-center justify-content-around mb-5">
                    <FontAwesomeIcon icon={faCapsules}  size="8x" className="mr-4"/>
                    <div>
                        Результат лечения. Мы предлагаем только безопасные и эффективные методы лечения, которые обеспечивают гарантированное и быстрое выздоровление.
                    </div>
                </Col> 
                <Col xl={4}lg={6}md={12} className="d-flex align-items-center justify-content-around mb-5">
                    <FontAwesomeIcon icon={faBrain}  size="8x" className="mr-4"/>
                    <div>
                        Результат лечения. Мы предлагаем только безопасные и эффективные методы лечения, которые обеспечивают гарантированное и быстрое выздоровление.
                    </div>
                </Col>
                <Col xl={4}lg={6}md={12} className="d-flex align-items-center justify-content-around mb-5">
                    <FontAwesomeIcon icon={faBookMedical}  size="8x" className="mr-4"/>
                    <div>
                        Результат лечения. Мы предлагаем только безопасные и эффективные методы лечения, которые обеспечивают гарантированное и быстрое выздоровление.
                    </div>
                </Col>
                <Col xl={4}lg={6}md={12} className="d-flex align-items-center justify-content-around mb-5">
                    <FontAwesomeIcon icon={faGrinWink}  size="8x" className="mr-4"/>
                    <div>
                        Результат лечения. Мы предлагаем только безопасные и эффективные методы лечения, которые обеспечивают гарантированное и быстрое выздоровление.
                    </div>
                </Col>
                <Col xl={4}lg={6}md={12} className="d-flex align-items-center justify-content-around mb-5">
                    <FontAwesomeIcon icon={faLock}  size="8x" className="mr-4"/>
                    <div>
                        Результат лечения. Мы предлагаем только безопасные и эффективные методы лечения, которые обеспечивают гарантированное и быстрое выздоровление.
                    </div>
                </Col>

            </Row>
            <Row className="justify-content-around">
                <ListGroup >
                    <ListGroup.Item variant="success">
                        <h2>Аллергология</h2>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Аллергия
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Бронхит   
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Атопический дерматит    
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Фурункулез
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Поллиноз
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Фотодерматоз
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Аллергический ринит
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Аллергический конъюктивит
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Крапивница
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Отек Квинке
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Экземы
                    </ListGroup.Item>
                </ListGroup>

                <ListGroup>
                    <ListGroup.Item variant="success">
                        <h2>Ревматология</h2>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Ревматоидный артрит
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Остеохондроз   
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Болезнь Бехтерева   
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Системная склеродермия
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Красная волчанка
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Волчаночный нефрит
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Ревматические заболевания
                    </ListGroup.Item>      
                </ListGroup>

                <ListGroup>
                    <ListGroup.Item variant="success">
                        <h2>Эндокринология</h2>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Сахарный диабет 1 и 2 типа
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Ожирение , программа похудания   
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Заболевания щитовидной железы 
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Диффузный токсический зоб
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Хронический аутоимунный тиреодит
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Гипотериоз
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Хаситоксикоз
                    </ListGroup.Item> 
                    <ListGroup.Item>
                        Нарушения в работе гипофиза
                    </ListGroup.Item>       
                </ListGroup>

                <ListGroup>
                    <ListGroup.Item variant="success">
                        <h2>Кардиология</h2>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Артериальная гипертония
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Варикозная болезнь   
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Вегетососудистая дистония
                    </ListGroup.Item>
                    
                </ListGroup>

                <ListGroup>
                    <ListGroup.Item variant="success">
                        <h2>Иммунология</h2>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Герпес
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Рассеяный склероз 
                    </ListGroup.Item>
                </ListGroup>

                <ListGroup>
                    <ListGroup.Item variant="success">
                        <h2>Инфекционные болезни</h2>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Гепатиты
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Циститы
                    </ListGroup.Item>
                </ListGroup>

                <ListGroup>
                    <ListGroup.Item variant="success">
                        <h2>Гинекология</h2>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Эндометриоз
                    </ListGroup.Item>
                </ListGroup>

                <ListGroup>
                    <ListGroup.Item variant="success">
                        <h2>Заболевания ЖКТ</h2>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Панкреатит
                    </ListGroup.Item>
                </ListGroup>

            </Row>
        </Container>
    )
}

export default Lechim
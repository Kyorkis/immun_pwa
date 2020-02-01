import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import YandexMap from '../yandex-map'

function Contacts(){
    return(
        <Container fluid="true" className="w-75">
            <h1 className='text-center'>Наши Контакты</h1>
            <Row className="justify-content-around text-center mt-5">
                <ListGroup className="col-md-12 col-lg-4 mb-5">
                    <ListGroup.Item variant="success">
                        <h2>Время работы</h2>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Понедельник - пятница с 8.00 - 14.00 
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Суббота: 9.00 - 12.00
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Воскресение: выходной
                    </ListGroup.Item>
                </ListGroup>

                <ListGroup className="col-md-12 col-lg-4 mb-5">
                    <ListGroup.Item variant="primary">
                        <h2>Телефон и почта</h2>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        +7(499)445-40-83
                    </ListGroup.Item>
                    <ListGroup.Item>
                        WhatsApp/Viber:+7(903)229-88-32
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Email: mail@immun.ru
                    </ListGroup.Item>
                </ListGroup>

                <ListGroup className="col-md-12 col-lg-4 mb-5">
                    <ListGroup.Item variant="info">
                        <h2>Наш адрес:</h2>
                    </ListGroup.Item>
                        
                    <ListGroup.Item>
                        м. Славянский бульвар
                        
                    </ListGroup.Item>
                    <ListGroup.Item>
                        121352, Москва, ул. Давыдковская д. 6
                    </ListGroup.Item>
                </ListGroup>
            </Row>

            <Row className="justify-content-center mt-5">
                <Col lg={10} md={12} className="text-center">
                    <h2>Как пройти:</h2>
                    <p>метро "Славянский бульвар", последний вагон из центра. Выход направо к переходу на Кутузовский проспект. Через переход, выйти к светофору и перейти ул. Славянский бульвар. Далее прямо, Сбербанк обойти справа и повернуть влево на дорожку идущую между большой стройкой слева и забором школы справа. Далее, в конце дорожки, повернуть немного вправо и прямо 200 метров. Вы подойдете к лестнице около 16 этажного дома. Спуститесь вниз и поверните направо к последнему подъезду. Застекленный вход, вывеска "Медицинский центр".</p>
                </Col>
            </Row>

            <YandexMap/>
        </Container>
    )
}

export default Contacts
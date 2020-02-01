import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'


const Slider = () => {
    return(
        <Container fluid='true' className="mb-5 pl-0 pr-0 m-auto w-75">
            <div className="text-center">
                <Image src="http://kyorkis.pythonanywhere.com/static/img/banner_2_up.jpg" fluid="true"/>
            </div>
            <Carousel interval={5000} className='text-center'>
                <Carousel.Item>
                    <div className="d-flex jusity-content-around ">
                        <Image src="http://kyorkis.pythonanywhere.com/static/img/allerg_konyuktivit_375.jpg" fluid="true"/>  
                        <div className="m-auto">
                            <h2>Лечение аллергического конъюктивита</h2>
                            <p>В нашем центре накоплен огромный опыт по лечению аллергического конъюктивита любой стадии запущенности с помощью уникального метода гемопунктуры по Ходановой</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex jusity-content-around">
                        <Image src="http://kyorkis.pythonanywhere.com/static/img/vosstanovleniye_posle_insulta_375.jpg" fluid="true"/>  
                        <div className="m-auto">
                            <h2>Лечение аллергического конъюктивита</h2>
                            <p>В нашем центре накоплен огромный опыт по лечению аллергического конъюктивита любой стадии запущенности с помощью уникального метода гемопунктуры по Ходановой</p>
                        </div>
                    </div>
                </Carousel.Item> 
                <Carousel.Item>
                    <div className="d-flex jusity-content-around">
                        <Image src='http://kyorkis.pythonanywhere.com/static/img/skleroderm_375.jpg' fluid="true"/> 
                        <div className="m-auto">
                            <h2>Лечение аллергического конъюктивита</h2>
                            <p>В нашем центре накоплен огромный опыт по лечению аллергического конъюктивита любой стадии запущенности с помощью уникального метода гемопунктуры по Ходановой</p>
                        </div>
                    </div>
                </Carousel.Item>            
            </Carousel>
            <div className="text-center">
                <Image src="http://kyorkis.pythonanywhere.com/static/img/banner_2_down.jpg" fluid="true"/>
            </div>
            
        </Container>
    )
}


export default Slider
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'


const doctors=[
    {name:"Лапа Людмила Григорьевна",desc:"Генеральный директор Медицинского центра иммунокоррекции им. Ходановой Р. Н., врач-терапевт высшей квалификации.",img:"http://www.immun.ru/files/photo/user/Lapa%20LG.png"},
    {name:"Сеславина Лия Сергеевна",desc:"Главный научный сотрудник Института иммунологии ФМБА России, ученый секретарь диссертационного совета по защите докторских диссертаций, заведующая лабораторией иммунотерапии и консультант Центра Иммунокоррекции им. Р. Н. Ходановой, доктор медицинских наук.",img:"http://www.immun.ru/files/photo/user/seslavina200_300.jpg"},
    {name:"Скрябина Галина Леонидовна",desc:"Заместитель Генерального директора МЦИК им. Р.Н. Ходановой по медицинской деятельности (Главный врач) .Врач терапевт, эндокринолог, гастроэнтеролог, диетолог. Ведет консультативный прием и лечение больных с различными терапевтическими и эндокринологическими заболеваниями.  Стаж работы более 30 лет.",img:"http://www.immun.ru/files/photo/user/skryabinagl2.jpg"},
    {name:"Удалова Валентина Александровна",desc:"Заместитель Генерального директора МЦИК им. Р.Н. Ходановой по клинико-экспертной работе. Врач аллерголог-иммунолог. Кандидат медицинских наук. Соавтор 6 научных публикаций. Владеет методиками диагностики аллергозаболеваний и иммунодефицитных состояний. Стаж работы 15 лет. ",img:"http://www.immun.ru/files/photo/user/Ydalova_1.jpg"},
    {name:"Якубов Дмитрий Маратович",desc:"Врач аллерголог-иммунолог. Занимается лечением аллергий, атопических дерматитов, бронхиальных астм и их диагностикой. Стаж работы 16 лет.",img:"http://www.immun.ru/files/photo/user/yakubov2.jpg"},
    {name:"Кожелупенко Мария Владимировна",desc:"Врач аллерголог-иммунолог, терапевт, пульмонолог, терапевт. Ведет консультативный прием и лечение больных с различными аллергическими заболеваниями.  Стаж работы 23 года.",img:"http://www.immun.ru/files/photo/user/kojelupenko.jpg"},
    {name:"Штепа Марина Леонтьевна",desc:"Врач ревматолог, кардиолог. Высшая категория. Ведет консультативный прием и лечение больных с различными ревматоидными и кардиологическими заболеваниями.  Стаж работы 34 года.",img:"http://www.immun.ru/files/photo/user/ShtepaML.jpg"},
    {name:"Деганова Виктория Анатольевна",desc:"Врач ревматолог, терапевт, озонотерапевт. Стаж работы по специальности - более 10 лет. Ведет консультативный прием и лечение больных с различными ревматоидными и терапевтическими заболеваниями.  Проводит внутрисуставные инъекции.Стаж работы более 10 лет.",img:"http://www.immun.ru/files/photo/user/deganovav2.JPG"},
    {name:"Марущак Виталий Витальевич",desc:"Врач ревматолог, кардиолог, терапевт. кандидат медицинский наук, врач высшей категории.  Ведет консультативный прием и лечение больных с различными ревматоидными, терапевтическими и кардиологическими заболеваниями.  Стаж работы 40 лет.",img:"http://www.immun.ru/files/photo/user/MaruschakVV3.jpg"},
    {name:"Черныш Алексей Васильевич",desc:"Врач терапевт, гирудотерапевт, врач спортивной медицины, лфк. Проводит диагностику и лечение внутренних заболеваний проводит озонотерапию, магнито-лазерную терапию, ЭКГ, широко применяет гирудотерапию. Стаж работы более 20 лет.",img:"http://www.immun.ru/files/photo/user/chernish1.jpg"},
    {name:"Крыжановская Валентина Николаевна",desc:"Врач консультант-психоневролог.  Владеет методиками озонотерапии и гемопунктуры, психотерапевтической коррекции, позитивной гештальттерапии и мануальной терапии (мягкие методики) рефлексотерапии, гирудотерапии. Врач высшей категории. Стаж работы более 40 лет.",img:"http://www.immun.ru/files/photo/user/Kryzhanovskya.jpg"},
]
const DoctorList = () => {
    const listOfData = doctors.map((doctor)=>{
        return(
            <Col md={10}  className="mt-3 mb-3 d-flex justify-content-around text-center ">
                <Image fluid="true" src={doctor.img} style={{maxHeight:"300px"}}/>
                <div className="align-self-center">
                    <h2>
                        {doctor.name}
                    </h2>
                    <p>
                        {doctor.desc}
                    </p>
                </div>
                
            </Col>
            
        )
    })
    return(
        <Row className='justify-content-around'>
            {listOfData}
        </Row>
    )
}


const Vrachi = () =>{
    return(
        <Container fluid="true" className="w-75">
            
            <DoctorList/>

        </Container>
    )
}
export default Vrachi
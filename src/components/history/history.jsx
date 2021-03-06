import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function History(props){
    return(
        <Container fluid="true" className="text-center mt-3 w-75">
            <Row>
                <Col sm={12} className="mb-5 ">
                    <p>Развитие ядерной энергетики сразу после войны привело к строительству предприятий атомной промышленности и энергетики, связанных с переработкой радиоактивных материалов. В связи с этим возникла потребность лечения и контроля за здоровьем людей работающих на этих предприятиях, что привело в свою очередь к созданию системы учреждений, известной под названием 3-его Главного управления, при Минздраве СССР. В Москве ведущей клиникой стала, организованная в 1948 году, клиническая больница №6 ФУ МБ и ЭП.</p>
                    <p>В то время талантливый врач Ходанова Р. Н. возглавила ЛОР - отделение клиники и впоследствии и всю ЛОР - службу в системе 3-го Главного Управления при Минздраве. Все это время Раиса Никитична занималась не только клинической практикой, но и вела научные исследования по проблемам воздействия ионизирующего излучения, а также шума, вибрации и других вредных факторов на организм человека. Свою докторскую диссертацию она посвятила лечению патологий верхних дыхательных путей при лучевой болезни.</p>
                    <p>При облучении в первую очередь страдает иммунная система, и Ходанова стала искать новые средства повышения защитных сил организма. Ее интересовали исследования природных защитных функций крови. Если у пациента взять кровь и произвести с ней некоторые манипуляции, в том числе добавить небольшое количество нейтральной жидкости, кровь приобретет свойства лечебного препарата. Иммунологи называют его ПАК (препарат аутологичной крови).</p>
                </Col>
                <Col sm={12}>
                    <h3>Хронология</h3>
                    <p>В 1982 году директор центра иммунокоррекции Лапа Л. Г. познакомилась с автором метода Ходановой Р. Н.</p>
                    <p>В 1983 году при поддержке академика РАН Петрова Р. В. Была создана при институте Иммунологии МЗ РФ, лаборатория профзаболеваний и имуннокоррекции под руководством Ходановой Р. Н., а потом его возглавила Лия Сергеевна Сеславина доктор медицинских наук.</p>
                    <p>В 1986 году произошла авария на Чернобыльской АЭС и лаборатория приступила к лечению пострадавших на базе МСЧ-10.</p>
                    <p>В 1991 году началась "приватизация" медицины и МСЧ-10 выведена из состояния подчинения 3-го Главного управлении, а лаборатория потеряла базу.</p>
                    <p>В 1993 году лаборатория реорганизована в лабораторию иммунокоррекции при ООО "НИРЭЛ - Иммунокоррекция" (лицензия серия МДКЗ №14860/06319).</p>
                    <p>В 2003 году создан центр иммунокоррекции.</p>
                    <p>В 2007 году в награждении международной премии "Профессия-жизнь", "Медицинский Центр иммунокоррекции им. Р.Н. Ходановой" был награжден в номинации "За достижения в области клинической медицины"!</p>
                    <p>Лабораторию иммунокоррекции всегда поддерживали и в ней проходили лечение многие выдающиеся люди нашего времени.</p>
                </Col>
            </Row>
        </Container>
            
    )
}
export default History
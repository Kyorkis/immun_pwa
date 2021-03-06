import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'

function Method(){
    return(
        <Container fluid='true'className="w-75">
            <Row className="text-center">
                <Col sm={12}>
                    <h1 class>Метод гемопунктуры</h1>     
                </Col>
                <Col lg={12} xl={6} className="m-auto mb-2">
                    <Image fluid='true' src='http://kyorkis.pythonanywhere.com/static/img/blood.jpg'/>
                </Col>
                <Col lg={12}xl={6} className="align-self-center">

                    <p>Примерно у 90% людей с аллергическим ринитом или поллинозом, кто прошел полный курс гемопунктуры, отмечается ОТЛИЧНЫЙ или ХОРОШИЙ эффект.</p>
                    <p>Метод гемопунктуры один из самых эффективных методов лечения бронхиальной астмы, который воздействует на иммунологическую причину аллергического воспаления в бронхах, и является, пожалуй, единственным методом терапии, обеспечивающим длительную ремиссию бронхиальной астмы без лекарственных препаратов.</p>
                    <p>Термин "гемопунктура" был впервые применен и опубликован на нашем сайте в декабре 2003 года в нашем центре, как наименование метода лечения препаратом аутологичной крови доктора Ходановой Р.Н.</p>
                    <p>"Поломка" в иммунном ответе и сложное устройство иммунной системы объясняют, почему на данный момент не существует ни одного стопроцентного медикаментозного способа лечения аллергии. Как же устранить имеющийся дефект? На этот вопрос ученые и врачи ищут ответ с того момента, как была установлена роль измененного иммунного ответа организма в развитии аллергии.</p>
                    
                </Col>
                <Col sm={12} className="mt-3 mb-5">
                    <p>Иммунотерапия методом гемопунктуры разработана при исследовании причин возникновения измененного иммунного ответа при аллергических реакциях и бронхиальной астме . Выяснилось , что на иммунный ответ влияет не только количество лимфоцитов Т-хелперов , но и лимфоциты Т -супрессоры ,отвечающие за подавлением иммунной реакции . При их недостатке иммунный ответ прогрессирует и вызывает иммунное воспаление.</p>
                    <p>Для снятия иммунного воспаления использовали защитные ресурсы собственных иммунных клеток лимфоцитов. Препарат готовят из венозной крови путем активации клеток лимфоцитов гипотоническим раствором.</p>
                    <p>На сегодняшний день иммунотерапия (метод гемопунктуры) единственный метод лечения аллергии и бронхиальной астмы, который влияет на иммунологическую природу аллергического воспаления. То есть устраняет, а не подавляет основную причину симптомов аллергии и астмы.</p>
                </Col>
            </Row>
            <Row>
                <Col lg={12} xl={6} className="d-flex flex-column align-self-center" >
                    
                    <ListGroup variant="flush"className="text-center">
                        <ListGroup.Item variant="success">Симптомы</ListGroup.Item>
                        <ListGroup.Item >Поллиноз</ListGroup.Item>
                        <ListGroup.Item >Сезонный аллергический ринит</ListGroup.Item>
                        <ListGroup.Item >Конъюнктвит</ListGroup.Item>
                        <ListGroup.Item >Круглогодичный аллергический ринит</ListGroup.Item>
                        <ListGroup.Item >Атопическая бронхиальная астма</ListGroup.Item>
                        <ListGroup.Item >Аллергия на шерсть животных.</ListGroup.Item>
                    </ListGroup>
                    <p>
                        Гемопунктура проводится пациентам от 5 до 90 лет, при любой форме аллергии ,если доказана роль IgE-опосредованной аллергии в течении заболевания и аллергии неясной этиологии. Это прежде всего респираторная аллергия - например, аллергия на пыльцу, на домашних животных, аллергия к плесневым грибам, клещам домашней пыли и другим бытовым аллергенам, которая имеет следующие нозологические проявления:
                    </p>
                </Col>
                <Col lg={12} xl={6} className="align-self-center">
                    <Image fluid='true' src="http://kyorkis.pythonanywhere.com/static/img/pokazaniya_gp.jpg"/>
                </Col>
                <Col sm={12}>
                    <ListGroup horizontal={"xl"} className="mt-3 mb-5">
                        <ListGroup.Item>
                            Гемопунктура очень эффективна в качестве профилактики серьезных аллергических реакций на жала ос и пчел (при инсектной аллергии). Гемопунктура эффективна при гормонозависимой бронхиальной астме. Доказана возможность снижения доз применяемых кортикостероидных гормонов и даже полная их отмена после проведения этого метода лечения.
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Гемопунктура оказывается эффективной и значительно облегчает течение как основного, так и сопутствующих заболеваний у больных при сочетании астмы с заболеваниями ЛОР-органов, эндокринными, сердечно-сосудистыми, гастроэнтерологическими заболеваниями и неврозами.
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Если Вы чувствуете, что симптомы аллергии или бронхиальной астмы недостаточно хорошо подавляются различными препаратами и ваша потребность в противоаллергических или противоастматических лекарствах значительна, - Вам следует проконсультироваться со специалистом - врачом-аллергологом о возможности проведения гемопунктуры или аллерген-специфической иммунотерапии (аллерговакцинации). 
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>

            <Row>
                <Col xl={6}lg={12} className="align-self-center ">
                    <Image fluid="true" src='http://kyorkis.pythonanywhere.com/static/img/mechkanizmi_terapii.jpg'/>
                </Col>
                <Col xl={6}lg={12} className="align-self-center ">
                    <h2>МЕХАНИЗМЫ ИММУНОТЕРАПИИ ПО ХОДАНОВОЙ Р.Н.</h2>
                    <p>Так как аллергия - иммунологическая болезнь, то, изменив реактивность иммунной системы, можно ликвидировать и болезнь. Этот метод уменьшает или полностью устраняет симптомы аллергии через "исправление" нарушений в иммунной системе.</p>
                    <p>Гипосенсибилизация - это снижение чувствительности организма к аллергену-является одной из целей гемопунктуры. Снижается чувствительность к аллергенам - уменьшаются или устраняются симптомы аллергии.</p>
                    <p>Механизмы гемопунктуры многообразны - это перестройка характера иммунного и цитокинового ответа, выработка "блокирующих" антител, снижение выработки IgE, тормозящее влияние на медиаторный компонент аллергического воспаления. Гемопунктура по Ходановой тормозит как раннюю, так и позднюю фазы немедленной аллергической реакции, угнетает клеточную картину аллергического воспаления, неспецифическую и специфическую гиперреактивность бронхов при бронхиальной астме.</p>
                    <p>Метод иммунотерапии (гемопунктура) достаточно давно применяется во всем мире, но остается на сегодняшний день наиболее современным и эффективным наравне с АСИТ!</p>
                </Col>
                <Col sm={12} className="text-center mb-5 mt-5">
                    <ListGroup className="text-center w-75  m-auto ">
                        <h2>Без проведения гемопунктуры, с течением времени высока вероятность:</h2>
                        <ListGroup.Item variant="danger"className="text-white">
                        Усугубления симптомов
                        </ListGroup.Item>
                        <ListGroup.Item variant="danger"className="text-white">
                        Перехода аллергического ринита в астму
                        </ListGroup.Item>
                        <ListGroup.Item variant="danger"className="text-white">
                        Присоединения чувствительности к новым (неродственным) аллергенам
                        </ListGroup.Item>
                        <ListGroup.Item variant="danger"className="text-white">
                        Снижения эффективности симптоматической лекарственной терапии
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
                
                
            <Row>
                <Col xl={6}lg={12} className="align-self-center text-center">
                        <Image fluid="true" src='http://kyorkis.pythonanywhere.com/static/img/gemopunctura.jpg'/>
                    </Col>
                    <Col xl={6}lg={12} className="align-self-center d-flex flex-column text-center">
                        <h2>ГЕМОПУНКТУРА</h2>
                        <ListGroup>
                            <ListGroup.Item variant="primary">
                            <h3>4 основных преимущества, которые вернут вас к жизни:</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                            Снимает симптомы аллергии на долгое время
                            </ListGroup.Item>
                            <ListGroup.Item>
                            Снижает необходимость приема симптоматических лекарств, связанных с аллергией
                            </ListGroup.Item>
                            <ListGroup.Item>
                            Предупреждает присоединение чувствительности к другим аллергенам  
                            </ListGroup.Item>
                            <ListGroup.Item>
                            Предупреждает прогрессирование аллергии от ринита до астмы
                            </ListGroup.Item>
                        </ListGroup>
                        <p>Иммунотерапия методом гемопунктуры вызывает улучшение состояния и снятие симптомов аллергии быстро в течении 1 часа после проведения лечения</p>
                        <p>Пока ваша иммунная система не отреагирует на введение препарата аутологичной крови, Вы можете все еще нуждаться в лекарственных препаратах, которые Вы уже используете. После двух - трех процедур лечения ваша потребность в лекарствах уменьшится, а ваши симптомы станут менее выраженными.</p>
                </Col>
            </Row>
            <Row className="mt-5 mb-5">
                <Col >
                    <ListGroup className="text-center">
                        <ListGroup.Item variant="success">
                            <h3>
                            ЭФФЕКТЫ ИММУНОТЕРАПИИ МЕТОДОМ ГЕМОПУНКТУРЫ
                            </h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                        Гемопунктура предупреждает расширение спектра аллергенов, к которым формируется повышенная чувствительность. Это имеет ОГРОМНОЕ ПРОГНОСТИЧЕСКОЕ и ПРОФИЛАКТИЧЕСКОЕ ЗНАЧЕНИЕ. Приостанавливается естественное развитие атопической болезни, которая без курсов гемопунктуры заканчивается полисенсибилизацией (множественная чувствительность к аллергенам).
                        </ListGroup.Item>
                        <ListGroup.Item>
                        Гемопунктура предупреждает утяжеление течения аллергического заболевания и переход более легких клинических проявлений (аллергический ринит) в более тяжелые (бронхиальная астма).
                        </ListGroup.Item>
                        <ListGroup.Item>
                        После курса гемопунктуры уменьшается потребность в противоаллергических и противоастматических лекарственных препаратах. Сокращается частота использования симптоматических лекарств и препаратов неотложной помощи - антигистаминные препараты, бронхолитики и т.п. Снижается необходимая потребность в препаратах базисной противовоспалительной терапии, в том числе гормональных средств.
                        </ListGroup.Item>
                        <ListGroup.Item>
                        После проведения полноценного курса гемопунктуры отмечается длительная ремиссия аллергического заболевания.
                        </ListGroup.Item>
                        <ListGroup.Item>
                        При проведении предсезонной аллерговакцинации методом гемопунктуры при поллинозе (перед сезоном аллергии на пыльцу) высока вероятность, что Вы не будете испытывать никаких проблем в работе, отдыхе и спорте в период вашего обычного обострения поллиноза.
                        </ListGroup.Item>
                        
                    </ListGroup>
                </Col>
                
            </Row>

        </Container>
    )
}
export default Method
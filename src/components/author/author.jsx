import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
function Author(props){
    return(
        <Container fluid="true"className="w-75 text-center">
            <Row>
                <Col xl={6} lg={12}>
                    <Image fluid="true" src="./xodanova.jpg"/>
                </Col>
                <Col xl={6} lg={12} className="align-self-center">
                    <p>Врачебная практика Раисы Никитичны Ходановой была связана с лечением людей, работавших в особо сложных условиях - на предприятиях атомной промышленности и энергетики, имевших дело с добычей и переработкой урановых и ториевых руд, ядерного топлива.</p>
                    <p>После войны, когда эти отрасли у нас начали активно развиваться, для лечения занятых в них людей была создана система учреждений, известная под названием 3-го Главного Управления при Минздраве СССР. В Москве ведущим из таких учреждений стала организованная в 1948 году клиническая больница закрытого типа (ныне клиническая больница № 6 Федерального управления медико-биологических и экстремальных проблем).</p>
                    <p>Талантливый врач, Ходанова возглавила ЛОР-отделение больницы, а впоследствии и всю ЛОР-службу в системе 3-го Главного Управления при Минздраве. Все это время Раиса Никитична занималась не только клинической практикой, но и вела научные исследования по проблемам воздействия ионизирующего излучения, а также шума, вибрации и других вредных факторов на организм человека. Свою докторскую диссертацию она посвятила лечению патологий верхних дыхательных путей при лучевой болезни.</p>
                </Col>
                <Col sm={12} className="text-center ">
                    <p>При облучении в первую очередь страдает иммунная система, и Ходанова стала искать новые средства повышения защитных сил организма. Ее интересовали исследования природных защитных функций крови. Если у пациента взять кровь и произвести с ней некоторые манипуляции, в том числе добавить небольшое количество нейтральной жидкости, кровь приобретет свойства лечебного препарата. Иммунологи называют его ПАК (препарат аутологичной крови).</p>
                    <p>Применение ПАКа при аллергических заболеваниях и предопухолевых состояниях хорошо показало себя уже в первых опытах Раисы Никитичны. При поддержке директора Института иммунологии академика Рэма Викторовича Петрова специально для исследований Ходановой при этом институте была организована лаборатория. Исследования проводились в течение десяти лет и были весьма успешны, о чем свидетельствовала практика работавшего при лаборатории стационара. Пациентам, прошедшим иммунокоррекцию по методу Ходановой, удавалось преодолеть тяжелые заболевания, с которыми не могли справиться врачи, опиравшиеся на традиционные методики.</p>
                    <p>Ходанова, между тем, продолжала совершенствовать свой метод: экспериментировала с соотношением крови и сочетаемой с нею нейтральной жидкости, меняла количество вводимого ПАКа, тщательно подбирала участки тела для инъекций. Результаты фиксировались по данным иммунных и биохимических исследований крови. Группе Ходановой были предоставлены хорошие возможности для научных наблюдений: кровь на анализ по 20 параметрам брали у каждого, кто поступал в стационар и выписывался из него, контроль за показателями крови велся и во время курса лечения.</p>
                    <p>К сожалению, такая кропотливая работа прервалась после ликвидации союзного министерства в 1993 году. Институт иммунологии переживал финансовые трудности и не мог принять на себя заботы о материально-техническом обеспечении лаборатории Ходановой. А сама Раиса Никитична была слишком далека от всей суеты, связанной с переделом собственности.</p>
                    <p>Но все-таки результаты многолетних исследований не пропали. Помогло содействие бывшей пациентки Ходановой - Людмилы Григорьевны Лапы. В свое время Раиса Никитична вылечила ее от тяжелого заболевания. Теперь Лапа взялась помочь Ходановой. Биофизик по специальности, Людмила Григорьевна занялась предпринимательской деятельностью и взяла лабораторию под свою опеку. Правда, недостаток средств не позволил ей обеспечить проведение фундаментальных исследований, а тем более содержание стационара, но практика иммунотерапии силами нескольких специалистов во главе с Ходановой была продолжена.</p>
                    <p>О существовании лаборатории иммунокоррекции узнавали без всякой рекламы. Люди, получившие здесь действенную помощь, рассказывали об этом другим. Так попала в эту лабораторию и наша читательница Т.В.Мортемьянова, которая первой сообщила нам о методе Ходановой. Она очень просила нас скорее познакомиться с деятельностью лаборатории и рассказать о ней в журнале. "Метод уникальный, - говорила она, - а владеют им всего несколько специалистов".</p>
                    <p>Прежде всего должна сообщить читателям печальную новость: Раиса Никитична Ходанова недавно ушла из жизни. Ей было 89 лет, и только за год до этого она оставила работу. Ее истинный возраст даже коллеги узнали только после ее смерти. Раиса Никитична до последних дней оставалась не только очень энергичной, но и моложавой, что весьма красноречиво подтверждает эффективность ее метода: именно с его помощью она многие годы поддерживала собственное здоровье.</p>
                    <p>Не успев, к своему огорчению, встретиться с Раисой Никитичной, я стала искать людей, которые еще в советское время помогали ей в разработке метода. Так я познакомилась с доктором медицинских наук сотрудницей Института иммунологии Лией Сергеевной Сеславиной.</p>
                    <p>- Этот метод заслуживает самой широкой пропаганды и поддержки, - считает Лия Сергеевна, - его надо развивать и активно внедрять в лечебную практику как серьезную научную разработку.</p>
                    <p>Она рассказала, как вела исследования их творческая группа. Сотрудники наблюдали, как в процессе введения ПАКа меняется ход биологических процессов, за счет чего и достигается иммуномодулирующий эффект.</p>
                    <p>В ходе исследований Ходанова и ее коллеги столкнулись с ранее не описанным явлением: при значительном улучшении состояния пациентов эритроциты в проводимых опытах сохраняли свою структуру, как бы ни менялись пропорции и соотношения объемов крови в ПАКе. Что же тогда оказывает решающее воздействие? Продолжив поиск, исследователи нашли ответ на этот вопрос: резкое оживление защитных сил организма происходит за счет того, что под воздействием ПАКа активизируются лимфоциты - главные клетки иммунной системы.</p>
                    <p>В современной медицине разработаны методы, с помощью которых удается извлекать из крови лимфоциты разных типов, лейкины, интерлейкины и другие клетки защитной системы организма для производства эффективных препаратов - самых современных иммуномодуляторов. Это очень сложные и дорогостоящие технологии. А методика Ходановой позволяет не менее результативно повысить иммунитет без привлечения сложных технологий и чужеродной для данного пациента крови.</p>
                    <p>- Но почему же этот метод, такой простой и эффективный, не получил широкого распространения? - спросила я Лию Сергеевну.</p>
                    <p>По мнению Сеславиной, тому были не только объективные, но и субъективные причины. Раиса Никитична, занятая научными исследованиями, не предпринимала никаких попыток для обнародования и продвижения своего открытия. Более того, она не всякого врача соглашалась обучать своей технологии, опасаясь, что ее метод попадет в руки человека равнодушного, невнимательного или корыстного. В Евангелии кровь называется "душою" человека. Хотя Раиса Никитична опиралась только на научные данные, она чувствовала, что кровь - это особая субстанция, свойства которой еще не познаны. С этим согласна и Лия Сергеевна.</p>
                    <p>Она объяснила мне, что технологию метода Ходановой нельзя изложить в журнале, так как типовой схемы его применения быть не может. От мысли использовать этот метод по описанию надо решительно отказаться. Только владея всеми его тонкостями, можно проанализировать и учесть индивидуальные особенности пациента и решить, сколько крови требуется забрать для лечения и какие манипуляции проводить перед тем, как снова ввести ее пациенту.</p>
                    <p>В нашей беседе приняла участие еще одна ученица Ходановой -врач лаборатории "Нирэл-иммунокоррекция" Татьяна Ивановна Никитина, о которой рассказывалось в предыдущей статье.</p>
                    <p>Я передала Татьяне Ивановне письмо врача Нины Степановны Малкиной из глухой деревни Кемеровской области. Не дождавшись подробного описания методики Ходановой, она на свой страх и риск, изучив по книгам акупунктурные точки, стала делать инъекции парализованному мужу. Как пишет Нина Степановна, у нее не было иного способа спасти близкого человека, ведь в их глуши нет ни телефона, ни аптеки. По ее словам, "чудо свершилось - на пятый день лечения муж почувствовал силу в ногах и встал".</p>
                    <p>Может быть, спросила я, для медиков, живущих в глубинке или находящихся в экстремальных условиях, все-таки стоит организовать заочное обучение методу? Татьяна Ивановна относится к этому отрицательно, опасаясь, что даже врачи могут допустить ошибки. Ей известно несколько случаев самостоятельного применения этого метода, в результате чего после быстрого положительного эффекта у пациентов возникали осложнения. Будем надеяться, что это не грозит мужу Нины Степановны.</p>
                    <p>Но как же распространять такой нужный людям метод, как сделать его достоянием многих?</p>
                    <p>В лаборатории "Нирэл-иммунокоррекция" планируют организовать обучение врачей-практиков, обладающих клиническим опытом и владеющих навыками иглорефлексотерапии. Правда, быстро наладить такое обучение не удастся: коллектив лаборатории слишком мал, лечение ведут только два врача, и у них нет ни средств, ни организационной поддержки для расширения своей деятельности.</p>
                </Col>
            </Row>
        </Container>
    )
}
export default Author
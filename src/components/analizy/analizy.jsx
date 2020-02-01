import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'


export default class Analizy extends React.Component{
    
    

    SpisokAnalizov2 = ()=>{
        let filtered = null
        this.props.state.analizFilter ==="ALL" ? filtered=this.props.state.lstOfProducts2 :(filtered = this.props.state.lstOfProducts2.filter((i)=>{
            return(i.category===this.props.state.analizFilter)
        }))
      
        
        const listOFAll = filtered.map((item)=>{
            return(
                <tr>
                    <td>{item.name}</td>
                    <td>{item.days}</td>
                    <td>{item.price}</td>
                    <td><Button variant="primary" onClick={()=>{this.props.orderAnaliz({name:item.name,price:item.price})}}>Заказать</Button></td>
                </tr>
            )
            
        })
        return(
            <tbody>
               {listOFAll}
            </tbody>
        )
    }





    


    render(){ 
        
        console.log("this.props.state.orderedAnalizList--->",this.props.state.orderedAnalizList)
        console.log("this.props",this.props)
        console.log("listofProducts",this.props.state.lstOfProducts2)
        return(
            <Container fluid ="true">       
                <Row className="justify-content-around w-50 m-auto pt-5 pb-5">
                    <Button variant="success" onClick={()=>{this.props.filterAnaliz({value:"obshKrov"})}}>Анализы крови</Button>
                    <Button variant="info" onClick={()=>{this.props.filterAnaliz({value:"obshMocha"})}}>Анализы мочи</Button>
                    <Button variant="warning" onClick={()=>{this.props.filterAnaliz({value:"obshKal"})}}>Анализы кала</Button>
                </Row>
                
                <Table>
                    <thead>
                        <tr>
                            <th>Название</th>
                            <th>Срок проведения анализа</th>
                            <th>Цена</th>
                        </tr>
                    </thead>
                    
                    <this.SpisokAnalizov2/>
                </Table>

            </Container>

        )
    }
}


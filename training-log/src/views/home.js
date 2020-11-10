import React from 'react'
import { Tab, Row, Col, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Tab1 from '../components/tab1'
import Tab2 from '../components/tab2'
import Tab3 from '../components/tab3'
import Tab4 from '../components/tab4'
import Tab5 from '../components/tab5'
class Home extends React.Component{
    render(){
        return(
<div>
<div align="center">
<h1 className="mt-5 mb-5">Diário De Treinamento</h1>
			</div>

<div className="container">
	<div className="row">
		<div className="col-md-12">
<Tab.Container id="left-tabs-example" defaultActiveKey="tab1">
  <Row>
    <Col sm={4}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item >
          <Nav.Link eventKey="tab1" className="navtab">O que é</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab2" className="navtab">Como funciona</Nav.Link>
        </Nav.Item>
		<Nav.Item>
          <Nav.Link eventKey="tab3" className="navtab">O que são séries?</Nav.Link>
        </Nav.Item>  <Nav.Item>
          <Nav.Link eventKey="tab4" className="navtab">O que é volume total?</Nav.Link>
        </Nav.Item>  <Nav.Item>
          <Nav.Link eventKey="tab5" className="navtab">Interval training</Nav.Link>
        </Nav.Item>


      </Nav>
    </Col>
    <Col sm={8}>
      <Tab.Content>
        <Tab.Pane eventKey="tab1">
		<Tab1/>
        </Tab.Pane>
        <Tab.Pane eventKey="tab2">
		<Tab2/>
        </Tab.Pane>
		<Tab.Pane eventKey="tab3">
		<Tab3/>
        </Tab.Pane>
        <Tab.Pane eventKey="tab4">
		<Tab4/>
        </Tab.Pane>
		<Tab.Pane eventKey="tab5">
		<Tab5/>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>

</div>
	</div>
</div>





</div>



		)
	
    
}
}
export default Home
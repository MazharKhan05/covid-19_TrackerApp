import React from 'react';
import {Card,CardBody,CardTitle,CardHeader,CardText,Col,Row,Container} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import CountUp from 'react-countup'
import '../Card.css'


function Newcard({newdata}) {
const date=new Date(newdata.LastUpdate).toDateString();

  return (
    <Container className="justify-content-center container" >
   
        <Row className="mt-1 ml-5" >
            <Col md={4} >
               <Card className="custom-border1">
                   <CardBody className="text-center">
                        <CardTitle ><h5>Infected</h5></CardTitle>
                       <CardTitle className="text-primary">
                       <h3>
                       {newdata.Confirmed?.value}
                       </h3>
                       </CardTitle>
                       <CardText className="mb-1">{date}</CardText>
                       <CardText className="mb-3">
                       <span >Number of active cases of Covid-19.</span>
                       </CardText>
                   </CardBody>
               </Card>
            </Col>
            <Col md={4} >
               <Card className="custom-border2 ">
                   <CardBody className="text-center">
                        <CardTitle><h5>Recovered</h5></CardTitle>
                       <CardTitle className="text-success">
                       <h3>
                       {newdata.Recovered?.value}
                       </h3>
                       </CardTitle>
                       <CardText className="mb-1">{date}</CardText>
                       <CardText className="mb-3"><span >Number of recovered cases of Covid-19.</span></CardText>
                   </CardBody>
               </Card>
            </Col>
            <Col md={4} >
               <Card className="custom-border3 ">
                   <CardBody className="text-center">
                        <CardTitle><h5>Deaths</h5></CardTitle>
                       <CardTitle className="text-danger">
                       <h3>
                       {newdata.Deaths?.value}
                       </h3>
                       </CardTitle>
                       <CardText className="mb-1">{date}</CardText>
                       <CardText className="mb-3"><span >Number of death cases of Covid-19.</span></CardText>
                   </CardBody>
               </Card>
            </Col>
        </Row>
    </Container>
  );
}

export default Newcard;
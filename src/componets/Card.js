import React from 'react';
import './style.css'
import {CardGroup, Card, Badge, Image, InputGroup, FormControl, Button, Container} from 'react-bootstrap';




function card() {
    return (
        <div>
            
             <Container>
             <div className="kartu"> 
            <CardGroup>
                {/* Card-1 */}
                    <Card className="me-3 p-2" style={{ width: "20rem" }}>
                    <Card.Body>
                        <div className="d-flex justify-content-between">
                        <h6>
                            <Badge bg="secondary">NEW</Badge>
                        </h6>
                        <h6>
                            <Image className="me-4" width="25" src="info.jpeg"></Image>
                            <Image className="" width="30" src="love.png"></Image>
                        </h6>
                        </div>
                        <Image className="" width="350" src="sofa-1.png"></Image>
                        <Card.Title className="text-center">Wooden Chair</Card.Title>
                        <div className="d-flex justify-content-between">
                        <Image className="mt-4 me-5" style={{ width: "30%", height: "30%" }} src="star.jpeg"></Image>
                        <InputGroup className="mt-4">
                            <FormControl value="Rp 12.000" style={{ backgroundColor: "white" }} disabled />
                            <Button variant="outline-secondary">
                            <Image width="30" src="cart.jpeg"></Image>
                            </Button>
                        </InputGroup>
                        </div>
                    </Card.Body>
                    </Card>
                {/* Card-2 */}
                    <Card className="me-3 p-2" style={{ width: "20rem" }}>
                    <Card.Body>
                        <div className="d-flex justify-content-between">
                        <h6>
                            <Badge bg="secondary">NEW</Badge>
                        </h6>
                        <h6>
                            <Image className="me-4" width="25" src="info.jpeg"></Image>
                            <Image className="" width="30" src="love.png"></Image>
                        </h6>
                        </div>
                        <Image className="" width="350" src="sofa-2.png"></Image>
                        <Card.Title className="text-center">Wooden Chair</Card.Title>
                        <div className="d-flex justify-content-between">
                        <Image className="mt-4 me-5" style={{ width: "30%", height: "30%" }} src="star.jpeg"></Image>
                        <InputGroup className="mt-4">
                            <FormControl value="Rp 12.000" style={{ backgroundColor: "white" }} disabled />
                            <Button variant="outline-secondary">
                            <Image width="30" src="cart.jpeg"></Image>
                            </Button>
                        </InputGroup>
                        </div>
                    </Card.Body>
                    </Card>
                {/* Card-3 */}
                    <Card className="me-3 p-2" style={{ width: "20rem" }}>
                    <Card.Body>
                        <div className="d-flex justify-content-between">
                        <h6>
                            <Badge bg="secondary">NEW</Badge>
                        </h6>
                        <h6>
                            <Image className="me-4" width="25" src="info.jpeg"></Image>
                            <Image className="" width="30" src="love.png"></Image>
                        </h6>
                        </div>
                        <Image className="" width="350" src="sofa-3.png"></Image>
                        <Card.Title className="text-center">Wooden Chair</Card.Title>
                        <div className="d-flex justify-content-between">
                        <Image className="mt-4 me-5" style={{ width: "30%", height: "30%" }} src="star.jpeg">
                        </Image>
                        <InputGroup className="mt-4">
                            <FormControl value="Rp 12.000" style={{ backgroundColor: "white" }} disabled />
                            <Button variant="outline-secondary">
                            <Image width="30" src="cart.jpeg"></Image>
                            </Button>
                        </InputGroup>
                        </div>
                    </Card.Body>
                    </Card>
                </CardGroup>
                </div>
                </Container>
               
            
        </div>
    )
}

export default card

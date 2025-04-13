import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./App.css";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to My App</h1>
                <img
                    src="https://placehold.co/200x200"
                    alt="A placeholder image"
                />
                <ul>
                    <li>First item</li>
                    <li>Second item</li>
                    <li>Third item</li>
                </ul>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    backgroundColor: "red",
                                }}
                            ></div>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    backgroundColor: "red",
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    );
}

export default App;

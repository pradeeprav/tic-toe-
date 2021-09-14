import React, { useState } from "react";
import Icon from "./Components/Icon";

// import react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import reactstrap 
import { Button, Container, Card, CardBody, Row, col, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"


const tictakArray = new Array(9).fill("")
const App = () => {
    let [isCross, setIsCross] = useState(true)
    let [winMassage, setWinMassage] = useState("")

    const playAgain = () => {
        setIsCross(true)
        setWinMassage("")
        tictakArray.fill("")
        console.log("Hello")
    }

    const findWinner = () => {
        if (tictakArray[0] == tictakArray[1] && tictakArray[0] == tictakArray[2] && tictakArray[0] != "") {
            setWinMassage(tictakArray[0] + " has won")
        }

        else if (tictakArray[3] == tictakArray[4] && tictakArray[3] == tictakArray[5] && tictakArray[3]) {
            setWinMassage(tictakArray[3] + " has won")
        }

        else if (tictakArray[6] == tictakArray[7] && tictakArray[6] == tictakArray[8] && tictakArray[6]) {
            setWinMassage(tictakArray[6] + " has won")
        }

        else if (tictakArray[0] == tictakArray[3] && tictakArray[0] == tictakArray[6] && tictakArray[0]) {
            setWinMassage(tictakArray[0] + " has won")
        }

        else if (tictakArray[1] == tictakArray[4] && tictakArray[1] == tictakArray[7] && tictakArray[1]) {
            setWinMassage(tictakArray[1] + " has won")
        }

        else if (tictakArray[2] == tictakArray[5] && tictakArray[2] == tictakArray[8] && tictakArray[2]) {
            setWinMassage(tictakArray[2] + " has won")
        }

        else if (tictakArray[2] == tictakArray[4] && tictakArray[2] == tictakArray[6] && tictakArray[2]) {
            setWinMassage(tictakArray[2] + " has won")
        }

        else if (tictakArray[0] == tictakArray[4] && tictakArray[0] == tictakArray[8] && tictakArray[0]) {
            setWinMassage(tictakArray[0] + " has won")
        }

    }

    const changeItem = (index) => {
        if (winMassage) {
            return toast("The game has already  over", { type: "success" })
        }
        if (tictakArray[index] == "") {
            tictakArray[index] = isCross ? "cross" : "circle"
            setIsCross(!isCross)
        }
        else {
            return toast("This is a occupied", { type: "error" })
        }
        findWinner()

    }


    return (
        <Container className="p-5">
        <ToastContainer position = "bottom-center"> </ToastContainer>
            <Row>
                <Col md={6} className="offset-md-3">
                    {
                        winMassage ? (
                            <>
                                <h1 className="text-center">
                                    {winMassage}
                                </h1>
                                <Button onClick={playAgain}> Play Again</Button>
                            <Button></Button>
                            <Button></Button>
                            
                            </>
                        ) : (
                            <h1>
                                {isCross ? "cross's Turn" : "circle's Turn"}
                            </h1>
                        )
                    }

                    <div className="grid">
                        {tictakArray.map((value, index) => (

                            <Card onClick={() => changeItem(index)}>
                                <CardBody className="box">
                                    <Icon choice={tictakArray[index]} />

                                </CardBody>
                            </Card>
                        ))}

                    </div>

                </Col>
            </Row>
        </Container>
    )
}

export default App;
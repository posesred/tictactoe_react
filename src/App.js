/*
* Tic tac toe single web no websockets or anything just static
* Next is to work on the backend to get two players this was just for fun
*
*
* */
import './App.css';
import {useState} from "react";

function Square({value, onClick}) {
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    )
}

function App() {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const handleClick = (i) => {
        if (calculateWinner(squares) || squares[i]) {
            return
        }
        squares[i] = xIsNext ? 'X' : 'O'
        setSquares(squares)
        setXIsNext(!xIsNext)
    }
    const winner = calculateWinner(squares)
    let status

    if (winner) {
        status = `Winner: ${winner}`
    } else if (squares.every((square) => square !== null)) {
        status = "It's a draw!";
    } else {
        status = `Next player: ${xIsNext ? 'X' : 'O'}`
    }
    const handleReset = () => {
        setXIsNext(true)
        setSquares(Array(9).fill(null))
    }

    const squareBox = (i) => {
        return <Square value={squares[i]} onClick={() => handleClick(i)}/>
    }

    return (
        <div className="App">
            <header className="App-header">
                <div id="row1">
                    {squareBox(0)}
                    {squareBox(1)}
                    {squareBox(2)}
                </div>
                <div id="row2">
                    {squareBox(3)}
                    {squareBox(4)}
                    {squareBox(5)}
                </div>
                <div id="row3">
                    {squareBox(6)}
                    {squareBox(7)}
                    {squareBox(8)}
                </div>

                <div className={"status"}>{status}</div>
                <button className={"reset"} onClick={handleReset}>Reset Game</button>

            </header>
        </div>
    );
}

function calculateWinner(squares) {
    const winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (let i = 0; i < winningPatterns.length; i++) {
        const [a, b, c] = winningPatterns[i]
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }
    return null
}

export default App;

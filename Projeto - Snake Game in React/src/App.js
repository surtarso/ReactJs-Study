import React, { Component } from "react";
import Snake from "./Snake";
import Food from "./Food";

//gera coordenadas randomicas para posicionar a comida
const getRandomCoordinates = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random()*(max-min + 1)+min)/2)*2;
  let y = Math.floor((Math.random()*(max-min + 1)+min)/2)*2;
  //TODO: nao deixar a comida nascer em cima do corpo da cobra!
  return [x,y]
}

//estados iniciais: da comida, cobra, direcao e velocidade
const initialState = {
  food: getRandomCoordinates(),
  speed: 200,
  direction: 'RIGHT',
  // estes sao os 3 quadrados iniciais
  snakeDots: [
    [0,0],
    [2,0],
    [4,0]
  ]
}

class App extends Component {
  
  state = initialState
  
  //intial movement + keys
  componentDidMount() {
    setInterval(this.moveSnake, this.state.speed);
    document.onkeydown = this.onKeyDown;
  }

  //on update:
  componentDidUpdate() {
    this.checkIfOutOfBorders();
    this.checkIfCollapsed();
    this.checkIfEat();
  }

  //game keys
  //TODO: if press too fast it will still eat itself as a bug
  onKeyDown = (e) => {
    e = e || window.event;
    switch (e.keyCode) {
      case 37:
        if (!["LEFT", "RIGHT"].includes(this.state.direction)) {
          this.setState({direction: 'LEFT'});}
        break;
      case 38:
        if (!["UP", "DOWN"].includes(this.state.direction)) {
          this.setState({direction: 'UP'});}
        break;
      case 39:
        if (!["LEFT", "RIGHT"].includes(this.state.direction)) {
          this.setState({direction: 'RIGHT'});}
        break;
      case 40:
        if (!["UP", "DOWN"].includes(this.state.direction)) {
          this.setState({direction: 'DOWN'});}
        break;
    }
  }
  //moves the snake by adding a new block to 'direction'
  //and removing one from the tail
  moveSnake = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];

    switch (this.state.direction) {
      case 'LEFT':
        head = [head[0] - 2, head[1]];
        break;
      case 'UP':
        head = [head[0], head[1] - 2];
        break;
      case 'RIGHT':
        head = [head[0] + 2, head[1]];
        break;
      case 'DOWN':
        head = [head[0], head[1] + 2];
        break;
    }
    dots.push(head); //adiciona nova cabeça na direcao atual
    dots.shift(); //remove o rabo (ultima peça) da cobra
    this.setState({
      snakeDots: dots
    })
  }
  //checa se acertou as paredes
  checkIfOutOfBorders() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      //game over:
      this.onGameOver();
    }
  }
  //check if snake eats itself
  checkIfCollapsed() {
    let snake = [...this.state.snakeDots];
    let head = snake[snake.length - 1];
    snake.pop(); //removes head (head cant eat head)
    snake.forEach(dot => {
      if(head[0] === dot[0] && head[1] === dot[1]) {
        this.onGameOver();
      }
    })
  }
  //check if head hits food
  checkIfEat() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    let food = this.state.food;
    if (head[0] === food[0] && head[1] === food[1]) {
      //reposition new food
      this.setState({
        food: getRandomCoordinates()
      })
      //enlarges the snake and increases speed
      this.enlargeSnake();
      this.increaseSpeed();
    }
  }
  //enlarge snake if it eats food
  enlargeSnake() {
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([]) //increase number of snake blocks
    this.setState({
      snakeDots: newSnake
    })
  }
  //increase speed of snake after eating food
  increaseSpeed() {
    if (this.state.speed > 10) {
      this.setState({
        speed: this.state.speed - 10
      })
    }
  }
  //game over function
  onGameOver() {
    alert(`Game Over. Snake Length is ${this.state.snakeDots.length}`);
    this.setState(initialState)
  }

  //renders game window:
  render() {
    return (
      <div className="game-area">
        {/* coloca a cobra na tela na posicao do state */}
        <Snake snakeDots={this.state.snakeDots} />
        {/* coloca a comida na tela na posicao randomica */}
        <Food dot={this.state.food} />
      </div>
    )
  }
}

export default App;

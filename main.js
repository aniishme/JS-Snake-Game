const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext('2d');
const scoreUpdate = document.querySelector("#score")
const btn = document.querySelector("#start")

const scale = 10;

const rows = canvas.height / scale;
const columns = canvas.width / scale;

let snake;
let food;


function startGame(){
    snake = new Snake()
    food = new Food()
    food.pickLocation()

    window.setInterval(()=>{
        
        ctx.clearRect(0,0,canvas.width, canvas.height);
        const isEating = snake.eating(food)

        if(isEating === true){
            food.pickLocation()
        }
        food.draw()
        snake.update();
        snake.draw();
        
        scoreUpdate.innerText = `SCORE: ${snake.total}`
    }, 100)
    
}

startGame()

window.addEventListener('keydown',(event)=>{
    event.preventDefault()
    const direction = event.key.replace("Arrow", "")
    snake.changeDirection(direction)
})




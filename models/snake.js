class Snake{
    constructor(){
        this.x = 150;
        this.y = 150;
        this.collision = false;
        this.velocity = 10;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.total = 0;
        this.tails = []
        
    }

    draw(){
        
        
        this.tails.forEach(tail=>{
            ctx.fillStyle = "#9c88ff"
            ctx.fillRect(tail.x, tail.y, 10, 10)
            if (this.x === tail.x & this.y === tail.y){
                this.collision = true;
            }
        })
        ctx.fillStyle = "#f5f6fa"
        ctx.fillRect(this.x, this.y, 10, 10)
        
        
    }

    update(){
        for(let i= 0; i < this.tails.length - 1; i++){
            this.tails[i] = this.tails[i+1]
        }

        this.tails[this.total-1] = {x:this.x, y:this.y}

        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x > canvas.width - scale || this.x < 0 || this.y > canvas.height - scale || this.y  < 0 ){
            this.collision = true;
        }
        this.gameOver()
    }

    changeDirection(direction){

        switch(direction){
            case 'Up':
                if(this.ySpeed > 0 ){
                    break
                }
                this.xSpeed = 0;
                this.ySpeed = -this.velocity * 1;
                break
            case 'Down':
                if(this.ySpeed < 0 ){
                    break
                }
                this.xSpeed = 0;
                this.ySpeed = this.velocity * 1;
                break
            case 'Left':
                if(this.xSpeed > 0 ){
                    break
                }
                this.xSpeed = -this.velocity * 1;
                this.ySpeed = 0;   
                break 
            case 'Right':
                if(this.xSpeed < 0 ){
                    break
                }
                this.xSpeed = this.velocity * 1;
                this.ySpeed = 0;    
                break                         


        }
    }

    
    eating(food){
        if(this.x === food.x & this.y === food.y){
            this.total += 1
            return true
        }
        return false
    }

    gameOver(){

        if (this.collision){
            this.x = 150;
            this.y = 150;
            this.collision = false;
            this.xSpeed = 0;
            this.ySpeed = 0;
            this.total = 0;
            this.tails = []
            alert('Game Over')
        }
    }


    

}

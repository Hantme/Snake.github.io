//GameAuto
(function () {
    var that = null;

    function Game(map) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        that = this;
    }

    Game.prototype.init = function () {

        this.food.init(this.map);
        this.snake.init(this.map);
        // setInterval(function(){
        //     that.snake.move(that.food,that.map);
        //     that.snake.init(that.map);
        // },150)

        this.runSnake(this.food, this.map);
        this.bindKey();

    };

    Game.prototype.runSnake = function (food, map) {

        var timeId = setInterval(function () {
            this.snake.move(food, map);
            this.snake.init(map);

            var max_X = map.offsetWidth / this.snake.width;
            var max_Y = map.offsetHeight / this.snake.height;
            var head_X = this.snake.body[0].x;
            var head_Y = this.snake.body[0].y;
            if (head_X < 0 || head_X >= max_X) {
                //Hit the wall, end Interval
                clearInterval(timeId);
                alert("Game Over! Press F5 to restart.");
            }
            if (head_Y < 0 || head_Y >= max_Y) {
                //Hit the wall, end Interval
                clearInterval(timeId);
                alert("Game Over! Press F5 to restart.");
            }

        }.bind(that), 150)
    };

    Game.prototype.bindKey = function () {
        document.addEventListener("keydown", function (e) {
            switch (e.keyCode) {
                case 37:
                    that.snake.direction = "left";
                    break;
                case 38:
                    that.snake.direction = "top";
                    break;
                case 39:
                    that.snake.direction = "right";
                    break;
                case 40:
                    that.snake.direction = "bottom";
                    break;
            }
        }.bind(that), false);
    };
    window.Game = Game;
}());

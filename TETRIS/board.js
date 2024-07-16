class Board{
    constructor(ctx){
        this.ctx;
        this.grid = this.getEmptyBoard();
    }
    getEmptyBoard(){
        return Array.from(
            {length :ROWS},()=> Array(COLS).fill(0)
        );
    }
}
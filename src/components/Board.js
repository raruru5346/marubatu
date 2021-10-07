import Square from './Square';

const Board = ({ squares, onClick }) => {
    const renderSquare = i => {
      return (
        <Square
          value={squares[i]}
          onClick={() => {
            onClick(i);
          }}
        />
      );
    };
  
    // render() {
    return (
      <>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
		  {renderSquare(5)}
          {renderSquare(6)}
          {renderSquare(7)}
        </div>
        <div className="board-row">
          {renderSquare(10)}
          {renderSquare(11)}
          {renderSquare(12)}
        </div>

      </>
    );
    // }
  };
  
  export default Board;
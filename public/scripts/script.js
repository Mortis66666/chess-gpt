const game = new Chess();

// Initialize the chessboard
const config = {
    position: "start",
    draggable: true,
    showNotation: true,
    onDragStart: (source, piece, position, orientation) => {
        // do not pick up pieces if the game is over
        if (game.game_over()) return false;

        // only pick up pieces for the side to move
        if (
            (game.turn() === "w" && piece.search(/^b/) !== -1) ||
            (game.turn() === "b" && piece.search(/^w/) !== -1)
        ) {
            return false;
        }
    },
    onDrop: (source, target) => {
        // see if the move is legal
        let move = game.move({
            from: source,
            to: target,
            promotion: "q" // NOTE: always promote to a queen for example simplicity
        });

        // illegal move
        if (move === null) return "snapback";

        // updateStatus();
    }
};
let board = Chessboard("board", config);

// Resign button event handler
let resignButton = document.getElementById("resign-button");
resignButton.addEventListener("click", function () {
    // Add your resignation logic here
    alert("You resigned!");
});

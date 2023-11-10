// Задание 6.4
// С помощью цикла нарисуйте в консоли заполненное поле для игры «Крестики-нолики». Выведите результат в консоль.

const boardSize = 3;
const board = [];

for (let i = 0; i < boardSize; i++) {
    const row = [];
    for (let j = 0; j < boardSize; j++) {
        row.push(Math.random() < 0.5 ? 'X' : 'O');
    }
    board.push(row);
    console.log(board[i].join(' '))
}
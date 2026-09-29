const cube = {
    U: ['W','W','W',
        'W','W','W',
        'W','W','W'],

    D: ['Y','Y','Y',
        'Y','Y','Y',
        'Y','Y','Y'],

    F: ['G','G','G',
        'G','G','G',
        'G','G','G'],

    B: ['B','B','B',
        'B','B','B',
        'B','B','B'],

    L: ['O','O','O',
        'O','O','O',
        'O','O','O'],

    R: ['R','R','R',
        'R','R','R',
        'R','R','R']
};

const testCube = {
    U: ['U0','U1','U2',
        'U3','U4','U5',
        'U6','U7','U8'],

    D: ['D0','D1','D2',
        'D3','D4','D5',
        'D6','D7','D8'],

    F: ['F0','F1','F2',
        'F3','F4','F5',
        'F6','F7','F8'],

    B: ['B0','B1','B2',
        'B3','B4','B5',
        'B6','B7','B8'],

    L: ['L0','L1','L2',
        'L3','L4','L5',
        'L6','L7','L8'],

    R: ['R0','R1','R2',
        'R3','R4','R5',
        'R6','R7','R8']
};

function rotateFaceCW(face){
    return [
        face[6], face[3], face[0],
        face[7], face[4], face[1],
        face[8], face[5], face[2],
    ]
}

function moveF(cube){
    cube.F = rotateFaceCW(cube.F);
    const U = [...cube.U];
    const R = [...cube.R];
    const D = [...cube.D];
    const L = [...cube.L];

    cube.R[0] = U[6];
    cube.R[3] = U[7];
    cube.R[6] = U[8];

    cube.D[0] = R[0];
    cube.D[1] = R[3];
    cube.D[2] = R[6];

    cube.L[2] = D[0];
    cube.L[5] = D[1];
    cube.L[8] = D[2];

    cube.U[6] = L[2];
    cube.U[7] = L[5];
    cube.U[8] = L[8];

}

function moveFPrime(cube) {
    moveF(cube);
    moveF(cube);
    moveF(cube);
}

function moveF2(cube) {
    moveF(cube);
    moveF(cube);
}

function moveR(cube){
    cube.R = rotateFaceCW(cube.R);
    const F = [...cube.F];
    const U = [...cube.U];
    const B = [...cube.B];
    const D = [...cube.D];

    cube.U[2] = F[2];
    cube.U[5] = F[5];
    cube.U[8] = F[8];

    cube.B[0] = U[2];
    cube.B[3] = U[5];
    cube.B[6] = U[8];

    cube.D[2] = B[0];
    cube.D[5] = B[3];
    cube.D[8] = B[6];

    cube.F[2] = D[2];
    cube.F[5] = D[5];
    cube.F[8] = D[8];
}

function moveRPrime(cube){
    moveR(cube);
    moveR(cube);
    moveR(cube);
}

function moveR2(cube){
    moveR(cube);
    moveR(cube);
}

function moveU(cube){
    cube.U = rotateFaceCW(cube.U);
    const F = [...cube.F];
    const L = [...cube.L];
    const B = [...cube.B];
    const R = [...cube.R];

    cube.L[0] = F[0];
    cube.L[1] = F[1];
    cube.L[2] = F[2];

    cube.B[0] = L[0];
    cube.B[1] = L[1];
    cube.B[2] = L[2];

    cube.R[0] = B[0];
    cube.R[1] = B[1];
    cube.R[2] = B[2];

    cube.F[0] = R[0];
    cube.F[1] = R[1];
    cube.F[2] = R[2];
}

function moveUPrime(cube){
    moveU(cube);
    moveU(cube);
    moveU(cube);
}

function moveU2(cube){
    moveU(cube);
    moveU(cube);
}

function moveD(cube){
    cube.D = rotateFaceCW(cube.D);
    const F = [...cube.F];
    const L = [...cube.L];
    const B = [...cube.B];
    const R = [...cube.R];

    cube.R[6] = F[6];
    cube.R[7] = F[7];
    cube.R[8] = F[8];

    cube.F[6] = L[6];
    cube.F[7] = L[7];
    cube.F[8] = L[8];

    cube.L[6] = B[6];
    cube.L[7] = B[7];
    cube.L[8] = B[8];

    cube.B[6] = R[6];
    cube.B[7] = R[7];
    cube.B[8] = R[8];
}

function moveDPrime(cube){
    moveD(cube);
    moveD(cube);
    moveD(cube);
}

function moveD2(cube){
    moveD(cube);
    moveD(cube);
}

function moveB(cube){
    cube.B = rotateFaceCW(cube.B);
    const D = [...cube.D];
    const L = [...cube.L];
    const U = [...cube.U];
    const R = [...cube.R];

    cube.L[0] = U[2];
    cube.L[3] = U[1];
    cube.L[6] = U[0];

    cube.U[2] = R[2];
    cube.U[1] = R[5];
    cube.U[0] = R[8];

    cube.R[2] = D[2];
    cube.R[5] = D[1];
    cube.R[8] = D[0];

    cube.D[2] = L[0];
    cube.D[1] = L[3];
    cube.D[0] = L[6];

}

function moveBPrime(cube){
    moveB(cube);
    moveB(cube);
    moveB(cube);
}

function moveB2(cube){
    moveB(cube);
    moveB(cube);
}

function moveL(cube){
    cube.L = rotateFaceCW(cube.L);
    const D = [...cube.D];
    const F = [...cube.F];
    const U = [...cube.U];
    const B = [...cube.B];

    cube.F[0] = U[0];
    cube.F[3] = U[3];
    cube.F[6] = U[6];

    cube.D[0] = F[6];
    cube.D[3] = F[3];
    cube.D[6] = F[0];

    cube.B[2] = D[0];
    cube.B[5] = D[3];
    cube.B[8] = D[6];

    cube.U[0] = B[8];
    cube.U[3] = B[5];
    cube.U[6] = B[2];
}

function moveLPrime(cube){
    moveL(cube);
    moveL(cube);
    moveL(cube);
}

function moveL2(cube){
    moveL(cube);
    moveL(cube);
}

function applyMoves(cube, moves) {
    for(let move of moves){
        switch (move) {
            case "F":
                moveF(cube);
                break;
    
            case "F'":
                moveFPrime(cube);
                break;
    
            case "F2":
                moveF2(cube);
                break;
    
            case "R":
                moveR(cube);
                break;
    
            case "R'":
                moveRPrime(cube);
                break;
    
            case "R2":
                moveR2(cube);
                break;
    
            case "U":
                moveU(cube);
                break;
    
            case "U'":
                moveUPrime(cube);
                break;
    
            case "U2":
                moveU2(cube);
                break;
    
            case "D":
                moveD(cube);
                break;
    
            case "D'":
                moveDPrime(cube);
                break;
    
            case "D2":
                moveD2(cube);
                break;
    
            case "L":
                moveL(cube);
                break;
    
            case "L'":
                moveLPrime(cube);
                break;
    
            case "L2":
                moveL2(cube);
                break;
    
            case "B":
                moveB(cube);
                break;
    
            case "B'":
                moveBPrime(cube);
                break;
    
            case "B2":
                moveB2(cube);
                break;
    
            default:
                console.log("Invalid move:", move);
        }
    }
}

const moves = [
    "F", "F'", "F2",
    "R", "R'", "R2",
    "U", "U'", "U2",
    "D", "D'", "D2",
    "L", "L'", "L2",
    "B", "B'", "B2"
];

function scrambler(length){
    const scramble = [];
    for(let i=0; i<length; i++){
        let randomMove = moves[Math.floor(Math.random()*moves.length)];
        while(i>0 && scramble[i-1][0] === randomMove[0]){
            randomMove = moves[Math.floor(Math.random()*moves.length)];
        }
        scramble[i] = randomMove;
    }
    return scramble;
}

function isSolved(cube) {
    return Object.values(cube).every(face =>
        face.every(sticker => face[4] === sticker)
    );
}

const edges = {
    UF: [ ["U", 7], ["F", 1] ],
    UR: [ ["U", 5], ["R", 1] ],
    UB: [ ["U", 1], ["B", 1] ],
    UL: [ ["U", 3], ["L", 1] ],

    DF: [ ["D", 1], ["F", 7] ],
    DR: [ ["D", 5], ["R", 7] ],
    DB: [ ["D", 7], ["B", 7] ],
    DL: [ ["D", 3], ["L", 7] ],

    FR: [ ["F", 5], ["R", 3] ],
    FL: [ ["F", 3], ["L", 5] ],
    BR: [ ["B", 3], ["R", 5] ],
    BL: [ ["B", 5], ["L", 3] ]
};

function findEdge(cube, color1, color2){
    for(const edgeName in edges){
        const position = edges[edgeName];

        const face1 = position[0][0];
        const index1 = position[0][1];

        const face2 = position[1][0];
        const index2 = position[1][1];

        const sticker1 = cube[face1][index1];
        const sticker2 = cube[face2][index2];

        if (
            (sticker1 === color1 && sticker2 === color2) ||
            (sticker1 === color2 && sticker2 === color1)
        ) {
            return edgeName;
        }
    }
    return null;
}

console.log(findEdge(cube, "W", "G"));
console.log(findEdge(cube, "W", "R"));
console.log(findEdge(cube, "W", "B"));
console.log(findEdge(cube, "W", "O"));

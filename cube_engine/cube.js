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


moveF(testCube);
moveFPrime(testCube);
moveF2(testCube);
moveF2(testCube);
console.log("U:", testCube.U);
console.log("R:", testCube.R);
console.log("D:", testCube.D);
console.log("L:", testCube.L);
console.log("F:", testCube.F);
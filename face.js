import { Color } from "./enums.js";
class FaceCube{
    constructor(){
        this.f = [];
        
        for(let i=0; i<9; i++){
            this.f.push(Color.U);
        }
        for(let i=0; i<9; i++){
            this.f.push(Color.R);
        }
        for(let i=0; i<9; i++){
            this.f.push(Color.F);
        }
        for(let i=0; i<9; i++){
            this.f.push(Color.D);
        }
        for(let i=0; i<9; i++){
            this.f.push(Color.L);
        }
        for(let i=0; i<9; i++){
            this.f.push(Color.B);
        }
    }

    fromString(s){
        if (s.length < 54) {
            return "Error: Cube definition string contains less than 54 facelets.";
        }
        else if (s.length > 54) {
            return "Error: Cube definition string contains more than 54 facelets.";
        }

        let cnt = new Array(6).fill(0);

        for (let i = 0; i < 54; i++) {
            if (s[i] === 'U') {
                this.f[i] = Color.U;
                cnt[Color.U]++;
            }
            else if (s[i] === 'R') {
                this.f[i] = Color.R;
                cnt[Color.R]++;
            }
            else if (s[i] === 'F') {
                this.f[i] = Color.F;
                cnt[Color.F]++;
            }
            else if (s[i] === 'D') {
                this.f[i] = Color.D;
                cnt[Color.D]++;
            }
            else if (s[i] === 'L') {
                this.f[i] = Color.L;
                cnt[Color.L]++;
            }
            else if (s[i] === 'B') {
                this.f[i] = Color.B;
                cnt[Color.B]++;
            }
        }
        if (cnt.every(x => x === 9)) {
            return true;
        }
        else {
            return "Error: Cube definition string does not contain exactly 9 facelets of each color.";
        }
    }
}

const cube = new FaceCube();

const result = cube.fromString("UUUU");

console.log(result);
import * as fs from 'fs';

const INPUT: string = fs.readFileSync('./day-1/puzzle-input.txt','utf-8');

const rotations = INPUT.split("/n")

console.log('Rotations = ',rotations)
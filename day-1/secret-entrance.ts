import * as fs from 'fs';
import { Rotation } from './rotation.model';

const INPUT: string = fs.readFileSync('./day-1/puzzle-input.txt','utf-8');

const rotations: string[] = INPUT.split(/\r?\n/);

const cleanRotations: Rotation[] = rotations.map(rotation => {
  const cleanInput: string= rotation.trim();
  return {
    direction: cleanInput.substring(0,1),
    value: parseInt(cleanInput.substring(1, cleanInput.length)),
  } as Rotation
});

console.log(cleanRotations[1],cleanRotations[5])
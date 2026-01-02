import * as fs from 'fs';
import { Direction } from "./direction.enum";
import { Rotation } from "./rotation.model";

const WHEEL = Array.from({length: 100}, (_,i) => i);

export function findPassword(inputFile: string): number {
  const rotations = mapToRotations(getRotations(inputFile));
  let password = 0;
  let dial = 50;
  rotations.forEach((rotation) => {
    if(rotation.direction == Direction.Right) {
      for (let i = dial +1; i <= dial + rotation.value; i++ ){
        if(WHEEL[i % WHEEL.length] === 0) password++;
      }
      dial = (dial + rotation.value) % 100;
    } else {
      for (let i = dial -1; i >= dial - rotation.value; i-- ){
        if(WHEEL[i % WHEEL.length] === 0) password++;
      }
      dial = (dial - rotation.value) % 100;
      if(dial < 0) {
        dial = 100 + dial;
      }
    }
  });
  return password;
}


function getRotations(inputFile: string){
  const INPUT: string = fs.readFileSync(`./day-1/${inputFile}`,'utf-8');
  const rotations: string[] = INPUT.split(/\r?\n/);
  return rotations;
}

function mapToRotations(stringRotations: string[]):Rotation[] {
  const cleanRotations: Rotation[] = stringRotations.map(rotation => {
    const cleanInput: string= rotation.trim();
    return {
      direction: cleanInput.substring(0,1) as Direction,
      value: parseInt(cleanInput.substring(1, cleanInput.length)),
    }
  });
  return cleanRotations;
};
import { Direction } from "./direction.enum";
import { Rotation } from "./rotation.model";
import * as fs from 'fs';

export class DialManager {
  public inputFile: string;
  private zeroCount = 0;
  private dialPosition = 50; 

  public constructor(inputfile: string){
    this.inputFile = inputfile;
  }


  public findPassword(): number{
    const cleanInput = this.cleanInput();
    const rotations = this.mapToRotations(cleanInput);
    rotations.forEach((rotation) => {
      this.computeNextRotation(rotation);
    });
    return this.zeroCount;
  };



  private cleanInput(): string[] {
    const INPUT: string = fs.readFileSync(`./day-1/${this.inputFile}`,'utf-8');
    const rotations: string[] = INPUT.split(/\r?\n/);
    return rotations;
 
  }

  private mapToRotations(stringRotations: string[]):Rotation[] {
    const cleanRotations: Rotation[] = stringRotations.map(rotation => {
      const cleanInput: string= rotation.trim();
      return {
        direction: cleanInput.substring(0,1) as Direction,
        value: parseInt(cleanInput.substring(1, cleanInput.length)),
      }
    });
    return cleanRotations;
  };

  private computeNextRotation(rotation: Rotation): void{
    // console.log(this.dialPosition, "current position", rotation, "next rotation");

    if(rotation.direction === Direction.Left){
      this.computeLeftRotation(rotation.value);
    }else {
      this.computeRightRotation(rotation.value);
    }

    this.zeroCountIncrement();
  }

  private computeRightRotation(value: number){
    const newValue = this.dialPosition + value;
    // if(newValue > 99) this.computeTraveledThroughZero(newValue);
    this.dialPosition = (newValue) % 100
  };

  private computeLeftRotation(value: number) {
    const newValue = this.dialPosition - value +100;
    // if(newValue <  99 ){ 
    //   if(newValue > 0 && this.dialPosition !== 0){
    //     this.zeroCount++; 
    //     // console.log('add zero')
    //   } else {
    //     this.computeTraveledThroughZero(newValue)
    //   }
    // }

    this.dialPosition = (newValue) % 100
  };

  private zeroCountIncrement(): void{
    if(this.dialPosition === 0){
      this.zeroCount++;
    } 
  }

  // private computeTraveledThroughZero(value: number){
  //   let count = Math.floor(value / 100);
  //   if(count < 0) count = count * -1;

  //   if(count > 0 && this.dialPosition === 0) count -=1;
    
  //   this.zeroCount += count;
  //   console.log('traveled',count,' times to 0')
  // }
}
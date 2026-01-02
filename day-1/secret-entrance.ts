import { DialManager } from './dial-manager.class';
import { findPassword } from './wheel-manager';

const realInputFile = 'puzzle-input.txt';
const exampleInputFile = 'example-input.txt'

const dialManager = new DialManager(realInputFile);

const password = dialManager.findPassword();

console.log('The password is ', password);

const encodedPassword = findPassword(realInputFile);

console.log('The encoded password is ', encodedPassword);
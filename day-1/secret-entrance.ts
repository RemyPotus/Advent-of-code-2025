import { DialManager } from './dial-manager.class';

const realInputFile = 'puzzle-input.txt';
const exampleInputFile = 'example-input.txt'

const dialManager = new DialManager(realInputFile);

const password = dialManager.findPassword();

console.log('The password is ', password);
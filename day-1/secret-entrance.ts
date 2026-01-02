import { DialManager } from './dial-manager.class';

const realInputFile = 'puzzle-input.txt';
const exampleInputFile = 'example-input.txt'

const dialManager = new DialManager(exampleInputFile);

const password = dialManager.findPassword();

console.log('The password is ', password);
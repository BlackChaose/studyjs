#!/usr/bin/env node
import { say } from '../Bar.js';

let a = () => {
  console.log('in say.js');
  say();
}

a();

#!/usr/bin/env node
import { say } from '../Bar';

const a = () => {
  console.log('in say.js');
  say();
}

a();

#!/usr/bin/env node
import _ from 'lodash';
import say from '../Bar';

const a = () => {
  console.log('in say.js');
  say();
  console.log(_.now());
};

a();

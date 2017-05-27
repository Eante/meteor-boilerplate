// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Example } from '../example.js';

Meteor.publish('example.pubs.all', function () {
  return Example.find();
});

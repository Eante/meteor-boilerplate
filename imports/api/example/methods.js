// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Example } from './example.js';

Meteor.methods({
  'example.insert'(title, url) {
    check(url, String);
    check(title, String);

    return Example.insert({
      url,
      title,
      createdAt: new Date(),
    });
  },
});

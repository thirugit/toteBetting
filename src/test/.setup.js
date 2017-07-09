import sinon from 'sinon';
import { jsdom } from 'jsdom';
import sinonChai from 'sinon-chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai, { expect } from 'chai';
var exposedProperties = ['window', 'navigator', 'document'];
var proxyquire = require('proxyquire').noCallThru();
global.document = jsdom('');
global.chai = chai;
global.expect = expect;
global.sinon = sinon;
global.React = React;
global.TestUtils = TestUtils;
global.window = document.defaultView;
chai.use(sinonChai);
Object.keys(document.defaultView).forEach((property) => {
 if (typeof global[property] === 'undefined') {
 exposedProperties.push(property);
 global[property] = document.defaultView[property];
 }
});
global.navigator = {
 userAgent: 'node.js'
};
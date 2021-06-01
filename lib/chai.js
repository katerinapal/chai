import mod_assert from "./chai/interface/assert";
import mod_should from "./chai/interface/should";
import mod_expect from "./chai/interface/expect";
import mod_assertions from "./chai/core/assertions";
import mod_assertion from "./chai/assertion";
import mod_configjs from "./chai/config";
import * as mod_indexjs from "./chai/utils";
import ext_assertionerror from "assertion-error";
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var used = [];

/*!
 * Chai version
 */

mod_version = '4.3.3';

/*!
 * Assertion Error
 */

mod_AssertionError = ext_assertionerror;

/*!
 * Utils for plugins (not exported)
 */

var util = mod_indexjs;

/**
 * # .use(function)
 *
 * Provides a way to extend the internals of Chai.
 *
 * @param {Function}
 * @returns {this} for chaining
 * @api public
 */

mod_use = function (fn) {
  if (!~used.indexOf(fn)) {
    fn(exports, util);
    used.push(fn);
  }

  return exports;
};

/*!
 * Utility Functions
 */

mod_util = util;

/*!
 * Configuration
 */

var config = mod_configjs;
mod_config = config;

/*!
 * Primary `Assertion` prototype
 */

var assertion = mod_assertion;
mod_use(assertion);

/*!
 * Core Assertions
 */

var core = mod_assertions;
mod_use(core);

/*!
 * Expect interface
 */

var expect = mod_expect;
mod_use(expect);

/*!
 * Should interface
 */

var should = mod_should;
mod_use(should);

/*!
 * Assert interface
 */

var assert = mod_assert;
mod_use(assert);
var mod_version;
export { mod_version as version };
var mod_AssertionError;
export { mod_AssertionError as AssertionError };
var mod_use;
export { mod_use as use };
var mod_util;
export { mod_util as util };
var mod_config;
export { mod_config as config };

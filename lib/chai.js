import imp_assert from "./chai/interface/assert";
import imp_should from "./chai/interface/should";
import imp_expect from "./chai/interface/expect";
import imp_assertions from "./chai/core/assertions";
import imp_assertion from "./chai/assertion";
import imp_configjs from "./chai/config";
import * as imp_indexjs from "./chai/utils";
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

var util = imp_indexjs;

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

var config = imp_configjs;
mod_config = config;

/*!
 * Primary `Assertion` prototype
 */

var assertion = imp_assertion;
mod_use(assertion);

/*!
 * Core Assertions
 */

var core = imp_assertions;
mod_use(core);

/*!
 * Expect interface
 */

var expect = imp_expect;
mod_use(expect);

/*!
 * Should interface
 */

var should = imp_should;
mod_use(should);

/*!
 * Assert interface
 */

var assert = imp_assert;
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

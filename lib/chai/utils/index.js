import imp_getOperator from "./getOperator";
import imp_isNaNjs from "./isNaN";
import imp_isProxyEnabled from "./isProxyEnabled";
import imp_addLengthGuard from "./addLengthGuard";
import imp_proxify from "./proxify";
import ext_checkerror from "check-error";
import imp_getOwnEnumerableProperties from "./getOwnEnumerableProperties";
import imp_getOwnEnumerablePropertySymbols from "./getOwnEnumerablePropertySymbols";
import imp_compareByInspect from "./compareByInspect";
import imp_overwriteChainableMethod from "./overwriteChainableMethod";
import imp_addChainableMethod from "./addChainableMethod";
import imp_overwriteMethod from "./overwriteMethod";
import imp_overwriteProperty from "./overwriteProperty";
import imp_addMethod from "./addMethod";
import imp_addProperty from "./addProperty";
import ext_getfuncname from "get-func-name";
import ext_deepeql from "deep-eql";
import imp_transferFlags from "./transferFlags";
import imp_flag from "./flag";
import imp_objDisplay from "./objDisplay";
import imp_inspect from "./inspect";
import imp_getActual from "./getActual";
import imp_getMessage from "./getMessage";
import imp_expectTypes from "./expectTypes";
import ext_typedetect from "type-detect";
import imp_test from "./test";
import ext_pathval from "pathval";
/*!
 * chai
 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Dependencies that are used for multiple exports are required here only once
 */

var pathval = ext_pathval;

/*!
 * test utility
 */

mod_test = imp_test;

/*!
 * type utility
 */

mod_type = ext_typedetect;

/*!
 * expectTypes utility
 */
mod_expectTypes = imp_expectTypes;

/*!
 * message utility
 */

mod_getMessage = imp_getMessage;

/*!
 * actual utility
 */

mod_getActual = imp_getActual;

/*!
 * Inspect util
 */

mod_inspect = imp_inspect;

/*!
 * Object Display util
 */

mod_objDisplay = imp_objDisplay;

/*!
 * Flag utility
 */

mod_flag = imp_flag;

/*!
 * Flag transferring utility
 */

mod_transferFlags = imp_transferFlags;

/*!
 * Deep equal utility
 */

mod_eql = ext_deepeql;

/*!
 * Deep path info
 */

mod_getPathInfo = pathval.getPathInfo;

/*!
 * Check if a property exists
 */

mod_hasProperty = pathval.hasProperty;

/*!
 * Function name
 */

mod_getName = ext_getfuncname;

/*!
 * add Property
 */

mod_addProperty = imp_addProperty;

/*!
 * add Method
 */

mod_addMethod = imp_addMethod;

/*!
 * overwrite Property
 */

mod_overwriteProperty = imp_overwriteProperty;

/*!
 * overwrite Method
 */

mod_overwriteMethod = imp_overwriteMethod;

/*!
 * Add a chainable method
 */

mod_addChainableMethod = imp_addChainableMethod;

/*!
 * Overwrite chainable method
 */

mod_overwriteChainableMethod = imp_overwriteChainableMethod;

/*!
 * Compare by inspect method
 */

mod_compareByInspect = imp_compareByInspect;

/*!
 * Get own enumerable property symbols method
 */

mod_getOwnEnumerablePropertySymbols = imp_getOwnEnumerablePropertySymbols;

/*!
 * Get own enumerable properties method
 */

mod_getOwnEnumerableProperties = imp_getOwnEnumerableProperties;

/*!
 * Checks error against a given set of criteria
 */

mod_checkError = ext_checkerror;

/*!
 * Proxify util
 */

mod_proxify = imp_proxify;

/*!
 * addLengthGuard util
 */

mod_addLengthGuard = imp_addLengthGuard;

/*!
 * isProxyEnabled helper
 */

mod_isProxyEnabled = imp_isProxyEnabled;

/*!
 * isNaN method
 */

mod_isNaN = imp_isNaNjs;

/*!
 * getOperator method
 */

mod_getOperator = imp_getOperator;
var mod_test;
export { mod_test as test };
var mod_type;
export { mod_type as type };
var mod_expectTypes;
export { mod_expectTypes as expectTypes };
var mod_getMessage;
export { mod_getMessage as getMessage };
var mod_getActual;
export { mod_getActual as getActual };
var mod_inspect;
export { mod_inspect as inspect };
var mod_objDisplay;
export { mod_objDisplay as objDisplay };
var mod_flag;
export { mod_flag as flag };
var mod_transferFlags;
export { mod_transferFlags as transferFlags };
var mod_eql;
export { mod_eql as eql };
var mod_getPathInfo;
export { mod_getPathInfo as getPathInfo };
var mod_hasProperty;
export { mod_hasProperty as hasProperty };
var mod_getName;
export { mod_getName as getName };
var mod_addProperty;
export { mod_addProperty as addProperty };
var mod_addMethod;
export { mod_addMethod as addMethod };
var mod_overwriteProperty;
export { mod_overwriteProperty as overwriteProperty };
var mod_overwriteMethod;
export { mod_overwriteMethod as overwriteMethod };
var mod_addChainableMethod;
export { mod_addChainableMethod as addChainableMethod };
var mod_overwriteChainableMethod;
export { mod_overwriteChainableMethod as overwriteChainableMethod };
var mod_compareByInspect;
export { mod_compareByInspect as compareByInspect };
var mod_getOwnEnumerablePropertySymbols;
export { mod_getOwnEnumerablePropertySymbols as getOwnEnumerablePropertySymbols };
var mod_getOwnEnumerableProperties;
export { mod_getOwnEnumerableProperties as getOwnEnumerableProperties };
var mod_checkError;
export { mod_checkError as checkError };
var mod_proxify;
export { mod_proxify as proxify };
var mod_addLengthGuard;
export { mod_addLengthGuard as addLengthGuard };
var mod_isProxyEnabled;
export { mod_isProxyEnabled as isProxyEnabled };
var mod_isNaN;
export { mod_isNaN as isNaN };
var mod_getOperator;
export { mod_getOperator as getOperator };
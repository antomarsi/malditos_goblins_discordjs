"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logWarn = exports.logError = exports.logEvent = exports.logSystem = void 0;
const debug = require("debug");
exports.logSystem = debug("bot:system");
exports.logEvent = debug("bot:event");
exports.logError = debug("bot:error");
exports.logWarn = debug("bot:warn");
//# sourceMappingURL=index.js.map
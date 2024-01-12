"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("../src/server");
const supertest_1 = __importDefault(require("supertest"));
const globals_1 = require("@jest/globals");
(0, globals_1.describe)('test', () => {
    (0, globals_1.test)('first test', () => {
        return (0, supertest_1.default)(server_1.server)
            .get('/')
            .expect(200)
            .then(response => {
            (0, globals_1.expect)(response.text).toBeTruthy();
        });
    });
});

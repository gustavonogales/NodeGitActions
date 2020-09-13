"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var userServiceImpl_1 = __importDefault(require("@service/userServiceImpl"));
var userRepositoryImpl_1 = __importDefault(require("@repository/userRepositoryImpl"));
var userControllerImpl_1 = __importDefault(require("@controller/userControllerImpl"));
tsyringe_1.container.registerSingleton('UserService', userServiceImpl_1.default);
tsyringe_1.container.registerSingleton('userRepository', userRepositoryImpl_1.default);
tsyringe_1.container.registerSingleton('userController', userControllerImpl_1.default);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var tsyringe_1 = require("tsyringe");
var userRouter = express_1.Router();
var userController = tsyringe_1.container.resolve('userController');
userRouter.get('/', userController.findAll);
exports.default = userRouter;

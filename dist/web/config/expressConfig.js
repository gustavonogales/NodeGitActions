"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importStar(require("express"));
// import AppError from '@exception/appError';
var user_routes_1 = __importDefault(require("@route/user.routes"));
var app = express_1.default();
app.use(express_1.default.json());
var routes = express_1.Router();
routes.use('/user', user_routes_1.default);
app.use(routes);
// app.use(
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   (error: Error, _request: Request, response: Response, _: NextFunction) => {
//     if (error instanceof AppError) {
//       return response.status(error.statusCode).json({
//         status: 'error',
//         message: error.message,
//       });
//     }
//     console.error(error);
//     return response.status(500).json({
//       status: 'error',
//       message: 'Internal server error',
//     });
//   },
// );
app.listen(3333, function () {
    console.log('Running on port 3333, i think!');
});

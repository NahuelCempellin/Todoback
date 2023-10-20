"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = __importDefault(require("./routes/userRoutes/user.routes"));
const todo_routes_1 = __importDefault(require("./routes/todoRoutes/todo.routes"));
const app = (0, express_1.default)();
app.set('port', process.env.PORT || 3000);
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 //
};
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use((0, cors_1.default)(corsOptions));
app.use(user_routes_1.default);
app.use(todo_routes_1.default);
app.get('/', (res) => {
    res.send(`The API is at http://localhost:${app.get('port')}`);
});
exports.default = app;

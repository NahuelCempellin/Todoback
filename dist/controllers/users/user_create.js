"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.createUser = void 0;
const user_1 = __importDefault(require("../../models/userModel/user"));
const bcrypt_1 = __importDefault(require("bcrypt"));
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { nombre, user_name, password } = req.body;
        try {
            const user = new user_1.default({
                nombre: nombre,
                user_name: user_name,
                password: password,
            });
            yield user.save();
            res.status(200).send({ message: 'User created successfully' });
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.createUser = createUser;
function login(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { password, user_name } = req.body;
        try {
            if (user_name) {
                const getUser = yield user_1.default.findOne({ user_name });
                if (!getUser) {
                    res.status(500).send({ message: "The user doesn't exist" });
                }
                else {
                    if (bcrypt_1.default.compareSync(password, getUser.password)) {
                        res.status(200).send({ message: 'success', getUser });
                    }
                    else {
                        res.status(400).send({ message: 'Password error' });
                    }
                }
            }
        }
        catch (error) {
            next(error);
        }
    });
}
exports.login = login;

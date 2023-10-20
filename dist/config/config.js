"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    jwtSecret: process.env.JWT_SECRET || 'somesecrettokken',
    DB: {
        URI: process.env.MONGODB_URI || 'mongodb+srv://felipenahuelcempellin:7fU7UGROH5tZRuxl@cluster0.pjn1soj.mongodb.net/?retryWrites=true&w=majority',
        USER: process.env.MONGODB_USER,
        PASSWORD: process.env.MONGODB_PASSWORD
    }
};

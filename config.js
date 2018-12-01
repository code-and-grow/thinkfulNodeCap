'use strict';
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/nodecap';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/nodecap-test';
exports.PORT = process.env.PORT || 8080;
exports.JWT_SECRET = process.env.JWT_SECRET;
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';
exports.YUMMLY_ID = process.env.YUMMLY_ID;
exports.YUMMLY_KEY = process.env.YUMMLY_KEY;
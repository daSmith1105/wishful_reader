'use strict';

exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/library';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/test-book-app';
exports.PORT = process.env.PORT || 8080;
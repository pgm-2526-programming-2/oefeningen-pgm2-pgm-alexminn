const express = require('express');
const { getAllQuotes, getQuoteById, updateQuote } = require('../controllers/quotes.controller');
const quotesRouter = express.Router();

quotesRouter.get('/quotes', getAllQuotes);
quotesRouter.get('/quotes/:questionId', getQuoteById);
quotesRouter.put('/quotes/:id', updateQuote)

module.exports = quotesRouter;
#!/usr/bin/env node

const yargsParser = require('yargs-parser');
const filter = require('./index');

const { git, command } = yargsParser(process.argv.slice(2), {
	array: ['git', 'command']
});

filter(git, command);
# semantic-release-example
[![Build Status](https://travis-ci.org/jaebradley/semantic-release-example.svg?branch=implement-semantic-release)](https://travis-ci.org/jaebradley/semantic-release-example)
[![codecov](https://codecov.io/gh/jaebradley/semantic-release-example/branch/master/graph/badge.svg)](https://codecov.io/gh/jaebradley/semantic-release-example)
[![npm](https://img.shields.io/npm/v/semantic-release-example.svg)](https://www.npmjs.com/package/semantic-release-example)
[![GitHub release](https://img.shields.io/github/release/jaebradley/semantic-release-example.svg)](https://github.com/jaebradley/semantic-release-example/releases)
[![license](https://img.shields.io/github/license/jaebradley/semantic-release-example.svg)](https://github.com/jaebradley/semantic-release-example/blob/master/LICENSE)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=plastic)](https://github.com/semantic-release/semantic-release)

## Introduction

This (very simple) package hopefully helps to illustrate how to implement [the `semantic-release` package](https://github.com/semantic-release/semantic-release) in an existing NPM package.

## Implementation Notes

Use [the `semantic-release-cli` package](https://www.npmjs.com/package/semantic-release-cli) to get setup.

![alt-text](https://imgur.com/VdfTdU2.png)

It uses [the Angular commit message convention](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits) which is also [the default commit message convention for `semantic-release`](https://github.com/semantic-release/semantic-release#default-commit-message-format).

It uses [`commitlint`](https://github.com/marionebl/commitlint) for (you guessed it) commit linting, and [`husky`](https://github.com/typicode/husky) for Git hooks (specifically, [the `commit-msg` hook](https://git-scm.com/docs/githooks#_commit_msg).

The `npm run semantic-commit` script triggers a helpful commit message CLI ([the `commitlint cli` package](https://github.com/marionebl/commitlint/tree/master/@commitlint/cli))

A new release is cut when the `master` branch Travis build successfully completes and there's a formatted commit message that should trigger a semantic version change. A Git tag is created, a GitHub release is created, and the NPM package is published with the appropriate semantic version update.

## Invalid Commit Message Failure

![alt-text](https://imgur.com/uJNJW2x.png)

## Commit Message CLI

### Specify a `type`
![alt-text](https://imgur.com/jEascoN.png)

### Specify a `scope`
![alt-text](https://imgur.com/6RetlC3.png)

### Specify a `subject`
![alt-text](https://imgur.com/w6UiCw1.png)

### Full commit message after the CLI exits successfully
![alt-text](https://imgur.com/oyHT23e.png)

// my-reporter.js
let chalk = require('chalk');

const pass = chalk.green;
const fail = chalk.red;
const test = chalk.blue
const result = chalk.yellow

// console.log(error('Error!'));
// console.log(warning('Warning!'));
'use strict';

const Mocha = require('mocha');
const {
  EVENT_RUN_BEGIN,
  EVENT_RUN_END,
  EVENT_TEST_FAIL,
  EVENT_TEST_PASS,
  EVENT_SUITE_BEGIN,
  EVENT_SUITE_END
} = Mocha.Runner.constants;

// this reporter outputs test results, indenting two spaces per suite
class MyReporter {
  constructor(runner) {
    this._indents = 0;
    const stats = runner.stats;

    runner
      .once(EVENT_RUN_BEGIN, () => {
        console.log(test('-------------Start--------------'));
      })
      .on(EVENT_SUITE_BEGIN, () => {
        this.increaseIndent();
      })
      .on(EVENT_SUITE_END, () => {
        this.decreaseIndent();
      })
      .on(EVENT_TEST_PASS, test => {
        // Test#fullTitle() returns the suite name(s)
        // prepended to the test title
        console.log(pass("\u2705 "+`${this.indent()}Pass: ${test.fullTitle()}`));
      })
      .on(EVENT_TEST_FAIL, (test, err) => {
        console.log(
          fail("\u274C "+`${this.indent()}Fail: ${test.fullTitle()} - Error: ${err.message}`
        ));
      })
      .once(EVENT_RUN_END, () => {
        console.log(test(`-------------End----------------`));
        console.log(result(`Result: ${stats.passes}/${stats.passes + stats.failures} passed`));
      });
  }

  indent() {
    return Array(this._indents).join('  ');
  }

  increaseIndent() {
    this._indents++;
  }

  decreaseIndent() {
    this._indents--;
  }
}

module.exports = MyReporter;
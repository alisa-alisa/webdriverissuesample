## Preconditions

- Google Chrome is installed and the version is Version 87.0.4280.141 (Official Build) (x86_64)
- Java is installed.
- Yarn or NPM are installed
- OS: Mac OS X (I have Catalina 10.15.7 (19H114))

## Install

`yarn install`

`yarn run webdriver-manager update`

## How to repro

`yarn run protractor conf.js`

Expected: the test is run

Actual: _WebDriverError: Timed out waiting for driver server to start_
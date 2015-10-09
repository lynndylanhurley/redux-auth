var testsContext = require.context(".", true, /_test$/);
testsContext.keys().forEach(testsContext);

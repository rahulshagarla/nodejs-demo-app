const { test } = require("node:test");
const assert = require("node:assert");
const { getMessage } = require("../app");

test("should return the correct message", () => {
  assert.strictEqual(
    getMessage(),
    "Hello from Node.js CI/CD Pipeline!"
  );
});


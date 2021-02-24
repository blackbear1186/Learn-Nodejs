import request from "supertest";
import { expect } from "chai";
import { app } from "./server";

// add the done parameter to make sure the expect functions properly
describe("/hello endpoint functionality", () => {
  it('replies with "Hello!" when a GET request is sent', (done) => {
    request(app).get("/hello").expect('Hello!', done);
      
  });
});

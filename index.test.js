// install dependencies
const { execSync } = require("child_process");
execSync("npm install");
execSync("npm run seed");

const request = require("supertest");
const { db } = require("./db/connection");
const { Musician } = require("./models/index");
const app = require("./src/app");
const seedMusician = require("./seedData");

describe("./musicians endpoint", () => {
  // Write your tests here
  test("get all musicians", async () => {
    const response = await request(app).get("/musicians");

    expect(response.body[0].name).toBe("Mick Jagger");
  });
  test("bands endpoint functions properly", async () => {
    const response = await request(app).get("/bands");
    expect(response.statusCode).toBe(200);
  });
});

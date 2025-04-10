import RailwayClient from "..";

const apiKey = process.env.RAILWAY_API_TOKEN;

console.log(apiKey);

describe("graphql methods return expected data", () => {
  test("me returns name and email", async () => {
    const client = new RailwayClient(apiKey);

    const me = await client.me();

    console.info(me);
    expect(me.name).toBeTruthy();
    expect(me.email).toBeTruthy();
  });
});

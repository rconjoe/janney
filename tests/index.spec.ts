import RailwayClient from "..";

const apiKey = process.env.RAILWAY_API_TOKEN;

describe("graphql methods return expected data", () => {
  const client = new RailwayClient(apiKey);

  test("me returns projects, services, environments", async () => {
    const me = await client.me();
    Bun.write("./tests/out/me.json", JSON.stringify(me));
  });

  // test("fetches name, id, and updatedAt on projects", async () => {
  //   const result = await client.projects();
  //   console.info(result);
  // });
});

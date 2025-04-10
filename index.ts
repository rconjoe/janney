import { Client, createClient, User } from "./generated";

class RailwayClient {
  private API: Client;

  constructor(private apiKey: string = process.env.RAILWAY_API_TOKEN || "") {
    if (!apiKey) {
      throw new Error(
        "API Token is required. Set RAILWAY_API_TOKEN environment variable."
      );
    }

    this.API = createClient({
      url: "https://backboard.railway.com/graphql/v2",
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
      },
    });
  }

  public async me(): Promise<Partial<User> | undefined> {
    try {
      const response = await this.API.query({
        me: {
          name: true,
          email: true,
        },
      });

      return response.me;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default RailwayClient;

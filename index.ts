import { Client, createClient } from "./client";

class RailwayClient {
  private API: Client;

  constructor(private apiKey: string = process.env.RAILWAY_API_TOKEN || "") {
    if (!apiKey) {
      throw new Error(
        "API Token is required. Set RAILWAY_API_TOKEN environment variable."
      );
    }

    const headers = {
      Authorization: `Bearer ${this.apiKey}`,
      "Content-Type": "application/json",
    };

    this.API = createClient({
      url: "https://backboard.railway.com/graphql/v2",
      headers,
    });
  }

  public async me() {
    try {
      const response = await this.API.query({
        me: {
          projects: {
            edges: {
              node: {
                id: true,
                name: true,
                services: {
                  edges: {
                    node: {
                      id: true,
                      name: true,
                    },
                  },
                },
                plugins: {
                  edges: {
                    node: {
                      id: true,
                      name: true,
                    },
                  },
                },
                environments: {
                  edges: {
                    node: {
                      id: true,
                      name: true,
                    },
                  },
                },
              },
            },
          },
        },
      });

      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  // public async projects(): Promise<unknown | undefined> {
  //   try {
  //     const response = await this.API.query({
  //       projects: {
  //         __args: {
  //           userId: "bab1c2c6-2f6f-4d2b-b493-43465abbe583",
  //         },
  //         edges: {
  //           node: {
  //             name: true,
  //             id: true,
  //             updatedAt: true,
  //           },
  //         },
  //       },
  //     });
  //
  //     return response.projects;
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // }
}

export default RailwayClient;

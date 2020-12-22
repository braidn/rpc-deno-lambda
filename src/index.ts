import { handleHttpRequest } from "https://deno.land/x/gentle_rpc/server/http.ts"
import { RespondOptions } from "https://deno.land/x/gentle_rpc/server/response.ts"
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "https://deno.land/x/lambda/mod.ts";

const options: RespondOptions = {}
const respMethods = {
  sayHello: (w: [string]) => `Hello ${w}`,
  callNameParams: ({a, b, c}: {a: number; b: number; c: string}) =>
    `${c} ${a * b}`,
  animalNoise: (noise: [string]) =>
    noise.map((el) => el.toLocaleUpperCase()).join(" ")
}


export async function handler(
  event: APIGatewayProxyEvent,
  _context: Context
): Promise<APIGatewayProxyResult>  {

  const response = await handleHttpRequest(
    event.body || "",
    respMethods,
    options
  )

  console.log("Event body is", event.body)
  console.log("Response is: ", response)

  if (response === undefined) {
    return {
      statusCode: 404,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify('')
    }
  }
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: response
  }
}

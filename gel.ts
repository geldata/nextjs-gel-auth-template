import { createClient } from "gel";
import createAuth from "@gel/auth-nextjs/app";

import { getBaseUrl } from "./base-url";

export const client = createClient({
  tlsSecurity: process.env.NODE_ENV === "development" ? "insecure" : undefined,
});

export const auth = createAuth(client, {
  baseUrl: getBaseUrl(),
});

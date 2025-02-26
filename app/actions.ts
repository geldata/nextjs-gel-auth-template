"use server";

import { auth } from "@/gel";
const authActions = auth.createServerActions();

export const { signout } = authActions;

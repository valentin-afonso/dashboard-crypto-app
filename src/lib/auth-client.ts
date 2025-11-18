import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: import.meta.env.VITE_HONO_API_PATH,
  fetchOptions: {
    credentials: "include", // Required for sending cookies cross-origin
  },
});

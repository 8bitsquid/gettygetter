import { setupServer } from "msw/node"
import { handlers } from "./handlers"

/**
 * Mock server used for all services - configured in `vitest.setup.js`
 * 
 * Mock Service Worker (https://mswjs.io/) is used to provider the mock server. 
 * In this case, we're using their Node.js implementation
 */
export const server = setupServer(...handlers)
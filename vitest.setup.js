/**
 * Setup file for global mock server. 
 * 
 * By inclunding this file in the `test.setupFiles` prop in our
 * `vite.config.js` we can ensure this mock server is used automatically
 * for all mock requests
 * 
 * See https://vitest.dev/config/#setupfiles
 */
import { afterAll, afterEach, beforeAll } from 'vitest'
import { server } from './src/mocks/node'

/**
 * Start the mock server before any test is run - configured to error out if a request 
 * is made without a corresponding request handler.
 * 
 * See https://mswjs.io/docs/api/setup-server/listen/#onunhandledrequest
 */
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

// Stope mock server after tests have run
afterAll(() => server.close())

/**
 * After each test, reset the handlers to their initialized state.
 * This will prevent collisions between tests
 * 
 * See https://mswjs.io/docs/api/setup-worker/reset-handlers/
 */
afterEach(() => server.resetHandlers())

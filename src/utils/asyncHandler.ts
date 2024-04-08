import type { Request, Response, NextFunction, RequestHandler } from 'express';

/**
 * Wraps an asynchronous route handler to ensure any uncaught errors are passed to Express's error handling middleware.
 *
 * This function takes an asynchronous route handler as an argument and returns a new function that
 * behaves like a standard Express route handler but with enhanced error handling. When the wrapped
 * route handler is invoked, any rejected promise or uncaught error it produces is caught and passed
 * to Express's `next` function, triggering the error handling middleware.
 *
 * This approach allows asynchronous route handlers to be used in Express without needing to explicitly
 * use try/catch blocks or directly calling `next` with errors within each route handler.
 *
 * @param {Function} fn - The asynchronous route handler to wrap. It should be a function that takes
 * Express's `req`, `res`, and `next` parameters and returns a Promise that resolves to `void`.
 * @returns {RequestHandler} A standard Express route handler that safely handles asynchronous operations.
 */
export const asyncHandler = function asyncHandler(
  fn: (req: Request, res: Response, next: NextFunction) => Promise<void>,
): RequestHandler {
  return (req, res, next) => {
    // Immediately invoke the async route handler within a Promise.resolve to ensure any thrown errors are caught
    Promise.resolve(fn(req, res, next)).catch(next); // Pass any errors to Express's next function for centralized error handling
  };
};

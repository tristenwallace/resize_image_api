import request from 'supertest';
import { app } from '../index';

// Test suite for the main route of the Express application
it('GET / - responds with 200 status', (done) => {
  // Initiate a GET request to the root ('/') route of the application
  void request(app)
    .get('/')
    .expect(200) // Expect a 200 HTTP status code in the response
    .end((err, res) => {
      // Final callback function to handle the result of the test
      if (err !== null && err !== undefined) {
        // If there is an error (request failed, incorrect response, etc.), fail the test with the received error
        done.fail(err as Error);
      } else {
        // If the test succeeds without errors, complete the test without failing
        done();
      }
    });
});

import request from 'supertest';
import { app } from '../../index';

// Test suite for the image processing endpoint
describe('Image Processing Endpoint', () => {
  // SUCCESS: Test case for successful image processing with all required query parameters provided
  it('GET /image - responds with 200 status for valid parameters', (done) => {
    // Send a GET request to the image endpoint with query parameters for image processing
    void request(app)
      .get('/image?imageName=encenadaport&width=200&height=200')
      .expect(200)
      .end((err, res) => {
        // Final callback to handle the async operation's result
        if (err !== null && err !== undefined) {
          done.fail(err as Error); // If there's an error, fail the test with the received error
        } else {
          done(); // If successful, signal test completion
        }
      });
  });

  // FAIL: Test case for the scenario where required query parameters are missing
  it('GET /image - responds with 400 status for missing parameters', (done) => {
    // Send a GET request to the image endpoint without any query parameters
    void request(app)
      .get('/image')
      .expect(400) // Expect a 400 HTTP status code indicating a bad request due to missing parameters
      .end((err, res) => {
        // Handle the result of the async operation
        if (err !== null && err !== undefined) {
          done.fail(err as Error); // Fail the test in case of an error
        } else {
          done(); // Signal successful test completion otherwise
        }
      });
  });
});

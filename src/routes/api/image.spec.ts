import request from 'supertest';
import { app } from '../../index'; // Ensure this app uses your image router

it('GET /image - responds with 200 status for valid parameters', (done) => {
  void request(app)
    .get('/image?imageName=encenadaport&width=200&height=200')
    .expect(200)
    .end((err, res) => {
      // Using .end() to handle the async operation
      if (err !== null && err !== undefined) {
        done.fail(err as Error); // Call done.fail() on error
      } else {
        done(); // Call done() to signal completion
      }
    });
});

it('GET /image - responds with 400 status for missing parameters', (done) => {
  void request(app)
    .get('/image')
    .expect(400)
    .end((err, res) => {
      // Using .end() to handle the async operation
      if (err !== null && err !== undefined) {
        done.fail(err as Error); // Call done.fail() on error
      } else {
        done(); // Call done() to signal completion
      }
    });
});

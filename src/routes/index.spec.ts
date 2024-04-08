import request from 'supertest';
import { app } from '../index'; // Import your Exp
it('GET / - responds with 200 status', (done) => {
  void request(app)
    .get('/')
    .expect(200)
    .end((err, res) => {
      // Using .end() to handle the async operation
      if (err !== null && err !== undefined) {
        done.fail(err as Error); // Call done.fail() on error
      } else {
        // Perform any additional assertions here
        done(); // Call done() to signal completion
      }
    });
});

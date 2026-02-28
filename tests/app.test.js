const request = require('supertest');
const app = require('../index');
const coreService = require('../services/core');
jest.mock('../services/core');
// Test API endpoint to get all tasks
describe('GET /api/tasks', () => {
  it('should return all tasks', async () => {
    const tasks = [{ _id: 1, name: 'Task 1' }, { _id: 2, name: 'Task 2' }];
    coreService.getTasks.mockResolvedValue(tasks);
    const response = await request(app).get('/api/tasks');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(tasks);
  });
});
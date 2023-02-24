const request = require('supertest');
const app = require('../app');

describe('test sum endpoint', () => {
    it("should return 3", async () => {
        const res = await request(app).post('/sum').send({ a:1, b:2 });
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(3);
    });    
});

describe('test sum endpoint params validation', () => {
    it("should fail because one param is incorrect type", async () => {
        const res = await request(app).post('/sum').send({ a:'a', b:2 });
        expect(res.statusCode).toBe(400);
        expect(res.body.errors.length).toBeGreaterThan(0);        
    });    
    it("should fail because both params are incorrect types", async () => {
        const res = await request(app).post('/sum').send({ a:'a', b: 'b' });
        expect(res.statusCode).toBe(400);
        expect(res.body.errors.length).toBeGreaterThan(1);
    });
    it("should fail because params are missing", async () => {
        const res = await request(app).post('/sum');
        expect(res.statusCode).toBe(400);
        expect(res.body.errors.length).toBeGreaterThan(1);
    });    
});
const Request = require("request");

describe("Order Test", () => {
    let token = '';
    const url = "http://0.0.0.0:3000";
    beforeAll((done) => {
        Request.get(`${url}/users/generatetoken`, (error, response, body) => {
            token = JSON.parse(response.body).token;
            done();
        });
    });

    it("/users/all All Users API", (done) => {
        let status = 0;
        Request.get({ url: `${url}/users/all`, headers: { 'x-auth-token': token } }, (error, response, body) => {
            console.log(response.statusCode);
            status = response.statusCode;
            expect(status).toBe(200);
            done();
        });
    });

    it("/users/id Users By ID API", (done) => {
        let status = 0;
        Request.get({ url: `${url}/users/1`, headers: { 'x-auth-token': token } }, (error, response, body) => {
            console.log(response.statusCode);
            status = response.statusCode;
            expect(status).toBe(200);
            done();
        });
    });

    it("Create User", (done) => {
        let status = 0;
        let newuser = {
            firstname: 'shivani',
            lastname: 'gupta',
            password: 'shivani'
        }
        Request.post(`${url}/users/`, { json: true, body: newuser, headers: { 'x-auth-token': token } }, (error, response, body) => {
            console.log(response.statusCode);
            status = response.statusCode;
            expect(status).toBe(200);
            done();
        });
    });

});
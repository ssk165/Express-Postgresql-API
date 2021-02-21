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
    it("/order/id Test where id = userid", (done) => {
        let status = 0;
        Request.get({url:`${url}/orders/2`,headers:{'x-auth-token':token}}, (error, response, body) => {
            console.log(response.statusCode);
            status = response.statusCode;
            expect(status).toBe(200);
            done();
        });
    });

});
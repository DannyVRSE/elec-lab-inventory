import request from "supertest";
import server from "../../main";

describe("GET /items", () => {
    it("Should return json", async () => {
        return request(server)
            .get("/api/v1/items")
            .expect("Content-Type", /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                            id: expect.any(Number),
                            manufacturer: expect.any(String),
                            model: expect.any(String),
                            lab_serial: expect.any(String),
                            manufacturer_serial: expect.any(String),
                            condition: expect.any(String),
                            categoryId: expect.any(Number)
                        })
                    ])
                )
            })
    })
});

describe("POST /items", () => {
    it("Should return json", async () => {
        return request(server)
            .post("/api/v1/items")
            .send({
                manufacturer: "test2",
                model: "test2",
                lab_serial: "test2",
                manufacturer_serial: "test2",
                condition: "test2",
                category: 1
            })
            .expect("Content-Type", /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(

                    expect.objectContaining({
                        message: expect.any(String)
                    })

                )
            })
    })
})
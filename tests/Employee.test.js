const Employee = require("../lib/Employee");

describe ("testing Employee.js class",() => {
    describe ("test costructor method", () => {
        it("should return an object", () => {
            let expectedOutput = {
                id: 2,
                name: "Fiama",
                email: "fiama_gaitan92@hotmail.com",
            }
            let empObj = new Employee (2, "Fiama", "fiama_gaitan92@hotmail.com")
            expect(empObj.name).toEqual(expectedOutput.name)
            expect(empObj.email).toEqual(expectedOutput.email)
            expect(empObj.id).toEqual(expectedOutput.id)
        })

    })

    // describe("test getEmail function", () => {

    // })

})
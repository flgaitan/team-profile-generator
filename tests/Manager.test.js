const Manager = require("../lib/Manager");

describe ("testing Manager.js class",() => {
    describe ("test costructor method", () => {
        it("should return an object", () => {
            let expectedOutput = {
                name: "Fiama",
                id: 2,
                email: "fiama_gaitan92@hotmail.com",
                
            }
            let empObj = new Manager (2, "Fiama", "fiama_gaitan92@hotmail.com")
            expect(empObj.name).toEqual(expectedOutput.name)
            expect(empObj.email).toEqual(expectedOutput.email)
            expect(empObj.id).toEqual(expectedOutput.id)
            //expect(empObj.github).toEqual(expectedOutput.github)
        })

    })

     describe("test getSchool function", () => {
         it("should return an object", () => {
           let expectedOutput = {
              name: "Fiama",
              id: 2,
              email: "fiama_gaitan92@hotmail.com",
              officeNumber: "773202luna"
           }
            let empObj2 = new Manager (2, "Fiama", "fiama_gaitan92@hotmail.com", "773202luna")
            expect(empObj2.officeNumber).toEqual(expectedOutput.officeNumber)
        
        })
    })

     describe("test getRole function", () => {
         it("should return role value", () => {
           let expectedOutput = {
             name: "Fiama",
              id: 2,
              email: "fiama_gaitan92@hotmail.com",
              officeNumber: "773202luna",
              role: "Manager"
           }
            let empObj2 = new Manager (2, "Fiama", "fiama_gaitan92@hotmail.com", "773202luna", "Manager")
            expect(empObj2.role).toEqual(expectedOutput.getRole)
       
        })
    })


})
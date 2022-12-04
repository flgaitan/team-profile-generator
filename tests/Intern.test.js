const Intern = require("../lib/Intern");

describe ("testing Intern.js class",() => {
    describe ("test costructor method", () => {
        it("should return an object", () => {
            let expectedOutput = {
                name: "Fiama",
                id: 2,
                email: "fiama_gaitan92@hotmail.com",
                
            }
            let empObj = new Intern (2, "Fiama", "fiama_gaitan92@hotmail.com")
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
              school: "Northwestern"
           }
            let empObj2 = new Intern (2, "Fiama", "fiama_gaitan92@hotmail.com", "Northwestern")
            expect(empObj2.school).toEqual(expectedOutput.school)
        
        })
    })

     describe("test getRole function", () => {
         it("should return role value", () => {
           let expectedOutput = {
             name: "Fiama",
              id: 2,
              email: "fiama_gaitan92@hotmail.com",
              school : "Northwestern",
              role: "Intern"
           }
            let empObj2 = new Intern (2, "Fiama", "fiama_gaitan92@hotmail.com", "Northwestern", "Intern")
            expect(empObj2.role).toEqual(expectedOutput.getRole)
       
        })
    })




})
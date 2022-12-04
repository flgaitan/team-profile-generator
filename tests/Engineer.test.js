const Engineer = require("../lib/Engineer");

describe ("testing Engineer.js class",() => {
    describe ("test costructor method", () => {
        it("should return an object", () => {
            let expectedOutput = {
                name: "Fiama",
                id: 2,
                email: "fiama_gaitan92@hotmail.com",
                
            }
            let empObj = new Engineer (2, "Fiama", "fiama_gaitan92@hotmail.com", "githubUsername")
            expect(empObj.name).toEqual(expectedOutput.name)
            expect(empObj.email).toEqual(expectedOutput.email)
            expect(empObj.id).toEqual(expectedOutput.id)
            //expect(empObj.github).toEqual(expectedOutput.github)
        })

    })

     describe("test getGithub function", () => {
         it("should return an object", () => {
           let expectedOutput = {
              name: "Fiama",
              id: 2,
              email: "fiama_gaitan92@hotmail.com",
              github_username : "githubUsername"
           }
            let empObj2 = new Engineer (2, "Fiama", "fiama_gaitan92@hotmail.com", "githubUsername")
            expect(empObj2.github_username).toEqual(expectedOutput.github_username)
        
        })
    })

    describe("test getRole function", () => {
        it("should return role value", () => {
          let expectedOutput = {
             name: "Fiama",
             id: 2,
             email: "fiama_gaitan92@hotmail.com",
             github_username : "githubUsername",
             role: "Engineer"
          }
           let empObj2 = new Engineer (2, "Fiama", "fiama_gaitan92@hotmail.com", "githubUsername", "Engineer")
           expect(empObj2.role).toEqual(expectedOutput.getRole)
       
       })
   })




})
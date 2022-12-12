

const generateMan = function (manager) {
    return `
    <div class="col">
    <div class="card h-100">
        <h1>${manager.name}</h1>
        <div class="card-body">
            <h1 class="card-title">Manager</h1>
            <span class="card-text">Hogwarts</span>
            <p class="ID">${manager.id}</p>
            <p class="officeNumber">${manager.officeNumber}</p>
            <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p
        </div>
    </div>
    </div>
    `
}

const generateEng = function (engineer) {
    return `
    <div class="col">
             <div class="card h-100">
                <h2>${engineer.name}</h2>
                    <div class="card-body">
                        <h2 class="card-title">Engineer</h2>
                        <span class="card-text">Slytherin Dungeon</span>
                        <p class="ID">${engineer.id}</p>
                        <p class="github_username"><a href="${engineer.github_username}">${engineer.github_username}</a></p>
                        <p class="email">Email: <a href="mailto:e${engineer.email}">${engineer.email}</a></p>
                    </div>
                </div>
            </div>
    `
}

const generateIntern = function (intern) {
    return `
    <div class="col">
            <div class="card h-100">
                <h3>${intern.name}</h3>
                    <div class="card-body">
                        <h3 class="card-title">Intern</h3>
                        <span class="card-text">Slytherin House</span>
                        <p class="ID">${intern.id}</p>
                        <p class="school">${intern.school}</p>
                        <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                    </div>
                </div>
             </div>
    `
};
JSON.st

//bind this array to page that will later produce your html file

generateIndexHTML = data => {
    //let Data = JSON.stringify();
    membersArray = [];
    console.log("contents of data: ");

    //loop so it can go through all
    
    for (let i=0; i<data.length; i++){
        const team = data[i];
        const role = team.getRole();

    //bind manager func
    if (role === 'Manager'){
        const manCard = generateMan(team);

        membersArray.push(manCard);
    }

    //bind engineer
    if (role === 'Engineer'){
        const engCard = generateEng(team);

        membersArray.push(engCard);
    }

    //bind intern
    if (role === 'Intern'){
        const internCard = generateIntern(team);

        membersArray.push(internCard);
    }
    }
//join strings together
    const memberCards = membersArray.join('')
//return to page
    const generate = generateIndex(memberCards);
    return generate;
}

//rest of hmtl script will go here
const generateIndex = function (memberCards){
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Software Engineering Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
</head>

<body>
    <header>
        <nav class="navbar navbar-dark bg-dark" id="navbar">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1">TEAM PROFILE</span>
            </div>
        </nav>
    </header>
    <main>
        <div class="container text-center" id="team-cards">
            <div class="row">
                <div class="col">Introducing our team!</div>
                <!--Team cards-->
                ${memberCards}
               <div class="row row-cols-1 row-cols-lg-3 g-4">
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossorigin="anonymous"></script>
</body>

</html> 

    `
};

module.exports = generateIndexHTML;
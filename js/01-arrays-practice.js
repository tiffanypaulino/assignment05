//STEP 1
let movies = ["The Godfather", "Breakfast at Tiffany\'s", "Scarface", "Goodfellas", "Elf"]
    window.console.log(movies[1]);
//STEP 2
let movies = new Array(5);
movies[0] = "The Godfather";
movies[1] = "Breakfast at Tiffany\'s";
movies[2] = "Scarface";
movies[3] = "Goodfellas";
movies[4] = "Elf";
window.console.log(movies[0]);
//STEP 3
let movies = new Array(6);
movies[0] = "The Godfather";
movies[1] = "Breakfast at Tiffany\'s";
movies[2] = "Scarface";
movies[3] = "Goodfellas";
movies[4] = "Elf";
movies[5] = "National Lampoon\'s Christmas Vacation";
window.console.log(movies);
//STEP 4
let movies = ["Scarface", "Fight Club", "The Irishmen", "The Godfather 2", "Blow"];
delete movies[0];
window.console.log(movies);
//STEP 5
let i;
let movies = ["Scarface", "Breakfast at Tiffany\'s", "Fight Club", "Blow", "Goodfellas", "The Irishmen", "The Godfather"];
for (i = 0; i < movies.length; i += 1) {
    window.console.log(movies[i]);
}
//STEP 6
let movie;
let movies = ["Scarface", "Breakfast at Tiffany\'s", "Fight Club", "Blow", "Goodfellas", "The Irishmen", "The Godfather"];
for (movie in movies) {
    window.console.log(movies[movie]);
}
//STEP 7
let movie;
let movies = ["Scarface", "Breakfast at Tiffany\'s", "Fight Club", "Blow", "Goodfellas", "The Irishmen", "The Godfather"];
for (movie in movies) {
    movies.sort();
    window.console.log(movies[movie]);

//STEP 8
let movies = ["Scarface", "Breakfast at Tiffany\'s", "Fight Club", "Blow", "Goodfellas", "The Irishmen", "The Godfather"];
    window.document.write('Movies I like:' + '<br>' + '<br>')
    for (i = 0, i < movies.length; i +=1) {
        window.document.write(movies[i] + '<br>';
    }
let regrets = ["Child\'s Play", "In the Tall Grass", "Angel has Fallen"];
    window.document.write('<br>' + 'Movies I regret:' + '<br>' + '<br>')
    for (i = 0; i < regrets.length; i += 1) {
        window.document.write(regrets[i] + '<br>');
    }
//STEP 9
let movies = ["Scarface", "Breakfast at Tiffany\'s", "Fight Club", "Blow", "Goodfellas", "The Irishmen", "The Godfather"];
let regrets = ["Child\'s Play", "In the Tall Grass", "Angel has Fallen"];
let allMovies = movies.concat(regrets)
    window.document.write(allMovies.reverse());
//STEP 10
let movies = ["Scarface", "Breakfast at Tiffany\'s", "Fight Club", "Blow", "Goodfellas", "The Irishmen", "The Godfather"];
let regrets = ["Child\'s Play", "In the Tall Grass", "Angel has Fallen"];
let allMovies = movies.concat(regrets)
    window.document.write(allMovies.reverse());  
    window.console.log(allMovies[9]);
//STEP 11
let movies = ["Scarface", "Breakfast at Tiffany\'s", "Fight Club", "Blow", "Goodfellas", "The Irishmen", "The Godfather"];
let regrets = ["Child\'s Play", "In the Tall Grass", "Angel has Fallen"];
let allMovies = movies.concat(regrets)
    window.document.write(allMovies.reverse());  
    allMovies = allMovies.slice(9);
    window.console.log(allMovies);
//STEP 12
let movies = ["Scarface", "Breakfast at Tiffany\'s", "Fight Club", "Blow", "Goodfellas", "The Irishmen", "The Godfather"];
let regrets = ["Child\'s Play", "In the Tall Grass", "Angel has Fallen"];
let allMovies = movies.concat(regrets)
    window.document.write(allMovies.reverse() + '<br>' + '<br>');  
    allMovies.splice( //ADD MORE MOVIES HERE*******************************
    window.document.write(allMovies);
//STEP 13
let employee1 = [];
let employee2 = [];
employee1['id'] = 0409;
employee1['name'] = 'Matt';
employee1['title'] = 'General Manager';
employee1['department'] = 'Food & Beverage';
employee1['current'] = true;
employee2['id'] = 8433;
employee2['name'] = 'Aulii';
employee2['title'] = 'Princess';
employee2['department'] = 'Universe';
employee2['current'] = true;
        
let employee;
let employees = employee1.concat(employee2);
for (employee in employees) {
    console.log(employees[employee])
}
console.log(employee2['name']);
//STEP 14
let workerA = [];
let workerB = [];
workerA['id'] = 0522;
workerA['name'] = 'LB';
workerA['title'] = 'Lead';
workerA['department'] = 'Security';
workerA['current'] = true;
workerB['id'] = 0916;
workerB['name'] = 'Malia';
workerB['title'] = 'Mixologist';
workerB['department'] = 'F&B';
workerB['current'] = true;
//STEP 15
let worker1 = [];
worker1['employeeId'] = 0098;
worker1['name'] = 'Sara';
worker1['title'] = 'Hostess';
worker1['departments'] = 'FOH';
worker1['current'] = true;
let worker2 = [];
worker2['employeeId'] = 0719;
worker2['name'] = 'Aaron';
worker2['title'] = 'Line Cook';
worker2['departments'] = 'BOH';
worker2['current'] = true;
let worker3 = []
worker3['employeeId'] = 8398;
worker3['name'] = 'Paris';
worker3['title'] = 'Sommelier';
worker3['departments'] = 'Beverage';
worker3['current'] = false;

let workers = [[worker1], [worker2], [worker3]];
    for (let b = 0; b < workers.length; b ++) 
    {
        if ((workers[b][0]['current']) === true)
        {
            console.log('current worker: ');
            console.log(workers[b][0]['name']);
        }
        else
        {
            console.log(' ');
            console.log('ex-worker: ');
            console.log(workers[b][0]['name'] + ' is no longer employed.');
        }
    }

//STEP 16
let favoriteMovies = [["Scarface", 1], ["Breakfast at Tiffany\'s", 2], ["Wolf of Wallstreet", 3], ["Elf", 4], ["The Godfather", 5]];
for (let f = 0; f < favoriteMovies.length; f++) 
{
let movies = favoriteMovies[f].filter(function (item) 
{
    return typeof item ==='string';
});
console.log(movies);
}
//STEP 17
let employees = ['Lisa', 'Staci', 'Keolani', 'Pili', 'Kevin'];
let employee = function(employee)
{
    console.log('employees: \n\n')
    for (let m = 0; m < employee.length; m++) 
    {
        console.log(employee[m].toUpperCase());
    }
};
employee(employees);
//STEP 18
function filterValues(data) 
{
    data = data.filter(isEligible);
    return data;
}
function isEligible(value) 
{
    if(value !== false || value !== null || value !== 0 || value !== "") 
    {
        return value;
    }
}
console.log(filterValues([58, '', 'abcd', true, null, false, 0]));

//STEP 19
function thing(things) 
{
    return things[Math.floor(Math.random() * things.length)];
}
const things = [123, 456, 789, 987, 654, 321, 000];
console.log(thing(things));

//STEP 20
console.log()
  let arrToSort =  [12, 19, 33, 79, 27]
const bubbleSort = arr => {

    for (let i = 0; i < arr.length - 1; i++) {
        let change = false;
        for (let j = 0; j < arr.length - (i + 1); j++) {
            if (arr[j] > arr[j + 1]) {
                change = true;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
        if (!change) break;
    }
    return arr;
};

const quickSort = arr => {
    if (arr.length < 2) return arr;
    const pivot = arr[Math.floor(Math.random() * arr.length)];

    let left = [];
    let equal = [];
    let right = [];

    for (let element of arr) {
        if (element > pivot) right.push(element);
        else if (element < pivot) left.push(element);
        else equal.push(element);
    }
    return quickSort(left)
        .concat(equal)
        .concat(quickSort(right));
};

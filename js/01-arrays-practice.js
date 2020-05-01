//STEP 1
let movies = ["The Godfather", "Breakfast at Tiffany's", "Scarface", "Goodfellas", "Elf"]
    window.console.log(movies[1]);
//STEP 2
let movies = new Array(5);
movies[0] = "The Godfather";
movies[1] = "Breakfast at Tiffany's";
movies[2] = "Scarface";
movies[3] = "Goodfellas";
movies[4] = "Elf";
window.console.log(movies[0]);
//STEP 3
let movies = new Array(6);
movies[0] = "The Godfather";
movies[1] = "Breakfast at Tiffany's";
movies[2] = "Scarface";
movies[3] = "Goodfellas";
movies[4] = "Elf";
movies[5] = "National Lampoon's Christmas Vacation";
window.console.log(movies);
//STEP 4
let movies = ["Scarface", "Fight Club", "The Irishmen", "The Godfather 2", "Blow"];
delete movies[0];
window.console.log(movies);
//STEP 5
let i;
let movies = ["Scarface", "Breakfast at Tiffany's", "Fight Club", "Blow", "Goodfellas", "The Irishmen", "The Godfather"];
for (i = 0; i < movies.length; i += 1) {
    window.console.log(movies[i]);
}
//STEP 6
let movie;
let movies = ["Scarface", "Breakfast at Tiffany's", "Fight Club", "Blow", "Goodfellas", "The Irishmen", "The Godfather"];
for (movie in movies) {
    window.console.log(movies[movie]);
}
//STEP 7
let movie;
let movies = ["Scarface", "Breakfast at Tiffany's", "Fight Club", "Blow", "Goodfellas", "The Irishmen", "The Godfather"];
for (movie in movies) {
    movies.sort();
    window.console.log(movies[movie]);

//STEP 8
let movies = ["Scarface", "Breakfast at Tiffany's", "Fight Club", "Blow", "Goodfellas", "The Irishmen", "The Godfather"];
    window.document.write('Movies I like:' + '<br>' + '<br>')
    for (i = 0, i < movies.length; i +=1) {
        window.document.write(movies[i] + '<br>';
    }
let regrets = ["Child's Play", "In the Tall Grass", "Angel has Fallen"];
    window.document.write('<br>' + 'Movies I regret:' + '<br>' + '<br>')
    for (i = 0; i < regrets.length; i += 1) {
        window.document.write(regrets[i] + '<br>');
    }
//STEP 9
let movies = ["Scarface", "Breakfast at Tiffany's", "Fight Club", "Blow", "Goodfellas", "The Irishmen", "The Godfather"];
let regrets = ["Child's Play", "In the Tall Grass", "Angel has Fallen"];
let allMovies = movies.concat(regrets)
    window.document.write(allMovies.reverse());
//STEP 10
let movies = ["Scarface", "Breakfast at Tiffany's", "Fight Club", "Blow", "Goodfellas", "The Irishmen", "The Godfather"];
let regrets = ["Child's Play", "In the Tall Grass", "Angel has Fallen"];
let allMovies = movies.concat(regrets)
    window.document.write(allMovies.reverse());  
    window.console.log(allMovies[9]);
//STEP 11
let movies = ["Scarface", "Breakfast at Tiffany's", "Fight Club", "Blow", "Goodfellas", "The Irishmen", "The Godfather"];
let regrets = ["Child's Play", "In the Tall Grass", "Angel has Fallen"];
let allMovies = movies.concat(regrets)
    window.document.write(allMovies.reverse());  
    allMovies = allMovies.slice(9);
    window.console.log(allMovies);
//STEP 12
let movies = ["Scarface", "Breakfast at Tiffany's", "Fight Club", "Blow", "Goodfellas", "The Irishmen", "The Godfather"];
let regrets = ["Child's Play", "In the Tall Grass", "Angel has Fallen"];
let allMovies = movies.concat(regrets)
    window.document.write(allMovies.reverse() + '<br>' + '<br>');  
    allMovies.splice( //ADD MORE MOVIES HERE*******************************
    window.document.write(allMovies);
//STEP 13
let employee1 = [];
let employee2 = [];
employee1['id'] = 1267;
employee1['name'] = 'Ralph';
employee1['title'] = 'overseer';
employee1['department'] = 'R&D';
employee1['current'] = true;
employee2['id'] = 0307;
employee2['name'] = 'Dobie';
employee2['title'] = 'Queen Bee';
employee2['department'] = 'security';
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
workerA['id'] = 1115;

workerA['name'] = 'Bean';

workerA['title'] = 'flirt';

workerA['department'] = 'canine resources';

workerA['current'] = true;

workerB['id'] = 1206;

workerB['name'] = 'Bandit';

workerB['title'] = 'Prince';

workerB['department'] = '';

workerB['current'] = true;
//STEP 15

//STEP 16

//STEP 17

//STEP 18

//STEP 19

//STEP 20


// inventory
function view(inventory) {
    // let i;
    // for (i = 0; i < inventory.length; i += 1) {
    //     window.console.log(
    //         inventory[i].sku + '\t' +  
    //         inventory[i].product + '\t (' +
    //         inventory[i].quantity + ')\t' + '$' +
    //         inventory[i].cost);
    // }
    
}

function getInventory() {
    const tshirt = [], jeans = [], jacket = [], hat = [], socks = [];
    let inventory;

    tshirt.sku = 101;
    tshirt.product = "TShirt";
    tshirt.quantity = 17;
    tshirt.cost = 24.99;

    jeans.sku = 102;
    jeans.product = "Jeans";
    jeans.quantity = 25;
    jeans.cost = 44.99;

    jacket.sku = 103;
    jacket.product = "Jacket";
    jacket.quantity = 11;
    jacket.cost = 49.99;

    hat.sku = 2233;
    hat.product = "Hats";
    hat.quantity = 17;
    hat.cost = 19.99;

    socks.sku = 105;
    socks.product = "Socks";
    socks.quantity = 35;
    socks.cost = 14.99;

    inventory = [tshirt, jeans, jacket, hat, socks];
    return inventory;

}

function displayMenu() {
    window.console.log('');
    window.console.log('INVENTORY MANAGEMENT MENU');
    window.console.log('show - show inventory');
    window.console.log('');
}

window.addEventListener("load", () => {
    let inventory, command;

    displayMenu();
    inventory = getInventory();

    while(true) {  //EVERY APPLICATION WE BUILD MOVING FORWARD WILL HAVE THIS CODE!!!!! 
        command = window.prompt('Enter comand');
        if  (command !== null) {
            if (command === 'show') {
                view(inventory);
            } else {
                window.alert('Not a valid command');
            }
        } else {
            break;
        }
    }
});
// lab 9 has update and view function, modify to mulit

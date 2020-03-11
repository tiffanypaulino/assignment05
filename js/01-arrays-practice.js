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
let movies = ["Scarface", "Breakfast at Tiffany's", "Fight Club", "Blow", "Goodfellas", "The Irishmen", "The Godfather"];
window.console.log(movies.sort());

//STEP 8

//STEP 9

//STEP 10

//STEP 11

//STEP 12

//STEP 13

//STEP 14

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

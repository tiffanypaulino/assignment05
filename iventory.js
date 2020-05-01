function displayMenu() 
{
window.console.log("Pure Skin Lounge");
window.console.log('');
window.console.log('PRODUCTS');
window.console.log('view - show all products');
window.console.log('update - update stock');
window.console.log('exit - leave the store');
window.console.log('');
}

let product;
let products;
function view(products) {  
    for (product of products) {
        console.log(product[0] + " " + product[1] + " (" + product[2] + ") $" + product[3]);
    }
}

function update(inventory)
{
    let i;
    let index = -1;

    let sku = parseInt(window.prompt('enter sku you would like to update'));
    for (i = 0; i < inventory.length; i++) 
    {
        if (inventory[i][0] == sku)
            index = i;
    }
        if (index > -1) 
        { 
            let qty = parseInt(window.prompt('New inventory amount?'));
            //to verify input is a number:
            if (isNaN(qty)) 
            {
                window.prompt('Must be a number')
            }
            else
            {
                inventory[index][2] = qty;
                localStorage.invList = inventory.join('|');  
                // console.log(localStorage.invList);//shows the new inventory as a string
                view(inventory);
            }
        }
        function getInventory()
{
    let storage;
    let inventory;
    storage = localStorage.getItem('invList') || ''; 
        if (storage.length > 0)
        {
            inventory = storage.split('|'); 
            for (i in inventory) 
            {
                inventory[i] = inventory[i].split(',');  
            }
            for (i in inventory)
            {
                inventory[i][0] = Number(inventory[i][0]); 
                inventory[i][2] = Number(inventory[i][2]);
                inventory[i][3] = Number(inventory[i][3]);
            }
            console.log(inventory);
        } 
        else
        {
            inventory = [
            [123, 'cleanser', 1, 43.00],
            [456, 'serum', 2, 110.00], 
            [789, 'exfoliator', 4, 49.00], 
            [321, 'retinol', 6, 80.00],
            [654, 'spf', 8, 43.00]
            ];
        }
    return inventory;
}

function main () 
{
    let inventory = getInventory();
    let command;

    displayMenu();

    while (true) 
    {
        command = window.prompt("enter valid command");
        if (command !== null) 
        {
            if (command === 'view') 
            {
                view(inventory);
            } 
            else if (command === 'update') 
            {
                update(inventory);
            }
            else if (command === 'exit')
            {
                break;
            }
            else
            {
                window.alert('that is not a valid command');
            }
        } 
        else
        {
            break;
        }
    }
}
main();
}

let guests = prompt('How many people are coming to your wedding?');

function getPrice(guests){
    let cost = 0;
    // Your code here
    if (guests >= 201) {
        cost = 20000
    }
    else if (guests >=101) {
        cost = 15000
    }
    else if (guests >=51) {
        cost = 10000
    }
    else {
        cost= 4000
    }

    return cost;
}

let price = getPrice(guests);
console.log('Your wedding will cost '+price+' dollars');

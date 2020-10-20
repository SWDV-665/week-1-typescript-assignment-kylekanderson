// SWDV-665 Week 1 Assignment
// Kyle Anderson

const container: HTMLElement | any = document.getElementById("app");

class Grocery {
    name: string;
    quantity: number;
    itemPrice: number;
    stockNum: number;

    constructor(name: string, quantity: number, itemPrice: number, stockNum: number) {
        this.name = name;
        this.quantity = quantity;
        this.itemPrice = itemPrice;
        this.stockNum = stockNum;
    }

    showGrocery(grocery: Grocery) {
        let output: string = `
        <div class="grocery-card">
            <h2 class="card--name">${grocery.name}</h2>
            <p class="card--quantity">Quantity: ${grocery.quantity}</p>
            <p class="card--itemPrice">Price: $${grocery.itemPrice}</p>
            <p class="card--stockNum">Stock #: ${grocery.stockNum}</p>
        </div>
    `
        container.innerHTML += output
    }
}

let milk = new Grocery('Milk', 42, 2.99, 1);
let bread = new Grocery('Bread', 100, 1.99, 2);
let eggs = new Grocery('Eggs', 60, 3.99, 3);

let groceries = [milk, bread, eggs];

groceries.forEach(function (grocery) {
    grocery.showGrocery(grocery);
})

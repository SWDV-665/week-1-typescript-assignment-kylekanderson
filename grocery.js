// SWDV-665 Week 1 Assignment
// Kyle Anderson
var container = document.getElementById("app");
var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, itemPrice, stockNum) {
        this.name = name;
        this.quantity = quantity;
        this.itemPrice = itemPrice;
        this.stockNum = stockNum;
    }
    Grocery.prototype.showGrocery = function (grocery) {
        var output = "\n        <div class=\"grocery-card\">\n            <h2 class=\"card--name\">" + grocery.name + "</h2>\n            <p class=\"card--quantity\">Quantity: " + grocery.quantity + "</p>\n            <p class=\"card--itemPrice\">Price: $" + grocery.itemPrice + "</p>\n            <p class=\"card--stockNum\">Stock #: " + grocery.stockNum + "</p>\n        </div>\n    ";
        container.innerHTML += output;
    };
    return Grocery;
}());
var milk = new Grocery('Milk', 42, 2.99, 1);
var bread = new Grocery('Bread', 100, 1.99, 2);
var eggs = new Grocery('Eggs', 60, 3.99, 3);
var groceries = [milk, bread, eggs];
groceries.forEach(function (grocery) {
    grocery.showGrocery(grocery);
});

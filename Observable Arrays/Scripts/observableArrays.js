//defining observable array
var observableArr = ko.observableArray();

//Add some values
observableArr.push('Matt');

// This observable array initially contains two objects
var techArr = ko.observableArray([
    { name: "John", job: "Software Developer" },
    { name: "Matt", job: "Web Developer" }
]);

//Reading information from an observableArray
console.log('The length of the array is ' + techArr().length);
console.log('The first element is ' + techArr()[0].name);



//Properties and Methods of observableArray
//indexOf
//splice
//pop, push, shift, unshift, reverse, sort, splice

var ListModel = function (items) {
    this.items = ko.observableArray(items);
    this.itemToAdd = ko.observable("");
    this.addItem = function () {
        if (this.itemToAdd() != "") {
            this.items.push(this.itemToAdd());
            this.itemToAdd("");
        }
    }.bind(this);
};

ko.applyBindings(new ListModel(["Master JavaScript", "Master jQuery", "Master KnockoutJS"]));






















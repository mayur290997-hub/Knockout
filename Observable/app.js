/* Understanding MVVM Pattern */
//The ViewModel

var viewModelTask = {
    todo : "Understanding MVVM with KnockoutJS",
    completed : "No",
    createdDate : "08-Dec-2013"
}

var viewModelPerson = {
    firstName: ko.observable("Matt"),
    lastName: ko.observable("Daemon"),
}

var viewModelPerson1 = function () {
    var self = this;
    firstName = ko.observable("Matt"),
        lastName = ko.observable("Daemon"),
        fullname = ko.computed({
        read: function () {
            return self.firstName() + " " + self.lastName();
        },
        write: function (val) {
            var arrName = val.split(' ');
            self.firstName(arrName[0]);
            self.lastName(arrName[1]);
        }
    });
}

ko.applyBindings(viewModelPerson1);
//viewModelPerson.firstName('John');

//To read observable current value
/*
viewModelPerson.firstName();
viewModelPerson.lastName();

//To write observable values
viewModelPerson.firstName('Matt');
viewModelPerson.lastName('Daemon');
//or
viewModelPerson.firstName('Matt').lastName('Daemon');
*/
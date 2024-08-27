/* Understanding MVVM Pattern */
//The ViewModel

var viewModelTask = {
    todo : "Understanding MVVM with KnockoutJS",
    completed : "No",
    createdDate : "08-Dec-2013"
}

var viewModelPerson = {
    firstName: ko.observable("Matt"),
    lastName:ko.observable("Daemon")
}

ko.applyBindings(viewModelPerson);
viewModelPerson.firstName('John');

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
function AppViewModel (){
    this.SomeValue = ko.observable("Show Less");
    this.ShowLessMore = function(){
        if (this.SomeValue() == "Show Less"){
            this.SomeValue("Show More");
        }
        else if(this.SomeValue() == "Show More"){
            this.SomeValue("Show Less");
        }
    };
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());
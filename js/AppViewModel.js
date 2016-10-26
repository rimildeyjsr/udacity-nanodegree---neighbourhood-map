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

    this.SFlocations = ko.observableArray (
        [
            {title: 'Alcatraz Islands', location: {lat: 37.8270 , lng: -122.4230}},
            {title: "Fisherman's Wharf", location: {lat: 37.8080 , lng: -122.4177 }},
            {title: 'Golden Gate Bridge', location: {lat: 37.8199 , lng: -122.4783 }},
            {title: 'Union Square', location: {lat: 37.7879 , lng: -122.4075 }},
            {title: 'Pier 39', location: {lat: 37.8087 , lng: -122.4098 }},
            {title: 'Golden Gate Park', location: {lat: 37.7694 , lng: -122.4862 }},
            {title: 'Chinatown', location: {lat: 37.7941 , lng: -122.4078 }},
            {title: 'AT&T Park', location: {lat: 37.7786 , lng: -122.3893 }},
            {title: 'Lombard Street', location: {lat: 37.8021 , lng: -122.4187 }},
            {title: 'Ghirardelli Square', location: {lat: 37.8060 , lng: -122.4230 }},
            {title: 'Coit Tower', location: {lat: 37.8024 , lng: -122.4058 }},
            {title: 'Aquarium of the Bay', location: {lat: 37.8088 , lng: -122.4093 }},
            {title: 'Presisdio of San Francisco', location: {lat: 37.7989 , lng: -122.4662 }},
            {title: 'Legion of Honor', location: {lat: 37.7845 , lng: -122.5008 }},
            {title: 'Twin Peaks', location: {lat: 37.7521 , lng: -122.4474 }},
            {title: 'Angel Islands', location: {lat: 37.8609 , lng:-122.4326 }},
            {title: 'San Francisco Zoo', location: {lat: 37.7330 , lng:  -122.5030 }},
            {title: 'Ocean Beach', location: {lat: 37.7594 , lng: -122.5104 }},
        ]
    )

    this.showInfoWindow = function (){

    }
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());
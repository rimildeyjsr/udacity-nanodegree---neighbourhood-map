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
            {title: 'Alcatraz Islands', location: {lat: 37.8270 , lng: -122.4230},marker:null},
            {title: "Fisherman's Wharf", location: {lat: 37.8080 , lng: -122.4177 },marker: null},
            {title: 'Golden Gate Bridge', location: {lat: 37.8199 , lng: -122.4783 },marker: null},
            {title: 'Union Square', location: {lat: 37.7879 , lng: -122.4075 },marker: null},
            {title: 'Pier 39', location: {lat: 37.8087 , lng: -122.4098 },marker: null},
            {title: 'Golden Gate Park', location: {lat: 37.7694 , lng: -122.4862 }, marker: null},
            {title: 'Chinatown', location: {lat: 37.7941 , lng: -122.4078 },marker: null},
            {title: 'AT&T Park', location: {lat: 37.7786 , lng: -122.3893 },marker: null},
            {title: 'Lombard Street', location: {lat: 37.8021 , lng: -122.4187 },marker: null},
            {title: 'Ghirardelli Square', location: {lat: 37.8060 , lng: -122.4230 },marker: null},
            {title: 'Coit Tower', location: {lat: 37.8024 , lng: -122.4058 },marker: null},
            {title: 'Aquarium of the Bay', location: {lat: 37.8088 , lng: -122.4093 },marker: null},
            {title: 'Presisdio of San Francisco', location: {lat: 37.7989 , lng: -122.4662 },marker: null},
            {title: 'Legion of Honor', location: {lat: 37.7845 , lng: -122.5008 },marker: null},
            {title: 'Twin Peaks', location: {lat: 37.7521 , lng: -122.4474 },marker: null},
            {title: 'Angel Islands', location: {lat: 37.8609 , lng:-122.4326 },marker: null},
            {title: 'San Francisco Zoo', location: {lat: 37.7330 , lng:  -122.5030 },marker: null},
            {title: 'Ocean Beach', location: {lat: 37.7594 , lng: -122.5104 },marker: null},
        ]
    )

    this.liClick = function (){
        Infowindow = new google.maps.InfoWindow();
        this.marker = new google.maps.Marker({
            map: map,
            position: this.location,
            title: this.title
        });
        populateInfoWindow(this.marker,Infowindow);
    }
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());
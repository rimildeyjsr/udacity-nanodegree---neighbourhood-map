var map,largeInfowindow,marker; //map,infowindow and marker variable
var markers = []; //array to push markers

function initMap() {
    //function to initialise the map with given coordinates
    map = new google.maps.Map(document.getElementById("map"),{
        center: {lat: 37.7749, lng: -122.4525},
        zoom: 13
    });
    //array of locations in san francisco
    var locations = [
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
    ];


    //variable to store infowindow
    largeInfowindow = new google.maps.InfoWindow();
    //variable to store the bounds
    var bounds = new google.maps.LatLngBounds();

    for (var i = 0; i < locations.length; i++) {

        var position = locations[i].location; //position of the location at ith index
        var title = locations[i].title; //name of the location in question
        //marker created
        marker = new google.maps.Marker({
            map: map,
            position: position,
            title: title,
            animation: google.maps.Animation.DROP,
            id: i
        });
        //push the newly created marker to the array
        markers.push(marker);
        marker.addListener('click', function() {
            //will call the function to populate the infowindow
            populateInfoWindow(this, largeInfowindow);
        });
        //extend boundaries of the map according to the lat long of the place
        bounds.extend(markers[i].position);
    }
    //make sure the map 'fits' to the bounds
    map.fitBounds(bounds);

    function AppViewModel() {

        this.SomeValue = ko.observable("Show Less");

        this.ShowLessMore = function(){
            if (this.SomeValue() == "Show Less"){
                this.SomeValue("Show More");
            }
            else if(this.SomeValue() == "Show More"){
                this.SomeValue("Show Less");
            }
        };

        this.SFlocations = ko.observableArray (locations);


        this.liClick = function (){

            this.marker = new google.maps.Marker({
                map: map,
                position: this.location,
                title: this.title
            });
            markers.push(this.marker);
            populateInfoWindow(this.marker,largeInfowindow);
        }
    }



    // Activates knockout.js
    ko.applyBindings(new AppViewModel());

}

//will populate the infowindow
function populateInfoWindow(marker, infowindow) {
    // Check to make sure the infowindow is not already opened on this marker.
    if (infowindow.marker != marker) {
        infowindow.marker = marker;
        infowindow.setContent('<div>' + marker.title + '</div>');
        infowindow.open(map, marker);
        // Make sure the marker property is cleared if the infowindow is closed.
        infowindow.addListener('closeclick',function(){
            infowindow.marker = null;
        });
    }
}





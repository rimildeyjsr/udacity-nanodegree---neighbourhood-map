var map,largeInfowindow,marker; //map,infowindow and marker variable
var markers = []; //array to push markers

var defaultIcon,clickedIcon; //variables to store different icon colors

function initMap() {
    //function to initialise the map with given coordinates
    map = new google.maps.Map(document.getElementById("map"),{
        center: {lat: 37.7749, lng: -122.4525},
        zoom: 18
    });

    defaultIcon = makeMarkerIcon('F7544B'); //red color default icon
    clickedIcon = makeMarkerIcon('1A911B'); //green color default icon

    //array of locations in san francisco
    var locations = [
        {   title: 'Alcatraz Islands',
            location: {lat: 37.8270 , lng: -122.4230},
            markerRef: null,
            venueId: '4451c80ef964a520a5321fe3'
        },
        {   title: "Fisherman's Wharf",
            location: {lat: 37.8080 , lng: -122.4177 },
            markerRef: null,
            venueId: '4b84871cf964a5204a3a31e3'
        },
        {   title: 'Golden Gate Bridge',
            location: {lat: 37.8199 , lng: -122.4783 },
            markerRef: null,
            venueId: '49d01698f964a520fd5a1fe3'
        },
        {   title: 'Union Square',
            location: {lat: 37.7879 , lng: -122.4075 },
            markerRef: null,
            venueId: '40bbc700f964a520b1001fe3'
        },
        {   title: 'Pier 39',
            location: {lat: 37.8087 , lng: -122.4098 },
            markerRef: null,
            venueId: '409d7480f964a520f2f21ee3'
        },
        {   title: 'Golden Gate Park',
            location: {lat: 37.7694 , lng: -122.4862 },
            markerRef: null,
            venueId: '445e36bff964a520fb321fe3'
        },
        {   title: 'Chinatown',
            location: {lat: 37.7941 , lng: -122.4078 },
            markerRef: null,
            venueId: '49b71814f964a5201a531fe3'
        },
        {   title: 'AT&T Park',
            location: {lat: 37.7786 , lng: -122.3893 },
            markerRef: null,
            venueId: '4bd2177d046076b055357371'
        },
        {   title: 'Lombard Street',
            location: {lat: 37.8021 , lng: -122.4187 },
            markerRef: null,
            venueId: '49f62829f964a520136c1fe3'
        },
        {   title: 'Ghirardelli Square',
            location: {lat: 37.8060 , lng: -122.4230 },
            markerRef: null,
            venueId: '4b819f25f964a5204ab330e3'
        },
        {   title: 'Coit Tower',
            location: {lat: 37.8024 , lng: -122.4058 },
            markerRef: null,
            venueId: '49de821ff964a5205c601fe3'
        },
        {   title: 'Aquarium of the Bay',
            location: {lat: 37.8088 , lng: -122.4093 },
            markerRef: null,
            venueId: '49e4bcfaf964a52028631fe3'
        },
        {   title: 'Presisdio of San Francisco',
            location: {lat: 37.7989 , lng: -122.4662 },
            markerRef: null,
            venueId: '49f62391f964a5200c6c1fe3'
        },
        {   title: 'Legion of Honor',
            location: {lat: 37.7845 , lng: -122.5008 },
            markerRef: null,
            venueId: '44d344bef964a52041361fe3'
        },
        {   title: 'Twin Peaks',
            location: {lat: 37.7521 , lng: -122.4474 },
            markerRef: null,
            venueId: '4c29567f9fb5d13aa2139b57'
        },
        {   title: 'Angel Islands',
            location: {lat: 37.8609 , lng:-122.4326 },
            markerRef: null,
            venueId: '4a6b7ec3f964a520c7ce1fe3'
        },
        {   title: 'San Francisco Zoo',
            location: {lat: 37.7330 , lng:  -122.5030 },
            markerRef: null,
            venueId: '49ca9423f964a520c0581fe3'
        },
        {   title: 'Ocean Beach',
            location: {lat: 37.7594 , lng: -122.5104 },
            markerRef: null,
            venueId: '409ad180f964a520eef21ee3'
        }
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
            icon: defaultIcon,
            animation: google.maps.Animation.DROP,
            id: i
        });
        //push the newly created marker to the array
        locations[i].markerRef = marker;
        markers.push(marker);
        marker.addListener('click', function() {
            //will call the function to populate the infowindow
            this.setIcon(clickedIcon);
            populateInfoWindow(this, largeInfowindow);
        });
        //extend boundaries of the map according to the lat long of the place
        bounds.extend(markers[i].position);
    }
    //make sure the map 'fits' to the bounds
    map.fitBounds(bounds);

    function makeMarkerIcon(markerColor) {
        //makes a marker with a specified color, specified as parameter
        var markerImage = new google.maps.MarkerImage(
            'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
            '|40|_|%E2%80%A2',
            new google.maps.Size(21, 34),
            new google.maps.Point(0, 0),
            new google.maps.Point(10, 34),
            new google.maps.Size(21,34));
        return markerImage;
    }

    function AppViewModel() {
        //implementation of knockout
        this.SomeValue = ko.observable("Show Less");
        this.visibleVal = ko.observable(1);
        this.ShowLessMore = function(){
            //toggles between the string "show more" and "show less" on click
            if (this.SomeValue() == "Show Less"){
                this.SomeValue("Show More");
                this.visibleVal(0);
            }
            else if(this.SomeValue() == "Show More"){
                this.SomeValue("Show Less");
                this.visibleVal(1);
            }
        };

        this.locations = ko.observableArray (locations);

        this.liClick = function (location){
            //opens respective markers' info windows and changes color of the marker
            location.markerRef.setIcon(clickedIcon);
            populateInfoWindow(location.markerRef,largeInfowindow)
        }

        this.colorVal = ko.observable(false);
        this.changeColor = ko.pureComputed(function (){
            //switches color of the heart icon from red to grey and vice versa
            return this.colorVal() ? "red" : "grey";
        });

        this.colorChanger = function(){
            this.colorVal() ? this.colorVal(false) : this.colorVal(true);
        }

        this.filter = ko.observable('');

        this.filteredItems = ko.computed(function(){
            //returns locations based on the filter text entered by the user. Also toggles visibilty of the markers.
            var filter = this.filter().toLowerCase();
            if(!filter){
                for (marker in this.locations()){
                    this.locations()[marker].markerRef.setVisible(true);
                }
                return this.locations();

            }
            else {
                return ko.utils.arrayFilter(this.locations(), function(item) {
                    var match =  stringWith(item.title.toLowerCase(), filter);
                    if (match === true){
                        item.markerRef.setVisible(true);
                    }
                    else {
                        item.markerRef.setVisible(false);
                    }
                    return match;
                });
            }

        },this);


    }

    // Activates knockout.js
    ko.applyBindings(new AppViewModel());

    }

function googleError(){

        alert("Error! Map won't load!");


}

function stringWith (string, startsWith) {
    //checks if the string contains the entered filter text, if yes, returns true else returns false
    if (string.indexOf(startsWith) >= 0){
        return true;
    }
    else{
        return false;
    }
};

//will populate the infowindow
function populateInfoWindow(marker, infowindow) {
    // Check to make sure the infowindow is not already opened on this marker.
    if(infowindow.marker){
        infowindow.marker.setIcon(defaultIcon);
    }
    if (infowindow.marker != marker) {
        infowindow.marker = marker;
        infowindow.setContent('<div>' + marker.title + '</div>');
        infowindow.open(map, marker);
        // Make sure the marker property is cleared if the infowindow is closed.
        infowindow.addListener('closeclick',function(){
            infowindow.marker = null;
            marker.setIcon(defaultIcon);
        });
    }
}

//function to make ajax requests






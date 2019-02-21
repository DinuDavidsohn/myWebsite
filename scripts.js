deg = 0 
function rotateWipProp(deg) {
    var image = document.getElementById('wipPropWrapper')
    image.style.transform = 'rotate(' + deg + 'deg)';
    return deg+= 3
}
setInterval(rotateWipProp(deg), 100)



//https://maps.googleapis.com/maps/api/elevation/json?locations=39.7391536,-104.9847034&key=YOUR_API_KEY
retrieveElevation(39.7391536, -104.9847034)

function retrieveElevation(lat, long) {
    var output = xhttp.open("GET", 'https://maps.googleapis.com/maps/api/elevation/json?locations=' + 
    lat + ',' + long + '&key=AIzaSyBeHN7lUMOhPsZzM_s2HNp3zJtWO32OqJU', true)
    return console.log(output)

}

// function start() {
//   // 2. Initialize the JavaScript client library.
//   gapi.client.init({
//     'apiKey': 'AIzaSyBeHN7lUMOhPsZzM_s2HNp3zJtWO32OqJU',
//     // Your API key will be automatically added to the Discovery Document URLs.
//     'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
//     // clientId and scope are optional if auth is not required.
//     'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
//     'scope': 'profile',
//   }).then(function() {
//     // 3. Initialize and make the API request.
//     return gapi.client.people.people.get({
//       'resourceName': 'people/me',
//       'requestMask.includeField': 'person.names'
//     });
//   }).then(function(response) {
//     console.log(response.result);
//   }, function(reason) {
//     console.log('Error: ' + reason.result.error.message);
//   });
// };
// // 1. Load the JavaScript client library.
// gapi.load('client', start);

// to access the location of user
navigator.geolocation.getCurrentPosition((position) => {
    console.log('longitude ', position.coords.longitude);
    console.log('latitude ', position.coords.latitude);
    console.log('altitude ', position.coords.altitude);
})
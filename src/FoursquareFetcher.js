function FoursquareFetcher() {}

FoursquareFetcher.prototype.composeUri = function(latitude, longitude, query){
	return "https://api.foursquare.com/v2/venues/explore?client_id=J0IWD3NBN2YKHAI5U1GA1S1PJ5WPZYTPX5DSYKOLLC5QCSWO&client_secret=UFJUDAPQZUX5LDPMDHGK3XOPB4QDH5HPA13J1WTP1QPWA0SB&v=20130815&ll="+latitude+","+longitude+"&radius=1000&query="+query;
};
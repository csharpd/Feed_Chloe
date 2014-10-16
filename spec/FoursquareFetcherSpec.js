describe("FoursquareFetcher", function() {
	it("Composes the right uri", function() {
		fetcher = new FoursquareFetcher;
		expectedUri = "https://api.foursquare.com/v2/venues/explore?client_id=J0IWD3NBN2YKHAI5U1GA1S1PJ5WPZYTPX5DSYKOLLC5QCSWO&client_secret=UFJUDAPQZUX5LDPMDHGK3XOPB4QDH5HPA13J1WTP1QPWA0SB&v=20130815&ll=12,23&radius=1000&query=Burger";
		expect(fetcher.composeUri(12, 23, "Burger")).toEqual(expectedUri);
	});
});
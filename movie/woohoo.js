function runThatQuery() {
    console.log ("This function is totally working!");
    

var baseUrl = "http://api.rottentomatoes.com/api/public/v1.0/movies.json?";

var searchQuery = $( "#movieTitleID" ).val();

var myapikey = "avhur33r9p2crbka9cdymnkn";

//construct the Url with our apikey
    var moviesSearchUrl = baseUrl + 'apikey=' + myapikey;

    $.ajax({
      url: moviesSearchUrl + '&q=' + encodeURI(searchQuery),
      dataType: "jsonp",
      success: searchCallback,
  });
}

function searchCallback(data) {  
	console.log("Ajax found some results, and now we are in searchCallback!!");
	console.log (JSON.stringify(data));  


	$("#movieForm").html('I Found ' + data.total + ' results for you!');

	var mymovies = data.movies;

	$.each(mymovies, function(index, movie) {
     $("#movieForm").append('<h3>' + movie.title + '</h3><img src="' + movie.posters.thumbnail + '"><h4>' + movie.ratings.critics_score + '</h4><BR>');
   });
 } 
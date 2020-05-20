
$(document).ready(function() {
	var url = 'https://hn.algolia.com/api/v1/search?query=javascript';
	$.getJSON(url, function(data){
		var cuurentQuote = '';
		var quotes = data.hits;
		$('.read').on('click', function(){
			currentQuote = quotes[Math.floor(Math.random()*quotes.length)];
			$('.quoteBody').html(currentQuote.title);
			$('.quoteAuthor').html(currentQuote.author);
			$('.tweetQuote').attr(
				'href','https://twitter.com/intent/tweet?text='+currentQuote.title + '-'+currentQuote.author
				)
			.attr('target','_blank')
			.attr('disabled',false);
			$('.read').html("Show more");
			//document.getElementsByClassName("quoteBody")[0].innerHTML = currentQuote.title;
		});
		console.log(quotes[0].title)
		console.log(data)

	});
});

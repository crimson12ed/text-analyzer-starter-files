// your code here!
(function() {
"use strict";

function getWordCount(words) {
	return words.length;
}

function getUniqueWordCount(words) {
	var wordCounter = {};

	words.forEach(function(word) {
		if (!(word in wordCounter)) {
			wordCounter[word] = 1;
		}
	});

	return Object.keys(wordCounter).length;
}

function getAverageWordLength(words) {
	var wordCount = getWordCount(words);
	var chars = words.join("");
	chars = chars.replace(/[\/#!$%\^&\*;:{}=\-_`~()\'\"\n\t]/g, "");
	var charLength = chars.length;

	return charLength / wordCount;
}

function getAverageSentenceLength(words) {
	var wordCount = getWordCount(words);
	var sentenceCount = words.join(" ").split(".").length;

	return wordCount / sentenceCount;
}

$(document).ready(function(){
	$('#js-form').submit(function(event) {
		event.preventDefault();

		var temp = $('#user-text').val().split(" ");
		$(".js-word-count").text(getWordCount(temp));
		$(".js-unique-count").text(getUniqueWordCount(temp));
		$(".js-avg-word-length").text(getAverageWordLength(temp).toFixed(2) + " characters");
		$(".js-avg-sent-length").text(getAverageSentenceLength(temp).toFixed(2) + " words");

		$(this).siblings(".text-report").removeClass("hidden");
	});
});

})();

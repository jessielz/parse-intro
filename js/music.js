// Initialize Parse app
Parse.initialize("gipUxgHC0rcHwHU0dlmfcDthZ6TovT9kBSv4VxNS", "Ccyt1ESjabNyloygmsQdb2C79C5V2w9stZrQ08bB")

// // Create a new sub-class of the Parse.Object, with name "Music"
// var Music = Parse.Object.extend('Music')

// // Create a new instance of your Music class 
// var sweetTime = new Music()

// // Set a property 'band' equal to a band name
// sweetTime.set('band', 'Sum 41')

// // Set a property 'website' equal to the band's website
// sweetTime.set('website', 'sum41.org')
    
// // Set a property 'song' equal to a song
// sweetTime.set('song', 'all of them')

// // Save your instance of your song -- and go see it on parse.com!


// sweetTime.save()

// Click event when form is submitted
$('form').submit(function() {

	// Create a new instance of your Music class 
	var instance = new Music

	$(this).find("input").each(function() {
		instance.set($(this).attr('id'), $(this).val())
		$(this).val(' ')
	})

	// // For each input element, set a property of your new instance equal to the input's value

	// var band = $("#bandName").val()
	// var web = $("#website").val()
	// var song = $("#bestSong").val()

	// funTune.set(bandName, band)
	// funTune.set('website', web)
	// funTune.set('bestSong', song)

	// // After setting each property, save your new instance back to your database
	// funTune.save()
	
	// // Clear it out!

	// $('#bandName').val('')
	// $('#website').val('')
	// $('#bestSong').val('')
	
	return false
})



// Write a function to get data
var getData = function() {
	

	// Set up a new query for our Music class


	// Set a parameter for your query -- where the website property isn't missing


	/* Execute the query using ".find".  When successful:
	    - Pass the returned data into your buildList function
	*/
}

// A function to build your list
var buildList = function(data) {
	// Empty out your unordered list
	
	// Loop through your data, and pass each element to the addItem function

}


// This function takes in an item, adds it to the screen
var addItem = function(item) {
	// Get parameters (website, band, song) from the data item passed to the function

	
	// Append li that includes text from the data item


	
	// Time pending, create a button that removes the data item on click
	
}

// Call your getData function when the page loads



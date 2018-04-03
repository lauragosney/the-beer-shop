// set up a variable that grabs the html element with id of beers
const beersEl = document.querySelector('#beers')

// set up a variable for a function that sets the class name to the body of the html as the class name
const addBodyClass = className => document.body.className = className

// a function that takes in our beer data and loops through it
const addBeers = beers => {
  
  // taking all the beers and setting up a function for each one 
  beers.forEach(beer => {
    
    // set up a variable to create a new html div 
   	const element = document.createElement('div')

    // add class names to the div
	 	element.className = 'beer w-25-ns pa2'
    
    // div id is equal to the beer sku
		// element.id = beer.sku

    // setting up the filters and setting the attribute if data is true 
    if (beer['alcohol_%'] > 6) {
      element.setAttribute('data-limited-edition', true)
    }
    if (beer['average_review_rating_0_to_5'] >= 5) {
      element.setAttribute('data-our-favourites', true)
    }
    if (beer['quantity_in_stock'] >= 8) {
      element.setAttribute('data-crates', true)
    }
	
	// setting up the structure of the html for each object in the data array
    element.innerHTML = `
    <div class="pa3 view beer-block h-100">
            <div class="beerimage">
							<img src="beer.png">
            </div>
      <div class="beer-type">
        <div class="name"> 						
                    <div>${beer.beer}</div>
                </div>
				<hr>
        <div class="brewery">
                    <div>${beer.brewery}
                    </div>
                </div>
      </div>
      <div class="price">
        <h2>${beer.price}</h2>
      </div>
			<button class="primary">Shop now</button>
    </div>
  `
		//  for each beer element add it to the end    
    beersEl.appendChild(element)
		     
  }
)}

// using fetch js function to grab the data from the api
fetch('http://demo8465751.mockable.io/products')

// using the .json() on the returned response data
  .then(response => {
    return response.json()
  })

// using the .then() again and passing the json through the addBeers function
  .then(json => {
    addBeers(json)
  console.log(json)
  })
 // in case of an error
  .catch(error => {})

// grabbing the individual filters and attaching a click event which then attaches the class 
// for each collection of data onto the body tag
const showLimitedBtn = document.querySelector('.show-limited')
showLimitedBtn.addEventListener('click', () => addBodyClass('show-limited'))

const showAllBtn = document.querySelector('.show-all')
showAllBtn.addEventListener('click', () => addBodyClass('show-all'))

const showFavouritesBtn = document.querySelector('.show-favourites')
showFavouritesBtn.addEventListener('click', () => addBodyClass('show-favourites'))

const showCratesBtn = document.querySelector('.show-crates')
showCratesBtn.addEventListener('click', () => addBodyClass('show-crates'))
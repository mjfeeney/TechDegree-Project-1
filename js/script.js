/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// array of multiple objects - quotes from Seinfeld.
let quotes = [
  {
    quote: "It was destroyed. But out of that, a new holiday was born. A FESTIVUS FOR THE REST-OF-US.",
    source: "Frank Costanza",
    citation: "Seinfeld",
    year: "Season 9",
    episode: "The Strike"
  },
  {
    quote: "If you’re not gonna be a part of a civil society, then just get in your car and drive on over to the East Side!",
    source: "Cosmo Kramer",
    citation: "Seinfeld",
    year: "Season 6",
    episode: "The Kiss Hello"
  },
  {
    quote: "You’re through, Soup Nazi. Pack it up. No more soup for you. Next!",
    source: "Elaine Benes",
    citation: "Seinfeld",
    year: "Season 7",
    episode: "The Soup Nazi"
  },
  {
    quote: "Now, why does moisture ruin leather? I don't get this. Aren't cows outside most of the time?",
    source: "Jerry Seinfeld"
  },
  {
    quote: "God would never let me be successful. He'd kill me first. He'd never let me be happy.",
    source: "George Costanza",
    citation: "Seinfeld"
  },
  {
    quote: "Why do people always say that [I'll like him]? I hate everybody. Why would I like him?",
    source: "Jerry Seinfeld",
    citation: "Seinfeld"
  },
  {
    quote: "Who wants to have some fun!",
    source: "Cosmo Kramer",
    citation: "Seinfeld"
  }
];


/**
 * Generates a random number between 0 and length of quotes array, uses that number to randomly select an object from the quotes array.
 * 
 * @returns {[string]} Random object from the quotes array.
 */

function getRandomQuote() {
  // Code to select random quote from array
  let randomNumber = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomNumber];
 
  return randomQuote;
};


/**
 * Generates HTML snippet using the random object from the quotes array and displays it to the page.  
 *
 * @returns {string} Prints HTML snippet of random quote with properties to the document at #quote-box.
 */

function printQuote() {
  // Code to print the quote
  let displayed_quote = getRandomQuote();
  let quote_HTML = `
    <p class="quote">${displayed_quote.quote}</p>
    <p class="source">${displayed_quote.source}
  `;

  // if 'citation' and/or 'year' and/or 'episode' properties are included in the object, add those to the HTML snippet as well 
  if ( displayed_quote.citation ) {
    quote_HTML += `
      <span class="citation">${displayed_quote.citation}</span>
    `;
  };

  if ( displayed_quote.year ) {
    quote_HTML += `
      <span class="year">${displayed_quote.year}</span>
    `;
  };

  if ( displayed_quote.episode ) {
    quote_HTML += `
      <span class="year">Episode: ${displayed_quote.episode}</span>
    `;
  };

  quote_HTML += `</p>`;

  // print the HTML snippet to the page
  document.getElementById('quote-box').innerHTML = quote_HTML;
};

printQuote();


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);







/* MongoDB stuff */
/* ************* */
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;
/* ************* */
/* ************* */
const express = require('express')
const next = require('next')
// Scraping stuff
const request = require("request")
const cheerio = require("cheerio")
// Scraping stuff End
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
/* ************* */
/* MongoDB stuff */
/* ************* */

mongoose.connect("mongodb://localhost/SaintPaschalDev");
// Hook mongoose connection to db
var db = mongoose.connection;

// Log any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Log a success message when we connect to our mongoDB collection with no issues
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

/* ************* */
/* ************* */
/* ************* */

app.prepare()
.then(() => {
  const server = express()

  server.get('/p/:id', (req, res) => {
    const actualPage = '/post'
    const queryParams = { title: req.params.id }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready test on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})

////////////////////////////////
///////// Scrape Stuff /////////
////////////////////////////////


request("https://www.catholicnewsagency.com/headlines/", function(error, response, html) {
  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  var $ = cheerio.load(html);
  // Empty arrays to save the data that we'll scrape
  var resultLink = [];
  var resultImage = [];
  var resultTitle = [];
  var resultText = [];
  var resultEverything =[];
  /////// Scrapes Everything /////////
  for(var i = 0; i < 10; i++){
    $(".noticia_list_contenedor").each(function(i, element) {
      var everything = $(this).text();
      //http://www.catholicnewsagency.com/headlines/
      resultEverything.push({ everything: everything });
    });
  } // End For Loop
  console.log("Everything: " + resultEverything);
  /////// Scrape Everything End /////////
  /////// Scrapes Link /////////
  for(var i = 0; i < 10; i++){
    $(".noticia_list_imagen").each(function(i, element) {
    var imgLink = $(element).attr("src");
    resultLink.push({ imgLink : imgLink });
    });
  }
    console.log("Links: " + JSON.stringify(resultLink[0]));
    // Image url gets captured correctly but you need to json stringify it to see its contents in string form
  ////////// Scrape Link End ////////////
  /////// Scrapes Title /////////
  for(var i = 0; i < 10; i++){
    $(".noticia_list_title").each(function(i, element) {
      var title = $(this).text();
      resultTitle.push({ title : title });
    });
  } // End For Loop
  console.log("Title's: " + JSON.stringify(resultTitle[0]) + " " + JSON.stringify(resultTitle[1]));
  /////// Scrapes Title End /////////
    /////// Scrapes Summary Text /////////
  for(var i = 0; i < 10; i++){
    $(".noticia_list_body").each(function(i, element) {
      var summary = $(this).text();
      resultText.push({ summary : summary });
    });
  } // End For Loop
  console.log("Summary text: " + JSON.stringify(resultText[0]) + " " + JSON.stringify(resultText[1]));
  /////// Scrapes Summary Text /////////
});

const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const request = require("request")
const cheerio = require("cheerio")

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// https://github.com/zeit/next.js/issues/291
// This seems like the solution to custom API routing to get data to render to individual components / pages. 

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    if (pathname === '/a') {
      app.render(req, res, '/b', query)
    } else if (pathname === '/b') {
      app.render(req, res, '/a', query)
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
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
  var articleCounter = 0;
  /////// Scrapes Everything /////////

    $(".noticia_list_contenedor").each(function(i, element) {
      while(articleCounter < 9){
      var everything = $(this).text();
      //http://www.catholicnewsagency.com/headlines/
      resultEverything.push({ everything: everything });
      articleCounter++;
      } return
    });

  console.log("Everything: " + resultEverything);
  /////// Scrape Everything End /////////
  /////// Scrapes Link /////////
    articleCounter = 0;
    $(".noticia_list_imagen").each(function(i, element) {
       
    while(articleCounter < 9){
    var imgLink = $(element).attr("src");
    resultLink.push({ imgLink : imgLink });
    articleCounter++;
    } return
    });

    console.log("Links: " + JSON.stringify(resultLink[3])+ "  " + JSON.stringify(resultLink[3]));
    // Image url gets captured correctly but you need to json stringify it to see its contents in string form
  ////////// Scrape Link End ////////////
  /////// Scrapes Title /////////
   
    articleCounter = 0;
    
    $(".noticia_list_title").each(function(i, element) {
      
      while(articleCounter < 9){ 
      
      var title = $(this).text();
      resultTitle.push({ title : title });
      
      articleCounter++;
      } return
    });

  console.log("Title's: " + JSON.stringify(resultTitle[3]) + " " + JSON.stringify(resultTitle[11]));
  /////// Scrapes Title End /////////
    /////// Scrapes Summary Text /////////
    articleCounter = 0;
    $(".noticia_list_body").each(function(i, element) {
      
      while(articleCounter < 9){ 
      var summary = $(this).text();
      resultText.push({ summary : summary });
      articleCounter++;
      } return
    });

  console.log("Summary text: " + JSON.stringify(resultText[3]) + " " + JSON.stringify(resultText[3]));
  /////// Scrapes Summary Text /////////
});

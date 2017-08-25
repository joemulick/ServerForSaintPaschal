const express = require('express')
const next = require('next')
// Scraping
const request = require("request")
const cheerio = require("cheerio")
// Scraping End
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

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
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})

// Scrape Stuff 

request("https://www.catholicnewsagency.com/headlines/", function(error, response, html) {

  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  var $ = cheerio.load(html);

  // An empty array to save the data that we'll scrape
  var resultLink = [];
  var resultImage = [];
  var resultTitle = [];
  var resultText = [];

  /////// Scrapes Everything /////////

  $(".noticia_list_contenedor").each(function(i, element) {

    var everything = $(this).text();

    var link = $(".noticia_list_imagen").children().attr("src");
    //var image
    //var title
    //var text (not sure if the website http://vatican.com/news/frame.aspx?url=http://feedproxy.google.com/~r/catholicnewsagency/dailynews-vatican/~3/HdOG4SDdKeY/
    //allows you to scrape the article summary easily.. we may need to scrap entire div's text and then shift() out the # of elements as in the title)

    resultText.push({
      everything: everything
    });

  });

  console.log("Everything: " + resultText);

  /////// Scrape Everything End /////////

  /////// Scrapes Link /////////

    $(".noticia_list_imagen").each(function(i, element) {

    var imgLink = $(element).attr("src");

    resultLink.push({ resultLink: imgLink });

    });

    console.log("Links: " + JSON.stringify(resultLink[0]));
    // Image url gets captured correctly but you need to json stringify it to see its contents in string form

  ////////// Scrape Link End ////////////


  
  
});
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
  // With cheerio, find each p-tag with the "title" class
  // (i: iterator. element: the current element)
  $(".noticia_list_contenedor").each(function(i, element) {

    // Save the text of the element (this) in a "title" variable
    var everything = $(this).text();

    // In the currently selected element, look at its child elements (i.e., its a-tags),
    // then save the values for any "href" attributes that the child elements may have
    var link = $(element).children().attr("href");
    //var image
    //var title
    //var text (not sure if the website http://vatican.com/news/frame.aspx?url=http://feedproxy.google.com/~r/catholicnewsagency/dailynews-vatican/~3/HdOG4SDdKeY/
    //allows you to scrape the article summary easily.. we may need to scrap entire div's text and then shift() out the # of elements as in the title)

    // Save these results in an object that we'll push into the result array we defined earlier
    resultText.push({
      everything: everything
    });

  });

  // Log the result once cheerio analyzes each of its selected elements
  console.log(resultText);
});
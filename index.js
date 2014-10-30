const cheerio = require('cheerio');

module.exports = pick

function pick (string) {
  string = string || ''

  $ = cheerio.load(string);

  var tocItems = $('h1, h2, h3, h4, h5, h6').map(function(i, el) {
    
    var title = $(this).text();
    if(!title|| title == '') {
      title = $(this).attr('title') || '[untitled]';
    }

    var id = $(this).attr('id');
  	if (!id) {
  	  id = "toc_index_" + i;
  	  $(this).attr('id', id);
  	}

  	var item = {
      title: title,
      tag:  $(this)[0].name,
      rank: Number($(this)[0].name.replace(/^h/, "")),
      id:   id
    };

    return item;

  }).toArray();

  var html = $.html();

  return { toc: tocItems, html: html};
}

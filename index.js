const cheerio = require('cheerio');

module.exports = pick

function pick (string, options) {
  string = string || '';

  options = options || {format: 'html'};


  $ = cheerio.load(string);

  var tocItems = $('h1, h2, h3, h4, h5, h6').map(function(i, el) {
    
    var title = $(this).text();

    var title2 = $(this).filter('ruby').text();

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

  if( options.format === 'xml' ) {
    var contents = $.xml();
  } else {
    var contents = $.html();
  }
  

  return { toc: tocItems, contents: contents};
}

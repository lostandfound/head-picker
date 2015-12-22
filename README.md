# head-picker

Extract heading elements from HTML string.

## Install

With npm do:

```
npm install head-picker
```

## Usage

Input file:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>title</title>
</head>
<body>
  <h1>Heading1</h1>
  <h2>Heading2</h2>
  <h3>Heading3</h3>
  <h4>Heading4</h4>
  <h5>Heading5</h5>
  <h6>Heading6</h6>
</body>
</html>
```

Script example:

```javascript
var fs = require('fs');
var hp = require('head-picker');

fs.readFile('./sample.html', 'utf8', function(err, data){
  if (err) throw err

  var obj = hp(data);

  console.log(obj);
});
```

This returns a object with two properties:

```javascript
{ toc: 
   [ { title: 'Heading1', tag: 'h1', rank: 1, id: 'toc_index_0' },
     { title: 'Heading2', tag: 'h2', rank: 2, id: 'toc_index_1' },
     { title: 'Heading3', tag: 'h3', rank: 3, id: 'toc_index_2' },
     { title: 'Heading4', tag: 'h4', rank: 4, id: 'toc_index_3' },
     { title: 'Heading5', tag: 'h5', rank: 5, id: 'toc_index_4' },
     { title: 'Heading6', tag: 'h6', rank: 6, id: 'toc_index_5' } ],
  contents: '<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8">\n<meta http-equiv="X-UA-Compatible" content="IE=edge">\n<title>title</title>\n<link rel="stylesheet" href="">\n</head>\n<body>\n<h1 id="toc_index_0">Heading1</h1>\n<h2 id="toc_index_1">Heading2</h2>\n<h3 id="toc_index_2">Heading3</h3>\n<h4 id="toc_index_3">Heading4</h4>\n<h5 id="toc_index_4">Heading5</h5>\n<h6 id="toc_index_5">Heading6</h6>\n</body>\n</html>' }
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
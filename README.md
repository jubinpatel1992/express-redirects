# Express Redirects

This package is a simple middleware which allows the user to configure redirects with a JSON file.

##  Installation

```	npm install express-redirects ```	

## Usage

Create a redirects.json file in the root folder of your project in which we will be setting your redirection rule, after this follow the below steps to use our middleware to configure redirection rules for your applications.

```
const express = require('express');
const expressredirects = require('express-redirects');
const redirectRules = require('./redirection.json');

var app = express();

app.use(expressredirects(redirectRules));
```

## Sample Redirection JSON

```
[
  {
    "url": "/about/login",
    "destinationUrl": "/",
    "redirectionType": "fixed",
    "httpCode": 301
  },
  {
    "url": "/about",
    "destinationUrl": "/",
    "redirectionType": "startswith",
    "httpCode": 301
  },
  {
    "url": "/login",
    "destinationUrl": "/",
    "redirectionType": "endswith",
    "httpCode": 301
  }
]
```

## Redirection Types

Our middleware support the following types of redirections:

-	"fixed" - Case where exactly matches the url path to the current request url path.
-	"startswith" - Case where where url path starts with a specific keyword/path.
-	"endswith" - Case where where url path ends with a specific keyword/path.	
	


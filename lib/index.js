'use strict';

module.exports = function expressredirection(redirectsJson) {
    return function redirection(req, res, next) {
        const redirect = redirectsJson.find(json => {
            if(json.redirectionType == 'fixed' && json.url === req.originalUrl) {
                return json; 
            } else if(json.redirectionType == 'startswith' && req.originalUrl.startsWith(json.url)) {
                return json;
            } else if(json.redirectionType == 'endswith' && req.originalUrl.endsWith(json.url)) {
                return json;
            }
        });

        if(redirect === undefined) next();
        else res.redirect(redirect.httpCode, redirect.destinationUrl);

    } 
}
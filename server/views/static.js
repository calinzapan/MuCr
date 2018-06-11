"use strict";

let fs              = require("fs");
let settings        = require("../settings");

exports.landing_get = function (req,res,path) {
    fs.readFile(settings.templatesPath + 'index.html', function (err, data) {
        if (err) {
            LOG(err.message);
            error_page(request,response,path,500);
            return;
        }

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
};

exports.register_get = function (req,res,path) {
    fs.readFile(settings.templatesPath + 'register.html', function (err, data) {
        if (err) {
            LOG(err.message);
            error_page(request,response,path,500);
            return;
        }

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
};

exports.login_get = function (req,res,path) {
    fs.readFile(settings.templatesPath + 'login.html', function (err, data) {
        if (err) {
            LOG(err.message);
            error_page(request,response,path,500);
            return;
        }

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
};

exports.documentation_get = function (req,res,path) {
    fs.readFile(settings.templatesPath + 'documentation.html', function (err, data) {
        if (err) {
            LOG(err.message);
            error_page(request,response,path,500);
            return;
        }

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
};
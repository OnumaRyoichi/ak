var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var session = require('express-session');
var csurf = require('csurf');
var flash = require('connect-flash');

var routes = require('./routes/index');
var company = require('./routes/company');
var admin = require('./routes/admin');
var admin_login = require('./routes/admin_login');
var recruit = require('./routes/recruit');
var service = require('./routes/service');
var contact = require('./routes/contact');
var news = require('./routes/news');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// HTTP METHOD override
app.use(methodOverride(function(req, res){
  if( req.body && typeof req.body === "object" && "_method" in req.body ){
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

// Session CSRF flash
app.use(session({
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: false,
}));
app.use(csurf());
app.use(flash());

app.use('/', routes);
app.use('/company', company);
app.use('/admin', admin);
app.use('/admin/login', admin_login);
app.use('/recruit', recruit);
app.use('/service', service);
app.use('/contact', contact);
app.use('/news', news);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;

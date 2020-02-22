var createError = require('http-errors');
var express = require('express');
var http = require('http');
var path = require('path');
//var expressValidator = require('express-validator');
var logger = require('morgan');

var globals = require('./public/globals');

var app = express();

var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var options = {
  host: globals.db_host,
  port: globals.db_port,
  user: globals.db_user,
  password: globals.db_password,
  database: globals.db_name
};
var sessionStore = new MySQLStore(options);
var passport = require('passport');
const fileUpload = require('express-fileupload');
var cors = require('cors');

var indexRouter = require('./routes/index');
var registerRouter = require('./routes/register');
var loginRouter = require('./routes/login');
var authenticationRouter = require('./routes/isAuthenticated');
var logoutRouter = require('./routes/logout');

//for central to display based on schemes added
var getStatesFromNotificationRouter = require('./routes/getStatesFromNotifications');
var getTerritoriesFromNotificationRouter = require('./routes/getTerritoriesFromNotifications');

var addSchemeRouter = require('./routes/addScheme');
var getSchemeByIdRouter=require('./routes/getSchemeById');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors({
  origin: globals.domain_url,
  credentials: true,
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(expressValidator());
app.use(fileUpload());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: globals.secret_sessionKey,
  saveUninitialized: false,
  resave: false,
  store: sessionStore
}));
app.use(passport.initialize());
app.use(passport.session());

// app.use(function (req, res) {
//   new routes(app).routesConfig()
// });
// app.use(function (req, res) {
//   new socketEvents(socket).socketConfig()
// });


app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/isAuthenticated', authenticationRouter);
app.use('/logout', logoutRouter);

app.use('/getStatesFromNotification', getStatesFromNotificationRouter);
app.use('/getTerritoriesFromNotification', getTerritoriesFromNotificationRouter);

app.use('/addScheme', addSchemeRouter);
app.use('/getSchemeById',getSchemeByIdRouter);

// socket1.use(async (socket, next) => {
//   try {
//     await queryHandler.addSocketId({
//       userId: socket.request._query['userId'],
//       socketId: socket.id
//     });
//     next();
//   } catch (error) {
//     console.error(error);
//   }
// });

// socket1.on('connection', (socket) => {
//   /* Get the user's Chat list	*/
//   socket.on(`chat-list`, async (data) => {
//     console.log("115", socket.handshake.headers.cookie)
//     if (data.userId == '') {
//       socket1.emit(`chat-list-response`, {
//         error: true,
//         message: CONSTANTS.USER_NOT_FOUND
//       });
//     } else {
//       try {
//         const [UserInfoResponse, chatlistResponse] = await Promise.all([
//           queryHandler.getUserInfo({
//             userId: data.userId,
//             socketId: false
//           }),
//           queryHandler.getChatList(socket.id)
//         ]);
//         socket1.to(socket.id).emit(`chat-list-response`, {
//           error: false,
//           singleUser: false,
//           chatList: chatlistResponse
//         });
//         socket.broadcast.emit(`chat-list-response`, {
//           error: false,
//           singleUser: true,
//           chatList: UserInfoResponse
//         });
//       } catch (error) {
//         socket1.to(socket.id).emit(`chat-list-response`, {
//           error: true,
//           chatList: []
//         });
//       }
//     }
//   });

//   /**
//   * send the messages to the user
//   */
//   socket.on(`add-message`, async (data) => {
//     if (data.message === '') {
//       socket1.to(socket.id).emit(`add-message-response`, {
//         error: true,
//         message: CONSTANTS.MESSAGE_NOT_FOUND
//       });
//     } else if (data.fromUserId === '') {
//       socket1.to(socket.id).emit(`add-message-response`, {
//         error: true,
//         message: CONSTANTS.SERVER_ERROR_MESSAGE
//       });
//     } else if (data.toUserId === '') {
//       socket1.to(socket.id).emit(`add-message-response`, {
//         error: true,
//         message: CONSTANTS.SELECT_USER
//       });
//     } else {
//       try {
//         const [toSocketId, messageResult] = await Promise.all([
//           queryHandler.getUserInfo({
//             userId: data.toUserId,
//             socketId: true
//           }),
//           queryHandler.insertMessages(data)
//         ]);
//         socket1.to(toSocketId).emit(`add-message-response`, data);
//       } catch (error) {
//         socket1.to(socket.id).emit(`add-message-response`, {
//           error: true,
//           message: CONSTANTS.MESSAGE_STORE_ERROR
//         });
//       }
//     }
//   });
//   /**
//   * Logout the user
//   */
//   socket.on('logout', async (data) => {
//     try {
//       const userId = data.userId;
//       await queryHandler.logout(userId, socket.request);
//       socket1.to(socket.id).emit(`logout-response`, {
//         error: false,
//         message: CONSTANTS.USER_LOGGED_OUT,
//         userId: userId
//       });

//       socket.broadcast.emit(`chat-list-response`, {
//         error: false,
//         userDisconnected: true,
//         userid: userId
//       });
//     } catch (error) {
//       console.log(error);
//       socket1.to(socket.id).emit(`logout-response`, {
//         error: true,
//         message: CONSTANTS.SERVER_ERROR_MESSAGE,
//         userId: userId
//       });
//     }
//   });
//   /**
//   * sending the disconnected user to all socket users. 
//   */
//   socket.on('disconnect', async () => {
//     socket.broadcast.emit(`chat-list-response`, {
//       error: false,
//       userDisconnected: true,
//       userid: socket.request._query['userId']
//     });
//   });
// });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
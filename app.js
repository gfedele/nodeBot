
var builder = require('botbuilder');

var connector = new builder.ConsoleConnector().listen();
var bot = new builder.UniversalBot(connector, function (session) {
    session.send("......" + session.message.text + ".....");
    session.send("......" + session.message.text + ".....");
});
var Skb = require('skb');
var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ODFiOTczYTE1OGRjNzAwMTJkNzEyZjUiLCJ1c2VybmFtZSI6ImNoZXJ0b2tkbWl0cnlAeWFuZGV4LnJ1Iiwicm9sZSI6InVzZXIiLCJpYXQiOjE0NzgyMDQ5MTF9.WqObsNEkDG0L-8Y54MZN1REpZ4BZrzxyM2Of1uwrmF0';
var skb = new Skb(token);
skb.taskHelloWorld('First NodeJs project');
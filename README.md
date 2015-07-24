# ng2-demo
this repo is an Angular2.0 quick start demo in Angular2.0.0-alpha.31
## Why this repo?
As you know,Angular2.0 has changed a lot compared with Angular1.x.ng2 is the next generation web framework composed of too
much new technologies such as **web components**,**ES6**，**mobile web** and so on.At this state, we can not apply them directly to
the broswer environment,so many polyfills technologies emerged as the times require.This repo provide two convenience,one is 
offering you a enviroment you can run Angular2 code directly in your broswer without setting up enviroment youself, the other is 
making some demos in Angular2.0.0-alpha.31(this version must be important ,because ng2 api vary a little in different versions ).
##How to run this demo
At first,make sure your gulp installed,if not,typing the following code in the root directory

    npm install -g gulp

then install the dependencies of this repo

    npm install

now ,you can run this demo 

    gulp play
it will start up a web server and run this demo in the broswer.If you changed some code ,it will watch files you edit and 
re-transpiled every change you made and you can refresh the broswer to check the result.

##To be continued
This repo will be  added much new stuff along with Angular2 's development.In fact ,Angular2.0 is now in alpha 32 version,and
it it not stable.Many demos written in ng2 will be placed on this repo in the further time. 

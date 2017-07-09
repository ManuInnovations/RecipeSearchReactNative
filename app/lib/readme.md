In the Lib folder are useful javascript functions.


## api.js is a class with some headers and an api key.

Headers to tell the server that json is the data format.

Simple json fetch.  

Code you don't want to repeat through project.



## createReducer is a function that returns another function.

handles the creation of a reducer. Pass in initial state then a series of handlers which are different action types listened for. Creates a reducer function that call the action type when it is needed (line 4).

Don't neeed a switch statement every time you create a reducer.

# KnightsTravailAngularapp

>NOTE: This is not fully implemented.
>
>NOTE: Web API needs to be running to return the results.

To run this, you will need to have the Angular CLI  installed (installable through `npm`). You will then need to open a command navigate to the folder containing the Angular project, and then run it by typing `npm serve`.

Once serving, you can access the site by going to http://localhost:4200. 

The original idea here was to enter in the start and end positions (in chess notation). Simple validation would be performed as the information is entered (this validation is present, but not fully implemented either). Once the data entered was valid, the submit button would be enabled.

Once submit is clicked, an HTTP request would then be fired off to the API. However, this is where I was blocked from completing. Firing off the request results in a CORS error that I didn’t have the time to work past.

This blocker was found while testing out the services that were set up. As such, the validation is not complete, and the HTTP request is not set up to search the user’s selections (just uses a test URL for now). 
NOTE: This is not fully implemented.
NOTE: Web API needs to be running to return the results.

To run this, you will need to have the Angular CLI  installed (installable through `npm`). You will then need to open a command navigate to the folder containing the Angular project, and then run it by typing `npm serve`.

Once serving, you can access the site by going to http://localhost:4200. 

The original idea here was to enter in the start and end positions (in chess notation). Simple validation would be performed as the information is entered (this validation is present, but not fully implemented either). Once the data entered was valid, the submit button would be enabled.

Once submit is clicked, an HTTP request would then be fired off to the API. However, this is where I was blocked from completing. Firing off the request results in a CORS error that I didn’t have the time to work past.

This blocker was found while testing out the services that were set up. As such, the validation is not complete, and the HTTP request is not set up to search the user’s selections (just uses a test URL for now). 


## Generation Information

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

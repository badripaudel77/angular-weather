# AngularWeather - Angular weather application - learning angular
----------------

### Install angular
- To install angular one can use command as : npm install -g @angular/cli , it will install angular globally on our machine.
- To check which angualar is installed, use ```ng v``` or ```ng version``` # if done within the project dire, it will give exact angular version.

### Create Angular App
To create a new angular app use : ```ng new app-name ``` and answer a couple of prompts.

## Development server
- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding
- Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests
- Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

### Add angular material  
- To add angular material we can use ```ng add @angular/material```   , Reference : https://material.angular.io/guide/getting-started
- To use Angular material, we have to include import statement in `app.module.ts` file and add them to imports array. And add them as 
 ```MatToolbarModule = <mat-toolbar> </mat-toolbar> ``` just like in angular js directive.
  For eg : ```import {  MatToolbarModule} from '@angular/material/toolbar';```
  .....
  ```@NgModule({
  declarations: [
    ... components
  ],
  imports: [
    ....
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})```


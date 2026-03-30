import {bootstrapApplication} from '@angular/platform-browser';
import {App} from './app/app';
import routeConfig from "./app/routes";         //<-- Add this
import {provideRouter} from "@angular/router";  //<-- Add this

bootstrapApplication(App, {
    providers: [
        provideRouter(routeConfig)              //<-- Add this
    ]
}).catch((err) =>
    console.error(err),
);
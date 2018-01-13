import * as angular from "angular";
import uiRouter from "@uirouter/angularjs";
import { MainCtrl } from "./mainCtrl";
import { HelloComponent } from "./components/hello/hello.component";
import {mainConfig} from "./routes.config";

const t = typeof uiRouter;

const ANGULAR_MODULE_NAME = "app";

angular.module(ANGULAR_MODULE_NAME, ['ui.router'])
    .config(mainConfig)
    .controller("MainCtrl", MainCtrl)
    .component('helloComponent', new HelloComponent());

export default ANGULAR_MODULE_NAME;
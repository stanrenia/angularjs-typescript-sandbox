import * as angular from "angular";
import uiRouter from "@uirouter/angularjs";
import { MainCtrl } from "./mainCtrl";
import { HelloComponent } from "./components/hello/hello.component";
import {mainConfig} from "./routes.config";
import {CellComponent} from "./components/cell/cell.component";

const t = typeof uiRouter;

const ANGULAR_MODULE_NAME = "app";

angular.module(ANGULAR_MODULE_NAME, ['ui.router'])
    .config(mainConfig)
    .controller("MainCtrl", MainCtrl)
    .component('helloComponent', new HelloComponent())
    .component('cell', new CellComponent());

export default ANGULAR_MODULE_NAME;
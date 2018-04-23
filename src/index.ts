import * as angular from "angular";
import uiRouter from "@uirouter/angularjs";
import { MainCtrl } from "./mainCtrl";
import { HelloComponent } from "./components/hello/hello.component";
import {mainConfig} from "./routes.config";
import {CellComponent} from "./components/cell/cell.component";
import { TileDirective } from "./components/tiles/tile.directive";
import { RandomService } from "./services/random.service";
import { TimelineComponent } from "./components/timeline/timeline.component";
import { TileAComponent } from "./components/tiles/tile-a.component";

const t = typeof uiRouter;

const ANGULAR_MODULE_NAME = "app";

angular.module(ANGULAR_MODULE_NAME, ['ui.router'])
    .config(mainConfig)
    .controller("MainCtrl", MainCtrl)
    .component('helloComponent', new HelloComponent())
    .component('cell', new CellComponent())
    .directive('tile', TileDirective.factory())
    .service('RandomService', RandomService)
    .component('timelineComponent', new TimelineComponent())
    .component('tileA', new TileAComponent());

export default ANGULAR_MODULE_NAME;
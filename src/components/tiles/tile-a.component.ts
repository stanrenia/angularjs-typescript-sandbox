declare function require(name:string);
import { Tile } from "./tile.directive";


class TileAController implements ng.IComponentController {
    public data: Tile;
    public isOpen: boolean;

    constructor() {

    }

    $onInit() {
        if (!this.data) {
            console.warn("Aucune data pour cette tile-A");
        } else {
            // console.info(this.data);
        }
    }

    public toggle(): void {
        this.isOpen = !this.isOpen;
    }
}

export class TileAComponent implements ng.IComponentOptions {
    bindings = {
        data: '<tileData'
    };

    controller = TileAController;

    template = require('./tile-a.html');
}
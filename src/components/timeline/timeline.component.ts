declare function require(name: string);
import { IComponentController, IComponentOptions, IControllerConstructor, Injectable } from "angular";
import { Tile, TYPES_ARRAY, STATUS_ARRAY, TYPES } from "../tiles/tile.directive";
import { RandomService } from "../../services/random.service";

class TimelineController implements IComponentController {
    public static $inject = ['RandomService']

    public count: number = 150;
    public tiles: Array<Tile> = [];

    constructor(private randomService: RandomService) { }

    $onInit() {
        for (let i=0; i < this.count; i++) {
            this.tiles.push(this.randomTile())
        }
    }

    private reinitTiles(): void {
        this.tiles = [];
        for (let i=0; i < this.count; i++) {
            this.tiles.push(this.randomTile())
        }
    }

    public go(n): void {
        this.reinitTiles();
    }

    private randomTile(): Tile {
        const type = this.randomService.randomFrom(TYPES_ARRAY);
        return new Tile(
            type,
            this.randomService.randomValue(),
            this.randomService.randomFrom(STATUS_ARRAY),
            this.randomDetails(type)
        )
    }

    private randomDetails(type: string) {
        let data;
        if (type === TYPES.A) {
            data = {info: 'toto', color: this.randomService.randomColor()}
        } else if (type === TYPES.B) {
            data = {success: this.randomService.randomBool(), err: this.randomService.randomValue()}
        } else {
            data = {content: this.randomService.randomValue() + this.randomService.randomColor()}
        }

        return data;
    }
}

export class TimelineComponent implements IComponentOptions {
    public bindings = {}
    public controller: string | Injectable<IControllerConstructor>;
    public template: string

    constructor() {
        this.controller = TimelineController
        this.template = require('./timeline.html')
    }
}
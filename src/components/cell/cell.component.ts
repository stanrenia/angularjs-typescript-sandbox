declare function require(name:string);
import { IComponentController, IComponentOptions, IControllerConstructor, Injectable } from "angular";
import { RandomService } from "../../services/random.service";

class CellController implements IComponentController {
    public static $inject = ['RandomService']

    public value: string;
    public show: boolean = false;
    public color: string;
    public type: string;

    constructor(private randomService: RandomService) {
    
    }

    $onInit() {
        this.value = this.randomService.randomValue();
        this.show = this.randomService.randomBool();
        this.color = this.randomService.randomColor();
        this.type = this.randomService.randomType();
    }

    public select(): void {
        this.show = !this.show;
    }
}

export class CellComponent implements IComponentOptions {
    public bindings = {};
    public controller: string | Injectable<IControllerConstructor>;
    public template: string;

    constructor() {
        this.bindings = {
            value: '='
        };

        this.controller = CellController;
        this.template = require('./cell.html');
    }
}
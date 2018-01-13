declare function require(name:string);
import { IComponentController, IComponentOptions, IControllerConstructor, Injectable } from "angular";

const RANDOM_STRING_VALUES = ['a', 'f', 'z', 'e', 1, 2, 3, 7];
const RANDOM_COLORS = ['red', 'green', 'blue', 'yellow', 'purple', 'white', 'brown', 'aqua'];
const RANDOM_TYPES = ['A', 'B', 'C', 'D'];

function range(startInclusive: number, endExclusive: number): number {
    return Math.round(Math.random() * (endExclusive - 1)) + startInclusive;
}

class CellController implements IComponentController {

    public value: string;
    public show: boolean = false;
    public color: string;
    public type: string;

    constructor() {
        
    }

    $onInit() {
        this.value = this.randomValue();
        this.show = Math.random() < 0.5;
        this.color = this.randomColor();
        this.type = this.randomType();
    }

    public select(): void {
        this.show = !this.show;
    }

    public randomType(): string {
        return RANDOM_TYPES[range(0, 4)];
    }

    private randomColor(): string {
        return RANDOM_COLORS[range(0, 8)];
    }

    private randomValue(): string {
        let s = "";
        const length = range(0, 21);
        for (let i=0; i < length; i++) {
            const index = range(0, 8);
            s = s + RANDOM_STRING_VALUES[index];
        }

        return s;
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
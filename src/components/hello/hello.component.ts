declare function require(name:string);
import { IComponentController, IComponentOptions, IControllerConstructor, Injectable } from "angular";

class HelloController implements IComponentController {

    private count: number;
    public hellos: Array<string> = [];

    constructor() {
        
    }

    $onInit() {
        for (let i=0; i <this.count; i++) {
            this.pushHello(i);
        }
    }

    public sayHello(): void {
        this.pushHello(this.count++);
    }

    private pushHello(i: number): void {
        this.hellos.push(`hello ${i}`);
    }
}

export class HelloComponent implements IComponentOptions {
    public bindings = {}
    public controller: string | Injectable<IControllerConstructor>;
    public template: string

    constructor() {
        this.bindings = {
            count: '<'
        }

        this.controller = HelloController
        this.template = require('./hello.html')
    }
}
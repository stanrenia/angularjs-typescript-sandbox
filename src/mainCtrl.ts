import {IIntervalService} from "angular";

class Cell {
    public value: string;

    constructor(aValue?: string) {
        this.value = aValue;
    }
}

export class MainCtrl {
    static $inject = ['$interval'];

    public title: string = "Super App :)";
    public cellsCount = 8;
    public cells = [];

    public isAutoEnabled: boolean = false;
    public cellsToAddInAutoMode: number = 30;
    public autoModeInterval: number = 1000;
    private stopInterval = null;

    constructor(private $interval: IIntervalService) {
        this.initCells();
    }

    public cellSum(): string {
        console.info("sum !");
        return this.cells.reduce((p, cell) => p+cell.value, "");
    }

    public addCell(): void {
        // this.cells.push(new Cell());
        this.cells = this.cells.concat(new Cell());
        this.cellsCount = this.cells.length;
    }

    public removeCell(): void {
        this.cells.pop();
        this.cellsCount = this.cells.length;
    }

    public toggleAuto(): void {
        if ( !this.isAutoEnabled ) {
            this.stopInterval = this.$interval(() => {
                for (let i=0; i < this.cellsToAddInAutoMode; i++) {
                    this.addCell();
                }
            }, this.autoModeInterval);
        } else {
            if ( this.stopInterval ) {
                this.$interval.cancel(this.stopInterval);
                this.stopInterval = null;
            }
        }

        this.isAutoEnabled = !this.isAutoEnabled;
    }

    private initCells() {
        for (let i=0; i<this.cellsCount; i++) {
            this.cells.push(new Cell(`${i}`));
        }
    }
}
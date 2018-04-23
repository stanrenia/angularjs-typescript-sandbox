import { ICompileService } from "angular";


export const TYPES = { A: "A", B: "B", C: "C" };
export const TYPES_ARRAY = Object.keys(TYPES);
export const STATUS_ARRAY = ['TODO', 'DOING', 'DONE'];

export class Tile {

    constructor(type, label, statut, details) {
        this.type = type;
        this.label = label;
        this.statut = statut;
        this.details = details;
    }

    public type: string;
    public label: string;
    public statut: string;
    public details: { [key: string]: any };
}

export class TileDirective implements ng.IDirective {
    restrict = 'E';
    scope = {
        tileData: '<'
    };

    constructor(private $compile: ICompileService) {
        console.info("New TileDirective");
    }

    link = (scope, element, attrs) => {
        const type = scope.tileData.type;
        // console.info(`START LINKING [type = ${type}]`);
        
        let template;
        if (type === TYPES.A) {
            template = '<tile-a tile-data="tileData"></tile-a>';
        } else {
            template = '<div>{{tileData | json}}</div>';
        }

        const newEl = this.$compile(template)(scope);
        element.append(newEl);

        // console.info("END LINKING");
    }

    public static factory(): ng.IDirectiveFactory {
        const directive = ($compile: ng.ICompileService) => new TileDirective($compile);
        directive.$inject = ['$compile'];
        return directive;
    }
}

declare function require(name:string);
import { StateProvider, Ng1StateDeclaration } from "@uirouter/angularjs";
import { MainCtrl } from "./mainCtrl";

export function mainConfig($stateProvider: StateProvider) {

    const mainState: Ng1StateDeclaration = {
        name: "main",
        url: '/',
        template: require('./main.html'),
        controller: MainCtrl,
        controllerAs: 'mainCtrl'
    }

    const helloState: Ng1StateDeclaration = {
        name: "hello",
        url: '/hello',
        component: 'helloComponent',
        resolve: {
            count: () => {
                return new Promise((resolve, reject) => {
                    resolve(3);
                }) 
            }
        }
    }

    $stateProvider.state(mainState)
    $stateProvider.state(helloState)
}
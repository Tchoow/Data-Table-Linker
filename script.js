/*
    Table Linker
    ---------------------------
    Theo ~ @Tchoow 04/12/2021

*/

/*
field of a component
String name;
String type;
int    order;
Component compatibliity;
*/


const btnAdd      = document.getElementById('btnAdd');
var allComponents = [];


var Component = function (name, type, order) {
    this.name          = name;
    this.type          = type;
    this.order         = order;
    this.compatibility = [];

    this.addCompatibility = function(compatibility) {
        this.compatibility.push(compatibility);
    }

}


allComponents.push( new Component('Chassis Apex', 'Frame', 0));
allComponents.push( new Component('Motor T-max', 'Moror', 4));


allComponents[0].addCompatibility(allComponents[1]);

console.log(allComponents);
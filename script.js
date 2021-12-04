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


const btnAdd      = document.querySelector('#btn-add');
var allComponents = [];
var nbComponents  = 0;

// render a component in html
function renderComponent(component) {
    var html = `
        <div class="component">
            <div class="component-id">ID  : ${component.order}</div>
            <div class="component-name">Nom  : ${component.name}</div>
            <div class="component-type">Type : ${component.type}</div>
            <div class="component-order">${component.order}</div>
            <div class="component-compat">${component.compat}</div>
            <div class="component-btn">
                <button class="component-btn" onclick="pairingWith(${component.order});" >Pairing</button>
                <button class="component-btn">Delete</button>
            </div>
        </div>
    `;
    return html;
}


function pairingWith(id) {
    console.log('pairing : ' + id);
    if (allComponents[id].pairing) {
        allComponents.forEach(element => {
            if (element.pairing) {
                element.addCompatibility(allComponents[id]);
                element.pairing = false;
            }
        });
        allComponents[id].pairing = false;
    } else {
        allComponents[id].pairing = true;
    }
    
    console.log(allComponents[id]);
    renderComponent(allComponents[id]);
}



// append html to the DOM
function appendComponent(component) {
    var html = renderComponent(component);
    var componentContainer = document.querySelector('#component-container');
    componentContainer.insertAdjacentHTML('beforeend', html);
}

function getComponentId() {
    var i = 0;
    return function() {
        return i++;
    }
}

console.log(getComponentId());
console.log(getComponentId());
console.log(getComponentId());



// btnAdd pressed
btnAdd.addEventListener('click', function() {
    appendComponent(allComponents[nbComponents]);
    console.log(allComponents[nbComponents]);
    nbComponents++;
    
});

var Component = function (name, type, order) {
    this.id            = nbComponents;
    this.name          = name;
    this.type          = type;
    this.order         = order;
    this.compatibility = [];
    this.pairing       = false;

    
    

    this.addCompatibility = function(compatibility) {
        this.compatibility.push(compatibility);
    }




}

// Frames
// Roma L5 / Sector 5 V3 / Veyron / Beta95X V3 / Pavo30 / HX115
allComponents.push( new Component('Apex', 'frame', 0));
/*
allComponents.push( new Component('Roma L5', 'frame', 0));
allComponents.push( new Component('Roma L5', 'frame', 0));
allComponents.push( new Component('Sector 5 V3', 'frame', 0));
allComponents.push( new Component('Veyron', 'frame', 0));
allComponents.push( new Component('Beta95X V3', 'frame', 0));
allComponents.push( new Component('Pavo30', 'frame', 0));
allComponents.push( new Component('HX115', 'frame', 0));
*/
// ESC
// ESC Furling32 / Reaper 96K / Zeus HGLRC / Holybro / Racerstar RS6Ax4 / Tekko32 F4
allComponents.push( new Component('ESC Furling32', 'esc', 1));
allComponents.push( new Component('Reaper 96K', 'esc', 1));
allComponents.push( new Component('Zeus HGLRC', 'esc', 1));
allComponents.push( new Component('Holybro', 'esc', 1));
allComponents.push( new Component('Racerstar RS6Ax4', 'esc', 1));
allComponents.push( new Component('Tekko32 F4', 'esc', 1));




// Fly Controler
// Zeus 722 F7 / Zeus 722 mini / VivaFPV F4 / Kakute F4 V2.3 / FETec
allComponents.push( new Component('Zeus 722 F7', 'fc', 2)); 
allComponents.push( new Component('Zeus 722 mini', 'fc', 2));
allComponents.push( new Component('VivaFPV F4', 'fc', 2));
allComponents.push( new Component('Kakute F4 V2.3', 'fc', 2));
allComponents.push( new Component('FETec', 'fc', 2));


// Motors
// GTS V3 / Wasp Major / Aeolus / F1404 T-Motor / Aeolus V2
allComponents.push( new Component('GTS V3', 'motor', 3));
allComponents.push( new Component('Wasp Major', 'motor', 3));
allComponents.push( new Component('Aeolus', 'motor', 3));
allComponents.push( new Component('F1404 T-Motor', 'motor', 3));
allComponents.push( new Component('Aeolus V2', 'motor', 3));


// Props
// MacroQuad - HQprop / tripales - HQprop / NewBeeDrone Azi Tri Blade / P4 Candy Cane / Peanut Butter
allComponents.push( new Component('MacroQuad - HQprop', 'prop', 4));
allComponents.push( new Component('tripales - HQprop', 'prop', 4));
allComponents.push( new Component('NewBeeDrone Azi Tri Blade', 'prop', 4));
allComponents.push( new Component('P4 Candy Cane', 'prop', 4));
allComponents.push( new Component('Peanut Butter', 'prop', 4));




//allComponents[0].addCompatibility(allComponents[1]);

console.log(allComponents);
// import syntax
import {moduleName} from 'file path';

//import Default syntax
import oregonStateInfo from './modules/oregonInfo.js';

// renaming on import
import {sum as addNumbers} from './module.js'

// importing many different exports
import * as myModules from './modules.js';
//they are then properties of myModules
myModules.addNumbers(); 
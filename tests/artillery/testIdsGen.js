const fs = require('fs');
const NUM_WORKSPACES = 10000000;
const FILE_PATH = './workspaces.csv';

(async () => {
    var idArr = [];
    await fs.promises.writeFile(FILE_PATH, '');

    for (var i = Math.floor(0.9 * NUM_WORKSPACES); i < NUM_WORKSPACES; i++) {
        await fs.promises.appendFile(FILE_PATH, `${i}\n`);
    }    
    
})();
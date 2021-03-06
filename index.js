const electron = require('electron');
const {app, BrowserWindow, Menu} = electron;

let mainWindow

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.loadFile("main.html");

    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);
});

const menuTemplate = [
    {
        label: 'File'
    }
]
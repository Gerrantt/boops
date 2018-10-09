const electron = require('electron');
var app = electron.app
var mainWindow

function createWindow() {
    var mainWindow = electron.BrowserWindow({
        width: 300,
        height: 500
    })
    mainWindow.loadURL(`file://${__dirname}/index.html`);
    return mainWindow
}
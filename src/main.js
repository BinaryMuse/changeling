import path from 'path'
import url from 'url'

import {app, BrowserWindow} from 'electron'

let mainWindow;
function createWindow() {
  mainWindow = new BrowserWindow({width: 800, height: 600, show: false})
  mainWindow.loadURL(`file://${path.join(__dirname, 'renderer', 'index.html')}`)
  mainWindow.once('ready-to-show', () => mainWindow.show())
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow);
app.on('window-all-closed', () => app.quit())

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
});

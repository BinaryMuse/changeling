import { app, BrowserWindow } from 'electron';

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'production';
}

let mainWindow;
const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });
  mainWindow.loadURL(`file://${__dirname}/../index.html`);
  // mainWindow.webContents.openDevTools();
  mainWindow.on('closed', () => { mainWindow = null; });
};

const installDevTools = () => {
  const devtools = require('electron-devtools-installer');
  devtools.default(devtools.REACT_DEVELOPER_TOOLS);
  devtools.default(devtools.REDUX_DEVTOOLS);
};

app.on('ready', () => {
  if (process.env.NODE_ENV === 'development') {
    installDevTools();
  }
  createWindow();
});

app.on('window-all-closed', () => {
  app.quit();
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

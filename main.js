const { app, BrowserWindow, nativeImage } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    titleBarStyle: 'hidden'
  })
    win.removeMenu()
    win.maximize()
    // win.setOverlayIcon(nativeImage.createFromPath('/icon.ico'))
    win.once('focus', () => win.flashFrame(false))
  win.flashFrame(true)
    win.loadURL('https://kour.io/')
}

app.whenReady().then(() => {
  createWindow()
})
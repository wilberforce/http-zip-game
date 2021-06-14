# Moddable webserver + Vite

This template should help get you started developing with moddable with the Vite web framework
It's the chromium internet offline dinosaur game, all of the game assets are packed and server from the moddable http server.

### build the zip file
```
cd www
npm install
npm run build
cd ..
#change to lin/mac esp32 etc
mcconfig -d -m -p win
open browser http://localhost:8080
```


### changes to rebuild
from the project root:
`npm --prefix www run build && mcconfig -d -m -p win`
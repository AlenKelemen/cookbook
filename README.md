# Install & run parceljs server
* npm install --save-dev parcel, it will create pacakage.json, node_modules and package-lock.json
* add .gitignore file to git ignore: node_modules, parcel-cache, dist, logs
* make src folder
* add index.html in src
* run npx parcel src/index.html, it should serve index.html in http://localhost:1234
* add "source": "src/index.html" to package.json so you don't need to duplicate them in each parcel command and can use npx parcel
* add script run parcel instead npx parcel src/index.html
# Add proxy server path
* To better emulate the actual production environment when developing web apps, you can specify paths that should be proxied to another server (e.g. your real API server or a local testing server) in a .proxyrc


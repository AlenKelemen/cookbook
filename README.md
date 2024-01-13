# cookbook

## parcel
0. npm install --save-dev parcel, it will create pacakage.json, node_modules and package-lock.json
1. add .gitignore file to git ignore: node_modules, parcel-cache, dist, logs
2. make src folder
3. add index.html in src
4. run npx parcel src/index.html, it should serve index.html in http://localhost:1234
5. make index.css in src
6. import fontawesome and bootstrap in index.css
7. add fontawesome and bootstrap in dependecies in package.js
8. for fontawesome pro to run add .npmrc file to root
9. run npm i
10. add "source": "src/index.html" to package.json so you don't need to duplicate them in each parcel command and can use npx parcel
11. add script run parcel instead npx parcel src/index.html
12. add --https to run in https://localhost:1234
13. To better emulate the actual production environment when developing web apps, you can specify paths that should be proxied to another server (e.g. your real API server or a local testing server) in a .proxyrc
14. add .parcelrc file to root, install @parcel/resolver-glob add-on to use image folder in parcel

* Add folder lang to src
* Add file hr.json to src/lang
# Paths to cadastre server
* To avoid CORS paths must ba called from api server, not from parceljs server
* Add pathRewrite to proxyrc.json:

```json
 "/dof": {
  "target": "https://cadastre.imagis.io",
  "changeOrigin": "true"
}
```

* Add path names to lang/hr like: 

```"rasterDOFPath": "dof/"```
* Call path as: 

```locale.rasterDOFPath```

# Codebox
[Changelog](./CHANGELOG.md)
## Projekt beskrivelse

Login til en admin:
jens 123456

login til en almindelig bruger:
karl 12233
#### En template af koder som kan bruges til alle fremtidige opgaver
---
## Code Skruktur
---
## NPM pakker
### Pakke navn
Beskrivelse af **pakken**

evt en liste

1. _Noget her_
    
    * Under punkter
2. noget her

    * Under punkter  

evt en table med data
| Navn   | nr | pris  |
| ------ |:--:| -----:|
| første | 1  | 1.000 |
| anden  | 2  | 2.000 |
| tredje | 3  | 3.000 |
---
## kommandoer

#### `npm run dev` eller `npm start`
---
## Relevante kode eksempler
```javascript
module.exports = function (app) {
    app.get('/', (req, res, next) => {
        res.send(require('./views/main'));
    });
}
```
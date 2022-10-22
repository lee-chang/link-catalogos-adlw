const {chromium} = require( 'playwright');
var CronJob = require('cron').CronJob;

const express = require('express');
const serveIndex = require('serve-index');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

let rootStyleCat = 'public/catalogos/style.css';
let rootPublic = require('path').dirname('/public');

var app = express();
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.resolve('public/index.html'));
});

app.use('/catalogos', express.static('public/catalogos/media'), serveIndex('public/catalogos/media', {
  icons: true,
  template: 'public/catalogos/template.html',
  stylesheet: rootStyleCat
}))



var job = new CronJob(
	'*/5 * * * *',
	function() {

        Main.update();
	},
	null,
	true,
	'America/Los_Angeles'
);


const PORT = process.env.PORT || 3000;
// Listen
app.listen(PORT,function(){
    console.log('Servidor listo en el puerto',PORT);
})


class Main {
  static async update(){

      (async () => {

          const browser = await chromium.launch()
          const page = await browser.newPage()
          //Todos los productos
          await page.goto('https://zicca.pe/Productos/ListaProductosTiendaVirtual',  {timeout: 0} )
          await page.pdf({ path: 'public/catalogos/media/TodasTallas-Zicaa.pdf', format: 'A5'})
      
          //Todos los productos talla 35
          await page.goto('https://zicca.pe/Productos/ListaProductosTiendaVirtual?idTalla=3',  {timeout: 0} )
          await page.pdf({ path: 'public/catalogos/media/Talla35-Zicca.pdf', format: 'A5'})
      
          //Todos los productos talla 36
          await page.goto('https://zicca.pe/Productos/ListaProductosTiendaVirtual?idTalla=4',  {timeout: 0} )
          await page.pdf({ path: 'public/catalogos/media/Talla36-Zicca.pdf', format: 'A5'})
      
          //Todos los productos talla 37
          await page.goto('https://zicca.pe/Productos/ListaProductosTiendaVirtual?idTalla=5',  {timeout: 0} )
          await page.pdf({ path: 'public/catalogos/media/Talla37-Zicca.pdf', format: 'A5'})
      
          //Todos los productos talla 38
          await page.goto('https://zicca.pe/Productos/ListaProductosTiendaVirtual?idTalla=6',  {timeout: 0} )
          await page.pdf({ path: 'public/catalogos/media/Talla38-Zicca.pdf', format: 'A5'})
      
          //Todos los productos talla 39
          await page.goto('https://zicca.pe/Productos/ListaProductosTiendaVirtual?idTalla=7',  {timeout: 0} )
          await page.pdf({ path: 'public/catalogos/media/Talla39-Zicca.pdf', format: 'A5'})
      
          await browser. close()
      
          console.log('PDFs generados correctamente')
      
      })()
  }
}
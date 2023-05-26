const {chromium} = require( 'playwright');
var CronJob = require('cron').CronJob;

const express = require('express');
const serveIndex = require('serve-index');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

var app = express();
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.resolve('src/index.html'));
});

//express static files
app.use('/public', express.static('src/public'));

app.use('/catalogos', express.static('src/catalogos/upload'), serveIndex('src/catalogos/upload', {
  icons: true,
  template: 'src/catalogos/template.html',
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
          await page.pdf({ path: 'src/catalogos/upload/Todas-Tallas-Zicaa.pdf', width: '21cm', height: '29.6cm', margin: {top: '1cm', bottom: '1cm', left: '1cm', right: '1cm'}})
      
          //Todos los productos talla 35
          await page.goto('https://zicca.pe/Productos/ListaProductosTiendaVirtual?idTalla=3',  {timeout: 0} )
          await page.pdf({ path: 'src/catalogos/upload/Talla35-Zicca.pdf', width: '21cm', height: '29.6cm', margin: {top: '1cm', bottom: '1cm', left: '1cm', right: '1cm'}})
      
          //Todos los productos talla 36
          await page.goto('https://zicca.pe/Productos/ListaProductosTiendaVirtual?idTalla=4',  {timeout: 0} )
          await page.pdf({ path: 'src/catalogos/upload/Talla36-Zicca.pdf', width: '21cm', height: '29.6cm', margin: {top: '1cm', bottom: '1cm', left: '1cm', right: '1cm'}})
      
          //Todos los productos talla 37
          await page.goto('https://zicca.pe/Productos/ListaProductosTiendaVirtual?idTalla=5',  {timeout: 0} )
          await page.pdf({ path: 'src/catalogos/upload/Talla37-Zicca.pdf', width: '21cm', height: '29.6cm', margin: {top: '1cm', bottom: '1cm', left: '1cm', right: '1cm'}})
      
          //Todos los productos talla 38
          await page.goto('https://zicca.pe/Productos/ListaProductosTiendaVirtual?idTalla=6',  {timeout: 0} )
          await page.pdf({ path: 'src/catalogos/upload/Talla38-Zicca.pdf', width: '21cm', height: '29.6cm', margin: {top: '1cm', bottom: '1cm', left: '1cm', right: '1cm'}})
      
          //Todos los productos talla 39
          await page.goto('https://zicca.pe/Productos/ListaProductosTiendaVirtual?idTalla=7',  {timeout: 0} )
          await page.pdf({ path: 'src/catalogos/upload/Talla39-Zicca.pdf', width: '21cm', height: '29.6cm', margin: {top: '1cm', bottom: '1cm', left: '1cm', right: '1cm'}})
      
          await browser. close()
      
          console.log('PDFs generados correctamente')
      
      })()
  }
}
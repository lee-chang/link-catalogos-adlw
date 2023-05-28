  const {chromium} = require( 'playwright');
  var CronJob = require('cron').CronJob;

  var job = new CronJob(
    '*/1 * * * *',
    function() {
          Main.update();
    },
    null,
    true,
    'America/Los_Angeles'
  );

  class Main {
    static async update(){

        (async () => {

            const browser = await chromium.launch()
            const page = await browser.newPage()

            //Preparando la pagina
            await page.goto('https://zicca.pe/Productos/ListaProductosTiendaVirtual',  {timeout: 0} )
            await page.goto('https://zicca.pe/Productos/ListaProductosTiendaVirtual',  {timeout: 0} )
            await page.goto('https://zicca.pe/Productos/ListaProductosTiendaVirtual',  {timeout: 0} )
        
            //Todos los productos talla 35
            await page.goto('https://zicca.pe/Productos/ListaProductosTiendaVirtual?idTalla=3',  {timeout: 0} )
            await page.pdf({ path: 'media/Talla35-Zicca.pdf', width: '21cm', height: '29.6cm', margin: {top: '1cm', bottom: '1cm', left: '1cm', right: '1cm'},  printBackground: true  })
        
            //Todos los productos talla 36
            await page.goto('https://zicca.pe/Productos/ListaProductosTiendaVirtual?idTalla=4',  {timeout: 0} )
            await page.pdf({ path: 'media/Talla36-Zicca.pdf', width: '21cm', height: '29.6cm', margin: {top: '1cm', bottom: '1cm', left: '1cm', right: '1cm'}, printBackground: true })
        
            //Todos los productos talla 37
            await page.goto('https://zicca.pe/Productos/ListaProductosTiendaVirtual?idTalla=5',  {timeout: 0} )
            await page.pdf({ path: 'media/Talla37-Zicca.pdf', width: '21cm', height: '29.6cm', margin: {top: '1cm', bottom: '1cm', left: '1cm', right: '1cm'}, printBackground: true })
        
            //Todos los productos talla 38
            await page.goto('https://zicca.pe/Productos/ListaProductosTiendaVirtual?idTalla=6',  {timeout: 0} )
            await page.pdf({ path: 'media/Talla38-Zicca.pdf', width: '21cm', height: '29.6cm', margin: {top: '1cm', bottom: '1cm', left: '1cm', right: '1cm'}, printBackground: true })
        
            //Todos los productos talla 39
            await page.goto('https://zicca.pe/Productos/ListaProductosTiendaVirtual?idTalla=7',  {timeout: 0} )
            await page.pdf({ path: 'media/Talla39-Zicca.pdf', width: '21cm', height: '29.6cm', margin: {top: '1cm', bottom: '1cm', left: '1cm', right: '1cm'}, printBackground: true })

            //Todos los productos Botines
            await page.goto('https://zicca.pe/Productos/ListaProductosTiendaVirtual?idCategoria=84',  {timeout: 0} )
            await page.pdf({ path: 'media/Botines-Zicca.pdf', width: '21cm', height: '29.6cm', margin: {top: '1cm', bottom: '1cm', left: '1cm', right: '1cm'}, printBackground: true })

            //Todos los productos Botas
            await page.goto('https://zicca.pe/Productos/ListaProductosTiendaVirtual?idCategoria=87',  {timeout: 0} )
            await page.pdf({ path: 'media/Botas-Zicca.pdf', width: '21cm', height: '29.6cm', margin: {top: '1cm', bottom: '1cm', left: '1cm', right: '1cm'}, printBackground: true })

            //Todos los productos Cerrados
            await page.goto('https://zicca.pe/Productos/ListaProductosTiendaVirtual?idCategoria=83',  {timeout: 0} )
            await page.pdf({ path: 'media/Cerrados-Zicca.pdf', width: '21cm', height: '29.6cm', margin: {top: '1cm', bottom: '1cm', left: '1cm', right: '1cm'}, printBackground: true })

            //Todos los productos Sandalias
            await page.goto('https://zicca.pe/Productos/ListaProductosTiendaVirtual?idCategoria=88',  {timeout: 0} )
            await page.pdf({ path: 'media/Sandalias-Zicca.pdf', width: '21cm', height: '29.6cm', margin: {top: '1cm', bottom: '1cm', left: '1cm', right: '1cm'}, printBackground: true })

            //Todos los productos
            await page.goto('https://zicca.pe/Productos/ListaProductosTiendaVirtual',  {timeout: 0} )
            await page.pdf({ path: 'media/Todas-Tallas-Zicca.pdf', width: '21cm', height: '29.6cm', margin: {top: '1cm', bottom: '1cm', left: '1cm', right: '1cm'}, printBackground: true })
        
            await browser. close()
        
            console.log('PDFs generados correctamente')
        
        })()
    }
  }
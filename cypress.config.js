const excelToJson = require("convert-excel-to-json");
const { defineConfig } = require("cypress");

const fs = require('fs');

async function readExcel(Worksheet, searchText) {
  let output = { row: -1, column: -1 }
  Worksheet.eachRow((row, rownumber) => {

      row.eachCell((cell, colnumber) => {

          if (cell.value === searchText) {
              output.row = rownumber
              output.column = colnumber
          }

      })

  })
  return output;
}
module.exports = defineConfig({
  projectId: 'ypn6az',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  retries: {
    runMode: 1,
    
    },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      on ('task',{
          excelToJsonconverter(filepath)
          {
            const result = excelToJson({
              source: fs.readFileSync(filepath) // fs.readFileSync return a Buffer
          });
          return result;
          }
      })
             on('task',{
           async   writeExccel({searchText, replceText, filepath}) {

                const workbook = new ExcelJS.Workbook();
                await workbook.xlsx.readFile(filepath)
                const Worksheet = workbook.getWorksheet('Sheet1');
                const output = await readExcel(Worksheet, searchText)
                const cell = Worksheet.getCell(output.row, output.column);
                cell.value = replceText
                await workbook.xlsx.writeFile(filepath).then(()=>{
                  return true;
                })
            }
             })

    },
  
    specPattern:"cypress/integration/*.js"
  },
});

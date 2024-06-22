const ExcelJS = require('exceljs');
async function writeExccel(searchText, replceText, filepath) {

    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filepath)
    const Worksheet = workbook.getWorksheet('Sheet1');
    const output = await readExcel(Worksheet, searchText)
    const cell = Worksheet.getCell(output.row, output.column);
    cell.value = replceText
    await workbook.xlsx.writeFile(filepath)
}
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
writeExccel("iphone", "Apple", 'cypress/data/testExcel.xlsx')


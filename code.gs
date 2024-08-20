// File: Code.gs

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index');
}

function getSheetData() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
  var range = sheet.getRange('A1:D10'); // หรือช่วงที่คุณต้องการ
  var values = range.getValues();
  return values;
}

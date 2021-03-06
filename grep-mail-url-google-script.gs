function myFunction() {
  const sheet = SpreadsheetApp.getActiveSheet();
  var row = 2;
  const column = 3;
  if (sheet.getRange(row,column).getValue()) {
    Browser.msgBox("C列" + row + "行目にすでにデータがあるので終了します");
    return;
  }

  const threads = GmailApp.search('label:amazon-premo');
  threads.forEach(function(thread) {
    const msgs = thread.getMessages();
    const msg = msgs[0];
    const body = msg.getBody();
    const matches = body.match(/https:\/\/link3\.kessai.info\/JLP\/JLPcon.+/);
    Logger.log(matches);
    if (matches) {
      sheet.getRange(row,column).setValue(matches[0]);
      row++;
    }
  })
}

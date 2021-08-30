function getAddress() {
    let spreadsheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('//-- sheet_name --//');
    let lastrow = spreadsheet.getLastRow();
    let geocoder = Maps.newGeocoder();
    geocoder.setLanguage('ja');

    // 場所の名前から住所を取得する
    let response = geocoder.geocode("//- 場所の名前 -//");
    console.log(response);

    // スプレッドシードから場所の名前を取得して特定のセルに住所を入力（headerがある特）
    for(let i=1; i<=lastrow; i++){
        let facility = spreadsheet.getRange(i,1).getValue();
        let response = geocoder.geocode(facility);
        if(response['results'][0] != null){
            address = spreadsheet.getRange(i,2).setValue(response['results'][0]['formatted_address']); 
        }
    }
}

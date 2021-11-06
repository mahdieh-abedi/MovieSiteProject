let ExcelToJSON = function () {
    this.parseExcel = function (file) {
        let reader = new FileReader();
        reader.onload = function (e) {
            let data = e.target.result;
            let workbook = XLSX.read(data, {
                type: 'binary'
            });
            workbook.Movies.forEach(function (sheetName) {
                let XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                let json_object = JSON.stringify(XL_row_object);
                console.log(json_object);
            })
        };
        reader.onerror = function (ex) {
            console.log(ex);
        };
        reader.readAsBinaryString(file);
    };
};
// <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.8.0/jszip.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.8.0/xlsx.js"></script>


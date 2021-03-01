$(function () {
    let spreadsheetId = '1kevapzd9eMZ32qOzA-3uiLS9iI3PQ37F58ZZmxbbqu8';
    let sheetPage = $('#sheet-page-title').text();
    let api_key = 'AIzaSyDcA9g6Tq2gtFnrpCTR0XN4TXbRY4kIE1Q';
    let get_url = "https://sheets.googleapis.com/v4/spreadsheets/" + spreadsheetId + "/values/"+ sheetPage +"!A1:D100?key=" + api_key;

    $.get(get_url, function (data, status) {

        if (status == 'success') {
            $('#splash').hide();
            let values = data.values;
            for (let line = 1; line < values.length; line++) {
                let data = values[line];
                let obj = {
                    title: data[0],
                    description: data[1],
                    price: data[2],
                    imgSrc: data[3]
                };
                newItem(obj);
            }
        }
    });


});

function newItem(data) {
    let parent = $('#divData');
    parent.append('<div class="item features-image сol-12 col-md-6 col-lg-3"><div class="item-wrapper"><div class="item-img"><img src="' + data.imgSrc + '" alt=""></div><div class="item-content"><h5 class="item-title mbr-fonts-style display-7"><strong>' + data.title + '</strong></h5><p class="mbr-text mbr-fonts-style mt-3 display-7">' + data.description + '<br>' + data.price + '</p></div></div></div>');

    //     <div class="item features-image сol-12 col-md-6 col-lg-3">
    //     <div class="item-wrapper">
    //         <div class="item-img">
    //             <img src="assets/images/mbr-645x430.jpg" alt="">
    //         </div>
    //         <div class="item-content">
    //             <h5 class="item-title mbr-fonts-style display-7">
    //                 <strong>Pepperoni</strong></h5>

    //             <p class="mbr-text mbr-fonts-style mt-3 display-7">Mussarella com Pepperoni<br>R$ 10,00</p>
    //         </div>

    //     </div>
    // </div>
}
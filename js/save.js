function saveimage(){
    let date = new Date();
    let formattedDate = date.getFullYear() + '_' +
        ('0' + (date.getMonth() + 1)).slice(-2) + '_' +
        ('0' + date.getDate()).slice(-2);
    saveCanvas(formattedDate, 'jpg');
}
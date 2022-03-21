$('#uploadfile').on('change', function () {
  var fileName = $(this).val().split('\\').pop();
  $(this).siblings('#file_name').addClass('selected').html(fileName);
});

document.getElementById('upload_btl').onclick = function () {
  var image = document.getElementById('uploadfile').value;
  if (image != '') {
    var checkimg = image.toLowerCase();

    if (!checkimg.match(/(\.xls|\.xlt|\.xml|\.xlsx|\.pdf)$/)) {
      alert('silahkan uploud file dengan format pdf /exel');

      document.getElementById('uploadfile').value = '';
      document.getElementById('file_name').innerHTML = 'Choose file';
      exit;
    }
    var image = document.getElementById('uploadfile');
    var size = parseFloat(image.files[0].size / (1024 * 1024)).toFixed(2);
    if (size > 2) {
      alert('File max 2 mb');
      document.getElementById('uploadfile').value = '';
      document.getElementById('file_name').innerHTML = 'Choose file';
      exit;
    } else {
      alert('Valid File');
    }
  }
};

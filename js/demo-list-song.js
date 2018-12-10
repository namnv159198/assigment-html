
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200){
            alert('Success !');
            var arraySongs = JSON.parse(xhr.responseText);
            var htmlContent = '';
            for (var i = 0; i < arraySongs.length ; i++) {
                var song = arraySongs[i];
                htmlContent += ''
            }
        }
    }
document.addEventListener("DOMContentLoaded", function () {
    // Mengambil elemen dengan id 'content'
    var contentElement = document.getElementById("content");

    // Mendapatkan nama file dari path URL tanpa ekstensi
    var fileName = window.location.pathname.split("/").pop().replace(".html", "");

    // Menambahkan HTML dari file komponen ke dalam elemen 'content'
    contentElement.innerHTML = includeHTML("pages/" + fileName + ".html");

     // Mengambil elemen dengan id 'content'
    var contentElement = document.getElementById("content");

    // Mendapatkan elemen img pertama di dalam elemen 'content'
    var firstImage = contentElement.querySelector('img');

    // Jika ada gambar, set nilai og:image
    if (firstImage) {
        setOgImage(firstImage.src);
    }
    
});

// Fungsi untuk mengambil isi file HTML dan mengembalikannya sebagai string
function includeHTML(filePath) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", filePath, false);
    xhr.send();

    return xhr.responseText;
}
function setOgImage(imageUrl) {
    var ogImageMetaTag = document.querySelector('meta[property="og:image"]');
    
    // Jika tag og:image ada, set nilai content-nya
    if (ogImageMetaTag) {
        ogImageMetaTag.content = imageUrl;
    } else {
        // Jika tag og:image tidak ada, buat tag baru dan tambahkan ke head
        var newOgImageMetaTag = document.createElement('meta');
        newOgImageMetaTag.setAttribute('property', 'og:image');
        newOgImageMetaTag.content = imageUrl;
        document.head.appendChild(newOgImageMetaTag);
    }
}
// Fungsi untuk mengambil data dari API dan menyimpannya ke file JSON
async function fetchDataAndSaveToFile() {
    try {
        // Dynamic import of node-fetch
        const fetch = (await import('node-fetch')).default;
        const fs = require('fs');
        const path = require('path');

        // URL API yang akan dikonsumsi
        const apiUrl = 'https://script.google.com/macros/s/AKfycbz14NyIwqp-zFhJSLII9YhxDG0qbqaWAXtIgF6GRM16OTjeXuQnjd8vc6yQrwja37mZbw/exec';

        // Fetch data dari API
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Tentukan path dan nama file
        const filePath = path.join(__dirname, 'json', 'data.json');

        // Buat folder 'json' jika belum ada
        if (!fs.existsSync(path.join(__dirname, 'json'))) {
            fs.mkdirSync(path.join(__dirname, 'json'));
        }

        // Tulis data ke file JSON
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

        console.log(`Data berhasil disimpan ke ${filePath}`);
    } catch (error) {
        console.error('Gagal mengambil atau menyimpan data:', error);
    }
}

// Panggil fungsi untuk mengeksekusi proses
fetchDataAndSaveToFile();

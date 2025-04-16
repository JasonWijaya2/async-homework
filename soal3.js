const fs = require("fs"); // Import modul fs

async function manipulateJsonFile() {
  try {
    // 1. Membaca file .json
    const data = fs.readFileSync("./data.json", "utf-8");
    console.log(`Soal 1: ${data}`);

    // 2. Merubah menjadi objek menggunakan JSON.parse
    const jsonData = JSON.parse(data);
    console.log(`Soal 2: ${jsonData}`);

    // 3. Merubah isi datanya (contoh: menambahkan properti baru)
    jsonData.newProperty = "New Value";
    console.log(`Soal 3: ${jsonData}`);

    // 4. Merubah kembali menjadi string menggunakan JSON.stringify
    const updatedData = JSON.stringify(jsonData, null, 2);

    // 5. Menyimpan kembali ke file .json
    fs.writeFileSync("./data.json", updatedData, "utf-8");

    console.log("File berhasil dimanipulasi dan disimpan kembali.");
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
}

manipulateJsonFile();

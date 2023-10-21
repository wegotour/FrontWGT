document.addEventListener("DOMContentLoaded", async () => {
    try {
      const response = await fetch('./json/daffa.json'); // Mengambil file userData.json
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const userData = await response.json();
  
      // Select elements by their IDs
      const namaElement = document.getElementById("nama-daffa");
      const kelasElement = document.getElementById("kelas-daffa");
      const npmElement = document.getElementById("npm-daffa");

  
      // Populate HTML elements with user data
      namaElement.textContent = userData.Nama;
      kelasElement.textContent = userData.Kelas;
      npmElement.textContent = userData.NPM;

    } catch (error) {
      console.error('Error:', error);
    }
  });

document.addEventListener("DOMContentLoaded", async () => {
    try {
      const response = await fetch('./json/prisya.json'); // Mengambil file userData.json
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const userData = await response.json();
  
      // Select elements by their IDs
      const namaElement = document.getElementById("nama-prisya");
      const kelasElement = document.getElementById("kelas-prisya");
      const npmElement = document.getElementById("npm-prisya");


  
      // Populate HTML elements with user data
      namaElement.textContent = userData.Nama;
      kelasElement.textContent = userData.Kelas;
      npmElement.textContent = userData.NPM;

    } catch (error) {
      console.error('Error:', error);
    }
});


    
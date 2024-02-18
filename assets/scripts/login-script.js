/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */
/** @module Login-Script */
/**
* Membuat variabel loginFormElement untuk menampilkan form.
* @constant {HTMLElemnt}
*/
const loginFormElement = document.querySelector('#loginForm');

/**
* Membuat variabel inputEmailElement untuk menampilkan input email.
* @contant {HTMLElemnt}
*/
const inputEmailElement = document.querySelector('#inputEmail');
/**
* Membuat variabel inputPasswordElement untuk menampilkan input password.
* @contant {string}
*/
const inputPasswordElement = document.querySelector('#inputPassword');

/**
* Membuat variabel expectedEmail untuk menyimpan email sementara.
* @contant {string}
*/
const expectedEmail = 'admin@dicoding.com';

/**
* Membuat variabel expectedPassword untuk menyimpan password sementara.
* @contant {HTMLElemnt}
*/
const expectedPassword = 'superpassword';

/* Comment :  Menambahkan aksi klik pada button. */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /**
  * Membuat variabel email untuk menyimpan nilai email yang didapatkan saat button ditekan.
  * @contant {string}
  */
  const email = inputEmailElement.value;
  /**
  * Membuat variabel password untuk menyimpan nilai password yang didapatkan saat button ditekan.
  * @contant {string}
  */
  const password = inputPasswordElement.value;

  /* Comment : Memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan. */
  if (email == expectedEmail && password == expectedPassword) {
    /* Comment : Jika sesuai maka program akan berpindah ke halaman home. */
    goToHome();
  } else {
    /* Comment : Namun jika tidak sesuai maka akan menampilkan informasi bahwa input salah. */
    showPopUp();
  }
});

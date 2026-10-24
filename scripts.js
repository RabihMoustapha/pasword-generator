/* Character Set */
const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
    "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+",
    "[", "{", "]", "}", "|", ";", ":", "<", ">", ".", "?", "/"];

function generate_password() {
    let i = 0;
    let password = "";
    let generated_password = document.getElementById("generated-password");

    /* Generate a random password of length 15 */
    do {
        let random_index = Math.floor(Math.random() * characters.length);
        password += characters[random_index];
        i++;
    } while (password.length < 15 && i > 0);
    generated_password.textContent = password;
}
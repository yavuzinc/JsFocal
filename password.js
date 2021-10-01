var password = process.argv[2];
password = String(password);
newPassword = password.replace('a','4');
newPassword2 = newPassword.replace('e','3');
newPassword3 = newPassword2.replace('o','0');
newPassword4= newPassword3.replace('l','1');
console.log(newPassword4);

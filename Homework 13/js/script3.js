let login = prompt("Кто пришел?");

if (login == 'ин') {

let password = prompt('Пароль?');

  if (password == 'admin') {
    alert('Добро пожаловать!');
  } else if (password == '' || password == null) {
    alert('Вход отменён');
  } else {
    alert('Пароль неверен');
  }

} else if (login == '' || login == null) {
  alert('Вход отменён');
} else {
  alert("Я вас не знаю");
}

var i;

for (i = 0; i < 100; i++) {
	alert(i);
}
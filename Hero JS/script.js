// Показать сообщение в диалоговом окне
alert("Welcome to STEAPAY");

// Запрос подтверждения от пользователя
const userConfirmed = confirm("Ви впевнені, що хочете продовжити?");
if (userConfirmed) {
  alert("Ви продовжили!");
} else {
  alert("Ви скасували операцію.");
}
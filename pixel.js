// Перевірка, щоб не відправляти повідомлення повторно в одній сесії
if (!sessionStorage.getItem("telegramPixelSent")) {
  sessionStorage.setItem("telegramPixelSent", "true");

  const botToken = '8257123136:AAG9VoHHelwD7tBlk5LFV9nQ8RTg1lfTcRo';
  const chatId = '546266236';
  const message = `👁 Хтось зайшов на сайт`;

  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message
    })
  }).catch(error => {
    console.error('❌ Помилка надсилання до Telegram:', error);
  });
}

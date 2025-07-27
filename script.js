function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        const notification = document.getElementById('copyNotification');
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 2000);
    }).catch(function(err) {
        console.error('Ошибка копирования: ', err);
    });
} 
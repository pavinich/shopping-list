/* Новые элементы должны добавляться в список по нажатию на Enter */
const sendInput = document.getElementById('input');
const itemsContainer = document.querySelector('.items');

sendInput.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        const itemText = sendInput.value;

        const newItem = document.createElement('div');
        newItem.textContent = itemText;

        if (itemText != '') {
            itemsContainer.append(newItem);
        }

        newItem.addEventListener('click', function() {
            newItem.classList.toggle('done');
        });
        
        sendInput.value = '';
    }
});


/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */

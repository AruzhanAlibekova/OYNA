// =========================
// ПОЛУЧАЕМ ЭЛЕМЕНТЫ СТРАНИЦЫ
// =========================

const joinButton = document.querySelector("#joinButton");
const joinModal = document.querySelector("#joinModal");
const closeModalButton = document.querySelector("#closeModal");

const joinForm = document.querySelector("#joinForm");
const roomCodeInput = document.querySelector("#roomCode");
const modalMessage = document.querySelector("#modalMessage");

const loginButton = document.querySelector("#loginButton");
const registerButton = document.querySelector("#registerButton");

const createTestButton = document.querySelector("#createTestButton");
const aiButton = document.querySelector("#aiButton");

const languageButton = document.querySelector("#languageButton");


// =========================
// ОТКРЫВАЕМ ОКНО ИГРЫ
// =========================

joinButton.addEventListener("click", openJoinModal);

function openJoinModal() {
    joinModal.classList.remove("hidden");

    modalMessage.textContent = "";
    roomCodeInput.value = "";

    roomCodeInput.focus();
}


// =========================
// ЗАКРЫВАЕМ ОКНО
// =========================

closeModalButton.addEventListener("click", closeJoinModal);

function closeJoinModal() {
    joinModal.classList.add("hidden");
}

joinModal.addEventListener("click", function (event) {
    if (event.target === joinModal) {
        closeJoinModal();
    }
});


// Закрытие окна клавишей Escape

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeJoinModal();
    }
});


// =========================
// ПРОВЕРЯЕМ КОД КОМНАТЫ
// =========================

joinForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const roomCode = roomCodeInput.value.trim();

    if (roomCode === "") {
        modalMessage.textContent = "Введи код игровой комнаты.";
        return;
    }

    if (!/^[a-zA-Z0-9-]{4,10}$/.test(roomCode)) {
        modalMessage.textContent =
            "Код должен содержать от 4 до 10 букв или цифр.";

        return;
    }

    modalMessage.textContent =
        "Код принят: " + roomCode +
        ". Подключение к игровому серверу добавим позже.";
});


// =========================
// КНОПКИ ВХОДА И РЕГИСТРАЦИИ
// =========================

loginButton.addEventListener("click", function () {
    alert(
        "Страница входа появится на следующем этапе разработки."
    );
});

registerButton.addEventListener("click", function () {
    alert(
        "Регистрация пользователей будет подключена через Django."
    );
});


// =========================
// КНОПКИ ДЛЯ УЧИТЕЛЕЙ
// =========================

createTestButton.addEventListener("click", function () {
    alert(
        "Здесь будет конструктор тестов для учителей."
    );
});

aiButton.addEventListener("click", function () {
    alert(
        "Здесь будет генератор тестов с помощью ИИ."
    );
});


// =========================
// КНОПКИ В КАРТОЧКАХ ТЕСТОВ
// =========================

const testButtons = document.querySelectorAll("[data-test]");

testButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const testName = button.dataset.test;

        alert(
            "Выбран тест: " + testName +
            "\n\nЗапуск игры подключим после создания игровой системы."
        );
    });
});


// =========================
// ВЫБОР ЯЗЫКА
// =========================

const languages = ["RU", "KZ", "EN"];
let currentLanguageIndex = 0;

languageButton.addEventListener("click", function () {
    currentLanguageIndex =
        (currentLanguageIndex + 1) % languages.length;

    const language = languages[currentLanguageIndex];

    languageButton.textContent = language + " ▾";

    alert(
        "Выбран язык: " + language +
        ". Полный перевод интерфейса добавим позже."
    );
});
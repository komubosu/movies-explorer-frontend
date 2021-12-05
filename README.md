# movies-explorer-frontend
## Фронтенд часть приложения по поиску фильмов.

* [О Приложении](#about)
* [Настройка](#setup)
* [Доступные адресы](#paths)

---

<h2 name="about">О приложении</h2>

* Приложение создано как диплопный проект на курсе Junior Web-developer от Яндекс Практикум. Сайт адаптирован под разные разрешение экрана. Реализована регистрации и авторизации пользователя, поиск фильмов по ключевым словам или категории, также есть возможность просмотреть трейлер фильма на YouTube и добавить фильм в закладки.


---

<h2 name="setup">Настройка</h2>

0. Для полной работы приложения необходимо запустить [бэкенд](https://github.com/komubosu/movies-explorer-api). Без него вы сможете просмотреть только домашнюю страницу.

1. Клонировать репозиторий

    ```bash
    git clone https://github.com/komubosu/movies-explorer-frontend.git
    ```

2. Установить зависимости

    ```bash
    npm i
    ```

3. Запустить виртуальный сервер

    ```bash
    npm start
    ```

4. Вы превосходны

---

<h2 name="paths">Доступные адресы</h2>

* **`/` - Домашная страница приложения. На ней можно узнать информацию о проекте и обо мне.**

  ![Домашная страница](https://i.imgur.com/olb38qX.png)

* **`/sign-up` - Регистрация нового пользователя.**

  ![Регистрация](https://i.imgur.com/8GyD0Xo.png)

* **`/sign-in` - Вход в созданный аккаунт.**

  ![Авторизация](https://i.imgur.com/QU4lGcQ.png)

* **`/profile` - Личный кабинет. Здесь можно увидеть и изменить информацию о пользователе и выйти из аккаунта.**

  ![Личный кабинет](https://i.imgur.com/jjjLzLz.png)

* **`/movies` - Фильмы. Здесь происходит поиск фильмов.**

  ![Фильмы](https://i.imgur.com/Ng04Ou0.png)

* **`/saved-movies` - Сохраненые фильмы. Здесь пользователь может посмотреть фильмы, которые, он сохранил.**

  ![Сохраненые фильмы](https://i.imgur.com/keBHMm7.png)
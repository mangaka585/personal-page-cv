# Alexander Tatevosyan — страница обо мне

Публичное досье: опыт, навыки и контакты. Её можно открыть как сайт и приложить ссылкой к LinkedIn, GitHub, hh.ru и резюме. Есть переключатель RU/EN и кнопка печати в PDF.

## Как опубликовать

Репозиторий сейчас приватный. Бесплатный GitHub Pages работает только с **публичным** репозиторием.

1. GitHub → **Settings → General → Danger zone → Change visibility → Public**
2. GitHub → **Settings → Pages** → Source: **GitHub Actions**
3. После пуша или повторного запуска workflow `Deploy GitHub Pages` сайт будет на
   `https://mangaka585.github.io/personal-page-cv/`

Локально:

```bash
python3 -m http.server 8080
```

Откройте `http://localhost:8080`.

## Что положить в профили

- LinkedIn → Featured / Featured link
- GitHub → поле Website и ссылка в README профиля
- hh.ru → «Сайт» в резюме
- Telegram / почта — как короткая визитка вместо длинного текста

## Откуда данные

Собрано из публичных профилей: [GitHub](https://github.com/mangaka585), [LinkedIn](https://www.linkedin.com/in/alexander-tatevosyan), [hh.ru](https://hh.ru/resume/a9724722ff06ab0f500039ed1f514173763355), AnimeSaver. Если даты или формулировки нужно поправить — это одна правка в `index.html` / `script.js`.

# Alexander Tatevosyan — страница обо мне

Публичное досье: опыт, навыки и контакты. Её можно открыть как сайт и приложить ссылкой к LinkedIn, GitHub, hh.ru и резюме. Есть переключатель RU/EN и кнопка печати в PDF.

## Как опубликовать

Репозиторий сейчас приватный. Для бесплатного GitHub Pages его нужно сделать публичным (или нужен GitHub Pro).

1. GitHub → **Settings → Pages**
2. Source: **GitHub Actions**
3. После мержа в `main` workflow `Deploy GitHub Pages` выложит сайт
4. Адрес будет вида `https://mangaka585.github.io/personal-page-cv/`

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

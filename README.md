# Landing page

[Лендинг мгазина с гитарами](https://denis-gh.github.io/landing-page-rhythm/) 

---

## Содержание
- [Используемые технологии](#используемые-технологии)
- [Особенности](#особенности)
- [Недостатки в реализации проекта](#недостатки-в-реализации-проекта)
- [Автор](#автор)

## Используемые технологии

- **HTML/CSS**: Структура и стилизация приложения.
- **JavaScript + Swiper.js**: Реализация слайдера для динамического отображения отзывов клиентов.

## Особенности

- БЭМ, семантика, адаптив.
- В разделе с отзывами предусмотренно управление длинным текстом: еcли текст отзыва будет превышать 4 строки, он обрежется, и его можно будет раскрыть по кнопке "more" (и скрыть по кнопке "less").
- Адаптивные картинки: предусмотрена возможность вставлять изображения любого размера — их размеры будут подстраиваться под размеры, определённые в макете.
- Если картинка не загрузилась, показывается placeholder.
- "loading: lazy;" для картинок.
- Изображения оптимизированы через [Squoosh](https://squoosh.app/).

## Недостатки в реализации проекта

1. Излишний JS-код:
    - Управление переполнением текста в отзывах реализовано следующим образом:
    ```js
    const texts = document.querySelectorAll(".slide-swiper-reviews__text")

    texts.forEach((item) => {
    const styles = window.getComputedStyle(item)
    const lineHeight = parseFloat(styles.lineHeight)
    item.style.maxHeight = `${lineHeight * 4}px`

    if (Math.round(item.scrollHeight / lineHeight) > 4) {
        const button = item.querySelector(".slide-swiper-reviews__expand-btn")
        button.style.display = "block"
        button.addEventListener("click", () => {
            if (item.style.maxHeight == `${lineHeight * 4}px`) {
                item.style.maxHeight = `${item.scrollHeight}px`
                button.textContent = "Less"
            } else {
                item.style.maxHeight = `${lineHeight * 4}px`
                button.textContent = "More"
            }
        })
    }
    })
    ```
    часть реализации этого функционала можно перенести в css следующим образом:
    ```css
    .slide-swiper-reviews__text {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        -webkit-line-clamp: 4;
    }
    ```
2. Структура CSS:
    - Все стили написаны в одном большом файле CSS. Это может усложнить поддержку и масштабирование проекта в будущем. Возможно, имеет смысл разделить стили на несколько файлов по компонентам.

## Автор
Денис Вакуленко:
- [telegram](https://t.me/denis0tg)
- [e-mail](mailto:00vakulenko@gmail.com)

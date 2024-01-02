# Тестовое на должность верстальщика дла одной из компаний

Вёрстка по макету в Figma
Посмотреть на макет в pdf можно по ссылке https://disk.yandex.ru/d/qxVjZXPUOQ9hEw

Требования к вёрстке:
1. Desktop first
2. БЭМ. Нотация: block__element--modificator
3. Карточка должна быть компонентом, перестроение по модификатору на сам БЭМ блок. Cтилизация по каскаду от модификатора.
4. В проекте необходимо разделить стили для каждого БЭМ блока в отдельные файлы и с помощью @import подключить их в файле style.css.
5. Всю разметку нужно писать внутри обертки с классом .page-content.
6. Десктопное разрешение 1280px, на больших экранах контент не меняет своей ширины.
7. При уменьшении экрана до 1024px контент должен “резиново” сжиматься, при этом минимальная ширина карточки должна быть 380px.
8. Технологии используемые: Флексы, гриды.
9. Pixel perfect с погрешностью +-10px.
10. Микроанимации при наведении на саму карточку:<br>
а) Сама карточка должна плавно увеличивать на 1.01.<br>
б) border-radius у картинки должен плавно меняться на значение 0 70px.<br>
в) Должна появляться тень box-shadow: 5px 5px 8px rgba(0, 111, 57, 0.40);
11. Микроанимации при наведении на ссылки:<br>
а) Ссылка с белым фоном, при наведении должна менять фон на зеленый (как цвет рамки), а текст должен становиться белым<br>
б) Ссылка с фиолетовым фоном, при наведении должна становиться с белым фоном, фиолетовой рамкой, и фиолетовым цветом текста.
12. Адаптив:<br>
а) На мобильный вид верстка должна переходить на разрешении <=767px.<br>
б) В макете в мобильном виде показаны только три карточки, остальные сделать нужно по аналогии.<br>
в) Когда верстка перестраивается на планшетный вид (<1024px), с карточек у которых есть модификатор, этот модификатор должен удаляться, чтобы карточка стала стандартным, начальным видом. При возвращении на десктопный вид, модификатор должен возвращаться.

Часть изображений были даны. Поэтому они не были экспортированы в более современный формат webp.
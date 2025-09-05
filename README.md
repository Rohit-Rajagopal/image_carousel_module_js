# Image_Carousel_module
An Image Carousel implementation.
```bash
npm i @craze98101/image-carousel
```
> **Note:** Must be used with Webpack (or any other bundler that can load css files)

---

## Usage

### JS
- Import the initialization function.

```js
import { carouselInit } from "@craze98101/image-carousel"
```
- Call the function at the bottom of your js file.

---

### HTML
- Add the class `image-carousel` to the div which will contain the carousel.
- Set the attribute `data-nav="true"` if you want navigation dots below the images. 
- If you want the carousel to change images after some amount of time, set the data-timer attribute to the amount of time in **milliseconds**.
- Add the class `image-frame` to the frame div (the images will be displayed on this div).
- Add the class `images` to a div within the `image-frame` div. This div will contain all the images of the carousel. Add any images as img tags.
- Add the classes `image-carousel-prev` and `image-carousel-next` to the buttons that will move the carousel to the previous and next image respectively. You can have more than one of each button.

#### Example:

```html
<div class="image-carousel" data-nav="true" data-timer="5000">
    <div class="image-frame">
        <div class="images">
            <img src="sample1.jpg" alt="">
            <img src="sample2.jpg" alt="">
            <img src="sample3.jpg" alt="">
        </div>
    </div>
    <button class="image-carousel-prev">Prev</button>
    <button class="image-carousel-next">Next</button>
</div>
```

---

### Styling
This package only implements the **barebones architecture** for an image carousel.
Any additional styling (improved aesthetics, buttons positioned over the images etc) can be implemented by the user at their convenience.
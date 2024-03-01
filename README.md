# Elementary Carousel

Elementary Carousel is a lightweight and easy-to-use carousel component for React applications. It provides a simple yet effective way to showcase content in a carousel format.

## Installation

You can install Elementary Carousel via npm:

```bash
npm install elementary-carousel
```

## Usage

To use Elementary Carousel in your React application, simply import it and render it with your desired content.

```jsx
import React from 'react';
import ElementaryCarousel from 'elementary-carousel';

const CarouselExample = () => {
  const carouselItems = [
    { id: 1, content: 'Slide 1' },
    { id: 2, content: 'Slide 2' },
    { id: 3, content: 'Slide 3' },
  ];

  return (
    <ElementaryCarousel items={carouselItems} />
  );
};

export default CarouselExample;
```

## Props

Elementary Carousel accepts the following props:

- `carouselContentArr`: An array of objects representing the content to be displayed in the carousel. Each object should have a unique `id` and a `content` property.


## Examples

### Basic Carousel

```jsx
import React from 'react';
import ElementaryCarousel from 'elementary-carousel';

const BasicCarouselExample = () => {
  const items = [
    { id: 1, content: 'Slide 1' },
    { id: 2, content: 'Slide 2' },
    { id: 3, content: 'Slide 3' },
  ];

  return (
    <ElementaryCarousel items={items} />
  );
};

export default BasicCarouselExample;
```

### Carousel with Custom Options

```jsx
import React from 'react';
import ElementaryCarousel from 'elementary-carousel';

const CustomCarouselExample = () => {
  const items = [
    { id: 1, content: 'Slide 1' },
    { id: 2, content: 'Slide 2' },
    { id: 3, content: 'Slide 3' },
  ];

  return (
    <ElementaryCarousel
      items={items}
      autoplay={false}
      showArrows={false}
      showDots={false}
    />
  );
};

export default CustomCarouselExample;
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to customize the README as needed for your package!
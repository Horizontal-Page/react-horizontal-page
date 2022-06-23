## [React-Horizontal-Page](https://github.com/Horizontal-Page/react-horizontal-page) is a open source library that will help you to make a easier horizontal scrolling page.

## Installation

Install with npm/yarn.

```bash
  npm i react-horizontal-page
  yarn add react-horizontal-page
```

## API Reference

| Props        | Type            | Default Value | Description                                                                                                                                              |
| :----------- | :-------------- | :------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `multiplier` | `number`        | `1`           | **Optional**. _multiplier for the initial height_ **0 - 2**                                                                                              |
| `style`      | `CSSProperties` | `none`        | **Optional**. _adding style to the Wrapper_                                                                                                              |
| `className`  | `number`        | `none`        | **Optional**. _adding className to the Wrapper_                                                                                                          |
| `lerp`       | `number`        | `0`           | **Optional**. _Linear interpolation (lerp) intensity. Float between **0 and N >= 0**. This defines the "smoothness" intensity. The higher the smoother._ |

## Usage/Examples

Basic usage

```javascript
// NOTE!! Horizontal page height is window.innerHeight.
// NOTE!! Wrapper is a flex box so you can use flexbox css properties like gap.

import { HorizontalPage } from "react-horizontal-page";

function Page() {
  return (
    <HorizontalPage lerp={1}>
      <div style={{ fontSize: "30vh", whiteSpace: "nowrap" }}>
        He heard the crack echo in the late afternoon about a mile away. His
        heart started racing and he bolted into a full sprint. "It wasn't a
        gunshot, it wasn't a gunshot," he repeated under his breathlessness as
        he continued to sprint.
        <br /> He heard the crack echo in the late afternoon about a mile away. His
        heart started racing and he bolted into a full sprint. "It wasn't a gunshot,
        it wasn't a gunshot," he repeated under his breathlessness as he continued
        to sprint.
      </div>
    </HorizontalPage>
  );
}
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

## Support

For support, email babailanxx@gmail.com.

## Features

- Horizontal page with scroll wheel.
- Fullscreen mode
- Cross platform

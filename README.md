_[React-Horizontal-Page](https://github.com/Horizontal-Page/react-horizontal-page) is a simple open source library that will help you to make a easier horizontal scrolling page._

## Installation

Install with npm/yarn.

```bash
  npm i react-horizontal-page
  yarn add react-horizontal-page
```

## Reference

| Props        | Type            | Default Value | Description                                                                                                                                               |
| :----------- | :-------------- | :------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `multiplier` | `number`        | `1`           | **Optional**. _multiplier for the initial height this numeric between_ **0 to N >= 0**.                                                                   |
| `style`      | `CSSProperties` | `none`        | **Optional**. _adding style to the Wrapper_.                                                                                                              |
| `className`  | `number`        | `none`        | **Optional**. _adding className to the Wrapper_.                                                                                                          |
| `lerp`       | `number`        | `0`           | **Optional**. _Linear interpolation (lerp) intensity. numeric between **0 to N >= 0**. This defines the "smoothness" intensity. The higher the smoother._ |

_combine with [intersection-observer](https://www.npmjs.com/package/react-intersection-observer) React implementation of the Intersection Observer API to tell you when an element enters or leaves the viewport. Contains both a Hooks, render props and plain children implementation._

## Usage/Examples

Basic usage

```javascript
import HorizontalPage from "react-horizontal-page";

function Page() {
  return (
    <HorizontalPage multiplier={1} lerp={0}>
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

[MIT](https://github.com/Horizontal-Page/react-horizontal-page/blob/master/LICENSE)

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

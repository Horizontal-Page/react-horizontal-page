[React-Horizontal-Page](https://github.com/Horizontal-Page/react-horizontal-page) is a open source library that will help you to make a easier horizontal scrolling page.

## Installation

Install with npm/yarn.

```bash
  npm i react-horizontal-page
  yarn add react-horizontal-page
```

## API Reference

| Props        | Type            | Description                                                  |
| :----------- | :-------------- | :----------------------------------------------------------- |
| `multiplier` | `number`        | **Optional**. _how fast the scrolling is, between_ **0 - 2** |
| `style`      | `CSSProperties` | **Optional**. _adding style to the Wrapper_                  |
| `className`  | `number`        | **Optional**. _adding className to the Wrapper_              |

## Usage/Examples

```javascript
<!-- NOTE!! HORIZONTAL PAGE MAX HEIGHT IS 100VH -->
<!-- NOTE!! WRAPPER IS A FLEX BOX SO YOU CAN USE FLEXBOX CSS PROPERTIES LIKE GAP -->

import { HorizontalPage } from "react-horizontal-page";

function Page() {
  return (
    <HorizontalPage  style={{ gap:"2em" }}>
        <div
          style={{
            height: "100vh",
            fontSize: "80vh",
          }}
        >
          I DONT KNOW MY NAME
        </div>
        <div
          style={{
            height: "100vh",
            fontSize: "80vh",
          }}
        >
          MY NAME IS UNKNOWN
        </div>
    </HorizontalPage>
  )
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

[React-Horizontal-Page](https://www.lua.org/) is a open source library that will help you to make a easier horizontal scrolling page.

## Features

- Horizontal page with scroll wheel.
- Fullscreen mode
- Cross platform

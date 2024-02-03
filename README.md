# discodoodle

Helpers for making Discord-related things.

## Features

- Fully type-safe
- Easy to use
- Fastens your development

## Installation

```sh
npm i discodoodle
yarn add discodoodle
pnpm add discodoodle
```

## Usage

```js
// esm
import discodoodle from "discodoodle";
// require
const discodoodle = require("discodoodle");
```

### Convert time to Discord timestamp

This simple function helps you to convert unix epoch time (milliseconds) to Discord timestamps.

#### Code

```js
discodoodle.convertTimeToDiscord(Date.now() - 3_000, "R")
```

### Result

The result (when sent on Discord as a message) should show as "3 seconds ago".

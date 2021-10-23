# nms website

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

## Font handling

All fonts are compressed variable fonts in woff2. To generate the right files use the following command:

```bash
pyftsubset --unicodes="U+0020-007E,U+00A0-00FF,U+0100-017F" --layout-features="" --flavor="woff2" --output-file="Out.woff2" MyOriginalBigFont.ttf
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.

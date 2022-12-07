In a project where [Vite](https://github.com/vitejs/vite) is installed, you can use the vite binary in your npm scripts, or run it directly with `npx vite`.
You can specify additional CLI options like `--port` or `--https`. For a full list of CLI options, run `npx vite --help`

# BUILD

You may run npm run build command to build the app.
```bash
$ npm run build
```
By default, the build output will be placed at `dist`. You may deploy this `dist` folder to any of your preferred platforms.

# DEV

The `vite preview` command will boot up a local static web server that serves the files from dist at `http://localhost:8080`. 
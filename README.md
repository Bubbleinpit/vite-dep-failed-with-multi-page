## Reproduction

```bash
yarn && yarn dev
```

## Describe the bug

If I install a package which is a [optimizable dependency](https://vitejs.dev/guide/dep-pre-bundling.html) and make a multi-page config described as [official doc](https://vitejs.dev/guide/build.html#multi-page-app), then the dep optimization would fail. Seems it consider the nested html as a js module.

```bash
Optimizable dependencies detected:
mapbox-gl
Pre-bundling them to speed up dev server page load...
(this will be run only when your dependencies have changed)

Dep optimization failed with error:
Unexpected token (Note that you need plugins to import files that are not JavaScript)
index.html
1: <!DOCTYPE html>
   ^
2: <html lang="en">
3: <head>
Port 3000 is in use, trying another one...
Optimizable dependencies detected:
mapbox-gl
Pre-bundling them to speed up dev server page load...
(this will be run only when your dependencies have changed)

Dep optimization failed with error:
Unexpected token (Note that you need plugins to import files that are not JavaScript)
nested\index.html
1: <!DOCTYPE html>
   ^
2: <!-- nested page -->
3: <html lang="en">

  Vite dev server running at:
.............
```

## System Info

- `vite` version: 2.0.0-beta.5
- Operating System: Windows 10 20H2
- Node version: 12.13.1
- yarn version: 1.17.3

## Logs (Optional if provided reproduction)

```bash
  vite:config bundled config file loaded in 120ms +0ms
  vite:config using resolved config: {
  vite:config   build: {
  vite:config     base: '/',
  vite:config     target: 'es2019',
  vite:config     outDir: 'dist',
  vite:config     assetsDir: 'assets',
  vite:config     assetsInlineLimit: 4096,
  vite:config     cssCodeSplit: true,
  vite:config     sourcemap: false,
  vite:config     rollupOptions: { input: [Object] },
  vite:config     minify: 'terser',
  vite:config     terserOptions: {},
  vite:config     write: true,
  vite:config     manifest: false,
  vite:config     lib: false
  vite:config   },
  vite:config   mode: 'development',
  vite:config   server: {},
  vite:config   configPath: '/projects/node/vite-project/vite.config.js',
  vite:config   inlineConfig: {
  vite:config     root: undefined,
  vite:config     mode: 'development',
  vite:config     logLevel: undefined,
  vite:config     server: {}
  vite:config   },
  vite:config   root: '/projects/node/vite-project',
  vite:config   command: 'serve',
  vite:config   isProduction: false,
  vite:config   optimizeCacheDir: '\\projects\\node\\vite-project\\node_modules\\.vite',
  vite:config   alias: [
  vite:config     {
  vite:config       find: /^\/@vite\//,
  vite:config       replacement: 'C:\\Users\\ljp\\AppData\\Roaming\\npm\\node_modules\\vite\\dist\\client/'
  vite:config     }
  vite:config   ],
  vite:config   plugins: [
  vite:config     'alias',
  vite:config     'vite:resolve',
  vite:config     'vite:html',
  vite:config     'vite:css',
  vite:config     'vite:esbuild',
  vite:config     'json',
  vite:config     'vite:wasm',
  vite:config     'vite:worker',
  vite:config     'vite:asset',
  vite:config     'vite:css-post',
  vite:config     'vite:client-inject',
  vite:config     'vite:imports'
  vite:config   ],
  vite:config   env: { BASE_URL: '/', MODE: 'development', DEV: true, PROD: false },
  vite:config   assetsInclude: [Function: assetsInclude],
  vite:config   transformInclude: [Function: transformInclude],
  vite:config   logger: {
  vite:config     info: [Function: info],
  vite:config     warn: [Function: warn],
  vite:config     error: [Function: error],
  vite:config     clearScreen: [Function: clearScreen]
  vite:config   }
  vite:config } +3ms
  vite:optimize optimizing mapbox-gl (no exports, likely commonjs) +0ms
Optimizable dependencies detected:
mapbox-gl
Pre-bundling them to speed up dev server page load...
(this will be run only when your dependencies have changed)

Dep optimization failed with error:
Unexpected token (Note that you need plugins to import files that are not JavaScript)
nested\index.html
1: <!DOCTYPE html>
   ^
2: <!-- nested page -->
3: <html lang="en">
Port 3000 is in use, trying another one...
  vite:optimize optimizing mapbox-gl (no exports, likely commonjs) +45ms
Optimizable dependencies detected:
mapbox-gl
Pre-bundling them to speed up dev server page load...
(this will be run only when your dependencies have changed)

Dep optimization failed with error:
Unexpected token (Note that you need plugins to import files that are not JavaScript)
nested\index.html
1: <!DOCTYPE html>
   ^
2: <!-- nested page -->
3: <html lang="en">

  Vite dev server running at:

  > Network:  http://172.24.208.1:3001/
  > Network:  http://172.20.80.1:3001/
  > Network:  http://192.168.4.120:3001/
  > Local:    http://localhost:3001/

  ready in 669ms.

  vite:spa-fallback Rewriting GET / to /index.html +0ms
  vite:time 3ms   /index.html +0ms
  vite:spa-fallback Rewriting GET / to /index.html +4ms
  vite:time 0ms   /index.html +2ms
  vite:spa-fallback Rewriting GET / to /index.html +1ms
  vite:time 0ms   /index.html +1ms
  vite:spa-fallback Rewriting GET / to /index.html +1ms
  vite:time 0ms   /index.html +1ms
  vite:spa-fallback Rewriting GET / to /index.html +1ms
  vite:time 0ms   /index.html +1ms
  vite:spa-fallback Rewriting GET / to /index.html +13ms
  vite:time 0ms   /index.html +13ms
  vite:resolve 1ms   /@vite/client -> /Users/ljp/AppData/Roaming/npm/node_modules/vite/dist/client/client +0ms
  vite:resolve 1ms   /main.js -> /projects/node/vite-project/main.js +4ms
undefined [vite] Internal server error:
  Error: Failed to load url /@vite/client. Does the file exist?
      at transformRequest (C:\Users\ljp\AppData\Roaming\npm\node_modules\vite\dist\node\chunks\dep-9e7f6786.js:66835:15)
  vite:time 15ms  /@vite/client +91ms
  vite:load 12ms  [fs] /main.js +0ms
  vite:resolve 0ms   ./style.css -> /projects/node/vite-project/style.css +15ms
  vite:resolve 0ms   /style.css -> /projects/node/vite-project/style.css +0ms
  vite:rewrite 3ms   main.js +0ms
  vite:transform 5ms   /main.js +0ms
  vite:time 18ms  /main.js +7ms
  vite:load 0ms   [fs] /style.css +9ms  
  vite:hmr [self-accepts] style.css +0ms
  vite:rewrite 0ms   style.css +12ms    
  vite:transform 6ms   /style.css +11ms 
  vite:time 8ms   /style.css +11ms
```

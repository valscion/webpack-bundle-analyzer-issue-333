## Issue
- https://github.com/webpack-contrib/webpack-bundle-analyzer/issues/333

## Run
Run `npm run bundle`

### webpack error
```
webpack-bundle-issue kbradl16$ npm run bundle

> webpack-bundle-issue@1.0.0 bundle /Users/kbradl16/projects/webpack-bundle-issue
> webpack

/Users/kbradl16/projects/webpack-bundle-issue/node_modules/webpack-bundle-analyzer/lib/BundleAnalyzerPlugin.js:90
      compiler.hooks.done.tapAsync('webpack-bundle-analyzer', done);
                          ^

TypeError: Cannot read property 'tapAsync' of undefined
    at BundleAnalyzerPlugin.apply (/Users/kbradl16/projects/webpack-bundle-issue/node_modules/webpack-bundle-analyzer/lib/BundleAnalyzerPlugin.js:90:27)
    at /Users/kbradl16/projects/webpack-bundle-issue/node_modules/enhanced-resolve/lib/ResolverFactory.js:314:10
    at Array.forEach (<anonymous>)
    at Object.exports.createResolver (/Users/kbradl16/projects/webpack-bundle-issue/node_modules/enhanced-resolve/lib/ResolverFactory.js:313:10)
    at ResolverFactory._create (/Users/kbradl16/projects/webpack-bundle-issue/node_modules/webpack/lib/ResolverFactory.js:57:28)
    at ResolverFactory.get (/Users/kbradl16/projects/webpack-bundle-issue/node_modules/webpack/lib/ResolverFactory.js:49:28)
    at NormalModuleFactory.getResolver (/Users/kbradl16/projects/webpack-bundle-issue/node_modules/webpack/lib/NormalModuleFactory.js:521:31)
    at /Users/kbradl16/projects/webpack-bundle-issue/node_modules/webpack/lib/NormalModuleFactory.js:165:32
    at /Users/kbradl16/projects/webpack-bundle-issue/node_modules/webpack/lib/NormalModuleFactory.js:129:4
    at handleExternal (/Users/kbradl16/projects/webpack-bundle-issue/node_modules/webpack/lib/ExternalModuleFactoryPlugin.js:28:34)
    at /Users/kbradl16/projects/webpack-bundle-issue/node_modules/webpack/lib/ExternalModuleFactoryPlugin.js:103:26
    at next (/Users/kbradl16/projects/webpack-bundle-issue/node_modules/webpack/lib/ExternalModuleFactoryPlugin.js:65:43)
    at handleExternals (/Users/kbradl16/projects/webpack-bundle-issue/node_modules/webpack/lib/ExternalModuleFactoryPlugin.js:71:7)
    at /Users/kbradl16/projects/webpack-bundle-issue/node_modules/webpack/lib/ExternalModuleFactoryPlugin.js:101:5
    at handleExternal (/Users/kbradl16/projects/webpack-bundle-issue/node_modules/webpack/lib/ExternalModuleFactoryPlugin.js:28:34)
    at /Users/kbradl16/projects/webpack-bundle-issue/node_modules/webpack/lib/ExternalModuleFactoryPlugin.js:103:26
    at next (/Users/kbradl16/projects/webpack-bundle-issue/node_modules/webpack/lib/ExternalModuleFactoryPlugin.js:65:43)
    at handleExternals (/Users/kbradl16/projects/webpack-bundle-issue/node_modules/webpack/lib/ExternalModuleFactoryPlugin.js:71:7)
    at /Users/kbradl16/projects/webpack-bundle-issue/node_modules/webpack/lib/ExternalModuleFactoryPlugin.js:101:5
    at /Users/kbradl16/projects/webpack-bundle-issue/node_modules/webpack/lib/NormalModuleFactory.js:400:5
    at AsyncSeriesWaterfallHook.eval [as callAsync] (eval at create (/Users/kbradl16/projects/webpack-bundle-issue/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:4:1)
    at AsyncSeriesWaterfallHook.lazyCompileHook (/Users/kbradl16/projects/webpack-bundle-issue/node_modules/tapable/lib/Hook.js:154:20)
    at NormalModuleFactory.create (/Users/kbradl16/projects/webpack-bundle-issue/node_modules/webpack/lib/NormalModuleFactory.js:381:28)
    at /Users/kbradl16/projects/webpack-bundle-issue/node_modules/webpack/lib/Compilation.js:1063:18
    at Semaphore.acquire (/Users/kbradl16/projects/webpack-bundle-issue/node_modules/webpack/lib/util/Semaphore.js:29:4)
    at Compilation._addModuleChain (/Users/kbradl16/projects/webpack-bundle-issue/node_modules/webpack/lib/Compilation.js:1062:18)
    at Compilation.addEntry (/Users/kbradl16/projects/webpack-bundle-issue/node_modules/webpack/lib/Compilation.js:1164:8)
    at /Users/kbradl16/projects/webpack-bundle-issue/node_modules/webpack/lib/SingleEntryPlugin.js:46:17
    at AsyncParallelHook.eval [as callAsync] (eval at create (/Users/kbradl16/projects/webpack-bundle-issue/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:5:1)
    at AsyncParallelHook.lazyCompileHook (/Users/kbradl16/projects/webpack-bundle-issue/node_modules/tapable/lib/Hook.js:154:20)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! webpack-bundle-issue@1.0.0 bundle: `webpack`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the webpack-bundle-issue@1.0.0 bundle script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/kbradl16/.npm/_logs/2020-02-21T02_41_51_252Z-debug.log
```
#!/usr/bin/env zx
var ghpages = require('gh-pages');

await $`./gradlew :jsBrowserProductionWebpack`
await $`rm -fr dist`
await $`mkdir dist`
await $`cp -r build/js/packages/PerlinNoise/kotlin/* ./dist`

ghpages.publish('./dist', {
    repo: "https://github.com/yidafu/Perlin-Noise.git",
}, function(err) {
    if (err) console.log(err)
    else console.log(chalk.green("updated github pages"))
});

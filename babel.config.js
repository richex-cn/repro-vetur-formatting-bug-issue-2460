module.exports = {
  presets: [
    ['@vue/cli-plugin-babel/preset', {
      polyfills: ['es.string.includes', 'es.promise', 'es.promise.finally']
    }]
  ]
}

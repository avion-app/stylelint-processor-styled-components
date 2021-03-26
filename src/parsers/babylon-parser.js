const babylon = require('@babel/parser')

module.exports = (type, plugins, options = {}) => input => {
  if (options.plugins) delete options.plugins
  // Remove nested plugins, as we already provide a way to explicitly pass them

  return babylon.parse(input, {
    sourceType: 'module',
    ...options
    plugins: [type].concat(
      plugins || [
        'jsx',
        ['decorators', { decoratorsBeforeExport: true }],
        'classProperties',
        'exportExtensions',
        'functionBind',
        'functionSent'
      ]
    )
  })
}

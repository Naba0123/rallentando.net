exports.markdownPath = (absolutePath) => {
  let path = absolutePath.replace(/.*\/src\/markdown-pages/, '')
  const splitPath = path.split('/')
  path = path.replace('/' + splitPath[splitPath.length - 1], '')
  return path
}
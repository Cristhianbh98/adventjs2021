// El sistema operativo de Santa Claus

export default function fixFiles (files) {
  const filesCount = {}

  return files.map(file => {
    if (file in filesCount) filesCount[file]++
    else filesCount[file] = 0

    return filesCount[file] ? `${file}(${filesCount[file]})` : file
  })
}

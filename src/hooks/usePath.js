const usePath = () => {
  const getPath = (pathName, depth = 1) => {
    pathName = pathName.slice(1)
    pathName = pathName.split('/', depth)
    pathName = pathName.join('/')
    pathName = `/${pathName}`

    return pathName
  }

  return { getPath }
}

export default usePath

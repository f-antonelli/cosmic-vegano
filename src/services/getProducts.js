const getProducts = async () => {
  try {
    const res = await fetch('../../data/data.json')
    const data = await res.json()

    return data
  } catch (err) {
    console.log(err)
  }
}

export default getProducts

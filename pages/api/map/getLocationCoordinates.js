const getLocationCoordinates = async (req, res) => {
  const mapboxUrl = `${process.env.NEXT_PUBLIC_MAPBOX_PLACE_API_URL}/${req.body.location}.json?country=HK&access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`;

  try {
    console.log(mapboxUrl)
    const response = await fetch(mapboxUrl)
    const data = await response.json()
    res.status(200).send({message: 'success', data: data.features[0].center})
  } catch (error) {
    res.status(500).send({message: 'error', data: error.message})
  }
};

export default getLocationCoordinates;

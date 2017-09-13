## audioWhere

so the first hurdle is getting usable info from google about the place and then using that to make synth parameters

#### navigator.geolocation.getCurrentPosition()

info received:
- lat long
- heading
- altitude
- speed

#### lat lng
- lat > 0 northern hemisphere - less syncopation
- lat < 0 southern - more syncopation
- long > 0 western - western scales
- long < 0 eastern - microtonal


#### Google Places API
ex: https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=YOUR_API_KEY

info recieved:
- num of results
  - many: populated
  - few: sparse
  - zero: uninhabited
- types of places nearby
  - political, education, food
  - [full list](https://developers.google.com/places/supported_types)

#### Data science toolkit

##### coordinates2politics
ex: http://www.datasciencetoolkit.org/coordinates2politics/37.769456%2c-122.429128

info received:
- country
- state
- county
- city

##### coordinates2statistics
ex: http://www.datasciencetoolkit.org/coordinates2statistics/37.769456%2c-122.429128?statistics=population_density

info received:
- demographics
- pop density
- elevation
- mean temperature
- mean precip
- land cover
 - http://forobs.jrc.ec.europa.eu/products/glc2000/legend/GLC2000_Lccs_110604.pdf
 - index in json refers to lcc label ^

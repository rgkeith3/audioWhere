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



#### Data science toolkit
##### coordinates2statistics
ex: http://www.datasciencetoolkit.org/coordinates2statistics/37.769456%2c-122.429128?statistics=population_density

info received:
- demographics
- pop density
- elevation
- mean temperature
- mean precip
- land cover http://forobs.jrc.ec.europa.eu/products/glc2000/legend/GLC2000_Lccs_110604.pdf
 - index in json refers to lcc label ^

#### OpenWeatherMap

https://openweathermap.org/current


### different sounds and where to find them

- high elevation - high pass filter, more in the clouds
- lower elevation - heavier, lower sounds
- desert - little rain fall - longer tones, longer reverb, cleaner sound - less chorus
- rainforest - more rain fall - more frenetic, more noisy
- hotter - brighter tones, maybe more mid range
- colder - less mid range
- pop density - more rhythmic

import type { CityType } from "../types/CityType";

export function City({cityName, countryName, year, image} : CityType){
    return <div style={{ 
            width: '300px',
            borderRadius: '8px',
            margin: '10px'
        }}>
        City {cityName} in country {countryName} city was founded in {year} 
    <img 
        src={image} 
        alt={cityName}
        style={{ 
            width: '300px', 
            height: 'auto'}}/>
    </div>
}
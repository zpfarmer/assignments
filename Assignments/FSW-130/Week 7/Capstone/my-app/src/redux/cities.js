import cityList from "../dataArrays/cityList"

export function addCity(city) {
    return {
        type: "ADD_CITY",
        payload: city
    }
}

export function deleteCity(city) {
    return {
        type: "DELETE_MOVIE",
        payload: city
    }
}

function cityReducer(cities = cityList, action) {
    switch (action.type) {
        case "ADD_CITY":
            return [...cities, action.payload];
        case "DELETE_MOVIE": {
            const updatedArr = cities.filter (
                city => city.toLowerCase() !== action.payload.toLowerCase()
                );
                return updatedArr;
        }
        default: 
            return cities
    }
}

export default cityReducer
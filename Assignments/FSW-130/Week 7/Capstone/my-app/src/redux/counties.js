import countyList from "../dataArrays/countyList"

export function addCounty(county) {
    return {
        type: "ADD_COUNTY",
        payload: county
    }
}

export function deleteCounty(county) {
    return {
        type: "DELETE_COUNTY",
        payload: county
    }
}

function countyReducer(counties = countyList, action) {
    switch (action.type) {
        case "ADD_COUNTY":
            return [...counties, action.payload];
        case "DELETE_COUNTY": {
            const updatedArr = counties.filter (
                county => county.toLowerCase() !== action.payload.toLowerCase()
                );
                return updatedArr;
        }
        default: 
            return counties
    }
}

export default countyReducer
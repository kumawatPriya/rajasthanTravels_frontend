const BASE_URL = process.env.REACT_APP_BASE_URL
console.log(BASE_URL, "baseURL")

export const Config = {
     Signup_Api: `${BASE_URL}signup`,
     Login_Api: `${BASE_URL}login`,
     Get_travel_packages: `${BASE_URL}travelCards`,
     Get_Special_packages: `${BASE_URL}api/getPackage`
}
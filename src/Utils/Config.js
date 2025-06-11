const BASE_URL = process.env.REACT_APP_BASE_URL
console.log(BASE_URL, "baseURL")

export const Config = {
     Signup_Api: `${BASE_URL}signup`,
     Login_Api: `${BASE_URL}login`,
     Get_travel_packages: `${BASE_URL}api/getHolidayPackages`,
     Get_Special_packages: `${BASE_URL}api/getPackage`,
     Get_Package_Details: `${BASE_URL}api/getPackageDetails`,
     Get_Packages_By_Interest: `${BASE_URL}api/getInterestedPackage`,
     Get_Subscribed: `${BASE_URL}api/subscribe`,
     Contact_us: `${BASE_URL}api/contact`
}
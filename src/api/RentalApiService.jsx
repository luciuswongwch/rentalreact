import { apiClient } from "./ApiClient";

export function getRentalById(id) {
    return apiClient.get(`/api/rentals/${id}`)
}

export function getRentalsWidget() {
    return apiClient.get(`/api/rentals?numberOfRentals=3`);
}

export function getRentalsWidgetByLocation(location) {
    return apiClient.get(`/api/rentals/location/top3/${location}`);
}

export function getRentalsCarousel() {
    return apiClient.get(`/api/rentals?numberOfRentals=10`);
}

export function getRentalsPropertiesPage() {
    return apiClient.get(`/api/rentals?numberOfRentals=12`);
}

export function getRentalsByType(propertyType) {
    return apiClient.get(`/api/rentals/type/${propertyType}`);
}

export function getRentalsByLocation(location) {
    return apiClient.get(`/api/rentals/location/${location}`);
}

export function getRentalTypeCount() {
    return apiClient.get(`/api/rentals/countByType`);
}

export function getRentalRegionCount() {
    return apiClient.get(`/api/rentals/countByRegion`);
}
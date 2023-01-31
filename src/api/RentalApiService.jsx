import { apiClient } from "./ApiClient";

export function getRentalsHomePage() {
    return apiClient.get(`/api/rentals?numberOfRentals=10`);
}

export function getRentalsByType(propertyType) {
    return apiClient.get(`/api/rentals/type/${propertyType}`);
}

export function getRentalsFooter() {
    return apiClient.get(`/api/rentals?numberOfRentals=3`);
}

export function getRentalCountFooter() {
    return apiClient.get(`/api/rentals/countByType`);
}
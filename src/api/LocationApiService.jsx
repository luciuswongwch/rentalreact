import { apiClient } from "./ApiClient";

export function getRegionsHomePage() {
    return apiClient.get(`/api/regions?numberOfRegions=5`);
}

export function getRegionByLocation(location) {
    return apiClient.get(`/api/regions/${location}`);
}
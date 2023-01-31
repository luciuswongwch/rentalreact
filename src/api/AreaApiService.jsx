import { apiClient } from "./ApiClient";

export function getAreasHomePage() {
    return apiClient.get(`/api/areas?numberOfRegions=5`);
}
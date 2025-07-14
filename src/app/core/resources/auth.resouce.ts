import { httpResource } from "@angular/common/http";

const API_BASE_URL = "https://api.example.com"; // this should be defined in your constants

export class AuthResource {
    private readonly authResource = httpResource({
        url: `${API_BASE_URL}/auth`,
        method: "GET",
        headers: { "Content-Type": "application/json" },
        params: {},
        reportProgress: true,
        withCredentials: true,
        transferCache: true,
    })
}
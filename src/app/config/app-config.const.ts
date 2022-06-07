/**
 * Global Configuration, i.e. languages, locale, date formats etc.
 *
 * Shared settings for all environments: dev, prod, stage etc.
 */

import { HttpHeaders } from "@angular/common/http";

let token = localStorage.getItem("token");
let headers: HttpHeaders = new HttpHeaders();
headers = headers.append("Content-Type", "application/json");
headers = headers.append("Authorization", "Bearer " + token);

export const baseUrl = {
  headers: headers,
  testUrl: "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/",
  mainUrl: "",
};



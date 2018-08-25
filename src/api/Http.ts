
export default class Http {
  public baseURL: string;
  public config: RequestInit;

  constructor(baseURL: string, config: RequestInit) {
    this.baseURL = baseURL;
    this.config = config;
  }

  public get<T>(url: string): Promise<T> {
    return fetch(
      this.mountUrl(url),
      this.config,
    )
      .then((response) => response.json());
  }

  public mountUrl(url: string): string {
    return this.baseURL + url; 
  }
}

import Http from '@/api/Http';

class Gist {
  private http: Http;

  constructor(HttpService = Http) {
    this.http = new HttpService('https://gist.githubusercontent.com/joaofs/', { mode: 'cors' });
  }

  public get<T>(id: string): Promise<T> {
    return this.http.get<T>(`${id}/raw`);
  }
}

export default new Gist();

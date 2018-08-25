import Http from '@/api/Http';

class Gist {
  http: Http;

  constructor (HttpService = Http) {
    this.http = new HttpService('https://api.github.com/gists/', { mode: "cors" });
  }

  get<T>(id: string): Promise<T> {
    return this.http.get<T>(id);
  }
}

export default new Gist();

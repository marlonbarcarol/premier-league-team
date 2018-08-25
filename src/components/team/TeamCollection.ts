import { ITeam } from '@/components/team/types';

export default class TeamCollection {
  private collection: ITeam[] = [];

  constructor(collection: ITeam[]) {
    this.collection = collection;
  }

  public getCollection(): ITeam[] {
    return this.collection;
  }

  public orderByName(): this {
    this.collection = this.collection.sort((a: ITeam, b: ITeam) => a.name.localeCompare(b.name));

    return this;
  }

  public filterByName(name: string): this {
    this.collection = this.collection.filter((team) => team.name.indexOf(name) > -1);

    return this;
  }
}

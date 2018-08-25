<template>
  <div id="app" class="clearfix text-center">
    <Header v-on:search-changed="searchTermChanged"></Header>
    <div id="content" v-bind:class="contentControlClasses">
      <team-list class="team-list" v-bind:teams="teams"></team-list>
      <loading class="loading-component margin" v-bind:is-loading="isLoadingTeams"></loading>
      <span class="team-error bold text-warning">
        An error occurred. Could not load teams.
      </span>
      <span class="no-teams bold text-warning">
        There are no teams to be listed.
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Gist from '@/api/Gist';
import { ITeam } from '@/components/team/types';

import Header from '@/components/Header.vue';
import TeamList from '@/components/team/TeamList.vue';
import Loading from '@/components/ui/Loading.vue';

@Component({
  components: {
    Header,
    Loading,
    TeamList,
  },
})
export default class App extends Vue {
  public isLoadingTeams: boolean = true;
  public hasSuccessfullyLoaded: boolean = false;
  public searchTerm: string = '';
  public teamCollection: ITeam[] = [];

  public beforeMount() {
    this.loadTeams();
  }

  public searchTermChanged(newSearchTerm: string) {
    this.searchTerm = newSearchTerm;
  }

  public async loadTeams() {
    try {
      const teams = await Gist.get<ITeam[]>('a6b80ce482de2f3846a00e72c0497a35');
      this.updateTeamCollection(teams);
      this.hasSuccessfullyLoaded = true;
    } catch (error) {
      this.hasSuccessfullyLoaded = false;
    } finally {
      this.isLoadingTeams = false;
    }
  }

  public updateTeamCollection(teams: ITeam[]) {
    this.teamCollection = teams.sort((a: ITeam, b: ITeam) => a.name.localeCompare(b.name));
  }

  /*
   * We are using computed property because it caches and
   * runs only when the searchTerm or teamCollection have changed.
   */
  public get teams(): ITeam[] {
    if (!this.searchTerm ) {
      return this.teamCollection;
    }

    return this.teamCollection.filter((team) => {
      return team.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    });
  }

  public get contentControlClasses(): object {
    return {
      'loading': this.isLoadingTeams,
      'successfully-loaded': this.hasSuccessfullyLoaded,
      'hasTeams': !!this.teams.length,
    };
  }
}
</script>
<style lang="scss" scoped>
  #content {
    position: relative;
    min-height: 100px;
    margin-top: 13px;
    padding: 10px;
    border-radius: 8px;
    background-color: #fff;
  }

  #content.loading {
    .loading-component { display: block }
    .team-list { display: none }
    .team-error { display: none }
    .no-teams { display: none }
  }
  #content.successfully-loaded.hasTeams {
    .loading-component { display: none }
    .team-list { display: grid }
    .team-error { display: none }
    .no-teams { display: none }
  }
  #content:not(.loading):not(.successfully-loaded) {
    .loading-component { display: none }
    .team-list { display: none }
    .team-error { display: none }
    .no-teams { display: true }
  }
  #content.successfully-loaded:not(.hasTeams) {
    .loading-component { display: none }
    .team-list { display: none }
    .team-error { display: none }
    .no-teams { display: true }
  }

</style>
<style src="@/assets/general.css" lang="scss"></style>

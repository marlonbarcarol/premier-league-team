<template>
  <ul class="teams reset-list">
    <team
      v-for="(team, key) in teams"
      v-bind:key="key"
      v-bind:team="team"
    />
  </ul>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

import { ITeam } from '@/components/team/types';

import Team from '@/components/team/Team.vue';

@Component({
  components: {
    Team,
  },
})
export default class TeamList extends Vue {
  @Prop({ required: true })
  public teams: ITeam[];
}
</script>
<style scoped>
  .teams {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 10px;
  }
  @media only screen and (max-width: 1024px) {
    .teams {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  @media only screen and (max-width: 700px) {
    .teams {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>

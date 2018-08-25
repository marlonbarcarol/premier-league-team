<template>
  <li class="team text-center">
    <button type="button" class="overlay uppercase bold text-left btn btn-link">
      <span class="name" v-bind:title="team.name">{{ team.name }}</span>
    </button>
    <img v-bind:src="team.img" v-bind:alt="`Team image: ${team.name}`" />
  </li>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import { ITeam } from '@/components/team/types';

@Component
export default class Team extends Vue {
  @Prop({ required: true })
  public team: ITeam;
}
</script>
<style scoped>
  .team {
    position: relative;
  }
  .team .overlay {
    position: absolute;
    display: block;
    bottom: 0px;
    left: 0px;
    width: 100%;
    padding: 10px;
    background: rgba(0, 0, 0, 0.8);
  }
  .team .name {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #fff;
  }
  .team img {
    width: 100%;
    min-height: 70px;
    max-width: 150px;
    max-height: 150px;
    text-align: center;
  }
</style>

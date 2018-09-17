<template>
  <li class="team text-center">
    <button type="button" class="overlay uppercase bold text-left btn btn-link" v-on:click="isDialogOpen = true">
      <span class="name" v-bind:title="team.name">{{ team.name }}</span>
    </button>
    <img v-bind:src="team.img" v-bind:alt="`Team image: ${team.name}`" />
    <Dialog v-bind:is-open="isDialogOpen" v-on:close="onCloseDialog">
      <h3 slot="header">Question</h3>
      <div>Is {{ team.name }} your favorite team?</div>
    </Dialog>
  </li>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import { ITeam } from '@/components/team/types';
import Dialog from '@/components/ui/dialog/Dialog.vue';
import DialogCloseStatusEnum from '@/components/ui/dialog/DialogCloseStatusEnum';

@Component({
  components: {
    Dialog,
  },
})
export default class Team extends Vue {
  public isDialogOpen: boolean = false;

  @Prop({ required: true })
  public team: ITeam;

  public onCloseDialog(dialogCloseStatus: DialogCloseStatusEnum) {
    this.isDialogOpen = false;
  }
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

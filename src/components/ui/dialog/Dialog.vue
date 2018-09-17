<template>
  <div class="dialog dialog-backdrop" v-if="isOpen" v-on:click="close()">
    <div class="dialog-table">
      <div class="dialog-content" v-on:click.stop="() => null">
        <header class="dialog-header">
          <slot name="header"></slot>
        </header>
        <div class="dialog-body">
          <slot></slot>
        </div>
        <br/><hr><br/>
        <div class="dialog-footer">
          <button v-on:click.stop="confirm()">Yes</button>
          <button v-on:click.stop="cancel()">No</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

import DialogCloseStatusEnum from '@/components/ui/dialog/DialogCloseStatusEnum';
import { EventEmitter } from 'events';

@Component
export default class Dialog extends Vue {
  @Prop({ required: true })
  public isOpen: boolean;

  public close(status: DialogCloseStatusEnum = DialogCloseStatusEnum.CLOSE) {
    this.$emit('close', status);
  }

  public confirm() {
    this.close(DialogCloseStatusEnum.CONFIRM);
  }

  public cancel() {
    this.close(DialogCloseStatusEnum.CANCEL);
  }
}
</script>
<style scoped>
.dialog {
    position: fixed;
    z-index: 100;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    display: table;
  }
  .dialog-backdrop {
    background-color: rgba(0,0,0,0.8);
  }
  .dialog-table {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }
  .dialog-content {
    width: 30%;
    padding: 30px;
    margin: 0px auto;
    border-radius: 8px;
    background-color: #fff;
  }
</style>

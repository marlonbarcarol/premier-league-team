<template>
  <header class="clearfix">
    <input
      class="input-with-icon search-field bold zoom-icon pull-left"
      placeholder="Search"
      v-model="searchTerm"
      v-on:keydown="onSearchTermChanges"
    />
    <button 
      class="btn btn-cancel btn-link bold pull-right"
      type="button" 
      v-if="searchTerm" 
      v-on:click="clearSearchTerm"
    >
      Cancel
    </button>
  </header>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  public searchTerm: string = '';

  public onSearchTermChanges() {
    this.$emit('search-changed', this.searchTerm);
  }

  public clearSearchTerm() {
    this.searchTerm = '';
    this.onSearchTermChanges();
  }
}
</script>
<style scoped>
  header {
    padding: 10px;
    background-color: #c5c5c5;
  }
  .btn-cancel {
    color: #63bbbb;
    font-size: 13px;
    margin-top: 6px;
  }
  .search-field {
    width: calc(100% - 65px);
    height: 30px;
    border: 0px;
    border-radius: 3px;
    background-color: #fff;
  }
</style>

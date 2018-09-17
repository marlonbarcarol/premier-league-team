<template>
  <div v-if="isLoading" class="loading-spinner">
    <!-- By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL -->
    <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" v-bind:stroke="color">
      <g fill="none" fill-rule="evenodd">
        <g transform="translate(1 1)" stroke-width="2">
          <circle stroke-opacity=".5" cx="18" cy="18" r="18"/>
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/>
          </path>
        </g>
      </g>
    </svg>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Loading extends Vue {
  @Prop({ required: true })
  public isLoading: boolean;

  @Prop({ default: '#1d3f72' })
  public color: boolean;
}
</script>
<style>
  .loading-spinner {
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    width: 40px;
    height: 40px;
    margin: auto;
  }
</style>

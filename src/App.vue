<template>
  <div id="app">
    <div class="container my-3">
      <div class="row">
        <div class="col">
          <h1 class="display-4">Gravatar Web Component</h1>
          <hr>
        </div>
      </div>
      <div class="row">
        <div class="col-12 d-flex align-items-center justify-content-between">
          <a href="https://github.com/crichmond1989/gravatar-wc">Code and Docs on GitHub</a>
          <div class="badge-row">
            <img
              alt="GitHub stars"
              src="https://img.shields.io/github/stars/crichmond1989/gravatar-wc.svg?style=social"
            >
            <a href="https://www.npmjs.com/package/gravatar-wc" class="d-flex">
              <img alt="npm" src="https://img.shields.io/npm/v/gravatar-wc.svg?style=plastic">
            </a>
            <a href="https://bundlephobia.com/result?p=gravatar-wc@0.0.1" class="d-flex">
              <img
                alt="npm bundle size"
                src="https://img.shields.io/bundlephobia/minzip/gravatar-wc.svg?label=size&style=plastic"
              >
            </a>
            <img alt="NPM" src="https://img.shields.io/npm/l/gravatar-wc.svg?style=plastic">
          </div>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="text-center">
            <h3>Options</h3>
          </div>
          <br>
          <form v-on:submit.prevent>
            <div class="form-group">
              <label for="email">Email</label>
              <input class="form-control" type="email" id="email" v-model="email">
            </div>
            <div class="form-group">
              <label for="default">Default</label>
              <select class="form-control" id="default" v-model="defaultValue">
                <option></option>
                <option
                  v-bind:key="item.label"
                  v-for="item of defaultOptions"
                  v-bind:value="item.value || item.label.toLowerCase()"
                >{{ item.label }}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="rating">Rating</label>
              <select class="form-control" id="rating" v-model="rating">
                <option></option>
                <option
                  v-bind:key="item.label"
                  v-for="item of ratingOptions"
                  v-bind:value="item"
                >{{ item.toUpperCase() }}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="size">Size</label>
              <input class="form-control" type="number" id="size" v-model="size">
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="forceDefault"
                v-model="forceDefault"
              >
              <label class="form-check-label" for="forceDefault">Force Default</label>
            </div>
          </form>
        </div>
        <div class="col-12 col-md-6 text-center">
          <div class="text-center">
            <h3>Output</h3>
          </div>
          <br>
          <gravatar-wc
            :email="email"
            :default="defaultValue"
            :force-default="forceDefault"
            :rating="rating"
            :size="size"
          ></gravatar-wc>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class App extends Vue {
  email = "";
  defaultValue = "";
  defaultOptions = [
    {
      label: "404",
    },
    {
      label: "Mystery Person",
      value: "mp",
    },
    {
      label: "Identicon",
    },
    {
      label: "Monster ID",
      value: "monsterid",
    },
    {
      label: "Wavatar",
    },
    {
      label: "Retro",
    },
    {
      label: "Robohash",
    },
    {
      label: "Blank",
    },
  ].sort((a, b) => a.label.localeCompare(b.label));
  forceDefault = false;
  rating = "";
  ratingOptions = ["g", "pg", "r", "x"];
  size = "";
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
@import "~@fortawesome/fontawesome-free/css/all.css";

.badge-row {
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 0.5rem;
  grid-auto-columns: auto;
  align-items: center;
  justify-content: end;
}
</style>

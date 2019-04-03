<template>
  <div id="app">
    <div style="background: #0a76b7; color: white" class="sticky-top py-1">
      <div class="container d-flex align-items-center justify-content-between">
        <h1 style="font-family: Montserrat" class="d-flex align-items-center m-0">
          <img src="@/assets/logo.svg" alt="logo" width="64" class="mr-2" style="opacity: .85"> gravatar-wc
        </h1>
        <div title="Gravatar Web Component">
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
    <div style="background: #0a76b712" class="py-3">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6 d-flex align-items-center">
            <a href="https://github.com/crichmond1989/gravatar-wc">Code and Docs on GitHub</a>
          </div>
          <div class="col-12 col-lg-6 my-1 my-lg-0">
            <div class="badge-row align-items-center justify-content-lg-end">
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
      </div>
    </div>
    <br>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-5">
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
          <hr class="d-block d-md-none">
        </div>
        <div class="col-12 col-md-7">
          <p>
            <code>gravatar-wc</code> works with empty values. This can be very useful for prototyping.
          </p>
          <p>
            Add values to change the
            <code>gravatar-wc</code> component in the header.
          </p>
          <h2>Use With Vue</h2>
          <pre><code>// main.js, main.ts

import { defineCustomElements as defineGravatar } from "gravatar-wc/dist/loader";
import Vue from "vue";

defineGravatar(window);

Vue.config.ignoredElements = ["gravatar-wc"];</code></pre>
          <pre><code class="html">// ExampleComponent.vue

&lt;template&gt;
  &lt;div&gt;
    &lt;gravatar-wc :email="email"&gt;&lt;/gravatar-wc&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script lang="ts"&gt;
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ExampleComponent extends Vue {
  email = "demo@demo.com";
}
&lt;/script&gt;</code></pre>
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
  size = 48;
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
@import "~@fortawesome/fontawesome-free/css/all.css";
@import url("https://fonts.googleapis.com/css?family=Montserrat");

a {
  color: #0a76b7;
}

gravatar-wc {
  > img {
    border: 2px solid #ffffffa6;
    border-radius: 0.5rem;
  }
}

.badge-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: -0.5rem;

  > * {
    margin-top: 0.5rem;
    margin-right: 0.5rem;
  }
}
</style>

<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
@import './scss/mixins';
:root {
	--main-font: 'PT Serif', serif;
	--main-color:  #8e00af;
	--secondary-color: #62ff3d;
	--tertiary-color: #db0707;
	--gray-color: #707070;
	--white-color: #ffffff;
	--black-color: #000;
}

body {
	font-family: var(--main-font);
	color: var(--main-color);
}


#app {
  text-align: center;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

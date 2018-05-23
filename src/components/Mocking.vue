<template>

  <div>
    <span id="hello">Hello {{name}}</span>
  </div>

</template>


<script>

function fakeHTTPRequest() {
  return Promise.reject('need to mock me, dawg');
}

export default {
  name: 'Mocking',
  data() {
    return {
      name: '',
    };
  },
  async beforeMount() {
    this.name = await this.getName();
  },
  methods: {
    getName() {
      return fakeHTTPRequest();
    },
  },
};

</script>

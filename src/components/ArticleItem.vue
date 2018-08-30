<template>
  <div>
    <h1>{{articles.title}} </h1>
    <p>({{articles.contents}})</p>
    <img v-bind:src="articles.thumbnail.url" alt="">
  </div>
</template>

<script>
export default {
  name: 'ArticleItem',
  props: ['articles']
}
</script>

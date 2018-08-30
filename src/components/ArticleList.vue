<template>
  <div>
    <!-- 1 -->
    <h4 v-if="loading">Loading...</h4>
    <ArticleItem
      v-for="article in articles"
      :key="article.id"
      :articles="article">
    </ArticleItem>
  </div>
</template>

<script>
// 2
import { ALL_ARTICLES_QUERY } from '../constants/graphql'
import ArticleItem from './ArticleItem'

export default {
  name: 'ArticleList',
  data () {
    return {
      // 3
      articles: [],
      loading: 0
    }
  },
  components: {
    ArticleItem
  },
  // 4
  apollo: {
    articles: {
      query: ALL_ARTICLES_QUERY
    }
  }
}
</script>

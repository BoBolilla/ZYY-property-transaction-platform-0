<script setup>
import homePanel from './HomePanel.vue'
import NewsItem from './NewsItem.vue'
import { useNewsStore } from '@/stores'
const newsStore = useNewsStore()
</script>

<template>
  <div>
    <homePanel title="时事新闻">
      <template #main>
        <ul class="news-list">
          <li v-for="news in newsStore.currentNews" :key="news">
            <NewsItem :news="news"></NewsItem>
          </li>
        </ul>
      </template>
    </homePanel>

    <ul class="news-list">
      <li v-for="news in newsStore.currentNews" :key="news">
        <NewsItem :news="news"></NewsItem>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import {channelsList} from "../../data/general.ts"

const channels = computed(() => channelsList.filter(channelItem => channelItem.type === 'channel'))
const chats = computed(() => channelsList.filter(channelItem => channelItem.type === 'chat'))

</script>

<template>
  <div class="channels-page">
    <h1>📰 Офіційні посилання сервера</h1>

    <section>
      <h2>Канали сервера</h2>
      <div class="channels-list">
        <div
          v-for="channel in channels"
          :key="channel.title"
          class="channel-card"
        >
          <div class="image-container">
            <img :src="channel.image" :alt="channel.title" />
          </div>
          <div class="channel-info">
            <h3>{{ channel.title }}</h3>
            <a :href="channel.link" target="_blank" rel="noopener noreferrer">{{
              channel.link
            }}</a>
            <p>{{ channel.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2>Чати сервера</h2>
      <div class="channels-list">
        <div v-for="chat in chats" :key="chat.title" class="channel-card">
          <div class="image-container">
            <img :src="chat.image" :alt="chat.title" />
          </div>
          <div class="channel-info">
            <h3>{{ chat.title }}</h3>
            <a :href="chat.link" target="_blank" rel="noopener noreferrer">{{
              chat.link
            }}</a>
            <p>{{ chat.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.channels-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  color: var(--vp-c-text-1);
  margin-bottom: 2rem;
}

h2 {
  color: var(--vp-c-text-2);
  border-bottom: 2px solid var(--vp-c-divider);
  padding-bottom: 0.5rem;
  margin-top: 2rem;
}

.channels-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
}

.channel-card {
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px var(--vp-c-shadow-1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  align-items: flex-start;
}

.channel-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px var(--vp-c-shadow-2);
}

.image-container {
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  margin-right: 1rem;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  /*image-rendering: pixelated;*/
  border-radius: 8px;
}

.channel-info {
  flex-grow: 1;
}

.channel-card h3 {
  color: var(--vp-c-text-1);
  margin: 0 0 0.25rem;
  font-size: 1.1rem;
}

.channel-card a {
  color: var(--vp-c-brand);
  text-decoration: none;
  word-break: break-all;
  font-size: 0.9rem;
}

.channel-card a:hover {
  text-decoration: underline;
}

.channel-card p {
  margin: 0.5rem 0 0;
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
}

@media (max-width: 640px) {
  .channel-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .image-container {
    margin-right: 0;
    margin-bottom: 1rem;
  }
}
</style>

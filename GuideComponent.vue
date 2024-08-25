<script setup>
import { ref } from 'vue'

const sections = ref([
  {
    title: 'Додано',
    items: [
      { name: 'Нові рейки', image: '/images/guide/placeholder.webp' },
      { name: 'Артефакти', image: '/images/guide/placeholder.webp' },
      { name: 'Радіо', image: '/images/guide/placeholder.webp' },
      { name: 'Полотно для малювання', image: '/images/guide/placeholder.webp' },
      { name: 'Декілька видів дерев', image: '/images/guide/placeholder.webp' },
      { name: 'Меблі', image: '/images/guide/placeholder.webp' },
      { name: 'Куховарство', image: '/images/guide/placeholder.webp' },
    ]
  },
  {
    title: 'Змінено',
    items: [
      { name: 'Генерацію світу', image: '/images/guide/placeholder.webp' },
      { name: 'Фермерство', image: '/images/guide/placeholder.webp' },
      { name: 'Вагонетки', image: '/images/guide/placeholder.webp' },
      { name: 'Торгівлю з жителями', image: '/images/guide/placeholder.webp' },
      { name: 'Риболовлю', image: '/images/guide/placeholder.webp' },
      { name: 'І ще багато іншого!', image: '/images/guide/placeholder.webp' },
    ]
  }
])
</script>

<template>
  <div class="guide-container">
    <h1 class="guide-title">Гайди серверу</h1>
    <p class="guide-subtitle">Ці статті допоможуть вам ознайомитись з кастомним контентом серверу.</p>
    
    <div v-for="(section, index) in sections" :key="index" class="guide-section">
      <h2 class="guide-section-title">{{ section.title }}</h2>
      <div class="guide-grid">
        <div v-for="(item, itemIndex) in section.items" :key="itemIndex" class="guide-item">
          <img :src="item.image" :alt="item.name">
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.guide-container {
  font-family: 'Roboto', sans-serif;
  background-color: var(--vp-c-bg-soft);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: 2rem auto;
}

.guide-title {
  color: var(--vp-c-brand);
  text-align: center;
  font-size: 3rem;
  margin-bottom: 1.5rem;
  animation: fadeInDown 1s ease-out;
}

.guide-subtitle {
  color: var(--vp-c-text-1);
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: 3rem;
  animation: fadeInUp 1s ease-out 0.5s both;
}

.guide-section {
  margin-bottom: 3rem;
  animation: fadeIn 1s ease-out 1s both;
}

.guide-section-title {
  color: var(--vp-c-brand-light);
  font-size: 2rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid var(--vp-c-brand-light);
  padding-bottom: 0.5rem;
}

.guide-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
}

.guide-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: var(--vp-c-bg-mute);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.guide-item:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 15px 30px rgba(0,0,0,0.2);
}

.guide-item img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1rem;
  border: 3px solid var(--vp-c-brand);
  transition: all 0.3s ease;
}

.guide-item:hover img {
  transform: rotate(360deg);
}

.guide-item span {
  color: var(--vp-c-text-1);
  font-size: 1rem;
  font-weight: bold;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
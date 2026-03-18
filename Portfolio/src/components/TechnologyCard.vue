<template>
  <div class="flex-shrink-0 w-40 rounded-2xl bg-white p-6 shadow-lg flex flex-col items-center justify-center text-center tech-card"
       @mouseenter="$emit('pauseSlider')"
       @mouseleave="$emit('resumeSlider')">
    <i :class="['text-5xl mb-4', tech.icon]" :style="{ color: tech.color }"></i>
    <p class="font-semibold text-slate-900">{{ tech.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'TechnologyCard',
  props: {
    tech: {
      type: Object,
      required: true
    }
  }
}
</script>
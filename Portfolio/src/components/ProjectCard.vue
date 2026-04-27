<template>
  <div class="project-card bg-white rounded-2xl p-4 overflow-hidden flex flex-col flex-shrink-0" style="width: 260px;">
    <!-- Project Image -->
    <div class="project-image bg-gray-200 mb-3 relative cursor-pointer flex-shrink-0"
         @click="$emit('openModal', project)">
      <img :src="project.image" :alt="project.title"
           v-if="project.image" @error="onImageError"
           class="w-full h-24 object-cover rounded-xl">
      <div v-else class="w-full h-24 flex items-center justify-center text-gray-400 rounded-xl">
        <i class="fas fa-image text-4xl"></i>
      </div>
    </div>

    <!-- Project Info -->
    <div class="flex-grow">
      <h3 class="text-base font-bold mb-1 text-slate-900 line-clamp-1">{{ project.title }}</h3>
      <p class="text-slate-600 mb-3 line-clamp-2 text-sm">{{ project.description }}</p>
    </div>

    <!-- Project Links -->
    <div class="flex gap-2 mb-2">
      <a v-if="project.website" :href="project.website" target="_blank" rel="noopener"
         class="flex-1 bg-slate-900 text-white py-2 rounded-lg text-center flex items-center justify-center gap-2 transition-all duration-300 hover:bg-blue-600 hover:scale-105 hover:shadow-lg hover:shadow-slate-400">
        <i class="fas fa-globe"></i>
        <span>{{ t.projects.see }}</span>
      </a>
      <a v-if="project.github" :href="project.github" target="_blank" rel="noopener"
         class="flex-1 bg-slate-900 text-white py-2 rounded-lg text-center flex items-center justify-center gap-2 transition-all duration-300 hover:bg-blue-600 hover:scale-105 hover:shadow-lg hover:shadow-slate-400">
        <i class="fab fa-github"></i>
        <span>{{ t.projects.code }}</span>
      </a>
    </div>

    <!-- Technologies -->
    <div class="flex flex-wrap gap-2">
      <span v-for="tech in project.technologies" :key="tech"
            class="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
        {{ tech }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true
    },
    t: {
      type: Object,
      default: () => ({ projects: { see: 'Voir', code: 'Code' } })
    }
  },
  methods: {
    onImageError(e) {
      e.target.src = '/images/hero_setup.jpg'
    }
  }
}
</script>
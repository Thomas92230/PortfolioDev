<template>
  <div class="project-card bg-white rounded-2xl p-6 overflow-hidden">
    <!-- Project Image -->
    <div class="project-image bg-gray-200 mb-6 relative cursor-pointer" 
         @click="$emit('openModal', project)">
      <img :src="project.image" :alt="project.title" 
           v-if="project.image" onerror="this.src='images/hero_setup.jpg'">
      <div v-else class="w-full h-full flex items-center justify-center text-gray-400">
        <i class="fas fa-image text-4xl"></i>
      </div>
    </div>

    <!-- Project Info -->
    <h3 class="text-2xl font-bold mb-3 text-slate-900">{{ project.title }}</h3>
    <p class="text-slate-600 mb-6 line-clamp-3">{{ project.description }}</p>

    <!-- Project Links -->
    <div class="flex gap-3">
      <a v-if="project.website" :href="project.website" target="_blank" rel="noopener"
         class="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-center transition flex items-center justify-center gap-2">
        <i class="fas fa-globe"></i>
        <span>Voir</span>
      </a>
      <a v-if="project.github" :href="project.github" target="_blank" rel="noopener"
         class="flex-1 bg-slate-800 hover:bg-slate-900 text-white py-2 rounded-lg text-center transition flex items-center justify-center gap-2">
        <i class="fab fa-github"></i>
        <span>Code</span>
      </a>
    </div>

    <!-- Technologies -->
    <div class="mt-4 flex flex-wrap gap-2">
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
    }
  }
}
</script>
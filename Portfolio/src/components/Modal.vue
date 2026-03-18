<template>
  <div v-if="project" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
       @click="$emit('close')">
    <div class="bg-white rounded-lg max-w-2xl w-full p-6" @click.stop>
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-2xl font-bold">{{ project.title }}</h3>
        <button @click="$emit('close')" class="text-2xl text-gray-500 hover:text-gray-700">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <img :src="project.image" :alt="project.title" 
           class="w-full rounded-lg mb-4 max-h-96 object-cover"
           v-if="project.image">
      <p class="text-slate-700 mb-4">{{ project.description }}</p>
      <div class="flex gap-3">
        <a v-if="project.website" :href="project.website" target="_blank" rel="noopener"
           class="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-center transition">
          Voir le site
        </a>
        <a v-if="project.github" :href="project.github" target="_blank" rel="noopener"
           class="flex-1 bg-slate-800 hover:bg-slate-900 text-white py-2 rounded-lg text-center transition">
          Code source
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    project: {
      type: Object,
      default: null
    }
  }
}
</script>
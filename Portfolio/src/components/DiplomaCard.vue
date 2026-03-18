<template>
  <div class="bg-slate-800/70 rounded-2xl p-8 shadow-xl border border-white/10 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
    <div class="flex items-start gap-4">
      <div class="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center text-white text-2xl shadow">
        <i class="fas fa-graduation-cap"></i>
      </div>
      <div>
        <p class="text-sm text-slate-300">{{ diploma.years }}</p>
        <h3 class="text-2xl font-semibold mt-1">{{ diploma.title }}</h3>
        <p class="text-slate-400 mt-1">{{ diploma.school }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DiplomaCard',
  props: {
    diploma: {
      type: Object,
      required: true
    }
  }
}
</script>
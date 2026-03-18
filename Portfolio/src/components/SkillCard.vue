<template>
  <div class="bg-slate-800/60 rounded-2xl p-6 shadow-xl">
    <div class="flex justify-between mb-3">
      <span class="font-semibold">{{ skill.name }}</span>
      <span class="text-blue-400 text-sm">{{ skill.level }}%</span>
    </div>
    <div class="w-full bg-gray-700 rounded-full h-2">
      <div class="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all"
           :style="{ width: skill.level + '%' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillCard',
  props: {
    skill: {
      type: Object,
      required: true
    }
  }
}
</script>
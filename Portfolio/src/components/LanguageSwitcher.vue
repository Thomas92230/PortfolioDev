<template>
  <div class="flex border-l border-slate-200 pl-6 gap-2"
       :class="{ 'flex-col border-l-0 pl-0 pt-4 md:flex-row md:pl-6 md:pt-0': isMobile }">
    <button
      v-for="langOption in ['fr', 'en', 'es']"
      :key="langOption"
      @click="$emit('setLang', langOption)"
      @mouseenter="e => e.target.style.filter='drop-shadow(0 0 6px rgba(59,130,246,0.9))'"
      @mouseleave="e => currentLang !== langOption && (e.target.style.filter='none')"
      :style="currentLang === langOption ? 'filter: drop-shadow(0 0 6px rgba(59,130,246,0.9))' : 'opacity: 0.4'"
      :class="['text-xl transition-all duration-300 cursor-pointer', isMobile && currentLang === langOption ? 'scale-125 opacity-100' : '']"
      :title="getLangLabel(langOption)"
      class="lang-btn"
    >
      {{ getFlag(langOption) }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'LanguageSwitcher',
  props: {
    currentLang: {
      type: String,
      required: true
    },
    isMobile: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    getFlag(lang) {
      const flags = { fr: '🇫🇷', en: '🇬🇧', es: '🇪🇸' }
      return flags[lang] || ''
    },
    getLangLabel(lang) {
      const labels = { fr: 'Français', en: 'English', es: 'Español' }
      return labels[lang] || ''
    }
  }
}
</script>

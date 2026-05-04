<template>
  <div class="min-h-screen bg-gradient-to-br from-[#0a001b] to-[#1a003d]">
    <!-- Header/Navigation -->
    <nav class="fixed top-0 w-full bg-white shadow-md z-50">
      <div class="max-w-6xl mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <div class="text-2xl font-bold text-gradient">Icham BOUDEHANE</div>

          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center gap-6">
            <div class="flex gap-6" style="margin-right: 2rem;">
              <a href="#" class="text-slate-600 hover:text-blue-600 transition">{{ t.nav.profile }}</a>
              <a href="#projets" class="text-slate-600 hover:text-blue-600 transition">{{ t.nav.projects }}</a>
              <a href="#competences" class="text-slate-600 hover:text-blue-600 transition">{{ t.nav.skills }}</a>
              <a href="#diplomes" class="text-slate-600 hover:text-blue-600 transition">{{ t.nav.diplomas }}</a>
              <a href="#contact" class="text-slate-600 hover:text-blue-600 transition">{{ t.nav.contact }}</a>
            </div>
            <!-- Language switcher -->
            <LanguageSwitcher :current-lang="lang" @set-lang="setLang" />
          </div>

          <!-- Mobile Menu Button -->
          <div class="md:hidden">
            <button @click="toggleMenu" class="text-slate-600 hover:text-blue-600 focus:outline-none">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu -->
        <div v-if="isMenuOpen" class="md:hidden mt-4 pb-4 border-t border-gray-200">
          <div class="flex flex-col space-y-4 pt-4">
            <a href="#" @click="closeMenu" class="text-slate-600 hover:text-blue-600 transition">{{ t.nav.profile }}</a>
            <a href="#projets" @click="closeMenu" class="text-slate-600 hover:text-blue-600 transition">{{ t.nav.projects }}</a>
            <a href="#competences" @click="closeMenu" class="text-slate-600 hover:text-blue-600 transition">{{ t.nav.skills }}</a>
            <a href="#diplomes" @click="closeMenu" class="text-slate-600 hover:text-blue-600 transition">{{ t.nav.diplomas }}</a>
            <a href="#contact" @click="closeMenu" class="text-slate-600 hover:text-blue-600 transition">{{ t.nav.contact }}</a>
            <LanguageSwitcher :current-lang="lang" @set-lang="setLang" :is-mobile="true" />
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero-gradient text-white pt-32 pb-24">
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Texte Hero -->
          <div class="fade-in-up">
            <h1 class="text-4xl lg:text-5xl font-bold mb-2 leading-tight uppercase">
              Boudehane Icham
            </h1>
            <h2 class="text-xl lg:text-2xl font-semibold mb-4 text-gray-300 uppercase">
              {{ t.hero.subtitle }}
            </h2>
            <div class="text-base text-gray-200 mb-4 leading-relaxed max-w-xl">
              {{ t.hero.bio }}
            </div>
            <div class="flex flex-wrap gap-4">
              <a href="#projets" class="btn-primary px-6 py-3 rounded-lg text-white font-semibold text-sm flex items-center justify-center">
                {{ t.hero.cta }}
              </a>
              <a href="https://www.linkedin.com/in/icham-boudehane-dev/" target="_blank" rel="noopener noreferrer"
                 class="px-6 py-3 rounded-lg border-2 border-white text-white font-semibold text-sm hover:bg-white hover:text-slate-900 transition">
                <i class="fab fa-linkedin mr-2"></i> LinkedIn
              </a>
              <a href="/images/Icham_BOUDEHANE_Dev_Concepteur.pdf" download
                 class="px-6 py-3 rounded-lg border-2 border-white text-white font-semibold text-sm hover:bg-white hover:text-slate-900 transition">
                <i class="fas fa-download mr-2"></i> {{ t.hero.downloadCV }}
              </a>
            </div>
          </div>

          <!-- Image Hero -->
          <div class="fade-in-up" style="animation-delay: 0.1s">
            <div class="relative">
              <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-30"></div>
              <img src="/images/hero_setup.jpg" alt="Icham BOUDEHANE"
                   class="relative rounded-full w-full max-w-md mx-auto drop-shadow-2xl">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="competences" class="bg-gradient-to-br from-[#0a001b] to-[#1a003d] text-white py-20">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-14">
          <h2 class="text-4xl font-bold mb-4">{{ t.skills.title }}</h2>
          <p class="text-lg text-slate-300 max-w-2xl mx-auto">
            {{ t.skills.subtitle }}
          </p>
        </div>

        <!-- Technologies Slider -->
        <div class="relative mb-16 overflow-hidden rounded-2xl">
          <div
            class="flex gap-6 pb-4 slider-container"
            :class="{ paused: isSliderPaused }"
            @mouseenter="isSliderPaused = true"
            @mouseleave="isSliderPaused = false"
          >
            <!-- Première copie -->
            <TechnologyCard
              v-for="tech in skillsSlider"
              :key="'first-' + tech.name"
              :tech="tech"
            />
            <!-- Deuxième copie (dupliquée pour boucle infinie) -->
            <TechnologyCard
              v-for="tech in skillsSlider"
              :key="'second-' + tech.name"
              :tech="tech"
            />
          </div>
        </div>

        <!-- Skills Progress Bars -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard
            v-for="skill in skills"
            :key="skill.name"
            :skill="skill"
          />
        </div>
      </div>
    </section>

        <!-- Projects Section -->
        <section id="projets" class="bg-gradient-to-br from-[#0a001b] to-[#1a003d] py-20 overflow-visible">
          <div class="max-w-6xl mx-auto px-4 overflow-visible">
            <div class="text-center mb-16">
              <h2 class="text-5xl font-bold mb-4 text-white">{{ t.projects.title }}</h2>
              <p class="text-xl text-slate-300">{{ t.projects.subtitle }}</p>
            </div>

            <!-- Loading state -->
            <div v-if="projectsLoading" class="text-center py-20">
              <div class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
              <p class="mt-4 text-slate-300">Chargement des projets...</p>
            </div>

            <!-- Error state -->
            <div v-else-if="projectsError" class="text-center py-20">
              <p class="text-red-400 text-lg">{{ projectsError }}</p>
              <button @click="fetchProjects" class="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Réessayer
              </button>
            </div>

            <!-- Mobile : colonne simple -->
            <div v-else class="mb-16">
              <div class="flex flex-col gap-6 md:hidden">
                <ProjectCard
                  v-for="project in projects"
                  :key="project.id"
                  :project="project"
                  :t="t"
                  class="w-full"
                />
              </div>

              <!-- Desktop : slider -->
              <div class="hidden md:flex items-center gap-4">
                <button @click="scrollProjects(-1)"
                        class="flex-shrink-0 w-12 h-12 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center shadow-lg transition">
                  <i class="fas fa-chevron-left text-lg"></i>
                </button>

                <div class="flex-1 overflow-hidden rounded-2xl">
                  <div
                    class="flex gap-8 pb-4 projects-slider-container"
                    :class="{ paused: isProjectsSliderPaused }"
                    @mouseenter="isProjectsSliderPaused = true"
                    @mouseleave="isProjectsSliderPaused = false"
                  >
                    <ProjectCard
                      v-for="project in projects"
                      :key="'first-' + project.id"
                      :project="project"
                      :t="t"
                      :fixed="true"
                    />
                    <ProjectCard
                      v-for="project in projects"
                      :key="'second-' + project.id"
                      :project="project"
                      :t="t"
                      :fixed="true"
                    />
                  </div>
                </div>

                <button @click="scrollProjects(1)"
                        class="flex-shrink-0 w-12 h-12 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center shadow-lg transition">
                  <i class="fas fa-chevron-right text-lg"></i>
                </button>
              </div>
            </div>
          </div>
        </section>

    <!-- Diplomas Section -->
    <section id="diplomes" class="bg-gradient-to-br from-[#0a001b] to-[#1a003d] text-white py-20">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-14">
          <h2 class="text-5xl font-bold mb-4">{{ t.diplomas.title }}</h2>
          <p class="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            {{ t.diplomas.subtitle }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DiplomaCard
            v-for="diploma in diplomas"
            :key="diploma.years"
            :diploma="diploma"
          />
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="bg-gradient-to-br from-[#0a001b] to-[#1a003d] py-20">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <h2 class="text-5xl font-bold mb-6 text-white">{{ t.contact.title }}</h2>
        <p class="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          {{ t.contact.subtitle }}
        </p>

        <div class="flex gap-6 justify-center mb-10">
          <a href="https://github.com/Thomas92230" target="_blank" rel="noopener"
             class="p-4 bg-slate-900 text-white rounded-full hover:bg-blue-600 transition">
            <i class="fab fa-github text-2xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/icham-boudehane-dev/" target="_blank" rel="noopener noreferrer"
             class="p-4 bg-slate-900 text-white rounded-full hover:bg-blue-600 transition">
            <i class="fab fa-linkedin text-2xl"></i>
          </a>
          <a href="mailto:boudehaneicham@gmail.com"
             class="p-4 bg-slate-900 text-white rounded-full hover:bg-blue-600 transition">
            <i class="fas fa-envelope text-2xl"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gradient-to-br from-[#0a001b] to-[#1a003d] text-white py-8 border-t border-slate-700">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <p class="text-slate-400">© {{ new Date().getFullYear() }} Icham BOUDEHANE. {{ t.footer }}</p>
      </div>
    </footer>

    <!-- Modal pour les images des projets -->
    <Modal
      :project="selectedProject"
      @close="selectedProject = null"
    />
  </div>
</template>

<script>
import ProjectCard from './components/ProjectCard.vue'
import SkillCard from './components/SkillCard.vue'
import TechnologyCard from './components/TechnologyCard.vue'
import DiplomaCard from './components/DiplomaCard.vue'
import Modal from './components/Modal.vue'
import LanguageSwitcher from './components/LanguageSwitcher.vue'
import { translations } from './i18n.js'

export default {
  name: 'App',
  components: {
    ProjectCard,
    SkillCard,
    TechnologyCard,
    DiplomaCard,
    Modal,
    LanguageSwitcher
  },
  data() {
    return {
      lang: 'fr',
      selectedProject: null,
      isProjectsSliderPaused: false,
      projectsLoading: false,
      projectsError: null,
      skillsSlider: [
        { name: 'React', icon: 'fab fa-react', color: '#61dafb' },
        { name: 'JavaScript', icon: 'fab fa-js-square', color: '#f7df1e' },
        { name: 'TypeScript', icon: 'fab fa-js-square', color: '#3178c6' },
        { name: 'Angular', icon: 'fab fa-angular', color: '#dd0031' },
        { name: 'Vue.js', icon: 'fab fa-vuejs', color: '#4fc08d' },
        { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#7952b3' },
        { name: 'HTML5', icon: 'fab fa-html5', color: '#e34c26' },
        { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#563d7c' },
        { name: 'PHP', icon: 'fab fa-php', color: '#777bb4' },
        { name: 'Java', icon: 'fab fa-java', color: '#007396' },
        { name: 'Node.js', icon: 'fab fa-node-js', color: '#68a063' },
        { name: 'MongoDB', icon: 'fas fa-leaf', color: '#13aa52' },
        { name: 'Git', icon: 'fab fa-git-alt', color: '#f1502f' },
        { name: 'Figma', icon: 'fab fa-figma', color: '#f24e1e' },
        { name: 'Firebase', icon: 'fas fa-fire', color: '#ffa300' },
        { name: 'TailwindCSS', icon: 'fab fa-css3-alt', color: '#06b6d4' }
      ],
      projects: [
        {
          id: 1,
          title: 'Projet React 1',
          description: 'Une application complète développée avec React. Voici une description détaillée de votre projet et des technologies utilisées.',
          image: '/images/hero_setup.jpg',
          website: 'https://example.com',
          github: 'https://github.com',
          technologies: ['React', 'JavaScript', 'TailwindCSS']
        },
        {
          id: 2,
          title: 'Projet React 2',
          description: 'Un autre projet notable mettant en avant votre expertise en développement frontend et optimisation des performances.',
          image: '/images/hero_setup.jpg',
          website: 'https://example.com',
          github: 'https://github.com',
          technologies: ['React', 'API REST', 'Vite']
        },
        {
          id: 3,
          title: 'Projet React 3',
          description: 'Un projet supplémentaire montrant votre capacité à travailler sur des applications complexes et scalables.',
          image: '/images/hero_setup.jpg',
          website: 'https://example.com',
          github: 'https://github.com',
          technologies: ['React', 'TypeScript', 'Redux']
        },
        {
          id: 4,
          title: 'Projet Web Design',
          description: 'Un site web élégant et responsive, démontrant votre maîtrise du design modern et de l\'UX.',
          image: '/images/hero_setup.jpg',
          website: 'https://example.com',
          github: 'https://github.com',
          technologies: ['HTML', 'CSS', 'JavaScript']
        },
        {
          id: 5,
          title: 'Application Mobile Web',
          description: 'Une application web mobile-first avec une excellent expérience utilisateur et performances optimales.',
          image: '/images/hero_setup.jpg',
          website: 'https://example.com',
          github: 'https://github.com',
          technologies: ['React Native', 'JavaScript', 'Firebase']
        },
        {
          id: 6,
          title: 'Plateforme E-commerce',
          description: 'Une plateforme e-commerce complète avec panier, paiements et gestion d\'inventaire.',
          image: '/images/hero_setup.jpg',
          website: 'https://example.com',
          github: 'https://github.com',
          technologies: ['React', 'Stripe', 'Node.js']
        }
      ],
      skills: [
        { name: 'React', level: 92 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Angular', level: 80 },
        { name: 'Vue.js', level: 80 },
        { name: 'TailwindCSS', level: 88 },
        { name: 'Bootstrap', level: 85 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 92 },
        { name: 'PHP', level: 78 },
        { name: 'Java', level: 82 },
        { name: 'Node.js', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'Git', level: 85 },
        { name: 'Figma', level: 75 }
      ],
      diplomas: [
        {
          years: '2024-2025',
          title: 'Bachelor concepteur d\'applications Java',
          school: 'Dawan Paris'
        },
        {
          years: '2022-2023',
          title: 'Formation développeur front-end',
          school: 'Openclassrooms Paris'
        },
        {
          years: '2019-2022',
          title: 'Bachelor commerce, management et communication',
          school: 'ISEFAC Paris'
        },
        {
          years: '2018-2019',
          title: 'Baccalauréat littérature, mention Assez Bien',
          school: 'Lycée Isaac Newton Clichy-la-Garenne'
        }
      ],
      isMenuOpen: false
    }
  },
  computed: {
    t() {
      return translations[this.lang]
    }
  },
  methods: {
    setLang(lang) {
      this.lang = lang
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    },
    openModal(project) {
      this.selectedProject = project
    },
    scrollProjects(direction) {
      const containers = document.querySelectorAll('.projects-slider-container')
      containers.forEach(el => {
        const current = parseFloat(getComputedStyle(el).getPropertyValue('animation-delay')) || 0
        el.style.animationDelay = (current - direction * 2) + 's'
      })
    },
    async fetchProjects() {
      this.projectsLoading = true
      this.projectsError = null

      try {
        const response = await fetch('/projects.json')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()

        if (data.data && data.data.length > 0) {
          this.projects = data.data.map((project, index) => ({
            id: index + 1,
            title: project.title || 'Projet ' + (index + 1),
            description: project.text || '',
            image: project.image || '/images/hero_setup.jpg',
            website: project.buttons?.find(b => b.icon === 'WebSVG')?.href || null,
            github: project.buttons?.find(b => b.icon === 'GITSVG')?.href || null,
            technologies: project.technologies || []
          }))
        }
      } catch (error) {
        console.error('Erreur lors du chargement des projets:', error)
        this.projectsError = 'Impossible de charger les projets. Veuillez réessayer.'
        this.projects = []
      } finally {
        this.projectsLoading = false
      }
    }
  },
  mounted() {
    this.fetchProjects()
  }
}
</script>

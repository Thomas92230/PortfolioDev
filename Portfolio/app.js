const { createApp } = Vue;

const app = createApp({
  template: `
    <div class="min-h-screen" style="background: linear-gradient(135deg, #0a001b 0%, #1a003d 100%);">
      <!-- Header/Navigation -->
      <nav class="fixed top-0 w-full bg-white shadow-md z-50">
        <div class="max-w-6xl mx-auto px-4 py-4">
          <div class="flex justify-between items-center">
            <!-- Logo -->
            <div class="text-2xl font-bold text-gradient">Icham BOUDEHANE</div>
            
            <!-- Desktop Menu -->
            <div class="hidden md:flex gap-6">
              <a href="#projets" class="text-slate-200 hover:text-blue-400 transition">Projets</a>
              <a href="#competences" class="text-slate-200 hover:text-blue-400 transition">Compétences</a>
              <a href="#contact" class="text-slate-200 hover:text-blue-400 transition">Contact</a>
            </div>
            
            <!-- Mobile Menu Button -->
            <div class="md:hidden">
              <button @click="toggleMenu" class="text-slate-200 hover:text-blue-400 focus:outline-none">
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
              <a href="#projets" @click="closeMenu" class="text-slate-200 hover:text-blue-400 transition">Projets</a>
              <a href="#competences" @click="closeMenu" class="text-slate-200 hover:text-blue-400 transition">Compétences</a>
              <a href="#contact" @click="closeMenu" class="text-slate-200 hover:text-blue-400 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <!-- Hero Section -->
      <section class="hero-gradient text-white pt-32 pb-24" style="background: linear-gradient(135deg, #0a001b 0%, #1a003d 100%);">
        <div class="max-w-6xl mx-auto px-4">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <!-- Texte Hero -->
            <div class="fade-in-up">
              <h1 class="text-4xl lg:text-5xl font-bold mb-2 leading-tight uppercase">
                Boudehane Icham
              </h1>
              <h2 class="text-xl lg:text-2xl font-semibold mb-4 text-gray-300 uppercase">
                Concepteur d'applications, front-end & intégrateur web
              </h2>
              <div class="text-base text-gray-200 mb-4 leading-relaxed max-w-xl">
                <span v-for="(word, index) in bioWords" :key="index" 
                      class="fade-in-word inline-block mr-2"
                      :style="{ animationDelay: (index * 0.03) + 's' }">
                  {{ word }}
                </span>
              </div>
              <div class="flex gap-4">
                <a href="#projets" class="btn-primary px-8 py-3 rounded-lg text-white font-semibold inline-block">
                  Voir mes projets
                </a>
                <a href="https://www.linkedin.com/in/icham-boudehane-dev/" target="_blank" rel="noopener" 
                   class="px-8 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white hover:text-slate-900 transition">
                  <i class="fab fa-linkedin mr-2"></i> LinkedIn
                </a>
              </div>
            </div>

            <!-- Image Hero -->
            <div class="fade-in-up" style="animation-delay: 0.1s">
              <div class="relative">
                <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-30"></div>
                <img src="images/hero_setup.jpg" alt="Icham BOUDEHANE" 
                     class="relative rounded-full w-full max-w-md mx-auto drop-shadow-2xl">
              </div>
            </div>
          </div>
        </div>

        <!-- Courbe SVG -->
        <svg class="w-full mt-12" viewBox="0 0 1440 79" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M-100 79C-100 79 218.416 23.165 693.5 23.165C1168.58 23.165 1487 79 1487 79V0H-100V79Z" fill="white"></path>
        </svg>
      </section>

      <!-- Skills Section -->
      <section id="competences" class="text-white py-20" style="background: linear-gradient(135deg, #0a001b 0%, #1a003d 100%);">
        <div class="max-w-6xl mx-auto px-4">
          <div class="text-center mb-14">
            <h2 class="text-4xl font-bold mb-4">Compétences</h2>
            <p class="text-lg text-slate-300 max-w-2xl mx-auto">
              Technologies, outils et langages que j'utilise régulièrement dans mes projets.
            </p>
          </div>

          <!-- Technologies Slider -->
          <div class="relative mb-16">
            <div class="overflow-hidden rounded-2xl">
              <div class="flex gap-6 pb-4 slider-container" ref="sliderContainer">
                <div v-for="tech in skillsSlider" 
                     :key="'first-' + tech.name"
                     class="flex-shrink-0 w-40 rounded-2xl bg-white p-6 shadow-lg flex flex-col items-center justify-center text-center tech-card"
                     @mouseenter="pauseSlider"
                     @mouseleave="resumeSlider">
                  <i :class="['text-5xl mb-4', tech.icon]" :style="{ color: tech.color }"></i>
                  <p class="font-semibold text-slate-900">{{ tech.name }}</p>
                </div>
                <div v-for="tech in skillsSlider" 
                     :key="'second-' + tech.name"
                     class="flex-shrink-0 w-40 rounded-2xl bg-white p-6 shadow-lg flex flex-col items-center justify-center text-center tech-card"
                     @mouseenter="pauseSlider"
                     @mouseleave="resumeSlider">
                  <i :class="['text-5xl mb-4', tech.icon]" :style="{ color: tech.color }"></i>
                  <p class="font-semibold text-slate-900">{{ tech.name }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Skills Progress Bars -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="skill in skills" :key="skill.name" class="bg-slate-800/60 rounded-2xl p-6 shadow-xl">
              <div class="flex justify-between mb-3">
                <span class="font-semibold">{{ skill.name }}</span>
                <span class="text-blue-400 text-sm">{{ skill.level }}%</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div class="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all"
                     :style="{ width: skill.level + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects Section (fond blanc) -->
      <section id="projets" class="bg-white">
        <svg class="w-full block" viewBox="0 0 1440 79" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M-100 0C-100 0 218.416 55.835 693.5 55.835C1168.58 55.835 1487 0 1487 0V79H-100V0Z" fill="white"></path>
        </svg>
        <div class="max-w-6xl mx-auto px-4 py-20">
          <div class="text-center mb-16">
            <h2 class="text-5xl font-bold mb-4 text-slate-900">Mes Projets</h2>
            <p class="text-xl text-slate-600">Une sélection de projets sur lesquels j'ai travaillé</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="project in projects" :key="project.id" class="project-card bg-white rounded-2xl p-6 overflow-hidden">
              <div class="project-image bg-gray-200 mb-6 relative cursor-pointer" @click="selectedProject = project">
                <img :src="project.image" :alt="project.title" v-if="project.image" onerror="this.src='images/hero_setup.jpg'">
                <div v-else class="w-full h-full flex items-center justify-center text-gray-400">
                  <i class="fas fa-image text-4xl"></i>
                </div>
              </div>
              <h3 class="text-2xl font-bold mb-3 text-slate-900">{{ project.title }}</h3>
              <p class="text-slate-600 mb-6 line-clamp-3">{{ project.description }}</p>
              <div class="flex gap-3">
                <a v-if="project.website" :href="project.website" target="_blank" rel="noopener" class="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-center transition flex items-center justify-center gap-2">
                  <i class="fas fa-globe"></i> <span>Voir</span>
                </a>
                <a v-if="project.github" :href="project.github" target="_blank" rel="noopener" class="flex-1 bg-slate-800 hover:bg-slate-900 text-white py-2 rounded-lg text-center transition flex items-center justify-center gap-2">
                  <i class="fab fa-github"></i> <span>Code</span>
                </a>
              </div>
              <div class="mt-4 flex flex-wrap gap-2">
                <span v-for="tech in project.technologies" :key="tech" class="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Diplomas Section -->
      <section class="text-white py-20 bg-hero-gradient">
        <div class="max-w-6xl mx-auto px-4">
          <div class="text-center mb-14">
            <h2 class="text-5xl font-bold mb-4">Diplômes</h2>
            <p class="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Parcours et formations suivies, de la plus récente à la plus ancienne.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="diploma in diplomas" :key="diploma.years" class="bg-slate-800/70 rounded-2xl p-8 shadow-xl border border-white/10 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
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
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="py-20">
        <div class="max-w-6xl mx-auto px-4 text-center">
          <h2 class="text-5xl font-bold mb-6">Parlons ensemble</h2>
          <p class="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Vous avez un projet ou une opportunité ? N'hésitez pas à me contacter !
          </p>
          <div class="flex gap-6 justify-center mb-10">
            <a href="https://github.com" target="_blank" rel="noopener" class="p-4 bg-slate-800 text-white rounded-full hover:bg-blue-600 transition">
              <i class="fab fa-github text-2xl"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener" class="p-4 bg-slate-800 text-white rounded-full hover:bg-blue-600 transition">
              <i class="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="mailto:contact@example.com" class="p-4 bg-slate-800 text-white rounded-full hover:bg-blue-600 transition">
              <i class="fas fa-envelope text-2xl"></i>
            </a>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="bg-slate-900 text-white py-8 border-t border-slate-800">
        <div class="max-w-6xl mx-auto px-4 text-center">
          <p class="text-gray-400">© {{ new Date().getFullYear() }} Icham BOUDEHANE. Tous droits réservés.</p>
        </div>
      </footer>

      <!-- Modal Projet -->
      <div v-if="selectedProject" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
           @click="selectedProject = null">
        <div class="bg-white rounded-lg max-w-2xl w-full p-6" @click.stop>
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-2xl font-bold">{{ selectedProject.title }}</h3>
            <button @click="selectedProject = null" class="text-2xl text-gray-500 hover:text-gray-700">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <img :src="selectedProject.image" :alt="selectedProject.title" class="w-full rounded-lg mb-4 max-h-96 object-cover" v-if="selectedProject.image">
          <p class="text-slate-700 mb-4">{{ selectedProject.description }}</p>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      selectedProject: null,
      bioWords: [
        'Je', 'suis', 'Icham', 'BOUDEHANE,', 'développeur', 'front', 'et', 'concepteur', 'd\'applications',
        'spécialisé', 'en', 'React.', 'Je', 'maîtrise', 'également', 'divers', 'autres', 'langages.',
        'Actuellement', 'en', 'recherche', 'd\'une', 'deuxième', 'année', 'd\'alternance', 'en',
        'tant', 'que', 'concepteur', 'd\'applications', 'ou', 'développeur', 'front.', 'Passionné,',
        'créatif', 'et', 'curieux,', 'je', 'souhaite', 'continuer', 'à', 'évoluer', 'dans', 'ce',
        'métier', 'qui', 'me', 'passionne.', 'Le', 'travail', 'd\'équipe', 'ne', 'm\'effraie', 'pas,',
        'et', 'je', 'suis', 'mobile', 'dans', 'toute', 'la', 'région', 'parisienne.'
      ],
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
          image: 'images/hero_setup.jpg',
          website: 'https://example.com',
          github: 'https://github.com',
          technologies: ['React', 'JavaScript', 'TailwindCSS']
        },
        {
          id: 2,
          title: 'Projet React 2',
          description: 'Un autre projet notable mettant en avant votre expertise en développement frontend et optimisation des performances.',
          image: 'images/hero_setup.jpg',
          website: 'https://example.com',
          github: 'https://github.com',
          technologies: ['React', 'API REST', 'Vite']
        },
        {
          id: 3,
          title: 'Projet React 3',
          description: 'Un projet supplémentaire montrant votre capacité à travailler sur des applications complexes et scalables.',
          image: 'images/hero_setup.jpg',
          website: 'https://example.com',
          github: 'https://github.com',
          technologies: ['React', 'TypeScript', 'Redux']
        },
        {
          id: 4,
          title: 'Projet Web Design',
          description: 'Un site web élégant et responsive, démontrant votre maîtrise du design modern et de l\'UX.',
          image: 'images/hero_setup.jpg',
          website: 'https://example.com',
          github: 'https://github.com',
          technologies: ['HTML', 'CSS', 'JavaScript']
        },
        {
          id: 5,
          title: 'Application Mobile Web',
          description: 'Une application web mobile-first avec une excellent expérience utilisateur et performances optimales.',
          image: 'images/hero_setup.jpg',
          website: 'https://example.com',
          github: 'https://github.com',
          technologies: ['React Native', 'JavaScript', 'Firebase']
        },
        {
          id: 6,
          title: 'Plateforme E-commerce',
          description: 'Une plateforme e-commerce complète avec panier, paiements et gestion d\'inventaire.',
          image: 'images/hero_setup.jpg',
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
    };
  },

  methods: {
    pauseSlider() {
      if (this.$refs.sliderContainer) {
        this.$refs.sliderContainer.style.animationPlayState = 'paused';
      }
    },
    resumeSlider() {
      if (this.$refs.sliderContainer) {
        this.$refs.sliderContainer.style.animationPlayState = 'running';
      }
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  },

  mounted() {
    // Charger les projets depuis le JSON
    fetch('./projects.json')
      .then(response => response.json())
      .then(data => {
        if (data.data && data.data.length > 0) {
          this.projects = data.data.map((project, index) => ({
            id: index + 1,
            title: project.title || 'Projet ' + (index + 1),
            description: project.text || '',
            image: project.image || 'images/hero_setup.jpg',
            website: project.buttons?.find(b => b.icon === 'WebSVG')?.href || null,
            github: project.buttons?.find(b => b.icon === 'GITSVG')?.href || null,
            technologies: project.technologies || []
          }));
        }
      })
      .catch(error => console.log('Utilisation des projets par défaut'));
  }
});

app.mount('#app');

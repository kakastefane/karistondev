<template>
  <section id="about" class="section-padding bg-neutral-50 dark:bg-neutral-950">
    <div class="section-container">
      <div
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="text-center mb-16"
      >
        <h2 class="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
          {{ $t('about.title') }}
        </h2>
        <p class="text-xl text-neutral-600 dark:text-neutral-400">
          {{ $t('about.subtitle') }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
        <!-- Left: Image/Visual -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visible-once="{ opacity: 1, x: 0, transition: { duration: 600, delay: 200 } }"
          class="relative"
        >
          <div class="aspect-square rounded-2xl bg-gradient-to-br from-neutral-300 to-neutral-400 dark:from-neutral-700 dark:to-neutral-800 overflow-hidden shadow-2xl">
            <!-- Placeholder for profile image -->
            <div class="w-full h-full flex items-center justify-center text-8xl">
              👨‍💻
            </div>
          </div>
          
          <!-- Decorative element -->
          <div class="absolute -bottom-6 -right-6 w-48 h-48 bg-neutral-200 dark:bg-neutral-800 rounded-2xl -z-10"></div>
        </div>

        <!-- Right: Content -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :visible-once="{ opacity: 1, x: 0, transition: { duration: 600, delay: 400 } }"
        >
          <p class="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8">
            {{ $t('about.description') }}
          </p>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6 mb-8">
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                {{ $t('about.experience') }}
              </div>
              <p class="text-sm md:text-base text-neutral-600 dark:text-neutral-400">
                {{ $t('about.experienceLabel') }}
              </p>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                {{ $t('about.projects') }}
              </div>
              <p class="text-sm md:text-base text-neutral-600 dark:text-neutral-400">
                {{ $t('about.projectsLabel') }}
              </p>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                {{ $t('about.clients') }}
              </div>
              <p class="text-sm md:text-base text-neutral-600 dark:text-neutral-400">
                {{ $t('about.clientsLabel') }}
              </p>
            </div>
          </div>

          <!-- Skills -->
          <div class="flex flex-wrap gap-3">
            <span
              v-for="skill in skills"
              :key="skill"
              class="px-4 py-2 bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-default"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const skills = [
  'Vue.js',
  'Nuxt.js',
  'React',
  'Node.js',
  'PHP',
  'Laravel',
  'Shopify',
  'WordPress',
  'TailwindCSS',
  'MySQL',
  'MongoDB',
  'Git',
]
</script>

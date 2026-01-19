<template>
  <section id="projects" class="section-padding">
    <div class="section-container">
      <div
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="text-center mb-16"
      >
        <h2 class="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
          {{ $t('projects.title') }}
        </h2>
        <p class="text-xl text-neutral-600 dark:text-neutral-400">
          {{ $t('projects.subtitle') }}
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div
          v-for="(project, index) in projects"
          :key="index"
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visible-once="{ opacity: 1, scale: 1, transition: { duration: 600, delay: index * 150 } }"
          class="group cursor-pointer"
        >
          <a
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="block glass rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <!-- Image -->
            <div class="relative aspect-video bg-gradient-to-br from-neutral-300 to-neutral-400 dark:from-neutral-700 dark:to-neutral-800 overflow-hidden">
              <img
                v-if="project.image && project.image.startsWith('http')"
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div
                v-else
                class="w-full h-full flex items-center justify-center text-6xl"
              >
                📱
              </div>
              
              <!-- Overlay -->
              <div class="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/40 transition-colors duration-300 flex items-center justify-center">
                <svg
                  class="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </div>

            <!-- Content -->
            <div class="p-6">
              <!-- Type Badge -->
              <span class="inline-block px-3 py-1 bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-sm font-medium rounded-full mb-3">
                {{ project.type }}
              </span>

              <!-- Title -->
              <h3 class="text-2xl font-display font-bold text-neutral-900 dark:text-neutral-50 mb-3 group-hover:text-gradient transition-all">
                {{ project.title }}
              </h3>

              <!-- Description -->
              <p class="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {{ project.description }}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { getProjects } = useContent()
const projects = ref<any[]>([])

onMounted(async () => {
  projects.value = await getProjects()
})
</script>

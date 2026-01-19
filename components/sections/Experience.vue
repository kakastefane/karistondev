<template>
  <section id="experience" class="section-padding">
    <div class="section-container">
      <div
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="text-center mb-16"
      >
        <h2 class="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
          {{ $t('experience.title') }}
        </h2>
        <p class="text-xl text-neutral-600 dark:text-neutral-400">
          {{ $t('experience.subtitle') }}
        </p>
      </div>

      <!-- Timeline -->
      <div class="max-w-4xl mx-auto">
        <div class="relative">
          <!-- Vertical line -->
          <div class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-neutral-300 dark:bg-neutral-700"></div>

          <!-- Experience Items -->
          <div class="space-y-12">
            <div
              v-for="(exp, index) in experiences"
              :key="index"
              v-motion
              :initial="{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }"
              :visible-once="{ opacity: 1, x: 0, transition: { duration: 600, delay: index * 100 } }"
              class="relative"
              :class="index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'"
            >
              <!-- Timeline dot -->
              <div
                class="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-neutral-900 dark:bg-neutral-50 rounded-full border-4 border-background-light dark:border-background-dark"
              ></div>

              <!-- Content Card -->
              <div class="ml-8 md:ml-0" :class="index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'">
                <div class="glass p-6 rounded-xl hover:shadow-xl transition-shadow">
                  <span class="inline-block px-3 py-1 bg-neutral-900 dark:bg-neutral-50 text-neutral-50 dark:text-neutral-900 text-sm font-medium rounded-full mb-3">
                    {{ exp.period }}
                  </span>
                  <h3 class="text-2xl font-display font-bold text-neutral-900 dark:text-neutral-50 mb-2">
                    {{ exp.role }}
                  </h3>
                  <p class="text-lg text-neutral-700 dark:text-neutral-300 font-medium mb-3">
                    {{ exp.company }}
                  </p>
                  <p class="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {{ exp.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { getExperience } = useContent()
const { locale } = useI18n()

const experiences = computed(() => getExperience())
</script>

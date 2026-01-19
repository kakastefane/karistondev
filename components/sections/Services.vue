<template>
  <section id="services" class="section-padding bg-neutral-50 dark:bg-neutral-950">
    <div class="section-container">
      <div
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="text-center mb-16"
      >
        <h2 class="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
          {{ $t('services.title') }}
        </h2>
        <p class="text-xl text-neutral-600 dark:text-neutral-400">
          {{ $t('services.subtitle') }}
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div
          v-for="(service, index) in services"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 150 } }"
          class="glass p-8 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-default group"
        >
          <!-- Icon -->
          <div class="text-6xl mb-6 group-hover:scale-110 transition-transform">
            {{ service.icon }}
          </div>

          <!-- Title -->
          <h3 class="text-2xl font-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            {{ service.title }}
          </h3>

          <!-- Description -->
          <p class="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { getServices } = useContent()

const services = computed(() => getServices())
</script>

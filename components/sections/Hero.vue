<template>
  <section
    id="home"
    class="relative min-h-screen flex items-center justify-center overflow-hidden section-padding pt-32"
  >
    <!-- Background Gradient -->
    <div
      class="absolute inset-0 bg-gradient-radial from-neutral-200/50 via-transparent to-transparent dark:from-neutral-800/30 pointer-events-none"
    ></div>

    <!-- Floating Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-20 left-10 w-72 h-72 bg-neutral-300/20 dark:bg-neutral-700/20 rounded-full blur-3xl animate-float"
      ></div>
      <div
        class="absolute bottom-20 right-10 w-96 h-96 bg-neutral-400/20 dark:bg-neutral-600/20 rounded-full blur-3xl animate-float"
        style="animation-delay: 1s"
      ></div>
    </div>

    <div class="section-container relative z-10">
      <div class="max-w-5xl mx-auto text-center">
        <!-- Greeting -->
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }"
          class="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-medium mb-4"
        >
          {{ $t('hero.greeting') }}
        </p>

        <!-- Name -->
        <h1
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
          class="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-gradient mb-6"
        >
          {{ $t('hero.name') }}
        </h1>

        <!-- Title -->
        <h2
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 300 } }"
          class="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-neutral-800 dark:text-neutral-200 mb-4"
        >
          {{ $t('hero.title') }}
        </h2>

        <!-- Subtitle -->
        <p
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }"
          class="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 font-medium mb-8"
        >
          {{ $t('hero.subtitle') }}
        </p>

        <!-- Description -->
        <p
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 500 } }"
          class="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          {{ $t('hero.description') }}
        </p>

        <!-- CTAs -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 600 } }"
          class="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" class="btn btn-primary text-lg px-8 py-4">
            {{ $t('hero.cta') }}
          </a>
          <a href="#contact" class="btn btn-outline text-lg px-8 py-4">
            {{ $t('hero.contact') }}
          </a>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { delay: 800 } }"
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" class="flex flex-col items-center gap-2 group">
          <span class="text-sm text-neutral-500 dark:text-neutral-400">Scroll</span>
          <svg
            class="w-6 h-6 text-neutral-500 dark:text-neutral-400 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Auto-imported by Nuxt
</script>

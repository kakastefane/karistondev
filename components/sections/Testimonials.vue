<template>
  <section id="testimonials" class="section-padding bg-neutral-50 dark:bg-neutral-950">
    <div class="section-container">
      <div
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="text-center mb-16"
      >
        <h2 class="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
          {{ $t('testimonials.title') }}
        </h2>
        <p class="text-xl text-neutral-600 dark:text-neutral-400">
          {{ $t('testimonials.subtitle') }}
        </p>
      </div>

      <!-- Testimonials Carousel -->
      <div class="max-w-4xl mx-auto relative">
        <div class="overflow-hidden">
          <Transition name="slide" mode="out-in">
            <div :key="currentIndex" class="glass p-8 md:p-12 rounded-2xl">
              <!-- Stars -->
              <div class="flex justify-center gap-1 mb-6">
                <svg
                  v-for="star in 5"
                  :key="star"
                  class="w-6 h-6"
                  :class="star <= testimonials[currentIndex]?.rating ? 'text-yellow-500' : 'text-neutral-300 dark:text-neutral-700'"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>

              <!-- Quote -->
              <p class="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 leading-relaxed text-center mb-8 italic">
                "{{ testimonials[currentIndex]?.text }}"
              </p>

              <!-- Author -->
              <div class="text-center">
                <p class="text-lg font-display font-bold text-neutral-900 dark:text-neutral-50">
                  {{ testimonials[currentIndex]?.name }}
                </p>
                <p class="text-neutral-600 dark:text-neutral-400">
                  {{ testimonials[currentIndex]?.role }}
                </p>
              </div>
            </div>
          </Transition>
        </div>

        <!-- Navigation -->
        <div class="flex items-center justify-center gap-4 mt-8">
          <button
            @click="prevTestimonial"
            class="p-3 rounded-full glass hover:shadow-lg transition-all hover:scale-110"
            aria-label="Previous testimonial"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <!-- Dots -->
          <div class="flex gap-2">
            <button
              v-for="(_, index) in testimonials"
              :key="index"
              @click="currentIndex = index"
              class="w-2.5 h-2.5 rounded-full transition-all"
              :class="index === currentIndex ? 'bg-neutral-900 dark:bg-neutral-50 w-8' : 'bg-neutral-400 dark:bg-neutral-600'"
              :aria-label="`Go to testimonial ${index + 1}`"
            ></button>
          </div>

          <button
            @click="nextTestimonial"
            class="p-3 rounded-full glass hover:shadow-lg transition-all hover:scale-110"
            aria-label="Next testimonial"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { getTestimonials } = useContent()
const testimonials = ref<any[]>([])
const currentIndex = ref(0)
let autoplayInterval: NodeJS.Timeout | null = null

const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length
}

const prevTestimonial = () => {
  currentIndex.value = currentIndex.value === 0 ? testimonials.value.length - 1 : currentIndex.value - 1
}

const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    nextTestimonial()
  }, 5000)
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
  }
}

onMounted(async () => {
  testimonials.value = await getTestimonials()
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>

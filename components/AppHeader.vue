<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="{ 'glass-strong shadow-lg': scrolled }"
  >
    <nav class="section-container py-4 md:py-6">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <a
          href="#home"
          class="text-2xl md:text-3xl font-display font-bold text-neutral-900 dark:text-neutral-50 hover:opacity-80 transition-opacity"
        >
          K<span class="text-neutral-600 dark:text-neutral-400">.</span>
        </a>

        <!-- Desktop Navigation -->
        <ul class="hidden md:flex items-center gap-8">
          <li v-for="item in navItems" :key="item.href">
            <a
              :href="item.href"
              class="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors font-medium"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>

        <!-- Right Side Actions -->
        <div class="flex items-center gap-4">
          <!-- Language Switcher -->
          <button
            @click="toggleLocale"
            class="px-3 py-1.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors border border-neutral-300 dark:border-neutral-700 rounded-lg hover:border-neutral-400 dark:hover:border-neutral-600"
            :aria-label="`Switch to ${locale === 'pt' ? 'English' : 'Português'}`"
          >
            {{ locale === 'pt' ? 'EN' : 'PT' }}
          </button>

          <!-- Theme Toggle -->
          <button
            @click="toggleTheme"
            class="p-2 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
            :aria-label="colorMode.value === 'dark' ? $t('theme.light') : $t('theme.dark')"
          >
            <svg
              v-if="colorMode.value === 'dark'"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <svg
              v-else
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </button>

          <!-- Mobile Menu Button -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 text-neutral-700 dark:text-neutral-300"
            :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
          >
            <svg
              v-if="!mobileMenuOpen"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-else
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <Transition name="slide-down">
        <div
          v-if="mobileMenuOpen"
          class="md:hidden mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800"
        >
          <ul class="flex flex-col gap-4">
            <li v-for="item in navItems" :key="item.href">
              <a
                :href="item.href"
                @click="mobileMenuOpen = false"
                class="block text-lg text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors font-medium"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
const { t, locale, setLocale } = useI18n()
const colorMode = useColorMode()
const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const navItems = computed(() => [
  { href: '#home', label: t('nav.home') },
  { href: '#about', label: t('nav.about') },
  { href: '#experience', label: t('nav.experience') },
  { href: '#services', label: t('nav.services') },
  { href: '#projects', label: t('nav.projects') },
  { href: '#testimonials', label: t('nav.testimonials') },
  { href: '#contact', label: t('nav.contact') },
])

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const toggleLocale = () => {
  const newLocale = locale.value === 'pt' ? 'en' : 'pt'
  setLocale(newLocale)
}

// Handle scroll
if (process.client) {
  onMounted(() => {
    const handleScroll = () => {
      scrolled.value = window.scrollY > 50
    }
    window.addEventListener('scroll', handleScroll)
    onUnmounted(() => window.removeEventListener('scroll', handleScroll))
  })
}
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

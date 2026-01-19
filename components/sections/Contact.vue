<template>
  <section id="contact" class="section-padding">
    <div class="section-container">
      <div
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="text-center mb-16"
      >
        <h2 class="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
          {{ $t('contact.title') }}
        </h2>
        <p class="text-xl text-neutral-600 dark:text-neutral-400 mb-4">
          {{ $t('contact.subtitle') }}
        </p>
        <p class="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          {{ $t('contact.description') }}
        </p>
      </div>

      <!-- Contact Form -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
        class="max-w-2xl mx-auto"
      >
        <form @submit.prevent="handleSubmit" class="glass p-8 md:p-12 rounded-2xl">
          <!-- Name -->
          <div class="mb-6">
            <label for="name" class="block text-neutral-700 dark:text-neutral-300 font-medium mb-2">
              {{ $t('contact.form.name') }}
            </label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              :placeholder="$t('contact.form.namePlaceholder')"
              required
              class="w-full px-4 py-3 bg-white dark:bg-neutral-800 border-2 border-neutral-300 dark:border-neutral-700 rounded-lg focus:border-neutral-900 dark:focus:border-neutral-50 focus:outline-none transition-colors text-neutral-900 dark:text-neutral-50"
            />
          </div>

          <!-- Email -->
          <div class="mb-6">
            <label for="email" class="block text-neutral-700 dark:text-neutral-300 font-medium mb-2">
              {{ $t('contact.form.email') }}
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              :placeholder="$t('contact.form.emailPlaceholder')"
              required
              class="w-full px-4 py-3 bg-white dark:bg-neutral-800 border-2 border-neutral-300 dark:border-neutral-700 rounded-lg focus:border-neutral-900 dark:focus:border-neutral-50 focus:outline-none transition-colors text-neutral-900 dark:text-neutral-50"
            />
          </div>

          <!-- Message -->
          <div class="mb-6">
            <label for="message" class="block text-neutral-700 dark:text-neutral-300 font-medium mb-2">
              {{ $t('contact.form.message') }}
            </label>
            <textarea
              id="message"
              v-model="form.message"
              rows="6"
              :placeholder="$t('contact.form.messagePlaceholder')"
              required
              class="w-full px-4 py-3 bg-white dark:bg-neutral-800 border-2 border-neutral-300 dark:border-neutral-700 rounded-lg focus:border-neutral-900 dark:focus:border-neutral-50 focus:outline-none transition-colors resize-none text-neutral-900 dark:text-neutral-50"
            ></textarea>
          </div>

          <!-- Status Message -->
          <Transition name="fade">
            <div
              v-if="statusMessage"
              class="mb-6 p-4 rounded-lg"
              :class="statusType === 'success' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200' : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'"
            >
              {{ statusMessage }}
            </div>
          </Transition>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full btn btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="!isSubmitting">{{ $t('contact.form.submit') }}</span>
            <span v-else class="flex items-center justify-center gap-2">
              <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ $t('contact.form.sending') }}
            </span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { sendEmail } = useEmail()

const form = ref({
  name: '',
  email: '',
  message: '',
})

const isSubmitting = ref(false)
const statusMessage = ref('')
const statusType = ref<'success' | 'error'>('success')

const handleSubmit = async () => {
  isSubmitting.value = true
  statusMessage.value = ''

  const result = await sendEmail(form.value)

  isSubmitting.value = false

  if (result.success) {
    statusType.value = 'success'
    statusMessage.value = t('contact.form.success')
    // Reset form
    form.value = {
      name: '',
      email: '',
      message: '',
    }
  } else {
    statusType.value = 'error'
    statusMessage.value = t('contact.form.error')
  }

  // Clear message after 5 seconds
  setTimeout(() => {
    statusMessage.value = ''
  }, 5000)
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

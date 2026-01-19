import type { ContactForm } from '~/types'

export const useEmail = () => {
    const sendEmail = async (formData: ContactForm): Promise<{ success: boolean; message: string }> => {
        try {
            // TODO: Connect to your email API endpoint
            // Example using a backend API:

            /*
            const response = await $fetch('/api/contact', {
              method: 'POST',
              body: formData,
            })
            
            return {
              success: true,
              message: 'Email sent successfully!',
            }
            */

            // Temporary mock for development
            console.log('Email data:', formData)

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500))

            return {
                success: true,
                message: 'Message sent successfully! (Development mode)',
            }
        } catch (error) {
            console.error('Error sending email:', error)
            return {
                success: false,
                message: 'Failed to send email. Please try again.',
            }
        }
    }

    return {
        sendEmail,
    }
}

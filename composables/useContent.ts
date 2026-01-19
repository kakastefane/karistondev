import type { Project, Testimonial, Experience, Service } from '~/types'

export const useContent = () => {
    const { t } = useI18n()

    // Fetch projects from i18n
    const getProjects = (): Project[] => {
        return [
            {
                title: t('projects.items.0.title'),
                description: t('projects.items.0.description'),
                type: t('projects.items.0.type'),
                image: '/images/project-1.jpg',
                link: '#',
            },
            {
                title: t('projects.items.1.title'),
                description: t('projects.items.1.description'),
                type: t('projects.items.1.type'),
                image: '/images/project-2.jpg',
                link: '#',
            },
            {
                title: t('projects.items.2.title'),
                description: t('projects.items.2.description'),
                type: t('projects.items.2.type'),
                image: '/images/project-3.jpg',
                link: '#',
            },
        ]
    }

    // Fetch testimonials from i18n
    const getTestimonials = (): Testimonial[] => {
        return [
            {
                name: t('testimonials.items.0.name'),
                role: t('testimonials.items.0.role'),
                text: t('testimonials.items.0.text'),
                rating: 5,
            },
            {
                name: t('testimonials.items.1.name'),
                role: t('testimonials.items.1.role'),
                text: t('testimonials.items.1.text'),
                rating: 5,
            },
            {
                name: t('testimonials.items.2.name'),
                role: t('testimonials.items.2.role'),
                text: t('testimonials.items.2.text'),
                rating: 5,
            },
            {
                name: t('testimonials.items.3.name'),
                role: t('testimonials.items.3.role'),
                text: t('testimonials.items.3.text'),
                rating: 5,
            },
            {
                name: t('testimonials.items.4.name'),
                role: t('testimonials.items.4.role'),
                text: t('testimonials.items.4.text'),
                rating: 5,
            },
        ]
    }

    // Fetch experience from i18n
    const getExperience = (): Experience[] => {
        return [
            {
                company: t('experience.items.0.company'),
                role: t('experience.items.0.role'),
                period: t('experience.items.0.period'),
                description: t('experience.items.0.description'),
            },
            {
                company: t('experience.items.1.company'),
                role: t('experience.items.1.role'),
                period: t('experience.items.1.period'),
                description: t('experience.items.1.description'),
            },
            {
                company: t('experience.items.2.company'),
                role: t('experience.items.2.role'),
                period: t('experience.items.2.period'),
                description: t('experience.items.2.description'),
            },
            {
                company: t('experience.items.3.company'),
                role: t('experience.items.3.role'),
                period: t('experience.items.3.period'),
                description: t('experience.items.3.description'),
            },
        ]
    }

    // Fetch services from i18n
    const getServices = (): Service[] => {
        return [
            {
                title: t('services.items.0.title'),
                description: t('services.items.0.description'),
                icon: '🌐',
            },
            {
                title: t('services.items.1.title'),
                description: t('services.items.1.description'),
                icon: '🛒',
            },
            {
                title: t('services.items.2.title'),
                description: t('services.items.2.description'),
                icon: '⚙️',
            },
        ]
    }

    return {
        getProjects,
        getTestimonials,
        getExperience,
        getServices,
    }
}

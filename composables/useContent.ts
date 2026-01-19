import type { Project, Testimonial, Experience, Service } from '~/types'

export const useContent = () => {
    // API endpoints - replace with your actual API URLs
    const API_BASE_URL = '/api'

    // Fetch projects from API
    const getProjects = async (): Promise<Project[]> => {
        try {
            // TODO: Connect to your API
            // const data = await $fetch<Project[]>(`${API_BASE_URL}/projects`)
            // return data

            // Mock data for development
            return [
                {
                    title: 'E-commerce de Moda',
                    description: 'Loja virtual completa com integração de pagamento, sistema de gestão de estoque e painel administrativo.',
                    type: 'E-commerce',
                    image: '/images/project-1.jpg',
                    link: '#',
                },
                {
                    title: 'Site Institucional',
                    description: 'Website moderno e responsivo para empresa de tecnologia com animações e design minimalista.',
                    type: 'Website',
                    image: '/images/project-2.jpg',
                    link: '#',
                },
                {
                    title: 'Sistema de Gestão',
                    description: 'Plataforma web para gestão de processos internos com dashboard interativo e relatórios personalizados.',
                    type: 'Sistema',
                    image: '/images/project-3.jpg',
                    link: '#',
                },
            ]
        } catch (error) {
            console.error('Error fetching projects:', error)
            return []
        }
    }

    // Fetch testimonials from API
    const getTestimonials = async (): Promise<Testimonial[]> => {
        try {
            // TODO: Connect to your API
            // const data = await $fetch<Testimonial[]>(`${API_BASE_URL}/testimonials`)
            // return data

            // Mock data for development
            return [
                {
                    name: 'Ana Silva',
                    role: 'CEO, Loja Fashion',
                    text: 'Trabalho excepcional! O Kariston desenvolveu nossa loja virtual do zero e superou todas as expectativas. Profissional, dedicado e sempre disponível para ajudar.',
                    rating: 5,
                },
                {
                    name: 'Carlos Mendes',
                    role: 'Diretor de TI, Tech Solutions',
                    text: 'Excelente desenvolvedor! Entregou nosso projeto no prazo e com qualidade superior. Recomendo fortemente seus serviços.',
                    rating: 5,
                },
                {
                    name: 'Marina Costa',
                    role: 'Fundadora, Studio Criativo',
                    text: 'Parceria de longa data! O Kariston sempre entrega sites incríveis e é muito atencioso com os detalhes. Nosso site ficou perfeito!',
                    rating: 5,
                },
                {
                    name: 'Ricardo Oliveira',
                    role: 'Gerente, Empresa XYZ',
                    text: 'Profissional altamente qualificado. Desenvolveu um sistema personalizado que otimizou completamente nossos processos internos.',
                    rating: 5,
                },
                {
                    name: 'Juliana Ferreira',
                    role: 'E-commerce Manager',
                    text: 'O melhor desenvolvedor que já trabalhei! Sempre traz soluções criativas e eficientes. Nosso e-commerce nunca funcionou tão bem.',
                    rating: 5,
                },
            ]
        } catch (error) {
            console.error('Error fetching testimonials:', error)
            return []
        }
    }

    // Fetch experience from API
    const getExperience = async (): Promise<Experience[]> => {
        try {
            // TODO: Connect to your API
            // const data = await $fetch<Experience[]>(`${API_BASE_URL}/experience`)
            // return data

            // Mock data for development
            return [
                {
                    company: 'Freelancer',
                    role: 'Full Stack Developer',
                    period: '2018 - Presente',
                    description: 'Desenvolvimento de soluções personalizadas para diversos clientes, incluindo e-commerces, sites institucionais e sistemas web. Especialização em Shopify e WordPress.',
                },
                {
                    company: 'Agência Digital',
                    role: 'Desenvolvedor Sênior',
                    period: '2015 - 2018',
                    description: 'Liderança técnica em projetos de grande porte, desenvolvimento de temas e plugins customizados, integração com APIs e otimização de performance.',
                },
                {
                    company: 'Startup Tech',
                    role: 'Desenvolvedor Full Stack',
                    period: '2012 - 2015',
                    description: 'Desenvolvimento de aplicações web escaláveis, implementação de arquiteturas modernas e trabalho em equipe ágil.',
                },
                {
                    company: 'Empresa de TI',
                    role: 'Desenvolvedor Web',
                    period: '2009 - 2012',
                    description: 'Início da carreira com desenvolvimento de sites institucionais, landing pages e pequenos sistemas de gestão.',
                },
            ]
        } catch (error) {
            console.error('Error fetching experience:', error)
            return []
        }
    }

    // Fetch services from API
    const getServices = async (): Promise<Service[]> => {
        try {
            // TODO: Connect to your API
            // const data = await $fetch<Service[]>(`${API_BASE_URL}/services`)
            // return data

            // Mock data for development
            return [
                {
                    title: 'Desenvolvimento de Sites',
                    description: 'Sites institucionais modernos, responsivos e otimizados para SEO. Utilizo as melhores práticas e tecnologias atuais para garantir performance e usabilidade.',
                    icon: '🌐',
                },
                {
                    title: 'E-commerce',
                    description: 'Lojas virtuais completas e personalizadas com integração de pagamento, gestão de produtos e experiência de compra otimizada. Especialista em Shopify.',
                    icon: '🛒',
                },
                {
                    title: 'Sistemas Personalizados',
                    description: 'Desenvolvimento de sistemas web sob medida para atender necessidades específicas do seu negócio, com integração de APIs e automações.',
                    icon: '⚙️',
                },
            ]
        } catch (error) {
            console.error('Error fetching services:', error)
            return []
        }
    }

    return {
        getProjects,
        getTestimonials,
        getExperience,
        getServices,
    }
}

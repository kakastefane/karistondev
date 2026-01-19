export interface Project {
    title: string
    description: string
    type: string
    image: string
    link: string
}

export interface Testimonial {
    name: string
    role: string
    text: string
    rating: number
}

export interface Experience {
    company: string
    role: string
    period: string
    description: string
}

export interface Service {
    title: string
    description: string
    icon: string
}

export interface ContactForm {
    name: string
    email: string
    message: string
}

export interface ContentResponse<T> {
    data: T
    error?: string
}

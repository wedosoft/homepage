'use client'

import Link from 'next/link'
import { Container } from '@/components/layout/container'

const footerLinks = {
    solutions: {
        title: '솔루션',
        links: [
            { name: 'Google Workspace', href: '/solutions/google-workspace' },
            { name: 'Freshworks', href: '/solutions/freshworks' },
            { name: 'Monday.com', href: '/solutions/monday' },
            { name: 'Splashtop', href: '/solutions/splashtop' },
        ]
    },
    services: {
        title: '서비스',
        links: [
            { name: '컨설팅 & 진단', href: '/services/consulting' },
            { name: '구축 & 마이그레이션', href: '/services/implementation' },
            { name: '교육 & 트레이닝', href: '/services/training' },
            { name: '기술 지원', href: '/services/support' },
        ]
    },
    company: {
        title: '회사',
        links: [
            { name: '회사 소개', href: '/about' },
            { name: '블로그', href: '/blog' },
            { name: '채용', href: '/careers' },
            { name: '파트너십', href: '/partners' },
        ]
    },
    support: {
        title: '지원',
        links: [
            { name: '문의하기', href: '/contact' },
            { name: '가격 안내', href: '/pricing' },
            { name: '도움말', href: '/help' },
            { name: '개발자 API', href: '/developers' },
        ]
    }
}

const socialLinks = [
    {
        name: 'LinkedIn',
        href: 'https://linkedin.com/company/wedosoft',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        )
    },
    {
        name: 'YouTube',
        href: 'https://youtube.com/@wedosoft',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
        )
    },
    {
        name: 'GitHub',
        href: 'https://github.com/wedosoft',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
        )
    }
]

export function Footer() {
    return (
        <footer className="bg-background border-t border-border">
            <Container>
                <div className="py-16">
                    {/* Main footer content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
                        {/* Company info */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                    <span className="text-primary-foreground font-bold text-sm">W</span>
                                </div>
                                <span className="font-semibold text-lg">WeDoSoft</span>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                디지털 전환을 위한 최고의 솔루션과 서비스를 제공합니다.
                                Google Workspace, Freshworks, Monday.com, Splashtop 등
                                검증된 솔루션으로 비즈니스 혁신을 지원합니다.
                            </p>

                            {/* Social links */}
                            <div className="flex space-x-4">
                                {socialLinks.map((social) => (
                                    <Link
                                        key={social.name}
                                        href={social.href}
                                        className="text-muted-foreground hover:text-foreground transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="sr-only">{social.name}</span>
                                        {social.icon}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Footer links */}
                        {Object.entries(footerLinks).map(([key, section]) => (
                            <div key={key}>
                                <h3 className="font-semibold text-sm mb-4">{section.title}</h3>
                                <ul className="space-y-3">
                                    {section.links.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Bottom section */}
                    <div className="mt-16 pt-8 border-t border-border">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                                <p className="text-sm text-muted-foreground">
                                    © 2024 WeDoSoft. All rights reserved.
                                </p>
                                <div className="flex space-x-6">
                                    <Link
                                        href="/privacy"
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        개인정보처리방침
                                    </Link>
                                    <Link
                                        href="/terms"
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        이용약관
                                    </Link>
                                    <Link
                                        href="/cookies"
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        쿠키 정책
                                    </Link>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <span>Made with</span>
                                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                                <span>in Seoul, Korea</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
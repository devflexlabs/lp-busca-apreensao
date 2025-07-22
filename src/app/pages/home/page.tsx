// pages/index.js
"use client"
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { ChevronDown, Bell, Clock, Shield, Car, Lightbulb, Phone, Mail, Instagram, Facebook, Linkedin, MessageCircle, Truck, CircleCheck, Menu } from 'lucide-react'
import Script from 'next/script'
import Image from "next/image";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '@/app/components/dropdown-menu'
import { Button } from '@/app/components/button'
import Header from '@/app/components/header'
import HeroSection from '@/app/components/hero-section'
import SituacaoSection from '@/app/components/situacao-section'
import SolucaoSection from '@/app/components/solucao-section'
import FormSection from '@/app/components/form-section'
import RiskSection from '@/app/components/risk-section'
import Footer from '@/app/components/footer'


declare global {
    interface Window {
        ZenviaChat?: any
    }
}

export default function HomePage() {


    useEffect(() => {
        const script = document.createElement("script");
        script.src =
            "https://d335luupugsy2.cloudfront.net/js/loader-scripts/9dc1319c-c730-4058-90a9-043a9a9775c6-loader.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div className='font-poppins'>
            <div className="min-h-screen bg-black text-white">
                {/* Header */}
                <Header />

                {/* Hero Section */}
                <HeroSection />

                {/* Situação Section */}
                <SituacaoSection />

                {/* Relax Section */}
                <SolucaoSection />

                {/* Form Section */}
                <FormSection />

                {/* Risk Section */}
                <RiskSection />

                {/* Footer */}
                <Footer />

                <Script
                    src="https://static.zenvia.com/embed/js/zenvia-chat.min.js"
                    strategy="afterInteractive"
                    onLoad={() => {
                        if (window.ZenviaChat) {
                            const chat = new window.ZenviaChat('4cda3cf1c75a49408ba9a9d693240edd')
                                .embedded('button')
                                .build();

                            const observer = new MutationObserver(() => {
                                const btn = document.querySelector('.znv-float-button');
                                if (btn instanceof HTMLElement) {
                                    btn.style.display = 'none';
                                    observer.disconnect();
                                }
                            });

                            observer.observe(document.body, {
                                childList: true,
                                subtree: true,
                            });
                        }
                    }}
                />
            </div>
        </div>
    )
}
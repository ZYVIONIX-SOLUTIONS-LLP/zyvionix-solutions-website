"use client";

import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function LottieAnimation({ src, bgInfo = "bg-white" }: { src?: string, bgInfo?: string }) {
    const animationSrc = src || "https://lottie.host/6401fd0d-c6ac-48fd-9af9-4bf0d0570953/UvquQ2GpHD.lottie";
    return (
        <div className={`w-full h-full flex items-center justify-center ${bgInfo}`}>
            <DotLottieReact
                src={animationSrc}
                loop
                autoplay
                className="w-full h-full object-contain"
            />
        </div>
    );
}

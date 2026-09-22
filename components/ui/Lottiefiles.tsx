"use client";

import React, { useEffect, useState } from 'react';
import { DotLottieReact, type DotLottie } from '@lottiefiles/dotlottie-react';

export default function LottieAnimation({
    src,
    bgInfo = "bg-white",
    playOnHover = false,
    isHovered = false,
    autoplay = true
}: {
    src?: string;
    bgInfo?: string;
    playOnHover?: boolean;
    isHovered?: boolean;
    autoplay?: boolean;
}) {
    const animationSrc = src || "https://lottie.host/6401fd0d-c6ac-48fd-9af9-4bf0d0570953/UvquQ2GpHD.lottie";
    const [dotLottie, setDotLottie] = useState<DotLottie | null>(null);

    useEffect(() => {
        if (!dotLottie) return;
        if (playOnHover) {
            if (isHovered) {
                dotLottie.play();
            } else {
                dotLottie.pause();
            }
        }
    }, [isHovered, playOnHover, dotLottie]);

    return (
        <div className={`w-full h-full flex items-center justify-center ${bgInfo}`}>
            <DotLottieReact
                src={animationSrc}
                loop
                autoplay={playOnHover ? false : autoplay}
                dotLottieRefCallback={(instance) => {
                    setDotLottie(instance);
                    if (playOnHover && !isHovered && instance) {
                        instance.pause();
                    }
                }}
                className="w-full h-full object-contain"
            />
        </div>
    );
}

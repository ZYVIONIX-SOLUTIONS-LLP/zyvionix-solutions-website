"use client";

import React, { useMemo } from 'react';

export type LogoItem =
    | { node: React.ReactNode; href?: string; title?: string; ariaLabel?: string; }
    | { src: string; alt?: string; href?: string; title?: string; srcSet?: string; sizes?: string; width?: number; height?: number; };

export interface LogoLoopProps {
    logos: LogoItem[];
    speed?: number;
    direction?: 'left' | 'right' | 'up' | 'down';
    width?: number | string;
    logoHeight?: number;
    gap?: number;
    pauseOnHover?: boolean;
    hoverSpeed?: number;
    fadeOut?: boolean;
    fadeOutColor?: string;
    scaleOnHover?: boolean;
    renderItem?: (item: LogoItem, key: React.Key) => React.ReactNode;
    ariaLabel?: string;
    className?: string;
    style?: React.CSSProperties;
}

const cx = (...parts: Array<string | false | null | undefined>) => parts.filter(Boolean).join(' ');

export const LogoLoop = React.memo<LogoLoopProps>(({
    logos,
    speed = 120, // Now represents animation duration backwards (higher = faster scrolling) - wait no, let's convert speed to seconds. 
    direction = 'left',
    width = '100%',
    logoHeight = 28,
    gap = 32,
    pauseOnHover = false,
    hoverSpeed,
    scaleOnHover = false,
    fadeOut = false,
    fadeOutColor,
    renderItem,
    ariaLabel = 'Partner logos',
    className,
    style
}) => {
    const isVertical = direction === 'up' || direction === 'down';
    const isReverse = direction === 'right' || direction === 'down';

    // Calculate a reasonable CSS duration based on the arbitrary "speed" value ReactBits used
    // Multiplied by 3x to dramatically slow down the "flowing" speed
    const durationSeconds = useMemo(() => {
        return Math.max(30, 3000 / (speed || 50));
    }, [speed]);

    // If pauseOnHover is explicitly true, or they set hoverSpeed to 0, we pause the CSS animation.
    const shouldPause = pauseOnHover || hoverSpeed === 0;

    // Duplicate the list enough times to ensure it covers wide screens
    const multipliedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

    const renderLogoItem = (item: LogoItem, key: React.Key) => {
        if (renderItem) return <li key={key} className={cx('flex-none', isVertical ? `mb-[${gap}px]` : `mr-[${gap}px]`)}>{renderItem(item, key)}</li>;

        const isNodeItem = 'node' in item;
        const content = isNodeItem ? (
            <span className={cx('inline-flex items-center transition-transform duration-300 ease-out', scaleOnHover && 'hover:scale-125')}>
                {(item as any).node}
            </span>
        ) : (
            <img
                className={cx('h-[var(--logoloop-logoHeight)] w-auto block object-contain transition-transform duration-300 ease-out', scaleOnHover && 'hover:scale-125')}
                src={(item as any).src}
                alt={(item as any).alt ?? ''}
            />
        );

        const inner = (item as any).href ? (
            <a href={(item as any).href} target="_blank" rel="noreferrer noopener" className="transition-opacity hover:opacity-80 flex items-center h-full">
                {content}
            </a>
        ) : content;

        return (
            <li
                key={key}
                className={cx('flex-none flex items-center justify-center')}
                style={{
                    [isVertical ? 'paddingBottom' : 'paddingRight']: `${gap}px`,
                    fontSize: `${logoHeight}px`
                }}
            >
                {inner}
            </li>
        );
    };

    return (
        <div
            className={cx('relative overflow-hidden w-full flex items-center group', className)}
            style={{
                ...style,
                ...fadeOutColor && { '--fade-color': fadeOutColor } as React.CSSProperties
            }}
            aria-label={ariaLabel}
        >
            {/* Edge Fades */}
            {fadeOut && (
                <>
                    <div className={cx(
                        "pointer-events-none absolute z-10",
                        isVertical ? "inset-x-0 top-0 h-24 bg-gradient-to-b from-[var(--fade-color)] to-transparent" : "inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--fade-color)] to-transparent"
                    )} />
                    <div className={cx(
                        "pointer-events-none absolute z-10",
                        isVertical ? "inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--fade-color)] to-transparent" : "inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--fade-color)] to-transparent"
                    )} />
                </>
            )}

            {/* Hardware Accelerated Marquee Track */}
            <div
                className={cx(
                    "flex w-max will-change-transform animate-marquee",
                    shouldPause && "pause-on-hover",
                    isVertical && "flex-col"
                )}
                style={{
                    minWidth: '200%', // Guarantee coverage
                    animationDuration: `${durationSeconds}s`,
                    animationDirection: isReverse ? 'reverse' : 'normal'
                }}
            >
                {/* Set 1 */}
                <ul className={cx("flex items-center shrink-0 min-w-full justify-around", isVertical && "flex-col")} style={{ gap: 0 }}>
                    {multipliedLogos.map((item, i) => renderLogoItem(item, `set1-${i}`))}
                </ul>

                {/* Set 2 (Identical Clone for Seamless Flow) */}
                <ul className={cx("flex items-center shrink-0 min-w-full justify-around", isVertical && "flex-col")} style={{ gap: 0 }} aria-hidden="true">
                    {multipliedLogos.map((item, i) => renderLogoItem(item, `set2-${i}`))}
                </ul>
            </div>
        </div>
    );
});

LogoLoop.displayName = 'LogoLoop';

export default LogoLoop;

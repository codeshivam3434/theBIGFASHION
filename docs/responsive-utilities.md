# Responsive Utilities Documentation

This document provides an overview of the responsive utility hooks and components available in the project.

## Hooks

### useBreakpoint

Detects the current breakpoint based on window width.

\`\`\`tsx
import { useBreakpoint } from "@/hooks/use-breakpoint"

function MyComponent() {
  const { 
    breakpoint,  // Current breakpoint: "xs", "sm", "md", "lg", "xl", "2xl"
    isMd,        // True if current breakpoint is "md"
    isLgUp,      // True if current breakpoint is "lg", "xl", or "2xl"
    isMdDown     // True if current breakpoint is "xs", "sm", or "md"
  } = useBreakpoint()
  
  return <div>Current breakpoint: {breakpoint}</div>
}
\`\`\`

### useWindowSize

Tracks the dimensions of the browser window.

\`\`\`tsx
import { useWindowSize } from "@/hooks/use-window-size"

function MyComponent() {
  const { width, height, aspectRatio } = useWindowSize()
  
  return (
    <div>
      Window dimensions: {width}px × {height}px
      <br />
      Aspect ratio: {aspectRatio.toFixed(2)}
    </div>
  )
}
\`\`\`

### useElementSize

Tracks the dimensions of a specific DOM element.

\`\`\`tsx
import { useElementSize } from "@/hooks/use-element-size"

function MyComponent() {
  const [ref, { width, height }] = useElementSize()
  
  return (
    <div ref={ref} style={{ resize: "both", overflow: "auto", border: "1px solid black", padding: "20px" }}>
      This element's dimensions: {width}px × {height}px
    </div>
  )
}
\`\`\`

### useMediaQuery

Checks if a custom media query matches.

\`\`\`tsx
import { useMediaQuery } from "@/hooks/use-media-query"

function MyComponent() {
  const isWideScreen = useMediaQuery("(min-width: 1400px)")
  const isPortrait = useMediaQuery("(orientation: portrait)")
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)")
  
  return (
    <div>
      {isWideScreen && <div>Extra content for wide screens</div>}
      {isPortrait && <div>Portrait mode detected</div>}
      {prefersReducedMotion && <div>Using reduced animations</div>}
    </div>
  )
}
\`\`\`

### useOrientation

Detects device orientation (portrait or landscape).

\`\`\`tsx
import { useOrientation } from "@/hooks/use-orientation"

function MyComponent() {
  const orientation = useOrientation()
  
  return <div>Current orientation: {orientation}</div>
}
\`\`\`

### useScrollPosition

Tracks scroll position and direction.

\`\`\`tsx
import { useScrollPosition } from "@/hooks/use-scroll-position"

function MyComponent() {
  const { y, direction, isScrolled, percentage } = useScrollPosition(100)
  
  return (
    <div>
      <div>Scroll position: {y}px</div>
      <div>Scroll direction: {direction}</div>
      <div>Scrolled past threshold: {isScrolled ? "Yes" : "No"}</div>
      <div>Scroll percentage: {percentage}%</div>
    </div>
  )
}
\`\`\`

## Components

### ResponsiveContainer

A container that adapts its width based on the current breakpoint.

\`\`\`tsx
import { ResponsiveContainer } from "@/components/ui/responsive-container"

function MyComponent() {
  return (
    <ResponsiveContainer 
      xs="w-full px-4"
      md="max-w-[90%] px-6"
      lg="max-w-[1024px] px-8"
      fluid={false}
    >
      Content goes here
    </ResponsiveContainer>
  )
}
\`\`\`

### ResponsiveGrid

A grid system that changes layout based on screen size.

\`\`\`tsx
import { ResponsiveGrid } from "@/components/ui/responsive-grid"

function MyComponent() {
  return (
    <ResponsiveGrid
      xs={1}
      sm={2}
      md={3}
      lg={4}
      gap={4}
    >
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </ResponsiveGrid>
  )
}
\`\`\`

### ResponsiveImage

An image component with responsive loading strategies.

\`\`\`tsx
import { ResponsiveImage } from "@/components/ui/responsive-image"

function MyComponent() {
  return (
    <ResponsiveImage
      src="/images/default.jpg"
      mobileSrc="/images/mobile.jpg"
      tabletSrc="/images/tablet.jpg"
      desktopSrc="/images/desktop.jpg"
      alt="Responsive image"
      width={800}
      height={600}
      xs="h-40"
      md="h-60"
      lg="h-80"
    />
  )
}
\`\`\`

### ResponsiveText

Text that changes size based on viewport.

\`\`\`tsx
import { ResponsiveText } from "@/components/ui/responsive-text"

function MyComponent() {
  return (
    <ResponsiveText
      as="h1"
      xs="text-xl"
      md="text-2xl"
      lg="text-4xl"
      className="font-bold"
    >
      Responsive Heading
    </ResponsiveText>
  )
}
\`\`\`

### ResponsiveStack

A component that switches between row and column based on screen size.

\`\`\`tsx
import { ResponsiveStack } from "@/components/ui/responsive-stack"

function MyComponent() {
  return (
    <ResponsiveStack
      direction="column"
      switchAt="md"
      switchTo="row"
      spacing={4}
      align="center"
      justify="between"
    >
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </ResponsiveStack>
  )
}
\`\`\`

### ResponsiveVisibility

Controls visibility of elements based on breakpoint.

\`\`\`tsx
import { ResponsiveVisibility } from "@/components/ui/responsive-visibility"

function MyComponent() {
  return (
    <>
      <ResponsiveVisibility hiddenOn={["xs", "sm"]}>
        <div>Hidden on mobile</div>
      </ResponsiveVisibility>
      
      <ResponsiveVisibility visibleOn={["xs", "sm"]}>
        <div>Only visible on mobile</div>
      </ResponsiveVisibility>
    </>
  )
}

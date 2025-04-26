"use client"

// Simplified analytics functions that just log to console
export const trackPageView = (url: string) => {
  console.log(`[Analytics] Page view: ${url}`)
}

export const trackEvent = (eventName: string, properties?: Record<string, string | number | boolean>) => {
  console.log(`[Analytics] Event: ${eventName}`, properties)
}

export const initAnalytics = () => {
  console.log("[Analytics] Initialized")
}

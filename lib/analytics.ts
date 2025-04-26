/**
 * Analytics utility functions
 * Using hardcoded values to avoid environment variable dependencies
 */

// Track page view
export const trackPageView = (url: string) => {
  try {
    // Check if Google Analytics is available
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "GA-MEASUREMENT-ID", {
        page_path: url,
      })
      console.log(`[Analytics] Page view tracked: ${url}`)
    } else {
      // Fallback logging
      console.log(`[Analytics] Page view (not sent): ${url}`)
    }
  } catch (error) {
    console.error("[Analytics] Error tracking page view:", error)
  }
}

// Track event
export const trackEvent = (action: string, category: string, label: string, value?: number) => {
  try {
    // Check if Google Analytics is available
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
      })
      console.log(`[Analytics] Event tracked: ${action} / ${category} / ${label}`)
    } else {
      // Fallback logging
      console.log(`[Analytics] Event (not sent): ${action} / ${category} / ${label}`)
    }
  } catch (error) {
    console.error("[Analytics] Error tracking event:", error)
  }
}

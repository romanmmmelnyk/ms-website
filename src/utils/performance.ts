// Performance monitoring utilities
export class PerformanceMonitor {
  private static instance: PerformanceMonitor
  private metrics: Map<string, number> = new Map()

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor()
    }
    return PerformanceMonitor.instance
  }

  // Track page load performance
  trackPageLoad(): void {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigation) {
        this.metrics.set('pageLoadTime', navigation.loadEventEnd - navigation.loadEventStart)
        this.metrics.set('domContentLoaded', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart)
        this.metrics.set('firstPaint', this.getFirstPaint())
        this.metrics.set('firstContentfulPaint', this.getFirstContentfulPaint())
      }
    }
  }

  // Track component render time
  trackComponentRender(componentName: string, startTime: number): void {
    const renderTime = performance.now() - startTime
    this.metrics.set(`${componentName}RenderTime`, renderTime)
    
    // Log slow renders
    if (renderTime > 16) { // 16ms = 60fps threshold
      console.warn(`Slow render detected in ${componentName}: ${renderTime.toFixed(2)}ms`)
    }
  }

  // Track user interactions
  trackInteraction(action: string, duration: number): void {
    this.metrics.set(`${action}Duration`, duration)
  }

  // Get performance report
  getReport(): Record<string, number> {
    return Object.fromEntries(this.metrics)
  }

  // Send metrics to analytics (placeholder for future implementation)
  sendMetrics(): void {
    const report = this.getReport()
    console.log('Performance Report:', report)
    
    // TODO: Send to analytics service
    // analytics.track('performance_metrics', report)
  }

  private getFirstPaint(): number {
    const paintEntries = performance.getEntriesByType('paint')
    const firstPaint = paintEntries.find(entry => entry.name === 'first-paint')
    return firstPaint ? firstPaint.startTime : 0
  }

  private getFirstContentfulPaint(): number {
    const paintEntries = performance.getEntriesByType('paint')
    const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint')
    return firstContentfulPaint ? firstContentfulPaint.startTime : 0
  }
}

// Export singleton instance
export const performanceMonitor = PerformanceMonitor.getInstance()

// Utility function to measure async operations
export const measureAsync = async <T>(
  operation: () => Promise<T>,
  operationName: string
): Promise<T> => {
  const startTime = performance.now()
  try {
    const result = await operation()
    const duration = performance.now() - startTime
    performanceMonitor.trackInteraction(operationName, duration)
    return result
  } catch (error) {
    const duration = performance.now() - startTime
    performanceMonitor.trackInteraction(`${operationName}Error`, duration)
    throw error
  }
}

// Utility function to measure synchronous operations
export const measureSync = <T>(
  operation: () => T,
  operationName: string
): T => {
  const startTime = performance.now()
  try {
    const result = operation()
    const duration = performance.now() - startTime
    performanceMonitor.trackInteraction(operationName, duration)
    return result
  } catch (error) {
    const duration = performance.now() - startTime
    performanceMonitor.trackInteraction(`${operationName}Error`, duration)
    throw error
  }
}

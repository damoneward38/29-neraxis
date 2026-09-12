/**
 * Scene Capture Configuration
 * Centralized config for all capture settings
 */
module.exports = {
  capture: {
    format: "png",              // Output format: 'png' | 'jpeg' | 'webp'
    quality: 95,                // JPEG/WebP quality (1–100)
    scale: 1,                   // Device pixel ratio scale
    fullPage: false,            // Capture full scrollable page
    timeout: 5000,              // Max capture timeout (ms)
    defaultViewport: {
      width: 1920,
      height: 1080,
    },
  },
  storage: {
    outputDir: "./captures",    // Base output directory
    organizeByDate: true,       // Subfolder: YYYY/MM/DD
    namingPattern: "{scene}_{timestamp}", // File naming pattern
    maxStorageGB: 10,           // Max storage limit
  },
  metadata: {
    enabled: true,              // Save metadata JSON alongside image
    includePerformance: true,   // Include perf metrics
    includeViewport: true,      // Include viewport dimensions
  },
};
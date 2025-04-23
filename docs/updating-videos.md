# How to Update Video Content

This document explains how to update video backgrounds and video testimonials on the Fashion Fusion website.

## Video Backgrounds

Video backgrounds are implemented using the `VideoBackground` component. To update a video background:

1. Add your new video file to the `/public/videos/` directory
2. Update the corresponding fallback and poster images in `/public/images/`
3. Update the component props in the page file

Example:
\`\`\`jsx
<VideoBackground 
  src="/videos/your-new-video.mp4" 
  overlayOpacity={0.7} 
  priority={true}
  fallbackImage="/images/your-fallback-image.jpg"
  mobileImage="/images/your-mobile-image.jpg"
  posterImage="/images/your-poster-image.jpg"
/>
\`\`\`

### Video Background Props

- `src`: Path to the video file (required)
- `fallbackImage`: Image shown if video fails to load
- `overlayOpacity`: Opacity of the dark overlay (0-1)
- `overlayColor`: Color of the overlay (default: "black")
- `priority`: Whether to prioritize loading this video
- `mobileImage`: Image to show on mobile devices instead of video
- `posterImage`: Image shown before the video starts playing

## Video Testimonials

Video testimonials are managed through a data file. To update video testimonials:

1. Add your new video files to `/public/videos/`
2. Add poster images to `/public/images/testimonials/`
3. Update the data in `/data/video-testimonials.ts`

### Updating the Data File

Open `/data/video-testimonials.ts` and modify the array:

\`\`\`typescript
export const videoTestimonials = [
  {
    id: "testimonial-1",
    videoSrc: "/videos/your-testimonial-video.mp4", 
    posterSrc: "/images/testimonials/your-poster-image.jpg", 
    name: "Customer Name",
    position: "Customer Position",
    company: "Company Name",
    quote: "Customer testimonial quote goes here."
  },
  // Add more testimonials as needed
]
\`\`\`

### Video Format Recommendations

For optimal performance:
- Format: MP4 (H.264 codec)
- Resolution: 1920x1080 (HD) or 1280x720 (HD)
- Duration: 15-30 seconds for backgrounds, 1-2 minutes for testimonials
- File size: Keep under 5MB for backgrounds, under 20MB for testimonials
- Include captions or subtitles for accessibility

## Optimizing Videos

To optimize your videos before uploading:
1. Use a tool like Handbrake (free) or Adobe Media Encoder
2. Choose the "Web Optimized" option
3. Set a reasonable bitrate (1-2 Mbps for backgrounds, 2-4 Mbps for testimonials)
4. Enable "Fast Start" option if available
\`\`\`

Let's create a README file with instructions for the project:

# Fashion Fusion Website

This is the codebase for the Fashion Fusion website, a platform for fashion retailers in Tier 2 & 3 cities.

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `/app`: Next.js app router pages
- `/components`: Reusable React components
- `/public`: Static assets (images, videos, etc.)
- `/data`: Data files for content management
- `/docs`: Documentation files

## Updating Content

### Video Content

See [docs/updating-videos.md](./docs/updating-videos.md) for detailed instructions on how to update video backgrounds and testimonials.

### Images

Images are stored in the `/public/images` directory. To update an image, replace the file with the same name or update the reference in the code.

## Responsive Design

The website is designed to be fully responsive across all devices:

- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px and above

Video backgrounds automatically switch to static images on mobile devices to improve performance.

## Performance Optimization

- Videos are lazy-loaded and only play when in viewport
- Mobile devices show static images instead of videos
- All images are optimized and use responsive sizing
- Animations are optimized for performance

## Accessibility

- All videos have proper controls and can be paused
- Videos are muted by default with options to unmute
- All interactive elements are keyboard accessible
- Proper ARIA attributes are used throughout

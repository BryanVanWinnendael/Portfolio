import type { ImageMetadata } from 'astro';

const modules = import.meta.glob<ImageMetadata>('../assets/projects/*/*.webp', {
  eager: true,
  import: 'default',
});

const altText: Record<string, string[]> = {
  'shopping-list': [
    'Shopping List app shown on three phone screens',
    'Shopping List architecture diagram',
  ],
  noted: [
    'Noted theme market with dark purple and green themes',
    'Noted editor showing heading blocks',
    'Noted sidebar and note editor',
    'Noted gallery and workspace view',
  ],
  harbor: [
    'Harbor container actions menu',
    'Harbor container list with resource usage',
    'Harbor container details and logs',
    'Harbor system information and storage',
  ],
  netweb: [
    'Netweb host lookup screen',
    'Netweb host lookup results',
    'Netweb empty search state',
    'Netweb free ports screen',
    'Netweb guest accounts screen',
  ],
  'point-cloud-processor': [
    'Point Cloud Processor upload screen',
    'Point Cloud Processor settings panel',
    'Point Cloud Processor 3D point cloud segmentation',
  ],
};

export function getProjectImages(slug: string) {
  const prefix = `../assets/projects/${slug}/`;

  return Object.entries(modules)
    .filter(([path]) => path.startsWith(prefix))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, src], index) => ({
      src,
      alt: altText[slug]?.[index] ?? `${slug.replace(/-/g, ' ')} screenshot ${index + 1}`,
    }));
}

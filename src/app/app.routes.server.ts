import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'mvno-offer',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'plans',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'product-details/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: () => Promise.resolve([
      { id: '1' },
      { id: '2' },
      { id: '3' }
    ])
  }
];

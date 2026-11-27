'use client';

import { useEffect } from 'react';
import { PROJECTS } from '@/data/portfolio';

const CRITICAL_ASSETS = [
  '/darshan-patel-qa-lead.png',
  '/darshan-patel.png',
  ...PROJECTS.map((p) => p.imageSrc),
  '/tech/jira.svg',
  '/tech/aws-light.svg',
  '/tech/browserstack-light.svg',
  '/tech/katalon-light.svg',
  '/tech/figma.svg',
  '/tech/googlesheets.svg',
  '/tech/trello.svg',
  '/tech/postman.svg',
  '/tech/jmeter.svg',
  '/tech/clickup.svg',
  '/tech/sentry.svg',
  '/tech/bitbucket.svg',
];

export default function ImagePrewarmer() {
  useEffect(() => {
    // Only warm up cache after main thread is completely idle
    const warmCache = () => {
      CRITICAL_ASSETS.forEach((src) => {
        const img = new Image();
        img.decoding = 'async';
        img.src = src;
      });
    };

    if ('requestIdleCallback' in window) {
      const handle = (window as Window & { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number })
        .requestIdleCallback(warmCache, { timeout: 2500 });
      return () => {
        if ('cancelIdleCallback' in window) {
          (window as Window & { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(handle);
        }
      };
    } else {
      const timer = setTimeout(warmCache, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  return null;
}

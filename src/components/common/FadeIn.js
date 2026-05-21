'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function FadeIn() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.js-fadein').forEach((target) => {
      gsap.fromTo(
        target,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',

          scrollTrigger: {
            trigger: target,
            start: 'top 85%',
          },
        }
      );
    });
  }, []);

  return null;
}
'use client';

import { alphabetFonts, baseFont } from '@/utils/fonts';
import styles from './page.module.scss';
import clsx from 'clsx';
import { useCallback, useEffect, useState } from 'react';
import { PhotoItem, photoList } from '@/constants/photo-list';

const waList: PhotoItem[] = photoList.filter((photoItem) =>
  photoItem.src.includes('/wa/wa_'),
);

const yoList: PhotoItem[] = photoList.filter((photoItem) =>
  photoItem.src.includes('/yo/yo_'),
);

export default function Photos() {
  const [observer, setObserver] = useState<IntersectionObserver | null>(null);
  useEffect(() => {
    const _observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        root: null,
        rootMargin: '-10px 0px',
        threshold: 0.2,
      },
    );
    setObserver(_observer);
    const galleryItems = document.querySelectorAll('.galleryItem');
    galleryItems.forEach((item) => {
      _observer.observe(item);
    });
    return () => {
      observer?.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const goBack = useCallback(() => {
    history.back();
  }, []);
  return (
    <div className={styles.content}>
      <h1 className={clsx(alphabetFonts.className, styles.title)}>Photos</h1>
      <section className={styles.section}>
        <h2 className={clsx(baseFont.className, styles.heading2, styles.wa)}>
          和装
        </h2>
        <ul className={styles.gallery}>
          {waList.map((waItem) => (
            <li
              key={waItem.src}
              className={clsx(styles.galleryItem, 'galleryItem')}
            >
              <picture className={styles.galleryItemImg}>
                <source
                  type="image/webp"
                  width={waItem.width}
                  height={waItem.height}
                  srcSet={waItem.src + '.webp'}
                />
                <img
                  loading="lazy"
                  src={waItem.src + '.jpg'}
                  width={waItem.width}
                  height={waItem.height}
                  alt={waItem.alt}
                />
              </picture>
            </li>
          ))}
        </ul>
      </section>
      <section className={clsx(styles.section, styles._yo)}>
        <h2 className={clsx(baseFont.className, styles.heading2, styles.yo)}>
          洋装
        </h2>
        <ul className={styles.gallery}>
          {yoList.map((yoItem) => (
            <li
              key={yoItem.src}
              className={clsx(styles.galleryItem, 'galleryItem')}
            >
              <picture className={styles.galleryItemImg}>
                <source
                  type="image/webp"
                  width={yoItem.width}
                  height={yoItem.height}
                  srcSet={yoItem.src + '.webp'}
                />
                <img
                  loading="lazy"
                  src={yoItem.src + '.jpg'}
                  width={yoItem.width}
                  height={yoItem.height}
                  alt={yoItem.alt}
                />
              </picture>
            </li>
          ))}
        </ul>
      </section>
      <div className={styles.footer}>
        <button
          type="button"
          className={clsx(baseFont.className, styles.button)}
          onClick={goBack}
        >
          前の画面に戻る
        </button>
      </div>
    </div>
  );
}

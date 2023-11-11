'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styles from './page.module.scss';
import clsx from 'clsx';
import { alphabetFonts, baseFont } from '../utils/fonts';
//@ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Link from 'next/link';
import { PhotoItem, photoList } from '@/constants/photo-list';

const slideImageSrcList = [
  '/wa/wa_01',
  '/wa/wa_04',
  '/wa/wa_06',
  '/wa/wa_11',
  '/wa/wa_21',
  '/yo/yo_01',
  '/yo/yo_11',
  '/yo/yo_14',
  '/yo/yo_18',
  '/yo/yo_31',
];

const slideImages: PhotoItem[] = slideImageSrcList.reduce<PhotoItem[]>(
  (acc, slideImageSrc) => {
    const slideImage = photoList.find(
      (photoItem) => photoItem.src === slideImageSrc,
    );
    if (slideImage) {
      acc.push(slideImage);
    }
    return acc;
  },
  [],
);

export default function Home() {
  const goGoogleForms = useCallback(() => {
    window.open('https://forms.gle/6kNGm3QWj3PWrB6G6', '_blank');
  }, []);
  const [date, setDate] = useState<Date>(new Date());
  const [timerId, setTimerId] = useState<NodeJS.Timer | null>(null);
  const targetDateRef = useRef<Date>(new Date('2023-11-12 11:00:00'));
  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => {
    console.log(`
ケコーン シマシタ!　　　
　 ∧ ∧　　＠∧,,∧＠
(, ゜Д゜)(*゜ー゜)
　| <∞> @@*@@
　|U..V |⊃⊂　　 ⊃
@|　： | ／∞　　∞＼
..Ｕ..Ｕ 〜〜〜〜〜〜
    `);
    setTimerId(
      setInterval(() => {
        setDate(new Date());
      }, 1),
    );
    setIsMounted(true);
    return () => {
      if (timerId) {
        clearInterval(timerId);
        setTimerId(null);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const dateDiff = useMemo(() => {
    return targetDateRef.current.getTime() - date.getTime();
  }, [date]);
  const day = useMemo(() => {
    if (dateDiff <= 0) return 0;
    return Math.ceil(dateDiff / (24 * 60 * 60 * 1000)) - 1;
  }, [dateDiff]);
  const hours = useMemo(() => {
    if (dateDiff <= 0) return 0;
    return Math.floor(dateDiff / (60 * 60 * 1000)) % 24;
  }, [dateDiff]);
  const minutes = useMemo(() => {
    if (dateDiff <= 0) return 0;
    return Math.floor(dateDiff / (60 * 1000)) % 60;
  }, [dateDiff]);
  const seconds = useMemo(() => {
    if (dateDiff <= 0) return 0;
    return Math.floor(dateDiff / 1000) % 60;
  }, [dateDiff]);

  return (
    <>
      <div className={styles.mainVisual}>
        <picture className={styles.mainVisualImg}>
          <source
            type="image/webp"
            width="2400"
            height="1600"
            srcSet="/main-visual.webp"
          />
          <img src="/main-visual.jpg" width="2400" height="1600" alt="" />
        </picture>

        <h1 className={clsx(styles.mainVisualTitle, alphabetFonts.className)}>
          <div>Welcome to our</div>
          <div>Wedding</div>
          <div>Taiki&nbsp;&amp;&nbsp;Sae</div>
        </h1>
        <div className={styles.mainVisualGradation}></div>
      </div>

      <section className={styles.greeting}>
        <h2>ご挨拶</h2>
        <p>謹啓</p>
        <p>
          {`皆様におかれましては
          ますますご清祥のこととお慶び申し上げます`}
        </p>

        <p>
          {`このたび 私たちは
          結婚式を挙げることとなりました
          おいそがしいことと存じますが
          ぜひご参列いただき
          日頃お世話になっております
          皆様と一緒に
          喜びのひとときを過ごさせていただければ
          幸いに存じます`}
        </p>

        <p>
          {`式後ささやかではございますが
          小宴を催したく存じますので
          ぜひご出席賜りますよう お願い申し上げます`}
        </p>

        <p>謹白</p>
      </section>

      <section className={styles.introduction}>
        <h2>私達の紹介</h2>
        <div className={styles.introductionItemTaiki}>
          <div className={styles.introductionItemImg}>
            <picture>
              <source
                type="image/webp"
                width="1200"
                height="1200"
                srcSet="/introduction-taiki.webp"
              />
              <img
                src="/introduction-taiki.jpg"
                width="1200"
                height="1200"
                alt=""
              />
            </picture>
          </div>
        </div>
        <div className={styles.introductionItemText}>
          <h3>
            <div>新郎　木原&nbsp;大輝</div>
          </h3>
        </div>
        <div className={styles.introductionMessage}>
          <p>
            {`この度晴れて結婚式を挙げることができました
            今後とも新郎新婦共々宜しくお願い致します`}
          </p>
        </div>
        <div className={styles.introductionItemSae}>
          <div className={styles.introductionItemImg}>
            <picture>
              <source
                type="image/webp"
                width="1200"
                height="1200"
                srcSet="/introduction-sae.webp"
              />
              <img
                src="/introduction-sae.jpg"
                width="1200"
                height="1200"
                alt=""
              />
            </picture>
          </div>
        </div>
        <div className={styles.introductionItemText}>
          <h3>
            <div>新婦　石坂&nbsp;沙枝</div>
          </h3>
        </div>
        <div className={styles.introductionMessage}>
          <p>
            {`大輝さんと出会ってこれまでたくさんの人に
            支えられながら結婚まで進むことができました
            本当にありがとうございます`}
          </p>
        </div>
      </section>

      <section className={styles.countDown}>
        <h2 className={alphabetFonts.className}>Count down</h2>
        <div className={styles.countDownContent}>
          <div className={clsx(alphabetFonts.className, styles.countDownRow)}>
            {isMounted ? (
              <>
                <div className={styles.countDownBox}>
                  <div className={clsx(styles.countDownNumber, styles._day)}>
                    {day}
                  </div>
                  <div className={clsx(styles.countDownLabel, styles._day)}>
                    Days
                  </div>
                </div>
              </>
            ) : null}
          </div>
          <div
            className={clsx(
              alphabetFonts.className,
              styles.countDownRow,
              styles._last,
            )}
          >
            {isMounted ? (
              <>
                <div className={clsx(styles.countDownBox, styles._hours)}>
                  <div className={styles.countDownNumber}>
                    {('0' + hours).slice(-2)}
                  </div>
                  <div className={styles.countDownLabel}>Hours</div>
                </div>
                <div className={clsx(styles.countDownBox, styles._minutes)}>
                  <div className={styles.countDownNumber}>
                    {('0' + minutes).slice(-2)}
                  </div>
                  <div className={styles.countDownLabel}>Minuts</div>
                </div>
                <div className={clsx(styles.countDownBox, styles._seconds)}>
                  <div className={styles.countDownNumber}>
                    {('0' + seconds).slice(-2)}
                  </div>
                  <div className={styles.countDownLabel}>Seconds</div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </section>

      <section className={styles.photos}>
        <h2 className={alphabetFonts.className}>Photos</h2>
        <Splide
          className={styles.photoSlider}
          aria-label="前撮り写真集"
          options={{ autoplay: true, interval: 5000, type: 'loop' }}
        >
          {slideImages.map((slideImage) => (
            <SplideSlide key={slideImage.src}>
              <picture className={styles.photoItem}>
                <source
                  type="image/webp"
                  width={slideImage.width}
                  height={slideImage.height}
                  srcSet={slideImage.src + '.webp'}
                />
                <img
                  src={slideImage.src + '.jpg'}
                  width={slideImage.width}
                  height={slideImage.height}
                  alt={slideImage.alt}
                />
              </picture>
            </SplideSlide>
          ))}
        </Splide>
        <div>
          <Link
            href="/photos"
            className={clsx(baseFont.className, styles.button)}
          >
            <span>もっと見る</span>
          </Link>
        </div>
      </section>

      <section className={styles.information}>
        <h2 className={alphabetFonts.className}>Information</h2>
        <h3>挙式・披露宴</h3>
        <p className={styles.informationDate}>11月12日（日）</p>
        <h4>挙式</h4>
        <p>11時30分（受付 10時30分）</p>
        <h4>披露宴</h4>
        <p>12時30分</p>
        <hr />
        <h3>アクセス</h3>
        <p>会場：カノビアーノ福岡</p>
        <p>福岡県福岡市中央区大名1丁目1-12</p>
      </section>

      <iframe
        aria-label="会場への地図"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13294.95539555806!2d130.3961593!3d33.5861292!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35419185a38b14ed%3A0x4fc1ff23b40390df!2z44Kr44OO44OT44Ki44O844OO56aP5bKh77yIQ0FOT1ZJQU5PIEZVS1VPS0HvvIk!5e0!3m2!1sja!2sjp!4v1691907892912!5m2!1sja!2sjp"
        className={styles.informationMap}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className={styles.presenseOrAbsence}>
        <h2 className={alphabetFonts.className}>Presense or Absence</h2>
        <p>
          {`お手数ではございますが
          2023年10月6日までにご回答くださいますよう
          お願い申し上げます`}
        </p>
        <button
          type="button"
          className={clsx(baseFont.className, styles.button)}
          onClick={goGoogleForms}
        >
          招待状に回答する
        </button>
      </div>
    </>
  );
}

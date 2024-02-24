import React from 'react';
import Image from 'next/image'
import { SelectType } from './Interested';
import useCarousel from '@/hooks/useCarousel';
const booksData: {
  [category: string]: {
    id: string;
    href: string;
    src: string;
    title: string;
    author: string;
    subtitle: string;
    duration: string;
  }[];
} = {
  "Career & Success": [
    {
      id: "journey-of-awakening-en",
      href: "/en/books/journey-of-awakening-en",
      src: "https://images.blinkist.io/images/books/60c217886cee070007da2b6b/1_1/470.jpg",
      title: "Journey of Awakening",
      author: "Ram Dass",
      subtitle: "A Meditator's Guidebook",
      duration: "13 min",
    },
    {
      id: "the-work-life-balance-myth-en",
      href: "/en/books/the-work-life-balance-myth-en",
      src: "https://images.blinkist.io/images/books/60ba26b86cee07000896dbdf/1_1/470.jpg",
      title: "The Work-Life Balance Myth",
      author: "David J. McNeff",
      subtitle: "Rethinking Your Optimal Balance for Success",
      duration: "12 min",
    },
    {
      id: "the-way-of-integrity-en",
      href: "/en/books/the-way-of-integrity-en",
      src: "https://images.blinkist.io/images/books/60b8b5a16cee070007296f6a/1_1/470.jpg",
      title: "The Way of Integrity",
      author: "Martha Beck",
      subtitle: "Finding the Path to Your True Self",
      duration: "10 min",
    },
    {
      id: "what-are-you-doing-with-your-life-en",
      href: "/en/books/what-are-you-doing-with-your-life-en",
      src: "https://images.blinkist.io/images/books/60b4e3686cee070007c62a58/1_1/470.jpg",
      title: "What Are You Doing with Your Life?",
      author: "Jiddu Krishnamurti",
      subtitle: "Explore answers to some of life's most difficult questions",
      duration: "12 min",
    },
    {
      id: "the-power-of-awakening-en",
      href: "/en/books/the-power-of-awakening-en",
      src: "https://images.blinkist.io/images/books/60acea256cee0700080cfaf4/1_1/470.jpg",
      title: "The Power of Awakening",
      author: "Wayne W. Dyer",
      subtitle: "Mindfulness Practices and Spiritual Tools to Transform Your Life",
      duration: "15 min",
    },
    {
      id: "the-art-of-rest-en",
      href: "/en/books/the-art-of-rest-en",
      src: "https://images.blinkist.io/images/books/60a3fdd76cee07000731e1d6/1_1/470.jpg",
      title: "The Art of Rest",
      author: "Claudia Hammond",
      subtitle: "How to Find Respite in the Modern Age",
      duration: "13 min",
    },
    {
      id: "forest-bathing-en",
      href: "/en/books/forest-bathing-en",
      src: "https://images.blinkist.io/images/books/60950a3c6cee070007151f86/1_1/470.jpg",
      title: "Forest Bathing",
      author: "Qing Li",
      subtitle: "How Trees Can Help You Find Health and Happiness",
      duration: "12 min",
    },
    {
      id: "lovingkindness-en",
      href: "/en/books/lovingkindness-en",
      src: "https://images.blinkist.io/images/books/608bf88d6cee07000722925c/1_1/470.jpg",
      title: "Lovingkindness",
      author: "Sharon Salzberg",
      subtitle: "The Revolutionary Art of Happiness",
      duration: "15 min",
    },
    {
      id: "the-high-conflict-couple-en",
      href: "/en/books/the-high-conflict-couple-en",
      src: "https://images.blinkist.io/images/books/6082cfa66cee0700076a1157/1_1/470.jpg",
      title: "The High-Conflict Couple",
      author: "Alan E. Fruzzetti",
      subtitle: "A Dialectical Behavior Therapy Guide to Finding Peace, Intimacy & Validation",
      duration: "12 min",
    },
    {
      id: "kaizen-en",
      href: "/en/books/kaizen-en",
      src: "https://images.blinkist.io/images/books/60950a3c6cee070007151f86/1_1/470.jpg",
      title: "Kaizen",
      author: "Sarah Harvey",
      subtitle: "The Japanese Method for Transforming Habits, One Small Step at a Time",
      duration: "12 min",
    },
  ],
  "Mindfulness & Happiness": [
    {
      id: '1',
      href: '/en/books/win-at-work-and-succeed-at-life-en',
      src: 'https://images.blinkist.io/images/books/60bf736d6cee07000896ec51/1_1/470.jpg',
      title: 'Win at Work and Succeed at Life',
      author: 'Michael Hyatt and Megan...',
      subtitle: '5 Principles to Free Yourself from the Cult of Overwork',
      duration: '13 min',
    },
    {
      id: '2',
      href: '/en/books/the-work-life-balance-myth-en',
      src: 'https://images.blinkist.io/images/books/60ba26b86cee07000896dbdf/1_1/470.jpg',
      title: 'The Work-Life Balance Myth',
      author: 'David J. McNeff',
      subtitle: 'Rethinking Your Optimal Balance for Success',
      duration: '12 min',
    },
    {
      id: '3',
      href: '/en/books/born-to-win-en',
      src: 'https://images.blinkist.io/images/books/60b8b3316cee070007296f5a/1_1/470.jpg',
      title: 'Born to Win',
      author: 'Zig Ziglar with Tom Ziglar',
      subtitle: 'Find Your Success',
      duration: '10 min',
    },
    {
      id: '4',
      href: '/en/books/goals-en',
      src: 'https://images.blinkist.io/images/books/60a780ba6cee070007790e83/1_1/470.jpg',
      title: 'Goals!',
      author: 'Brian Tracy',
      subtitle: 'How to Get Everything You Want – Faster Than You Ever Thought Possible',
      duration: '13 min',
    },
    {
      id: '5',
      href: '/en/books/alien-thinking-en',
      src: 'https://images.blinkist.io/images/books/60a381c96cee07000750337b/1_1/470.jpg',
      title: 'ALIEN Thinking',
      author: 'Cyril Bouquet, Jean-Louis...',
      subtitle: 'The Unconventional Path to Breakthrough Ideas',
      duration: '12 min',
    },
    {
      id: '6',
      href: '/en/books/turning-pro-en',
      src: 'https://images.blinkist.io/images/books/60a377546cee070007503349/1_1/470.jpg',
      title: 'Turning Pro',
      author: 'Steven Pressfield',
      subtitle: 'Tap Your Inner Power and Create Your Life\'s Work',
      duration: '15 min',
    },
    {
      id: '7',
      href: '/en/books/bring-your-human-to-work-en',
      src: 'https://images.blinkist.io/images/books/60953acc6cee0700077e6424/1_1/470.jpg',
      title: 'Bring Your Human to Work',
      author: 'Erica Keswin',
      subtitle: '10 Surefire Ways to Design a Workplace That Is Good for People, Great for Business, and Just Might Change the World',
      duration: '13 min',
    },
    {
      id: '8',
      href: '/en/books/hyper-learning-en',
      src: 'https://images.blinkist.io/images/books/609155fc6cee070007ccb3ad/1_1/470.jpg',
      title: 'Hyper-Learning',
      author: 'Edward D. Hess',
      subtitle: 'How to Adapt to the Speed of Change',
      duration: '13 min',
    },
    {
      id: '9',
      href: '/en/books/the-power-of-full-engagement-en',
      src: 'https://images.blinkist.io/images/books/608a70ce6cee0700072288ff/1_1/470.jpg',
      title: 'The Power of Full Engagement',
      author: 'Jim Loehr and Tony Schwartz...',
      subtitle: 'Managing Energy, Not Time, Is the key to High Performance and Personal Renewal',
      duration: '18 min',
    },
  ]
}
interface PropType {
  titleDetail: SelectType;
}
const Carousel = ({ titleDetail }: PropType) => {
  const { carouselRef, next, prev, canGoNext, canGoPrev } = useCarousel(booksData[titleDetail.title] || []);

  return (
    <div className="category-book-slider category-explorer__category-book-slider">
      <div className="container m-auto max-w-5xl"><h3 className="category-book-slider__headline mb-4 md:mb-2  font-bold   text-2xl ">Most popular in{' '}
        <mark>{titleDetail.title}</mark>
      </h3>
        <div className="category-book-slider__subheadline mb-8 subheadline subheadline--normal subheadline--size-medium">Read or listen to {titleDetail.bookNum} titles in this category</div>
      </div>
      {booksData[titleDetail.title] &&
        <div className="category-book-slider__books  m-auto max-w-5xl ">
          <div className="flex max-w-256 lg:mx-auto">
            <button onClick={prev} disabled={!canGoPrev} className="hidden md:flex md:pr-4"><svg width="24" height="24" className={`sprite-vue sprite-vue--app sprite-vue--arrow transform rotate-90 flex-shrink-0 mt-20   ${canGoPrev ? 'text-blue-500 cursor-pointer' : 'text-gray-500  cursor-not-allowed'}`}><path fill-rule="evenodd" d="m12 14.879-7.94-7.94a1.5 1.5 0 1 0-2.12 2.122l9 9a1.5 1.5 0 0 0 2.12 0l9-9a1.5 1.5 0 0 0-2.12-2.122L12 14.88Z" clip-rule="evenodd"></path><mask id="a" width="22" height="13" x="1" y="6" mask-type="alpha" maskUnits="userSpaceOnUse"><path fill-rule="evenodd" d="m12 14.879-7.94-7.94a1.5 1.5 0 1 0-2.12 2.122l9 9a1.5 1.5 0 0 0 2.12 0l9-9a1.5 1.5 0 0 0-2.12-2.122L12 14.88Z" clip-rule="evenodd"></path></mask></svg></button>
            <div className='w-full overflow-hidden'>
              <div className='flex gap-12 overflow-x-auto overflow-y-hidden -mb-16 pb-16 px-4 snap-x scroll-pl-4 scroll-pr-4 ' ref={carouselRef}>
                {
                  booksData[titleDetail.title]?.map(({ id, href, src, title, author, subtitle, duration }) => (
                    <div key={id} className="flex-shrink-0 w-44 snap-start">
                      <a href={href} id="journey-of-awakening-en" className="book-card-mini book-card-mini--linked">
                        <figure className="book-card-mini__figure">
                          <picture className="pict book-card-mini__picture pict--whitespace-fix">
                            <Image src={src} width={200} height={300} alt={title} className="pict__image book-card-mini__image" />
                          </picture>
                        </figure>
                        <div className='book-card-mini__content'>
                          <div className="book-card-mini__content">
                            <h4 className="book-card-mini__headline">{title}</h4>
                            <div className="book-card-mini__author">{author}</div>
                            <div className="book-card-mini__subheadline">{subtitle}</div>
                            <div className="book-card-mini__duration">{duration}</div>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))
                }
              </div>
            </div>
            <button onClick={next} disabled={!canGoNext} className="hidden md:flex md:pl-4">
              <svg width="24" height="24" className={`sprite-vue sprite-vue--app sprite-vue--arrow transform -rotate-90 flex-shrink-0 mt-20   ${canGoNext ? 'text-blue-500 cursor-pointer' : 'text-gray-500  cursor-not-allowed'}`}><path fill-rule="evenodd" d="m12 14.879-7.94-7.94a1.5 1.5 0 1 0-2.12 2.122l9 9a1.5 1.5 0 0 0 2.12 0l9-9a1.5 1.5 0 0 0-2.12-2.122L12 14.88Z" clip-rule="evenodd"></path><mask id="a" width="22" height="13" x="1" y="6" mask-type="alpha" maskUnits="userSpaceOnUse"><path fill-rule="evenodd" d="m12 14.879-7.94-7.94a1.5 1.5 0 1 0-2.12 2.122l9 9a1.5 1.5 0 0 0 2.12 0l9-9a1.5 1.5 0 0 0-2.12-2.122L12 14.88Z" clip-rule="evenodd"></path></mask></svg>
            </button>
          </div>
        </div> || <h1 className=' text-center'>not Data</h1>
      }
    </div>
  )
}


export default Carousel;
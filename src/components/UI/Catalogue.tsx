import Link from 'next/link';
import React from 'react';

const Catalogue = () => {
    // 定义数据
    const categories = [
        {
            title: 'Popular titles',
            items: [
                'Atomic Habits',
                'The 5 AM Club',
                'The 7 Habits of Highly Effective People',
                'Rich Dad, Poor Dad',
                '12 Rules For Life',
                'Thinking, Fast and Slow',
                'Zero to One',
                'How to Win Friends and Influence People in the Digital Age',
                'Think and Grow Rich',
                'The Subtle Art of Not GIving a F*ck'
            ]
        },
        {
            title: 'Popular categories',
            items: [
                'Personal Development',
                'Psychology',
                'Productivity',
                'Career & Success',
                'Management & Leadership',
                'Science',
                'Motivation & Inspiration',
                'Mindfulness & Happiness',
                'Money & Investments',
                'Communication Skills'
            ]
        },
        {
            title: 'Popular topics',
            items: [
                'Best Christianity Books',
                'Best Memoirs Books',
                'Best Love Books',
                'Best Self-Help Books',
                'Best Leadership Books',
                'Best Spirituality Books',
                'Best Autobiographies Books',
                'Best Biographies Books',
                'Best Inspiration Books',
                'Best Persuasion Books'
            ]
        },
        {
            title: 'Trending topics',
            items: [
                'Natural Sciences Books',
                'Writing Books',
                'Meditation Books',
                'Mathematics Books',
                'Stoicism Books',
                'Education & Upbringing Books',
                'Sports Books',
                'Sex Books',
                'Wars Books',
                'Marketing Books'
            ]
        }
    ];

    return (
        <div className="w-full overflow-hidden bg-slate-100 pt-12 md:pt-16">
            <h2 className="mb-6 containerTop headline font-bold text-2xl">
                Discover the Blinkist catalogue
            </h2>
            <div className="flex overflow-x-auto containerTop pb-16 -mb-16 lg:justify-between">
                {categories.map((category, index) => (
                    <div key={index} className="w-64 lg:w-full mr-8 md:mr-12 last:mr-0 flex-shrink-0 lg:flex-shrink">
                        <h3 className="mb-6 headline font-bold text-xl">{category.title}</h3>
                        <ul>
                            {category.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="mb-4 last:mb-0">
                                    <Link href="#" className="text-sm hover:text-blue-500 text-gray-500">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

            </div>
            <div className="container   max-w-5xl  mx-auto ">
                <hr className="mt-8 md:mt-12  border-gray-800 border-b-0" />
            </div>
        </div>
    );
};

export default Catalogue;

export interface MenuItem {
    id: number;
    subTitle: string;
}

interface RouterItem {
    id: number;
    title: string;
    children?: MenuItem[];
}

export const Router: RouterItem[] = [
    {
        id: 1,
        title: 'Inspiration & Personal Growth',
        children: [
            {
                id: 1,
                subTitle: ' Personal Development ',
            },
            {
                id: 2,
                subTitle: '  Productivity ',
            },
            {
                id: 3,
                subTitle: ' Personal',
            },
            {
                id: 4,
                subTitle: 'Development ',
            },
        ],
    },
    {
        id: 2,
        title: ' Health & Meditation ',
        children: [
            {
                id: 1,
                subTitle: 'Psychology',
            },
            {
                id: 2,
                subTitle: 'Mindfulness & Happiness',
            },
            {
                id: 3,
                subTitle: ' Personal',
            },
            {
                id: 4,
                subTitle: 'Development ',
            },
        ],
    },
];
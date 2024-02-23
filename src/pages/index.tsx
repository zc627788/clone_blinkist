import React from 'react';
import Banner from '@/components/Banner';
import Section from '@/components/Section';
import Content from '@/components/Content';
import Carousel from '@/components/Carousel';
import Understandbook from '@/components/Understandbook';

const Home = () => (
    <>
        <Banner />
        <Section>
            <h2>Section One</h2>
            <p>This is the content for section one.</p>
        </Section>
        <Understandbook />
        <Section>
            <h2>Section Two</h2>
            <p>This is the content for section two.</p>
        </Section>
        <Section>
            <h2>Section Three</h2>
            <p>This is the content for section three.</p>
        </Section>
        <Content>Additional content here.</Content>
        <Content>More additional content here.</Content>
        <div className="bg-pale-mint">
            <Carousel items={['Slide 1', 'Slide 2', 'Slide 3']} />
        </div>
        <Content>Final content before the footer.</Content>
    </>
);

export default Home; 
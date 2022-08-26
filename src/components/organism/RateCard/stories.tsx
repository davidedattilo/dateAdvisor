import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import RateCard from './RateCard'

export default {
    title: 'Organism/RateCard',
    component: RateCard,
} as ComponentMeta<typeof RateCard>;


const Template: ComponentStory<typeof RateCard> = (args) => (
    <>
        <RateCard {...args} />
    </>
);

export const Default = Template.bind({});
Default.args = {
    label: "New",
    authorName: 'Brunello',
    dateString: 'Feb 18, 2021',
    imageSrc: "https://www.sustainability-times.com/wp-content/uploads/2019/11/leaves-3420078_960_720.jpg",
    avatarSrc: "https://www.smileranch.com/wp-content/uploads/2016/10/Young-man-smiling.jpg",
    title: 'Mi sono scialata!',
    score: 4.5,
    pros: [
        'Molto bene',
        'Wow'
    ],
    cons: [
        '-'
    ]
};

import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import BadgeRow from './BadgeRow'

export default {
    title: 'Organism/BadgeRow',
    component: BadgeRow,
} as ComponentMeta<typeof BadgeRow>;


const Template: ComponentStory<typeof BadgeRow> = (args) => (
    <>
        <BadgeRow {...args} />
    </>
);

export const Default = Template.bind({});
Default.args = {
    all_badges:
        [
            {
                id: 1,
                unlocked: true,
                date_unlock: 'Aug 22, 2022',
                title: 'Welcome',
                description: 'This achievement is awarded when a new member activates their account.',
                selected: true,
                img: "https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png",
                alt: "https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png",
                width: 100,
                height: 100

            },
            {
                id: 2,
                unlocked: true,
                date_unlock: 'Aug 22, 2022',
                title: 'Best Friend',
                description: 'This badge is awarded to users when they accept 10 friend requests.',
                selected: false,
                img: "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
                alt: "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png",
                width: 100,
                height: 100
            },
            {
                id: 3,
                unlocked: false,
                date_unlock: '',
                title: 'Chameleon',
                description: 'This badge is earned by joining 5 different groups',
                selected: false,
                img: "https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png",
                alt: "https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png",
                width: 100,
                height: 100
            }
        ]
};

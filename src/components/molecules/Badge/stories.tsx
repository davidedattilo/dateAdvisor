import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Badge from './Badge';

export default {
    title: 'Molecules/Badge',
    component: Badge,
    argTypes: {
        unlocked: {
            control: {
                type: 'boolean'
            }
        },
        selected: {
            control: {
                type: 'boolean'
            }
        }
    },
} as ComponentMeta<typeof Badge>;


const Template: ComponentStory<typeof Badge> = (args) => (
    <>
        <Badge {...args}
        />
    </>
);

export const Default = Template.bind({});
Default.args = {
    id: 0,
    unlocked: false,
    date_unlock: '-',
    title: 'Arctic',
    description: 'Contributed code to 1 repository',
    selected: false,
    img: "https://github.githubassets.com/images/modules/profile/achievements/arctic-code-vault-contributor-default.png",
    alt: "https://github.githubassets.com/images/modules/profile/achievements/arctic-code-vault-contributor-default.png",
    width: 100,
    height: 100
};

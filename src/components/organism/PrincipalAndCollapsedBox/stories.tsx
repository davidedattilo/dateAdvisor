import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import PrincipalAndCollapsedBox from './PrincipalAndCollapsedBox'

export default {
    title: 'Organism/PrincipalAndCollapsedBox',
    component: PrincipalAndCollapsedBox,
} as ComponentMeta<typeof PrincipalAndCollapsedBox>;


const Template: ComponentStory<typeof PrincipalAndCollapsedBox> = (args) => (
    <>
        <PrincipalAndCollapsedBox {...args} />
    </>
);

export const Default = Template.bind({});
Default.args = {

    principal_stars: [
        {
            label: 'Bellezza',
            score: 2,
        },
        {
            label: 'Simpatia',
            score: 3,
        },
        {
            label: 'Carisma',
            score: 1,
        },
        {
            label: 'Intelligenza',
            score: 2,
        },
    ],

    collapsed_stars: [
        {
            label: 'Bacio Primo Appuntamento',
            score: 2,
        },
        {
            label: 'Bella Presenza',
            score: 2,
        },
        {
            label: 'Parlantina',
            score: 3,
        },
        {
            label: 'Bidonaro',
            score: 2,
        },
        {
            label: 'Imbarazzo',
            score: 4,
        },
        
    ]
}

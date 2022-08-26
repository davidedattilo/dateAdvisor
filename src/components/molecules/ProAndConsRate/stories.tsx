import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import ProAndConsRate from './ProAndConsRate';

export default {
    title: 'Molecules/ProAndConsRate',
    component: ProAndConsRate,
} as ComponentMeta<typeof ProAndConsRate>;


const Template: ComponentStory<typeof ProAndConsRate> = (args) => (
    <>
        <ProAndConsRate {...args}
        />
    </>
);

export const Default = Template.bind({});
Default.args = {
    title: 'Fantastico!',
    score: 3,
    pros: [
        'Mi sono trovata benissimo',
        'Wow',
        'Yuppy',
    ],
    cons: [
        'Aiuto',
        'Volevo morire!!!!',
    ]
};

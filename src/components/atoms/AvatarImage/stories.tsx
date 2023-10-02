import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import AvatarImage from './AvatarImage'

export default {
    title: 'Atoms/AvatarImage',
    component: AvatarImage,
    argTypes: {
        isGrey: {
            control: {
                type: 'boolean'
            }
        }
    },
} as ComponentMeta<typeof AvatarImage>;


const Template: ComponentStory<typeof AvatarImage> = (args) => (
    <>
        <AvatarImage {...args}
            alt="Young man smiling"
            src="https://www.smileranch.com/wp-content/uploads/2016/10/Young-man-smiling.jpg"
        />
    </>
);

export const Default = Template.bind({});
Default.args = {};

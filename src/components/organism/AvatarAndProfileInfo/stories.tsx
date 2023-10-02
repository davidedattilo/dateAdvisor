import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import AvatarAndProfileInfo from './AvatarAndProfileInfo'

export default {
    title: 'Organism/AvatarAndProfileInfo',
    component: AvatarAndProfileInfo,
} as ComponentMeta<typeof AvatarAndProfileInfo>;


const Template: ComponentStory<typeof AvatarAndProfileInfo> = (args) => (
    <>
        <AvatarAndProfileInfo {...args} />
    </>
);

export const Default = Template.bind({});
Default.args = {
    imageSrc: "https://www.sustainability-times.com/wp-content/uploads/2019/11/leaves-3420078_960_720.jpg",
    avatarSrc: "https://www.smileranch.com/wp-content/uploads/2016/10/Young-man-smiling.jpg",
    full_name: "Alessandro Gallucci",
    locate: "Cosenza, Italy",
    short_description: "Sono il gallo dello sballo uhuhuhu"
};

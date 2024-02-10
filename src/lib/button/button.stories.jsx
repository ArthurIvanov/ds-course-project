import { Button } from './button';
import { Icon } from '../icon';

export default {
    title: 'DS Architect/button',
    component: Button,
    parameters: {
        layout: 'centered',
        status: {
            type: 'beta',  // 'beta' | 'stable' | 'deprecated
        }
    },

    tags: ['autodocs'],
}



export const Primary = {
    args: {
        appearance: "primary",
        size: "base",
        text: "Hello storybook"
    }
}

export const Secondary = {
    args: {
        appearance: "secondary",
        size: "base",
        text: "Hello storybook"
    }
}

export const IconBefore = {
    args: {
        appearance: "primary",
        text: "With Icon",
        iconBefore: <Icon iconName='user' size={20} />
    }
}


export const designApi = () => {
    return (
        <iframe
            style={
                {
                    border: "1px solid rgba(0, 0, 0, 0.1)", borderRadius: "16px", width: "90vw", height: "600px", boxShadow: "0px 4px 10px 0px rgba(14, 19, 27, 0.08)"
                }
            }
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FFlpeqZPKm817NETUlX76E9%2FDSA-Project%3Ftype%3Ddesign%26node-id%3D2858%253A1508%26mode%3Ddesign%26t%3DrCDIzcZ3Zjfy8aBO-1" allowfullscreen></iframe>
    )
}

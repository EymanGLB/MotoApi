// Button.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3';
import newButton from './newButton.vue'; // Adjust the import path as needed

const meta: Meta<typeof newButton> = {
    title: 'Example/Button',
    component: newButton,
    argTypes: {
        color: {
            control: {
                type: 'select',
                options: Object.keys(colorMap),
            },
            description: 'Color of the button',
        },
        size: {
            control: {
                type: 'select',
                options: Object.keys(sizeMap),
            },
            description: 'Size of the button',
        },
        uppercase: {
            control: 'boolean',
            description: 'Whether the button text should be uppercase',
        },
    },
};

export default meta;

type ButtonStory = StoryObj<typeof newButton>;

export const Default: ButtonStory = {
    args: {
        tagType: 'button',
        uppercase: false,
        isDisabled: false,
        color: 'emerald',
        size: 'medium',
    },
};

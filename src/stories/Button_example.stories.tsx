import Button, { type ButtonProps } from '../shared/components/Button_example.tsx'
import type { Meta, StoryObj } from '@storybook/react'

// 스토리북에서 사용할 메타데이터를 설정
const meta: Meta<ButtonProps> = {
  title: 'Button', // 스토리북에서 보여줄 제목
  component: Button,
  tags: ['autodocs'], // 스토리북에서 자동으로 문서화
  argTypes: {
    // 스토리북에서 보여줄 props
    clickHandler: {
      action: 'clicked',
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    disabled: {
      control: 'boolean',
    },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
  },
  args: {
    label: 'Button',
  },
}

export default meta

// 스토리를 만드는 방식 두 가지

// 1. 스토리북 공식 문서에 나온 방식
// 스토리 안에서 args를 직접 지정하는 방식
export const Default: StoryObj<ButtonProps> = {
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'medium',
    disabled: false,
  },
}
export const Secondary: StoryObj<ButtonProps> = {
  args: {
    ...Default.args, // default args를 복사
    variant: 'secondary',
  },
}
export const Disabled: StoryObj<ButtonProps> = {
  args: {
    ...Default.args,
    disabled: true,
  },
}

// 2. 미리 args를 지정하고, 스토리를 만들 때 `bind`로 복제하여 사용하는 방식
// const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />

// 스토리북에서 보여줄 스토리
// export const Default = Template.bind({})
// export const Secondary = Template.bind({})
// export const Disabled = Template.bind({})

// Primary, Secondary, Disabled 스토리에서 보여줄 args
// Default.args = {
//   label: 'Button',
//   variant: 'primary',
//   size: 'medium',
//   disabled: false,
// }
// Secondary.args = {
//   ...Default.args, // default args를 복사
//   variant: 'secondary',
// }
// Disabled.args = {
//   ...Default.args,
//   disabled: true,
// }

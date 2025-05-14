import Button from '../shared/components/Button_example.tsx'

// 스토리북에서 사용할 메타데이터를 설정
export default {
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

// 스토리를 만드는 방식 두 가지

// 1. 스토리북 공식 문서에 나온 방식
// 스토리 안에서 args를 직접 지정하는 방식
export const Default = {
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'medium',
    disabled: false,
  },
}
export const Secondary = {
  args: {
    ...Default.args, // default args를 복사
    variant: 'secondary',
  },
}
export const Disabled = {
  args: {
    ...Default.args,
    disabled: true,
  },
}

// 2. 미리 args를 지정하고, 스토리를 만들 때 `bind`로 복제하여 사용하는 방식
// const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />

// 스토리북에서 보여줄 스토리
// export const Primary = Template.bind({})
// export const Secondary = Template.bind({})
// export const Disabled = Template.bind({})

// Primary, Secondary, Disabled 스토리에서 보여줄 args
// Primary.args = {
//   label: 'Primary',
//   variant: 'primary',
// }

// Secondary.args = {
//   label: 'Secondary',
//   variant: 'secondary',
// }

// Disabled.args = {
//   label: 'Disabled',
//   disabled: true,
// }

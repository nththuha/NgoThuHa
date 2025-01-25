import {
  TextInput as MantineTextInput,
  TextInputProps as MantineTextInputProps,
} from '@mantine/core'

interface TextInputProps extends MantineTextInputProps {
  value: number
  onChangeValue: (value: number) => void
}

export default function TextInput({ value, onChangeValue, ...props }: TextInputProps) {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    if (!isNaN(Number(newValue))) {
      onChangeValue(Number(newValue))
    }
  }

  return <MantineTextInput value={value} onChange={onChange} {...props} />
}

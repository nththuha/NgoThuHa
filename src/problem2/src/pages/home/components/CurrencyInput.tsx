import Select from '@/components/common/Select'
import TextInput from '@/components/common/TextInput'
import { Flex } from '@mantine/core'

export default function CurrencyInput() {
  return (
    <Flex gap={5}>
      <TextInput value={0} onChangeValue={() => {}} w="65%" />
      <Select options={[]} w="35%" />
    </Flex>
  )
}

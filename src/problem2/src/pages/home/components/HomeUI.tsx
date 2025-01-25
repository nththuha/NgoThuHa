import { Flex, Paper, Stack, Title } from '@mantine/core'
import { IconTransfer } from '@tabler/icons-react'
import CurrencyInput from './CurrencyInput'
import CurrencyRateDisplay from './CurrencyRateDisplay'

export default function HomeUI() {
  return (
    <Stack align="center" justify="center" h="100vh">
      <Title>Currency Converter</Title>
      <Paper shadow="md" radius="lg" withBorder p="xl" w={{ base: '92vw', md: 1000 }}>
        <Stack gap={10}>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            align="center"
            justify="space-between"
            gap={{ base: 10, md: 0 }}
          >
            <CurrencyInput />
            <IconTransfer />
            <CurrencyInput />
          </Flex>
          <CurrencyRateDisplay />
        </Stack>
      </Paper>
    </Stack>
  )
}

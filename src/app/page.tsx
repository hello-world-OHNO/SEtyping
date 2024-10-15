import Image from 'next/image'
import styles from './page.module.css'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import TopImg from '../../public/images/topimg.jpg'

export default function Home() {
  return (
    <Flex
      w="100%"
      h="820px"
      alignItems="center"
      justify="center"
      backgroundColor="#e0ffef"
    >
      <Box w="70%" alignItems="center">
        <Text textAlign="center" fontSize="50px" fontWeight="bold">
          エンたい！
        </Text>
        <Flex justify={'space-between'}>
          <Image src={TopImg} alt="トップイメージ" width={300} height={300} />
          <Button>Ranking</Button>
        </Flex>
        <Box>
          <Button>START</Button>
          <Button>共有</Button>
        </Box>
      </Box>
    </Flex>
  )
}

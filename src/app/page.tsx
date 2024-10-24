'use client'
import Image from 'next/image'
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react'
import TopImg from '../../public/images/topimg.jpg'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

// こだわりポイント！グラデーションを試してみた。
export default function Home() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => setIsOpen(false)
  return (
    <Box>
      <Flex
        w="100%"
        h="820px"
        alignItems="center"
        justify="center"
        background="linear-gradient(135deg, #f0f0f0 0%, #d9e2f3 100%)"
      >
        <Box w="60%" p={5} bg="white" boxShadow="xl" borderRadius="lg">
          <Text
            textAlign="center"
            fontSize="50px"
            fontWeight="bold"
            color="#333"
          >
            Engineer　Typing
          </Text>
          <Flex justify="center">
            <Image src={TopImg} alt="トップイメージ" width={400} height={400} />
          </Flex>
          <Flex justify="space-between" m={6}>
            <Button
              size="lg"
              w="115px"
              bgGradient="linear(to-r, #38b2ac, #48bb78)"
              _hover={{
                bgGradient: 'linear(to-r, #48bb78, #38b2ac)',
                transform: 'scale(1.05)',
              }}
              color="white"
              boxShadow="lg"
              onClick={() => router.push('/ranking')}
            >
              Ranking
            </Button>
            <Button
              size="lg"
              w="200px"
              bgGradient="linear(to-r, #ed64a6, #e53e3e)"
              _hover={{
                bgGradient: 'linear(to-r, #e53e3e, #ed64a6)',
                transform: 'scale(1.05)',
              }}
              color="white"
              boxShadow="lg"
              onClick={() => router.push('/game')}
            >
              START
            </Button>
            <Button
              size="lg"
              w="115px"
              bg="#2d3748"
              _hover={{ bg: '#4a5568', transform: 'scale(1.05)' }}
              color="white"
              boxShadow="md"
              onClick={() => setIsOpen(true)}
            >
              共有
            </Button>
          </Flex>
        </Box>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>共有</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>共有しますか？</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}

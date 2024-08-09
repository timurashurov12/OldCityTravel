import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

import {
	Button,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	Textarea,
	useDisclosure,
} from '@nextui-org/react'

export const Reserve = () => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	return (
		<>
			<Button
				className='bg-transparent text-white text-lg'
				endContent={<KeyboardArrowRightIcon />}
				onPress={onOpen}
			>
				Забронировать
			</Button>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
				<ModalContent>
					{onClose => (
						<>
							<ModalHeader className='flex flex-col gap-1 text-black text-center text-2xl my-3'>
								Забронируйте сейчас
							</ModalHeader>
							<ModalBody>
								<Input label='Ваше имя' />
								<Input label='Ваше email' />
								<Input label='Ваш телефон' />
								<Textarea label='Ваше пожелания' />
							</ModalBody>
							<ModalFooter>
								<Button
									className='bg-green-500 text-white w-full'
									variant='light'
									onPress={onClose}
								>
									Забронировать
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	)
}

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
import { useTranslation } from 'react-i18next'

export const Reserve = () => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure()
	const { t } = useTranslation()
	return (
		<>
			<Button
				className='bg-transparent text-white text-lg'
				endContent={<KeyboardArrowRightIcon />}
				onPress={onOpen}
			>
				{t('form.button')}
			</Button>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
				<ModalContent>
					{onClose => (
						<>
							<ModalHeader className='flex flex-col gap-1 text-black text-center text-2xl my-3'>
								{t('form.title')}
							</ModalHeader>
							<ModalBody>
								<Input label={t('form.name')} />
								<Input label={t('form.email')} />
								<Input label={t('form.phone')} />
								<Textarea label={t('form.wishes')} />
							</ModalBody>
							<ModalFooter>
								<Button
									className='bg-green-500 text-white w-full'
									variant='light'
									onPress={onClose}
								>
									{t('form.button')}
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	)
}

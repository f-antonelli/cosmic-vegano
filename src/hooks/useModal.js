import { useState } from 'react'

const useModal = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue)

  const openModal = () => {
    setIsOpen(!isOpen)
  }
  const closeModal = () => setIsOpen(false)

  const stopProp = (e) => e.stopPropagation()

  return { isOpen, openModal, closeModal, stopProp }
}

export default useModal

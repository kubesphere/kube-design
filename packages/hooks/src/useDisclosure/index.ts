import { useState } from 'react';

export function useDisclosure(initialIsOpen = false) {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  const open = () => setIsOpen(true);

  const close = () => setIsOpen(false);

  const toggle = () => (isOpen ? close() : open());

  return { isOpen, open, close, toggle };
}

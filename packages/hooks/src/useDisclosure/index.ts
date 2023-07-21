import { useCallback, useState } from 'react';

export function useDisclosure(initialIsOpen = false) {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  const open = useCallback(() => setIsOpen(true), []);

  const close = useCallback(() => setIsOpen(false), []);

  const toggle = useCallback(() => (isOpen ? close() : open()), [isOpen, close, open]);

  return { isOpen, open, close, toggle };
}

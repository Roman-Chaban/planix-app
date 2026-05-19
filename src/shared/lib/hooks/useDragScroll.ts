import { useEffect, useRef } from 'react';

import {
  CURSOR_GRAB,
  CURSOR_GRABBING,
  AXIS,
  USER_SELECT_NONE,
} from '@/shared/lib/hooks/model/constants';

import type { Point, ScrollPosition, UseDragScrollOptions } from '@/shared/lib/hooks/model/types';

const { X, Y, BOTH } = AXIS;

export function useDragScroll<T extends HTMLElement>(
  options: UseDragScrollOptions = {
    scrollSpeed: 1,
    dragThreshold: 5,
  },
) {
  const { axis = X, disabled = false, scrollSpeed = 1, dragThreshold = 5 } = options;

  const containerRef = useRef<T | null>(null);

  const isPointerDownRef = useRef<boolean>(false);
  const isDraggingRef = useRef<boolean>(false);

  const pointerStartPositionRef = useRef<Point>({ x: 0, y: 0 });
  const scrollStartPositionRef = useRef<ScrollPosition>({ left: 0, top: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container || disabled) return;

    const getPointerPosition = (event: PointerEvent): Point => ({
      x: event.clientX,
      y: event.clientY,
    });

    const handlePointerDown = (event: PointerEvent) => {
      isPointerDownRef.current = true;
      isDraggingRef.current = false;

      container.style.cursor = CURSOR_GRABBING;

      pointerStartPositionRef.current = getPointerPosition(event);

      scrollStartPositionRef.current = {
        left: container.scrollLeft,
        top: container.scrollTop,
      };
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!isPointerDownRef.current) return;

      const currentPointerPosition = getPointerPosition(event);
      const deltaX = currentPointerPosition.x - pointerStartPositionRef.current.x;
      const deltaY = currentPointerPosition.y - pointerStartPositionRef.current.y;
      const dragDistance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (!isDraggingRef.current) {
        if (dragDistance < dragThreshold) return;
        isDraggingRef.current = true;
      }

      if (!isDraggingRef.current) return;

      event.preventDefault();

      if (axis === X || axis === BOTH) {
        container.scrollLeft = scrollStartPositionRef.current.left - deltaX * scrollSpeed;
      }

      if (axis === Y || axis === BOTH) {
        container.scrollTop = scrollStartPositionRef.current.top - deltaY * scrollSpeed;
      }
    };

    const handlePointerUp = () => {
      isPointerDownRef.current = false;
      isDraggingRef.current = false;

      container.style.cursor = CURSOR_GRAB;
    };

    container.style.cursor = CURSOR_GRAB;
    container.style.userSelect = USER_SELECT_NONE;
    container.style.touchAction = axis === X ? 'pan-y' : axis === Y ? 'pan-x' : 'none';

    container.addEventListener('pointerdown', handlePointerDown);
    container.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('pointerup', handlePointerUp);
    container.addEventListener('pointercancel', handlePointerUp);

    return () => {
      container.removeEventListener('pointerdown', handlePointerDown);
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerup', handlePointerUp);
      container.removeEventListener('pointercancel', handlePointerUp);
    };
  }, [axis, disabled, scrollSpeed, dragThreshold]);

  return containerRef;
}

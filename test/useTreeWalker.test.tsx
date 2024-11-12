import { useTreeWalker } from '../src';
import { describe, it, expect } from '@jest/globals';
import { renderHook, waitFor } from '@testing-library/react';

describe('useTreeWalker', () => {
  const { result } = renderHook(() => useTreeWalker(document.body));

  it('initial null', () => {
    expect(result.current).toBeNull();
  });

  it('instance of TreeWalker', () => {
    waitFor(() => {
      expect(result.current instanceof TreeWalker).toBeTruthy();
    });
  });
});

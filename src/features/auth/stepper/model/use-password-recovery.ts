'use client';

import { useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { closeModal } from '@/entities/modal';
import { supabase } from '@/shared/api';
import { buildAuthSearchParams, clearRecoveryState } from '@/shared/lib';
import { AUTH_STEPS } from '@/shared/lib/common/constants';
import { useAppDispatch } from '@/shared/providers/store/model/hooks';

const { RESET } = AUTH_STEPS;

export const usePasswordRecovery = () => {
  const dispatch = useAppDispatch();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event) => {
      if (event !== 'PASSWORD_RECOVERY') {
        return;
      }

      dispatch(closeModal());
      clearRecoveryState();

      if (searchParams.get('step') !== RESET) {
        const params = buildAuthSearchParams(searchParams, RESET);

        router.replace(`${pathname}?${params}`, {
          scroll: false,
        });
      }
    });

    return () => subscription.unsubscribe();
  }, [dispatch, pathname, router, searchParams]);
};

import { DateType } from '@/src/components/features/datePickers/PickersDate';
import { atom } from 'jotai';

export const searchSelectValueAtom = atom<string | number | symbol | any | undefined>('');

export const searchInputValueAtom = atom<string | undefined>('');

export const searchPageValueAtom = atom<number>(1);

export const searchSizeValueAtom = atom<number>(10);

// datePicker
export const searchNftStartDateValueAtom = atom<DateType | undefined>(undefined);
export const searchNftEndDateValueAtom = atom<DateType | undefined>(undefined);

export const searchFilterAtom = atom((get) => ({
	page: get(searchPageValueAtom),
	size: get(searchSizeValueAtom),
	select: get(searchSelectValueAtom),
	text: get(searchInputValueAtom),
	startDate: get(searchNftStartDateValueAtom),
	endDate: get(searchNftEndDateValueAtom),
}));


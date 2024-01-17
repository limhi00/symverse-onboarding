import React, { ChangeEvent, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Icon from '@/src/components/atoms/icon';
import styled from '@emotion/styled';
import { Button, Card, InputAdornment } from '@mui/material';
import { useSetAtom } from 'jotai';
import { searchInputValueAtom, searchSelectValueAtom } from '@/src/stories/tableSearchForm';
// import { selectCategoriesType } from '@/src/components/views/manager/list/ManagerList';

export interface selectCategoriesType {
	value: string;
	label: string;
}

interface TableSearchFormProps {
	placeholder: string;
	selectCategories: selectCategoriesType[];
	resetValue?: () => void;
	children?: React.ReactNode;
}

const Form = styled.form(() => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	width: '100%',
}));

const TableSearchForm = ({ children, ...props }: TableSearchFormProps) => {
	const { placeholder, selectCategories, resetValue } = props;

	const [inputText, setInputText] = useState<string>('');
	const [selectedValue, setSelectedValue] = useState<string>(selectCategories[0].value);

	const setSearchSelectValue = useSetAtom(searchSelectValueAtom);
	const setSearchInputValue = useSetAtom(searchInputValueAtom);

	const handleInputChange = (val: string) => {
		setInputText(val);
	};

	const handleSelectChange = (e: SelectChangeEvent) => {
		setSelectedValue(e.target.value);
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSearchInputValue(inputText);
		setSearchSelectValue(selectedValue);
	};

	const onReset = () => {
		setSearchInputValue('');
		setSearchSelectValue('');
		resetValue && resetValue();
	};

	return (
		<Card sx={{ p: 3, mb: 3 }}>
			<Form onSubmit={onSubmit}>
				{children}
				<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
					<FormControl size='small'>
						<InputLabel id='selectLabel'>필터</InputLabel>
						{/*<Select fullWidth value={selectedValue} id='select-plan' label='필터' labelId='selectLabel' onChange={handleSelectChange}>*/}
						{/*	{selectCategories.map((v) => {*/}
						{/*		return (*/}
						{/*			<MenuItem key={v.label} value={v.value}>*/}
						{/*				{v.label}*/}
						{/*			</MenuItem>*/}
						{/*		);*/}
						{/*	})}*/}
						{/*</Select>*/}
					</FormControl>
					<TextField
						fullWidth
						size='small'
						value={inputText}
						sx={{ ml: 3 }}
						placeholder={placeholder}
						onChange={(e) => handleInputChange(e.target.value)}
						InputProps={{
							endAdornment: (
								<InputAdornment position='end'>
									<Icon icon='material-symbols:search' />
								</InputAdornment>
							),
						}}
					/>
				</Box>
				<Box sx={{ display: 'flex', justifyContent: 'center', pt: 2, width: '100%' }}>
					<Button type='submit' size='medium' variant='contained' color='secondary' sx={{ mr: 3 }}>
						검색
					</Button>
					<Button onClick={onReset} size='medium' variant='outlined' color='secondary'>
						초기화
					</Button>
				</Box>
			</Form>
		</Card>
	);
};

export default TableSearchForm;

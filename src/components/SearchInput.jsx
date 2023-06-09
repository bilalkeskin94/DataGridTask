import React from 'react';
import { TextField, InputAdornment, IconButton, Box } from '@mui/material';
import GlassIcon from '../assets/GlassIcon.svg';
import Union from '../assets/Union.svg';

function SearchInput({ value, onChange, placeholder }) {
	return (
		<>
			<TextField
				variant="standard"
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				InputProps={{
					disableUnderline: true,
					endAdornment: (
						<InputAdornment position="end">
							<IconButton
								sx={{
									marginRight: '6px',
								}}
								disableRipple
							>
								<img src={GlassIcon} alt="search_icon" />
							</IconButton>
						</InputAdornment>
					),
				}}
				sx={{
					minWidth: '45px',
					background:
						'linear-gradient(to right, #FFFFFF 0%, #FFFFFF 90%, #744BFC 90%, #744BFC 100%)',
					borderRadius: '39px',
					'& .MuiOutlinedInput-notchedOutline': {
						borderTopLeftRadius: '0',
						borderBottomLeftRadius: '39px',
					},
				}}
				inputProps={{
					style: {
						fontFamily: 'Inter',
						fontStyle: 'normal',
						fontWeight: 300,
						fontSize: '14px',
						lineHeight: '17px',
						color: '#8C8C8C',
						minWidth: '350px',
						minHeight: '36px',
						marginLeft: '29px',
					},
				}}
			/>
			<Box
				sx={{
					background: '#FFFFFF',
					borderRadius: '29px',
					minWidth: '19px',
				}}
			>
				<img src={Union} alt="union_icon" />
			</Box>
		</>
	);
}

export default SearchInput;

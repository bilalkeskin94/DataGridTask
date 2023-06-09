import React from 'react';
import { TextField, InputAdornment, IconButton, Box } from '@mui/material';
import GlassIcon from '../assets/GlassIcon.svg';
import Union from '../assets/Union.svg';

function SearchInput({ value, onChange, placeholder }) {
	return (
		<Box
			sx={{
				display: 'flex',
				gap: '10px',
			}}
		>
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
									marginRight: {
										xl: '9px',
										lg: '9px',
										md: '9px',
										sm: '6px',
										xs: '3px',
									},
								}}
								disableRipple
							>
								<img src={GlassIcon} alt="search_icon" />
							</IconButton>
						</InputAdornment>
					),
				}}
				sx={{
					minWidth: {
						xl: '350px',
						lg: '350px',
						md: '350px',
						sm: '280px',
						xs: '280px',
					},
					background:
						'linear-gradient(to right, #FFFFFF 0%, #FFFFFF 86%, #744BFC 86%, #744BFC 100%)',
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
						minHeight: '36px',
						marginLeft: '29px',
					},
				}}
			/>
			<Box
				sx={{
					background: '#FFFFFF',
					borderRadius: '29px',
					minWidth: '49px',
					height: '49px',
					marginTop: '5px',
				}}
			>
				<img
					style={{ position: 'relative', top: '17px', left: '16px' }}
					src={Union}
					alt="union_icon"
				/>
			</Box>
		</Box>
	);
}

export default SearchInput;

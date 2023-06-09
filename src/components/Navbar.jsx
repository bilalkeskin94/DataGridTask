import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import Logo from '../assets/Logo.svg';
import Instagram from '../assets/Instagram.svg';
import Youtube from '../assets/Youtube.svg';
import Behance from '../assets/Benance.svg';
import LinkedIn from '../assets/LinkedIn.svg';

function Navbar() {
	return (
		<AppBar
			sx={{
				boxShadow: 'none',
				flexGrow: 2,
				display: 'flex',
				justifyContent: 'space-around',
			}}
			position="static"
		>
			<Toolbar style={{ background: '#fff' }}>
				<Box
					sx={{
						marginLeft: { xl: '104px', lg: '80px', sm: '40px', xs: '0' },
					}}
				>
					<img
						className="logo"
						src={Logo}
						alt="logo"
					/>
				</Box>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						gap: { xl: '112px', lg: '90px', sm: '45px', xs: '0' },
						flexGrow: 1,
					}}
				>
					<Typography
						variant="a"
						noWrap
						component="a"
						sx={{
							fontFamily: 'Poppins',
							fontStyle: 'normal',
							fontWeight: 400,
							fontSize: '14px',
							lineHeight: '21px',
							color: '#000000',
							textAlign: 'center',
							display: { xl: 'flex', sm: 'flex', xs: 'none' },
						}}
					>
						Hakkımızda
					</Typography>
					<Typography
						variant="a"
						noWrap
						component="a"
						sx={{
							fontFamily: 'Poppins',
							fontStyle: 'normal',
							fontWeight: 400,
							fontSize: '14px',
							lineHeight: '21px',
							color: '#000000',
							textAlign: 'center',
							display: { xl: 'flex', md: 'flex', sm: 'flex', xs: 'none' },
						}}
					>
						Juri Yarışma Yazılımı
					</Typography>
					<Typography
						variant="a"
						noWrap
						component="a"
						sx={{
							fontFamily: 'Poppins',
							fontStyle: 'normal',
							fontWeight: 400,
							fontSize: '14px',
							lineHeight: '21px',
							color: '#000000',
							textAlign: 'center',
							display: { xl: 'flex', md: 'flex', sm: 'flex', xs: 'none' },
						}}
					>
						Word Ninja
					</Typography>
					<Typography
						variant="a"
						noWrap
						component="a"
						sx={{
							fontFamily: 'Poppins',
							fontStyle: 'normal',
							fontWeight: 400,
							fontSize: '14px',
							lineHeight: '21px',
							color: '#000000',
							textAlign: 'center',
							display: { xl: 'flex', sm: 'flex', xs: 'none' },
						}}
					>
						Word Pyramids
					</Typography>
				</Box>
				<Box
					sx={{
						justifyContent: 'space-between',
						gap: '16px',
						marginRight: '116px',
						display: { xl: 'flex', xs: 'none' },
					}}
				>
					<a href="https://www.instagram.com/mobilerast/ ">
						<img
							style={{
								maxWidth: '100%',
								height: 'auto',
							}}
							src={Instagram}
							alt="instagram"
						/>
					</a>
					<a href="https://rastmobile.com/en/ ">
						<img
							style={{
								maxWidth: '100%',
								height: 'auto',
							}}
							src={Youtube}
							alt="youtube"
						/>
					</a>
					<a href=" https://www.behance.net/rastmobile">
						<img
							style={{
								maxWidth: '100%',
								height: 'auto',
							}}
							src={Behance}
							alt="behance"
						/>
					</a>
					<a href="https://www.linkedin.com/company/rastmobile/">
						<img
							style={{
								maxWidth: '100%',
								height: 'auto',
							}}
							src={LinkedIn}
							alt="linkedin"
						/>
					</a>
				</Box>
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;

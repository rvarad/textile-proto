"use client"

import {
	AppBar,
	Box,
	Container,
	CssBaseline,
	CSSObject,
	Divider,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	styled,
	Theme,
	Toolbar,
	Typography,
	useTheme,
} from "@mui/material"
import MuiDrawer from "@mui/material/Drawer"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const drawerWidth = 240

const openedMixin = (theme: Theme): CSSObject => ({
	width: drawerWidth,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: "hidden",
})

const closedMixin = (theme: Theme): CSSObject => ({
	width: `calc(${theme.spacing(7)} + 1px)`,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: "hidden",
	[theme.breakpoints.up("sm")]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
})

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: "nowrap",
	boxSizing: "border-box",
	variants: [
		{
			props: ({ open }) => open,
			style: {
				...openedMixin(theme),
				"& .MuiDrawer-paper": openedMixin(theme),
			},
		},
		{
			props: ({ open }) => !open,
			style: {
				...closedMixin(theme),
				"& .MuiDrawer-paper": closedMixin(theme),
			},
		},
	],
}))

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
}))

function MainLayout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname()
	const theme = useTheme()
	const [open, setOpen] = useState(false)

	const handleDrawerOpen = () => setOpen(true)
	const handleDrawerClose = () => setOpen(false)

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
			>
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<Typography
							variant="h5"
							noWrap
							sx={{
								zIndex: 2,
								mr: "auto",
								pl: "1rem",
								fontWeight: "bold",
								fontSize: { xs: "1.5rem", sm: "2rem" },
							}}
						>
							Costing Calculator
						</Typography>
						<div>
							<IconButton size="large">
								<Typography>Logout</Typography>
							</IconButton>
						</div>
					</Toolbar>
				</Container>
			</AppBar>
			<Drawer
				variant="permanent"
				open={open}
			>
				<Toolbar />
				<Box sx={{ overflow: "auto" }}>
					<DrawerHeader>
						<IconButton
							onClick={() => {
								if (open) {
									handleDrawerClose()
								} else {
									handleDrawerOpen()
								}
							}}
						>
							{open ? "Close" : "Open"}
						</IconButton>
					</DrawerHeader>
					<List>
						<Link href={"/"}>
							<ListItem
								disablePadding
								sx={{ display: "block" }}
							>
								<ListItemButton
									sx={[
										{ minHeight: 48, px: 2.5 },
										open
											? { justifyContent: "initial" }
											: { justifyContent: "center" },
									]}
								>
									<ListItemIcon
										sx={[
											{
												minWidth: 0,
												justifyContent: "center",
											},
											open
												? {
														mr: 3,
												  }
												: { mr: "auto" },
										]}
									>
										D
									</ListItemIcon>
									<ListItemText
										sx={[
											open
												? {
														opacity: 1,
												  }
												: {
														opacity: 0,
												  },
										]}
									>
										Dashboard
									</ListItemText>
								</ListItemButton>
							</ListItem>
						</Link>
						<Link href={"/folders"}>
							<ListItem
								disablePadding
								sx={{ display: "block" }}
							>
								<ListItemButton
									sx={[
										{ minHeight: 48, px: 2.5 },
										open
											? { justifyContent: "initial" }
											: { justifyContent: "center" },
									]}
								>
									<ListItemIcon
										sx={[
											{
												minWidth: 0,
												justifyContent: "center",
											},
											open
												? {
														mr: 3,
												  }
												: { mr: "auto" },
										]}
									>
										F
									</ListItemIcon>
									<ListItemText
										sx={[
											open
												? {
														opacity: 1,
												  }
												: {
														opacity: 0,
												  },
										]}
									>
										Folders
									</ListItemText>
								</ListItemButton>
							</ListItem>
						</Link>
					</List>
					<Divider />
					<List>
						<Link href={"/weavesettings"}>
							<ListItem
								disablePadding
								sx={{ display: "block" }}
							>
								<ListItemButton
									sx={[
										{ minHeight: 48, px: 2.5 },
										open
											? { justifyContent: "initial" }
											: { justifyContent: "center" },
									]}
								>
									<ListItemIcon
										sx={[
											{
												minWidth: 0,
												justifyContent: "center",
											},
											open
												? {
														mr: 3,
												  }
												: { mr: "auto" },
										]}
									>
										W
									</ListItemIcon>
									<ListItemText
										sx={[
											open
												? {
														opacity: 1,
												  }
												: {
														opacity: 0,
												  },
										]}
									>
										Weave Settings
									</ListItemText>
								</ListItemButton>
							</ListItem>
						</Link>
						<Link href={"/yarncounts"}>
							<ListItem
								disablePadding
								sx={{ display: "block" }}
							>
								<ListItemButton
									sx={[
										{ minHeight: 48, px: 2.5 },
										open
											? { justifyContent: "initial" }
											: { justifyContent: "center" },
									]}
								>
									<ListItemIcon
										sx={[
											{
												minWidth: 0,
												justifyContent: "center",
											},
											open
												? {
														mr: 3,
												  }
												: { mr: "auto" },
										]}
									>
										Y
									</ListItemIcon>
									<ListItemText
										sx={[
											open
												? {
														opacity: 1,
												  }
												: {
														opacity: 0,
												  },
										]}
									>
										Yarn Rules
									</ListItemText>
								</ListItemButton>
							</ListItem>
						</Link>
					</List>
				</Box>
			</Drawer>
			<Box
				component={"main"}
				sx={{ flexGrow: 1, p: 3 }}
			>
				<Toolbar />
				{children}
			</Box>
		</Box>
	)
}

export default MainLayout

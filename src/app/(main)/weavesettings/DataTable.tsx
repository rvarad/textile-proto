"use client"

import {
	Box,
	Button,
	ButtonGroup,
	Container,
	IconButton,
	Input,
	Paper,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TextField,
} from "@mui/material"
import React, { useEffect, useState } from "react"
import WeaveModal from "./WeaveModal"
import { DeleteRounded, EditRounded, Search } from "@mui/icons-material"

const columns: readonly string[] = [
	"Weave Name",
	"Warp Weft Width Shrinkage",
	"Additional Fabric Shrinkage Allowance in inches",
	"",
]

async function deleteWeave(id: number) {
	try {
		const res = await fetch(
			`http://localhost:3000/api/v1/weaveSettings/deleteWeaveData?id=${id}`,
			{ method: "DELETE" }
		)

		const data = await res.json()

		console.log(data)
	} catch (error) {
		console.log(error)
	}
}

function DataTable({ data }) {
	return (
		<Stack
			direction="column"
			spacing={2}
		>
			<Box sx={{ display: "flex", justifyContent: "flex-end" }}>
				<span
					style={{
						paddingLeft: "0.5rem",
						display: "flex",
						alignItems: "center",
						border: "1px solid black",
					}}
				>
					<input
						placeholder="Search"
						type="text"
						style={{
							background: "none",
							border: "none",
							color: "grey",
						}}
					/>
					<IconButton>
						<Search />
					</IconButton>
				</span>
			</Box>
			<Paper
				elevation={2}
				sx={{
					padding: "1rem",
					background: "rgb(39, 39, 39)",
					borderRadius: "1rem",
					width: "100%",
					overflow: "hidden",
				}}
				// square={false}
			>
				<TableContainer
					sx={{
						maxHeight: "500",
					}}
				>
					<Table
						stickyHeader
						sx={{ borderCollapse: "collapse", tableLayout: "fixed" }}
					>
						<TableHead>
							<TableRow>
								{columns.map((column) => (
									<TableCell
										key={column}
										sx={{
											borderBottom: "none",
											background: "rgb(70, 69, 69)",
											color: "rgb(255, 255, 255)",
											// fontWeight: "bold",
											fontSize: "0.8rem",
											borderTopLeftRadius: column === columns[0] ? "1rem" : "0",
											borderTopRightRadius:
												column === columns[columns.length - 1] ? "1rem" : "0",
											borderBottomLeftRadius:
												column === columns[0] ? "1rem" : "0",
											borderBottomRightRadius:
												column === columns[columns.length - 1] ? "1rem" : "0",
											textAlign: "center",
										}}
									>
										{column}
									</TableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody>
							{data.map((row) => {
								return (
									<TableRow key={row.id}>
										<TableCell
											sx={{
												border: "none",
												textAlign: "center",
												color: "rgb(255, 255, 255)",
												fontSize: "1rem",
											}}
										>
											{row.weaveName}
										</TableCell>
										<TableCell
											sx={{
												border: "none",
												textAlign: "center",
												color: "rgb(255, 255, 255)",
												fontSize: "1rem",
											}}
										>
											{row.warpWeftWidthShrinkageType === "Custom"
												? row.warpWeftWidthShrinkage
												: "Use Default"}
										</TableCell>
										<TableCell
											sx={{
												border: "none",
												textAlign: "center",
												color: "rgb(255, 255, 255)",
												fontSize: "1rem",
											}}
										>
											{row.additionalFabricShrinkageAllowance}
										</TableCell>
										<TableCell sx={{ border: "none", textAlign: "center" }}>
											{/* <WeaveModal
												invocationType="edit"
												weaveName={row.weaveName}
												warpWeftWidthShrinkageType={
													row.warpWeftWidthShrinkageType
												}
												warpWeftWidthShrinkage={row.warpWeftWidthShrinkage}
												additionalFabricShrinkageAllowance={
													row.additionalFabricShrinkageAllowance
												}
											/> */}
											<ButtonGroup
												orientation="horizontal"
												size="small"
												variant="contained"
												disableElevation
											>
												<IconButton color="primary">
													<EditRounded />
												</IconButton>
												<IconButton color="warning">
													<DeleteRounded />
												</IconButton>
											</ButtonGroup>
											{/* <button onClick={() => deleteWeave(row.id)}>
												Delete
											</button> */}
										</TableCell>
									</TableRow>
								)
							})}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
		</Stack>
	)
}

export default DataTable

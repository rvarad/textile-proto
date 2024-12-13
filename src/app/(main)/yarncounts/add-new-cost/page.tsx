import { Container } from "@mui/material"
import { FormProvider, useForm } from "react-hook-form"

function Page() {
	const form = useForm()

	return (
		<Container>
			<FormProvider>
				<form></form>
			</FormProvider>
		</Container>
	)
}

export default Page

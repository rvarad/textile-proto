import { Container } from "@mui/material"
import { FormProvider, useForm } from "react-hook-form"

function Page() {
	const {control} = useForm({
		defaultValues: {}
	})

	return (
		<Container>
			<FormProvider {...control}>
				<form></form>
			</FormProvider>
		</Container>
	)
}

export default Page

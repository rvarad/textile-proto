"use client";

import { POST } from "@/app/api/v1/weaveSettings/createNewWeave/route";
import FormTextField from "@/components/FormTextField";
import { Button, FormControl, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { FormProvider, useForm, useFormContext } from "react-hook-form";

function YarnCountForm() {
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      material: "",
      countname: "",
      warpandweftwidthshrinkage: "",
      warplengthshrinkage: "",
      weftlengthshrinkage: "",
      runningmeter: "",
      knots: "",
      hanks: "",
      wthanks: "",
      wthanksnotrounded: "",
    },
  });

  async function submitValues(values: any) {
    console.log("values of form submition are: ", values);
    // try {
    //   const res = await fetch(
    //     'http://localhost:3000/api/v1/yarncounts/add-new-count',
    //     {
    //       method: 'POST',
    //       headers: {
    //         'Content-type': 'application/json'
    //       },
    //       body: JSON.stringify({...values})
    //     }
    //     )

    //     const data = await res.json()
    //     // router.push("/yarncounts")
    //     return data
    // } catch (error) {
    //   console.log(error);
    // }
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(submitValues)}>
        <Stack gap={1} sx={{width: '70%'}} >
          <FormControl>
            <label htmlFor="materialInput">Material</label>
            <FormTextField
              required={true}
              id="materialInput"
              name="material"
              type="text"
            />
          </FormControl>
          <FormControl>
            <label htmlFor="countNameInput">Count Name</label>
            <FormTextField
              required={true}
              id="countNameInput"
              name="countname"
              type="text"
            />
          </FormControl>
          <FormControl>
            <label htmlFor="warpAndWeftWidthShrinkageInput">
              Warp and Weft Width Shrinkage %
            </label>
            <FormTextField
              required={true}
              id="warpAndWeftWidthShrinkageInput"
              name="warpandweftwidthshrinkage"
              type="text"
            />
          </FormControl>
          <FormControl>
            <label htmlFor="warpLengthShrinkageInput">
              Warp Length Shrinkage %
            </label>
            <FormTextField
              required={true}
              id="warpLengthShrinkageInput"
              name="warplengthshrinkage"
              type="text"
            />
          </FormControl>
          <FormControl>
            <label htmlFor="weftLengthShrinkageInput">
              Weft Length Shrinkage %
            </label>
            <FormTextField
              required={true}
              id="weftLengthShrinkageInput"
              name="weftlengthshrinkage"
              type="text"
            />
          </FormControl>
          <FormControl>
            <label htmlFor="runningMeterInput">Running Meter</label>
            <FormTextField
              required={true}
              id="runningMeterInput"
              name="runningmeter"
              type="text"
            />
          </FormControl>
          <FormControl>
            <label htmlFor="knotsInput">Knots</label>
            <FormTextField
              required={true}
              id="knotsInput"
              name="knots"
              type="text"
            />
          </FormControl>
          <FormControl>
            <label htmlFor="hanksInput">Hanks</label>
            <FormTextField
              required={true}
              id="hanksInput"
              name="hanks"
              type="text"
            />
          </FormControl>
          <FormControl>
            <label htmlFor="wtHanksInput">WT Hanks</label>
            <FormTextField
              required={true}
              id="wtHanksInput"
              name="wthanks"
              type="text"
            />
          </FormControl>
          <FormControl>
            <label htmlFor="wtHanksNotRoundedInput">WT Hanks Not Rounded</label>
            <FormTextField
              required={true}
              id="wtHanksNotRoundedInput"
              name="wthanksnotrounded"
              type="text"
            />
          </FormControl>
          <Stack direction={'row'} gap={2} justifyContent={'center'} sx={{mt: '1.5rem'}} >
          <Button type="submit" variant='contained' color="primary">Save</Button>
          <Button
            onClick={() => {
              console.log("Submit values cancelled");
              router.push("/yarncounts");
            }}
            variant='outlined'
            color='secondary'
          >
            Cancel
          </Button></Stack>
        </Stack>
      </form>
    </FormProvider>
  );
}

export default YarnCountForm;

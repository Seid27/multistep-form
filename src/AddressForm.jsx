import FormWrapper from "./FormWrappper";

export default function AddressForm() {
    return (
        <FormWrapper title={'Address Detail'}>
        <label>Street</label>
        <input type="text" autoFocus required />
        <label>City</label>
        <input type="text" required />
        <label>State</label>
        <input type="text" required />
        <label>Zip</label>
        <input type="text" required />
        </FormWrapper>
    )
    
}
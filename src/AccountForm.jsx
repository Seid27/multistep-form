import FormWrapper from "./FormWrappper";

export default function AccountForm(params) {
    return(
        <FormWrapper title={'Account Detail'}>
        <label>Email</label>
        <input type="email" autoFocus required />
        <label>Password</label>
        <input type="text" required />
        </FormWrapper>
    )
}
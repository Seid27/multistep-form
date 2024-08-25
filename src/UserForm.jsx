import FormWrapper from "./FormWrappper";

export default function UserForm() {
    return(
        <FormWrapper title='User Detail '>
        <label>First Name</label>
        <input type="text" autoFocus required />
        <label>Last Name</label>
        <input type="text" required />
        <label>Age</label>
        <input type="number" min={1} required  />
        </FormWrapper>
    )
    
}
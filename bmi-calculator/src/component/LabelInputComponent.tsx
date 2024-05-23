interface Iprops{
    name: string;
    type?: string;
    placeholder: string;
    value: number | string | undefined;
    className: string | undefined;
    onChange: any;
    label: string | undefined;
    errors?: Object | any;
}
export default function LabelInputComponent(props: Iprops) {

    const {
        name, type = '', placeholder = '', value='', className='', onChange, label='', errors, 
    } = props;
    return(
       <>
            {errors && errors[name] && errors[name].message && <p>{errors[name].message}</p>}
            <label>
                {label}
                <input
                    name={name}
                    type={type}
                    placeholder={placeholder}           
                    value={value}
                    className={className}
                    onChange={onChange}
                />
            </label>
       </>
    );
}
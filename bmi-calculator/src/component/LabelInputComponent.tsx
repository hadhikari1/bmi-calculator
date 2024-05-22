interface Iprops{
    name: string;
    type: string;
    placeholder: string;
    value: number | string | undefined;
    className: string | undefined;
    onChange: any;
    label: string | undefined;
}
export default function LabelInputComponent(props: Iprops) {

    const {
        name, type, placeholder = '', value='', className='', onChange, label=''
    } = props;
    return(
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
    );
}
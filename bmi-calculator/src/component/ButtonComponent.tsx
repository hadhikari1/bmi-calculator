export default function ButtonComponent(props: {onClick: any}) {

    return(
        <button type="submit"
        onClick={props.onClick}
        >Submit</button>   
    );
}
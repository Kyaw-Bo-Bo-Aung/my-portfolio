import {Sun , Moon} from './../icons/icons'

function ToggleBtn(props) {
    const handleClick = () => {
        props.onToggle()
    }
    return(
        <div id="toggle-btn" onClick={handleClick}>
            {props.theme === 'dark-theme' && <img src={Sun} alt=""  />}
            {props.theme === 'light-theme' && <img src={Moon} alt="" />}
        </div>
    )
}

export default ToggleBtn
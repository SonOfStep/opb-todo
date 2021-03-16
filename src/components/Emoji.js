const Emoji = ({symbol, label}) => (
    <span 
        className="emoji"
        role="img"
        aria-label={label ? label : ""}
        aria-hidden={label ? "false" : "true"}
        // aria-label={label || ""}
        // aria-hidden={label || "false"}
    >
        {String.fromCodePoint(symbol)}
    </span>
)

export default Emoji
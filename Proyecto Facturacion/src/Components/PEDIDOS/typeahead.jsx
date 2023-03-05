function Typeahead({ options, onSelect }) {
    const [inputValue, setInputValue] = useState('');
    const [showOptions, setShowOptions] = useState(false);

    function handleInputChange(event) {
        const value = event.target.value;
        setInputValue(value);
        setShowOptions(value.length > 0);
    }

    function handleSelect(option) {
        setInputValue(option.name);
        setShowOptions(false);
        onSelect(option);
    }

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
            {showOptions && (
                <ul>
                    {options
                        .filter((option) =>
                            option.name
                                .toLowerCase()
                                .includes(inputValue.toLowerCase())
                        )
                        .map((option) => (
                            <li
                                key={option.id}
                                onClick={() => handleSelect(option)}
                            >
                                {option.name}
                            </li>
                        ))}
                </ul>
            )}
        </div>
    );
}

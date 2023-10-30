function Buttons({ handlePlay, handleBack, handleNext }) {
    return (
        <div className="buttons">
            <a onClick={handleBack}>back</a>
            <a onClick={handlePlay}>play</a>
            <a onClick={handleNext}>next</a>
        </div>
    );
}

export default Buttons;
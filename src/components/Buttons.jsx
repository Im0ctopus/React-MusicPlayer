import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled, TbPlayerPlayFilled, TbPlayerPauseFilled } from 'react-icons/tb'

function Buttons({ handlePlay, handleBack, handleNext, isPlaying }) {
    return (
        <div className="buttons">
            <a onClick={handleBack}><TbPlayerTrackPrevFilled size={'28px'} /></a>
            <a onClick={handlePlay}>{isPlaying ? <TbPlayerPauseFilled size={'28px'} /> : <TbPlayerPlayFilled size={'28px'} />}</a>
            <a onClick={handleNext}><TbPlayerTrackNextFilled size={'28px'} /></a>
        </div>
    );
}

export default Buttons;
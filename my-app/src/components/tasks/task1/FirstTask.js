import {useState} from "react";


export const SmileVotes = () => {
    const [votes, setVotes] = useState([
        {
            emoji: "\u{1F642}",
            votesCount: 0
        },
        {
            emoji: "\u{1F60D}",
            votesCount: 0
        },
        {
            emoji: "\u{1F602}",
            votesCount: 0
        },
        {
            emoji: "\u{1F914}",
            votesCount: 0
        }
    ]);
    const giveVoteToEmoji = (index) => {
        const updatedVotes = [...votes];
        const selectedEmojiVotes = updatedVotes[index];
        selectedEmojiVotes.votesCount += 1;
        setVotes(updatedVotes);
    };
    const [winner, setWinner] = useState(null);

    const getWinnerSmile = (votes) => {
        const max = votes.reduce((prev, cur) => {
            if (prev.votesCount > cur.votesCount) {
                return prev
            }
            return cur
        })
        const winningEmoji = max.votesCount === 0 ? null : max.emoji;
        setWinner(winningEmoji);
    };
    const ResultButton = ({onClick, winner}) => {
        return (
            <div>
                <button onClick={onClick}>Показати результат!</button>
                {winner === null ? '' : <p>{`Winner: ${winner}`} </p>}
            </div>
        );
    };
    return (
        <div>
            <h1>Вибери топовий емоджі!!</h1>
            <div>
                {votes.map((obg) => (
                    <div key={obg.emoji}>
                        <button onClick={() => giveVoteToEmoji(votes.indexOf(obg))}>{obg.emoji}</button>
                        <span>{obg.votesCount}</span>
                    </div>
                ))}
            </div>
            <div>
                <ResultButton onClick={() => getWinnerSmile(votes)} winner={winner}/>
            </div>
        </div>
    );
};


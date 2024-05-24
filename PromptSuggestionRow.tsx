import PromptSuggestion from "./PromptSuggestion"

const PromptSuggestionRow = ({ onPromptClick }) => {
    const prompts = [
        "Who was Luke Skywalker",
        "What is Tatooine?",
        "Who is Esmeraldoo?"
    ]

    return (
        <div className="prompt-suggestion-row">
            {prompts.map((prompt, _index) => (
                <PromptSuggestion key={_index} text={prompt} onClick={() => onPromptClick(prompt)}/>
            ))}
        </div>
    )
}

export default PromptSuggestionRow

"use-client"
import Image from "next/image"
import starwarsGPTLogo from "./assets/Star_Wars_Logo.svg.png"
import { useChat } from "ai/react"
import LoadingBubble from "@/app/components/LoadingBubble"
import PromptSuggestionRow from "@/app/components/PromptSuggestionRow"
import Bubble from "@/app/components/Bubble"
import { Message } from "ai"

const Home () => {
    const {append, isLoading, messages, input, handleInputChange, handleSubmit } = useChat()

    const noMessages = !messages || messages.lenght === 0

    const handlePrompt = (prompt) => {
        console.log(prompt)
        const msg: Message = { id: crypto.randomUUID(), content: prompt, role: 'user'}
        append(msg)
    }

    return (
        <main>
            <Image src={starwarsGPTLogo} height="75" alt="StarGPT Logo"/>
            <section className={noMessages ? "" : "populated"}>
                {noMessages? (
                    <>
                        <p className="starter-text">The Ultimate place for Star Wars super fans!
                            Ask StarGPT anything about the fantastic topic of Star Wars
                            and it will come back with the most up-to-date answers.
                            We hope you enjoy!>
                        </p>
                        <br/>
                        <PromptSuggestionRow onPromptClick={handlePrompt}/>
                    </>
                ) : (
                    <>
                        { messages.map((message, index) => <Bubble key={`message-${index}`} message={message}/>) }
                        {isLoading && <LoadingBubble/>}
                    </>
                )}
            </section>
            <form onSubmit={handleSubmit}>
                <input className="question-box" onChange={handleInputChange} value={input} placeholder="Ask me something..."/>
                <input type="submit"/>
            </form>
        </main>
    )
}

export default Home

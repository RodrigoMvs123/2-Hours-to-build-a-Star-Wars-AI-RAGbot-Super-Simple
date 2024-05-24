# 2-Hours-to-build-a-Star-Wars-AI-RAGbot-Super-Simple

https://www.youtube.com/watch?v=1URfAeIRWm0 

create-next-app
npx create-next-app
nextjs-starwars-bot
TypeScript
ESLint

Visual Studio Code
Explorer
Open Editors
app
api
scripts
loadDB.ts
sample_data.json

loadDB.ts
import { DataAPIClient } from "@datastax/astra-db-ts"
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter"
import "dotenv/config"
import OpenAI from "openai"

Visual Studio Code
Terminal
npm i @datastax/astra-db-ts langchain openai dotenv

Visual Studio Code
Explorer
Open Editors
app
api
scripts
loadDB.ts
sample_data.json
package.json

package.json
{
  "name": "nextjs-starwars-bot",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@datastax/astra-db-ts": "1.1.0",
    "dotenv": "^16.4.5",
    "langchain": "0.1.36",
    "openai": "4.38.5",
    "react": "^18",
    "react-dom": "^18",
    "next": "14.2.3"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "eslint": "^8",
    "eslint-config-next": "14.2.3"
  }
}

OpenAI KEY
https://openai.com/ 
Create new secret key
demo
create secret key
sk-proj-f1vyV1nNZ6z8gwffBAVJT3BlbkFJR7Jn82IqBRRLhS5P4igR 
DataStax
https://astra.datastax.com/
Create a Database
starwars
us-east-2
Create Database
API Endpoint
https://3c1dd874-ef19-4a81-9eb6-7867652e1f68-us-east-2.apps.astra.datastax.com
Application Tokens
AstraCS:ZkeLUHPquRnlaJkObIUoEBLx:feb0a419462b7f7f8178f2a2ecc962023676616c90a08d4c5cddf8e495db4ea2
Data Explorer
default_keyspcace

Visual Studio Code
Explorer
Open Editors
app
api
scripts
loadDB.ts
sample_data.json
package.json
.env

.env
OPENAI_API_KEY=sk-proj-f1vyV1nNZ6z8gwffBAVJT3BlbkFJR7Jn82IqBRRLhS5P4igR
ASTRADB_DB_API_ENDPOINT=https://3c1dd874-ef19-4a81-9eb6-7867652e1f68-us-east-2.apps.astra.datastax.com
ASTRADB_DB_APPLICATION_TOKEN=AstraCS:ZkeLUHPquRnlaJkObIUoEBLx:feb0a419462b7f7f8178f2a2ecc962023676616c90a08d4c5cddf8e495db4ea2
ASTRA_DB_NAMESPACE=default_keyspace

Visual Studio Code
Explorer
Open Editors
app
api
scripts
loadDB.ts
sample_data.json
package.json
.env

loadDB.ts
import { DataAPIClient } from "@datastax/astra-db-ts"
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter"
import "dotenv/config"
import OpenAI from "openai"

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

const client = new DataAPIClient(process.env.ASTRA_DB_APPLICATION_TOKEN)
const db = client.db(process.env.ASTRA_DB_API_ENDPOINT, { namespace: process.env.ASTRA_DB_NAMESPACE })

Visual Studio Code
Terminal
npm i ts-node

Visual Studio Code
Explorer
Open Editors
app
api
scripts
loadDB.ts
sample_data.json
package.json
.env

package.json
{
  "name": "nextjs-starwars-bot",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "seed": "ts-node ./scripts/loadDB.ts"
    "lint": "next lint"
  },
  "dependencies": {
    "@datastax/astra-db-ts": "1.1.0",
    "dotenv": "^16.4.5",
    "langchain": "0.1.36",
    "openai": "4.38.5",
    "react": "^18",
    "react-dom": "^18",
    "next": "14.2.3"
    "ts-node": "^10.9.2"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "eslint": "^8",
    "eslint-config-next": "14.2.3"
  }
}

Visual Studio Code
Explorer
Open Editors
app
api
scripts
loadDB.ts
sample_data.json
package.json
.env

loadDB.ts
import { DataAPIClient } from "@datastax/astra-db-ts"
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter"
import "dotenv/config"
import OpenAI from "openai"

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

const client = new DataAPIClient(process.env.ASTRA_DB_APPLICATION_TOKEN)
const db = client.db(process.env.ASTRA_DB_API_ENDPOINT, { namespace: process.env.ASTRA_DB_NAMESPACE })

const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverLap: 200,
})

const createCollection = async () => {
    try {
        const res = await db.createCollection('characters', {
            vector: {
                dimension: 1536
            }
        })
        console.log(res)
    } catch (e) {
        console.log('characters collections already exists')
    }
}

const loadSampleData = async () => {
    const collection = await db.collection('characters')
        for await ( const { id, name, description } of SampleData) {
            
        }
}

Visual Studio Code
Explorer
Open Editors
app
api
scripts
loadDB.ts
sample_data.json
package.json
.env

sample_data.json
[
    {
        "id": "1",
        "name": "Luke Skywalker",
        "description": "Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to become one of the greatest Jedi the galaxy has ever known. Along with his friends Princess Leia and Han Solo, Luke battled the evil Empire, discovered the truth of his parentage, and ended the tyranny of the Sith." 
    },
    {
        "id": "2",
        "name": "Esmeraldoo Smigoo",
        "description": "Esmeraldoo was the queen of Loopy Land in Tatooine." 
    }
]

Visual Studio Code
Explorer
Open Editors
app
api
scripts
loadDB.ts
sample_data.json
package.json
.env

loadDB.ts
import { DataAPIClient } from "@datastax/astra-db-ts"
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter"
import "dotenv/config"
import OpenAI from "openai"
import sampleData from "./sample_data.json"

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

const client = new DataAPIClient(process.env.ASTRA_DB_APPLICATION_TOKEN)
const db = client.db(process.env.ASTRA_DB_API_ENDPOINT, { namespace: process.env.ASTRA_DB_NAMESPACE })

const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverLap: 200,
})

const createCollection = async () => {
    try {
        const res = await db.createCollection('characters', {
            vector: {
                dimension: 1536
            }
        })
        console.log(res)
    } catch (e) {
        console.log('characters collections already exists')
    }
}

const loadSampleData = async () => {
    const collection = await db.collection('characters')
        for await ( const { id, name, description } of SampleData) {
            const chunks = await splitter.splitText(description)
            let i = 0 
            for await (const chunk of chunks) {
                const { data } = await openai.embeddings.create({ 
                    input: chunk, 
                    model: 'text-embedding-ada-002'
                })  
                const res = await collection.insertOne({
                    docuemnt_id: id,
                    $vector: data[0]?.embedding,
                    name,
                    description: chunk
                })
                i++     
            }
        }
        console.log('data loaded')
}

createCollection().then(() => loadSampleData())

Visual Studio Code
Explorer
Open Editors
app
api
scripts
loadDB.ts
sample_data.json
package.json
.env
tsconfig.json

tsconfig.json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "ts-node": {
    "compilerOptions": {
      "module": "CommonJS"
    }
  },
  "exclude": ["node_modules"]
}

Visual Studio Code
Terminal
npm run seed

Visual Studio Code
Explorer
Open Editors
app
api
chat
route.ts
scripts
loadDB.ts
sample_data.json
package.json
.env
tsconfig.json

route.ts
import OpenAI from "openai"
import { OpenAIStream, StreamingTextResponse } from "ai"

Visual Studio Code
Terminal
npm i ai 

Visual Studio Code
Explorer
Open Editors
app
api
chat
route.ts
scripts
loadDB.ts
sample_data.json
package.json
.env
tsconfig.json

package.json
{
  "name": "nextjs-starwars-bot",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "seed": "ts-node ./scripts/loadDB.ts",
    "lint": "next lint"
  },
  "dependencies": {
    "@datastax/astra-db-ts": "1.1.0",
    "ai": "^3.0.35",
    "dotenv": "^16.4.5",
    "langchain": "0.1.36",
    "openai": "4.38.5",
    "react": "^18",
    "react-dom": "^18",
    "next": "14.2.3"
    "ts-node": "^10.9.2"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "eslint": "^8",
    "eslint-config-next": "14.2.3"
  }
}

Visual Studio Code
Explorer
Open Editors
app
api
chat
route.ts
scripts
loadDB.ts
sample_data.json
package.json
.env
tsconfig.json

route.ts
import OpenAI from "openai"
import { OpenAIStream, StreamingTextResponse } from "ai"
import { DataAPIClient } from "@datastax/astra-db-ts"

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

const client = new DataAPIClient(process.env.ASTRA_DB_APPLICATION_TOKEN)
const db = client.db(process.env.ASTRA_DB_API_ENDPOINT, { 
    namespace: process.env.ASTRA_DB_NAMESPACE 
})

export async function POST(req: Request) {
    try {
        const { messages } = await req.json()
        const latestMenssage = messages[messages?.lenght -1]?.content
        let docContext = ''
        const { data } = await openai.embeddings.create({ 
            input: latestMenssage, model: 'text-embedding-ada-002'
        })
        const collection = await db.collection('characters')

        const cursor = collection.find(null, {
            sort: {
                $vector: data[0]?.embedding,
            },
            limit: 5
        })
        const documents = await cursor.toArray()
        console.log(documents)
    }
    catch (e){
        throw e
    }
}

Visual Studio Code
Explorer
Open Editors
app
api
chat
route.ts
layout.tsx
scripts
loadDB.ts
sample_data.json
package.json
.env
tsconfig.json

layout.tsx
import "./global.css"

export const metadata = {
    title: "StarGPT",
    description: "The place to go for all you Star Wars questions."
}

export default function RouteLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}


Visual Studio Code
Explorer
Open Editors
app
api
chat
page.tsx
route.ts
layout.tsx
scripts
loadDB.ts
sample_data.json
package.json
.env
tsconfig.json

page.tsx
"use-client"

const Home () => {

}

export default Home

Visual Studio Code
Explorer
Open Editors
app
api
chat
page.tsx
route.ts
layout.tsx
scripts
loadDB.ts
sample_data.json
package.json
.env
tsconfig.json

layout.tsx
import "./global.css"

export const metadata = {
    title: "StarGPT",
    description: "The place to go for all you Star Wars questions."
}

const RouteLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}

export default RootLayout

Visual Studio Code
Explorer
Open Editors
app
api
chat
page.tsx
route.ts
layout.tsx
scripts
loadDB.ts
sample_data.json
package.json
.env
tsconfig.json

page.tsx
"use-client"
import Image from "next/image"

const Home () => {
    return (
        <main>
            <Image src={}/>
        </main>
    )
}

export default Home

Visual Studio Code
Explorer
Open Editors
app
api
chat
assets
star-wallpaper.jpg
Star_Wars_Logo.svg.png
page.tsx
route.ts
layout.tsx
scripts
loadDB.ts
sample_data.json
package.json
.env
tsconfig.json

page.tsx
"use-client"
import Image from "next/image"
import starwarsGPTLogo from "./assets/Star_Wars_Logo.svg.png"

const Home () => {
    return (
        <main>
            <Image src={starwarsGPTLogo} height="75" alt="StarGPT Logo"/>
        </main>
    )
}

export default Home

Visual Studio Code
Terminal
npm run dev

localhost:3000

STARGPT

Visual Studio Code
Explorer
Open Editors
app
api
chat
assets
star-wallpaper.jpg
Star_Wars_Logo.svg.png
page.tsx
route.ts
layout.tsx
scripts
loadDB.ts
sample_data.json
package.json
.env
tsconfig.json

page.tsx
"use-client"
import Image from "next/image"
import starwarsGPTLogo from "./assets/Star_Wars_Logo.svg.png"
import { useChat } from "ai/react"

const Home () => {
    const {append, isLoading, messages, input, handleInputChange, handleSubmit } = useChat()

    const noMessages = !messages || messages.lenght === 0
    return (
        <main>
            <Image src={starwarsGPTLogo} height="75" alt="StarGPT Logo"/>
            <section>
                {noMessages? (
                    <>
                        <p>The Ultimate place for Star Wars super fans!
                            Ask StarGPT anything about the fantastic topic of Star Wars
                            and it will come back with the most up-to-date answers.
                            We hope you enjoy!
                        </p>
                        <br/>
                        {/*<PromptSuggestionRow/>*/}
                    </>
                ) : (
                    <>
                        {/*// Show the messages here*/} 
                        {/*<LoadingBubble/>*/}
                    </>
                )}
            </section>
            <form onSubmit={handleSubmit}>
                <input onChange={handleInputChange} value={input} placeholder="Ask me something..."/>
                <input type="submit"/>
            </form>
        </main>
    )
}

export default Home

Visual Studio Code
Explorer
Open Editors
app
api
chat
assets
star-wallpaper.jpg
Star_Wars_Logo.svg.png
global.css
page.tsx
route.ts
layout.tsx
scripts
loadDB.ts
sample_data.json
package.json
.env
tsconfig.json

global.css
* {
    font-family: Verdana, Tahoma, sans-serif;
}

body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url("assets/star-wallpaper.jpg");
}

main {
    width: 80vw;
    height: 80vh;
    background: linear-gradient(to bottom, #f8f8f8, #cfcfcf);
    border-radius: 15px;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    color: #383838;
}

section {
    width: 100%;
    
}

Visual Studio Code
Explorer
Open Editors
app
api
chat
assets
star-wallpaper.jpg
Star_Wars_Logo.svg.png
global.css
page.tsx
route.ts
layout.tsx
scripts
loadDB.ts
sample_data.json
package.json
.env
tsconfig.json

page.tsx
"use-client"
import Image from "next/image"
import starwarsGPTLogo from "./assets/Star_Wars_Logo.svg.png"
import { useChat } from "ai/react"

const Home () => {
    const {append, isLoading, messages, input, handleInputChange, handleSubmit } = useChat()

    const noMessages = !messages || messages.lenght === 0
    return (
        <main>
            <Image src={starwarsGPTLogo} height="75" alt="StarGPT Logo"/>
            <section className={noMessages ? "" : "populated"}>
                {noMessages? (
                    <>
                        <p>The Ultimate place for Star Wars super fans!
                            Ask StarGPT anything about the fantastic topic of Star Wars
                            and it will come back with the most up-to-date answers.
                            We hope you enjoy!
                        </p>
                        <br/>
                        {/*<PromptSuggestionRow/>*/}
                    </>
                ) : (
                    <>
                        {/*// Show the messages here*/} 
                        {/*<LoadingBubble/>*/}
                    </>
                )}
            </section>
            <form onSubmit={handleSubmit}>
                <input onChange={handleInputChange} value={input} placeholder="Ask me something..."/>
                <input type="submit"/>
            </form>
        </main>
    )
}

export default Home

Visual Studio Code
Explorer
Open Editors
app
api
chat
assets
star-wallpaper.jpg
Star_Wars_Logo.svg.png
global.css
page.tsx
route.ts
layout.tsx
scripts
loadDB.ts
sample_data.json
package.json
.env
tsconfig.json

global.css
* {
    font-family: Verdana, Tahoma, sans-serif;
}

body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url("assets/star-wallpaper.jpg");
}

main {
    width: 80vw;
    height: 80vh;
    background: linear-gradient(to bottom, #f8f8f8, #cfcfcf);
    border-radius: 15px;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    color: #383838;
}

section {
    width: 100%;
}

section.populated {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: scroll;
}

Visual Studio Code
Explorer
Open Editors
app
api
chat
assets
star-wallpaper.jpg
Star_Wars_Logo.svg.png
global.css
page.tsx
route.ts
layout.tsx
scripts
loadDB.ts
sample_data.json
package.json
.env
tsconfig.json

page.tsx
"use-client"
import Image from "next/image"
import starwarsGPTLogo from "./assets/Star_Wars_Logo.svg.png"
import { useChat } from "ai/react"

const Home () => {
    const {append, isLoading, messages, input, handleInputChange, handleSubmit } = useChat()

    const noMessages = !messages || messages.lenght === 0
    return (
        <main>
            <Image src={starwarsGPTLogo} height="75" alt="StarGPT Logo"/>
            <section className={noMessages ? "" : "populated"}>
                {noMessages? (
                    <>
                        <p className="starter-text">The Ultimate place for Star Wars super fans!
                            Ask StarGPT anything about the fantastic topic of Star Wars
                            and it will come back with the most up-to-date answers.
                            We hope you enjoy!
                        </p>
                        <br/>
                        {/*<PromptSuggestionRow/>*/}
                    </>
                ) : (
                    <>
                        {/*// Show the messages here*/} 
                        {/*<LoadingBubble/>*/}
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

Visual Studio Code
Explorer
Open Editors
app
api
chat
assets
star-wallpaper.jpg
Star_Wars_Logo.svg.png
global.css
page.tsx
route.ts
layout.tsx
scripts
loadDB.ts
sample_data.json
package.json
.env
tsconfig.json

global.css
* {
    font-family: Verdana, Tahoma, sans-serif;
}

body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url("assets/star-wallpaper.jpg");
}

main {
    width: 80vw;
    height: 80vh;
    background: linear-gradient(to bottom, #f8f8f8, #cfcfcf);
    border-radius: 15px;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    color: #383838;
}

section {
    width: 100%;
}

section.populated {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: scroll;
}

.starter-text {
    padding: 0 80px;
}

form {
    height: 50px;
    width: 100%;
    display: flex;
    border-top: #828282 solid 20px;
    padding-top: 20px;
    border-radius: 0 0 10px 10px;
    overflow: hidden;
}

input.question-box {
    width: 85%;
    padding: 10%;
    font-size: 15px;
    color: #383838;
    border: none;
}

input[type=submit] {
    width: 15%;
    padding: 10px;
    border: none;
    color: #fff;
    background-color: #a92525;
    font-size: 15px;
}

input:focus {
    outline: none;
}

Visual Studio Code
Explorer
Open Editors
app
api
chat
assets
star-wallpaper.jpg
Star_Wars_Logo.svg.png
global.css
page.tsx
route.ts
components
LoadingBubble.tsx
layout.tsx
scripts
loadDB.ts
sample_data.json
package.json
.env
tsconfig.json

LoadingBubble.tsx
const LoadingBubble = () => {
    return (
        <div className="Loader"></div>
    )
}

export default LoadingBubble

Visual Studio Code
Explorer
Open Editors
app
api
chat
assets
star-wallpaper.jpg
Star_Wars_Logo.svg.png
global.css
page.tsx
route.ts
components
LoadingBubble.tsx
layout.tsx
scripts
loadDB.ts
sample_data.json
package.json
.env
tsconfig.json

page.tsx
"use-client"
import Image from "next/image"
import starwarsGPTLogo from "./assets/Star_Wars_Logo.svg.png"
import { useChat } from "ai/react"
import LoadingBubble from "@/app/components/LoadingBubble"

const Home () => {
    const {append, isLoading, messages, input, handleInputChange, handleSubmit } = useChat()

    const noMessages = !messages || messages.lenght === 0
    return (
        <main>
            <Image src={starwarsGPTLogo} height="75" alt="StarGPT Logo"/>
            <section className={noMessages ? "" : "populated"}>
                {noMessages? (
                    <>
                        <p className="starter-text">The Ultimate place for Star Wars super fans!
                            Ask StarGPT anything about the fantastic topic of Star Wars
                            and it will come back with the most up-to-date answers.
                            We hope you enjoy!
                        </p>
                        <br/>
                        {/*<PromptSuggestionRow/>*/}
                    </>
                ) : (
                    <>
                        {/*// Show the messages here*/} 
                        <LoadingBubble/>
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

Visual Studio Code
Explorer
Open Editors
app
api
chat
assets
star-wallpaper.jpg
Star_Wars_Logo.svg.png
global.css
page.tsx
route.ts
components
LoadingBubble.tsx
layout.tsx
scripts
loadDB.ts
sample_data.json
package.json
.env
tsconfig.json

global.css
* {
    font-family: Verdana, Tahoma, sans-serif;
}

body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url("assets/star-wallpaper.jpg");
}

main {
    width: 80vw;
    height: 80vh;
    background: linear-gradient(to bottom, #f8f8f8, #cfcfcf);
    border-radius: 15px;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    color: #383838;
}

section {
    width: 100%;
}

section.populated {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: scroll;
}

.starter-text {
    padding: 0 80px;
}

form {
    height: 50px;
    width: 100%;
    display: flex;
    border-top: #828282 solid 20px;
    padding-top: 20px;
    border-radius: 0 0 10px 10px;
    overflow: hidden;
}

input.question-box {
    width: 85%;
    padding: 10%;
    font-size: 15px;
    color: #383838;
    border: none;
}

input[type=submit] {
    width: 15%;
    padding: 10px;
    border: none;
    color: #fff;
    background-color: #a92525;
    font-size: 15px;
}

input:focus {
    outline: none;
}

.loader {
    margin: 10px;
    width: 60px;
    aspect-ratio: 4;
    background:
        no-repeat radial-gradient(circle closest-side #383838 90%, #0000) 0% 50%,
        no-repeat radial-gradient(circle closest-side #383838 90%, #0000) 50% 50%,
        no-repeat radial-gradient(circle closest-side #383838 90%, #0000) 100% 50%;
    background-size: calc(100%/ 3) 100%;
    animation: loading 1s infinite linear;
}

@keyframes loading {
    33%{ background-size: calc(100%/3) 0%, calc(100%/3) 100%, calc(100%/3) 100%}
    50%{ background-size: calc(100%/3) 100%, calc(100%/3) 0%, calc(100%/3) 100%}
    66%{ background-size: calc(100%/3) 100%, calc(100%/3) 100%, calc(100%/3) 0%}
}


Visual Studio Code
Explorer
Open Editors
app
api
chat
assets
star-wallpaper.jpg
Star_Wars_Logo.svg.png
global.css
page.tsx
route.ts
components
LoadingBubble.tsx
PromptSuggestionRow.tsx
layout.tsx
scripts
loadDB.ts
sample_data.json
package.json
.env
tsconfig.json

PromptSuggestionRow.tsx
const PromptSuggestionRow = () => {
    return (
        
    )
}

export default PromptSuggestionRow

Visual Studio Code
Explorer
Open Editors
app
api
chat
assets
star-wallpaper.jpg
Star_Wars_Logo.svg.png
global.css
page.tsx
route.ts
components
LoadingBubble.tsx
PromptSuggestionRow.tsx
PromptSuggestion.tsx
layout.tsx
scripts
loadDB.ts
sample_data.json
package.json
.env
tsconfig.json

PromptSuggestion.tsx
const PromptSuggestion = () => {
    return (
        <div></div>
    )
}

export default PromptSuggestion

Visual Studio Code
Explorer
Open Editors
app
api
chat
assets
star-wallpaper.jpg
Star_Wars_Logo.svg.png
global.css
page.tsx
route.ts
components
LoadingBubble.tsx
PromptSuggestionRow.tsx
PromptSuggestion.tsx
layout.tsx
scripts
loadDB.ts
sample_data.json
package.json
.env
tsconfig.json

PromptSuggestionRow.tsx
import PromptSuggestion from "./PromptSuggestion"

const PromptSuggestionRow = () => {
    const prompts = [
        "Who was Luke Skywalker",
        "What is Tatooine?",
        "Who is Esmeraldoo?"
    ]

    return (
        <div className="prompt-suggestion-row">
            {prompts.map((prompt, _index) => (
                <PromptSuggestion key={_index} text={prompt}/>
            ))}
        </div>
    )
}

export default PromptSuggestionRow

Visual Studio Code
Explorer
Open Editors
app
api
chat
assets
star-wallpaper.jpg
Star_Wars_Logo.svg.png
global.css
page.tsx
route.ts
components
LoadingBubble.tsx
PromptSuggestionRow.tsx
PromptSuggestion.tsx
layout.tsx
scripts
loadDB.ts
sample_data.json
package.json
.env
tsconfig.json

PromptSuggestion.tsx
const PromptSuggestion = ({ text }) => {
    return (
        <div></div>
    )
}

export default PromptSuggestion

Visual Studio Code
Explorer
Open Editors
app
api
chat
assets
star-wallpaper.jpg
Star_Wars_Logo.svg.png
global.css
page.tsx
route.ts
components
LoadingBubble.tsx
PromptSuggestionRow.tsx
PromptSuggestion.tsx
layout.tsx
scripts
loadDB.ts
sample_data.json
package.json
.env
tsconfig.json

PromptSuggestionRow.tsx
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
                <PromptSuggestion key={_index} text={prompt} onClick={onPromptClick(prompt)}/>
            ))}
        </div>
    )
}

export default PromptSuggestionRow

Visual Studio Code
Explorer
Open Editors
app
api
chat
assets
star-wallpaper.jpg
Star_Wars_Logo.svg.png
global.css
page.tsx
route.ts
components
LoadingBubble.tsx
PromptSuggestionRow.tsx
PromptSuggestion.tsx
layout.tsx
scripts
loadDB.ts
sample_data.json
package.json
.env
tsconfig.json

page.tsx
"use-client"
import Image from "next/image"
import starwarsGPTLogo from "./assets/Star_Wars_Logo.svg.png"
import { useChat } from "ai/react"
import LoadingBubble from "@/app/components/LoadingBubble"
import PromptSuggestionRow from "@/app/components/PromptSuggestionRow"
import { Message } from "ai"

const Home () => {
    const {append, isLoading, messages, input, handleInputChange, handleSubmit } = useChat()

    const noMessages = !messages || messages.lenght === 0

    const onPromptClick = (prompt) => {
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
                            We hope you enjoy!
                        </p>
                        <br/>
                        <PromptSuggestionRow onPromptClick={onPromptClick}/>
                    </>
                ) : (
                    <>
                        {/*// Show the messages here*/} 
                        <LoadingBubble/>
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

Visual Studio Code
Explorer
Open Editors
app
api
chat
assets
star-wallpaper.jpg
Star_Wars_Logo.svg.png
global.css
page.tsx
route.ts
components
LoadingBubble.tsx
PromptSuggestionRow.tsx
PromptSuggestion.tsx
layout.tsx
scripts
loadDB.ts
sample_data.json
package.json
.env
tsconfig.json

PromptSuggestionRow.tsx
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
                // @ts-ignore
                <PromptSuggestion key={_index} text={prompt} onClick={() => onPromptClick(prompt)}/>
            ))}
        </div>
    )
}

export default PromptSuggestionRow

Visual Studio Code
Explorer
Open Editors
app
api
chat
assets
star-wallpaper.jpg
Star_Wars_Logo.svg.png
global.css
page.tsx
route.ts
components
LoadingBubble.tsx
PromptSuggestionRow.tsx
PromptSuggestion.tsx
layout.tsx
scripts
loadDB.ts
sample_data.json
package.json
.env
tsconfig.json

page.tsx
"use-client"
import Image from "next/image"
import starwarsGPTLogo from "./assets/Star_Wars_Logo.svg.png"
import { useChat } from "ai/react"
import LoadingBubble from "@/app/components/LoadingBubble"
import PromptSuggestionRow from "@/app/components/PromptSuggestionRow"
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
                            We hope you enjoy!
                        </p>
                        <br/>
                        <PromptSuggestionRow onPromptClick={onPromptClick}/>
                    </>
                ) : (
                    <>
                        {/*// Show the messages here*/} 
                        <LoadingBubble/>
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

Visual Studio Code
Explorer
Open Editors
app
api
chat
assets
star-wallpaper.jpg
Star_Wars_Logo.svg.png
global.css
page.tsx
route.ts
components
LoadingBubble.tsx
PromptSuggestionRow.tsx
PromptSuggestion.tsx
layout.tsx
scripts
loadDB.ts
sample_data.json
package.json
.env
tsconfig.json

PromptSuggestion.tsx
const PromptSuggestion = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className="prompt-suggestion-button">
            {text}
        </button>
    )
}

export default PromptSuggestion

Visual Studio Code
Explorer
Open Editors
app
api
chat
assets
star-wallpaper.jpg
Star_Wars_Logo.svg.png
global.css
page.tsx
route.ts
components
LoadingBubble.tsx
PromptSuggestionRow.tsx
PromptSuggestion.tsx
layout.tsx
scripts
loadDB.ts
sample_data.json
package.json
.env
tsconfig.json

global.css
* {
    font-family: Verdana, Tahoma, sans-serif;
}

body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url("assets/star-wallpaper.jpg");
}

main {
    width: 80vw;
    height: 80vh;
    background: linear-gradient(to bottom, #f8f8f8, #cfcfcf);
    border-radius: 15px;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    color: #383838;
}

section {
    width: 100%;
}

section.populated {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: scroll;
}

.starter-text {
    padding: 0 80px;
}

form {
    height: 50px;
    width: 100%;
    display: flex;
    border-top: #828282 solid 20px;
    padding-top: 20px;
    border-radius: 0 0 10px 10px;
    overflow: hidden;
}

input.question-box {
    width: 85%;
    padding: 10%;
    font-size: 15px;
    color: #383838;
    border: none;
}

input[type=submit] {
    width: 15%;
    padding: 10px;
    border: none;
    color: #fff;
    background-color: #a92525;
    font-size: 15px;
}

input:focus {
    outline: none;
}

.loader {
    margin: 10px;
    width: 60px;
    aspect-ratio: 4;
    background:
        no-repeat radial-gradient(circle closest-side #383838 90%, #0000) 0% 50%,
        no-repeat radial-gradient(circle closest-side #383838 90%, #0000) 50% 50%,
        no-repeat radial-gradient(circle closest-side #383838 90%, #0000) 100% 50%;
    background-size: calc(100%/ 3) 100%;
    animation: loading 1s infinite linear;
}

@keyframes loading {
    33%{ background-size: calc(100%/3) 0%, calc(100%/3) 100%, calc(100%/3) 100%}
    50%{ background-size: calc(100%/3) 100%, calc(100%/3) 0%, calc(100%/3) 100%}
    66%{ background-size: calc(100%/3) 100%, calc(100%/3) 100%, calc(100%/3) 0%}
}

.prompt-suggestion-button {
    margin: 8px;
    padding: 8px;
    font-size: 15px;
    border: none;
    background-color: fff;
    border-radius: 10px;
    color: #383838;
    box-shadow: #959da533 0 8px 24px;
}

Visual Studio Code
Explorer
Open Editors
app
api
chat
assets
star-wallpaper.jpg
Star_Wars_Logo.svg.png
global.css
page.tsx
route.ts
components
LoadingBubble.tsx
PromptSuggestionRow.tsx
PromptSuggestion.tsx
layout.tsx
scripts
loadDB.ts
sample_data.json
package.json
.env
tsconfig.json

page.tsx
"use-client"
import Image from "next/image"
import starwarsGPTLogo from "./assets/Star_Wars_Logo.svg.png"
import { useChat } from "ai/react"
import LoadingBubble from "@/app/components/LoadingBubble"
import PromptSuggestionRow from "@/app/components/PromptSuggestionRow"
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
                        {/*// Show the messages here*/} 
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

Visual Studio Code
Explorer
Open Editors
app
api
chat
assets
star-wallpaper.jpg
Star_Wars_Logo.svg.png
global.css
page.tsx
route.ts
components
LoadingBubble.tsx
PromptSuggestionRow.tsx
PromptSuggestion.tsx
layout.tsx
scripts
loadDB.ts
sample_data.json
package.json
.env
tsconfig.json

route.ts
import OpenAI from "openai"
import { OpenAIStream, StreamingTextResponse } from "ai"
import { DataAPIClient } from "@datastax/astra-db-ts"

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

const client = new DataAPIClient(process.env.ASTRA_DB_APPLICATION_TOKEN)
const db = client.db(process.env.ASTRA_DB_API_ENDPOINT, { 
    namespace: process.env.ASTRA_DB_NAMESPACE 
})

export async function POST(req: Request) {
    try {
        const { messages } = await req.json()
        const latestMenssage = messages[messages?.lenght -1]?.content
        let docContext = ''
        const { data } = await openai.embeddings.create({ 
            input: latestMenssage, model: 'text-embedding-ada-002'
        })
        const collection = await db.collection('characters')

        const cursor = collection.find(null, {
            sort: {
                $vector: data[0]?.embedding,
            },
            limit: 5
        })
        const documents = await cursor.toArray()
        docContext = `
        START CONTEXT
        ${documents?.map(doc => doc.description).join('\n')}
        END CONTEXT
        `
        const ragPrompt = [
            {
                role: "system",
                content: `You are an AI assistant answering questions about Star Wars. 
                Format responses using markdownthat where applicable.
                ${docContext}
                If the answer is not provided in the context, the AI assistant will say, 
                "I'am sorry, I do not know the answer".
                `
            }
        ]

        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            stream: true,
            messages: [...ragPrompt,...messages]
        })
        const stream = OpenAIStream(response)
        return new StreamingTextResponse(stream)
    }
    catch (e){
        throw e
    }
}

Visual Studio Code
Explorer
Open Editors
app
api
chat
assets
star-wallpaper.jpg
Star_Wars_Logo.svg.png
global.css
page.tsx
route.ts
components
Bubble.tsx
LoadingBubble.tsx
PromptSuggestionRow.tsx
PromptSuggestion.tsx
layout.tsx
scripts
loadDB.ts
sample_data.json
package.json
.env
tsconfig.json

Bubble.tsx
const Bubble = ({ message }) => {
    return (
        <div className={`{}`}>{content}</div>
    )
}

export default Bubble

Visual Studio Code
Explorer
Open Editors
app
api
chat
assets
star-wallpaper.jpg
Star_Wars_Logo.svg.png
global.css
page.tsx
route.ts
components
Bubble.tsx
LoadingBubble.tsx
PromptSuggestionRow.tsx
PromptSuggestion.tsx
layout.tsx
scripts
loadDB.ts
sample_data.json
package.json
.env
tsconfig.json

global.css
* {
    font-family: Verdana, Tahoma, sans-serif;
}

body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url("assets/star-wallpaper.jpg");
}

main {
    width: 80vw;
    height: 80vh;
    background: linear-gradient(to bottom, #f8f8f8, #cfcfcf);
    border-radius: 15px;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    color: #383838;
}

section {
    width: 100%;
}

section.populated {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: scroll;
}

.starter-text {
    padding: 0 80px;
}

form {
    height: 50px;
    width: 100%;
    display: flex;
    border-top: #828282 solid 20px;
    padding-top: 20px;
    border-radius: 0 0 10px 10px;
    overflow: hidden;
}

input.question-box {
    width: 85%;
    padding: 10%;
    font-size: 15px;
    color: #383838;
    border: none;
}

input[type=submit] {
    width: 15%;
    padding: 10px;
    border: none;
    color: #fff;
    background-color: #a92525;
    font-size: 15px;
}

input:focus {
    outline: none;
}

.loader {
    margin: 10px;
    width: 60px;
    aspect-ratio: 4;
    background:
        no-repeat radial-gradient(circle closest-side #383838 90%, #0000) 0% 50%,
        no-repeat radial-gradient(circle closest-side #383838 90%, #0000) 50% 50%,
        no-repeat radial-gradient(circle closest-side #383838 90%, #0000) 100% 50%;
    background-size: calc(100%/ 3) 100%;
    animation: loading 1s infinite linear;
}

@keyframes loading {
    33%{ background-size: calc(100%/3) 0%, calc(100%/3) 100%, calc(100%/3) 100%}
    50%{ background-size: calc(100%/3) 100%, calc(100%/3) 0%, calc(100%/3) 100%}
    66%{ background-size: calc(100%/3) 100%, calc(100%/3) 100%, calc(100%/3) 0%}
}

.prompt-suggestion-button {
    margin: 8px;
    padding: 8px;
    font-size: 15px;
    border: none;
    background-color: fff;
    border-radius: 10px;
    color: #383838;
    box-shadow: #959da533 0 8px 24px;
}

.bubble.user {
    border-radius: 20px 20px 0 20px;
    background-color: #e1f4ff;
    margin-left: auto;
}

.bubble.assistant {
    border-radius: 20px 20px 20px 0;
    background-color: #dce7ff;
}

Visual Studio Code
Explorer
Open Editors
app
api
chat
assets
star-wallpaper.jpg
Star_Wars_Logo.svg.png
global.css
page.tsx
route.ts
components
Bubble.tsx
LoadingBubble.tsx
PromptSuggestionRow.tsx
PromptSuggestion.tsx
layout.tsx
scripts
loadDB.ts
sample_data.json
package.json
.env
tsconfig.json

Bubble.tsx
const Bubble = ({ message }) => {
    const { role, content } = message
    return (
        <div className={`${role} bubble`}>{content}</div>
    )
}

export default Bubble

Visual Studio Code
Explorer
Open Editors
app
api
chat
assets
star-wallpaper.jpg
Star_Wars_Logo.svg.png
global.css
page.tsx
route.ts
components
Bubble.tsx
LoadingBubble.tsx
PromptSuggestionRow.tsx
PromptSuggestion.tsx
layout.tsx
scripts
loadDB.ts
sample_data.json
package.json
.env
tsconfig.json

page.tsx
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


Visual Studio Code
Explorer
Open Editors
app
api
chat
assets
star-wallpaper.jpg
Star_Wars_Logo.svg.png
global.css
page.tsx
route.ts
components
Bubble.tsx
LoadingBubble.tsx
PromptSuggestionRow.tsx
PromptSuggestion.tsx
layout.tsx
scripts
loadDB.ts
sample_data.json
package.json
.env
tsconfig.json

global.css
* {
    font-family: Verdana, Tahoma, sans-serif;
}

body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url("assets/star-wallpaper.jpg");
}

main {
    width: 80vw;
    height: 80vh;
    background: linear-gradient(to bottom, #f8f8f8, #cfcfcf);
    border-radius: 15px;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    color: #383838;
}

section {
    width: 100%;
}

section.populated {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: scroll;
}

.starter-text {
    padding: 0 80px;
}

form {
    height: 50px;
    width: 100%;
    display: flex;
    border-top: #828282 solid 20px;
    padding-top: 20px;
    border-radius: 0 0 10px 10px;
    overflow: hidden;
}

input.question-box {
    width: 85%;
    padding: 10%;
    font-size: 15px;
    color: #383838;
    border: none;
}

input[type=submit] {
    width: 15%;
    padding: 10px;
    border: none;
    color: #fff;
    background-color: #a92525;
    font-size: 15px;
}

input:focus {
    outline: none;
}

.loader {
    margin: 10px;
    width: 60px;
    aspect-ratio: 4;
    background:
        no-repeat radial-gradient(circle closest-side #383838 90%, #0000) 0% 50%,
        no-repeat radial-gradient(circle closest-side #383838 90%, #0000) 50% 50%,
        no-repeat radial-gradient(circle closest-side #383838 90%, #0000) 100% 50%;
    background-size: calc(100%/ 3) 100%;
    animation: loading 1s infinite linear;
}

@keyframes loading {
    33%{ background-size: calc(100%/3) 0%, calc(100%/3) 100%, calc(100%/3) 100%}
    50%{ background-size: calc(100%/3) 100%, calc(100%/3) 0%, calc(100%/3) 100%}
    66%{ background-size: calc(100%/3) 100%, calc(100%/3) 100%, calc(100%/3) 0%}
}

.prompt-suggestion-button {
    margin: 8px;
    padding: 8px;
    font-size: 15px;
    border: none;
    background-color: fff;
    border-radius: 10px;
    color: #383838;
    box-shadow: #959da533 0 8px 24px;
}

.bubble {
    margin: 8px;
    padding: 8px;
    font-size: 15px;
    border: none;
    color: #383838;
    box-shadow: #959da533 0 8px 24px;
    width: 80%;
    text-align: left;
}

.bubble.user {
    border-radius: 20px 20px 0 20px;
    background-color: #e1f4ff;
    margin-left: auto;
}

.bubble.assistant {
    border-radius: 20px 20px 20px 0;
    background-color: #dce7ff;
}









































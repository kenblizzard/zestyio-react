import axios from "axios"
import { useEffect, useState } from "react"
import sanitizeHtml from "sanitize-html"

const Home = () => {
    const [platformSections, setPlatformSections] = useState(null)
    useEffect(() => {
        getPlatformSections()
    }, [])

    const getPlatformSections = () => {
        axios.get('https://www.zesty.io/-/gql/platform_section.json')
            .then(({ data }) => {
                setPlatformSections(data)
            })
    }

    return (
        <>
            {
                platformSections && platformSections.map(({title, text_content}, index) => (
                    <div style={{margin: '40px 0'}} key={`content_${index}`}>
                        <h1>{title}</h1>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: sanitizeHtml(String(text_content || ""))
                            }}
                        />
                    </div>
                ))
            }
        </>
    )
}

export default Home
import axios from "axios"
import { get } from "lodash"
import { useEffect, useState } from "react"
import sanitizeHtml from "sanitize-html"

const About = () => {
    const [aboutData, setAboutData] = useState(null)
    useEffect(() => {
            getAboutData()
    }, [])

    const getAboutData = () => {
        axios.get('https://www.zesty.io/-/instant/7-e93178-vqvclg.json')
            .then(({ data }) => {
                setAboutData(get(data, `data[0].content.page_content`))
            })
    }
    return (
        <div dangerouslySetInnerHTML={{__html: sanitizeHtml(String(aboutData))}} />
           
    )
}

export default About
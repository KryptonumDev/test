import { graphql } from "gatsby"
import * as React from "react"

const IndexPage = ({ data: { wpPage } }) => {
    return (
        <main>
            {wpPage.content}
        </main>
    )
}

export const query = graphql`
  query MyQuery {
    wpPage {
        content
    }
  }
`

export default IndexPage

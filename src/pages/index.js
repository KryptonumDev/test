import { graphql } from "gatsby"
import * as React from "react"

const IndexPage = ({ data: { wpPage } }) => {
    if (!wpPage) {
        return null
    }
    return (
        <main>
            {wpPage.content}
            <br />
            {wpPage.homepage.heroHome.title}
        </main>
    )
}

export const query = graphql`
  query MyQuery {
    wpPage(homepage: {heroHome: {title: {ne: null}}}) {
        content
      homepage {
        heroHome {
          title
        }
      }
    }
  }
`

export default IndexPage

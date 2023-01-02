import { graphql } from "gatsby"
import * as React from "react"

const IndexPage = ({ data: { wpPage } }) => {
  return (
    <main>
      {wpPage.homepage.heroHome.title}
    </main>
  )
}

export const query = graphql`
  query MyQuery {
    wpPage(homepage: {heroHome: {title: {ne: null}}}) {
      homepage {
        heroHome {
          title
        }
      }
    }
  }
`

export default IndexPage

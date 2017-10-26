import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'
import Link from './link'

class LinkList extends Component {

  render() {

      if (this.props.allLinksQuery && this.props.allLinksQuery.loading) {
        return <div>Loading</div>
      }

      if (this.props.allLinksQuery && this.props.allLinksQuery.error) {
        return <div>Error</div>
      }

      const linksToRender = this.props.allLinksQuery.allLinks

      return (
        <div>
          {linksToRender.map(link => (
            <Link key={link.id} link={link}/>
          ))}
        </div>
      )
  }

}

// export default LinkList

/* -----------------------------------------------------------
1. write the query as a JS constant using the gql parser function
2. use the graphql container to wrap your component with the query
3. access the query results in the component’s props
-------------------------------------------------- */

const ALL_LINKS_QUERY = gql`
  #2
  query AllLinksQuery {
    allLinks {
      id
      createdAt
      url
      description
    }
  }
`

export default graphql(ALL_LINKS_QUERY, { name: 'allLinksQuery' })(LinkList)

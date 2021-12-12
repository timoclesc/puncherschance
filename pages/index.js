import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import SectionSeparator from 'components/section-separator'
import Avatar from 'components/avatar'

export default function Index({ preview, allPosts, allAuthors }) {
  const heroPost = allPosts[0].node
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout preview={preview}>
        <Container>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost._meta.uid}
              excerpt={heroPost.excerpt}
              seasonnumber={heroPost.seasonnumber}
              episodenumber={heroPost.episodenumber}
              applelink={heroPost.applelink}
              spotifylink={heroPost.spotifylink}
            />
          )}
          <SectionSeparator />
          {allAuthors.map(
            ({node: author}) => <Avatar name={author.name} picture={author.picture} />
          )}
          <SectionSeparator />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false, previewData }) {
  const data = await getAllPostsForHome(previewData)
  const allPosts = data.allPosts.edges
  const allAuthors = data.allAuthors.edges
  return {
    props: { preview, allPosts, allAuthors }
  }
}

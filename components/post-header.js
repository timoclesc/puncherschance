import { RichText } from 'prismic-reactjs'
import Date from '../components/date'
import PostTitle from '../components/post-title'
import ContentContainer from '../components/content-container'

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <ContentContainer>
        <PostTitle>{title[0].text}</PostTitle>
        <div className="mb-6 text-lg">
          <Date dateString={date} />
        </div>
      </ContentContainer>
    </>
  )
}

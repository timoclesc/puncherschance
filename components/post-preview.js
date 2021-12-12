import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import Date from '../components/date'
import EpisodeSeason from '../components/episode-season'

export default function PostPreview({
  title,
  date,
  excerpt,
  slug,
  episodenumber,
  seasonnumber
}) {
  return (
    <div className="flex flex-col">
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`}>
          <a className="hover:underline">
            <RichText render={title} />
          </a>
        </Link>
      </h3>
      <div className="order-first">
        <EpisodeSeason episode={episodenumber} season={seasonnumber}/>
      </div>
      <div className="text-lg mb-4">
        <Date dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  )
}

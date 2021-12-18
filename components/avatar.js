import Image from 'next/image'
import IconLinks from 'components/icon-links'

export default function Avatar({ author }) {
  var {name, picture, bio, instagram} = author
  return (
    <div className="flex items-center">
      <div className="w-36 h-36 grow-0 shrink-0 relative mr-6">
        <Image
          src={picture.url}
          layout="fill"
          className="rounded-full"
          alt={name[0].text}
        />
      </div>
      <div>
        <h4 className="text-xl font-bold">{name}</h4>
        <IconLinks instagramLink={instagram} />
      </div>
    </div>
  )
}

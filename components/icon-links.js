import SpotifyIcon from './svg/spotify.svg'
import AppleStoreIcon from './svg/apple-store.svg'
import Icon from './icon'

export default function IconLinks({ spotifyLink, appleLink }) {
  const iconSize = "w-12";
  const margins = "mr-4"
  return (
    <div className="flex flex-col">
      {spotifyLink &&
        <a href={spotifyLink.url} target="_blank" rel="noreferrer" className="flex items-center">
          <Icon size={iconSize} margins={margins}>
            <SpotifyIcon />
          </Icon>
          Listen on Spotify
        </a>}
      {appleLink &&
        <a href={appleLink.url} target="_blank" rel="noreferrer" className="flex items-center">
          <Icon size={iconSize} margins={margins}>
            <AppleStoreIcon />
          </Icon>
          Listen on App Store
        </a>}
    </div>
  )
}

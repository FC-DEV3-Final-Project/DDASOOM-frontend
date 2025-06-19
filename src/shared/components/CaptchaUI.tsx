import Turnstile from 'react-cloudflare-turnstile'

interface Props {
  setCaptchaToken: (token: string) => void
}

const CaptchaUI = ({ setCaptchaToken }: Props) => {
  return (
    <Turnstile
      turnstileSiteKey="1x00000000000000000000AA"
      callback={(token: string) => setCaptchaToken(token)}
    />
  )
}
export default CaptchaUI

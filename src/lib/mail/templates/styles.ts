export const fontFamily =
  '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'

export const main = {
  backgroundColor: '#ffffff',
  color: '#000000',
}

export const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
}

export const paragraph = {
  fontFamily,
  fontSize: '16px',
  lineHeight: '26px',
}

export const button = {
  fontFamily,
  backgroundColor: '#fff',
  color: '#000',
  border: '1px solid #000',
  fontSize: '16px',
  padding: '12px 24px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
}

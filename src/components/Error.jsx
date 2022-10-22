import IconError from './IconError'
import PropTypes from 'prop-types'

function Error ({ text }) {
  return (
    <>
      <div className='absolute right-0 top-4 hidden pr-4 peer-invalid:block'>
        <IconError />
      </div>
      <p className='mt-2 hidden text-right text-sm text-pink-600 peer-invalid:block'>
        {text}
      </p>
    </>
  )
}

export default Error

Error.propTypes = {
  text: PropTypes.string.isRequired
}

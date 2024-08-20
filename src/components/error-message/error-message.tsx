import { useAppSelector } from '../../hooks';
import './error-message.css';
import { getError } from '../../store/slices/error';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(getError);

  return error ? <div className='error-message'>{error}</div> : null;
}

export default ErrorMessage;

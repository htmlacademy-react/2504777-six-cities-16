import './error-message.css';
import { useAppSelector } from '../../hooks';
import { error } from '../../store/slices/error';

function ErrorMessage(): JSX.Element | null {
  const errorMessage = useAppSelector(error);

  return errorMessage ? <div className='error-message'>{errorMessage}</div> : null;
}

export default ErrorMessage;

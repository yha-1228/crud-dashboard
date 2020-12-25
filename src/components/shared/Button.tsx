import classnames from 'classnames';
import './Button.css';

export function Button(
  props: JSX.IntrinsicElements['button'] & { size?: string; variant?: string }
) {
  return (
    <button
      className={classnames(
        'Button',
        props.size && `Button--${props.size}`,
        props.variant && `Button--${props.variant}`
      )}
      {...props}
    />
  );
}

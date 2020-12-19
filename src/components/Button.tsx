import './Button.css';

export function Button(props: JSX.IntrinsicElements['button']) {
  return <button className="Button" {...props} />;
}

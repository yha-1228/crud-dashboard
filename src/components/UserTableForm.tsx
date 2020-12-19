type Props = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onChange: (event: React.ChangeEvent<any>) => void;
  values: { username: string; email: string };
  isSubmitting: boolean;
  submitButtonText: string;
};

export function UserTableForm({ onSubmit, onChange, values, isSubmitting, submitButtonText }: Props) {
  return (
    <form onSubmit={onSubmit} noValidate>
      <div>
        <div>
          <label htmlFor="username">username</label>
        </div>
        <div>
          <input type="text" name="username" id="username" onChange={onChange} value={values.username} />
        </div>
      </div>

      <div>
        <div>
          <label htmlFor="email">email</label>
        </div>
        <div>
          <input type="email" name="email" id="email" onChange={onChange} value={values.email} />
        </div>
      </div>

      <div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? '送信中...' : submitButtonText}
        </button>
      </div>
    </form>
  );
}

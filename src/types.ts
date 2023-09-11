export type User = {
  /**
   * ID (PK)
   */
  id: number;
  username: string;
  email: string;
  password: string;
  country: string;
  createdAt: string;
};

/**
 * Flux Standard Action
 */
export type FSA<
  Type extends string,
  Payload = undefined,
> = Payload extends undefined
  ? { type: Type; error?: boolean }
  : { type: Type; payload: Payload; error?: boolean };

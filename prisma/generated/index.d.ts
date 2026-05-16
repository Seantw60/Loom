
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model LoreNode
 * 
 */
export type LoreNode = $Result.DefaultSelection<Prisma.$LoreNodePayload>
/**
 * Model NodeRelation
 * 
 */
export type NodeRelation = $Result.DefaultSelection<Prisma.$NodeRelationPayload>
/**
 * Model Chapter
 * 
 */
export type Chapter = $Result.DefaultSelection<Prisma.$ChapterPayload>
/**
 * Model Lore
 * 
 */
export type Lore = $Result.DefaultSelection<Prisma.$LorePayload>
/**
 * Model Character
 * 
 */
export type Character = $Result.DefaultSelection<Prisma.$CharacterPayload>
/**
 * Model Monster
 * 
 */
export type Monster = $Result.DefaultSelection<Prisma.$MonsterPayload>
/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model PowerSystem
 * 
 */
export type PowerSystem = $Result.DefaultSelection<Prisma.$PowerSystemPayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loreNode`: Exposes CRUD operations for the **LoreNode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LoreNodes
    * const loreNodes = await prisma.loreNode.findMany()
    * ```
    */
  get loreNode(): Prisma.LoreNodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nodeRelation`: Exposes CRUD operations for the **NodeRelation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NodeRelations
    * const nodeRelations = await prisma.nodeRelation.findMany()
    * ```
    */
  get nodeRelation(): Prisma.NodeRelationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chapter`: Exposes CRUD operations for the **Chapter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chapters
    * const chapters = await prisma.chapter.findMany()
    * ```
    */
  get chapter(): Prisma.ChapterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lore`: Exposes CRUD operations for the **Lore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lores
    * const lores = await prisma.lore.findMany()
    * ```
    */
  get lore(): Prisma.LoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.character`: Exposes CRUD operations for the **Character** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Characters
    * const characters = await prisma.character.findMany()
    * ```
    */
  get character(): Prisma.CharacterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.monster`: Exposes CRUD operations for the **Monster** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Monsters
    * const monsters = await prisma.monster.findMany()
    * ```
    */
  get monster(): Prisma.MonsterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.powerSystem`: Exposes CRUD operations for the **PowerSystem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PowerSystems
    * const powerSystems = await prisma.powerSystem.findMany()
    * ```
    */
  get powerSystem(): Prisma.PowerSystemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    Project: 'Project',
    LoreNode: 'LoreNode',
    NodeRelation: 'NodeRelation',
    Chapter: 'Chapter',
    Lore: 'Lore',
    Character: 'Character',
    Monster: 'Monster',
    Item: 'Item',
    PowerSystem: 'PowerSystem',
    Location: 'Location'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "account" | "session" | "verificationToken" | "project" | "loreNode" | "nodeRelation" | "chapter" | "lore" | "character" | "monster" | "item" | "powerSystem" | "location"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      LoreNode: {
        payload: Prisma.$LoreNodePayload<ExtArgs>
        fields: Prisma.LoreNodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoreNodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoreNodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoreNodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoreNodePayload>
          }
          findFirst: {
            args: Prisma.LoreNodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoreNodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoreNodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoreNodePayload>
          }
          findMany: {
            args: Prisma.LoreNodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoreNodePayload>[]
          }
          create: {
            args: Prisma.LoreNodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoreNodePayload>
          }
          createMany: {
            args: Prisma.LoreNodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LoreNodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoreNodePayload>[]
          }
          delete: {
            args: Prisma.LoreNodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoreNodePayload>
          }
          update: {
            args: Prisma.LoreNodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoreNodePayload>
          }
          deleteMany: {
            args: Prisma.LoreNodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoreNodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LoreNodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoreNodePayload>[]
          }
          upsert: {
            args: Prisma.LoreNodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoreNodePayload>
          }
          aggregate: {
            args: Prisma.LoreNodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoreNode>
          }
          groupBy: {
            args: Prisma.LoreNodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoreNodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoreNodeCountArgs<ExtArgs>
            result: $Utils.Optional<LoreNodeCountAggregateOutputType> | number
          }
        }
      }
      NodeRelation: {
        payload: Prisma.$NodeRelationPayload<ExtArgs>
        fields: Prisma.NodeRelationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NodeRelationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeRelationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NodeRelationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeRelationPayload>
          }
          findFirst: {
            args: Prisma.NodeRelationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeRelationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NodeRelationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeRelationPayload>
          }
          findMany: {
            args: Prisma.NodeRelationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeRelationPayload>[]
          }
          create: {
            args: Prisma.NodeRelationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeRelationPayload>
          }
          createMany: {
            args: Prisma.NodeRelationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NodeRelationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeRelationPayload>[]
          }
          delete: {
            args: Prisma.NodeRelationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeRelationPayload>
          }
          update: {
            args: Prisma.NodeRelationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeRelationPayload>
          }
          deleteMany: {
            args: Prisma.NodeRelationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NodeRelationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NodeRelationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeRelationPayload>[]
          }
          upsert: {
            args: Prisma.NodeRelationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeRelationPayload>
          }
          aggregate: {
            args: Prisma.NodeRelationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNodeRelation>
          }
          groupBy: {
            args: Prisma.NodeRelationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NodeRelationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NodeRelationCountArgs<ExtArgs>
            result: $Utils.Optional<NodeRelationCountAggregateOutputType> | number
          }
        }
      }
      Chapter: {
        payload: Prisma.$ChapterPayload<ExtArgs>
        fields: Prisma.ChapterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChapterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChapterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          findFirst: {
            args: Prisma.ChapterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChapterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          findMany: {
            args: Prisma.ChapterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>[]
          }
          create: {
            args: Prisma.ChapterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          createMany: {
            args: Prisma.ChapterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChapterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>[]
          }
          delete: {
            args: Prisma.ChapterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          update: {
            args: Prisma.ChapterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          deleteMany: {
            args: Prisma.ChapterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChapterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChapterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>[]
          }
          upsert: {
            args: Prisma.ChapterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          aggregate: {
            args: Prisma.ChapterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChapter>
          }
          groupBy: {
            args: Prisma.ChapterGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChapterGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChapterCountArgs<ExtArgs>
            result: $Utils.Optional<ChapterCountAggregateOutputType> | number
          }
        }
      }
      Lore: {
        payload: Prisma.$LorePayload<ExtArgs>
        fields: Prisma.LoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LorePayload>
          }
          findFirst: {
            args: Prisma.LoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LorePayload>
          }
          findMany: {
            args: Prisma.LoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LorePayload>[]
          }
          create: {
            args: Prisma.LoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LorePayload>
          }
          createMany: {
            args: Prisma.LoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LorePayload>[]
          }
          delete: {
            args: Prisma.LoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LorePayload>
          }
          update: {
            args: Prisma.LoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LorePayload>
          }
          deleteMany: {
            args: Prisma.LoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LorePayload>[]
          }
          upsert: {
            args: Prisma.LoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LorePayload>
          }
          aggregate: {
            args: Prisma.LoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLore>
          }
          groupBy: {
            args: Prisma.LoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoreCountArgs<ExtArgs>
            result: $Utils.Optional<LoreCountAggregateOutputType> | number
          }
        }
      }
      Character: {
        payload: Prisma.$CharacterPayload<ExtArgs>
        fields: Prisma.CharacterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharacterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharacterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          findFirst: {
            args: Prisma.CharacterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharacterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          findMany: {
            args: Prisma.CharacterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          create: {
            args: Prisma.CharacterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          createMany: {
            args: Prisma.CharacterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CharacterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          delete: {
            args: Prisma.CharacterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          update: {
            args: Prisma.CharacterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          deleteMany: {
            args: Prisma.CharacterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CharacterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CharacterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          upsert: {
            args: Prisma.CharacterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          aggregate: {
            args: Prisma.CharacterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharacter>
          }
          groupBy: {
            args: Prisma.CharacterGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharacterGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharacterCountArgs<ExtArgs>
            result: $Utils.Optional<CharacterCountAggregateOutputType> | number
          }
        }
      }
      Monster: {
        payload: Prisma.$MonsterPayload<ExtArgs>
        fields: Prisma.MonsterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonsterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonsterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload>
          }
          findFirst: {
            args: Prisma.MonsterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonsterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload>
          }
          findMany: {
            args: Prisma.MonsterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload>[]
          }
          create: {
            args: Prisma.MonsterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload>
          }
          createMany: {
            args: Prisma.MonsterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MonsterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload>[]
          }
          delete: {
            args: Prisma.MonsterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload>
          }
          update: {
            args: Prisma.MonsterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload>
          }
          deleteMany: {
            args: Prisma.MonsterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MonsterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MonsterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload>[]
          }
          upsert: {
            args: Prisma.MonsterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload>
          }
          aggregate: {
            args: Prisma.MonsterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonster>
          }
          groupBy: {
            args: Prisma.MonsterGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonsterGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonsterCountArgs<ExtArgs>
            result: $Utils.Optional<MonsterCountAggregateOutputType> | number
          }
        }
      }
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      PowerSystem: {
        payload: Prisma.$PowerSystemPayload<ExtArgs>
        fields: Prisma.PowerSystemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PowerSystemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PowerSystemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PowerSystemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PowerSystemPayload>
          }
          findFirst: {
            args: Prisma.PowerSystemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PowerSystemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PowerSystemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PowerSystemPayload>
          }
          findMany: {
            args: Prisma.PowerSystemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PowerSystemPayload>[]
          }
          create: {
            args: Prisma.PowerSystemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PowerSystemPayload>
          }
          createMany: {
            args: Prisma.PowerSystemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PowerSystemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PowerSystemPayload>[]
          }
          delete: {
            args: Prisma.PowerSystemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PowerSystemPayload>
          }
          update: {
            args: Prisma.PowerSystemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PowerSystemPayload>
          }
          deleteMany: {
            args: Prisma.PowerSystemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PowerSystemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PowerSystemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PowerSystemPayload>[]
          }
          upsert: {
            args: Prisma.PowerSystemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PowerSystemPayload>
          }
          aggregate: {
            args: Prisma.PowerSystemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePowerSystem>
          }
          groupBy: {
            args: Prisma.PowerSystemGroupByArgs<ExtArgs>
            result: $Utils.Optional<PowerSystemGroupByOutputType>[]
          }
          count: {
            args: Prisma.PowerSystemCountArgs<ExtArgs>
            result: $Utils.Optional<PowerSystemCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    project?: ProjectOmit
    loreNode?: LoreNodeOmit
    nodeRelation?: NodeRelationOmit
    chapter?: ChapterOmit
    lore?: LoreOmit
    character?: CharacterOmit
    monster?: MonsterOmit
    item?: ItemOmit
    powerSystem?: PowerSystemOmit
    location?: LocationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    projects: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    chapters: number
    lore: number
    loreNodes: number
    nodeRelations: number
    characters: number
    monsters: number
    items: number
    powerSystems: number
    locations: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapters?: boolean | ProjectCountOutputTypeCountChaptersArgs
    lore?: boolean | ProjectCountOutputTypeCountLoreArgs
    loreNodes?: boolean | ProjectCountOutputTypeCountLoreNodesArgs
    nodeRelations?: boolean | ProjectCountOutputTypeCountNodeRelationsArgs
    characters?: boolean | ProjectCountOutputTypeCountCharactersArgs
    monsters?: boolean | ProjectCountOutputTypeCountMonstersArgs
    items?: boolean | ProjectCountOutputTypeCountItemsArgs
    powerSystems?: boolean | ProjectCountOutputTypeCountPowerSystemsArgs
    locations?: boolean | ProjectCountOutputTypeCountLocationsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountChaptersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChapterWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountLoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoreWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountLoreNodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoreNodeWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountNodeRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NodeRelationWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountCharactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountMonstersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonsterWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountPowerSystemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PowerSystemWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
  }


  /**
   * Count Type LoreNodeCountOutputType
   */

  export type LoreNodeCountOutputType = {
    outgoingRelations: number
    incomingRelations: number
  }

  export type LoreNodeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outgoingRelations?: boolean | LoreNodeCountOutputTypeCountOutgoingRelationsArgs
    incomingRelations?: boolean | LoreNodeCountOutputTypeCountIncomingRelationsArgs
  }

  // Custom InputTypes
  /**
   * LoreNodeCountOutputType without action
   */
  export type LoreNodeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreNodeCountOutputType
     */
    select?: LoreNodeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LoreNodeCountOutputType without action
   */
  export type LoreNodeCountOutputTypeCountOutgoingRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NodeRelationWhereInput
  }

  /**
   * LoreNodeCountOutputType without action
   */
  export type LoreNodeCountOutputTypeCountIncomingRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NodeRelationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    emailVerified: Date | null
    image: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    projects?: boolean | User$projectsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    projects?: boolean | User$projectsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      emailVerified: Date | null
      image: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.projects
   */
  export type User$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    genre: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    genre: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    description: number
    genre: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    genre?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    genre?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    genre?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    userId: string
    name: string
    description: string | null
    genre: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    genre?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chapters?: boolean | Project$chaptersArgs<ExtArgs>
    lore?: boolean | Project$loreArgs<ExtArgs>
    loreNodes?: boolean | Project$loreNodesArgs<ExtArgs>
    nodeRelations?: boolean | Project$nodeRelationsArgs<ExtArgs>
    characters?: boolean | Project$charactersArgs<ExtArgs>
    monsters?: boolean | Project$monstersArgs<ExtArgs>
    items?: boolean | Project$itemsArgs<ExtArgs>
    powerSystems?: boolean | Project$powerSystemsArgs<ExtArgs>
    locations?: boolean | Project$locationsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    genre?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    genre?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    genre?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "description" | "genre" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    chapters?: boolean | Project$chaptersArgs<ExtArgs>
    lore?: boolean | Project$loreArgs<ExtArgs>
    loreNodes?: boolean | Project$loreNodesArgs<ExtArgs>
    nodeRelations?: boolean | Project$nodeRelationsArgs<ExtArgs>
    characters?: boolean | Project$charactersArgs<ExtArgs>
    monsters?: boolean | Project$monstersArgs<ExtArgs>
    items?: boolean | Project$itemsArgs<ExtArgs>
    powerSystems?: boolean | Project$powerSystemsArgs<ExtArgs>
    locations?: boolean | Project$locationsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      chapters: Prisma.$ChapterPayload<ExtArgs>[]
      lore: Prisma.$LorePayload<ExtArgs>[]
      loreNodes: Prisma.$LoreNodePayload<ExtArgs>[]
      nodeRelations: Prisma.$NodeRelationPayload<ExtArgs>[]
      characters: Prisma.$CharacterPayload<ExtArgs>[]
      monsters: Prisma.$MonsterPayload<ExtArgs>[]
      items: Prisma.$ItemPayload<ExtArgs>[]
      powerSystems: Prisma.$PowerSystemPayload<ExtArgs>[]
      locations: Prisma.$LocationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      description: string | null
      genre: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chapters<T extends Project$chaptersArgs<ExtArgs> = {}>(args?: Subset<T, Project$chaptersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lore<T extends Project$loreArgs<ExtArgs> = {}>(args?: Subset<T, Project$loreArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    loreNodes<T extends Project$loreNodesArgs<ExtArgs> = {}>(args?: Subset<T, Project$loreNodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoreNodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    nodeRelations<T extends Project$nodeRelationsArgs<ExtArgs> = {}>(args?: Subset<T, Project$nodeRelationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodeRelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    characters<T extends Project$charactersArgs<ExtArgs> = {}>(args?: Subset<T, Project$charactersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    monsters<T extends Project$monstersArgs<ExtArgs> = {}>(args?: Subset<T, Project$monstersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    items<T extends Project$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Project$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    powerSystems<T extends Project$powerSystemsArgs<ExtArgs> = {}>(args?: Subset<T, Project$powerSystemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PowerSystemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    locations<T extends Project$locationsArgs<ExtArgs> = {}>(args?: Subset<T, Project$locationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly userId: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly genre: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.chapters
   */
  export type Project$chaptersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    where?: ChapterWhereInput
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    cursor?: ChapterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Project.lore
   */
  export type Project$loreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lore
     */
    select?: LoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lore
     */
    omit?: LoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreInclude<ExtArgs> | null
    where?: LoreWhereInput
    orderBy?: LoreOrderByWithRelationInput | LoreOrderByWithRelationInput[]
    cursor?: LoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoreScalarFieldEnum | LoreScalarFieldEnum[]
  }

  /**
   * Project.loreNodes
   */
  export type Project$loreNodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreNode
     */
    select?: LoreNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoreNode
     */
    omit?: LoreNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreNodeInclude<ExtArgs> | null
    where?: LoreNodeWhereInput
    orderBy?: LoreNodeOrderByWithRelationInput | LoreNodeOrderByWithRelationInput[]
    cursor?: LoreNodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoreNodeScalarFieldEnum | LoreNodeScalarFieldEnum[]
  }

  /**
   * Project.nodeRelations
   */
  export type Project$nodeRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeRelation
     */
    select?: NodeRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeRelation
     */
    omit?: NodeRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeRelationInclude<ExtArgs> | null
    where?: NodeRelationWhereInput
    orderBy?: NodeRelationOrderByWithRelationInput | NodeRelationOrderByWithRelationInput[]
    cursor?: NodeRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NodeRelationScalarFieldEnum | NodeRelationScalarFieldEnum[]
  }

  /**
   * Project.characters
   */
  export type Project$charactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    where?: CharacterWhereInput
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    cursor?: CharacterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Project.monsters
   */
  export type Project$monstersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monster
     */
    omit?: MonsterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterInclude<ExtArgs> | null
    where?: MonsterWhereInput
    orderBy?: MonsterOrderByWithRelationInput | MonsterOrderByWithRelationInput[]
    cursor?: MonsterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MonsterScalarFieldEnum | MonsterScalarFieldEnum[]
  }

  /**
   * Project.items
   */
  export type Project$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    cursor?: ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Project.powerSystems
   */
  export type Project$powerSystemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PowerSystem
     */
    select?: PowerSystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PowerSystem
     */
    omit?: PowerSystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PowerSystemInclude<ExtArgs> | null
    where?: PowerSystemWhereInput
    orderBy?: PowerSystemOrderByWithRelationInput | PowerSystemOrderByWithRelationInput[]
    cursor?: PowerSystemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PowerSystemScalarFieldEnum | PowerSystemScalarFieldEnum[]
  }

  /**
   * Project.locations
   */
  export type Project$locationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    cursor?: LocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model LoreNode
   */

  export type AggregateLoreNode = {
    _count: LoreNodeCountAggregateOutputType | null
    _avg: LoreNodeAvgAggregateOutputType | null
    _sum: LoreNodeSumAggregateOutputType | null
    _min: LoreNodeMinAggregateOutputType | null
    _max: LoreNodeMaxAggregateOutputType | null
  }

  export type LoreNodeAvgAggregateOutputType = {
    position: number | null
  }

  export type LoreNodeSumAggregateOutputType = {
    position: number | null
  }

  export type LoreNodeMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    type: string | null
    name: string | null
    content: string | null
    position: number | null
    color: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LoreNodeMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    type: string | null
    name: string | null
    content: string | null
    position: number | null
    color: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LoreNodeCountAggregateOutputType = {
    id: number
    projectId: number
    type: number
    name: number
    content: number
    position: number
    color: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LoreNodeAvgAggregateInputType = {
    position?: true
  }

  export type LoreNodeSumAggregateInputType = {
    position?: true
  }

  export type LoreNodeMinAggregateInputType = {
    id?: true
    projectId?: true
    type?: true
    name?: true
    content?: true
    position?: true
    color?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LoreNodeMaxAggregateInputType = {
    id?: true
    projectId?: true
    type?: true
    name?: true
    content?: true
    position?: true
    color?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LoreNodeCountAggregateInputType = {
    id?: true
    projectId?: true
    type?: true
    name?: true
    content?: true
    position?: true
    color?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LoreNodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoreNode to aggregate.
     */
    where?: LoreNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoreNodes to fetch.
     */
    orderBy?: LoreNodeOrderByWithRelationInput | LoreNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoreNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoreNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoreNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LoreNodes
    **/
    _count?: true | LoreNodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LoreNodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LoreNodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoreNodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoreNodeMaxAggregateInputType
  }

  export type GetLoreNodeAggregateType<T extends LoreNodeAggregateArgs> = {
        [P in keyof T & keyof AggregateLoreNode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoreNode[P]>
      : GetScalarType<T[P], AggregateLoreNode[P]>
  }




  export type LoreNodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoreNodeWhereInput
    orderBy?: LoreNodeOrderByWithAggregationInput | LoreNodeOrderByWithAggregationInput[]
    by: LoreNodeScalarFieldEnum[] | LoreNodeScalarFieldEnum
    having?: LoreNodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoreNodeCountAggregateInputType | true
    _avg?: LoreNodeAvgAggregateInputType
    _sum?: LoreNodeSumAggregateInputType
    _min?: LoreNodeMinAggregateInputType
    _max?: LoreNodeMaxAggregateInputType
  }

  export type LoreNodeGroupByOutputType = {
    id: string
    projectId: string
    type: string
    name: string
    content: string | null
    position: number
    color: string
    createdAt: Date
    updatedAt: Date
    _count: LoreNodeCountAggregateOutputType | null
    _avg: LoreNodeAvgAggregateOutputType | null
    _sum: LoreNodeSumAggregateOutputType | null
    _min: LoreNodeMinAggregateOutputType | null
    _max: LoreNodeMaxAggregateOutputType | null
  }

  type GetLoreNodeGroupByPayload<T extends LoreNodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoreNodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoreNodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoreNodeGroupByOutputType[P]>
            : GetScalarType<T[P], LoreNodeGroupByOutputType[P]>
        }
      >
    >


  export type LoreNodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    type?: boolean
    name?: boolean
    content?: boolean
    position?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    outgoingRelations?: boolean | LoreNode$outgoingRelationsArgs<ExtArgs>
    incomingRelations?: boolean | LoreNode$incomingRelationsArgs<ExtArgs>
    _count?: boolean | LoreNodeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loreNode"]>

  export type LoreNodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    type?: boolean
    name?: boolean
    content?: boolean
    position?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loreNode"]>

  export type LoreNodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    type?: boolean
    name?: boolean
    content?: boolean
    position?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loreNode"]>

  export type LoreNodeSelectScalar = {
    id?: boolean
    projectId?: boolean
    type?: boolean
    name?: boolean
    content?: boolean
    position?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LoreNodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "type" | "name" | "content" | "position" | "color" | "createdAt" | "updatedAt", ExtArgs["result"]["loreNode"]>
  export type LoreNodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    outgoingRelations?: boolean | LoreNode$outgoingRelationsArgs<ExtArgs>
    incomingRelations?: boolean | LoreNode$incomingRelationsArgs<ExtArgs>
    _count?: boolean | LoreNodeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LoreNodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type LoreNodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $LoreNodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LoreNode"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      outgoingRelations: Prisma.$NodeRelationPayload<ExtArgs>[]
      incomingRelations: Prisma.$NodeRelationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      type: string
      name: string
      content: string | null
      position: number
      color: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["loreNode"]>
    composites: {}
  }

  type LoreNodeGetPayload<S extends boolean | null | undefined | LoreNodeDefaultArgs> = $Result.GetResult<Prisma.$LoreNodePayload, S>

  type LoreNodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LoreNodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoreNodeCountAggregateInputType | true
    }

  export interface LoreNodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LoreNode'], meta: { name: 'LoreNode' } }
    /**
     * Find zero or one LoreNode that matches the filter.
     * @param {LoreNodeFindUniqueArgs} args - Arguments to find a LoreNode
     * @example
     * // Get one LoreNode
     * const loreNode = await prisma.loreNode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoreNodeFindUniqueArgs>(args: SelectSubset<T, LoreNodeFindUniqueArgs<ExtArgs>>): Prisma__LoreNodeClient<$Result.GetResult<Prisma.$LoreNodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LoreNode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoreNodeFindUniqueOrThrowArgs} args - Arguments to find a LoreNode
     * @example
     * // Get one LoreNode
     * const loreNode = await prisma.loreNode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoreNodeFindUniqueOrThrowArgs>(args: SelectSubset<T, LoreNodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoreNodeClient<$Result.GetResult<Prisma.$LoreNodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoreNode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoreNodeFindFirstArgs} args - Arguments to find a LoreNode
     * @example
     * // Get one LoreNode
     * const loreNode = await prisma.loreNode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoreNodeFindFirstArgs>(args?: SelectSubset<T, LoreNodeFindFirstArgs<ExtArgs>>): Prisma__LoreNodeClient<$Result.GetResult<Prisma.$LoreNodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoreNode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoreNodeFindFirstOrThrowArgs} args - Arguments to find a LoreNode
     * @example
     * // Get one LoreNode
     * const loreNode = await prisma.loreNode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoreNodeFindFirstOrThrowArgs>(args?: SelectSubset<T, LoreNodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoreNodeClient<$Result.GetResult<Prisma.$LoreNodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LoreNodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoreNodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LoreNodes
     * const loreNodes = await prisma.loreNode.findMany()
     * 
     * // Get first 10 LoreNodes
     * const loreNodes = await prisma.loreNode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loreNodeWithIdOnly = await prisma.loreNode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoreNodeFindManyArgs>(args?: SelectSubset<T, LoreNodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoreNodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LoreNode.
     * @param {LoreNodeCreateArgs} args - Arguments to create a LoreNode.
     * @example
     * // Create one LoreNode
     * const LoreNode = await prisma.loreNode.create({
     *   data: {
     *     // ... data to create a LoreNode
     *   }
     * })
     * 
     */
    create<T extends LoreNodeCreateArgs>(args: SelectSubset<T, LoreNodeCreateArgs<ExtArgs>>): Prisma__LoreNodeClient<$Result.GetResult<Prisma.$LoreNodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LoreNodes.
     * @param {LoreNodeCreateManyArgs} args - Arguments to create many LoreNodes.
     * @example
     * // Create many LoreNodes
     * const loreNode = await prisma.loreNode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoreNodeCreateManyArgs>(args?: SelectSubset<T, LoreNodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LoreNodes and returns the data saved in the database.
     * @param {LoreNodeCreateManyAndReturnArgs} args - Arguments to create many LoreNodes.
     * @example
     * // Create many LoreNodes
     * const loreNode = await prisma.loreNode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LoreNodes and only return the `id`
     * const loreNodeWithIdOnly = await prisma.loreNode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LoreNodeCreateManyAndReturnArgs>(args?: SelectSubset<T, LoreNodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoreNodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LoreNode.
     * @param {LoreNodeDeleteArgs} args - Arguments to delete one LoreNode.
     * @example
     * // Delete one LoreNode
     * const LoreNode = await prisma.loreNode.delete({
     *   where: {
     *     // ... filter to delete one LoreNode
     *   }
     * })
     * 
     */
    delete<T extends LoreNodeDeleteArgs>(args: SelectSubset<T, LoreNodeDeleteArgs<ExtArgs>>): Prisma__LoreNodeClient<$Result.GetResult<Prisma.$LoreNodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LoreNode.
     * @param {LoreNodeUpdateArgs} args - Arguments to update one LoreNode.
     * @example
     * // Update one LoreNode
     * const loreNode = await prisma.loreNode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoreNodeUpdateArgs>(args: SelectSubset<T, LoreNodeUpdateArgs<ExtArgs>>): Prisma__LoreNodeClient<$Result.GetResult<Prisma.$LoreNodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LoreNodes.
     * @param {LoreNodeDeleteManyArgs} args - Arguments to filter LoreNodes to delete.
     * @example
     * // Delete a few LoreNodes
     * const { count } = await prisma.loreNode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoreNodeDeleteManyArgs>(args?: SelectSubset<T, LoreNodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoreNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoreNodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LoreNodes
     * const loreNode = await prisma.loreNode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoreNodeUpdateManyArgs>(args: SelectSubset<T, LoreNodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoreNodes and returns the data updated in the database.
     * @param {LoreNodeUpdateManyAndReturnArgs} args - Arguments to update many LoreNodes.
     * @example
     * // Update many LoreNodes
     * const loreNode = await prisma.loreNode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LoreNodes and only return the `id`
     * const loreNodeWithIdOnly = await prisma.loreNode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LoreNodeUpdateManyAndReturnArgs>(args: SelectSubset<T, LoreNodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoreNodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LoreNode.
     * @param {LoreNodeUpsertArgs} args - Arguments to update or create a LoreNode.
     * @example
     * // Update or create a LoreNode
     * const loreNode = await prisma.loreNode.upsert({
     *   create: {
     *     // ... data to create a LoreNode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LoreNode we want to update
     *   }
     * })
     */
    upsert<T extends LoreNodeUpsertArgs>(args: SelectSubset<T, LoreNodeUpsertArgs<ExtArgs>>): Prisma__LoreNodeClient<$Result.GetResult<Prisma.$LoreNodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LoreNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoreNodeCountArgs} args - Arguments to filter LoreNodes to count.
     * @example
     * // Count the number of LoreNodes
     * const count = await prisma.loreNode.count({
     *   where: {
     *     // ... the filter for the LoreNodes we want to count
     *   }
     * })
    **/
    count<T extends LoreNodeCountArgs>(
      args?: Subset<T, LoreNodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoreNodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LoreNode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoreNodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LoreNodeAggregateArgs>(args: Subset<T, LoreNodeAggregateArgs>): Prisma.PrismaPromise<GetLoreNodeAggregateType<T>>

    /**
     * Group by LoreNode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoreNodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LoreNodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoreNodeGroupByArgs['orderBy'] }
        : { orderBy?: LoreNodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LoreNodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoreNodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LoreNode model
   */
  readonly fields: LoreNodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LoreNode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoreNodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    outgoingRelations<T extends LoreNode$outgoingRelationsArgs<ExtArgs> = {}>(args?: Subset<T, LoreNode$outgoingRelationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodeRelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    incomingRelations<T extends LoreNode$incomingRelationsArgs<ExtArgs> = {}>(args?: Subset<T, LoreNode$incomingRelationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodeRelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LoreNode model
   */
  interface LoreNodeFieldRefs {
    readonly id: FieldRef<"LoreNode", 'String'>
    readonly projectId: FieldRef<"LoreNode", 'String'>
    readonly type: FieldRef<"LoreNode", 'String'>
    readonly name: FieldRef<"LoreNode", 'String'>
    readonly content: FieldRef<"LoreNode", 'String'>
    readonly position: FieldRef<"LoreNode", 'Float'>
    readonly color: FieldRef<"LoreNode", 'String'>
    readonly createdAt: FieldRef<"LoreNode", 'DateTime'>
    readonly updatedAt: FieldRef<"LoreNode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LoreNode findUnique
   */
  export type LoreNodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreNode
     */
    select?: LoreNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoreNode
     */
    omit?: LoreNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreNodeInclude<ExtArgs> | null
    /**
     * Filter, which LoreNode to fetch.
     */
    where: LoreNodeWhereUniqueInput
  }

  /**
   * LoreNode findUniqueOrThrow
   */
  export type LoreNodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreNode
     */
    select?: LoreNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoreNode
     */
    omit?: LoreNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreNodeInclude<ExtArgs> | null
    /**
     * Filter, which LoreNode to fetch.
     */
    where: LoreNodeWhereUniqueInput
  }

  /**
   * LoreNode findFirst
   */
  export type LoreNodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreNode
     */
    select?: LoreNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoreNode
     */
    omit?: LoreNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreNodeInclude<ExtArgs> | null
    /**
     * Filter, which LoreNode to fetch.
     */
    where?: LoreNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoreNodes to fetch.
     */
    orderBy?: LoreNodeOrderByWithRelationInput | LoreNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoreNodes.
     */
    cursor?: LoreNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoreNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoreNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoreNodes.
     */
    distinct?: LoreNodeScalarFieldEnum | LoreNodeScalarFieldEnum[]
  }

  /**
   * LoreNode findFirstOrThrow
   */
  export type LoreNodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreNode
     */
    select?: LoreNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoreNode
     */
    omit?: LoreNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreNodeInclude<ExtArgs> | null
    /**
     * Filter, which LoreNode to fetch.
     */
    where?: LoreNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoreNodes to fetch.
     */
    orderBy?: LoreNodeOrderByWithRelationInput | LoreNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoreNodes.
     */
    cursor?: LoreNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoreNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoreNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoreNodes.
     */
    distinct?: LoreNodeScalarFieldEnum | LoreNodeScalarFieldEnum[]
  }

  /**
   * LoreNode findMany
   */
  export type LoreNodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreNode
     */
    select?: LoreNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoreNode
     */
    omit?: LoreNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreNodeInclude<ExtArgs> | null
    /**
     * Filter, which LoreNodes to fetch.
     */
    where?: LoreNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoreNodes to fetch.
     */
    orderBy?: LoreNodeOrderByWithRelationInput | LoreNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LoreNodes.
     */
    cursor?: LoreNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoreNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoreNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoreNodes.
     */
    distinct?: LoreNodeScalarFieldEnum | LoreNodeScalarFieldEnum[]
  }

  /**
   * LoreNode create
   */
  export type LoreNodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreNode
     */
    select?: LoreNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoreNode
     */
    omit?: LoreNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreNodeInclude<ExtArgs> | null
    /**
     * The data needed to create a LoreNode.
     */
    data: XOR<LoreNodeCreateInput, LoreNodeUncheckedCreateInput>
  }

  /**
   * LoreNode createMany
   */
  export type LoreNodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LoreNodes.
     */
    data: LoreNodeCreateManyInput | LoreNodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LoreNode createManyAndReturn
   */
  export type LoreNodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreNode
     */
    select?: LoreNodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoreNode
     */
    omit?: LoreNodeOmit<ExtArgs> | null
    /**
     * The data used to create many LoreNodes.
     */
    data: LoreNodeCreateManyInput | LoreNodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreNodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LoreNode update
   */
  export type LoreNodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreNode
     */
    select?: LoreNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoreNode
     */
    omit?: LoreNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreNodeInclude<ExtArgs> | null
    /**
     * The data needed to update a LoreNode.
     */
    data: XOR<LoreNodeUpdateInput, LoreNodeUncheckedUpdateInput>
    /**
     * Choose, which LoreNode to update.
     */
    where: LoreNodeWhereUniqueInput
  }

  /**
   * LoreNode updateMany
   */
  export type LoreNodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LoreNodes.
     */
    data: XOR<LoreNodeUpdateManyMutationInput, LoreNodeUncheckedUpdateManyInput>
    /**
     * Filter which LoreNodes to update
     */
    where?: LoreNodeWhereInput
    /**
     * Limit how many LoreNodes to update.
     */
    limit?: number
  }

  /**
   * LoreNode updateManyAndReturn
   */
  export type LoreNodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreNode
     */
    select?: LoreNodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoreNode
     */
    omit?: LoreNodeOmit<ExtArgs> | null
    /**
     * The data used to update LoreNodes.
     */
    data: XOR<LoreNodeUpdateManyMutationInput, LoreNodeUncheckedUpdateManyInput>
    /**
     * Filter which LoreNodes to update
     */
    where?: LoreNodeWhereInput
    /**
     * Limit how many LoreNodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreNodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LoreNode upsert
   */
  export type LoreNodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreNode
     */
    select?: LoreNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoreNode
     */
    omit?: LoreNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreNodeInclude<ExtArgs> | null
    /**
     * The filter to search for the LoreNode to update in case it exists.
     */
    where: LoreNodeWhereUniqueInput
    /**
     * In case the LoreNode found by the `where` argument doesn't exist, create a new LoreNode with this data.
     */
    create: XOR<LoreNodeCreateInput, LoreNodeUncheckedCreateInput>
    /**
     * In case the LoreNode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoreNodeUpdateInput, LoreNodeUncheckedUpdateInput>
  }

  /**
   * LoreNode delete
   */
  export type LoreNodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreNode
     */
    select?: LoreNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoreNode
     */
    omit?: LoreNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreNodeInclude<ExtArgs> | null
    /**
     * Filter which LoreNode to delete.
     */
    where: LoreNodeWhereUniqueInput
  }

  /**
   * LoreNode deleteMany
   */
  export type LoreNodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoreNodes to delete
     */
    where?: LoreNodeWhereInput
    /**
     * Limit how many LoreNodes to delete.
     */
    limit?: number
  }

  /**
   * LoreNode.outgoingRelations
   */
  export type LoreNode$outgoingRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeRelation
     */
    select?: NodeRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeRelation
     */
    omit?: NodeRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeRelationInclude<ExtArgs> | null
    where?: NodeRelationWhereInput
    orderBy?: NodeRelationOrderByWithRelationInput | NodeRelationOrderByWithRelationInput[]
    cursor?: NodeRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NodeRelationScalarFieldEnum | NodeRelationScalarFieldEnum[]
  }

  /**
   * LoreNode.incomingRelations
   */
  export type LoreNode$incomingRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeRelation
     */
    select?: NodeRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeRelation
     */
    omit?: NodeRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeRelationInclude<ExtArgs> | null
    where?: NodeRelationWhereInput
    orderBy?: NodeRelationOrderByWithRelationInput | NodeRelationOrderByWithRelationInput[]
    cursor?: NodeRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NodeRelationScalarFieldEnum | NodeRelationScalarFieldEnum[]
  }

  /**
   * LoreNode without action
   */
  export type LoreNodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreNode
     */
    select?: LoreNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoreNode
     */
    omit?: LoreNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreNodeInclude<ExtArgs> | null
  }


  /**
   * Model NodeRelation
   */

  export type AggregateNodeRelation = {
    _count: NodeRelationCountAggregateOutputType | null
    _min: NodeRelationMinAggregateOutputType | null
    _max: NodeRelationMaxAggregateOutputType | null
  }

  export type NodeRelationMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    sourceNodeId: string | null
    targetNodeId: string | null
    createdAt: Date | null
  }

  export type NodeRelationMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    sourceNodeId: string | null
    targetNodeId: string | null
    createdAt: Date | null
  }

  export type NodeRelationCountAggregateOutputType = {
    id: number
    projectId: number
    sourceNodeId: number
    targetNodeId: number
    createdAt: number
    _all: number
  }


  export type NodeRelationMinAggregateInputType = {
    id?: true
    projectId?: true
    sourceNodeId?: true
    targetNodeId?: true
    createdAt?: true
  }

  export type NodeRelationMaxAggregateInputType = {
    id?: true
    projectId?: true
    sourceNodeId?: true
    targetNodeId?: true
    createdAt?: true
  }

  export type NodeRelationCountAggregateInputType = {
    id?: true
    projectId?: true
    sourceNodeId?: true
    targetNodeId?: true
    createdAt?: true
    _all?: true
  }

  export type NodeRelationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NodeRelation to aggregate.
     */
    where?: NodeRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NodeRelations to fetch.
     */
    orderBy?: NodeRelationOrderByWithRelationInput | NodeRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NodeRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NodeRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NodeRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NodeRelations
    **/
    _count?: true | NodeRelationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NodeRelationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NodeRelationMaxAggregateInputType
  }

  export type GetNodeRelationAggregateType<T extends NodeRelationAggregateArgs> = {
        [P in keyof T & keyof AggregateNodeRelation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNodeRelation[P]>
      : GetScalarType<T[P], AggregateNodeRelation[P]>
  }




  export type NodeRelationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NodeRelationWhereInput
    orderBy?: NodeRelationOrderByWithAggregationInput | NodeRelationOrderByWithAggregationInput[]
    by: NodeRelationScalarFieldEnum[] | NodeRelationScalarFieldEnum
    having?: NodeRelationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NodeRelationCountAggregateInputType | true
    _min?: NodeRelationMinAggregateInputType
    _max?: NodeRelationMaxAggregateInputType
  }

  export type NodeRelationGroupByOutputType = {
    id: string
    projectId: string
    sourceNodeId: string
    targetNodeId: string
    createdAt: Date
    _count: NodeRelationCountAggregateOutputType | null
    _min: NodeRelationMinAggregateOutputType | null
    _max: NodeRelationMaxAggregateOutputType | null
  }

  type GetNodeRelationGroupByPayload<T extends NodeRelationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NodeRelationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NodeRelationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NodeRelationGroupByOutputType[P]>
            : GetScalarType<T[P], NodeRelationGroupByOutputType[P]>
        }
      >
    >


  export type NodeRelationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    sourceNodeId?: boolean
    targetNodeId?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    sourceNode?: boolean | LoreNodeDefaultArgs<ExtArgs>
    targetNode?: boolean | LoreNodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nodeRelation"]>

  export type NodeRelationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    sourceNodeId?: boolean
    targetNodeId?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    sourceNode?: boolean | LoreNodeDefaultArgs<ExtArgs>
    targetNode?: boolean | LoreNodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nodeRelation"]>

  export type NodeRelationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    sourceNodeId?: boolean
    targetNodeId?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    sourceNode?: boolean | LoreNodeDefaultArgs<ExtArgs>
    targetNode?: boolean | LoreNodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nodeRelation"]>

  export type NodeRelationSelectScalar = {
    id?: boolean
    projectId?: boolean
    sourceNodeId?: boolean
    targetNodeId?: boolean
    createdAt?: boolean
  }

  export type NodeRelationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "sourceNodeId" | "targetNodeId" | "createdAt", ExtArgs["result"]["nodeRelation"]>
  export type NodeRelationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    sourceNode?: boolean | LoreNodeDefaultArgs<ExtArgs>
    targetNode?: boolean | LoreNodeDefaultArgs<ExtArgs>
  }
  export type NodeRelationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    sourceNode?: boolean | LoreNodeDefaultArgs<ExtArgs>
    targetNode?: boolean | LoreNodeDefaultArgs<ExtArgs>
  }
  export type NodeRelationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    sourceNode?: boolean | LoreNodeDefaultArgs<ExtArgs>
    targetNode?: boolean | LoreNodeDefaultArgs<ExtArgs>
  }

  export type $NodeRelationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NodeRelation"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      sourceNode: Prisma.$LoreNodePayload<ExtArgs>
      targetNode: Prisma.$LoreNodePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      sourceNodeId: string
      targetNodeId: string
      createdAt: Date
    }, ExtArgs["result"]["nodeRelation"]>
    composites: {}
  }

  type NodeRelationGetPayload<S extends boolean | null | undefined | NodeRelationDefaultArgs> = $Result.GetResult<Prisma.$NodeRelationPayload, S>

  type NodeRelationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NodeRelationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NodeRelationCountAggregateInputType | true
    }

  export interface NodeRelationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NodeRelation'], meta: { name: 'NodeRelation' } }
    /**
     * Find zero or one NodeRelation that matches the filter.
     * @param {NodeRelationFindUniqueArgs} args - Arguments to find a NodeRelation
     * @example
     * // Get one NodeRelation
     * const nodeRelation = await prisma.nodeRelation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NodeRelationFindUniqueArgs>(args: SelectSubset<T, NodeRelationFindUniqueArgs<ExtArgs>>): Prisma__NodeRelationClient<$Result.GetResult<Prisma.$NodeRelationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NodeRelation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NodeRelationFindUniqueOrThrowArgs} args - Arguments to find a NodeRelation
     * @example
     * // Get one NodeRelation
     * const nodeRelation = await prisma.nodeRelation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NodeRelationFindUniqueOrThrowArgs>(args: SelectSubset<T, NodeRelationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NodeRelationClient<$Result.GetResult<Prisma.$NodeRelationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NodeRelation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeRelationFindFirstArgs} args - Arguments to find a NodeRelation
     * @example
     * // Get one NodeRelation
     * const nodeRelation = await prisma.nodeRelation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NodeRelationFindFirstArgs>(args?: SelectSubset<T, NodeRelationFindFirstArgs<ExtArgs>>): Prisma__NodeRelationClient<$Result.GetResult<Prisma.$NodeRelationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NodeRelation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeRelationFindFirstOrThrowArgs} args - Arguments to find a NodeRelation
     * @example
     * // Get one NodeRelation
     * const nodeRelation = await prisma.nodeRelation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NodeRelationFindFirstOrThrowArgs>(args?: SelectSubset<T, NodeRelationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NodeRelationClient<$Result.GetResult<Prisma.$NodeRelationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NodeRelations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeRelationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NodeRelations
     * const nodeRelations = await prisma.nodeRelation.findMany()
     * 
     * // Get first 10 NodeRelations
     * const nodeRelations = await prisma.nodeRelation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nodeRelationWithIdOnly = await prisma.nodeRelation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NodeRelationFindManyArgs>(args?: SelectSubset<T, NodeRelationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodeRelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NodeRelation.
     * @param {NodeRelationCreateArgs} args - Arguments to create a NodeRelation.
     * @example
     * // Create one NodeRelation
     * const NodeRelation = await prisma.nodeRelation.create({
     *   data: {
     *     // ... data to create a NodeRelation
     *   }
     * })
     * 
     */
    create<T extends NodeRelationCreateArgs>(args: SelectSubset<T, NodeRelationCreateArgs<ExtArgs>>): Prisma__NodeRelationClient<$Result.GetResult<Prisma.$NodeRelationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NodeRelations.
     * @param {NodeRelationCreateManyArgs} args - Arguments to create many NodeRelations.
     * @example
     * // Create many NodeRelations
     * const nodeRelation = await prisma.nodeRelation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NodeRelationCreateManyArgs>(args?: SelectSubset<T, NodeRelationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NodeRelations and returns the data saved in the database.
     * @param {NodeRelationCreateManyAndReturnArgs} args - Arguments to create many NodeRelations.
     * @example
     * // Create many NodeRelations
     * const nodeRelation = await prisma.nodeRelation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NodeRelations and only return the `id`
     * const nodeRelationWithIdOnly = await prisma.nodeRelation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NodeRelationCreateManyAndReturnArgs>(args?: SelectSubset<T, NodeRelationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodeRelationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NodeRelation.
     * @param {NodeRelationDeleteArgs} args - Arguments to delete one NodeRelation.
     * @example
     * // Delete one NodeRelation
     * const NodeRelation = await prisma.nodeRelation.delete({
     *   where: {
     *     // ... filter to delete one NodeRelation
     *   }
     * })
     * 
     */
    delete<T extends NodeRelationDeleteArgs>(args: SelectSubset<T, NodeRelationDeleteArgs<ExtArgs>>): Prisma__NodeRelationClient<$Result.GetResult<Prisma.$NodeRelationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NodeRelation.
     * @param {NodeRelationUpdateArgs} args - Arguments to update one NodeRelation.
     * @example
     * // Update one NodeRelation
     * const nodeRelation = await prisma.nodeRelation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NodeRelationUpdateArgs>(args: SelectSubset<T, NodeRelationUpdateArgs<ExtArgs>>): Prisma__NodeRelationClient<$Result.GetResult<Prisma.$NodeRelationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NodeRelations.
     * @param {NodeRelationDeleteManyArgs} args - Arguments to filter NodeRelations to delete.
     * @example
     * // Delete a few NodeRelations
     * const { count } = await prisma.nodeRelation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NodeRelationDeleteManyArgs>(args?: SelectSubset<T, NodeRelationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NodeRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeRelationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NodeRelations
     * const nodeRelation = await prisma.nodeRelation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NodeRelationUpdateManyArgs>(args: SelectSubset<T, NodeRelationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NodeRelations and returns the data updated in the database.
     * @param {NodeRelationUpdateManyAndReturnArgs} args - Arguments to update many NodeRelations.
     * @example
     * // Update many NodeRelations
     * const nodeRelation = await prisma.nodeRelation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NodeRelations and only return the `id`
     * const nodeRelationWithIdOnly = await prisma.nodeRelation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NodeRelationUpdateManyAndReturnArgs>(args: SelectSubset<T, NodeRelationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodeRelationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NodeRelation.
     * @param {NodeRelationUpsertArgs} args - Arguments to update or create a NodeRelation.
     * @example
     * // Update or create a NodeRelation
     * const nodeRelation = await prisma.nodeRelation.upsert({
     *   create: {
     *     // ... data to create a NodeRelation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NodeRelation we want to update
     *   }
     * })
     */
    upsert<T extends NodeRelationUpsertArgs>(args: SelectSubset<T, NodeRelationUpsertArgs<ExtArgs>>): Prisma__NodeRelationClient<$Result.GetResult<Prisma.$NodeRelationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NodeRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeRelationCountArgs} args - Arguments to filter NodeRelations to count.
     * @example
     * // Count the number of NodeRelations
     * const count = await prisma.nodeRelation.count({
     *   where: {
     *     // ... the filter for the NodeRelations we want to count
     *   }
     * })
    **/
    count<T extends NodeRelationCountArgs>(
      args?: Subset<T, NodeRelationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NodeRelationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NodeRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeRelationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NodeRelationAggregateArgs>(args: Subset<T, NodeRelationAggregateArgs>): Prisma.PrismaPromise<GetNodeRelationAggregateType<T>>

    /**
     * Group by NodeRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeRelationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NodeRelationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NodeRelationGroupByArgs['orderBy'] }
        : { orderBy?: NodeRelationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NodeRelationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNodeRelationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NodeRelation model
   */
  readonly fields: NodeRelationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NodeRelation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NodeRelationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sourceNode<T extends LoreNodeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LoreNodeDefaultArgs<ExtArgs>>): Prisma__LoreNodeClient<$Result.GetResult<Prisma.$LoreNodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    targetNode<T extends LoreNodeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LoreNodeDefaultArgs<ExtArgs>>): Prisma__LoreNodeClient<$Result.GetResult<Prisma.$LoreNodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NodeRelation model
   */
  interface NodeRelationFieldRefs {
    readonly id: FieldRef<"NodeRelation", 'String'>
    readonly projectId: FieldRef<"NodeRelation", 'String'>
    readonly sourceNodeId: FieldRef<"NodeRelation", 'String'>
    readonly targetNodeId: FieldRef<"NodeRelation", 'String'>
    readonly createdAt: FieldRef<"NodeRelation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NodeRelation findUnique
   */
  export type NodeRelationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeRelation
     */
    select?: NodeRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeRelation
     */
    omit?: NodeRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeRelationInclude<ExtArgs> | null
    /**
     * Filter, which NodeRelation to fetch.
     */
    where: NodeRelationWhereUniqueInput
  }

  /**
   * NodeRelation findUniqueOrThrow
   */
  export type NodeRelationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeRelation
     */
    select?: NodeRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeRelation
     */
    omit?: NodeRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeRelationInclude<ExtArgs> | null
    /**
     * Filter, which NodeRelation to fetch.
     */
    where: NodeRelationWhereUniqueInput
  }

  /**
   * NodeRelation findFirst
   */
  export type NodeRelationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeRelation
     */
    select?: NodeRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeRelation
     */
    omit?: NodeRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeRelationInclude<ExtArgs> | null
    /**
     * Filter, which NodeRelation to fetch.
     */
    where?: NodeRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NodeRelations to fetch.
     */
    orderBy?: NodeRelationOrderByWithRelationInput | NodeRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NodeRelations.
     */
    cursor?: NodeRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NodeRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NodeRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NodeRelations.
     */
    distinct?: NodeRelationScalarFieldEnum | NodeRelationScalarFieldEnum[]
  }

  /**
   * NodeRelation findFirstOrThrow
   */
  export type NodeRelationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeRelation
     */
    select?: NodeRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeRelation
     */
    omit?: NodeRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeRelationInclude<ExtArgs> | null
    /**
     * Filter, which NodeRelation to fetch.
     */
    where?: NodeRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NodeRelations to fetch.
     */
    orderBy?: NodeRelationOrderByWithRelationInput | NodeRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NodeRelations.
     */
    cursor?: NodeRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NodeRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NodeRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NodeRelations.
     */
    distinct?: NodeRelationScalarFieldEnum | NodeRelationScalarFieldEnum[]
  }

  /**
   * NodeRelation findMany
   */
  export type NodeRelationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeRelation
     */
    select?: NodeRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeRelation
     */
    omit?: NodeRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeRelationInclude<ExtArgs> | null
    /**
     * Filter, which NodeRelations to fetch.
     */
    where?: NodeRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NodeRelations to fetch.
     */
    orderBy?: NodeRelationOrderByWithRelationInput | NodeRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NodeRelations.
     */
    cursor?: NodeRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NodeRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NodeRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NodeRelations.
     */
    distinct?: NodeRelationScalarFieldEnum | NodeRelationScalarFieldEnum[]
  }

  /**
   * NodeRelation create
   */
  export type NodeRelationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeRelation
     */
    select?: NodeRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeRelation
     */
    omit?: NodeRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeRelationInclude<ExtArgs> | null
    /**
     * The data needed to create a NodeRelation.
     */
    data: XOR<NodeRelationCreateInput, NodeRelationUncheckedCreateInput>
  }

  /**
   * NodeRelation createMany
   */
  export type NodeRelationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NodeRelations.
     */
    data: NodeRelationCreateManyInput | NodeRelationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NodeRelation createManyAndReturn
   */
  export type NodeRelationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeRelation
     */
    select?: NodeRelationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NodeRelation
     */
    omit?: NodeRelationOmit<ExtArgs> | null
    /**
     * The data used to create many NodeRelations.
     */
    data: NodeRelationCreateManyInput | NodeRelationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeRelationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NodeRelation update
   */
  export type NodeRelationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeRelation
     */
    select?: NodeRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeRelation
     */
    omit?: NodeRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeRelationInclude<ExtArgs> | null
    /**
     * The data needed to update a NodeRelation.
     */
    data: XOR<NodeRelationUpdateInput, NodeRelationUncheckedUpdateInput>
    /**
     * Choose, which NodeRelation to update.
     */
    where: NodeRelationWhereUniqueInput
  }

  /**
   * NodeRelation updateMany
   */
  export type NodeRelationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NodeRelations.
     */
    data: XOR<NodeRelationUpdateManyMutationInput, NodeRelationUncheckedUpdateManyInput>
    /**
     * Filter which NodeRelations to update
     */
    where?: NodeRelationWhereInput
    /**
     * Limit how many NodeRelations to update.
     */
    limit?: number
  }

  /**
   * NodeRelation updateManyAndReturn
   */
  export type NodeRelationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeRelation
     */
    select?: NodeRelationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NodeRelation
     */
    omit?: NodeRelationOmit<ExtArgs> | null
    /**
     * The data used to update NodeRelations.
     */
    data: XOR<NodeRelationUpdateManyMutationInput, NodeRelationUncheckedUpdateManyInput>
    /**
     * Filter which NodeRelations to update
     */
    where?: NodeRelationWhereInput
    /**
     * Limit how many NodeRelations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeRelationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NodeRelation upsert
   */
  export type NodeRelationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeRelation
     */
    select?: NodeRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeRelation
     */
    omit?: NodeRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeRelationInclude<ExtArgs> | null
    /**
     * The filter to search for the NodeRelation to update in case it exists.
     */
    where: NodeRelationWhereUniqueInput
    /**
     * In case the NodeRelation found by the `where` argument doesn't exist, create a new NodeRelation with this data.
     */
    create: XOR<NodeRelationCreateInput, NodeRelationUncheckedCreateInput>
    /**
     * In case the NodeRelation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NodeRelationUpdateInput, NodeRelationUncheckedUpdateInput>
  }

  /**
   * NodeRelation delete
   */
  export type NodeRelationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeRelation
     */
    select?: NodeRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeRelation
     */
    omit?: NodeRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeRelationInclude<ExtArgs> | null
    /**
     * Filter which NodeRelation to delete.
     */
    where: NodeRelationWhereUniqueInput
  }

  /**
   * NodeRelation deleteMany
   */
  export type NodeRelationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NodeRelations to delete
     */
    where?: NodeRelationWhereInput
    /**
     * Limit how many NodeRelations to delete.
     */
    limit?: number
  }

  /**
   * NodeRelation without action
   */
  export type NodeRelationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeRelation
     */
    select?: NodeRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeRelation
     */
    omit?: NodeRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeRelationInclude<ExtArgs> | null
  }


  /**
   * Model Chapter
   */

  export type AggregateChapter = {
    _count: ChapterCountAggregateOutputType | null
    _avg: ChapterAvgAggregateOutputType | null
    _sum: ChapterSumAggregateOutputType | null
    _min: ChapterMinAggregateOutputType | null
    _max: ChapterMaxAggregateOutputType | null
  }

  export type ChapterAvgAggregateOutputType = {
    order: number | null
  }

  export type ChapterSumAggregateOutputType = {
    order: number | null
  }

  export type ChapterMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    order: number | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChapterMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    order: number | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChapterCountAggregateOutputType = {
    id: number
    projectId: number
    order: number
    title: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChapterAvgAggregateInputType = {
    order?: true
  }

  export type ChapterSumAggregateInputType = {
    order?: true
  }

  export type ChapterMinAggregateInputType = {
    id?: true
    projectId?: true
    order?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChapterMaxAggregateInputType = {
    id?: true
    projectId?: true
    order?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChapterCountAggregateInputType = {
    id?: true
    projectId?: true
    order?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChapterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chapter to aggregate.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chapters
    **/
    _count?: true | ChapterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChapterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChapterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChapterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChapterMaxAggregateInputType
  }

  export type GetChapterAggregateType<T extends ChapterAggregateArgs> = {
        [P in keyof T & keyof AggregateChapter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChapter[P]>
      : GetScalarType<T[P], AggregateChapter[P]>
  }




  export type ChapterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChapterWhereInput
    orderBy?: ChapterOrderByWithAggregationInput | ChapterOrderByWithAggregationInput[]
    by: ChapterScalarFieldEnum[] | ChapterScalarFieldEnum
    having?: ChapterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChapterCountAggregateInputType | true
    _avg?: ChapterAvgAggregateInputType
    _sum?: ChapterSumAggregateInputType
    _min?: ChapterMinAggregateInputType
    _max?: ChapterMaxAggregateInputType
  }

  export type ChapterGroupByOutputType = {
    id: string
    projectId: string
    order: number
    title: string | null
    content: string | null
    createdAt: Date
    updatedAt: Date
    _count: ChapterCountAggregateOutputType | null
    _avg: ChapterAvgAggregateOutputType | null
    _sum: ChapterSumAggregateOutputType | null
    _min: ChapterMinAggregateOutputType | null
    _max: ChapterMaxAggregateOutputType | null
  }

  type GetChapterGroupByPayload<T extends ChapterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChapterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChapterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChapterGroupByOutputType[P]>
            : GetScalarType<T[P], ChapterGroupByOutputType[P]>
        }
      >
    >


  export type ChapterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    order?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapter"]>

  export type ChapterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    order?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapter"]>

  export type ChapterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    order?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapter"]>

  export type ChapterSelectScalar = {
    id?: boolean
    projectId?: boolean
    order?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChapterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "order" | "title" | "content" | "createdAt" | "updatedAt", ExtArgs["result"]["chapter"]>
  export type ChapterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ChapterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ChapterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ChapterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chapter"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      order: number
      title: string | null
      content: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chapter"]>
    composites: {}
  }

  type ChapterGetPayload<S extends boolean | null | undefined | ChapterDefaultArgs> = $Result.GetResult<Prisma.$ChapterPayload, S>

  type ChapterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChapterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChapterCountAggregateInputType | true
    }

  export interface ChapterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chapter'], meta: { name: 'Chapter' } }
    /**
     * Find zero or one Chapter that matches the filter.
     * @param {ChapterFindUniqueArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChapterFindUniqueArgs>(args: SelectSubset<T, ChapterFindUniqueArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chapter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChapterFindUniqueOrThrowArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChapterFindUniqueOrThrowArgs>(args: SelectSubset<T, ChapterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chapter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindFirstArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChapterFindFirstArgs>(args?: SelectSubset<T, ChapterFindFirstArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chapter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindFirstOrThrowArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChapterFindFirstOrThrowArgs>(args?: SelectSubset<T, ChapterFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chapters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chapters
     * const chapters = await prisma.chapter.findMany()
     * 
     * // Get first 10 Chapters
     * const chapters = await prisma.chapter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chapterWithIdOnly = await prisma.chapter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChapterFindManyArgs>(args?: SelectSubset<T, ChapterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chapter.
     * @param {ChapterCreateArgs} args - Arguments to create a Chapter.
     * @example
     * // Create one Chapter
     * const Chapter = await prisma.chapter.create({
     *   data: {
     *     // ... data to create a Chapter
     *   }
     * })
     * 
     */
    create<T extends ChapterCreateArgs>(args: SelectSubset<T, ChapterCreateArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chapters.
     * @param {ChapterCreateManyArgs} args - Arguments to create many Chapters.
     * @example
     * // Create many Chapters
     * const chapter = await prisma.chapter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChapterCreateManyArgs>(args?: SelectSubset<T, ChapterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chapters and returns the data saved in the database.
     * @param {ChapterCreateManyAndReturnArgs} args - Arguments to create many Chapters.
     * @example
     * // Create many Chapters
     * const chapter = await prisma.chapter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chapters and only return the `id`
     * const chapterWithIdOnly = await prisma.chapter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChapterCreateManyAndReturnArgs>(args?: SelectSubset<T, ChapterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chapter.
     * @param {ChapterDeleteArgs} args - Arguments to delete one Chapter.
     * @example
     * // Delete one Chapter
     * const Chapter = await prisma.chapter.delete({
     *   where: {
     *     // ... filter to delete one Chapter
     *   }
     * })
     * 
     */
    delete<T extends ChapterDeleteArgs>(args: SelectSubset<T, ChapterDeleteArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chapter.
     * @param {ChapterUpdateArgs} args - Arguments to update one Chapter.
     * @example
     * // Update one Chapter
     * const chapter = await prisma.chapter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChapterUpdateArgs>(args: SelectSubset<T, ChapterUpdateArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chapters.
     * @param {ChapterDeleteManyArgs} args - Arguments to filter Chapters to delete.
     * @example
     * // Delete a few Chapters
     * const { count } = await prisma.chapter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChapterDeleteManyArgs>(args?: SelectSubset<T, ChapterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chapters
     * const chapter = await prisma.chapter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChapterUpdateManyArgs>(args: SelectSubset<T, ChapterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chapters and returns the data updated in the database.
     * @param {ChapterUpdateManyAndReturnArgs} args - Arguments to update many Chapters.
     * @example
     * // Update many Chapters
     * const chapter = await prisma.chapter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chapters and only return the `id`
     * const chapterWithIdOnly = await prisma.chapter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChapterUpdateManyAndReturnArgs>(args: SelectSubset<T, ChapterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chapter.
     * @param {ChapterUpsertArgs} args - Arguments to update or create a Chapter.
     * @example
     * // Update or create a Chapter
     * const chapter = await prisma.chapter.upsert({
     *   create: {
     *     // ... data to create a Chapter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chapter we want to update
     *   }
     * })
     */
    upsert<T extends ChapterUpsertArgs>(args: SelectSubset<T, ChapterUpsertArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterCountArgs} args - Arguments to filter Chapters to count.
     * @example
     * // Count the number of Chapters
     * const count = await prisma.chapter.count({
     *   where: {
     *     // ... the filter for the Chapters we want to count
     *   }
     * })
    **/
    count<T extends ChapterCountArgs>(
      args?: Subset<T, ChapterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChapterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChapterAggregateArgs>(args: Subset<T, ChapterAggregateArgs>): Prisma.PrismaPromise<GetChapterAggregateType<T>>

    /**
     * Group by Chapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChapterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChapterGroupByArgs['orderBy'] }
        : { orderBy?: ChapterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChapterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChapterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chapter model
   */
  readonly fields: ChapterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chapter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChapterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Chapter model
   */
  interface ChapterFieldRefs {
    readonly id: FieldRef<"Chapter", 'String'>
    readonly projectId: FieldRef<"Chapter", 'String'>
    readonly order: FieldRef<"Chapter", 'Int'>
    readonly title: FieldRef<"Chapter", 'String'>
    readonly content: FieldRef<"Chapter", 'String'>
    readonly createdAt: FieldRef<"Chapter", 'DateTime'>
    readonly updatedAt: FieldRef<"Chapter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Chapter findUnique
   */
  export type ChapterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter findUniqueOrThrow
   */
  export type ChapterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter findFirst
   */
  export type ChapterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chapters.
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chapters.
     */
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Chapter findFirstOrThrow
   */
  export type ChapterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chapters.
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chapters.
     */
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Chapter findMany
   */
  export type ChapterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapters to fetch.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chapters.
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chapters.
     */
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Chapter create
   */
  export type ChapterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * The data needed to create a Chapter.
     */
    data: XOR<ChapterCreateInput, ChapterUncheckedCreateInput>
  }

  /**
   * Chapter createMany
   */
  export type ChapterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chapters.
     */
    data: ChapterCreateManyInput | ChapterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chapter createManyAndReturn
   */
  export type ChapterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * The data used to create many Chapters.
     */
    data: ChapterCreateManyInput | ChapterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chapter update
   */
  export type ChapterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * The data needed to update a Chapter.
     */
    data: XOR<ChapterUpdateInput, ChapterUncheckedUpdateInput>
    /**
     * Choose, which Chapter to update.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter updateMany
   */
  export type ChapterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chapters.
     */
    data: XOR<ChapterUpdateManyMutationInput, ChapterUncheckedUpdateManyInput>
    /**
     * Filter which Chapters to update
     */
    where?: ChapterWhereInput
    /**
     * Limit how many Chapters to update.
     */
    limit?: number
  }

  /**
   * Chapter updateManyAndReturn
   */
  export type ChapterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * The data used to update Chapters.
     */
    data: XOR<ChapterUpdateManyMutationInput, ChapterUncheckedUpdateManyInput>
    /**
     * Filter which Chapters to update
     */
    where?: ChapterWhereInput
    /**
     * Limit how many Chapters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chapter upsert
   */
  export type ChapterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * The filter to search for the Chapter to update in case it exists.
     */
    where: ChapterWhereUniqueInput
    /**
     * In case the Chapter found by the `where` argument doesn't exist, create a new Chapter with this data.
     */
    create: XOR<ChapterCreateInput, ChapterUncheckedCreateInput>
    /**
     * In case the Chapter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChapterUpdateInput, ChapterUncheckedUpdateInput>
  }

  /**
   * Chapter delete
   */
  export type ChapterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter which Chapter to delete.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter deleteMany
   */
  export type ChapterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chapters to delete
     */
    where?: ChapterWhereInput
    /**
     * Limit how many Chapters to delete.
     */
    limit?: number
  }

  /**
   * Chapter without action
   */
  export type ChapterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
  }


  /**
   * Model Lore
   */

  export type AggregateLore = {
    _count: LoreCountAggregateOutputType | null
    _min: LoreMinAggregateOutputType | null
    _max: LoreMaxAggregateOutputType | null
  }

  export type LoreMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    type: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LoreMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    type: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LoreCountAggregateOutputType = {
    id: number
    projectId: number
    type: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LoreMinAggregateInputType = {
    id?: true
    projectId?: true
    type?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LoreMaxAggregateInputType = {
    id?: true
    projectId?: true
    type?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LoreCountAggregateInputType = {
    id?: true
    projectId?: true
    type?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lore to aggregate.
     */
    where?: LoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lores to fetch.
     */
    orderBy?: LoreOrderByWithRelationInput | LoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lores
    **/
    _count?: true | LoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoreMaxAggregateInputType
  }

  export type GetLoreAggregateType<T extends LoreAggregateArgs> = {
        [P in keyof T & keyof AggregateLore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLore[P]>
      : GetScalarType<T[P], AggregateLore[P]>
  }




  export type LoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoreWhereInput
    orderBy?: LoreOrderByWithAggregationInput | LoreOrderByWithAggregationInput[]
    by: LoreScalarFieldEnum[] | LoreScalarFieldEnum
    having?: LoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoreCountAggregateInputType | true
    _min?: LoreMinAggregateInputType
    _max?: LoreMaxAggregateInputType
  }

  export type LoreGroupByOutputType = {
    id: string
    projectId: string
    type: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: LoreCountAggregateOutputType | null
    _min: LoreMinAggregateOutputType | null
    _max: LoreMaxAggregateOutputType | null
  }

  type GetLoreGroupByPayload<T extends LoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoreGroupByOutputType[P]>
            : GetScalarType<T[P], LoreGroupByOutputType[P]>
        }
      >
    >


  export type LoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lore"]>

  export type LoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lore"]>

  export type LoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lore"]>

  export type LoreSelectScalar = {
    id?: boolean
    projectId?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "type" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["lore"]>
  export type LoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type LoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type LoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $LorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lore"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      type: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lore"]>
    composites: {}
  }

  type LoreGetPayload<S extends boolean | null | undefined | LoreDefaultArgs> = $Result.GetResult<Prisma.$LorePayload, S>

  type LoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoreCountAggregateInputType | true
    }

  export interface LoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lore'], meta: { name: 'Lore' } }
    /**
     * Find zero or one Lore that matches the filter.
     * @param {LoreFindUniqueArgs} args - Arguments to find a Lore
     * @example
     * // Get one Lore
     * const lore = await prisma.lore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoreFindUniqueArgs>(args: SelectSubset<T, LoreFindUniqueArgs<ExtArgs>>): Prisma__LoreClient<$Result.GetResult<Prisma.$LorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoreFindUniqueOrThrowArgs} args - Arguments to find a Lore
     * @example
     * // Get one Lore
     * const lore = await prisma.lore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoreFindUniqueOrThrowArgs>(args: SelectSubset<T, LoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoreClient<$Result.GetResult<Prisma.$LorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoreFindFirstArgs} args - Arguments to find a Lore
     * @example
     * // Get one Lore
     * const lore = await prisma.lore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoreFindFirstArgs>(args?: SelectSubset<T, LoreFindFirstArgs<ExtArgs>>): Prisma__LoreClient<$Result.GetResult<Prisma.$LorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoreFindFirstOrThrowArgs} args - Arguments to find a Lore
     * @example
     * // Get one Lore
     * const lore = await prisma.lore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoreFindFirstOrThrowArgs>(args?: SelectSubset<T, LoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoreClient<$Result.GetResult<Prisma.$LorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lores
     * const lores = await prisma.lore.findMany()
     * 
     * // Get first 10 Lores
     * const lores = await prisma.lore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loreWithIdOnly = await prisma.lore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoreFindManyArgs>(args?: SelectSubset<T, LoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lore.
     * @param {LoreCreateArgs} args - Arguments to create a Lore.
     * @example
     * // Create one Lore
     * const Lore = await prisma.lore.create({
     *   data: {
     *     // ... data to create a Lore
     *   }
     * })
     * 
     */
    create<T extends LoreCreateArgs>(args: SelectSubset<T, LoreCreateArgs<ExtArgs>>): Prisma__LoreClient<$Result.GetResult<Prisma.$LorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lores.
     * @param {LoreCreateManyArgs} args - Arguments to create many Lores.
     * @example
     * // Create many Lores
     * const lore = await prisma.lore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoreCreateManyArgs>(args?: SelectSubset<T, LoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lores and returns the data saved in the database.
     * @param {LoreCreateManyAndReturnArgs} args - Arguments to create many Lores.
     * @example
     * // Create many Lores
     * const lore = await prisma.lore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lores and only return the `id`
     * const loreWithIdOnly = await prisma.lore.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LoreCreateManyAndReturnArgs>(args?: SelectSubset<T, LoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lore.
     * @param {LoreDeleteArgs} args - Arguments to delete one Lore.
     * @example
     * // Delete one Lore
     * const Lore = await prisma.lore.delete({
     *   where: {
     *     // ... filter to delete one Lore
     *   }
     * })
     * 
     */
    delete<T extends LoreDeleteArgs>(args: SelectSubset<T, LoreDeleteArgs<ExtArgs>>): Prisma__LoreClient<$Result.GetResult<Prisma.$LorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lore.
     * @param {LoreUpdateArgs} args - Arguments to update one Lore.
     * @example
     * // Update one Lore
     * const lore = await prisma.lore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoreUpdateArgs>(args: SelectSubset<T, LoreUpdateArgs<ExtArgs>>): Prisma__LoreClient<$Result.GetResult<Prisma.$LorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lores.
     * @param {LoreDeleteManyArgs} args - Arguments to filter Lores to delete.
     * @example
     * // Delete a few Lores
     * const { count } = await prisma.lore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoreDeleteManyArgs>(args?: SelectSubset<T, LoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lores
     * const lore = await prisma.lore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoreUpdateManyArgs>(args: SelectSubset<T, LoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lores and returns the data updated in the database.
     * @param {LoreUpdateManyAndReturnArgs} args - Arguments to update many Lores.
     * @example
     * // Update many Lores
     * const lore = await prisma.lore.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lores and only return the `id`
     * const loreWithIdOnly = await prisma.lore.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LoreUpdateManyAndReturnArgs>(args: SelectSubset<T, LoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lore.
     * @param {LoreUpsertArgs} args - Arguments to update or create a Lore.
     * @example
     * // Update or create a Lore
     * const lore = await prisma.lore.upsert({
     *   create: {
     *     // ... data to create a Lore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lore we want to update
     *   }
     * })
     */
    upsert<T extends LoreUpsertArgs>(args: SelectSubset<T, LoreUpsertArgs<ExtArgs>>): Prisma__LoreClient<$Result.GetResult<Prisma.$LorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoreCountArgs} args - Arguments to filter Lores to count.
     * @example
     * // Count the number of Lores
     * const count = await prisma.lore.count({
     *   where: {
     *     // ... the filter for the Lores we want to count
     *   }
     * })
    **/
    count<T extends LoreCountArgs>(
      args?: Subset<T, LoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LoreAggregateArgs>(args: Subset<T, LoreAggregateArgs>): Prisma.PrismaPromise<GetLoreAggregateType<T>>

    /**
     * Group by Lore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoreGroupByArgs['orderBy'] }
        : { orderBy?: LoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lore model
   */
  readonly fields: LoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lore model
   */
  interface LoreFieldRefs {
    readonly id: FieldRef<"Lore", 'String'>
    readonly projectId: FieldRef<"Lore", 'String'>
    readonly type: FieldRef<"Lore", 'String'>
    readonly name: FieldRef<"Lore", 'String'>
    readonly description: FieldRef<"Lore", 'String'>
    readonly createdAt: FieldRef<"Lore", 'DateTime'>
    readonly updatedAt: FieldRef<"Lore", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lore findUnique
   */
  export type LoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lore
     */
    select?: LoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lore
     */
    omit?: LoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreInclude<ExtArgs> | null
    /**
     * Filter, which Lore to fetch.
     */
    where: LoreWhereUniqueInput
  }

  /**
   * Lore findUniqueOrThrow
   */
  export type LoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lore
     */
    select?: LoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lore
     */
    omit?: LoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreInclude<ExtArgs> | null
    /**
     * Filter, which Lore to fetch.
     */
    where: LoreWhereUniqueInput
  }

  /**
   * Lore findFirst
   */
  export type LoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lore
     */
    select?: LoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lore
     */
    omit?: LoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreInclude<ExtArgs> | null
    /**
     * Filter, which Lore to fetch.
     */
    where?: LoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lores to fetch.
     */
    orderBy?: LoreOrderByWithRelationInput | LoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lores.
     */
    cursor?: LoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lores.
     */
    distinct?: LoreScalarFieldEnum | LoreScalarFieldEnum[]
  }

  /**
   * Lore findFirstOrThrow
   */
  export type LoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lore
     */
    select?: LoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lore
     */
    omit?: LoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreInclude<ExtArgs> | null
    /**
     * Filter, which Lore to fetch.
     */
    where?: LoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lores to fetch.
     */
    orderBy?: LoreOrderByWithRelationInput | LoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lores.
     */
    cursor?: LoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lores.
     */
    distinct?: LoreScalarFieldEnum | LoreScalarFieldEnum[]
  }

  /**
   * Lore findMany
   */
  export type LoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lore
     */
    select?: LoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lore
     */
    omit?: LoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreInclude<ExtArgs> | null
    /**
     * Filter, which Lores to fetch.
     */
    where?: LoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lores to fetch.
     */
    orderBy?: LoreOrderByWithRelationInput | LoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lores.
     */
    cursor?: LoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lores.
     */
    distinct?: LoreScalarFieldEnum | LoreScalarFieldEnum[]
  }

  /**
   * Lore create
   */
  export type LoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lore
     */
    select?: LoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lore
     */
    omit?: LoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Lore.
     */
    data: XOR<LoreCreateInput, LoreUncheckedCreateInput>
  }

  /**
   * Lore createMany
   */
  export type LoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lores.
     */
    data: LoreCreateManyInput | LoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lore createManyAndReturn
   */
  export type LoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lore
     */
    select?: LoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lore
     */
    omit?: LoreOmit<ExtArgs> | null
    /**
     * The data used to create many Lores.
     */
    data: LoreCreateManyInput | LoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lore update
   */
  export type LoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lore
     */
    select?: LoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lore
     */
    omit?: LoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Lore.
     */
    data: XOR<LoreUpdateInput, LoreUncheckedUpdateInput>
    /**
     * Choose, which Lore to update.
     */
    where: LoreWhereUniqueInput
  }

  /**
   * Lore updateMany
   */
  export type LoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lores.
     */
    data: XOR<LoreUpdateManyMutationInput, LoreUncheckedUpdateManyInput>
    /**
     * Filter which Lores to update
     */
    where?: LoreWhereInput
    /**
     * Limit how many Lores to update.
     */
    limit?: number
  }

  /**
   * Lore updateManyAndReturn
   */
  export type LoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lore
     */
    select?: LoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lore
     */
    omit?: LoreOmit<ExtArgs> | null
    /**
     * The data used to update Lores.
     */
    data: XOR<LoreUpdateManyMutationInput, LoreUncheckedUpdateManyInput>
    /**
     * Filter which Lores to update
     */
    where?: LoreWhereInput
    /**
     * Limit how many Lores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lore upsert
   */
  export type LoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lore
     */
    select?: LoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lore
     */
    omit?: LoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Lore to update in case it exists.
     */
    where: LoreWhereUniqueInput
    /**
     * In case the Lore found by the `where` argument doesn't exist, create a new Lore with this data.
     */
    create: XOR<LoreCreateInput, LoreUncheckedCreateInput>
    /**
     * In case the Lore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoreUpdateInput, LoreUncheckedUpdateInput>
  }

  /**
   * Lore delete
   */
  export type LoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lore
     */
    select?: LoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lore
     */
    omit?: LoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreInclude<ExtArgs> | null
    /**
     * Filter which Lore to delete.
     */
    where: LoreWhereUniqueInput
  }

  /**
   * Lore deleteMany
   */
  export type LoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lores to delete
     */
    where?: LoreWhereInput
    /**
     * Limit how many Lores to delete.
     */
    limit?: number
  }

  /**
   * Lore without action
   */
  export type LoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lore
     */
    select?: LoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lore
     */
    omit?: LoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreInclude<ExtArgs> | null
  }


  /**
   * Model Character
   */

  export type AggregateCharacter = {
    _count: CharacterCountAggregateOutputType | null
    _min: CharacterMinAggregateOutputType | null
    _max: CharacterMaxAggregateOutputType | null
  }

  export type CharacterMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    archetype: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CharacterMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    archetype: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CharacterCountAggregateOutputType = {
    id: number
    projectId: number
    name: number
    archetype: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CharacterMinAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    archetype?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CharacterMaxAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    archetype?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CharacterCountAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    archetype?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CharacterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Character to aggregate.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Characters
    **/
    _count?: true | CharacterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharacterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharacterMaxAggregateInputType
  }

  export type GetCharacterAggregateType<T extends CharacterAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacter[P]>
      : GetScalarType<T[P], AggregateCharacter[P]>
  }




  export type CharacterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterWhereInput
    orderBy?: CharacterOrderByWithAggregationInput | CharacterOrderByWithAggregationInput[]
    by: CharacterScalarFieldEnum[] | CharacterScalarFieldEnum
    having?: CharacterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharacterCountAggregateInputType | true
    _min?: CharacterMinAggregateInputType
    _max?: CharacterMaxAggregateInputType
  }

  export type CharacterGroupByOutputType = {
    id: string
    projectId: string
    name: string
    archetype: string | null
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: CharacterCountAggregateOutputType | null
    _min: CharacterMinAggregateOutputType | null
    _max: CharacterMaxAggregateOutputType | null
  }

  type GetCharacterGroupByPayload<T extends CharacterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharacterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharacterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharacterGroupByOutputType[P]>
            : GetScalarType<T[P], CharacterGroupByOutputType[P]>
        }
      >
    >


  export type CharacterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    archetype?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    archetype?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    archetype?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectScalar = {
    id?: boolean
    projectId?: boolean
    name?: boolean
    archetype?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CharacterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "name" | "archetype" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["character"]>
  export type CharacterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type CharacterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type CharacterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $CharacterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Character"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      name: string
      archetype: string | null
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["character"]>
    composites: {}
  }

  type CharacterGetPayload<S extends boolean | null | undefined | CharacterDefaultArgs> = $Result.GetResult<Prisma.$CharacterPayload, S>

  type CharacterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CharacterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CharacterCountAggregateInputType | true
    }

  export interface CharacterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Character'], meta: { name: 'Character' } }
    /**
     * Find zero or one Character that matches the filter.
     * @param {CharacterFindUniqueArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharacterFindUniqueArgs>(args: SelectSubset<T, CharacterFindUniqueArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Character that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CharacterFindUniqueOrThrowArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharacterFindUniqueOrThrowArgs>(args: SelectSubset<T, CharacterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Character that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindFirstArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharacterFindFirstArgs>(args?: SelectSubset<T, CharacterFindFirstArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Character that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindFirstOrThrowArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharacterFindFirstOrThrowArgs>(args?: SelectSubset<T, CharacterFindFirstOrThrowArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Characters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Characters
     * const characters = await prisma.character.findMany()
     * 
     * // Get first 10 Characters
     * const characters = await prisma.character.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const characterWithIdOnly = await prisma.character.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CharacterFindManyArgs>(args?: SelectSubset<T, CharacterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Character.
     * @param {CharacterCreateArgs} args - Arguments to create a Character.
     * @example
     * // Create one Character
     * const Character = await prisma.character.create({
     *   data: {
     *     // ... data to create a Character
     *   }
     * })
     * 
     */
    create<T extends CharacterCreateArgs>(args: SelectSubset<T, CharacterCreateArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Characters.
     * @param {CharacterCreateManyArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const character = await prisma.character.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CharacterCreateManyArgs>(args?: SelectSubset<T, CharacterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Characters and returns the data saved in the database.
     * @param {CharacterCreateManyAndReturnArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const character = await prisma.character.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Characters and only return the `id`
     * const characterWithIdOnly = await prisma.character.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CharacterCreateManyAndReturnArgs>(args?: SelectSubset<T, CharacterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Character.
     * @param {CharacterDeleteArgs} args - Arguments to delete one Character.
     * @example
     * // Delete one Character
     * const Character = await prisma.character.delete({
     *   where: {
     *     // ... filter to delete one Character
     *   }
     * })
     * 
     */
    delete<T extends CharacterDeleteArgs>(args: SelectSubset<T, CharacterDeleteArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Character.
     * @param {CharacterUpdateArgs} args - Arguments to update one Character.
     * @example
     * // Update one Character
     * const character = await prisma.character.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CharacterUpdateArgs>(args: SelectSubset<T, CharacterUpdateArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Characters.
     * @param {CharacterDeleteManyArgs} args - Arguments to filter Characters to delete.
     * @example
     * // Delete a few Characters
     * const { count } = await prisma.character.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CharacterDeleteManyArgs>(args?: SelectSubset<T, CharacterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Characters
     * const character = await prisma.character.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CharacterUpdateManyArgs>(args: SelectSubset<T, CharacterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characters and returns the data updated in the database.
     * @param {CharacterUpdateManyAndReturnArgs} args - Arguments to update many Characters.
     * @example
     * // Update many Characters
     * const character = await prisma.character.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Characters and only return the `id`
     * const characterWithIdOnly = await prisma.character.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CharacterUpdateManyAndReturnArgs>(args: SelectSubset<T, CharacterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Character.
     * @param {CharacterUpsertArgs} args - Arguments to update or create a Character.
     * @example
     * // Update or create a Character
     * const character = await prisma.character.upsert({
     *   create: {
     *     // ... data to create a Character
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Character we want to update
     *   }
     * })
     */
    upsert<T extends CharacterUpsertArgs>(args: SelectSubset<T, CharacterUpsertArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterCountArgs} args - Arguments to filter Characters to count.
     * @example
     * // Count the number of Characters
     * const count = await prisma.character.count({
     *   where: {
     *     // ... the filter for the Characters we want to count
     *   }
     * })
    **/
    count<T extends CharacterCountArgs>(
      args?: Subset<T, CharacterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharacterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Character.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CharacterAggregateArgs>(args: Subset<T, CharacterAggregateArgs>): Prisma.PrismaPromise<GetCharacterAggregateType<T>>

    /**
     * Group by Character.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CharacterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharacterGroupByArgs['orderBy'] }
        : { orderBy?: CharacterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CharacterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Character model
   */
  readonly fields: CharacterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Character.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharacterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Character model
   */
  interface CharacterFieldRefs {
    readonly id: FieldRef<"Character", 'String'>
    readonly projectId: FieldRef<"Character", 'String'>
    readonly name: FieldRef<"Character", 'String'>
    readonly archetype: FieldRef<"Character", 'String'>
    readonly description: FieldRef<"Character", 'String'>
    readonly createdAt: FieldRef<"Character", 'DateTime'>
    readonly updatedAt: FieldRef<"Character", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Character findUnique
   */
  export type CharacterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character findUniqueOrThrow
   */
  export type CharacterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character findFirst
   */
  export type CharacterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character findFirstOrThrow
   */
  export type CharacterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character findMany
   */
  export type CharacterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character create
   */
  export type CharacterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The data needed to create a Character.
     */
    data: XOR<CharacterCreateInput, CharacterUncheckedCreateInput>
  }

  /**
   * Character createMany
   */
  export type CharacterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Characters.
     */
    data: CharacterCreateManyInput | CharacterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Character createManyAndReturn
   */
  export type CharacterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * The data used to create many Characters.
     */
    data: CharacterCreateManyInput | CharacterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Character update
   */
  export type CharacterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The data needed to update a Character.
     */
    data: XOR<CharacterUpdateInput, CharacterUncheckedUpdateInput>
    /**
     * Choose, which Character to update.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character updateMany
   */
  export type CharacterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Characters.
     */
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyInput>
    /**
     * Filter which Characters to update
     */
    where?: CharacterWhereInput
    /**
     * Limit how many Characters to update.
     */
    limit?: number
  }

  /**
   * Character updateManyAndReturn
   */
  export type CharacterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * The data used to update Characters.
     */
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyInput>
    /**
     * Filter which Characters to update
     */
    where?: CharacterWhereInput
    /**
     * Limit how many Characters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Character upsert
   */
  export type CharacterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The filter to search for the Character to update in case it exists.
     */
    where: CharacterWhereUniqueInput
    /**
     * In case the Character found by the `where` argument doesn't exist, create a new Character with this data.
     */
    create: XOR<CharacterCreateInput, CharacterUncheckedCreateInput>
    /**
     * In case the Character was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharacterUpdateInput, CharacterUncheckedUpdateInput>
  }

  /**
   * Character delete
   */
  export type CharacterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter which Character to delete.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character deleteMany
   */
  export type CharacterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Characters to delete
     */
    where?: CharacterWhereInput
    /**
     * Limit how many Characters to delete.
     */
    limit?: number
  }

  /**
   * Character without action
   */
  export type CharacterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
  }


  /**
   * Model Monster
   */

  export type AggregateMonster = {
    _count: MonsterCountAggregateOutputType | null
    _min: MonsterMinAggregateOutputType | null
    _max: MonsterMaxAggregateOutputType | null
  }

  export type MonsterMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    habitat: string | null
    abilities: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MonsterMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    habitat: string | null
    abilities: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MonsterCountAggregateOutputType = {
    id: number
    projectId: number
    name: number
    habitat: number
    abilities: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MonsterMinAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    habitat?: true
    abilities?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MonsterMaxAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    habitat?: true
    abilities?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MonsterCountAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    habitat?: true
    abilities?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MonsterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Monster to aggregate.
     */
    where?: MonsterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monsters to fetch.
     */
    orderBy?: MonsterOrderByWithRelationInput | MonsterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonsterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monsters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monsters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Monsters
    **/
    _count?: true | MonsterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonsterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonsterMaxAggregateInputType
  }

  export type GetMonsterAggregateType<T extends MonsterAggregateArgs> = {
        [P in keyof T & keyof AggregateMonster]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonster[P]>
      : GetScalarType<T[P], AggregateMonster[P]>
  }




  export type MonsterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonsterWhereInput
    orderBy?: MonsterOrderByWithAggregationInput | MonsterOrderByWithAggregationInput[]
    by: MonsterScalarFieldEnum[] | MonsterScalarFieldEnum
    having?: MonsterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonsterCountAggregateInputType | true
    _min?: MonsterMinAggregateInputType
    _max?: MonsterMaxAggregateInputType
  }

  export type MonsterGroupByOutputType = {
    id: string
    projectId: string
    name: string
    habitat: string | null
    abilities: string | null
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: MonsterCountAggregateOutputType | null
    _min: MonsterMinAggregateOutputType | null
    _max: MonsterMaxAggregateOutputType | null
  }

  type GetMonsterGroupByPayload<T extends MonsterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonsterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonsterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonsterGroupByOutputType[P]>
            : GetScalarType<T[P], MonsterGroupByOutputType[P]>
        }
      >
    >


  export type MonsterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    habitat?: boolean
    abilities?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monster"]>

  export type MonsterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    habitat?: boolean
    abilities?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monster"]>

  export type MonsterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    habitat?: boolean
    abilities?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monster"]>

  export type MonsterSelectScalar = {
    id?: boolean
    projectId?: boolean
    name?: boolean
    habitat?: boolean
    abilities?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MonsterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "name" | "habitat" | "abilities" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["monster"]>
  export type MonsterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type MonsterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type MonsterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $MonsterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Monster"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      name: string
      habitat: string | null
      abilities: string | null
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["monster"]>
    composites: {}
  }

  type MonsterGetPayload<S extends boolean | null | undefined | MonsterDefaultArgs> = $Result.GetResult<Prisma.$MonsterPayload, S>

  type MonsterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MonsterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MonsterCountAggregateInputType | true
    }

  export interface MonsterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Monster'], meta: { name: 'Monster' } }
    /**
     * Find zero or one Monster that matches the filter.
     * @param {MonsterFindUniqueArgs} args - Arguments to find a Monster
     * @example
     * // Get one Monster
     * const monster = await prisma.monster.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonsterFindUniqueArgs>(args: SelectSubset<T, MonsterFindUniqueArgs<ExtArgs>>): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Monster that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MonsterFindUniqueOrThrowArgs} args - Arguments to find a Monster
     * @example
     * // Get one Monster
     * const monster = await prisma.monster.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonsterFindUniqueOrThrowArgs>(args: SelectSubset<T, MonsterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Monster that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterFindFirstArgs} args - Arguments to find a Monster
     * @example
     * // Get one Monster
     * const monster = await prisma.monster.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonsterFindFirstArgs>(args?: SelectSubset<T, MonsterFindFirstArgs<ExtArgs>>): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Monster that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterFindFirstOrThrowArgs} args - Arguments to find a Monster
     * @example
     * // Get one Monster
     * const monster = await prisma.monster.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonsterFindFirstOrThrowArgs>(args?: SelectSubset<T, MonsterFindFirstOrThrowArgs<ExtArgs>>): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Monsters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Monsters
     * const monsters = await prisma.monster.findMany()
     * 
     * // Get first 10 Monsters
     * const monsters = await prisma.monster.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monsterWithIdOnly = await prisma.monster.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MonsterFindManyArgs>(args?: SelectSubset<T, MonsterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Monster.
     * @param {MonsterCreateArgs} args - Arguments to create a Monster.
     * @example
     * // Create one Monster
     * const Monster = await prisma.monster.create({
     *   data: {
     *     // ... data to create a Monster
     *   }
     * })
     * 
     */
    create<T extends MonsterCreateArgs>(args: SelectSubset<T, MonsterCreateArgs<ExtArgs>>): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Monsters.
     * @param {MonsterCreateManyArgs} args - Arguments to create many Monsters.
     * @example
     * // Create many Monsters
     * const monster = await prisma.monster.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MonsterCreateManyArgs>(args?: SelectSubset<T, MonsterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Monsters and returns the data saved in the database.
     * @param {MonsterCreateManyAndReturnArgs} args - Arguments to create many Monsters.
     * @example
     * // Create many Monsters
     * const monster = await prisma.monster.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Monsters and only return the `id`
     * const monsterWithIdOnly = await prisma.monster.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MonsterCreateManyAndReturnArgs>(args?: SelectSubset<T, MonsterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Monster.
     * @param {MonsterDeleteArgs} args - Arguments to delete one Monster.
     * @example
     * // Delete one Monster
     * const Monster = await prisma.monster.delete({
     *   where: {
     *     // ... filter to delete one Monster
     *   }
     * })
     * 
     */
    delete<T extends MonsterDeleteArgs>(args: SelectSubset<T, MonsterDeleteArgs<ExtArgs>>): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Monster.
     * @param {MonsterUpdateArgs} args - Arguments to update one Monster.
     * @example
     * // Update one Monster
     * const monster = await prisma.monster.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MonsterUpdateArgs>(args: SelectSubset<T, MonsterUpdateArgs<ExtArgs>>): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Monsters.
     * @param {MonsterDeleteManyArgs} args - Arguments to filter Monsters to delete.
     * @example
     * // Delete a few Monsters
     * const { count } = await prisma.monster.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MonsterDeleteManyArgs>(args?: SelectSubset<T, MonsterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Monsters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Monsters
     * const monster = await prisma.monster.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MonsterUpdateManyArgs>(args: SelectSubset<T, MonsterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Monsters and returns the data updated in the database.
     * @param {MonsterUpdateManyAndReturnArgs} args - Arguments to update many Monsters.
     * @example
     * // Update many Monsters
     * const monster = await prisma.monster.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Monsters and only return the `id`
     * const monsterWithIdOnly = await prisma.monster.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MonsterUpdateManyAndReturnArgs>(args: SelectSubset<T, MonsterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Monster.
     * @param {MonsterUpsertArgs} args - Arguments to update or create a Monster.
     * @example
     * // Update or create a Monster
     * const monster = await prisma.monster.upsert({
     *   create: {
     *     // ... data to create a Monster
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Monster we want to update
     *   }
     * })
     */
    upsert<T extends MonsterUpsertArgs>(args: SelectSubset<T, MonsterUpsertArgs<ExtArgs>>): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Monsters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterCountArgs} args - Arguments to filter Monsters to count.
     * @example
     * // Count the number of Monsters
     * const count = await prisma.monster.count({
     *   where: {
     *     // ... the filter for the Monsters we want to count
     *   }
     * })
    **/
    count<T extends MonsterCountArgs>(
      args?: Subset<T, MonsterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonsterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Monster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MonsterAggregateArgs>(args: Subset<T, MonsterAggregateArgs>): Prisma.PrismaPromise<GetMonsterAggregateType<T>>

    /**
     * Group by Monster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MonsterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonsterGroupByArgs['orderBy'] }
        : { orderBy?: MonsterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MonsterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonsterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Monster model
   */
  readonly fields: MonsterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Monster.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonsterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Monster model
   */
  interface MonsterFieldRefs {
    readonly id: FieldRef<"Monster", 'String'>
    readonly projectId: FieldRef<"Monster", 'String'>
    readonly name: FieldRef<"Monster", 'String'>
    readonly habitat: FieldRef<"Monster", 'String'>
    readonly abilities: FieldRef<"Monster", 'String'>
    readonly description: FieldRef<"Monster", 'String'>
    readonly createdAt: FieldRef<"Monster", 'DateTime'>
    readonly updatedAt: FieldRef<"Monster", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Monster findUnique
   */
  export type MonsterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monster
     */
    omit?: MonsterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterInclude<ExtArgs> | null
    /**
     * Filter, which Monster to fetch.
     */
    where: MonsterWhereUniqueInput
  }

  /**
   * Monster findUniqueOrThrow
   */
  export type MonsterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monster
     */
    omit?: MonsterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterInclude<ExtArgs> | null
    /**
     * Filter, which Monster to fetch.
     */
    where: MonsterWhereUniqueInput
  }

  /**
   * Monster findFirst
   */
  export type MonsterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monster
     */
    omit?: MonsterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterInclude<ExtArgs> | null
    /**
     * Filter, which Monster to fetch.
     */
    where?: MonsterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monsters to fetch.
     */
    orderBy?: MonsterOrderByWithRelationInput | MonsterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Monsters.
     */
    cursor?: MonsterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monsters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monsters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Monsters.
     */
    distinct?: MonsterScalarFieldEnum | MonsterScalarFieldEnum[]
  }

  /**
   * Monster findFirstOrThrow
   */
  export type MonsterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monster
     */
    omit?: MonsterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterInclude<ExtArgs> | null
    /**
     * Filter, which Monster to fetch.
     */
    where?: MonsterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monsters to fetch.
     */
    orderBy?: MonsterOrderByWithRelationInput | MonsterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Monsters.
     */
    cursor?: MonsterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monsters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monsters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Monsters.
     */
    distinct?: MonsterScalarFieldEnum | MonsterScalarFieldEnum[]
  }

  /**
   * Monster findMany
   */
  export type MonsterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monster
     */
    omit?: MonsterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterInclude<ExtArgs> | null
    /**
     * Filter, which Monsters to fetch.
     */
    where?: MonsterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monsters to fetch.
     */
    orderBy?: MonsterOrderByWithRelationInput | MonsterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Monsters.
     */
    cursor?: MonsterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monsters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monsters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Monsters.
     */
    distinct?: MonsterScalarFieldEnum | MonsterScalarFieldEnum[]
  }

  /**
   * Monster create
   */
  export type MonsterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monster
     */
    omit?: MonsterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterInclude<ExtArgs> | null
    /**
     * The data needed to create a Monster.
     */
    data: XOR<MonsterCreateInput, MonsterUncheckedCreateInput>
  }

  /**
   * Monster createMany
   */
  export type MonsterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Monsters.
     */
    data: MonsterCreateManyInput | MonsterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Monster createManyAndReturn
   */
  export type MonsterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Monster
     */
    omit?: MonsterOmit<ExtArgs> | null
    /**
     * The data used to create many Monsters.
     */
    data: MonsterCreateManyInput | MonsterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Monster update
   */
  export type MonsterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monster
     */
    omit?: MonsterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterInclude<ExtArgs> | null
    /**
     * The data needed to update a Monster.
     */
    data: XOR<MonsterUpdateInput, MonsterUncheckedUpdateInput>
    /**
     * Choose, which Monster to update.
     */
    where: MonsterWhereUniqueInput
  }

  /**
   * Monster updateMany
   */
  export type MonsterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Monsters.
     */
    data: XOR<MonsterUpdateManyMutationInput, MonsterUncheckedUpdateManyInput>
    /**
     * Filter which Monsters to update
     */
    where?: MonsterWhereInput
    /**
     * Limit how many Monsters to update.
     */
    limit?: number
  }

  /**
   * Monster updateManyAndReturn
   */
  export type MonsterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Monster
     */
    omit?: MonsterOmit<ExtArgs> | null
    /**
     * The data used to update Monsters.
     */
    data: XOR<MonsterUpdateManyMutationInput, MonsterUncheckedUpdateManyInput>
    /**
     * Filter which Monsters to update
     */
    where?: MonsterWhereInput
    /**
     * Limit how many Monsters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Monster upsert
   */
  export type MonsterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monster
     */
    omit?: MonsterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterInclude<ExtArgs> | null
    /**
     * The filter to search for the Monster to update in case it exists.
     */
    where: MonsterWhereUniqueInput
    /**
     * In case the Monster found by the `where` argument doesn't exist, create a new Monster with this data.
     */
    create: XOR<MonsterCreateInput, MonsterUncheckedCreateInput>
    /**
     * In case the Monster was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonsterUpdateInput, MonsterUncheckedUpdateInput>
  }

  /**
   * Monster delete
   */
  export type MonsterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monster
     */
    omit?: MonsterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterInclude<ExtArgs> | null
    /**
     * Filter which Monster to delete.
     */
    where: MonsterWhereUniqueInput
  }

  /**
   * Monster deleteMany
   */
  export type MonsterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Monsters to delete
     */
    where?: MonsterWhereInput
    /**
     * Limit how many Monsters to delete.
     */
    limit?: number
  }

  /**
   * Monster without action
   */
  export type MonsterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monster
     */
    omit?: MonsterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterInclude<ExtArgs> | null
  }


  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    owner: string | null
    properties: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    owner: string | null
    properties: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    projectId: number
    name: number
    owner: number
    properties: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ItemMinAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    owner?: true
    properties?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    owner?: true
    properties?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    owner?: true
    properties?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: string
    projectId: string
    name: string
    owner: string | null
    properties: string | null
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: ItemCountAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    owner?: boolean
    properties?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    owner?: boolean
    properties?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    owner?: boolean
    properties?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    id?: boolean
    projectId?: boolean
    name?: boolean
    owner?: boolean
    properties?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "name" | "owner" | "properties" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["item"]>
  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      name: string
      owner: string | null
      properties: string | null
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemFindManyArgs>(args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends ItemCreateArgs>(args: SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCreateManyArgs>(args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {ItemCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends ItemDeleteArgs>(args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemUpdateArgs>(args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDeleteManyArgs>(args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemUpdateManyArgs>(args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {ItemUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Item model
   */
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'String'>
    readonly projectId: FieldRef<"Item", 'String'>
    readonly name: FieldRef<"Item", 'String'>
    readonly owner: FieldRef<"Item", 'String'>
    readonly properties: FieldRef<"Item", 'String'>
    readonly description: FieldRef<"Item", 'String'>
    readonly createdAt: FieldRef<"Item", 'DateTime'>
    readonly updatedAt: FieldRef<"Item", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item createManyAndReturn
   */
  export type ItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item updateManyAndReturn
   */
  export type ItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to delete.
     */
    limit?: number
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
  }


  /**
   * Model PowerSystem
   */

  export type AggregatePowerSystem = {
    _count: PowerSystemCountAggregateOutputType | null
    _min: PowerSystemMinAggregateOutputType | null
    _max: PowerSystemMaxAggregateOutputType | null
  }

  export type PowerSystemMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    rules: string | null
    channelers: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PowerSystemMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    rules: string | null
    channelers: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PowerSystemCountAggregateOutputType = {
    id: number
    projectId: number
    name: number
    rules: number
    channelers: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PowerSystemMinAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    rules?: true
    channelers?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PowerSystemMaxAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    rules?: true
    channelers?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PowerSystemCountAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    rules?: true
    channelers?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PowerSystemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PowerSystem to aggregate.
     */
    where?: PowerSystemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PowerSystems to fetch.
     */
    orderBy?: PowerSystemOrderByWithRelationInput | PowerSystemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PowerSystemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PowerSystems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PowerSystems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PowerSystems
    **/
    _count?: true | PowerSystemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PowerSystemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PowerSystemMaxAggregateInputType
  }

  export type GetPowerSystemAggregateType<T extends PowerSystemAggregateArgs> = {
        [P in keyof T & keyof AggregatePowerSystem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePowerSystem[P]>
      : GetScalarType<T[P], AggregatePowerSystem[P]>
  }




  export type PowerSystemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PowerSystemWhereInput
    orderBy?: PowerSystemOrderByWithAggregationInput | PowerSystemOrderByWithAggregationInput[]
    by: PowerSystemScalarFieldEnum[] | PowerSystemScalarFieldEnum
    having?: PowerSystemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PowerSystemCountAggregateInputType | true
    _min?: PowerSystemMinAggregateInputType
    _max?: PowerSystemMaxAggregateInputType
  }

  export type PowerSystemGroupByOutputType = {
    id: string
    projectId: string
    name: string
    rules: string | null
    channelers: string | null
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: PowerSystemCountAggregateOutputType | null
    _min: PowerSystemMinAggregateOutputType | null
    _max: PowerSystemMaxAggregateOutputType | null
  }

  type GetPowerSystemGroupByPayload<T extends PowerSystemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PowerSystemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PowerSystemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PowerSystemGroupByOutputType[P]>
            : GetScalarType<T[P], PowerSystemGroupByOutputType[P]>
        }
      >
    >


  export type PowerSystemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    rules?: boolean
    channelers?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["powerSystem"]>

  export type PowerSystemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    rules?: boolean
    channelers?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["powerSystem"]>

  export type PowerSystemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    rules?: boolean
    channelers?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["powerSystem"]>

  export type PowerSystemSelectScalar = {
    id?: boolean
    projectId?: boolean
    name?: boolean
    rules?: boolean
    channelers?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PowerSystemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "name" | "rules" | "channelers" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["powerSystem"]>
  export type PowerSystemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type PowerSystemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type PowerSystemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $PowerSystemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PowerSystem"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      name: string
      rules: string | null
      channelers: string | null
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["powerSystem"]>
    composites: {}
  }

  type PowerSystemGetPayload<S extends boolean | null | undefined | PowerSystemDefaultArgs> = $Result.GetResult<Prisma.$PowerSystemPayload, S>

  type PowerSystemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PowerSystemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PowerSystemCountAggregateInputType | true
    }

  export interface PowerSystemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PowerSystem'], meta: { name: 'PowerSystem' } }
    /**
     * Find zero or one PowerSystem that matches the filter.
     * @param {PowerSystemFindUniqueArgs} args - Arguments to find a PowerSystem
     * @example
     * // Get one PowerSystem
     * const powerSystem = await prisma.powerSystem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PowerSystemFindUniqueArgs>(args: SelectSubset<T, PowerSystemFindUniqueArgs<ExtArgs>>): Prisma__PowerSystemClient<$Result.GetResult<Prisma.$PowerSystemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PowerSystem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PowerSystemFindUniqueOrThrowArgs} args - Arguments to find a PowerSystem
     * @example
     * // Get one PowerSystem
     * const powerSystem = await prisma.powerSystem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PowerSystemFindUniqueOrThrowArgs>(args: SelectSubset<T, PowerSystemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PowerSystemClient<$Result.GetResult<Prisma.$PowerSystemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PowerSystem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PowerSystemFindFirstArgs} args - Arguments to find a PowerSystem
     * @example
     * // Get one PowerSystem
     * const powerSystem = await prisma.powerSystem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PowerSystemFindFirstArgs>(args?: SelectSubset<T, PowerSystemFindFirstArgs<ExtArgs>>): Prisma__PowerSystemClient<$Result.GetResult<Prisma.$PowerSystemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PowerSystem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PowerSystemFindFirstOrThrowArgs} args - Arguments to find a PowerSystem
     * @example
     * // Get one PowerSystem
     * const powerSystem = await prisma.powerSystem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PowerSystemFindFirstOrThrowArgs>(args?: SelectSubset<T, PowerSystemFindFirstOrThrowArgs<ExtArgs>>): Prisma__PowerSystemClient<$Result.GetResult<Prisma.$PowerSystemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PowerSystems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PowerSystemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PowerSystems
     * const powerSystems = await prisma.powerSystem.findMany()
     * 
     * // Get first 10 PowerSystems
     * const powerSystems = await prisma.powerSystem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const powerSystemWithIdOnly = await prisma.powerSystem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PowerSystemFindManyArgs>(args?: SelectSubset<T, PowerSystemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PowerSystemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PowerSystem.
     * @param {PowerSystemCreateArgs} args - Arguments to create a PowerSystem.
     * @example
     * // Create one PowerSystem
     * const PowerSystem = await prisma.powerSystem.create({
     *   data: {
     *     // ... data to create a PowerSystem
     *   }
     * })
     * 
     */
    create<T extends PowerSystemCreateArgs>(args: SelectSubset<T, PowerSystemCreateArgs<ExtArgs>>): Prisma__PowerSystemClient<$Result.GetResult<Prisma.$PowerSystemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PowerSystems.
     * @param {PowerSystemCreateManyArgs} args - Arguments to create many PowerSystems.
     * @example
     * // Create many PowerSystems
     * const powerSystem = await prisma.powerSystem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PowerSystemCreateManyArgs>(args?: SelectSubset<T, PowerSystemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PowerSystems and returns the data saved in the database.
     * @param {PowerSystemCreateManyAndReturnArgs} args - Arguments to create many PowerSystems.
     * @example
     * // Create many PowerSystems
     * const powerSystem = await prisma.powerSystem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PowerSystems and only return the `id`
     * const powerSystemWithIdOnly = await prisma.powerSystem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PowerSystemCreateManyAndReturnArgs>(args?: SelectSubset<T, PowerSystemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PowerSystemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PowerSystem.
     * @param {PowerSystemDeleteArgs} args - Arguments to delete one PowerSystem.
     * @example
     * // Delete one PowerSystem
     * const PowerSystem = await prisma.powerSystem.delete({
     *   where: {
     *     // ... filter to delete one PowerSystem
     *   }
     * })
     * 
     */
    delete<T extends PowerSystemDeleteArgs>(args: SelectSubset<T, PowerSystemDeleteArgs<ExtArgs>>): Prisma__PowerSystemClient<$Result.GetResult<Prisma.$PowerSystemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PowerSystem.
     * @param {PowerSystemUpdateArgs} args - Arguments to update one PowerSystem.
     * @example
     * // Update one PowerSystem
     * const powerSystem = await prisma.powerSystem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PowerSystemUpdateArgs>(args: SelectSubset<T, PowerSystemUpdateArgs<ExtArgs>>): Prisma__PowerSystemClient<$Result.GetResult<Prisma.$PowerSystemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PowerSystems.
     * @param {PowerSystemDeleteManyArgs} args - Arguments to filter PowerSystems to delete.
     * @example
     * // Delete a few PowerSystems
     * const { count } = await prisma.powerSystem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PowerSystemDeleteManyArgs>(args?: SelectSubset<T, PowerSystemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PowerSystems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PowerSystemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PowerSystems
     * const powerSystem = await prisma.powerSystem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PowerSystemUpdateManyArgs>(args: SelectSubset<T, PowerSystemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PowerSystems and returns the data updated in the database.
     * @param {PowerSystemUpdateManyAndReturnArgs} args - Arguments to update many PowerSystems.
     * @example
     * // Update many PowerSystems
     * const powerSystem = await prisma.powerSystem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PowerSystems and only return the `id`
     * const powerSystemWithIdOnly = await prisma.powerSystem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PowerSystemUpdateManyAndReturnArgs>(args: SelectSubset<T, PowerSystemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PowerSystemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PowerSystem.
     * @param {PowerSystemUpsertArgs} args - Arguments to update or create a PowerSystem.
     * @example
     * // Update or create a PowerSystem
     * const powerSystem = await prisma.powerSystem.upsert({
     *   create: {
     *     // ... data to create a PowerSystem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PowerSystem we want to update
     *   }
     * })
     */
    upsert<T extends PowerSystemUpsertArgs>(args: SelectSubset<T, PowerSystemUpsertArgs<ExtArgs>>): Prisma__PowerSystemClient<$Result.GetResult<Prisma.$PowerSystemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PowerSystems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PowerSystemCountArgs} args - Arguments to filter PowerSystems to count.
     * @example
     * // Count the number of PowerSystems
     * const count = await prisma.powerSystem.count({
     *   where: {
     *     // ... the filter for the PowerSystems we want to count
     *   }
     * })
    **/
    count<T extends PowerSystemCountArgs>(
      args?: Subset<T, PowerSystemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PowerSystemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PowerSystem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PowerSystemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PowerSystemAggregateArgs>(args: Subset<T, PowerSystemAggregateArgs>): Prisma.PrismaPromise<GetPowerSystemAggregateType<T>>

    /**
     * Group by PowerSystem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PowerSystemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PowerSystemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PowerSystemGroupByArgs['orderBy'] }
        : { orderBy?: PowerSystemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PowerSystemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPowerSystemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PowerSystem model
   */
  readonly fields: PowerSystemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PowerSystem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PowerSystemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PowerSystem model
   */
  interface PowerSystemFieldRefs {
    readonly id: FieldRef<"PowerSystem", 'String'>
    readonly projectId: FieldRef<"PowerSystem", 'String'>
    readonly name: FieldRef<"PowerSystem", 'String'>
    readonly rules: FieldRef<"PowerSystem", 'String'>
    readonly channelers: FieldRef<"PowerSystem", 'String'>
    readonly description: FieldRef<"PowerSystem", 'String'>
    readonly createdAt: FieldRef<"PowerSystem", 'DateTime'>
    readonly updatedAt: FieldRef<"PowerSystem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PowerSystem findUnique
   */
  export type PowerSystemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PowerSystem
     */
    select?: PowerSystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PowerSystem
     */
    omit?: PowerSystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PowerSystemInclude<ExtArgs> | null
    /**
     * Filter, which PowerSystem to fetch.
     */
    where: PowerSystemWhereUniqueInput
  }

  /**
   * PowerSystem findUniqueOrThrow
   */
  export type PowerSystemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PowerSystem
     */
    select?: PowerSystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PowerSystem
     */
    omit?: PowerSystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PowerSystemInclude<ExtArgs> | null
    /**
     * Filter, which PowerSystem to fetch.
     */
    where: PowerSystemWhereUniqueInput
  }

  /**
   * PowerSystem findFirst
   */
  export type PowerSystemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PowerSystem
     */
    select?: PowerSystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PowerSystem
     */
    omit?: PowerSystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PowerSystemInclude<ExtArgs> | null
    /**
     * Filter, which PowerSystem to fetch.
     */
    where?: PowerSystemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PowerSystems to fetch.
     */
    orderBy?: PowerSystemOrderByWithRelationInput | PowerSystemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PowerSystems.
     */
    cursor?: PowerSystemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PowerSystems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PowerSystems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PowerSystems.
     */
    distinct?: PowerSystemScalarFieldEnum | PowerSystemScalarFieldEnum[]
  }

  /**
   * PowerSystem findFirstOrThrow
   */
  export type PowerSystemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PowerSystem
     */
    select?: PowerSystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PowerSystem
     */
    omit?: PowerSystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PowerSystemInclude<ExtArgs> | null
    /**
     * Filter, which PowerSystem to fetch.
     */
    where?: PowerSystemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PowerSystems to fetch.
     */
    orderBy?: PowerSystemOrderByWithRelationInput | PowerSystemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PowerSystems.
     */
    cursor?: PowerSystemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PowerSystems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PowerSystems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PowerSystems.
     */
    distinct?: PowerSystemScalarFieldEnum | PowerSystemScalarFieldEnum[]
  }

  /**
   * PowerSystem findMany
   */
  export type PowerSystemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PowerSystem
     */
    select?: PowerSystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PowerSystem
     */
    omit?: PowerSystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PowerSystemInclude<ExtArgs> | null
    /**
     * Filter, which PowerSystems to fetch.
     */
    where?: PowerSystemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PowerSystems to fetch.
     */
    orderBy?: PowerSystemOrderByWithRelationInput | PowerSystemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PowerSystems.
     */
    cursor?: PowerSystemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PowerSystems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PowerSystems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PowerSystems.
     */
    distinct?: PowerSystemScalarFieldEnum | PowerSystemScalarFieldEnum[]
  }

  /**
   * PowerSystem create
   */
  export type PowerSystemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PowerSystem
     */
    select?: PowerSystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PowerSystem
     */
    omit?: PowerSystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PowerSystemInclude<ExtArgs> | null
    /**
     * The data needed to create a PowerSystem.
     */
    data: XOR<PowerSystemCreateInput, PowerSystemUncheckedCreateInput>
  }

  /**
   * PowerSystem createMany
   */
  export type PowerSystemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PowerSystems.
     */
    data: PowerSystemCreateManyInput | PowerSystemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PowerSystem createManyAndReturn
   */
  export type PowerSystemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PowerSystem
     */
    select?: PowerSystemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PowerSystem
     */
    omit?: PowerSystemOmit<ExtArgs> | null
    /**
     * The data used to create many PowerSystems.
     */
    data: PowerSystemCreateManyInput | PowerSystemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PowerSystemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PowerSystem update
   */
  export type PowerSystemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PowerSystem
     */
    select?: PowerSystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PowerSystem
     */
    omit?: PowerSystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PowerSystemInclude<ExtArgs> | null
    /**
     * The data needed to update a PowerSystem.
     */
    data: XOR<PowerSystemUpdateInput, PowerSystemUncheckedUpdateInput>
    /**
     * Choose, which PowerSystem to update.
     */
    where: PowerSystemWhereUniqueInput
  }

  /**
   * PowerSystem updateMany
   */
  export type PowerSystemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PowerSystems.
     */
    data: XOR<PowerSystemUpdateManyMutationInput, PowerSystemUncheckedUpdateManyInput>
    /**
     * Filter which PowerSystems to update
     */
    where?: PowerSystemWhereInput
    /**
     * Limit how many PowerSystems to update.
     */
    limit?: number
  }

  /**
   * PowerSystem updateManyAndReturn
   */
  export type PowerSystemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PowerSystem
     */
    select?: PowerSystemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PowerSystem
     */
    omit?: PowerSystemOmit<ExtArgs> | null
    /**
     * The data used to update PowerSystems.
     */
    data: XOR<PowerSystemUpdateManyMutationInput, PowerSystemUncheckedUpdateManyInput>
    /**
     * Filter which PowerSystems to update
     */
    where?: PowerSystemWhereInput
    /**
     * Limit how many PowerSystems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PowerSystemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PowerSystem upsert
   */
  export type PowerSystemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PowerSystem
     */
    select?: PowerSystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PowerSystem
     */
    omit?: PowerSystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PowerSystemInclude<ExtArgs> | null
    /**
     * The filter to search for the PowerSystem to update in case it exists.
     */
    where: PowerSystemWhereUniqueInput
    /**
     * In case the PowerSystem found by the `where` argument doesn't exist, create a new PowerSystem with this data.
     */
    create: XOR<PowerSystemCreateInput, PowerSystemUncheckedCreateInput>
    /**
     * In case the PowerSystem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PowerSystemUpdateInput, PowerSystemUncheckedUpdateInput>
  }

  /**
   * PowerSystem delete
   */
  export type PowerSystemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PowerSystem
     */
    select?: PowerSystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PowerSystem
     */
    omit?: PowerSystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PowerSystemInclude<ExtArgs> | null
    /**
     * Filter which PowerSystem to delete.
     */
    where: PowerSystemWhereUniqueInput
  }

  /**
   * PowerSystem deleteMany
   */
  export type PowerSystemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PowerSystems to delete
     */
    where?: PowerSystemWhereInput
    /**
     * Limit how many PowerSystems to delete.
     */
    limit?: number
  }

  /**
   * PowerSystem without action
   */
  export type PowerSystemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PowerSystem
     */
    select?: PowerSystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PowerSystem
     */
    omit?: PowerSystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PowerSystemInclude<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    climate: string | null
    inhabitants: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    climate: string | null
    inhabitants: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    projectId: number
    name: number
    climate: number
    inhabitants: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LocationMinAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    climate?: true
    inhabitants?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    climate?: true
    inhabitants?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    climate?: true
    inhabitants?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: string
    projectId: string
    name: string
    climate: string | null
    inhabitants: string | null
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    climate?: boolean
    inhabitants?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    climate?: boolean
    inhabitants?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    climate?: boolean
    inhabitants?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    id?: boolean
    projectId?: boolean
    name?: boolean
    climate?: boolean
    inhabitants?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "name" | "climate" | "inhabitants" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["location"]>
  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type LocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type LocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      name: string
      climate: string | null
      inhabitants: string | null
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
     */
    create<T extends LocationCreateArgs>(args: SelectSubset<T, LocationCreateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationCreateManyArgs>(args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locations and returns the data saved in the database.
     * @param {LocationCreateManyAndReturnArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {LocationUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LocationUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     */
    upsert<T extends LocationUpsertArgs>(args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Location model
   */
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'String'>
    readonly projectId: FieldRef<"Location", 'String'>
    readonly name: FieldRef<"Location", 'String'>
    readonly climate: FieldRef<"Location", 'String'>
    readonly inhabitants: FieldRef<"Location", 'String'>
    readonly description: FieldRef<"Location", 'String'>
    readonly createdAt: FieldRef<"Location", 'DateTime'>
    readonly updatedAt: FieldRef<"Location", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location create
   */
  export type LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }

  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location createManyAndReturn
   */
  export type LocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location updateManyAndReturn
   */
  export type LocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Location upsert
   */
  export type LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    description: 'description',
    genre: 'genre',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const LoreNodeScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    type: 'type',
    name: 'name',
    content: 'content',
    position: 'position',
    color: 'color',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LoreNodeScalarFieldEnum = (typeof LoreNodeScalarFieldEnum)[keyof typeof LoreNodeScalarFieldEnum]


  export const NodeRelationScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    sourceNodeId: 'sourceNodeId',
    targetNodeId: 'targetNodeId',
    createdAt: 'createdAt'
  };

  export type NodeRelationScalarFieldEnum = (typeof NodeRelationScalarFieldEnum)[keyof typeof NodeRelationScalarFieldEnum]


  export const ChapterScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    order: 'order',
    title: 'title',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChapterScalarFieldEnum = (typeof ChapterScalarFieldEnum)[keyof typeof ChapterScalarFieldEnum]


  export const LoreScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    type: 'type',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LoreScalarFieldEnum = (typeof LoreScalarFieldEnum)[keyof typeof LoreScalarFieldEnum]


  export const CharacterScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    name: 'name',
    archetype: 'archetype',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CharacterScalarFieldEnum = (typeof CharacterScalarFieldEnum)[keyof typeof CharacterScalarFieldEnum]


  export const MonsterScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    name: 'name',
    habitat: 'habitat',
    abilities: 'abilities',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MonsterScalarFieldEnum = (typeof MonsterScalarFieldEnum)[keyof typeof MonsterScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    name: 'name',
    owner: 'owner',
    properties: 'properties',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const PowerSystemScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    name: 'name',
    rules: 'rules',
    channelers: 'channelers',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PowerSystemScalarFieldEnum = (typeof PowerSystemScalarFieldEnum)[keyof typeof PowerSystemScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    name: 'name',
    climate: 'climate',
    inhabitants: 'inhabitants',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    projects?: ProjectListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    projects?: ProjectListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    userId?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    genre?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chapters?: ChapterListRelationFilter
    lore?: LoreListRelationFilter
    loreNodes?: LoreNodeListRelationFilter
    nodeRelations?: NodeRelationListRelationFilter
    characters?: CharacterListRelationFilter
    monsters?: MonsterListRelationFilter
    items?: ItemListRelationFilter
    powerSystems?: PowerSystemListRelationFilter
    locations?: LocationListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    genre?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    chapters?: ChapterOrderByRelationAggregateInput
    lore?: LoreOrderByRelationAggregateInput
    loreNodes?: LoreNodeOrderByRelationAggregateInput
    nodeRelations?: NodeRelationOrderByRelationAggregateInput
    characters?: CharacterOrderByRelationAggregateInput
    monsters?: MonsterOrderByRelationAggregateInput
    items?: ItemOrderByRelationAggregateInput
    powerSystems?: PowerSystemOrderByRelationAggregateInput
    locations?: LocationOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    userId?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    genre?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chapters?: ChapterListRelationFilter
    lore?: LoreListRelationFilter
    loreNodes?: LoreNodeListRelationFilter
    nodeRelations?: NodeRelationListRelationFilter
    characters?: CharacterListRelationFilter
    monsters?: MonsterListRelationFilter
    items?: ItemListRelationFilter
    powerSystems?: PowerSystemListRelationFilter
    locations?: LocationListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    genre?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    userId?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    genre?: StringNullableWithAggregatesFilter<"Project"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type LoreNodeWhereInput = {
    AND?: LoreNodeWhereInput | LoreNodeWhereInput[]
    OR?: LoreNodeWhereInput[]
    NOT?: LoreNodeWhereInput | LoreNodeWhereInput[]
    id?: StringFilter<"LoreNode"> | string
    projectId?: StringFilter<"LoreNode"> | string
    type?: StringFilter<"LoreNode"> | string
    name?: StringFilter<"LoreNode"> | string
    content?: StringNullableFilter<"LoreNode"> | string | null
    position?: FloatFilter<"LoreNode"> | number
    color?: StringFilter<"LoreNode"> | string
    createdAt?: DateTimeFilter<"LoreNode"> | Date | string
    updatedAt?: DateTimeFilter<"LoreNode"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    outgoingRelations?: NodeRelationListRelationFilter
    incomingRelations?: NodeRelationListRelationFilter
  }

  export type LoreNodeOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    content?: SortOrderInput | SortOrder
    position?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    outgoingRelations?: NodeRelationOrderByRelationAggregateInput
    incomingRelations?: NodeRelationOrderByRelationAggregateInput
  }

  export type LoreNodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LoreNodeWhereInput | LoreNodeWhereInput[]
    OR?: LoreNodeWhereInput[]
    NOT?: LoreNodeWhereInput | LoreNodeWhereInput[]
    projectId?: StringFilter<"LoreNode"> | string
    type?: StringFilter<"LoreNode"> | string
    name?: StringFilter<"LoreNode"> | string
    content?: StringNullableFilter<"LoreNode"> | string | null
    position?: FloatFilter<"LoreNode"> | number
    color?: StringFilter<"LoreNode"> | string
    createdAt?: DateTimeFilter<"LoreNode"> | Date | string
    updatedAt?: DateTimeFilter<"LoreNode"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    outgoingRelations?: NodeRelationListRelationFilter
    incomingRelations?: NodeRelationListRelationFilter
  }, "id">

  export type LoreNodeOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    content?: SortOrderInput | SortOrder
    position?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LoreNodeCountOrderByAggregateInput
    _avg?: LoreNodeAvgOrderByAggregateInput
    _max?: LoreNodeMaxOrderByAggregateInput
    _min?: LoreNodeMinOrderByAggregateInput
    _sum?: LoreNodeSumOrderByAggregateInput
  }

  export type LoreNodeScalarWhereWithAggregatesInput = {
    AND?: LoreNodeScalarWhereWithAggregatesInput | LoreNodeScalarWhereWithAggregatesInput[]
    OR?: LoreNodeScalarWhereWithAggregatesInput[]
    NOT?: LoreNodeScalarWhereWithAggregatesInput | LoreNodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LoreNode"> | string
    projectId?: StringWithAggregatesFilter<"LoreNode"> | string
    type?: StringWithAggregatesFilter<"LoreNode"> | string
    name?: StringWithAggregatesFilter<"LoreNode"> | string
    content?: StringNullableWithAggregatesFilter<"LoreNode"> | string | null
    position?: FloatWithAggregatesFilter<"LoreNode"> | number
    color?: StringWithAggregatesFilter<"LoreNode"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LoreNode"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LoreNode"> | Date | string
  }

  export type NodeRelationWhereInput = {
    AND?: NodeRelationWhereInput | NodeRelationWhereInput[]
    OR?: NodeRelationWhereInput[]
    NOT?: NodeRelationWhereInput | NodeRelationWhereInput[]
    id?: StringFilter<"NodeRelation"> | string
    projectId?: StringFilter<"NodeRelation"> | string
    sourceNodeId?: StringFilter<"NodeRelation"> | string
    targetNodeId?: StringFilter<"NodeRelation"> | string
    createdAt?: DateTimeFilter<"NodeRelation"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    sourceNode?: XOR<LoreNodeScalarRelationFilter, LoreNodeWhereInput>
    targetNode?: XOR<LoreNodeScalarRelationFilter, LoreNodeWhereInput>
  }

  export type NodeRelationOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    sourceNodeId?: SortOrder
    targetNodeId?: SortOrder
    createdAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    sourceNode?: LoreNodeOrderByWithRelationInput
    targetNode?: LoreNodeOrderByWithRelationInput
  }

  export type NodeRelationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sourceNodeId_targetNodeId?: NodeRelationSourceNodeIdTargetNodeIdCompoundUniqueInput
    AND?: NodeRelationWhereInput | NodeRelationWhereInput[]
    OR?: NodeRelationWhereInput[]
    NOT?: NodeRelationWhereInput | NodeRelationWhereInput[]
    projectId?: StringFilter<"NodeRelation"> | string
    sourceNodeId?: StringFilter<"NodeRelation"> | string
    targetNodeId?: StringFilter<"NodeRelation"> | string
    createdAt?: DateTimeFilter<"NodeRelation"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    sourceNode?: XOR<LoreNodeScalarRelationFilter, LoreNodeWhereInput>
    targetNode?: XOR<LoreNodeScalarRelationFilter, LoreNodeWhereInput>
  }, "id" | "sourceNodeId_targetNodeId">

  export type NodeRelationOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    sourceNodeId?: SortOrder
    targetNodeId?: SortOrder
    createdAt?: SortOrder
    _count?: NodeRelationCountOrderByAggregateInput
    _max?: NodeRelationMaxOrderByAggregateInput
    _min?: NodeRelationMinOrderByAggregateInput
  }

  export type NodeRelationScalarWhereWithAggregatesInput = {
    AND?: NodeRelationScalarWhereWithAggregatesInput | NodeRelationScalarWhereWithAggregatesInput[]
    OR?: NodeRelationScalarWhereWithAggregatesInput[]
    NOT?: NodeRelationScalarWhereWithAggregatesInput | NodeRelationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NodeRelation"> | string
    projectId?: StringWithAggregatesFilter<"NodeRelation"> | string
    sourceNodeId?: StringWithAggregatesFilter<"NodeRelation"> | string
    targetNodeId?: StringWithAggregatesFilter<"NodeRelation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"NodeRelation"> | Date | string
  }

  export type ChapterWhereInput = {
    AND?: ChapterWhereInput | ChapterWhereInput[]
    OR?: ChapterWhereInput[]
    NOT?: ChapterWhereInput | ChapterWhereInput[]
    id?: StringFilter<"Chapter"> | string
    projectId?: StringFilter<"Chapter"> | string
    order?: IntFilter<"Chapter"> | number
    title?: StringNullableFilter<"Chapter"> | string | null
    content?: StringNullableFilter<"Chapter"> | string | null
    createdAt?: DateTimeFilter<"Chapter"> | Date | string
    updatedAt?: DateTimeFilter<"Chapter"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ChapterOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    order?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type ChapterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChapterWhereInput | ChapterWhereInput[]
    OR?: ChapterWhereInput[]
    NOT?: ChapterWhereInput | ChapterWhereInput[]
    projectId?: StringFilter<"Chapter"> | string
    order?: IntFilter<"Chapter"> | number
    title?: StringNullableFilter<"Chapter"> | string | null
    content?: StringNullableFilter<"Chapter"> | string | null
    createdAt?: DateTimeFilter<"Chapter"> | Date | string
    updatedAt?: DateTimeFilter<"Chapter"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type ChapterOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    order?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChapterCountOrderByAggregateInput
    _avg?: ChapterAvgOrderByAggregateInput
    _max?: ChapterMaxOrderByAggregateInput
    _min?: ChapterMinOrderByAggregateInput
    _sum?: ChapterSumOrderByAggregateInput
  }

  export type ChapterScalarWhereWithAggregatesInput = {
    AND?: ChapterScalarWhereWithAggregatesInput | ChapterScalarWhereWithAggregatesInput[]
    OR?: ChapterScalarWhereWithAggregatesInput[]
    NOT?: ChapterScalarWhereWithAggregatesInput | ChapterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chapter"> | string
    projectId?: StringWithAggregatesFilter<"Chapter"> | string
    order?: IntWithAggregatesFilter<"Chapter"> | number
    title?: StringNullableWithAggregatesFilter<"Chapter"> | string | null
    content?: StringNullableWithAggregatesFilter<"Chapter"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Chapter"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Chapter"> | Date | string
  }

  export type LoreWhereInput = {
    AND?: LoreWhereInput | LoreWhereInput[]
    OR?: LoreWhereInput[]
    NOT?: LoreWhereInput | LoreWhereInput[]
    id?: StringFilter<"Lore"> | string
    projectId?: StringFilter<"Lore"> | string
    type?: StringFilter<"Lore"> | string
    name?: StringFilter<"Lore"> | string
    description?: StringNullableFilter<"Lore"> | string | null
    createdAt?: DateTimeFilter<"Lore"> | Date | string
    updatedAt?: DateTimeFilter<"Lore"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type LoreOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type LoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LoreWhereInput | LoreWhereInput[]
    OR?: LoreWhereInput[]
    NOT?: LoreWhereInput | LoreWhereInput[]
    projectId?: StringFilter<"Lore"> | string
    type?: StringFilter<"Lore"> | string
    name?: StringFilter<"Lore"> | string
    description?: StringNullableFilter<"Lore"> | string | null
    createdAt?: DateTimeFilter<"Lore"> | Date | string
    updatedAt?: DateTimeFilter<"Lore"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type LoreOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LoreCountOrderByAggregateInput
    _max?: LoreMaxOrderByAggregateInput
    _min?: LoreMinOrderByAggregateInput
  }

  export type LoreScalarWhereWithAggregatesInput = {
    AND?: LoreScalarWhereWithAggregatesInput | LoreScalarWhereWithAggregatesInput[]
    OR?: LoreScalarWhereWithAggregatesInput[]
    NOT?: LoreScalarWhereWithAggregatesInput | LoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lore"> | string
    projectId?: StringWithAggregatesFilter<"Lore"> | string
    type?: StringWithAggregatesFilter<"Lore"> | string
    name?: StringWithAggregatesFilter<"Lore"> | string
    description?: StringNullableWithAggregatesFilter<"Lore"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Lore"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lore"> | Date | string
  }

  export type CharacterWhereInput = {
    AND?: CharacterWhereInput | CharacterWhereInput[]
    OR?: CharacterWhereInput[]
    NOT?: CharacterWhereInput | CharacterWhereInput[]
    id?: StringFilter<"Character"> | string
    projectId?: StringFilter<"Character"> | string
    name?: StringFilter<"Character"> | string
    archetype?: StringNullableFilter<"Character"> | string | null
    description?: StringNullableFilter<"Character"> | string | null
    createdAt?: DateTimeFilter<"Character"> | Date | string
    updatedAt?: DateTimeFilter<"Character"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type CharacterOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    archetype?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type CharacterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CharacterWhereInput | CharacterWhereInput[]
    OR?: CharacterWhereInput[]
    NOT?: CharacterWhereInput | CharacterWhereInput[]
    projectId?: StringFilter<"Character"> | string
    name?: StringFilter<"Character"> | string
    archetype?: StringNullableFilter<"Character"> | string | null
    description?: StringNullableFilter<"Character"> | string | null
    createdAt?: DateTimeFilter<"Character"> | Date | string
    updatedAt?: DateTimeFilter<"Character"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type CharacterOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    archetype?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CharacterCountOrderByAggregateInput
    _max?: CharacterMaxOrderByAggregateInput
    _min?: CharacterMinOrderByAggregateInput
  }

  export type CharacterScalarWhereWithAggregatesInput = {
    AND?: CharacterScalarWhereWithAggregatesInput | CharacterScalarWhereWithAggregatesInput[]
    OR?: CharacterScalarWhereWithAggregatesInput[]
    NOT?: CharacterScalarWhereWithAggregatesInput | CharacterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Character"> | string
    projectId?: StringWithAggregatesFilter<"Character"> | string
    name?: StringWithAggregatesFilter<"Character"> | string
    archetype?: StringNullableWithAggregatesFilter<"Character"> | string | null
    description?: StringNullableWithAggregatesFilter<"Character"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Character"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Character"> | Date | string
  }

  export type MonsterWhereInput = {
    AND?: MonsterWhereInput | MonsterWhereInput[]
    OR?: MonsterWhereInput[]
    NOT?: MonsterWhereInput | MonsterWhereInput[]
    id?: StringFilter<"Monster"> | string
    projectId?: StringFilter<"Monster"> | string
    name?: StringFilter<"Monster"> | string
    habitat?: StringNullableFilter<"Monster"> | string | null
    abilities?: StringNullableFilter<"Monster"> | string | null
    description?: StringNullableFilter<"Monster"> | string | null
    createdAt?: DateTimeFilter<"Monster"> | Date | string
    updatedAt?: DateTimeFilter<"Monster"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type MonsterOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    habitat?: SortOrderInput | SortOrder
    abilities?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type MonsterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MonsterWhereInput | MonsterWhereInput[]
    OR?: MonsterWhereInput[]
    NOT?: MonsterWhereInput | MonsterWhereInput[]
    projectId?: StringFilter<"Monster"> | string
    name?: StringFilter<"Monster"> | string
    habitat?: StringNullableFilter<"Monster"> | string | null
    abilities?: StringNullableFilter<"Monster"> | string | null
    description?: StringNullableFilter<"Monster"> | string | null
    createdAt?: DateTimeFilter<"Monster"> | Date | string
    updatedAt?: DateTimeFilter<"Monster"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type MonsterOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    habitat?: SortOrderInput | SortOrder
    abilities?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MonsterCountOrderByAggregateInput
    _max?: MonsterMaxOrderByAggregateInput
    _min?: MonsterMinOrderByAggregateInput
  }

  export type MonsterScalarWhereWithAggregatesInput = {
    AND?: MonsterScalarWhereWithAggregatesInput | MonsterScalarWhereWithAggregatesInput[]
    OR?: MonsterScalarWhereWithAggregatesInput[]
    NOT?: MonsterScalarWhereWithAggregatesInput | MonsterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Monster"> | string
    projectId?: StringWithAggregatesFilter<"Monster"> | string
    name?: StringWithAggregatesFilter<"Monster"> | string
    habitat?: StringNullableWithAggregatesFilter<"Monster"> | string | null
    abilities?: StringNullableWithAggregatesFilter<"Monster"> | string | null
    description?: StringNullableWithAggregatesFilter<"Monster"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Monster"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Monster"> | Date | string
  }

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: StringFilter<"Item"> | string
    projectId?: StringFilter<"Item"> | string
    name?: StringFilter<"Item"> | string
    owner?: StringNullableFilter<"Item"> | string | null
    properties?: StringNullableFilter<"Item"> | string | null
    description?: StringNullableFilter<"Item"> | string | null
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    owner?: SortOrderInput | SortOrder
    properties?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    projectId?: StringFilter<"Item"> | string
    name?: StringFilter<"Item"> | string
    owner?: StringNullableFilter<"Item"> | string | null
    properties?: StringNullableFilter<"Item"> | string | null
    description?: StringNullableFilter<"Item"> | string | null
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    owner?: SortOrderInput | SortOrder
    properties?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Item"> | string
    projectId?: StringWithAggregatesFilter<"Item"> | string
    name?: StringWithAggregatesFilter<"Item"> | string
    owner?: StringNullableWithAggregatesFilter<"Item"> | string | null
    properties?: StringNullableWithAggregatesFilter<"Item"> | string | null
    description?: StringNullableWithAggregatesFilter<"Item"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
  }

  export type PowerSystemWhereInput = {
    AND?: PowerSystemWhereInput | PowerSystemWhereInput[]
    OR?: PowerSystemWhereInput[]
    NOT?: PowerSystemWhereInput | PowerSystemWhereInput[]
    id?: StringFilter<"PowerSystem"> | string
    projectId?: StringFilter<"PowerSystem"> | string
    name?: StringFilter<"PowerSystem"> | string
    rules?: StringNullableFilter<"PowerSystem"> | string | null
    channelers?: StringNullableFilter<"PowerSystem"> | string | null
    description?: StringNullableFilter<"PowerSystem"> | string | null
    createdAt?: DateTimeFilter<"PowerSystem"> | Date | string
    updatedAt?: DateTimeFilter<"PowerSystem"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type PowerSystemOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    rules?: SortOrderInput | SortOrder
    channelers?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type PowerSystemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PowerSystemWhereInput | PowerSystemWhereInput[]
    OR?: PowerSystemWhereInput[]
    NOT?: PowerSystemWhereInput | PowerSystemWhereInput[]
    projectId?: StringFilter<"PowerSystem"> | string
    name?: StringFilter<"PowerSystem"> | string
    rules?: StringNullableFilter<"PowerSystem"> | string | null
    channelers?: StringNullableFilter<"PowerSystem"> | string | null
    description?: StringNullableFilter<"PowerSystem"> | string | null
    createdAt?: DateTimeFilter<"PowerSystem"> | Date | string
    updatedAt?: DateTimeFilter<"PowerSystem"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type PowerSystemOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    rules?: SortOrderInput | SortOrder
    channelers?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PowerSystemCountOrderByAggregateInput
    _max?: PowerSystemMaxOrderByAggregateInput
    _min?: PowerSystemMinOrderByAggregateInput
  }

  export type PowerSystemScalarWhereWithAggregatesInput = {
    AND?: PowerSystemScalarWhereWithAggregatesInput | PowerSystemScalarWhereWithAggregatesInput[]
    OR?: PowerSystemScalarWhereWithAggregatesInput[]
    NOT?: PowerSystemScalarWhereWithAggregatesInput | PowerSystemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PowerSystem"> | string
    projectId?: StringWithAggregatesFilter<"PowerSystem"> | string
    name?: StringWithAggregatesFilter<"PowerSystem"> | string
    rules?: StringNullableWithAggregatesFilter<"PowerSystem"> | string | null
    channelers?: StringNullableWithAggregatesFilter<"PowerSystem"> | string | null
    description?: StringNullableWithAggregatesFilter<"PowerSystem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PowerSystem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PowerSystem"> | Date | string
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: StringFilter<"Location"> | string
    projectId?: StringFilter<"Location"> | string
    name?: StringFilter<"Location"> | string
    climate?: StringNullableFilter<"Location"> | string | null
    inhabitants?: StringNullableFilter<"Location"> | string | null
    description?: StringNullableFilter<"Location"> | string | null
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    climate?: SortOrderInput | SortOrder
    inhabitants?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    projectId?: StringFilter<"Location"> | string
    name?: StringFilter<"Location"> | string
    climate?: StringNullableFilter<"Location"> | string | null
    inhabitants?: StringNullableFilter<"Location"> | string | null
    description?: StringNullableFilter<"Location"> | string | null
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    climate?: SortOrderInput | SortOrder
    inhabitants?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Location"> | string
    projectId?: StringWithAggregatesFilter<"Location"> | string
    name?: StringWithAggregatesFilter<"Location"> | string
    climate?: StringNullableWithAggregatesFilter<"Location"> | string | null
    inhabitants?: StringNullableWithAggregatesFilter<"Location"> | string | null
    description?: StringNullableWithAggregatesFilter<"Location"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    description?: string | null
    genre?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProjectsInput
    chapters?: ChapterCreateNestedManyWithoutProjectInput
    lore?: LoreCreateNestedManyWithoutProjectInput
    loreNodes?: LoreNodeCreateNestedManyWithoutProjectInput
    nodeRelations?: NodeRelationCreateNestedManyWithoutProjectInput
    characters?: CharacterCreateNestedManyWithoutProjectInput
    monsters?: MonsterCreateNestedManyWithoutProjectInput
    items?: ItemCreateNestedManyWithoutProjectInput
    powerSystems?: PowerSystemCreateNestedManyWithoutProjectInput
    locations?: LocationCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    genre?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chapters?: ChapterUncheckedCreateNestedManyWithoutProjectInput
    lore?: LoreUncheckedCreateNestedManyWithoutProjectInput
    loreNodes?: LoreNodeUncheckedCreateNestedManyWithoutProjectInput
    nodeRelations?: NodeRelationUncheckedCreateNestedManyWithoutProjectInput
    characters?: CharacterUncheckedCreateNestedManyWithoutProjectInput
    monsters?: MonsterUncheckedCreateNestedManyWithoutProjectInput
    items?: ItemUncheckedCreateNestedManyWithoutProjectInput
    powerSystems?: PowerSystemUncheckedCreateNestedManyWithoutProjectInput
    locations?: LocationUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    chapters?: ChapterUpdateManyWithoutProjectNestedInput
    lore?: LoreUpdateManyWithoutProjectNestedInput
    loreNodes?: LoreNodeUpdateManyWithoutProjectNestedInput
    nodeRelations?: NodeRelationUpdateManyWithoutProjectNestedInput
    characters?: CharacterUpdateManyWithoutProjectNestedInput
    monsters?: MonsterUpdateManyWithoutProjectNestedInput
    items?: ItemUpdateManyWithoutProjectNestedInput
    powerSystems?: PowerSystemUpdateManyWithoutProjectNestedInput
    locations?: LocationUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapters?: ChapterUncheckedUpdateManyWithoutProjectNestedInput
    lore?: LoreUncheckedUpdateManyWithoutProjectNestedInput
    loreNodes?: LoreNodeUncheckedUpdateManyWithoutProjectNestedInput
    nodeRelations?: NodeRelationUncheckedUpdateManyWithoutProjectNestedInput
    characters?: CharacterUncheckedUpdateManyWithoutProjectNestedInput
    monsters?: MonsterUncheckedUpdateManyWithoutProjectNestedInput
    items?: ItemUncheckedUpdateManyWithoutProjectNestedInput
    powerSystems?: PowerSystemUncheckedUpdateManyWithoutProjectNestedInput
    locations?: LocationUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    genre?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoreNodeCreateInput = {
    id?: string
    type: string
    name: string
    content?: string | null
    position: number
    color?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutLoreNodesInput
    outgoingRelations?: NodeRelationCreateNestedManyWithoutSourceNodeInput
    incomingRelations?: NodeRelationCreateNestedManyWithoutTargetNodeInput
  }

  export type LoreNodeUncheckedCreateInput = {
    id?: string
    projectId: string
    type: string
    name: string
    content?: string | null
    position: number
    color?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    outgoingRelations?: NodeRelationUncheckedCreateNestedManyWithoutSourceNodeInput
    incomingRelations?: NodeRelationUncheckedCreateNestedManyWithoutTargetNodeInput
  }

  export type LoreNodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    position?: FloatFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutLoreNodesNestedInput
    outgoingRelations?: NodeRelationUpdateManyWithoutSourceNodeNestedInput
    incomingRelations?: NodeRelationUpdateManyWithoutTargetNodeNestedInput
  }

  export type LoreNodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    position?: FloatFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outgoingRelations?: NodeRelationUncheckedUpdateManyWithoutSourceNodeNestedInput
    incomingRelations?: NodeRelationUncheckedUpdateManyWithoutTargetNodeNestedInput
  }

  export type LoreNodeCreateManyInput = {
    id?: string
    projectId: string
    type: string
    name: string
    content?: string | null
    position: number
    color?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LoreNodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    position?: FloatFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoreNodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    position?: FloatFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeRelationCreateInput = {
    id?: string
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutNodeRelationsInput
    sourceNode: LoreNodeCreateNestedOneWithoutOutgoingRelationsInput
    targetNode: LoreNodeCreateNestedOneWithoutIncomingRelationsInput
  }

  export type NodeRelationUncheckedCreateInput = {
    id?: string
    projectId: string
    sourceNodeId: string
    targetNodeId: string
    createdAt?: Date | string
  }

  export type NodeRelationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutNodeRelationsNestedInput
    sourceNode?: LoreNodeUpdateOneRequiredWithoutOutgoingRelationsNestedInput
    targetNode?: LoreNodeUpdateOneRequiredWithoutIncomingRelationsNestedInput
  }

  export type NodeRelationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    sourceNodeId?: StringFieldUpdateOperationsInput | string
    targetNodeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeRelationCreateManyInput = {
    id?: string
    projectId: string
    sourceNodeId: string
    targetNodeId: string
    createdAt?: Date | string
  }

  export type NodeRelationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeRelationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    sourceNodeId?: StringFieldUpdateOperationsInput | string
    targetNodeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapterCreateInput = {
    id?: string
    order: number
    title?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutChaptersInput
  }

  export type ChapterUncheckedCreateInput = {
    id?: string
    projectId: string
    order: number
    title?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChapterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutChaptersNestedInput
  }

  export type ChapterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapterCreateManyInput = {
    id?: string
    projectId: string
    order: number
    title?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChapterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoreCreateInput = {
    id?: string
    type: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutLoreInput
  }

  export type LoreUncheckedCreateInput = {
    id?: string
    projectId: string
    type: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutLoreNestedInput
  }

  export type LoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoreCreateManyInput = {
    id?: string
    projectId: string
    type: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacterCreateInput = {
    id?: string
    name: string
    archetype?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutCharactersInput
  }

  export type CharacterUncheckedCreateInput = {
    id?: string
    projectId: string
    name: string
    archetype?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CharacterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    archetype?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutCharactersNestedInput
  }

  export type CharacterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    archetype?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacterCreateManyInput = {
    id?: string
    projectId: string
    name: string
    archetype?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CharacterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    archetype?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    archetype?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonsterCreateInput = {
    id?: string
    name: string
    habitat?: string | null
    abilities?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutMonstersInput
  }

  export type MonsterUncheckedCreateInput = {
    id?: string
    projectId: string
    name: string
    habitat?: string | null
    abilities?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonsterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    abilities?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutMonstersNestedInput
  }

  export type MonsterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    abilities?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonsterCreateManyInput = {
    id?: string
    projectId: string
    name: string
    habitat?: string | null
    abilities?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonsterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    abilities?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonsterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    abilities?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCreateInput = {
    id?: string
    name: string
    owner?: string | null
    properties?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutItemsInput
  }

  export type ItemUncheckedCreateInput = {
    id?: string
    projectId: string
    name: string
    owner?: string | null
    properties?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    properties?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    properties?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCreateManyInput = {
    id?: string
    projectId: string
    name: string
    owner?: string | null
    properties?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    properties?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    properties?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PowerSystemCreateInput = {
    id?: string
    name: string
    rules?: string | null
    channelers?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutPowerSystemsInput
  }

  export type PowerSystemUncheckedCreateInput = {
    id?: string
    projectId: string
    name: string
    rules?: string | null
    channelers?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PowerSystemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    channelers?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutPowerSystemsNestedInput
  }

  export type PowerSystemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    channelers?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PowerSystemCreateManyInput = {
    id?: string
    projectId: string
    name: string
    rules?: string | null
    channelers?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PowerSystemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    channelers?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PowerSystemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    channelers?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationCreateInput = {
    id?: string
    name: string
    climate?: string | null
    inhabitants?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutLocationsInput
  }

  export type LocationUncheckedCreateInput = {
    id?: string
    projectId: string
    name: string
    climate?: string | null
    inhabitants?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    climate?: NullableStringFieldUpdateOperationsInput | string | null
    inhabitants?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutLocationsNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    climate?: NullableStringFieldUpdateOperationsInput | string | null
    inhabitants?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationCreateManyInput = {
    id?: string
    projectId: string
    name: string
    climate?: string | null
    inhabitants?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    climate?: NullableStringFieldUpdateOperationsInput | string | null
    inhabitants?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    climate?: NullableStringFieldUpdateOperationsInput | string | null
    inhabitants?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type ChapterListRelationFilter = {
    every?: ChapterWhereInput
    some?: ChapterWhereInput
    none?: ChapterWhereInput
  }

  export type LoreListRelationFilter = {
    every?: LoreWhereInput
    some?: LoreWhereInput
    none?: LoreWhereInput
  }

  export type LoreNodeListRelationFilter = {
    every?: LoreNodeWhereInput
    some?: LoreNodeWhereInput
    none?: LoreNodeWhereInput
  }

  export type NodeRelationListRelationFilter = {
    every?: NodeRelationWhereInput
    some?: NodeRelationWhereInput
    none?: NodeRelationWhereInput
  }

  export type CharacterListRelationFilter = {
    every?: CharacterWhereInput
    some?: CharacterWhereInput
    none?: CharacterWhereInput
  }

  export type MonsterListRelationFilter = {
    every?: MonsterWhereInput
    some?: MonsterWhereInput
    none?: MonsterWhereInput
  }

  export type ItemListRelationFilter = {
    every?: ItemWhereInput
    some?: ItemWhereInput
    none?: ItemWhereInput
  }

  export type PowerSystemListRelationFilter = {
    every?: PowerSystemWhereInput
    some?: PowerSystemWhereInput
    none?: PowerSystemWhereInput
  }

  export type LocationListRelationFilter = {
    every?: LocationWhereInput
    some?: LocationWhereInput
    none?: LocationWhereInput
  }

  export type ChapterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LoreNodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NodeRelationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CharacterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MonsterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PowerSystemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    genre?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    genre?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    genre?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type LoreNodeCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    content?: SortOrder
    position?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LoreNodeAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type LoreNodeMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    content?: SortOrder
    position?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LoreNodeMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    content?: SortOrder
    position?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LoreNodeSumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type LoreNodeScalarRelationFilter = {
    is?: LoreNodeWhereInput
    isNot?: LoreNodeWhereInput
  }

  export type NodeRelationSourceNodeIdTargetNodeIdCompoundUniqueInput = {
    sourceNodeId: string
    targetNodeId: string
  }

  export type NodeRelationCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    sourceNodeId?: SortOrder
    targetNodeId?: SortOrder
    createdAt?: SortOrder
  }

  export type NodeRelationMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    sourceNodeId?: SortOrder
    targetNodeId?: SortOrder
    createdAt?: SortOrder
  }

  export type NodeRelationMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    sourceNodeId?: SortOrder
    targetNodeId?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ChapterCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    order?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChapterAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ChapterMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    order?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChapterMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    order?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChapterSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type LoreCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LoreMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LoreMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharacterCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    archetype?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharacterMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    archetype?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharacterMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    archetype?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonsterCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    habitat?: SortOrder
    abilities?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonsterMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    habitat?: SortOrder
    abilities?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonsterMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    habitat?: SortOrder
    abilities?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    owner?: SortOrder
    properties?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    owner?: SortOrder
    properties?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    owner?: SortOrder
    properties?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PowerSystemCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    rules?: SortOrder
    channelers?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PowerSystemMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    rules?: SortOrder
    channelers?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PowerSystemMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    rules?: SortOrder
    channelers?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    climate?: SortOrder
    inhabitants?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    climate?: SortOrder
    inhabitants?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    climate?: SortOrder
    inhabitants?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type ChapterCreateNestedManyWithoutProjectInput = {
    create?: XOR<ChapterCreateWithoutProjectInput, ChapterUncheckedCreateWithoutProjectInput> | ChapterCreateWithoutProjectInput[] | ChapterUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutProjectInput | ChapterCreateOrConnectWithoutProjectInput[]
    createMany?: ChapterCreateManyProjectInputEnvelope
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
  }

  export type LoreCreateNestedManyWithoutProjectInput = {
    create?: XOR<LoreCreateWithoutProjectInput, LoreUncheckedCreateWithoutProjectInput> | LoreCreateWithoutProjectInput[] | LoreUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LoreCreateOrConnectWithoutProjectInput | LoreCreateOrConnectWithoutProjectInput[]
    createMany?: LoreCreateManyProjectInputEnvelope
    connect?: LoreWhereUniqueInput | LoreWhereUniqueInput[]
  }

  export type LoreNodeCreateNestedManyWithoutProjectInput = {
    create?: XOR<LoreNodeCreateWithoutProjectInput, LoreNodeUncheckedCreateWithoutProjectInput> | LoreNodeCreateWithoutProjectInput[] | LoreNodeUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LoreNodeCreateOrConnectWithoutProjectInput | LoreNodeCreateOrConnectWithoutProjectInput[]
    createMany?: LoreNodeCreateManyProjectInputEnvelope
    connect?: LoreNodeWhereUniqueInput | LoreNodeWhereUniqueInput[]
  }

  export type NodeRelationCreateNestedManyWithoutProjectInput = {
    create?: XOR<NodeRelationCreateWithoutProjectInput, NodeRelationUncheckedCreateWithoutProjectInput> | NodeRelationCreateWithoutProjectInput[] | NodeRelationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: NodeRelationCreateOrConnectWithoutProjectInput | NodeRelationCreateOrConnectWithoutProjectInput[]
    createMany?: NodeRelationCreateManyProjectInputEnvelope
    connect?: NodeRelationWhereUniqueInput | NodeRelationWhereUniqueInput[]
  }

  export type CharacterCreateNestedManyWithoutProjectInput = {
    create?: XOR<CharacterCreateWithoutProjectInput, CharacterUncheckedCreateWithoutProjectInput> | CharacterCreateWithoutProjectInput[] | CharacterUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutProjectInput | CharacterCreateOrConnectWithoutProjectInput[]
    createMany?: CharacterCreateManyProjectInputEnvelope
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
  }

  export type MonsterCreateNestedManyWithoutProjectInput = {
    create?: XOR<MonsterCreateWithoutProjectInput, MonsterUncheckedCreateWithoutProjectInput> | MonsterCreateWithoutProjectInput[] | MonsterUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MonsterCreateOrConnectWithoutProjectInput | MonsterCreateOrConnectWithoutProjectInput[]
    createMany?: MonsterCreateManyProjectInputEnvelope
    connect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
  }

  export type ItemCreateNestedManyWithoutProjectInput = {
    create?: XOR<ItemCreateWithoutProjectInput, ItemUncheckedCreateWithoutProjectInput> | ItemCreateWithoutProjectInput[] | ItemUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutProjectInput | ItemCreateOrConnectWithoutProjectInput[]
    createMany?: ItemCreateManyProjectInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type PowerSystemCreateNestedManyWithoutProjectInput = {
    create?: XOR<PowerSystemCreateWithoutProjectInput, PowerSystemUncheckedCreateWithoutProjectInput> | PowerSystemCreateWithoutProjectInput[] | PowerSystemUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PowerSystemCreateOrConnectWithoutProjectInput | PowerSystemCreateOrConnectWithoutProjectInput[]
    createMany?: PowerSystemCreateManyProjectInputEnvelope
    connect?: PowerSystemWhereUniqueInput | PowerSystemWhereUniqueInput[]
  }

  export type LocationCreateNestedManyWithoutProjectInput = {
    create?: XOR<LocationCreateWithoutProjectInput, LocationUncheckedCreateWithoutProjectInput> | LocationCreateWithoutProjectInput[] | LocationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutProjectInput | LocationCreateOrConnectWithoutProjectInput[]
    createMany?: LocationCreateManyProjectInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type ChapterUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ChapterCreateWithoutProjectInput, ChapterUncheckedCreateWithoutProjectInput> | ChapterCreateWithoutProjectInput[] | ChapterUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutProjectInput | ChapterCreateOrConnectWithoutProjectInput[]
    createMany?: ChapterCreateManyProjectInputEnvelope
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
  }

  export type LoreUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<LoreCreateWithoutProjectInput, LoreUncheckedCreateWithoutProjectInput> | LoreCreateWithoutProjectInput[] | LoreUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LoreCreateOrConnectWithoutProjectInput | LoreCreateOrConnectWithoutProjectInput[]
    createMany?: LoreCreateManyProjectInputEnvelope
    connect?: LoreWhereUniqueInput | LoreWhereUniqueInput[]
  }

  export type LoreNodeUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<LoreNodeCreateWithoutProjectInput, LoreNodeUncheckedCreateWithoutProjectInput> | LoreNodeCreateWithoutProjectInput[] | LoreNodeUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LoreNodeCreateOrConnectWithoutProjectInput | LoreNodeCreateOrConnectWithoutProjectInput[]
    createMany?: LoreNodeCreateManyProjectInputEnvelope
    connect?: LoreNodeWhereUniqueInput | LoreNodeWhereUniqueInput[]
  }

  export type NodeRelationUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<NodeRelationCreateWithoutProjectInput, NodeRelationUncheckedCreateWithoutProjectInput> | NodeRelationCreateWithoutProjectInput[] | NodeRelationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: NodeRelationCreateOrConnectWithoutProjectInput | NodeRelationCreateOrConnectWithoutProjectInput[]
    createMany?: NodeRelationCreateManyProjectInputEnvelope
    connect?: NodeRelationWhereUniqueInput | NodeRelationWhereUniqueInput[]
  }

  export type CharacterUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<CharacterCreateWithoutProjectInput, CharacterUncheckedCreateWithoutProjectInput> | CharacterCreateWithoutProjectInput[] | CharacterUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutProjectInput | CharacterCreateOrConnectWithoutProjectInput[]
    createMany?: CharacterCreateManyProjectInputEnvelope
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
  }

  export type MonsterUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<MonsterCreateWithoutProjectInput, MonsterUncheckedCreateWithoutProjectInput> | MonsterCreateWithoutProjectInput[] | MonsterUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MonsterCreateOrConnectWithoutProjectInput | MonsterCreateOrConnectWithoutProjectInput[]
    createMany?: MonsterCreateManyProjectInputEnvelope
    connect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
  }

  export type ItemUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ItemCreateWithoutProjectInput, ItemUncheckedCreateWithoutProjectInput> | ItemCreateWithoutProjectInput[] | ItemUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutProjectInput | ItemCreateOrConnectWithoutProjectInput[]
    createMany?: ItemCreateManyProjectInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type PowerSystemUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<PowerSystemCreateWithoutProjectInput, PowerSystemUncheckedCreateWithoutProjectInput> | PowerSystemCreateWithoutProjectInput[] | PowerSystemUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PowerSystemCreateOrConnectWithoutProjectInput | PowerSystemCreateOrConnectWithoutProjectInput[]
    createMany?: PowerSystemCreateManyProjectInputEnvelope
    connect?: PowerSystemWhereUniqueInput | PowerSystemWhereUniqueInput[]
  }

  export type LocationUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<LocationCreateWithoutProjectInput, LocationUncheckedCreateWithoutProjectInput> | LocationCreateWithoutProjectInput[] | LocationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutProjectInput | LocationCreateOrConnectWithoutProjectInput[]
    createMany?: LocationCreateManyProjectInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type ChapterUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ChapterCreateWithoutProjectInput, ChapterUncheckedCreateWithoutProjectInput> | ChapterCreateWithoutProjectInput[] | ChapterUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutProjectInput | ChapterCreateOrConnectWithoutProjectInput[]
    upsert?: ChapterUpsertWithWhereUniqueWithoutProjectInput | ChapterUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ChapterCreateManyProjectInputEnvelope
    set?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    disconnect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    delete?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    update?: ChapterUpdateWithWhereUniqueWithoutProjectInput | ChapterUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ChapterUpdateManyWithWhereWithoutProjectInput | ChapterUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
  }

  export type LoreUpdateManyWithoutProjectNestedInput = {
    create?: XOR<LoreCreateWithoutProjectInput, LoreUncheckedCreateWithoutProjectInput> | LoreCreateWithoutProjectInput[] | LoreUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LoreCreateOrConnectWithoutProjectInput | LoreCreateOrConnectWithoutProjectInput[]
    upsert?: LoreUpsertWithWhereUniqueWithoutProjectInput | LoreUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: LoreCreateManyProjectInputEnvelope
    set?: LoreWhereUniqueInput | LoreWhereUniqueInput[]
    disconnect?: LoreWhereUniqueInput | LoreWhereUniqueInput[]
    delete?: LoreWhereUniqueInput | LoreWhereUniqueInput[]
    connect?: LoreWhereUniqueInput | LoreWhereUniqueInput[]
    update?: LoreUpdateWithWhereUniqueWithoutProjectInput | LoreUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: LoreUpdateManyWithWhereWithoutProjectInput | LoreUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: LoreScalarWhereInput | LoreScalarWhereInput[]
  }

  export type LoreNodeUpdateManyWithoutProjectNestedInput = {
    create?: XOR<LoreNodeCreateWithoutProjectInput, LoreNodeUncheckedCreateWithoutProjectInput> | LoreNodeCreateWithoutProjectInput[] | LoreNodeUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LoreNodeCreateOrConnectWithoutProjectInput | LoreNodeCreateOrConnectWithoutProjectInput[]
    upsert?: LoreNodeUpsertWithWhereUniqueWithoutProjectInput | LoreNodeUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: LoreNodeCreateManyProjectInputEnvelope
    set?: LoreNodeWhereUniqueInput | LoreNodeWhereUniqueInput[]
    disconnect?: LoreNodeWhereUniqueInput | LoreNodeWhereUniqueInput[]
    delete?: LoreNodeWhereUniqueInput | LoreNodeWhereUniqueInput[]
    connect?: LoreNodeWhereUniqueInput | LoreNodeWhereUniqueInput[]
    update?: LoreNodeUpdateWithWhereUniqueWithoutProjectInput | LoreNodeUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: LoreNodeUpdateManyWithWhereWithoutProjectInput | LoreNodeUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: LoreNodeScalarWhereInput | LoreNodeScalarWhereInput[]
  }

  export type NodeRelationUpdateManyWithoutProjectNestedInput = {
    create?: XOR<NodeRelationCreateWithoutProjectInput, NodeRelationUncheckedCreateWithoutProjectInput> | NodeRelationCreateWithoutProjectInput[] | NodeRelationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: NodeRelationCreateOrConnectWithoutProjectInput | NodeRelationCreateOrConnectWithoutProjectInput[]
    upsert?: NodeRelationUpsertWithWhereUniqueWithoutProjectInput | NodeRelationUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: NodeRelationCreateManyProjectInputEnvelope
    set?: NodeRelationWhereUniqueInput | NodeRelationWhereUniqueInput[]
    disconnect?: NodeRelationWhereUniqueInput | NodeRelationWhereUniqueInput[]
    delete?: NodeRelationWhereUniqueInput | NodeRelationWhereUniqueInput[]
    connect?: NodeRelationWhereUniqueInput | NodeRelationWhereUniqueInput[]
    update?: NodeRelationUpdateWithWhereUniqueWithoutProjectInput | NodeRelationUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: NodeRelationUpdateManyWithWhereWithoutProjectInput | NodeRelationUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: NodeRelationScalarWhereInput | NodeRelationScalarWhereInput[]
  }

  export type CharacterUpdateManyWithoutProjectNestedInput = {
    create?: XOR<CharacterCreateWithoutProjectInput, CharacterUncheckedCreateWithoutProjectInput> | CharacterCreateWithoutProjectInput[] | CharacterUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutProjectInput | CharacterCreateOrConnectWithoutProjectInput[]
    upsert?: CharacterUpsertWithWhereUniqueWithoutProjectInput | CharacterUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: CharacterCreateManyProjectInputEnvelope
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    update?: CharacterUpdateWithWhereUniqueWithoutProjectInput | CharacterUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: CharacterUpdateManyWithWhereWithoutProjectInput | CharacterUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
  }

  export type MonsterUpdateManyWithoutProjectNestedInput = {
    create?: XOR<MonsterCreateWithoutProjectInput, MonsterUncheckedCreateWithoutProjectInput> | MonsterCreateWithoutProjectInput[] | MonsterUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MonsterCreateOrConnectWithoutProjectInput | MonsterCreateOrConnectWithoutProjectInput[]
    upsert?: MonsterUpsertWithWhereUniqueWithoutProjectInput | MonsterUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: MonsterCreateManyProjectInputEnvelope
    set?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    disconnect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    delete?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    connect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    update?: MonsterUpdateWithWhereUniqueWithoutProjectInput | MonsterUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: MonsterUpdateManyWithWhereWithoutProjectInput | MonsterUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: MonsterScalarWhereInput | MonsterScalarWhereInput[]
  }

  export type ItemUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ItemCreateWithoutProjectInput, ItemUncheckedCreateWithoutProjectInput> | ItemCreateWithoutProjectInput[] | ItemUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutProjectInput | ItemCreateOrConnectWithoutProjectInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutProjectInput | ItemUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ItemCreateManyProjectInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutProjectInput | ItemUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutProjectInput | ItemUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type PowerSystemUpdateManyWithoutProjectNestedInput = {
    create?: XOR<PowerSystemCreateWithoutProjectInput, PowerSystemUncheckedCreateWithoutProjectInput> | PowerSystemCreateWithoutProjectInput[] | PowerSystemUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PowerSystemCreateOrConnectWithoutProjectInput | PowerSystemCreateOrConnectWithoutProjectInput[]
    upsert?: PowerSystemUpsertWithWhereUniqueWithoutProjectInput | PowerSystemUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: PowerSystemCreateManyProjectInputEnvelope
    set?: PowerSystemWhereUniqueInput | PowerSystemWhereUniqueInput[]
    disconnect?: PowerSystemWhereUniqueInput | PowerSystemWhereUniqueInput[]
    delete?: PowerSystemWhereUniqueInput | PowerSystemWhereUniqueInput[]
    connect?: PowerSystemWhereUniqueInput | PowerSystemWhereUniqueInput[]
    update?: PowerSystemUpdateWithWhereUniqueWithoutProjectInput | PowerSystemUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: PowerSystemUpdateManyWithWhereWithoutProjectInput | PowerSystemUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: PowerSystemScalarWhereInput | PowerSystemScalarWhereInput[]
  }

  export type LocationUpdateManyWithoutProjectNestedInput = {
    create?: XOR<LocationCreateWithoutProjectInput, LocationUncheckedCreateWithoutProjectInput> | LocationCreateWithoutProjectInput[] | LocationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutProjectInput | LocationCreateOrConnectWithoutProjectInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutProjectInput | LocationUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: LocationCreateManyProjectInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutProjectInput | LocationUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutProjectInput | LocationUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type ChapterUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ChapterCreateWithoutProjectInput, ChapterUncheckedCreateWithoutProjectInput> | ChapterCreateWithoutProjectInput[] | ChapterUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutProjectInput | ChapterCreateOrConnectWithoutProjectInput[]
    upsert?: ChapterUpsertWithWhereUniqueWithoutProjectInput | ChapterUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ChapterCreateManyProjectInputEnvelope
    set?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    disconnect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    delete?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    update?: ChapterUpdateWithWhereUniqueWithoutProjectInput | ChapterUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ChapterUpdateManyWithWhereWithoutProjectInput | ChapterUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
  }

  export type LoreUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<LoreCreateWithoutProjectInput, LoreUncheckedCreateWithoutProjectInput> | LoreCreateWithoutProjectInput[] | LoreUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LoreCreateOrConnectWithoutProjectInput | LoreCreateOrConnectWithoutProjectInput[]
    upsert?: LoreUpsertWithWhereUniqueWithoutProjectInput | LoreUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: LoreCreateManyProjectInputEnvelope
    set?: LoreWhereUniqueInput | LoreWhereUniqueInput[]
    disconnect?: LoreWhereUniqueInput | LoreWhereUniqueInput[]
    delete?: LoreWhereUniqueInput | LoreWhereUniqueInput[]
    connect?: LoreWhereUniqueInput | LoreWhereUniqueInput[]
    update?: LoreUpdateWithWhereUniqueWithoutProjectInput | LoreUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: LoreUpdateManyWithWhereWithoutProjectInput | LoreUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: LoreScalarWhereInput | LoreScalarWhereInput[]
  }

  export type LoreNodeUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<LoreNodeCreateWithoutProjectInput, LoreNodeUncheckedCreateWithoutProjectInput> | LoreNodeCreateWithoutProjectInput[] | LoreNodeUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LoreNodeCreateOrConnectWithoutProjectInput | LoreNodeCreateOrConnectWithoutProjectInput[]
    upsert?: LoreNodeUpsertWithWhereUniqueWithoutProjectInput | LoreNodeUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: LoreNodeCreateManyProjectInputEnvelope
    set?: LoreNodeWhereUniqueInput | LoreNodeWhereUniqueInput[]
    disconnect?: LoreNodeWhereUniqueInput | LoreNodeWhereUniqueInput[]
    delete?: LoreNodeWhereUniqueInput | LoreNodeWhereUniqueInput[]
    connect?: LoreNodeWhereUniqueInput | LoreNodeWhereUniqueInput[]
    update?: LoreNodeUpdateWithWhereUniqueWithoutProjectInput | LoreNodeUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: LoreNodeUpdateManyWithWhereWithoutProjectInput | LoreNodeUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: LoreNodeScalarWhereInput | LoreNodeScalarWhereInput[]
  }

  export type NodeRelationUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<NodeRelationCreateWithoutProjectInput, NodeRelationUncheckedCreateWithoutProjectInput> | NodeRelationCreateWithoutProjectInput[] | NodeRelationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: NodeRelationCreateOrConnectWithoutProjectInput | NodeRelationCreateOrConnectWithoutProjectInput[]
    upsert?: NodeRelationUpsertWithWhereUniqueWithoutProjectInput | NodeRelationUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: NodeRelationCreateManyProjectInputEnvelope
    set?: NodeRelationWhereUniqueInput | NodeRelationWhereUniqueInput[]
    disconnect?: NodeRelationWhereUniqueInput | NodeRelationWhereUniqueInput[]
    delete?: NodeRelationWhereUniqueInput | NodeRelationWhereUniqueInput[]
    connect?: NodeRelationWhereUniqueInput | NodeRelationWhereUniqueInput[]
    update?: NodeRelationUpdateWithWhereUniqueWithoutProjectInput | NodeRelationUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: NodeRelationUpdateManyWithWhereWithoutProjectInput | NodeRelationUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: NodeRelationScalarWhereInput | NodeRelationScalarWhereInput[]
  }

  export type CharacterUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<CharacterCreateWithoutProjectInput, CharacterUncheckedCreateWithoutProjectInput> | CharacterCreateWithoutProjectInput[] | CharacterUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutProjectInput | CharacterCreateOrConnectWithoutProjectInput[]
    upsert?: CharacterUpsertWithWhereUniqueWithoutProjectInput | CharacterUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: CharacterCreateManyProjectInputEnvelope
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    update?: CharacterUpdateWithWhereUniqueWithoutProjectInput | CharacterUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: CharacterUpdateManyWithWhereWithoutProjectInput | CharacterUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
  }

  export type MonsterUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<MonsterCreateWithoutProjectInput, MonsterUncheckedCreateWithoutProjectInput> | MonsterCreateWithoutProjectInput[] | MonsterUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MonsterCreateOrConnectWithoutProjectInput | MonsterCreateOrConnectWithoutProjectInput[]
    upsert?: MonsterUpsertWithWhereUniqueWithoutProjectInput | MonsterUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: MonsterCreateManyProjectInputEnvelope
    set?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    disconnect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    delete?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    connect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    update?: MonsterUpdateWithWhereUniqueWithoutProjectInput | MonsterUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: MonsterUpdateManyWithWhereWithoutProjectInput | MonsterUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: MonsterScalarWhereInput | MonsterScalarWhereInput[]
  }

  export type ItemUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ItemCreateWithoutProjectInput, ItemUncheckedCreateWithoutProjectInput> | ItemCreateWithoutProjectInput[] | ItemUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutProjectInput | ItemCreateOrConnectWithoutProjectInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutProjectInput | ItemUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ItemCreateManyProjectInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutProjectInput | ItemUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutProjectInput | ItemUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type PowerSystemUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<PowerSystemCreateWithoutProjectInput, PowerSystemUncheckedCreateWithoutProjectInput> | PowerSystemCreateWithoutProjectInput[] | PowerSystemUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PowerSystemCreateOrConnectWithoutProjectInput | PowerSystemCreateOrConnectWithoutProjectInput[]
    upsert?: PowerSystemUpsertWithWhereUniqueWithoutProjectInput | PowerSystemUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: PowerSystemCreateManyProjectInputEnvelope
    set?: PowerSystemWhereUniqueInput | PowerSystemWhereUniqueInput[]
    disconnect?: PowerSystemWhereUniqueInput | PowerSystemWhereUniqueInput[]
    delete?: PowerSystemWhereUniqueInput | PowerSystemWhereUniqueInput[]
    connect?: PowerSystemWhereUniqueInput | PowerSystemWhereUniqueInput[]
    update?: PowerSystemUpdateWithWhereUniqueWithoutProjectInput | PowerSystemUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: PowerSystemUpdateManyWithWhereWithoutProjectInput | PowerSystemUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: PowerSystemScalarWhereInput | PowerSystemScalarWhereInput[]
  }

  export type LocationUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<LocationCreateWithoutProjectInput, LocationUncheckedCreateWithoutProjectInput> | LocationCreateWithoutProjectInput[] | LocationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutProjectInput | LocationCreateOrConnectWithoutProjectInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutProjectInput | LocationUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: LocationCreateManyProjectInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutProjectInput | LocationUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutProjectInput | LocationUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutLoreNodesInput = {
    create?: XOR<ProjectCreateWithoutLoreNodesInput, ProjectUncheckedCreateWithoutLoreNodesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutLoreNodesInput
    connect?: ProjectWhereUniqueInput
  }

  export type NodeRelationCreateNestedManyWithoutSourceNodeInput = {
    create?: XOR<NodeRelationCreateWithoutSourceNodeInput, NodeRelationUncheckedCreateWithoutSourceNodeInput> | NodeRelationCreateWithoutSourceNodeInput[] | NodeRelationUncheckedCreateWithoutSourceNodeInput[]
    connectOrCreate?: NodeRelationCreateOrConnectWithoutSourceNodeInput | NodeRelationCreateOrConnectWithoutSourceNodeInput[]
    createMany?: NodeRelationCreateManySourceNodeInputEnvelope
    connect?: NodeRelationWhereUniqueInput | NodeRelationWhereUniqueInput[]
  }

  export type NodeRelationCreateNestedManyWithoutTargetNodeInput = {
    create?: XOR<NodeRelationCreateWithoutTargetNodeInput, NodeRelationUncheckedCreateWithoutTargetNodeInput> | NodeRelationCreateWithoutTargetNodeInput[] | NodeRelationUncheckedCreateWithoutTargetNodeInput[]
    connectOrCreate?: NodeRelationCreateOrConnectWithoutTargetNodeInput | NodeRelationCreateOrConnectWithoutTargetNodeInput[]
    createMany?: NodeRelationCreateManyTargetNodeInputEnvelope
    connect?: NodeRelationWhereUniqueInput | NodeRelationWhereUniqueInput[]
  }

  export type NodeRelationUncheckedCreateNestedManyWithoutSourceNodeInput = {
    create?: XOR<NodeRelationCreateWithoutSourceNodeInput, NodeRelationUncheckedCreateWithoutSourceNodeInput> | NodeRelationCreateWithoutSourceNodeInput[] | NodeRelationUncheckedCreateWithoutSourceNodeInput[]
    connectOrCreate?: NodeRelationCreateOrConnectWithoutSourceNodeInput | NodeRelationCreateOrConnectWithoutSourceNodeInput[]
    createMany?: NodeRelationCreateManySourceNodeInputEnvelope
    connect?: NodeRelationWhereUniqueInput | NodeRelationWhereUniqueInput[]
  }

  export type NodeRelationUncheckedCreateNestedManyWithoutTargetNodeInput = {
    create?: XOR<NodeRelationCreateWithoutTargetNodeInput, NodeRelationUncheckedCreateWithoutTargetNodeInput> | NodeRelationCreateWithoutTargetNodeInput[] | NodeRelationUncheckedCreateWithoutTargetNodeInput[]
    connectOrCreate?: NodeRelationCreateOrConnectWithoutTargetNodeInput | NodeRelationCreateOrConnectWithoutTargetNodeInput[]
    createMany?: NodeRelationCreateManyTargetNodeInputEnvelope
    connect?: NodeRelationWhereUniqueInput | NodeRelationWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectUpdateOneRequiredWithoutLoreNodesNestedInput = {
    create?: XOR<ProjectCreateWithoutLoreNodesInput, ProjectUncheckedCreateWithoutLoreNodesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutLoreNodesInput
    upsert?: ProjectUpsertWithoutLoreNodesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutLoreNodesInput, ProjectUpdateWithoutLoreNodesInput>, ProjectUncheckedUpdateWithoutLoreNodesInput>
  }

  export type NodeRelationUpdateManyWithoutSourceNodeNestedInput = {
    create?: XOR<NodeRelationCreateWithoutSourceNodeInput, NodeRelationUncheckedCreateWithoutSourceNodeInput> | NodeRelationCreateWithoutSourceNodeInput[] | NodeRelationUncheckedCreateWithoutSourceNodeInput[]
    connectOrCreate?: NodeRelationCreateOrConnectWithoutSourceNodeInput | NodeRelationCreateOrConnectWithoutSourceNodeInput[]
    upsert?: NodeRelationUpsertWithWhereUniqueWithoutSourceNodeInput | NodeRelationUpsertWithWhereUniqueWithoutSourceNodeInput[]
    createMany?: NodeRelationCreateManySourceNodeInputEnvelope
    set?: NodeRelationWhereUniqueInput | NodeRelationWhereUniqueInput[]
    disconnect?: NodeRelationWhereUniqueInput | NodeRelationWhereUniqueInput[]
    delete?: NodeRelationWhereUniqueInput | NodeRelationWhereUniqueInput[]
    connect?: NodeRelationWhereUniqueInput | NodeRelationWhereUniqueInput[]
    update?: NodeRelationUpdateWithWhereUniqueWithoutSourceNodeInput | NodeRelationUpdateWithWhereUniqueWithoutSourceNodeInput[]
    updateMany?: NodeRelationUpdateManyWithWhereWithoutSourceNodeInput | NodeRelationUpdateManyWithWhereWithoutSourceNodeInput[]
    deleteMany?: NodeRelationScalarWhereInput | NodeRelationScalarWhereInput[]
  }

  export type NodeRelationUpdateManyWithoutTargetNodeNestedInput = {
    create?: XOR<NodeRelationCreateWithoutTargetNodeInput, NodeRelationUncheckedCreateWithoutTargetNodeInput> | NodeRelationCreateWithoutTargetNodeInput[] | NodeRelationUncheckedCreateWithoutTargetNodeInput[]
    connectOrCreate?: NodeRelationCreateOrConnectWithoutTargetNodeInput | NodeRelationCreateOrConnectWithoutTargetNodeInput[]
    upsert?: NodeRelationUpsertWithWhereUniqueWithoutTargetNodeInput | NodeRelationUpsertWithWhereUniqueWithoutTargetNodeInput[]
    createMany?: NodeRelationCreateManyTargetNodeInputEnvelope
    set?: NodeRelationWhereUniqueInput | NodeRelationWhereUniqueInput[]
    disconnect?: NodeRelationWhereUniqueInput | NodeRelationWhereUniqueInput[]
    delete?: NodeRelationWhereUniqueInput | NodeRelationWhereUniqueInput[]
    connect?: NodeRelationWhereUniqueInput | NodeRelationWhereUniqueInput[]
    update?: NodeRelationUpdateWithWhereUniqueWithoutTargetNodeInput | NodeRelationUpdateWithWhereUniqueWithoutTargetNodeInput[]
    updateMany?: NodeRelationUpdateManyWithWhereWithoutTargetNodeInput | NodeRelationUpdateManyWithWhereWithoutTargetNodeInput[]
    deleteMany?: NodeRelationScalarWhereInput | NodeRelationScalarWhereInput[]
  }

  export type NodeRelationUncheckedUpdateManyWithoutSourceNodeNestedInput = {
    create?: XOR<NodeRelationCreateWithoutSourceNodeInput, NodeRelationUncheckedCreateWithoutSourceNodeInput> | NodeRelationCreateWithoutSourceNodeInput[] | NodeRelationUncheckedCreateWithoutSourceNodeInput[]
    connectOrCreate?: NodeRelationCreateOrConnectWithoutSourceNodeInput | NodeRelationCreateOrConnectWithoutSourceNodeInput[]
    upsert?: NodeRelationUpsertWithWhereUniqueWithoutSourceNodeInput | NodeRelationUpsertWithWhereUniqueWithoutSourceNodeInput[]
    createMany?: NodeRelationCreateManySourceNodeInputEnvelope
    set?: NodeRelationWhereUniqueInput | NodeRelationWhereUniqueInput[]
    disconnect?: NodeRelationWhereUniqueInput | NodeRelationWhereUniqueInput[]
    delete?: NodeRelationWhereUniqueInput | NodeRelationWhereUniqueInput[]
    connect?: NodeRelationWhereUniqueInput | NodeRelationWhereUniqueInput[]
    update?: NodeRelationUpdateWithWhereUniqueWithoutSourceNodeInput | NodeRelationUpdateWithWhereUniqueWithoutSourceNodeInput[]
    updateMany?: NodeRelationUpdateManyWithWhereWithoutSourceNodeInput | NodeRelationUpdateManyWithWhereWithoutSourceNodeInput[]
    deleteMany?: NodeRelationScalarWhereInput | NodeRelationScalarWhereInput[]
  }

  export type NodeRelationUncheckedUpdateManyWithoutTargetNodeNestedInput = {
    create?: XOR<NodeRelationCreateWithoutTargetNodeInput, NodeRelationUncheckedCreateWithoutTargetNodeInput> | NodeRelationCreateWithoutTargetNodeInput[] | NodeRelationUncheckedCreateWithoutTargetNodeInput[]
    connectOrCreate?: NodeRelationCreateOrConnectWithoutTargetNodeInput | NodeRelationCreateOrConnectWithoutTargetNodeInput[]
    upsert?: NodeRelationUpsertWithWhereUniqueWithoutTargetNodeInput | NodeRelationUpsertWithWhereUniqueWithoutTargetNodeInput[]
    createMany?: NodeRelationCreateManyTargetNodeInputEnvelope
    set?: NodeRelationWhereUniqueInput | NodeRelationWhereUniqueInput[]
    disconnect?: NodeRelationWhereUniqueInput | NodeRelationWhereUniqueInput[]
    delete?: NodeRelationWhereUniqueInput | NodeRelationWhereUniqueInput[]
    connect?: NodeRelationWhereUniqueInput | NodeRelationWhereUniqueInput[]
    update?: NodeRelationUpdateWithWhereUniqueWithoutTargetNodeInput | NodeRelationUpdateWithWhereUniqueWithoutTargetNodeInput[]
    updateMany?: NodeRelationUpdateManyWithWhereWithoutTargetNodeInput | NodeRelationUpdateManyWithWhereWithoutTargetNodeInput[]
    deleteMany?: NodeRelationScalarWhereInput | NodeRelationScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutNodeRelationsInput = {
    create?: XOR<ProjectCreateWithoutNodeRelationsInput, ProjectUncheckedCreateWithoutNodeRelationsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutNodeRelationsInput
    connect?: ProjectWhereUniqueInput
  }

  export type LoreNodeCreateNestedOneWithoutOutgoingRelationsInput = {
    create?: XOR<LoreNodeCreateWithoutOutgoingRelationsInput, LoreNodeUncheckedCreateWithoutOutgoingRelationsInput>
    connectOrCreate?: LoreNodeCreateOrConnectWithoutOutgoingRelationsInput
    connect?: LoreNodeWhereUniqueInput
  }

  export type LoreNodeCreateNestedOneWithoutIncomingRelationsInput = {
    create?: XOR<LoreNodeCreateWithoutIncomingRelationsInput, LoreNodeUncheckedCreateWithoutIncomingRelationsInput>
    connectOrCreate?: LoreNodeCreateOrConnectWithoutIncomingRelationsInput
    connect?: LoreNodeWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutNodeRelationsNestedInput = {
    create?: XOR<ProjectCreateWithoutNodeRelationsInput, ProjectUncheckedCreateWithoutNodeRelationsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutNodeRelationsInput
    upsert?: ProjectUpsertWithoutNodeRelationsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutNodeRelationsInput, ProjectUpdateWithoutNodeRelationsInput>, ProjectUncheckedUpdateWithoutNodeRelationsInput>
  }

  export type LoreNodeUpdateOneRequiredWithoutOutgoingRelationsNestedInput = {
    create?: XOR<LoreNodeCreateWithoutOutgoingRelationsInput, LoreNodeUncheckedCreateWithoutOutgoingRelationsInput>
    connectOrCreate?: LoreNodeCreateOrConnectWithoutOutgoingRelationsInput
    upsert?: LoreNodeUpsertWithoutOutgoingRelationsInput
    connect?: LoreNodeWhereUniqueInput
    update?: XOR<XOR<LoreNodeUpdateToOneWithWhereWithoutOutgoingRelationsInput, LoreNodeUpdateWithoutOutgoingRelationsInput>, LoreNodeUncheckedUpdateWithoutOutgoingRelationsInput>
  }

  export type LoreNodeUpdateOneRequiredWithoutIncomingRelationsNestedInput = {
    create?: XOR<LoreNodeCreateWithoutIncomingRelationsInput, LoreNodeUncheckedCreateWithoutIncomingRelationsInput>
    connectOrCreate?: LoreNodeCreateOrConnectWithoutIncomingRelationsInput
    upsert?: LoreNodeUpsertWithoutIncomingRelationsInput
    connect?: LoreNodeWhereUniqueInput
    update?: XOR<XOR<LoreNodeUpdateToOneWithWhereWithoutIncomingRelationsInput, LoreNodeUpdateWithoutIncomingRelationsInput>, LoreNodeUncheckedUpdateWithoutIncomingRelationsInput>
  }

  export type ProjectCreateNestedOneWithoutChaptersInput = {
    create?: XOR<ProjectCreateWithoutChaptersInput, ProjectUncheckedCreateWithoutChaptersInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutChaptersInput
    connect?: ProjectWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectUpdateOneRequiredWithoutChaptersNestedInput = {
    create?: XOR<ProjectCreateWithoutChaptersInput, ProjectUncheckedCreateWithoutChaptersInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutChaptersInput
    upsert?: ProjectUpsertWithoutChaptersInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutChaptersInput, ProjectUpdateWithoutChaptersInput>, ProjectUncheckedUpdateWithoutChaptersInput>
  }

  export type ProjectCreateNestedOneWithoutLoreInput = {
    create?: XOR<ProjectCreateWithoutLoreInput, ProjectUncheckedCreateWithoutLoreInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutLoreInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutLoreNestedInput = {
    create?: XOR<ProjectCreateWithoutLoreInput, ProjectUncheckedCreateWithoutLoreInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutLoreInput
    upsert?: ProjectUpsertWithoutLoreInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutLoreInput, ProjectUpdateWithoutLoreInput>, ProjectUncheckedUpdateWithoutLoreInput>
  }

  export type ProjectCreateNestedOneWithoutCharactersInput = {
    create?: XOR<ProjectCreateWithoutCharactersInput, ProjectUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutCharactersInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutCharactersNestedInput = {
    create?: XOR<ProjectCreateWithoutCharactersInput, ProjectUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutCharactersInput
    upsert?: ProjectUpsertWithoutCharactersInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutCharactersInput, ProjectUpdateWithoutCharactersInput>, ProjectUncheckedUpdateWithoutCharactersInput>
  }

  export type ProjectCreateNestedOneWithoutMonstersInput = {
    create?: XOR<ProjectCreateWithoutMonstersInput, ProjectUncheckedCreateWithoutMonstersInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMonstersInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutMonstersNestedInput = {
    create?: XOR<ProjectCreateWithoutMonstersInput, ProjectUncheckedCreateWithoutMonstersInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMonstersInput
    upsert?: ProjectUpsertWithoutMonstersInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutMonstersInput, ProjectUpdateWithoutMonstersInput>, ProjectUncheckedUpdateWithoutMonstersInput>
  }

  export type ProjectCreateNestedOneWithoutItemsInput = {
    create?: XOR<ProjectCreateWithoutItemsInput, ProjectUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutItemsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<ProjectCreateWithoutItemsInput, ProjectUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutItemsInput
    upsert?: ProjectUpsertWithoutItemsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutItemsInput, ProjectUpdateWithoutItemsInput>, ProjectUncheckedUpdateWithoutItemsInput>
  }

  export type ProjectCreateNestedOneWithoutPowerSystemsInput = {
    create?: XOR<ProjectCreateWithoutPowerSystemsInput, ProjectUncheckedCreateWithoutPowerSystemsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPowerSystemsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutPowerSystemsNestedInput = {
    create?: XOR<ProjectCreateWithoutPowerSystemsInput, ProjectUncheckedCreateWithoutPowerSystemsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPowerSystemsInput
    upsert?: ProjectUpsertWithoutPowerSystemsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutPowerSystemsInput, ProjectUpdateWithoutPowerSystemsInput>, ProjectUncheckedUpdateWithoutPowerSystemsInput>
  }

  export type ProjectCreateNestedOneWithoutLocationsInput = {
    create?: XOR<ProjectCreateWithoutLocationsInput, ProjectUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutLocationsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutLocationsNestedInput = {
    create?: XOR<ProjectCreateWithoutLocationsInput, ProjectUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutLocationsInput
    upsert?: ProjectUpsertWithoutLocationsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutLocationsInput, ProjectUpdateWithoutLocationsInput>, ProjectUncheckedUpdateWithoutLocationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    genre?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chapters?: ChapterCreateNestedManyWithoutProjectInput
    lore?: LoreCreateNestedManyWithoutProjectInput
    loreNodes?: LoreNodeCreateNestedManyWithoutProjectInput
    nodeRelations?: NodeRelationCreateNestedManyWithoutProjectInput
    characters?: CharacterCreateNestedManyWithoutProjectInput
    monsters?: MonsterCreateNestedManyWithoutProjectInput
    items?: ItemCreateNestedManyWithoutProjectInput
    powerSystems?: PowerSystemCreateNestedManyWithoutProjectInput
    locations?: LocationCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    genre?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chapters?: ChapterUncheckedCreateNestedManyWithoutProjectInput
    lore?: LoreUncheckedCreateNestedManyWithoutProjectInput
    loreNodes?: LoreNodeUncheckedCreateNestedManyWithoutProjectInput
    nodeRelations?: NodeRelationUncheckedCreateNestedManyWithoutProjectInput
    characters?: CharacterUncheckedCreateNestedManyWithoutProjectInput
    monsters?: MonsterUncheckedCreateNestedManyWithoutProjectInput
    items?: ItemUncheckedCreateNestedManyWithoutProjectInput
    powerSystems?: PowerSystemUncheckedCreateNestedManyWithoutProjectInput
    locations?: LocationUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutUserInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectCreateManyUserInputEnvelope = {
    data: ProjectCreateManyUserInput | ProjectCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type ProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
  }

  export type ProjectUpdateManyWithWhereWithoutUserInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    userId?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    genre?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutProjectsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type ChapterCreateWithoutProjectInput = {
    id?: string
    order: number
    title?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChapterUncheckedCreateWithoutProjectInput = {
    id?: string
    order: number
    title?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChapterCreateOrConnectWithoutProjectInput = {
    where: ChapterWhereUniqueInput
    create: XOR<ChapterCreateWithoutProjectInput, ChapterUncheckedCreateWithoutProjectInput>
  }

  export type ChapterCreateManyProjectInputEnvelope = {
    data: ChapterCreateManyProjectInput | ChapterCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type LoreCreateWithoutProjectInput = {
    id?: string
    type: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LoreUncheckedCreateWithoutProjectInput = {
    id?: string
    type: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LoreCreateOrConnectWithoutProjectInput = {
    where: LoreWhereUniqueInput
    create: XOR<LoreCreateWithoutProjectInput, LoreUncheckedCreateWithoutProjectInput>
  }

  export type LoreCreateManyProjectInputEnvelope = {
    data: LoreCreateManyProjectInput | LoreCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type LoreNodeCreateWithoutProjectInput = {
    id?: string
    type: string
    name: string
    content?: string | null
    position: number
    color?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    outgoingRelations?: NodeRelationCreateNestedManyWithoutSourceNodeInput
    incomingRelations?: NodeRelationCreateNestedManyWithoutTargetNodeInput
  }

  export type LoreNodeUncheckedCreateWithoutProjectInput = {
    id?: string
    type: string
    name: string
    content?: string | null
    position: number
    color?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    outgoingRelations?: NodeRelationUncheckedCreateNestedManyWithoutSourceNodeInput
    incomingRelations?: NodeRelationUncheckedCreateNestedManyWithoutTargetNodeInput
  }

  export type LoreNodeCreateOrConnectWithoutProjectInput = {
    where: LoreNodeWhereUniqueInput
    create: XOR<LoreNodeCreateWithoutProjectInput, LoreNodeUncheckedCreateWithoutProjectInput>
  }

  export type LoreNodeCreateManyProjectInputEnvelope = {
    data: LoreNodeCreateManyProjectInput | LoreNodeCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type NodeRelationCreateWithoutProjectInput = {
    id?: string
    createdAt?: Date | string
    sourceNode: LoreNodeCreateNestedOneWithoutOutgoingRelationsInput
    targetNode: LoreNodeCreateNestedOneWithoutIncomingRelationsInput
  }

  export type NodeRelationUncheckedCreateWithoutProjectInput = {
    id?: string
    sourceNodeId: string
    targetNodeId: string
    createdAt?: Date | string
  }

  export type NodeRelationCreateOrConnectWithoutProjectInput = {
    where: NodeRelationWhereUniqueInput
    create: XOR<NodeRelationCreateWithoutProjectInput, NodeRelationUncheckedCreateWithoutProjectInput>
  }

  export type NodeRelationCreateManyProjectInputEnvelope = {
    data: NodeRelationCreateManyProjectInput | NodeRelationCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type CharacterCreateWithoutProjectInput = {
    id?: string
    name: string
    archetype?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CharacterUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    archetype?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CharacterCreateOrConnectWithoutProjectInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutProjectInput, CharacterUncheckedCreateWithoutProjectInput>
  }

  export type CharacterCreateManyProjectInputEnvelope = {
    data: CharacterCreateManyProjectInput | CharacterCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type MonsterCreateWithoutProjectInput = {
    id?: string
    name: string
    habitat?: string | null
    abilities?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonsterUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    habitat?: string | null
    abilities?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonsterCreateOrConnectWithoutProjectInput = {
    where: MonsterWhereUniqueInput
    create: XOR<MonsterCreateWithoutProjectInput, MonsterUncheckedCreateWithoutProjectInput>
  }

  export type MonsterCreateManyProjectInputEnvelope = {
    data: MonsterCreateManyProjectInput | MonsterCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ItemCreateWithoutProjectInput = {
    id?: string
    name: string
    owner?: string | null
    properties?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    owner?: string | null
    properties?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemCreateOrConnectWithoutProjectInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutProjectInput, ItemUncheckedCreateWithoutProjectInput>
  }

  export type ItemCreateManyProjectInputEnvelope = {
    data: ItemCreateManyProjectInput | ItemCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type PowerSystemCreateWithoutProjectInput = {
    id?: string
    name: string
    rules?: string | null
    channelers?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PowerSystemUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    rules?: string | null
    channelers?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PowerSystemCreateOrConnectWithoutProjectInput = {
    where: PowerSystemWhereUniqueInput
    create: XOR<PowerSystemCreateWithoutProjectInput, PowerSystemUncheckedCreateWithoutProjectInput>
  }

  export type PowerSystemCreateManyProjectInputEnvelope = {
    data: PowerSystemCreateManyProjectInput | PowerSystemCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type LocationCreateWithoutProjectInput = {
    id?: string
    name: string
    climate?: string | null
    inhabitants?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    climate?: string | null
    inhabitants?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationCreateOrConnectWithoutProjectInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutProjectInput, LocationUncheckedCreateWithoutProjectInput>
  }

  export type LocationCreateManyProjectInputEnvelope = {
    data: LocationCreateManyProjectInput | LocationCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChapterUpsertWithWhereUniqueWithoutProjectInput = {
    where: ChapterWhereUniqueInput
    update: XOR<ChapterUpdateWithoutProjectInput, ChapterUncheckedUpdateWithoutProjectInput>
    create: XOR<ChapterCreateWithoutProjectInput, ChapterUncheckedCreateWithoutProjectInput>
  }

  export type ChapterUpdateWithWhereUniqueWithoutProjectInput = {
    where: ChapterWhereUniqueInput
    data: XOR<ChapterUpdateWithoutProjectInput, ChapterUncheckedUpdateWithoutProjectInput>
  }

  export type ChapterUpdateManyWithWhereWithoutProjectInput = {
    where: ChapterScalarWhereInput
    data: XOR<ChapterUpdateManyMutationInput, ChapterUncheckedUpdateManyWithoutProjectInput>
  }

  export type ChapterScalarWhereInput = {
    AND?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
    OR?: ChapterScalarWhereInput[]
    NOT?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
    id?: StringFilter<"Chapter"> | string
    projectId?: StringFilter<"Chapter"> | string
    order?: IntFilter<"Chapter"> | number
    title?: StringNullableFilter<"Chapter"> | string | null
    content?: StringNullableFilter<"Chapter"> | string | null
    createdAt?: DateTimeFilter<"Chapter"> | Date | string
    updatedAt?: DateTimeFilter<"Chapter"> | Date | string
  }

  export type LoreUpsertWithWhereUniqueWithoutProjectInput = {
    where: LoreWhereUniqueInput
    update: XOR<LoreUpdateWithoutProjectInput, LoreUncheckedUpdateWithoutProjectInput>
    create: XOR<LoreCreateWithoutProjectInput, LoreUncheckedCreateWithoutProjectInput>
  }

  export type LoreUpdateWithWhereUniqueWithoutProjectInput = {
    where: LoreWhereUniqueInput
    data: XOR<LoreUpdateWithoutProjectInput, LoreUncheckedUpdateWithoutProjectInput>
  }

  export type LoreUpdateManyWithWhereWithoutProjectInput = {
    where: LoreScalarWhereInput
    data: XOR<LoreUpdateManyMutationInput, LoreUncheckedUpdateManyWithoutProjectInput>
  }

  export type LoreScalarWhereInput = {
    AND?: LoreScalarWhereInput | LoreScalarWhereInput[]
    OR?: LoreScalarWhereInput[]
    NOT?: LoreScalarWhereInput | LoreScalarWhereInput[]
    id?: StringFilter<"Lore"> | string
    projectId?: StringFilter<"Lore"> | string
    type?: StringFilter<"Lore"> | string
    name?: StringFilter<"Lore"> | string
    description?: StringNullableFilter<"Lore"> | string | null
    createdAt?: DateTimeFilter<"Lore"> | Date | string
    updatedAt?: DateTimeFilter<"Lore"> | Date | string
  }

  export type LoreNodeUpsertWithWhereUniqueWithoutProjectInput = {
    where: LoreNodeWhereUniqueInput
    update: XOR<LoreNodeUpdateWithoutProjectInput, LoreNodeUncheckedUpdateWithoutProjectInput>
    create: XOR<LoreNodeCreateWithoutProjectInput, LoreNodeUncheckedCreateWithoutProjectInput>
  }

  export type LoreNodeUpdateWithWhereUniqueWithoutProjectInput = {
    where: LoreNodeWhereUniqueInput
    data: XOR<LoreNodeUpdateWithoutProjectInput, LoreNodeUncheckedUpdateWithoutProjectInput>
  }

  export type LoreNodeUpdateManyWithWhereWithoutProjectInput = {
    where: LoreNodeScalarWhereInput
    data: XOR<LoreNodeUpdateManyMutationInput, LoreNodeUncheckedUpdateManyWithoutProjectInput>
  }

  export type LoreNodeScalarWhereInput = {
    AND?: LoreNodeScalarWhereInput | LoreNodeScalarWhereInput[]
    OR?: LoreNodeScalarWhereInput[]
    NOT?: LoreNodeScalarWhereInput | LoreNodeScalarWhereInput[]
    id?: StringFilter<"LoreNode"> | string
    projectId?: StringFilter<"LoreNode"> | string
    type?: StringFilter<"LoreNode"> | string
    name?: StringFilter<"LoreNode"> | string
    content?: StringNullableFilter<"LoreNode"> | string | null
    position?: FloatFilter<"LoreNode"> | number
    color?: StringFilter<"LoreNode"> | string
    createdAt?: DateTimeFilter<"LoreNode"> | Date | string
    updatedAt?: DateTimeFilter<"LoreNode"> | Date | string
  }

  export type NodeRelationUpsertWithWhereUniqueWithoutProjectInput = {
    where: NodeRelationWhereUniqueInput
    update: XOR<NodeRelationUpdateWithoutProjectInput, NodeRelationUncheckedUpdateWithoutProjectInput>
    create: XOR<NodeRelationCreateWithoutProjectInput, NodeRelationUncheckedCreateWithoutProjectInput>
  }

  export type NodeRelationUpdateWithWhereUniqueWithoutProjectInput = {
    where: NodeRelationWhereUniqueInput
    data: XOR<NodeRelationUpdateWithoutProjectInput, NodeRelationUncheckedUpdateWithoutProjectInput>
  }

  export type NodeRelationUpdateManyWithWhereWithoutProjectInput = {
    where: NodeRelationScalarWhereInput
    data: XOR<NodeRelationUpdateManyMutationInput, NodeRelationUncheckedUpdateManyWithoutProjectInput>
  }

  export type NodeRelationScalarWhereInput = {
    AND?: NodeRelationScalarWhereInput | NodeRelationScalarWhereInput[]
    OR?: NodeRelationScalarWhereInput[]
    NOT?: NodeRelationScalarWhereInput | NodeRelationScalarWhereInput[]
    id?: StringFilter<"NodeRelation"> | string
    projectId?: StringFilter<"NodeRelation"> | string
    sourceNodeId?: StringFilter<"NodeRelation"> | string
    targetNodeId?: StringFilter<"NodeRelation"> | string
    createdAt?: DateTimeFilter<"NodeRelation"> | Date | string
  }

  export type CharacterUpsertWithWhereUniqueWithoutProjectInput = {
    where: CharacterWhereUniqueInput
    update: XOR<CharacterUpdateWithoutProjectInput, CharacterUncheckedUpdateWithoutProjectInput>
    create: XOR<CharacterCreateWithoutProjectInput, CharacterUncheckedCreateWithoutProjectInput>
  }

  export type CharacterUpdateWithWhereUniqueWithoutProjectInput = {
    where: CharacterWhereUniqueInput
    data: XOR<CharacterUpdateWithoutProjectInput, CharacterUncheckedUpdateWithoutProjectInput>
  }

  export type CharacterUpdateManyWithWhereWithoutProjectInput = {
    where: CharacterScalarWhereInput
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyWithoutProjectInput>
  }

  export type CharacterScalarWhereInput = {
    AND?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
    OR?: CharacterScalarWhereInput[]
    NOT?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
    id?: StringFilter<"Character"> | string
    projectId?: StringFilter<"Character"> | string
    name?: StringFilter<"Character"> | string
    archetype?: StringNullableFilter<"Character"> | string | null
    description?: StringNullableFilter<"Character"> | string | null
    createdAt?: DateTimeFilter<"Character"> | Date | string
    updatedAt?: DateTimeFilter<"Character"> | Date | string
  }

  export type MonsterUpsertWithWhereUniqueWithoutProjectInput = {
    where: MonsterWhereUniqueInput
    update: XOR<MonsterUpdateWithoutProjectInput, MonsterUncheckedUpdateWithoutProjectInput>
    create: XOR<MonsterCreateWithoutProjectInput, MonsterUncheckedCreateWithoutProjectInput>
  }

  export type MonsterUpdateWithWhereUniqueWithoutProjectInput = {
    where: MonsterWhereUniqueInput
    data: XOR<MonsterUpdateWithoutProjectInput, MonsterUncheckedUpdateWithoutProjectInput>
  }

  export type MonsterUpdateManyWithWhereWithoutProjectInput = {
    where: MonsterScalarWhereInput
    data: XOR<MonsterUpdateManyMutationInput, MonsterUncheckedUpdateManyWithoutProjectInput>
  }

  export type MonsterScalarWhereInput = {
    AND?: MonsterScalarWhereInput | MonsterScalarWhereInput[]
    OR?: MonsterScalarWhereInput[]
    NOT?: MonsterScalarWhereInput | MonsterScalarWhereInput[]
    id?: StringFilter<"Monster"> | string
    projectId?: StringFilter<"Monster"> | string
    name?: StringFilter<"Monster"> | string
    habitat?: StringNullableFilter<"Monster"> | string | null
    abilities?: StringNullableFilter<"Monster"> | string | null
    description?: StringNullableFilter<"Monster"> | string | null
    createdAt?: DateTimeFilter<"Monster"> | Date | string
    updatedAt?: DateTimeFilter<"Monster"> | Date | string
  }

  export type ItemUpsertWithWhereUniqueWithoutProjectInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutProjectInput, ItemUncheckedUpdateWithoutProjectInput>
    create: XOR<ItemCreateWithoutProjectInput, ItemUncheckedCreateWithoutProjectInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutProjectInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutProjectInput, ItemUncheckedUpdateWithoutProjectInput>
  }

  export type ItemUpdateManyWithWhereWithoutProjectInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutProjectInput>
  }

  export type ItemScalarWhereInput = {
    AND?: ItemScalarWhereInput | ItemScalarWhereInput[]
    OR?: ItemScalarWhereInput[]
    NOT?: ItemScalarWhereInput | ItemScalarWhereInput[]
    id?: StringFilter<"Item"> | string
    projectId?: StringFilter<"Item"> | string
    name?: StringFilter<"Item"> | string
    owner?: StringNullableFilter<"Item"> | string | null
    properties?: StringNullableFilter<"Item"> | string | null
    description?: StringNullableFilter<"Item"> | string | null
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
  }

  export type PowerSystemUpsertWithWhereUniqueWithoutProjectInput = {
    where: PowerSystemWhereUniqueInput
    update: XOR<PowerSystemUpdateWithoutProjectInput, PowerSystemUncheckedUpdateWithoutProjectInput>
    create: XOR<PowerSystemCreateWithoutProjectInput, PowerSystemUncheckedCreateWithoutProjectInput>
  }

  export type PowerSystemUpdateWithWhereUniqueWithoutProjectInput = {
    where: PowerSystemWhereUniqueInput
    data: XOR<PowerSystemUpdateWithoutProjectInput, PowerSystemUncheckedUpdateWithoutProjectInput>
  }

  export type PowerSystemUpdateManyWithWhereWithoutProjectInput = {
    where: PowerSystemScalarWhereInput
    data: XOR<PowerSystemUpdateManyMutationInput, PowerSystemUncheckedUpdateManyWithoutProjectInput>
  }

  export type PowerSystemScalarWhereInput = {
    AND?: PowerSystemScalarWhereInput | PowerSystemScalarWhereInput[]
    OR?: PowerSystemScalarWhereInput[]
    NOT?: PowerSystemScalarWhereInput | PowerSystemScalarWhereInput[]
    id?: StringFilter<"PowerSystem"> | string
    projectId?: StringFilter<"PowerSystem"> | string
    name?: StringFilter<"PowerSystem"> | string
    rules?: StringNullableFilter<"PowerSystem"> | string | null
    channelers?: StringNullableFilter<"PowerSystem"> | string | null
    description?: StringNullableFilter<"PowerSystem"> | string | null
    createdAt?: DateTimeFilter<"PowerSystem"> | Date | string
    updatedAt?: DateTimeFilter<"PowerSystem"> | Date | string
  }

  export type LocationUpsertWithWhereUniqueWithoutProjectInput = {
    where: LocationWhereUniqueInput
    update: XOR<LocationUpdateWithoutProjectInput, LocationUncheckedUpdateWithoutProjectInput>
    create: XOR<LocationCreateWithoutProjectInput, LocationUncheckedCreateWithoutProjectInput>
  }

  export type LocationUpdateWithWhereUniqueWithoutProjectInput = {
    where: LocationWhereUniqueInput
    data: XOR<LocationUpdateWithoutProjectInput, LocationUncheckedUpdateWithoutProjectInput>
  }

  export type LocationUpdateManyWithWhereWithoutProjectInput = {
    where: LocationScalarWhereInput
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyWithoutProjectInput>
  }

  export type LocationScalarWhereInput = {
    AND?: LocationScalarWhereInput | LocationScalarWhereInput[]
    OR?: LocationScalarWhereInput[]
    NOT?: LocationScalarWhereInput | LocationScalarWhereInput[]
    id?: StringFilter<"Location"> | string
    projectId?: StringFilter<"Location"> | string
    name?: StringFilter<"Location"> | string
    climate?: StringNullableFilter<"Location"> | string | null
    inhabitants?: StringNullableFilter<"Location"> | string | null
    description?: StringNullableFilter<"Location"> | string | null
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
  }

  export type ProjectCreateWithoutLoreNodesInput = {
    id?: string
    name: string
    description?: string | null
    genre?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProjectsInput
    chapters?: ChapterCreateNestedManyWithoutProjectInput
    lore?: LoreCreateNestedManyWithoutProjectInput
    nodeRelations?: NodeRelationCreateNestedManyWithoutProjectInput
    characters?: CharacterCreateNestedManyWithoutProjectInput
    monsters?: MonsterCreateNestedManyWithoutProjectInput
    items?: ItemCreateNestedManyWithoutProjectInput
    powerSystems?: PowerSystemCreateNestedManyWithoutProjectInput
    locations?: LocationCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutLoreNodesInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    genre?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chapters?: ChapterUncheckedCreateNestedManyWithoutProjectInput
    lore?: LoreUncheckedCreateNestedManyWithoutProjectInput
    nodeRelations?: NodeRelationUncheckedCreateNestedManyWithoutProjectInput
    characters?: CharacterUncheckedCreateNestedManyWithoutProjectInput
    monsters?: MonsterUncheckedCreateNestedManyWithoutProjectInput
    items?: ItemUncheckedCreateNestedManyWithoutProjectInput
    powerSystems?: PowerSystemUncheckedCreateNestedManyWithoutProjectInput
    locations?: LocationUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutLoreNodesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutLoreNodesInput, ProjectUncheckedCreateWithoutLoreNodesInput>
  }

  export type NodeRelationCreateWithoutSourceNodeInput = {
    id?: string
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutNodeRelationsInput
    targetNode: LoreNodeCreateNestedOneWithoutIncomingRelationsInput
  }

  export type NodeRelationUncheckedCreateWithoutSourceNodeInput = {
    id?: string
    projectId: string
    targetNodeId: string
    createdAt?: Date | string
  }

  export type NodeRelationCreateOrConnectWithoutSourceNodeInput = {
    where: NodeRelationWhereUniqueInput
    create: XOR<NodeRelationCreateWithoutSourceNodeInput, NodeRelationUncheckedCreateWithoutSourceNodeInput>
  }

  export type NodeRelationCreateManySourceNodeInputEnvelope = {
    data: NodeRelationCreateManySourceNodeInput | NodeRelationCreateManySourceNodeInput[]
    skipDuplicates?: boolean
  }

  export type NodeRelationCreateWithoutTargetNodeInput = {
    id?: string
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutNodeRelationsInput
    sourceNode: LoreNodeCreateNestedOneWithoutOutgoingRelationsInput
  }

  export type NodeRelationUncheckedCreateWithoutTargetNodeInput = {
    id?: string
    projectId: string
    sourceNodeId: string
    createdAt?: Date | string
  }

  export type NodeRelationCreateOrConnectWithoutTargetNodeInput = {
    where: NodeRelationWhereUniqueInput
    create: XOR<NodeRelationCreateWithoutTargetNodeInput, NodeRelationUncheckedCreateWithoutTargetNodeInput>
  }

  export type NodeRelationCreateManyTargetNodeInputEnvelope = {
    data: NodeRelationCreateManyTargetNodeInput | NodeRelationCreateManyTargetNodeInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutLoreNodesInput = {
    update: XOR<ProjectUpdateWithoutLoreNodesInput, ProjectUncheckedUpdateWithoutLoreNodesInput>
    create: XOR<ProjectCreateWithoutLoreNodesInput, ProjectUncheckedCreateWithoutLoreNodesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutLoreNodesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutLoreNodesInput, ProjectUncheckedUpdateWithoutLoreNodesInput>
  }

  export type ProjectUpdateWithoutLoreNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    chapters?: ChapterUpdateManyWithoutProjectNestedInput
    lore?: LoreUpdateManyWithoutProjectNestedInput
    nodeRelations?: NodeRelationUpdateManyWithoutProjectNestedInput
    characters?: CharacterUpdateManyWithoutProjectNestedInput
    monsters?: MonsterUpdateManyWithoutProjectNestedInput
    items?: ItemUpdateManyWithoutProjectNestedInput
    powerSystems?: PowerSystemUpdateManyWithoutProjectNestedInput
    locations?: LocationUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutLoreNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapters?: ChapterUncheckedUpdateManyWithoutProjectNestedInput
    lore?: LoreUncheckedUpdateManyWithoutProjectNestedInput
    nodeRelations?: NodeRelationUncheckedUpdateManyWithoutProjectNestedInput
    characters?: CharacterUncheckedUpdateManyWithoutProjectNestedInput
    monsters?: MonsterUncheckedUpdateManyWithoutProjectNestedInput
    items?: ItemUncheckedUpdateManyWithoutProjectNestedInput
    powerSystems?: PowerSystemUncheckedUpdateManyWithoutProjectNestedInput
    locations?: LocationUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type NodeRelationUpsertWithWhereUniqueWithoutSourceNodeInput = {
    where: NodeRelationWhereUniqueInput
    update: XOR<NodeRelationUpdateWithoutSourceNodeInput, NodeRelationUncheckedUpdateWithoutSourceNodeInput>
    create: XOR<NodeRelationCreateWithoutSourceNodeInput, NodeRelationUncheckedCreateWithoutSourceNodeInput>
  }

  export type NodeRelationUpdateWithWhereUniqueWithoutSourceNodeInput = {
    where: NodeRelationWhereUniqueInput
    data: XOR<NodeRelationUpdateWithoutSourceNodeInput, NodeRelationUncheckedUpdateWithoutSourceNodeInput>
  }

  export type NodeRelationUpdateManyWithWhereWithoutSourceNodeInput = {
    where: NodeRelationScalarWhereInput
    data: XOR<NodeRelationUpdateManyMutationInput, NodeRelationUncheckedUpdateManyWithoutSourceNodeInput>
  }

  export type NodeRelationUpsertWithWhereUniqueWithoutTargetNodeInput = {
    where: NodeRelationWhereUniqueInput
    update: XOR<NodeRelationUpdateWithoutTargetNodeInput, NodeRelationUncheckedUpdateWithoutTargetNodeInput>
    create: XOR<NodeRelationCreateWithoutTargetNodeInput, NodeRelationUncheckedCreateWithoutTargetNodeInput>
  }

  export type NodeRelationUpdateWithWhereUniqueWithoutTargetNodeInput = {
    where: NodeRelationWhereUniqueInput
    data: XOR<NodeRelationUpdateWithoutTargetNodeInput, NodeRelationUncheckedUpdateWithoutTargetNodeInput>
  }

  export type NodeRelationUpdateManyWithWhereWithoutTargetNodeInput = {
    where: NodeRelationScalarWhereInput
    data: XOR<NodeRelationUpdateManyMutationInput, NodeRelationUncheckedUpdateManyWithoutTargetNodeInput>
  }

  export type ProjectCreateWithoutNodeRelationsInput = {
    id?: string
    name: string
    description?: string | null
    genre?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProjectsInput
    chapters?: ChapterCreateNestedManyWithoutProjectInput
    lore?: LoreCreateNestedManyWithoutProjectInput
    loreNodes?: LoreNodeCreateNestedManyWithoutProjectInput
    characters?: CharacterCreateNestedManyWithoutProjectInput
    monsters?: MonsterCreateNestedManyWithoutProjectInput
    items?: ItemCreateNestedManyWithoutProjectInput
    powerSystems?: PowerSystemCreateNestedManyWithoutProjectInput
    locations?: LocationCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutNodeRelationsInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    genre?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chapters?: ChapterUncheckedCreateNestedManyWithoutProjectInput
    lore?: LoreUncheckedCreateNestedManyWithoutProjectInput
    loreNodes?: LoreNodeUncheckedCreateNestedManyWithoutProjectInput
    characters?: CharacterUncheckedCreateNestedManyWithoutProjectInput
    monsters?: MonsterUncheckedCreateNestedManyWithoutProjectInput
    items?: ItemUncheckedCreateNestedManyWithoutProjectInput
    powerSystems?: PowerSystemUncheckedCreateNestedManyWithoutProjectInput
    locations?: LocationUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutNodeRelationsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutNodeRelationsInput, ProjectUncheckedCreateWithoutNodeRelationsInput>
  }

  export type LoreNodeCreateWithoutOutgoingRelationsInput = {
    id?: string
    type: string
    name: string
    content?: string | null
    position: number
    color?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutLoreNodesInput
    incomingRelations?: NodeRelationCreateNestedManyWithoutTargetNodeInput
  }

  export type LoreNodeUncheckedCreateWithoutOutgoingRelationsInput = {
    id?: string
    projectId: string
    type: string
    name: string
    content?: string | null
    position: number
    color?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    incomingRelations?: NodeRelationUncheckedCreateNestedManyWithoutTargetNodeInput
  }

  export type LoreNodeCreateOrConnectWithoutOutgoingRelationsInput = {
    where: LoreNodeWhereUniqueInput
    create: XOR<LoreNodeCreateWithoutOutgoingRelationsInput, LoreNodeUncheckedCreateWithoutOutgoingRelationsInput>
  }

  export type LoreNodeCreateWithoutIncomingRelationsInput = {
    id?: string
    type: string
    name: string
    content?: string | null
    position: number
    color?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutLoreNodesInput
    outgoingRelations?: NodeRelationCreateNestedManyWithoutSourceNodeInput
  }

  export type LoreNodeUncheckedCreateWithoutIncomingRelationsInput = {
    id?: string
    projectId: string
    type: string
    name: string
    content?: string | null
    position: number
    color?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    outgoingRelations?: NodeRelationUncheckedCreateNestedManyWithoutSourceNodeInput
  }

  export type LoreNodeCreateOrConnectWithoutIncomingRelationsInput = {
    where: LoreNodeWhereUniqueInput
    create: XOR<LoreNodeCreateWithoutIncomingRelationsInput, LoreNodeUncheckedCreateWithoutIncomingRelationsInput>
  }

  export type ProjectUpsertWithoutNodeRelationsInput = {
    update: XOR<ProjectUpdateWithoutNodeRelationsInput, ProjectUncheckedUpdateWithoutNodeRelationsInput>
    create: XOR<ProjectCreateWithoutNodeRelationsInput, ProjectUncheckedCreateWithoutNodeRelationsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutNodeRelationsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutNodeRelationsInput, ProjectUncheckedUpdateWithoutNodeRelationsInput>
  }

  export type ProjectUpdateWithoutNodeRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    chapters?: ChapterUpdateManyWithoutProjectNestedInput
    lore?: LoreUpdateManyWithoutProjectNestedInput
    loreNodes?: LoreNodeUpdateManyWithoutProjectNestedInput
    characters?: CharacterUpdateManyWithoutProjectNestedInput
    monsters?: MonsterUpdateManyWithoutProjectNestedInput
    items?: ItemUpdateManyWithoutProjectNestedInput
    powerSystems?: PowerSystemUpdateManyWithoutProjectNestedInput
    locations?: LocationUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutNodeRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapters?: ChapterUncheckedUpdateManyWithoutProjectNestedInput
    lore?: LoreUncheckedUpdateManyWithoutProjectNestedInput
    loreNodes?: LoreNodeUncheckedUpdateManyWithoutProjectNestedInput
    characters?: CharacterUncheckedUpdateManyWithoutProjectNestedInput
    monsters?: MonsterUncheckedUpdateManyWithoutProjectNestedInput
    items?: ItemUncheckedUpdateManyWithoutProjectNestedInput
    powerSystems?: PowerSystemUncheckedUpdateManyWithoutProjectNestedInput
    locations?: LocationUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type LoreNodeUpsertWithoutOutgoingRelationsInput = {
    update: XOR<LoreNodeUpdateWithoutOutgoingRelationsInput, LoreNodeUncheckedUpdateWithoutOutgoingRelationsInput>
    create: XOR<LoreNodeCreateWithoutOutgoingRelationsInput, LoreNodeUncheckedCreateWithoutOutgoingRelationsInput>
    where?: LoreNodeWhereInput
  }

  export type LoreNodeUpdateToOneWithWhereWithoutOutgoingRelationsInput = {
    where?: LoreNodeWhereInput
    data: XOR<LoreNodeUpdateWithoutOutgoingRelationsInput, LoreNodeUncheckedUpdateWithoutOutgoingRelationsInput>
  }

  export type LoreNodeUpdateWithoutOutgoingRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    position?: FloatFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutLoreNodesNestedInput
    incomingRelations?: NodeRelationUpdateManyWithoutTargetNodeNestedInput
  }

  export type LoreNodeUncheckedUpdateWithoutOutgoingRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    position?: FloatFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incomingRelations?: NodeRelationUncheckedUpdateManyWithoutTargetNodeNestedInput
  }

  export type LoreNodeUpsertWithoutIncomingRelationsInput = {
    update: XOR<LoreNodeUpdateWithoutIncomingRelationsInput, LoreNodeUncheckedUpdateWithoutIncomingRelationsInput>
    create: XOR<LoreNodeCreateWithoutIncomingRelationsInput, LoreNodeUncheckedCreateWithoutIncomingRelationsInput>
    where?: LoreNodeWhereInput
  }

  export type LoreNodeUpdateToOneWithWhereWithoutIncomingRelationsInput = {
    where?: LoreNodeWhereInput
    data: XOR<LoreNodeUpdateWithoutIncomingRelationsInput, LoreNodeUncheckedUpdateWithoutIncomingRelationsInput>
  }

  export type LoreNodeUpdateWithoutIncomingRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    position?: FloatFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutLoreNodesNestedInput
    outgoingRelations?: NodeRelationUpdateManyWithoutSourceNodeNestedInput
  }

  export type LoreNodeUncheckedUpdateWithoutIncomingRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    position?: FloatFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outgoingRelations?: NodeRelationUncheckedUpdateManyWithoutSourceNodeNestedInput
  }

  export type ProjectCreateWithoutChaptersInput = {
    id?: string
    name: string
    description?: string | null
    genre?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProjectsInput
    lore?: LoreCreateNestedManyWithoutProjectInput
    loreNodes?: LoreNodeCreateNestedManyWithoutProjectInput
    nodeRelations?: NodeRelationCreateNestedManyWithoutProjectInput
    characters?: CharacterCreateNestedManyWithoutProjectInput
    monsters?: MonsterCreateNestedManyWithoutProjectInput
    items?: ItemCreateNestedManyWithoutProjectInput
    powerSystems?: PowerSystemCreateNestedManyWithoutProjectInput
    locations?: LocationCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutChaptersInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    genre?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lore?: LoreUncheckedCreateNestedManyWithoutProjectInput
    loreNodes?: LoreNodeUncheckedCreateNestedManyWithoutProjectInput
    nodeRelations?: NodeRelationUncheckedCreateNestedManyWithoutProjectInput
    characters?: CharacterUncheckedCreateNestedManyWithoutProjectInput
    monsters?: MonsterUncheckedCreateNestedManyWithoutProjectInput
    items?: ItemUncheckedCreateNestedManyWithoutProjectInput
    powerSystems?: PowerSystemUncheckedCreateNestedManyWithoutProjectInput
    locations?: LocationUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutChaptersInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutChaptersInput, ProjectUncheckedCreateWithoutChaptersInput>
  }

  export type ProjectUpsertWithoutChaptersInput = {
    update: XOR<ProjectUpdateWithoutChaptersInput, ProjectUncheckedUpdateWithoutChaptersInput>
    create: XOR<ProjectCreateWithoutChaptersInput, ProjectUncheckedCreateWithoutChaptersInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutChaptersInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutChaptersInput, ProjectUncheckedUpdateWithoutChaptersInput>
  }

  export type ProjectUpdateWithoutChaptersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    lore?: LoreUpdateManyWithoutProjectNestedInput
    loreNodes?: LoreNodeUpdateManyWithoutProjectNestedInput
    nodeRelations?: NodeRelationUpdateManyWithoutProjectNestedInput
    characters?: CharacterUpdateManyWithoutProjectNestedInput
    monsters?: MonsterUpdateManyWithoutProjectNestedInput
    items?: ItemUpdateManyWithoutProjectNestedInput
    powerSystems?: PowerSystemUpdateManyWithoutProjectNestedInput
    locations?: LocationUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutChaptersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lore?: LoreUncheckedUpdateManyWithoutProjectNestedInput
    loreNodes?: LoreNodeUncheckedUpdateManyWithoutProjectNestedInput
    nodeRelations?: NodeRelationUncheckedUpdateManyWithoutProjectNestedInput
    characters?: CharacterUncheckedUpdateManyWithoutProjectNestedInput
    monsters?: MonsterUncheckedUpdateManyWithoutProjectNestedInput
    items?: ItemUncheckedUpdateManyWithoutProjectNestedInput
    powerSystems?: PowerSystemUncheckedUpdateManyWithoutProjectNestedInput
    locations?: LocationUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutLoreInput = {
    id?: string
    name: string
    description?: string | null
    genre?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProjectsInput
    chapters?: ChapterCreateNestedManyWithoutProjectInput
    loreNodes?: LoreNodeCreateNestedManyWithoutProjectInput
    nodeRelations?: NodeRelationCreateNestedManyWithoutProjectInput
    characters?: CharacterCreateNestedManyWithoutProjectInput
    monsters?: MonsterCreateNestedManyWithoutProjectInput
    items?: ItemCreateNestedManyWithoutProjectInput
    powerSystems?: PowerSystemCreateNestedManyWithoutProjectInput
    locations?: LocationCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutLoreInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    genre?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chapters?: ChapterUncheckedCreateNestedManyWithoutProjectInput
    loreNodes?: LoreNodeUncheckedCreateNestedManyWithoutProjectInput
    nodeRelations?: NodeRelationUncheckedCreateNestedManyWithoutProjectInput
    characters?: CharacterUncheckedCreateNestedManyWithoutProjectInput
    monsters?: MonsterUncheckedCreateNestedManyWithoutProjectInput
    items?: ItemUncheckedCreateNestedManyWithoutProjectInput
    powerSystems?: PowerSystemUncheckedCreateNestedManyWithoutProjectInput
    locations?: LocationUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutLoreInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutLoreInput, ProjectUncheckedCreateWithoutLoreInput>
  }

  export type ProjectUpsertWithoutLoreInput = {
    update: XOR<ProjectUpdateWithoutLoreInput, ProjectUncheckedUpdateWithoutLoreInput>
    create: XOR<ProjectCreateWithoutLoreInput, ProjectUncheckedCreateWithoutLoreInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutLoreInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutLoreInput, ProjectUncheckedUpdateWithoutLoreInput>
  }

  export type ProjectUpdateWithoutLoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    chapters?: ChapterUpdateManyWithoutProjectNestedInput
    loreNodes?: LoreNodeUpdateManyWithoutProjectNestedInput
    nodeRelations?: NodeRelationUpdateManyWithoutProjectNestedInput
    characters?: CharacterUpdateManyWithoutProjectNestedInput
    monsters?: MonsterUpdateManyWithoutProjectNestedInput
    items?: ItemUpdateManyWithoutProjectNestedInput
    powerSystems?: PowerSystemUpdateManyWithoutProjectNestedInput
    locations?: LocationUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutLoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapters?: ChapterUncheckedUpdateManyWithoutProjectNestedInput
    loreNodes?: LoreNodeUncheckedUpdateManyWithoutProjectNestedInput
    nodeRelations?: NodeRelationUncheckedUpdateManyWithoutProjectNestedInput
    characters?: CharacterUncheckedUpdateManyWithoutProjectNestedInput
    monsters?: MonsterUncheckedUpdateManyWithoutProjectNestedInput
    items?: ItemUncheckedUpdateManyWithoutProjectNestedInput
    powerSystems?: PowerSystemUncheckedUpdateManyWithoutProjectNestedInput
    locations?: LocationUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutCharactersInput = {
    id?: string
    name: string
    description?: string | null
    genre?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProjectsInput
    chapters?: ChapterCreateNestedManyWithoutProjectInput
    lore?: LoreCreateNestedManyWithoutProjectInput
    loreNodes?: LoreNodeCreateNestedManyWithoutProjectInput
    nodeRelations?: NodeRelationCreateNestedManyWithoutProjectInput
    monsters?: MonsterCreateNestedManyWithoutProjectInput
    items?: ItemCreateNestedManyWithoutProjectInput
    powerSystems?: PowerSystemCreateNestedManyWithoutProjectInput
    locations?: LocationCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutCharactersInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    genre?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chapters?: ChapterUncheckedCreateNestedManyWithoutProjectInput
    lore?: LoreUncheckedCreateNestedManyWithoutProjectInput
    loreNodes?: LoreNodeUncheckedCreateNestedManyWithoutProjectInput
    nodeRelations?: NodeRelationUncheckedCreateNestedManyWithoutProjectInput
    monsters?: MonsterUncheckedCreateNestedManyWithoutProjectInput
    items?: ItemUncheckedCreateNestedManyWithoutProjectInput
    powerSystems?: PowerSystemUncheckedCreateNestedManyWithoutProjectInput
    locations?: LocationUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutCharactersInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCharactersInput, ProjectUncheckedCreateWithoutCharactersInput>
  }

  export type ProjectUpsertWithoutCharactersInput = {
    update: XOR<ProjectUpdateWithoutCharactersInput, ProjectUncheckedUpdateWithoutCharactersInput>
    create: XOR<ProjectCreateWithoutCharactersInput, ProjectUncheckedCreateWithoutCharactersInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutCharactersInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutCharactersInput, ProjectUncheckedUpdateWithoutCharactersInput>
  }

  export type ProjectUpdateWithoutCharactersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    chapters?: ChapterUpdateManyWithoutProjectNestedInput
    lore?: LoreUpdateManyWithoutProjectNestedInput
    loreNodes?: LoreNodeUpdateManyWithoutProjectNestedInput
    nodeRelations?: NodeRelationUpdateManyWithoutProjectNestedInput
    monsters?: MonsterUpdateManyWithoutProjectNestedInput
    items?: ItemUpdateManyWithoutProjectNestedInput
    powerSystems?: PowerSystemUpdateManyWithoutProjectNestedInput
    locations?: LocationUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutCharactersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapters?: ChapterUncheckedUpdateManyWithoutProjectNestedInput
    lore?: LoreUncheckedUpdateManyWithoutProjectNestedInput
    loreNodes?: LoreNodeUncheckedUpdateManyWithoutProjectNestedInput
    nodeRelations?: NodeRelationUncheckedUpdateManyWithoutProjectNestedInput
    monsters?: MonsterUncheckedUpdateManyWithoutProjectNestedInput
    items?: ItemUncheckedUpdateManyWithoutProjectNestedInput
    powerSystems?: PowerSystemUncheckedUpdateManyWithoutProjectNestedInput
    locations?: LocationUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutMonstersInput = {
    id?: string
    name: string
    description?: string | null
    genre?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProjectsInput
    chapters?: ChapterCreateNestedManyWithoutProjectInput
    lore?: LoreCreateNestedManyWithoutProjectInput
    loreNodes?: LoreNodeCreateNestedManyWithoutProjectInput
    nodeRelations?: NodeRelationCreateNestedManyWithoutProjectInput
    characters?: CharacterCreateNestedManyWithoutProjectInput
    items?: ItemCreateNestedManyWithoutProjectInput
    powerSystems?: PowerSystemCreateNestedManyWithoutProjectInput
    locations?: LocationCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutMonstersInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    genre?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chapters?: ChapterUncheckedCreateNestedManyWithoutProjectInput
    lore?: LoreUncheckedCreateNestedManyWithoutProjectInput
    loreNodes?: LoreNodeUncheckedCreateNestedManyWithoutProjectInput
    nodeRelations?: NodeRelationUncheckedCreateNestedManyWithoutProjectInput
    characters?: CharacterUncheckedCreateNestedManyWithoutProjectInput
    items?: ItemUncheckedCreateNestedManyWithoutProjectInput
    powerSystems?: PowerSystemUncheckedCreateNestedManyWithoutProjectInput
    locations?: LocationUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutMonstersInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutMonstersInput, ProjectUncheckedCreateWithoutMonstersInput>
  }

  export type ProjectUpsertWithoutMonstersInput = {
    update: XOR<ProjectUpdateWithoutMonstersInput, ProjectUncheckedUpdateWithoutMonstersInput>
    create: XOR<ProjectCreateWithoutMonstersInput, ProjectUncheckedCreateWithoutMonstersInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutMonstersInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutMonstersInput, ProjectUncheckedUpdateWithoutMonstersInput>
  }

  export type ProjectUpdateWithoutMonstersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    chapters?: ChapterUpdateManyWithoutProjectNestedInput
    lore?: LoreUpdateManyWithoutProjectNestedInput
    loreNodes?: LoreNodeUpdateManyWithoutProjectNestedInput
    nodeRelations?: NodeRelationUpdateManyWithoutProjectNestedInput
    characters?: CharacterUpdateManyWithoutProjectNestedInput
    items?: ItemUpdateManyWithoutProjectNestedInput
    powerSystems?: PowerSystemUpdateManyWithoutProjectNestedInput
    locations?: LocationUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutMonstersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapters?: ChapterUncheckedUpdateManyWithoutProjectNestedInput
    lore?: LoreUncheckedUpdateManyWithoutProjectNestedInput
    loreNodes?: LoreNodeUncheckedUpdateManyWithoutProjectNestedInput
    nodeRelations?: NodeRelationUncheckedUpdateManyWithoutProjectNestedInput
    characters?: CharacterUncheckedUpdateManyWithoutProjectNestedInput
    items?: ItemUncheckedUpdateManyWithoutProjectNestedInput
    powerSystems?: PowerSystemUncheckedUpdateManyWithoutProjectNestedInput
    locations?: LocationUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutItemsInput = {
    id?: string
    name: string
    description?: string | null
    genre?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProjectsInput
    chapters?: ChapterCreateNestedManyWithoutProjectInput
    lore?: LoreCreateNestedManyWithoutProjectInput
    loreNodes?: LoreNodeCreateNestedManyWithoutProjectInput
    nodeRelations?: NodeRelationCreateNestedManyWithoutProjectInput
    characters?: CharacterCreateNestedManyWithoutProjectInput
    monsters?: MonsterCreateNestedManyWithoutProjectInput
    powerSystems?: PowerSystemCreateNestedManyWithoutProjectInput
    locations?: LocationCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutItemsInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    genre?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chapters?: ChapterUncheckedCreateNestedManyWithoutProjectInput
    lore?: LoreUncheckedCreateNestedManyWithoutProjectInput
    loreNodes?: LoreNodeUncheckedCreateNestedManyWithoutProjectInput
    nodeRelations?: NodeRelationUncheckedCreateNestedManyWithoutProjectInput
    characters?: CharacterUncheckedCreateNestedManyWithoutProjectInput
    monsters?: MonsterUncheckedCreateNestedManyWithoutProjectInput
    powerSystems?: PowerSystemUncheckedCreateNestedManyWithoutProjectInput
    locations?: LocationUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutItemsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutItemsInput, ProjectUncheckedCreateWithoutItemsInput>
  }

  export type ProjectUpsertWithoutItemsInput = {
    update: XOR<ProjectUpdateWithoutItemsInput, ProjectUncheckedUpdateWithoutItemsInput>
    create: XOR<ProjectCreateWithoutItemsInput, ProjectUncheckedCreateWithoutItemsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutItemsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutItemsInput, ProjectUncheckedUpdateWithoutItemsInput>
  }

  export type ProjectUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    chapters?: ChapterUpdateManyWithoutProjectNestedInput
    lore?: LoreUpdateManyWithoutProjectNestedInput
    loreNodes?: LoreNodeUpdateManyWithoutProjectNestedInput
    nodeRelations?: NodeRelationUpdateManyWithoutProjectNestedInput
    characters?: CharacterUpdateManyWithoutProjectNestedInput
    monsters?: MonsterUpdateManyWithoutProjectNestedInput
    powerSystems?: PowerSystemUpdateManyWithoutProjectNestedInput
    locations?: LocationUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapters?: ChapterUncheckedUpdateManyWithoutProjectNestedInput
    lore?: LoreUncheckedUpdateManyWithoutProjectNestedInput
    loreNodes?: LoreNodeUncheckedUpdateManyWithoutProjectNestedInput
    nodeRelations?: NodeRelationUncheckedUpdateManyWithoutProjectNestedInput
    characters?: CharacterUncheckedUpdateManyWithoutProjectNestedInput
    monsters?: MonsterUncheckedUpdateManyWithoutProjectNestedInput
    powerSystems?: PowerSystemUncheckedUpdateManyWithoutProjectNestedInput
    locations?: LocationUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutPowerSystemsInput = {
    id?: string
    name: string
    description?: string | null
    genre?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProjectsInput
    chapters?: ChapterCreateNestedManyWithoutProjectInput
    lore?: LoreCreateNestedManyWithoutProjectInput
    loreNodes?: LoreNodeCreateNestedManyWithoutProjectInput
    nodeRelations?: NodeRelationCreateNestedManyWithoutProjectInput
    characters?: CharacterCreateNestedManyWithoutProjectInput
    monsters?: MonsterCreateNestedManyWithoutProjectInput
    items?: ItemCreateNestedManyWithoutProjectInput
    locations?: LocationCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutPowerSystemsInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    genre?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chapters?: ChapterUncheckedCreateNestedManyWithoutProjectInput
    lore?: LoreUncheckedCreateNestedManyWithoutProjectInput
    loreNodes?: LoreNodeUncheckedCreateNestedManyWithoutProjectInput
    nodeRelations?: NodeRelationUncheckedCreateNestedManyWithoutProjectInput
    characters?: CharacterUncheckedCreateNestedManyWithoutProjectInput
    monsters?: MonsterUncheckedCreateNestedManyWithoutProjectInput
    items?: ItemUncheckedCreateNestedManyWithoutProjectInput
    locations?: LocationUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutPowerSystemsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutPowerSystemsInput, ProjectUncheckedCreateWithoutPowerSystemsInput>
  }

  export type ProjectUpsertWithoutPowerSystemsInput = {
    update: XOR<ProjectUpdateWithoutPowerSystemsInput, ProjectUncheckedUpdateWithoutPowerSystemsInput>
    create: XOR<ProjectCreateWithoutPowerSystemsInput, ProjectUncheckedCreateWithoutPowerSystemsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutPowerSystemsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutPowerSystemsInput, ProjectUncheckedUpdateWithoutPowerSystemsInput>
  }

  export type ProjectUpdateWithoutPowerSystemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    chapters?: ChapterUpdateManyWithoutProjectNestedInput
    lore?: LoreUpdateManyWithoutProjectNestedInput
    loreNodes?: LoreNodeUpdateManyWithoutProjectNestedInput
    nodeRelations?: NodeRelationUpdateManyWithoutProjectNestedInput
    characters?: CharacterUpdateManyWithoutProjectNestedInput
    monsters?: MonsterUpdateManyWithoutProjectNestedInput
    items?: ItemUpdateManyWithoutProjectNestedInput
    locations?: LocationUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutPowerSystemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapters?: ChapterUncheckedUpdateManyWithoutProjectNestedInput
    lore?: LoreUncheckedUpdateManyWithoutProjectNestedInput
    loreNodes?: LoreNodeUncheckedUpdateManyWithoutProjectNestedInput
    nodeRelations?: NodeRelationUncheckedUpdateManyWithoutProjectNestedInput
    characters?: CharacterUncheckedUpdateManyWithoutProjectNestedInput
    monsters?: MonsterUncheckedUpdateManyWithoutProjectNestedInput
    items?: ItemUncheckedUpdateManyWithoutProjectNestedInput
    locations?: LocationUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutLocationsInput = {
    id?: string
    name: string
    description?: string | null
    genre?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProjectsInput
    chapters?: ChapterCreateNestedManyWithoutProjectInput
    lore?: LoreCreateNestedManyWithoutProjectInput
    loreNodes?: LoreNodeCreateNestedManyWithoutProjectInput
    nodeRelations?: NodeRelationCreateNestedManyWithoutProjectInput
    characters?: CharacterCreateNestedManyWithoutProjectInput
    monsters?: MonsterCreateNestedManyWithoutProjectInput
    items?: ItemCreateNestedManyWithoutProjectInput
    powerSystems?: PowerSystemCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutLocationsInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    genre?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chapters?: ChapterUncheckedCreateNestedManyWithoutProjectInput
    lore?: LoreUncheckedCreateNestedManyWithoutProjectInput
    loreNodes?: LoreNodeUncheckedCreateNestedManyWithoutProjectInput
    nodeRelations?: NodeRelationUncheckedCreateNestedManyWithoutProjectInput
    characters?: CharacterUncheckedCreateNestedManyWithoutProjectInput
    monsters?: MonsterUncheckedCreateNestedManyWithoutProjectInput
    items?: ItemUncheckedCreateNestedManyWithoutProjectInput
    powerSystems?: PowerSystemUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutLocationsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutLocationsInput, ProjectUncheckedCreateWithoutLocationsInput>
  }

  export type ProjectUpsertWithoutLocationsInput = {
    update: XOR<ProjectUpdateWithoutLocationsInput, ProjectUncheckedUpdateWithoutLocationsInput>
    create: XOR<ProjectCreateWithoutLocationsInput, ProjectUncheckedCreateWithoutLocationsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutLocationsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutLocationsInput, ProjectUncheckedUpdateWithoutLocationsInput>
  }

  export type ProjectUpdateWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    chapters?: ChapterUpdateManyWithoutProjectNestedInput
    lore?: LoreUpdateManyWithoutProjectNestedInput
    loreNodes?: LoreNodeUpdateManyWithoutProjectNestedInput
    nodeRelations?: NodeRelationUpdateManyWithoutProjectNestedInput
    characters?: CharacterUpdateManyWithoutProjectNestedInput
    monsters?: MonsterUpdateManyWithoutProjectNestedInput
    items?: ItemUpdateManyWithoutProjectNestedInput
    powerSystems?: PowerSystemUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapters?: ChapterUncheckedUpdateManyWithoutProjectNestedInput
    lore?: LoreUncheckedUpdateManyWithoutProjectNestedInput
    loreNodes?: LoreNodeUncheckedUpdateManyWithoutProjectNestedInput
    nodeRelations?: NodeRelationUncheckedUpdateManyWithoutProjectNestedInput
    characters?: CharacterUncheckedUpdateManyWithoutProjectNestedInput
    monsters?: MonsterUncheckedUpdateManyWithoutProjectNestedInput
    items?: ItemUncheckedUpdateManyWithoutProjectNestedInput
    powerSystems?: PowerSystemUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type ProjectCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    genre?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapters?: ChapterUpdateManyWithoutProjectNestedInput
    lore?: LoreUpdateManyWithoutProjectNestedInput
    loreNodes?: LoreNodeUpdateManyWithoutProjectNestedInput
    nodeRelations?: NodeRelationUpdateManyWithoutProjectNestedInput
    characters?: CharacterUpdateManyWithoutProjectNestedInput
    monsters?: MonsterUpdateManyWithoutProjectNestedInput
    items?: ItemUpdateManyWithoutProjectNestedInput
    powerSystems?: PowerSystemUpdateManyWithoutProjectNestedInput
    locations?: LocationUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapters?: ChapterUncheckedUpdateManyWithoutProjectNestedInput
    lore?: LoreUncheckedUpdateManyWithoutProjectNestedInput
    loreNodes?: LoreNodeUncheckedUpdateManyWithoutProjectNestedInput
    nodeRelations?: NodeRelationUncheckedUpdateManyWithoutProjectNestedInput
    characters?: CharacterUncheckedUpdateManyWithoutProjectNestedInput
    monsters?: MonsterUncheckedUpdateManyWithoutProjectNestedInput
    items?: ItemUncheckedUpdateManyWithoutProjectNestedInput
    powerSystems?: PowerSystemUncheckedUpdateManyWithoutProjectNestedInput
    locations?: LocationUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapterCreateManyProjectInput = {
    id?: string
    order: number
    title?: string | null
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LoreCreateManyProjectInput = {
    id?: string
    type: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LoreNodeCreateManyProjectInput = {
    id?: string
    type: string
    name: string
    content?: string | null
    position: number
    color?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NodeRelationCreateManyProjectInput = {
    id?: string
    sourceNodeId: string
    targetNodeId: string
    createdAt?: Date | string
  }

  export type CharacterCreateManyProjectInput = {
    id?: string
    name: string
    archetype?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonsterCreateManyProjectInput = {
    id?: string
    name: string
    habitat?: string | null
    abilities?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemCreateManyProjectInput = {
    id?: string
    name: string
    owner?: string | null
    properties?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PowerSystemCreateManyProjectInput = {
    id?: string
    name: string
    rules?: string | null
    channelers?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationCreateManyProjectInput = {
    id?: string
    name: string
    climate?: string | null
    inhabitants?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChapterUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapterUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapterUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoreUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoreUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoreUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoreNodeUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    position?: FloatFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outgoingRelations?: NodeRelationUpdateManyWithoutSourceNodeNestedInput
    incomingRelations?: NodeRelationUpdateManyWithoutTargetNodeNestedInput
  }

  export type LoreNodeUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    position?: FloatFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outgoingRelations?: NodeRelationUncheckedUpdateManyWithoutSourceNodeNestedInput
    incomingRelations?: NodeRelationUncheckedUpdateManyWithoutTargetNodeNestedInput
  }

  export type LoreNodeUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    position?: FloatFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeRelationUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceNode?: LoreNodeUpdateOneRequiredWithoutOutgoingRelationsNestedInput
    targetNode?: LoreNodeUpdateOneRequiredWithoutIncomingRelationsNestedInput
  }

  export type NodeRelationUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceNodeId?: StringFieldUpdateOperationsInput | string
    targetNodeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeRelationUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceNodeId?: StringFieldUpdateOperationsInput | string
    targetNodeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacterUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    archetype?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacterUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    archetype?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacterUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    archetype?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonsterUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    abilities?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonsterUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    abilities?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonsterUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    abilities?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    properties?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    properties?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    properties?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PowerSystemUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    channelers?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PowerSystemUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    channelers?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PowerSystemUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    channelers?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    climate?: NullableStringFieldUpdateOperationsInput | string | null
    inhabitants?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    climate?: NullableStringFieldUpdateOperationsInput | string | null
    inhabitants?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    climate?: NullableStringFieldUpdateOperationsInput | string | null
    inhabitants?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeRelationCreateManySourceNodeInput = {
    id?: string
    projectId: string
    targetNodeId: string
    createdAt?: Date | string
  }

  export type NodeRelationCreateManyTargetNodeInput = {
    id?: string
    projectId: string
    sourceNodeId: string
    createdAt?: Date | string
  }

  export type NodeRelationUpdateWithoutSourceNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutNodeRelationsNestedInput
    targetNode?: LoreNodeUpdateOneRequiredWithoutIncomingRelationsNestedInput
  }

  export type NodeRelationUncheckedUpdateWithoutSourceNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    targetNodeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeRelationUncheckedUpdateManyWithoutSourceNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    targetNodeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeRelationUpdateWithoutTargetNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutNodeRelationsNestedInput
    sourceNode?: LoreNodeUpdateOneRequiredWithoutOutgoingRelationsNestedInput
  }

  export type NodeRelationUncheckedUpdateWithoutTargetNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    sourceNodeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeRelationUncheckedUpdateManyWithoutTargetNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    sourceNodeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
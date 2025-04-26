
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model driver
 * 
 */
export type driver = $Result.DefaultSelection<Prisma.$driverPayload>
/**
 * Model rides
 * 
 */
export type rides = $Result.DefaultSelection<Prisma.$ridesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const VehicleType: {
  Car: 'Car',
  Motorcycle: 'Motorcycle',
  CNG: 'CNG'
};

export type VehicleType = (typeof VehicleType)[keyof typeof VehicleType]

}

export type VehicleType = $Enums.VehicleType

export const VehicleType: typeof $Enums.VehicleType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.driver`: Exposes CRUD operations for the **driver** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drivers
    * const drivers = await prisma.driver.findMany()
    * ```
    */
  get driver(): Prisma.driverDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rides`: Exposes CRUD operations for the **rides** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rides
    * const rides = await prisma.rides.findMany()
    * ```
    */
  get rides(): Prisma.ridesDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    user: 'user',
    driver: 'driver',
    rides: 'rides'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "driver" | "rides"
      txIsolationLevel: never
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.userFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.userAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      driver: {
        payload: Prisma.$driverPayload<ExtArgs>
        fields: Prisma.driverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.driverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.driverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driverPayload>
          }
          findFirst: {
            args: Prisma.driverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.driverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driverPayload>
          }
          findMany: {
            args: Prisma.driverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driverPayload>[]
          }
          create: {
            args: Prisma.driverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driverPayload>
          }
          createMany: {
            args: Prisma.driverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.driverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driverPayload>
          }
          update: {
            args: Prisma.driverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driverPayload>
          }
          deleteMany: {
            args: Prisma.driverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.driverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.driverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driverPayload>
          }
          aggregate: {
            args: Prisma.DriverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDriver>
          }
          groupBy: {
            args: Prisma.driverGroupByArgs<ExtArgs>
            result: $Utils.Optional<DriverGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.driverFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.driverAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.driverCountArgs<ExtArgs>
            result: $Utils.Optional<DriverCountAggregateOutputType> | number
          }
        }
      }
      rides: {
        payload: Prisma.$ridesPayload<ExtArgs>
        fields: Prisma.ridesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ridesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ridesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ridesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ridesPayload>
          }
          findFirst: {
            args: Prisma.ridesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ridesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ridesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ridesPayload>
          }
          findMany: {
            args: Prisma.ridesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ridesPayload>[]
          }
          create: {
            args: Prisma.ridesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ridesPayload>
          }
          createMany: {
            args: Prisma.ridesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ridesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ridesPayload>
          }
          update: {
            args: Prisma.ridesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ridesPayload>
          }
          deleteMany: {
            args: Prisma.ridesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ridesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ridesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ridesPayload>
          }
          aggregate: {
            args: Prisma.RidesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRides>
          }
          groupBy: {
            args: Prisma.ridesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RidesGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ridesFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ridesAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ridesCountArgs<ExtArgs>
            result: $Utils.Optional<RidesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    }
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
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    driver?: driverOmit
    rides?: ridesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    rides: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rides?: boolean | UserCountOutputTypeCountRidesArgs
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
  export type UserCountOutputTypeCountRidesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ridesWhereInput
  }


  /**
   * Count Type DriverCountOutputType
   */

  export type DriverCountOutputType = {
    rides: number
  }

  export type DriverCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rides?: boolean | DriverCountOutputTypeCountRidesArgs
  }

  // Custom InputTypes
  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverCountOutputType
     */
    select?: DriverCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeCountRidesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ridesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    ratings: number | null
    totalRides: number | null
  }

  export type UserSumAggregateOutputType = {
    ratings: number | null
    totalRides: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone_number: string | null
    email: string | null
    notificationToken: string | null
    ratings: number | null
    totalRides: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone_number: string | null
    email: string | null
    notificationToken: string | null
    ratings: number | null
    totalRides: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    phone_number: number
    email: number
    notificationToken: number
    ratings: number
    totalRides: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    ratings?: true
    totalRides?: true
  }

  export type UserSumAggregateInputType = {
    ratings?: true
    totalRides?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    phone_number?: true
    email?: true
    notificationToken?: true
    ratings?: true
    totalRides?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    phone_number?: true
    email?: true
    notificationToken?: true
    ratings?: true
    totalRides?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    phone_number?: true
    email?: true
    notificationToken?: true
    ratings?: true
    totalRides?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    phone_number: string
    email: string | null
    notificationToken: string | null
    ratings: number
    totalRides: number
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
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


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone_number?: boolean
    email?: boolean
    notificationToken?: boolean
    ratings?: boolean
    totalRides?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rides?: boolean | user$ridesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    phone_number?: boolean
    email?: boolean
    notificationToken?: boolean
    ratings?: boolean
    totalRides?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone_number" | "email" | "notificationToken" | "ratings" | "totalRides" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rides?: boolean | user$ridesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      rides: Prisma.$ridesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      phone_number: string
      email: string | null
      notificationToken: string | null
      ratings: number
      totalRides: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {userFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: userFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {userAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: userAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
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
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rides<T extends user$ridesArgs<ExtArgs> = {}>(args?: Subset<T, user$ridesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ridesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly name: FieldRef<"user", 'String'>
    readonly phone_number: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly notificationToken: FieldRef<"user", 'String'>
    readonly ratings: FieldRef<"user", 'Float'>
    readonly totalRides: FieldRef<"user", 'Float'>
    readonly createdAt: FieldRef<"user", 'DateTime'>
    readonly updatedAt: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user findRaw
   */
  export type userFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * user aggregateRaw
   */
  export type userAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * user.rides
   */
  export type user$ridesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rides
     */
    select?: ridesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rides
     */
    omit?: ridesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ridesInclude<ExtArgs> | null
    where?: ridesWhereInput
    orderBy?: ridesOrderByWithRelationInput | ridesOrderByWithRelationInput[]
    cursor?: ridesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RidesScalarFieldEnum | RidesScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model driver
   */

  export type AggregateDriver = {
    _count: DriverCountAggregateOutputType | null
    _avg: DriverAvgAggregateOutputType | null
    _sum: DriverSumAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  export type DriverAvgAggregateOutputType = {
    ratings: number | null
    totalEarning: number | null
    totalRides: number | null
    pendingRides: number | null
    cancelRides: number | null
  }

  export type DriverSumAggregateOutputType = {
    ratings: number | null
    totalEarning: number | null
    totalRides: number | null
    pendingRides: number | null
    cancelRides: number | null
  }

  export type DriverMinAggregateOutputType = {
    id: string | null
    name: string | null
    country: string | null
    phone_number: string | null
    email: string | null
    vehicle_type: $Enums.VehicleType | null
    registration_number: string | null
    registration_date: string | null
    driving_license: string | null
    vehicle_color: string | null
    rate: string | null
    notificationToken: string | null
    ratings: number | null
    totalEarning: number | null
    totalRides: number | null
    pendingRides: number | null
    cancelRides: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DriverMaxAggregateOutputType = {
    id: string | null
    name: string | null
    country: string | null
    phone_number: string | null
    email: string | null
    vehicle_type: $Enums.VehicleType | null
    registration_number: string | null
    registration_date: string | null
    driving_license: string | null
    vehicle_color: string | null
    rate: string | null
    notificationToken: string | null
    ratings: number | null
    totalEarning: number | null
    totalRides: number | null
    pendingRides: number | null
    cancelRides: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DriverCountAggregateOutputType = {
    id: number
    name: number
    country: number
    phone_number: number
    email: number
    vehicle_type: number
    registration_number: number
    registration_date: number
    driving_license: number
    vehicle_color: number
    rate: number
    notificationToken: number
    ratings: number
    totalEarning: number
    totalRides: number
    pendingRides: number
    cancelRides: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DriverAvgAggregateInputType = {
    ratings?: true
    totalEarning?: true
    totalRides?: true
    pendingRides?: true
    cancelRides?: true
  }

  export type DriverSumAggregateInputType = {
    ratings?: true
    totalEarning?: true
    totalRides?: true
    pendingRides?: true
    cancelRides?: true
  }

  export type DriverMinAggregateInputType = {
    id?: true
    name?: true
    country?: true
    phone_number?: true
    email?: true
    vehicle_type?: true
    registration_number?: true
    registration_date?: true
    driving_license?: true
    vehicle_color?: true
    rate?: true
    notificationToken?: true
    ratings?: true
    totalEarning?: true
    totalRides?: true
    pendingRides?: true
    cancelRides?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DriverMaxAggregateInputType = {
    id?: true
    name?: true
    country?: true
    phone_number?: true
    email?: true
    vehicle_type?: true
    registration_number?: true
    registration_date?: true
    driving_license?: true
    vehicle_color?: true
    rate?: true
    notificationToken?: true
    ratings?: true
    totalEarning?: true
    totalRides?: true
    pendingRides?: true
    cancelRides?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DriverCountAggregateInputType = {
    id?: true
    name?: true
    country?: true
    phone_number?: true
    email?: true
    vehicle_type?: true
    registration_number?: true
    registration_date?: true
    driving_license?: true
    vehicle_color?: true
    rate?: true
    notificationToken?: true
    ratings?: true
    totalEarning?: true
    totalRides?: true
    pendingRides?: true
    cancelRides?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DriverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which driver to aggregate.
     */
    where?: driverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drivers to fetch.
     */
    orderBy?: driverOrderByWithRelationInput | driverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: driverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned drivers
    **/
    _count?: true | DriverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DriverAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DriverSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DriverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DriverMaxAggregateInputType
  }

  export type GetDriverAggregateType<T extends DriverAggregateArgs> = {
        [P in keyof T & keyof AggregateDriver]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDriver[P]>
      : GetScalarType<T[P], AggregateDriver[P]>
  }




  export type driverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: driverWhereInput
    orderBy?: driverOrderByWithAggregationInput | driverOrderByWithAggregationInput[]
    by: DriverScalarFieldEnum[] | DriverScalarFieldEnum
    having?: driverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DriverCountAggregateInputType | true
    _avg?: DriverAvgAggregateInputType
    _sum?: DriverSumAggregateInputType
    _min?: DriverMinAggregateInputType
    _max?: DriverMaxAggregateInputType
  }

  export type DriverGroupByOutputType = {
    id: string
    name: string
    country: string
    phone_number: string
    email: string
    vehicle_type: $Enums.VehicleType
    registration_number: string
    registration_date: string
    driving_license: string
    vehicle_color: string | null
    rate: string
    notificationToken: string | null
    ratings: number
    totalEarning: number
    totalRides: number
    pendingRides: number
    cancelRides: number
    status: string
    createdAt: Date
    updatedAt: Date
    _count: DriverCountAggregateOutputType | null
    _avg: DriverAvgAggregateOutputType | null
    _sum: DriverSumAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  type GetDriverGroupByPayload<T extends driverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DriverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DriverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DriverGroupByOutputType[P]>
            : GetScalarType<T[P], DriverGroupByOutputType[P]>
        }
      >
    >


  export type driverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    phone_number?: boolean
    email?: boolean
    vehicle_type?: boolean
    registration_number?: boolean
    registration_date?: boolean
    driving_license?: boolean
    vehicle_color?: boolean
    rate?: boolean
    notificationToken?: boolean
    ratings?: boolean
    totalEarning?: boolean
    totalRides?: boolean
    pendingRides?: boolean
    cancelRides?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rides?: boolean | driver$ridesArgs<ExtArgs>
    _count?: boolean | DriverCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driver"]>



  export type driverSelectScalar = {
    id?: boolean
    name?: boolean
    country?: boolean
    phone_number?: boolean
    email?: boolean
    vehicle_type?: boolean
    registration_number?: boolean
    registration_date?: boolean
    driving_license?: boolean
    vehicle_color?: boolean
    rate?: boolean
    notificationToken?: boolean
    ratings?: boolean
    totalEarning?: boolean
    totalRides?: boolean
    pendingRides?: boolean
    cancelRides?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type driverOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "country" | "phone_number" | "email" | "vehicle_type" | "registration_number" | "registration_date" | "driving_license" | "vehicle_color" | "rate" | "notificationToken" | "ratings" | "totalEarning" | "totalRides" | "pendingRides" | "cancelRides" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["driver"]>
  export type driverInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rides?: boolean | driver$ridesArgs<ExtArgs>
    _count?: boolean | DriverCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $driverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "driver"
    objects: {
      rides: Prisma.$ridesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      country: string
      phone_number: string
      email: string
      vehicle_type: $Enums.VehicleType
      registration_number: string
      registration_date: string
      driving_license: string
      vehicle_color: string | null
      rate: string
      notificationToken: string | null
      ratings: number
      totalEarning: number
      totalRides: number
      pendingRides: number
      cancelRides: number
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["driver"]>
    composites: {}
  }

  type driverGetPayload<S extends boolean | null | undefined | driverDefaultArgs> = $Result.GetResult<Prisma.$driverPayload, S>

  type driverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<driverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DriverCountAggregateInputType | true
    }

  export interface driverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['driver'], meta: { name: 'driver' } }
    /**
     * Find zero or one Driver that matches the filter.
     * @param {driverFindUniqueArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends driverFindUniqueArgs>(args: SelectSubset<T, driverFindUniqueArgs<ExtArgs>>): Prisma__driverClient<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Driver that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {driverFindUniqueOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends driverFindUniqueOrThrowArgs>(args: SelectSubset<T, driverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__driverClient<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Driver that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {driverFindFirstArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends driverFindFirstArgs>(args?: SelectSubset<T, driverFindFirstArgs<ExtArgs>>): Prisma__driverClient<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Driver that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {driverFindFirstOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends driverFindFirstOrThrowArgs>(args?: SelectSubset<T, driverFindFirstOrThrowArgs<ExtArgs>>): Prisma__driverClient<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {driverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drivers
     * const drivers = await prisma.driver.findMany()
     * 
     * // Get first 10 Drivers
     * const drivers = await prisma.driver.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const driverWithIdOnly = await prisma.driver.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends driverFindManyArgs>(args?: SelectSubset<T, driverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Driver.
     * @param {driverCreateArgs} args - Arguments to create a Driver.
     * @example
     * // Create one Driver
     * const Driver = await prisma.driver.create({
     *   data: {
     *     // ... data to create a Driver
     *   }
     * })
     * 
     */
    create<T extends driverCreateArgs>(args: SelectSubset<T, driverCreateArgs<ExtArgs>>): Prisma__driverClient<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drivers.
     * @param {driverCreateManyArgs} args - Arguments to create many Drivers.
     * @example
     * // Create many Drivers
     * const driver = await prisma.driver.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends driverCreateManyArgs>(args?: SelectSubset<T, driverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Driver.
     * @param {driverDeleteArgs} args - Arguments to delete one Driver.
     * @example
     * // Delete one Driver
     * const Driver = await prisma.driver.delete({
     *   where: {
     *     // ... filter to delete one Driver
     *   }
     * })
     * 
     */
    delete<T extends driverDeleteArgs>(args: SelectSubset<T, driverDeleteArgs<ExtArgs>>): Prisma__driverClient<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Driver.
     * @param {driverUpdateArgs} args - Arguments to update one Driver.
     * @example
     * // Update one Driver
     * const driver = await prisma.driver.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends driverUpdateArgs>(args: SelectSubset<T, driverUpdateArgs<ExtArgs>>): Prisma__driverClient<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drivers.
     * @param {driverDeleteManyArgs} args - Arguments to filter Drivers to delete.
     * @example
     * // Delete a few Drivers
     * const { count } = await prisma.driver.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends driverDeleteManyArgs>(args?: SelectSubset<T, driverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {driverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drivers
     * const driver = await prisma.driver.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends driverUpdateManyArgs>(args: SelectSubset<T, driverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Driver.
     * @param {driverUpsertArgs} args - Arguments to update or create a Driver.
     * @example
     * // Update or create a Driver
     * const driver = await prisma.driver.upsert({
     *   create: {
     *     // ... data to create a Driver
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Driver we want to update
     *   }
     * })
     */
    upsert<T extends driverUpsertArgs>(args: SelectSubset<T, driverUpsertArgs<ExtArgs>>): Prisma__driverClient<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drivers that matches the filter.
     * @param {driverFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const driver = await prisma.driver.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: driverFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Driver.
     * @param {driverAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const driver = await prisma.driver.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: driverAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {driverCountArgs} args - Arguments to filter Drivers to count.
     * @example
     * // Count the number of Drivers
     * const count = await prisma.driver.count({
     *   where: {
     *     // ... the filter for the Drivers we want to count
     *   }
     * })
    **/
    count<T extends driverCountArgs>(
      args?: Subset<T, driverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DriverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DriverAggregateArgs>(args: Subset<T, DriverAggregateArgs>): Prisma.PrismaPromise<GetDriverAggregateType<T>>

    /**
     * Group by Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {driverGroupByArgs} args - Group by arguments.
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
      T extends driverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: driverGroupByArgs['orderBy'] }
        : { orderBy?: driverGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, driverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDriverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the driver model
   */
  readonly fields: driverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for driver.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__driverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rides<T extends driver$ridesArgs<ExtArgs> = {}>(args?: Subset<T, driver$ridesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ridesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the driver model
   */
  interface driverFieldRefs {
    readonly id: FieldRef<"driver", 'String'>
    readonly name: FieldRef<"driver", 'String'>
    readonly country: FieldRef<"driver", 'String'>
    readonly phone_number: FieldRef<"driver", 'String'>
    readonly email: FieldRef<"driver", 'String'>
    readonly vehicle_type: FieldRef<"driver", 'VehicleType'>
    readonly registration_number: FieldRef<"driver", 'String'>
    readonly registration_date: FieldRef<"driver", 'String'>
    readonly driving_license: FieldRef<"driver", 'String'>
    readonly vehicle_color: FieldRef<"driver", 'String'>
    readonly rate: FieldRef<"driver", 'String'>
    readonly notificationToken: FieldRef<"driver", 'String'>
    readonly ratings: FieldRef<"driver", 'Float'>
    readonly totalEarning: FieldRef<"driver", 'Float'>
    readonly totalRides: FieldRef<"driver", 'Float'>
    readonly pendingRides: FieldRef<"driver", 'Float'>
    readonly cancelRides: FieldRef<"driver", 'Float'>
    readonly status: FieldRef<"driver", 'String'>
    readonly createdAt: FieldRef<"driver", 'DateTime'>
    readonly updatedAt: FieldRef<"driver", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * driver findUnique
   */
  export type driverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
    /**
     * Filter, which driver to fetch.
     */
    where: driverWhereUniqueInput
  }

  /**
   * driver findUniqueOrThrow
   */
  export type driverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
    /**
     * Filter, which driver to fetch.
     */
    where: driverWhereUniqueInput
  }

  /**
   * driver findFirst
   */
  export type driverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
    /**
     * Filter, which driver to fetch.
     */
    where?: driverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drivers to fetch.
     */
    orderBy?: driverOrderByWithRelationInput | driverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for drivers.
     */
    cursor?: driverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * driver findFirstOrThrow
   */
  export type driverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
    /**
     * Filter, which driver to fetch.
     */
    where?: driverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drivers to fetch.
     */
    orderBy?: driverOrderByWithRelationInput | driverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for drivers.
     */
    cursor?: driverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * driver findMany
   */
  export type driverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
    /**
     * Filter, which drivers to fetch.
     */
    where?: driverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drivers to fetch.
     */
    orderBy?: driverOrderByWithRelationInput | driverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing drivers.
     */
    cursor?: driverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drivers.
     */
    skip?: number
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * driver create
   */
  export type driverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
    /**
     * The data needed to create a driver.
     */
    data: XOR<driverCreateInput, driverUncheckedCreateInput>
  }

  /**
   * driver createMany
   */
  export type driverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many drivers.
     */
    data: driverCreateManyInput | driverCreateManyInput[]
  }

  /**
   * driver update
   */
  export type driverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
    /**
     * The data needed to update a driver.
     */
    data: XOR<driverUpdateInput, driverUncheckedUpdateInput>
    /**
     * Choose, which driver to update.
     */
    where: driverWhereUniqueInput
  }

  /**
   * driver updateMany
   */
  export type driverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update drivers.
     */
    data: XOR<driverUpdateManyMutationInput, driverUncheckedUpdateManyInput>
    /**
     * Filter which drivers to update
     */
    where?: driverWhereInput
    /**
     * Limit how many drivers to update.
     */
    limit?: number
  }

  /**
   * driver upsert
   */
  export type driverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
    /**
     * The filter to search for the driver to update in case it exists.
     */
    where: driverWhereUniqueInput
    /**
     * In case the driver found by the `where` argument doesn't exist, create a new driver with this data.
     */
    create: XOR<driverCreateInput, driverUncheckedCreateInput>
    /**
     * In case the driver was found with the provided `where` argument, update it with this data.
     */
    update: XOR<driverUpdateInput, driverUncheckedUpdateInput>
  }

  /**
   * driver delete
   */
  export type driverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
    /**
     * Filter which driver to delete.
     */
    where: driverWhereUniqueInput
  }

  /**
   * driver deleteMany
   */
  export type driverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which drivers to delete
     */
    where?: driverWhereInput
    /**
     * Limit how many drivers to delete.
     */
    limit?: number
  }

  /**
   * driver findRaw
   */
  export type driverFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * driver aggregateRaw
   */
  export type driverAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * driver.rides
   */
  export type driver$ridesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rides
     */
    select?: ridesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rides
     */
    omit?: ridesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ridesInclude<ExtArgs> | null
    where?: ridesWhereInput
    orderBy?: ridesOrderByWithRelationInput | ridesOrderByWithRelationInput[]
    cursor?: ridesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RidesScalarFieldEnum | RidesScalarFieldEnum[]
  }

  /**
   * driver without action
   */
  export type driverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
  }


  /**
   * Model rides
   */

  export type AggregateRides = {
    _count: RidesCountAggregateOutputType | null
    _avg: RidesAvgAggregateOutputType | null
    _sum: RidesSumAggregateOutputType | null
    _min: RidesMinAggregateOutputType | null
    _max: RidesMaxAggregateOutputType | null
  }

  export type RidesAvgAggregateOutputType = {
    charge: number | null
    rating: number | null
  }

  export type RidesSumAggregateOutputType = {
    charge: number | null
    rating: number | null
  }

  export type RidesMinAggregateOutputType = {
    id: string | null
    userId: string | null
    driverId: string | null
    charge: number | null
    currentLocationName: string | null
    destinationLocationName: string | null
    distance: string | null
    status: string | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RidesMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    driverId: string | null
    charge: number | null
    currentLocationName: string | null
    destinationLocationName: string | null
    distance: string | null
    status: string | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RidesCountAggregateOutputType = {
    id: number
    userId: number
    driverId: number
    charge: number
    currentLocationName: number
    destinationLocationName: number
    distance: number
    status: number
    rating: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RidesAvgAggregateInputType = {
    charge?: true
    rating?: true
  }

  export type RidesSumAggregateInputType = {
    charge?: true
    rating?: true
  }

  export type RidesMinAggregateInputType = {
    id?: true
    userId?: true
    driverId?: true
    charge?: true
    currentLocationName?: true
    destinationLocationName?: true
    distance?: true
    status?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RidesMaxAggregateInputType = {
    id?: true
    userId?: true
    driverId?: true
    charge?: true
    currentLocationName?: true
    destinationLocationName?: true
    distance?: true
    status?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RidesCountAggregateInputType = {
    id?: true
    userId?: true
    driverId?: true
    charge?: true
    currentLocationName?: true
    destinationLocationName?: true
    distance?: true
    status?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RidesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rides to aggregate.
     */
    where?: ridesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rides to fetch.
     */
    orderBy?: ridesOrderByWithRelationInput | ridesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ridesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rides
    **/
    _count?: true | RidesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RidesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RidesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RidesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RidesMaxAggregateInputType
  }

  export type GetRidesAggregateType<T extends RidesAggregateArgs> = {
        [P in keyof T & keyof AggregateRides]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRides[P]>
      : GetScalarType<T[P], AggregateRides[P]>
  }




  export type ridesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ridesWhereInput
    orderBy?: ridesOrderByWithAggregationInput | ridesOrderByWithAggregationInput[]
    by: RidesScalarFieldEnum[] | RidesScalarFieldEnum
    having?: ridesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RidesCountAggregateInputType | true
    _avg?: RidesAvgAggregateInputType
    _sum?: RidesSumAggregateInputType
    _min?: RidesMinAggregateInputType
    _max?: RidesMaxAggregateInputType
  }

  export type RidesGroupByOutputType = {
    id: string
    userId: string
    driverId: string
    charge: number
    currentLocationName: string
    destinationLocationName: string
    distance: string
    status: string
    rating: number | null
    createdAt: Date
    updatedAt: Date
    _count: RidesCountAggregateOutputType | null
    _avg: RidesAvgAggregateOutputType | null
    _sum: RidesSumAggregateOutputType | null
    _min: RidesMinAggregateOutputType | null
    _max: RidesMaxAggregateOutputType | null
  }

  type GetRidesGroupByPayload<T extends ridesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RidesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RidesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RidesGroupByOutputType[P]>
            : GetScalarType<T[P], RidesGroupByOutputType[P]>
        }
      >
    >


  export type ridesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    driverId?: boolean
    charge?: boolean
    currentLocationName?: boolean
    destinationLocationName?: boolean
    distance?: boolean
    status?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    driver?: boolean | driverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rides"]>



  export type ridesSelectScalar = {
    id?: boolean
    userId?: boolean
    driverId?: boolean
    charge?: boolean
    currentLocationName?: boolean
    destinationLocationName?: boolean
    distance?: boolean
    status?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ridesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "driverId" | "charge" | "currentLocationName" | "destinationLocationName" | "distance" | "status" | "rating" | "createdAt" | "updatedAt", ExtArgs["result"]["rides"]>
  export type ridesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    driver?: boolean | driverDefaultArgs<ExtArgs>
  }

  export type $ridesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rides"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      driver: Prisma.$driverPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      driverId: string
      charge: number
      currentLocationName: string
      destinationLocationName: string
      distance: string
      status: string
      rating: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rides"]>
    composites: {}
  }

  type ridesGetPayload<S extends boolean | null | undefined | ridesDefaultArgs> = $Result.GetResult<Prisma.$ridesPayload, S>

  type ridesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ridesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RidesCountAggregateInputType | true
    }

  export interface ridesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rides'], meta: { name: 'rides' } }
    /**
     * Find zero or one Rides that matches the filter.
     * @param {ridesFindUniqueArgs} args - Arguments to find a Rides
     * @example
     * // Get one Rides
     * const rides = await prisma.rides.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ridesFindUniqueArgs>(args: SelectSubset<T, ridesFindUniqueArgs<ExtArgs>>): Prisma__ridesClient<$Result.GetResult<Prisma.$ridesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rides that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ridesFindUniqueOrThrowArgs} args - Arguments to find a Rides
     * @example
     * // Get one Rides
     * const rides = await prisma.rides.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ridesFindUniqueOrThrowArgs>(args: SelectSubset<T, ridesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ridesClient<$Result.GetResult<Prisma.$ridesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rides that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ridesFindFirstArgs} args - Arguments to find a Rides
     * @example
     * // Get one Rides
     * const rides = await prisma.rides.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ridesFindFirstArgs>(args?: SelectSubset<T, ridesFindFirstArgs<ExtArgs>>): Prisma__ridesClient<$Result.GetResult<Prisma.$ridesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rides that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ridesFindFirstOrThrowArgs} args - Arguments to find a Rides
     * @example
     * // Get one Rides
     * const rides = await prisma.rides.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ridesFindFirstOrThrowArgs>(args?: SelectSubset<T, ridesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ridesClient<$Result.GetResult<Prisma.$ridesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rides that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ridesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rides
     * const rides = await prisma.rides.findMany()
     * 
     * // Get first 10 Rides
     * const rides = await prisma.rides.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ridesWithIdOnly = await prisma.rides.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ridesFindManyArgs>(args?: SelectSubset<T, ridesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ridesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rides.
     * @param {ridesCreateArgs} args - Arguments to create a Rides.
     * @example
     * // Create one Rides
     * const Rides = await prisma.rides.create({
     *   data: {
     *     // ... data to create a Rides
     *   }
     * })
     * 
     */
    create<T extends ridesCreateArgs>(args: SelectSubset<T, ridesCreateArgs<ExtArgs>>): Prisma__ridesClient<$Result.GetResult<Prisma.$ridesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rides.
     * @param {ridesCreateManyArgs} args - Arguments to create many Rides.
     * @example
     * // Create many Rides
     * const rides = await prisma.rides.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ridesCreateManyArgs>(args?: SelectSubset<T, ridesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rides.
     * @param {ridesDeleteArgs} args - Arguments to delete one Rides.
     * @example
     * // Delete one Rides
     * const Rides = await prisma.rides.delete({
     *   where: {
     *     // ... filter to delete one Rides
     *   }
     * })
     * 
     */
    delete<T extends ridesDeleteArgs>(args: SelectSubset<T, ridesDeleteArgs<ExtArgs>>): Prisma__ridesClient<$Result.GetResult<Prisma.$ridesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rides.
     * @param {ridesUpdateArgs} args - Arguments to update one Rides.
     * @example
     * // Update one Rides
     * const rides = await prisma.rides.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ridesUpdateArgs>(args: SelectSubset<T, ridesUpdateArgs<ExtArgs>>): Prisma__ridesClient<$Result.GetResult<Prisma.$ridesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rides.
     * @param {ridesDeleteManyArgs} args - Arguments to filter Rides to delete.
     * @example
     * // Delete a few Rides
     * const { count } = await prisma.rides.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ridesDeleteManyArgs>(args?: SelectSubset<T, ridesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ridesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rides
     * const rides = await prisma.rides.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ridesUpdateManyArgs>(args: SelectSubset<T, ridesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rides.
     * @param {ridesUpsertArgs} args - Arguments to update or create a Rides.
     * @example
     * // Update or create a Rides
     * const rides = await prisma.rides.upsert({
     *   create: {
     *     // ... data to create a Rides
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rides we want to update
     *   }
     * })
     */
    upsert<T extends ridesUpsertArgs>(args: SelectSubset<T, ridesUpsertArgs<ExtArgs>>): Prisma__ridesClient<$Result.GetResult<Prisma.$ridesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rides that matches the filter.
     * @param {ridesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const rides = await prisma.rides.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ridesFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Rides.
     * @param {ridesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const rides = await prisma.rides.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ridesAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Rides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ridesCountArgs} args - Arguments to filter Rides to count.
     * @example
     * // Count the number of Rides
     * const count = await prisma.rides.count({
     *   where: {
     *     // ... the filter for the Rides we want to count
     *   }
     * })
    **/
    count<T extends ridesCountArgs>(
      args?: Subset<T, ridesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RidesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RidesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RidesAggregateArgs>(args: Subset<T, RidesAggregateArgs>): Prisma.PrismaPromise<GetRidesAggregateType<T>>

    /**
     * Group by Rides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ridesGroupByArgs} args - Group by arguments.
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
      T extends ridesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ridesGroupByArgs['orderBy'] }
        : { orderBy?: ridesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ridesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRidesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rides model
   */
  readonly fields: ridesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rides.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ridesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    driver<T extends driverDefaultArgs<ExtArgs> = {}>(args?: Subset<T, driverDefaultArgs<ExtArgs>>): Prisma__driverClient<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the rides model
   */
  interface ridesFieldRefs {
    readonly id: FieldRef<"rides", 'String'>
    readonly userId: FieldRef<"rides", 'String'>
    readonly driverId: FieldRef<"rides", 'String'>
    readonly charge: FieldRef<"rides", 'Float'>
    readonly currentLocationName: FieldRef<"rides", 'String'>
    readonly destinationLocationName: FieldRef<"rides", 'String'>
    readonly distance: FieldRef<"rides", 'String'>
    readonly status: FieldRef<"rides", 'String'>
    readonly rating: FieldRef<"rides", 'Float'>
    readonly createdAt: FieldRef<"rides", 'DateTime'>
    readonly updatedAt: FieldRef<"rides", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * rides findUnique
   */
  export type ridesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rides
     */
    select?: ridesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rides
     */
    omit?: ridesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ridesInclude<ExtArgs> | null
    /**
     * Filter, which rides to fetch.
     */
    where: ridesWhereUniqueInput
  }

  /**
   * rides findUniqueOrThrow
   */
  export type ridesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rides
     */
    select?: ridesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rides
     */
    omit?: ridesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ridesInclude<ExtArgs> | null
    /**
     * Filter, which rides to fetch.
     */
    where: ridesWhereUniqueInput
  }

  /**
   * rides findFirst
   */
  export type ridesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rides
     */
    select?: ridesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rides
     */
    omit?: ridesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ridesInclude<ExtArgs> | null
    /**
     * Filter, which rides to fetch.
     */
    where?: ridesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rides to fetch.
     */
    orderBy?: ridesOrderByWithRelationInput | ridesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rides.
     */
    cursor?: ridesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rides.
     */
    distinct?: RidesScalarFieldEnum | RidesScalarFieldEnum[]
  }

  /**
   * rides findFirstOrThrow
   */
  export type ridesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rides
     */
    select?: ridesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rides
     */
    omit?: ridesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ridesInclude<ExtArgs> | null
    /**
     * Filter, which rides to fetch.
     */
    where?: ridesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rides to fetch.
     */
    orderBy?: ridesOrderByWithRelationInput | ridesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rides.
     */
    cursor?: ridesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rides.
     */
    distinct?: RidesScalarFieldEnum | RidesScalarFieldEnum[]
  }

  /**
   * rides findMany
   */
  export type ridesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rides
     */
    select?: ridesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rides
     */
    omit?: ridesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ridesInclude<ExtArgs> | null
    /**
     * Filter, which rides to fetch.
     */
    where?: ridesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rides to fetch.
     */
    orderBy?: ridesOrderByWithRelationInput | ridesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rides.
     */
    cursor?: ridesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rides.
     */
    skip?: number
    distinct?: RidesScalarFieldEnum | RidesScalarFieldEnum[]
  }

  /**
   * rides create
   */
  export type ridesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rides
     */
    select?: ridesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rides
     */
    omit?: ridesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ridesInclude<ExtArgs> | null
    /**
     * The data needed to create a rides.
     */
    data: XOR<ridesCreateInput, ridesUncheckedCreateInput>
  }

  /**
   * rides createMany
   */
  export type ridesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rides.
     */
    data: ridesCreateManyInput | ridesCreateManyInput[]
  }

  /**
   * rides update
   */
  export type ridesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rides
     */
    select?: ridesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rides
     */
    omit?: ridesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ridesInclude<ExtArgs> | null
    /**
     * The data needed to update a rides.
     */
    data: XOR<ridesUpdateInput, ridesUncheckedUpdateInput>
    /**
     * Choose, which rides to update.
     */
    where: ridesWhereUniqueInput
  }

  /**
   * rides updateMany
   */
  export type ridesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rides.
     */
    data: XOR<ridesUpdateManyMutationInput, ridesUncheckedUpdateManyInput>
    /**
     * Filter which rides to update
     */
    where?: ridesWhereInput
    /**
     * Limit how many rides to update.
     */
    limit?: number
  }

  /**
   * rides upsert
   */
  export type ridesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rides
     */
    select?: ridesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rides
     */
    omit?: ridesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ridesInclude<ExtArgs> | null
    /**
     * The filter to search for the rides to update in case it exists.
     */
    where: ridesWhereUniqueInput
    /**
     * In case the rides found by the `where` argument doesn't exist, create a new rides with this data.
     */
    create: XOR<ridesCreateInput, ridesUncheckedCreateInput>
    /**
     * In case the rides was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ridesUpdateInput, ridesUncheckedUpdateInput>
  }

  /**
   * rides delete
   */
  export type ridesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rides
     */
    select?: ridesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rides
     */
    omit?: ridesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ridesInclude<ExtArgs> | null
    /**
     * Filter which rides to delete.
     */
    where: ridesWhereUniqueInput
  }

  /**
   * rides deleteMany
   */
  export type ridesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rides to delete
     */
    where?: ridesWhereInput
    /**
     * Limit how many rides to delete.
     */
    limit?: number
  }

  /**
   * rides findRaw
   */
  export type ridesFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * rides aggregateRaw
   */
  export type ridesAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * rides without action
   */
  export type ridesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rides
     */
    select?: ridesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rides
     */
    omit?: ridesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ridesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone_number: 'phone_number',
    email: 'email',
    notificationToken: 'notificationToken',
    ratings: 'ratings',
    totalRides: 'totalRides',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DriverScalarFieldEnum: {
    id: 'id',
    name: 'name',
    country: 'country',
    phone_number: 'phone_number',
    email: 'email',
    vehicle_type: 'vehicle_type',
    registration_number: 'registration_number',
    registration_date: 'registration_date',
    driving_license: 'driving_license',
    vehicle_color: 'vehicle_color',
    rate: 'rate',
    notificationToken: 'notificationToken',
    ratings: 'ratings',
    totalEarning: 'totalEarning',
    totalRides: 'totalRides',
    pendingRides: 'pendingRides',
    cancelRides: 'cancelRides',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DriverScalarFieldEnum = (typeof DriverScalarFieldEnum)[keyof typeof DriverScalarFieldEnum]


  export const RidesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    driverId: 'driverId',
    charge: 'charge',
    currentLocationName: 'currentLocationName',
    destinationLocationName: 'destinationLocationName',
    distance: 'distance',
    status: 'status',
    rating: 'rating',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RidesScalarFieldEnum = (typeof RidesScalarFieldEnum)[keyof typeof RidesScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'VehicleType'
   */
  export type EnumVehicleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleType'>
    


  /**
   * Reference to a field of type 'VehicleType[]'
   */
  export type ListEnumVehicleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    name?: StringNullableFilter<"user"> | string | null
    phone_number?: StringFilter<"user"> | string
    email?: StringNullableFilter<"user"> | string | null
    notificationToken?: StringNullableFilter<"user"> | string | null
    ratings?: FloatFilter<"user"> | number
    totalRides?: FloatFilter<"user"> | number
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    rides?: RidesListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    notificationToken?: SortOrder
    ratings?: SortOrder
    totalRides?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rides?: ridesOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone_number?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringNullableFilter<"user"> | string | null
    notificationToken?: StringNullableFilter<"user"> | string | null
    ratings?: FloatFilter<"user"> | number
    totalRides?: FloatFilter<"user"> | number
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    rides?: RidesListRelationFilter
  }, "id" | "phone_number" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    notificationToken?: SortOrder
    ratings?: SortOrder
    totalRides?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    name?: StringNullableWithAggregatesFilter<"user"> | string | null
    phone_number?: StringWithAggregatesFilter<"user"> | string
    email?: StringNullableWithAggregatesFilter<"user"> | string | null
    notificationToken?: StringNullableWithAggregatesFilter<"user"> | string | null
    ratings?: FloatWithAggregatesFilter<"user"> | number
    totalRides?: FloatWithAggregatesFilter<"user"> | number
    createdAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
  }

  export type driverWhereInput = {
    AND?: driverWhereInput | driverWhereInput[]
    OR?: driverWhereInput[]
    NOT?: driverWhereInput | driverWhereInput[]
    id?: StringFilter<"driver"> | string
    name?: StringFilter<"driver"> | string
    country?: StringFilter<"driver"> | string
    phone_number?: StringFilter<"driver"> | string
    email?: StringFilter<"driver"> | string
    vehicle_type?: EnumVehicleTypeFilter<"driver"> | $Enums.VehicleType
    registration_number?: StringFilter<"driver"> | string
    registration_date?: StringFilter<"driver"> | string
    driving_license?: StringFilter<"driver"> | string
    vehicle_color?: StringNullableFilter<"driver"> | string | null
    rate?: StringFilter<"driver"> | string
    notificationToken?: StringNullableFilter<"driver"> | string | null
    ratings?: FloatFilter<"driver"> | number
    totalEarning?: FloatFilter<"driver"> | number
    totalRides?: FloatFilter<"driver"> | number
    pendingRides?: FloatFilter<"driver"> | number
    cancelRides?: FloatFilter<"driver"> | number
    status?: StringFilter<"driver"> | string
    createdAt?: DateTimeFilter<"driver"> | Date | string
    updatedAt?: DateTimeFilter<"driver"> | Date | string
    rides?: RidesListRelationFilter
  }

  export type driverOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    vehicle_type?: SortOrder
    registration_number?: SortOrder
    registration_date?: SortOrder
    driving_license?: SortOrder
    vehicle_color?: SortOrder
    rate?: SortOrder
    notificationToken?: SortOrder
    ratings?: SortOrder
    totalEarning?: SortOrder
    totalRides?: SortOrder
    pendingRides?: SortOrder
    cancelRides?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rides?: ridesOrderByRelationAggregateInput
  }

  export type driverWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone_number?: string
    email?: string
    registration_number?: string
    AND?: driverWhereInput | driverWhereInput[]
    OR?: driverWhereInput[]
    NOT?: driverWhereInput | driverWhereInput[]
    name?: StringFilter<"driver"> | string
    country?: StringFilter<"driver"> | string
    vehicle_type?: EnumVehicleTypeFilter<"driver"> | $Enums.VehicleType
    registration_date?: StringFilter<"driver"> | string
    driving_license?: StringFilter<"driver"> | string
    vehicle_color?: StringNullableFilter<"driver"> | string | null
    rate?: StringFilter<"driver"> | string
    notificationToken?: StringNullableFilter<"driver"> | string | null
    ratings?: FloatFilter<"driver"> | number
    totalEarning?: FloatFilter<"driver"> | number
    totalRides?: FloatFilter<"driver"> | number
    pendingRides?: FloatFilter<"driver"> | number
    cancelRides?: FloatFilter<"driver"> | number
    status?: StringFilter<"driver"> | string
    createdAt?: DateTimeFilter<"driver"> | Date | string
    updatedAt?: DateTimeFilter<"driver"> | Date | string
    rides?: RidesListRelationFilter
  }, "id" | "phone_number" | "email" | "registration_number">

  export type driverOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    vehicle_type?: SortOrder
    registration_number?: SortOrder
    registration_date?: SortOrder
    driving_license?: SortOrder
    vehicle_color?: SortOrder
    rate?: SortOrder
    notificationToken?: SortOrder
    ratings?: SortOrder
    totalEarning?: SortOrder
    totalRides?: SortOrder
    pendingRides?: SortOrder
    cancelRides?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: driverCountOrderByAggregateInput
    _avg?: driverAvgOrderByAggregateInput
    _max?: driverMaxOrderByAggregateInput
    _min?: driverMinOrderByAggregateInput
    _sum?: driverSumOrderByAggregateInput
  }

  export type driverScalarWhereWithAggregatesInput = {
    AND?: driverScalarWhereWithAggregatesInput | driverScalarWhereWithAggregatesInput[]
    OR?: driverScalarWhereWithAggregatesInput[]
    NOT?: driverScalarWhereWithAggregatesInput | driverScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"driver"> | string
    name?: StringWithAggregatesFilter<"driver"> | string
    country?: StringWithAggregatesFilter<"driver"> | string
    phone_number?: StringWithAggregatesFilter<"driver"> | string
    email?: StringWithAggregatesFilter<"driver"> | string
    vehicle_type?: EnumVehicleTypeWithAggregatesFilter<"driver"> | $Enums.VehicleType
    registration_number?: StringWithAggregatesFilter<"driver"> | string
    registration_date?: StringWithAggregatesFilter<"driver"> | string
    driving_license?: StringWithAggregatesFilter<"driver"> | string
    vehicle_color?: StringNullableWithAggregatesFilter<"driver"> | string | null
    rate?: StringWithAggregatesFilter<"driver"> | string
    notificationToken?: StringNullableWithAggregatesFilter<"driver"> | string | null
    ratings?: FloatWithAggregatesFilter<"driver"> | number
    totalEarning?: FloatWithAggregatesFilter<"driver"> | number
    totalRides?: FloatWithAggregatesFilter<"driver"> | number
    pendingRides?: FloatWithAggregatesFilter<"driver"> | number
    cancelRides?: FloatWithAggregatesFilter<"driver"> | number
    status?: StringWithAggregatesFilter<"driver"> | string
    createdAt?: DateTimeWithAggregatesFilter<"driver"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"driver"> | Date | string
  }

  export type ridesWhereInput = {
    AND?: ridesWhereInput | ridesWhereInput[]
    OR?: ridesWhereInput[]
    NOT?: ridesWhereInput | ridesWhereInput[]
    id?: StringFilter<"rides"> | string
    userId?: StringFilter<"rides"> | string
    driverId?: StringFilter<"rides"> | string
    charge?: FloatFilter<"rides"> | number
    currentLocationName?: StringFilter<"rides"> | string
    destinationLocationName?: StringFilter<"rides"> | string
    distance?: StringFilter<"rides"> | string
    status?: StringFilter<"rides"> | string
    rating?: FloatNullableFilter<"rides"> | number | null
    createdAt?: DateTimeFilter<"rides"> | Date | string
    updatedAt?: DateTimeFilter<"rides"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    driver?: XOR<DriverScalarRelationFilter, driverWhereInput>
  }

  export type ridesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    driverId?: SortOrder
    charge?: SortOrder
    currentLocationName?: SortOrder
    destinationLocationName?: SortOrder
    distance?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: userOrderByWithRelationInput
    driver?: driverOrderByWithRelationInput
  }

  export type ridesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ridesWhereInput | ridesWhereInput[]
    OR?: ridesWhereInput[]
    NOT?: ridesWhereInput | ridesWhereInput[]
    userId?: StringFilter<"rides"> | string
    driverId?: StringFilter<"rides"> | string
    charge?: FloatFilter<"rides"> | number
    currentLocationName?: StringFilter<"rides"> | string
    destinationLocationName?: StringFilter<"rides"> | string
    distance?: StringFilter<"rides"> | string
    status?: StringFilter<"rides"> | string
    rating?: FloatNullableFilter<"rides"> | number | null
    createdAt?: DateTimeFilter<"rides"> | Date | string
    updatedAt?: DateTimeFilter<"rides"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    driver?: XOR<DriverScalarRelationFilter, driverWhereInput>
  }, "id">

  export type ridesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    driverId?: SortOrder
    charge?: SortOrder
    currentLocationName?: SortOrder
    destinationLocationName?: SortOrder
    distance?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ridesCountOrderByAggregateInput
    _avg?: ridesAvgOrderByAggregateInput
    _max?: ridesMaxOrderByAggregateInput
    _min?: ridesMinOrderByAggregateInput
    _sum?: ridesSumOrderByAggregateInput
  }

  export type ridesScalarWhereWithAggregatesInput = {
    AND?: ridesScalarWhereWithAggregatesInput | ridesScalarWhereWithAggregatesInput[]
    OR?: ridesScalarWhereWithAggregatesInput[]
    NOT?: ridesScalarWhereWithAggregatesInput | ridesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"rides"> | string
    userId?: StringWithAggregatesFilter<"rides"> | string
    driverId?: StringWithAggregatesFilter<"rides"> | string
    charge?: FloatWithAggregatesFilter<"rides"> | number
    currentLocationName?: StringWithAggregatesFilter<"rides"> | string
    destinationLocationName?: StringWithAggregatesFilter<"rides"> | string
    distance?: StringWithAggregatesFilter<"rides"> | string
    status?: StringWithAggregatesFilter<"rides"> | string
    rating?: FloatNullableWithAggregatesFilter<"rides"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"rides"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"rides"> | Date | string
  }

  export type userCreateInput = {
    id?: string
    name?: string | null
    phone_number: string
    email?: string | null
    notificationToken?: string | null
    ratings?: number
    totalRides?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    rides?: ridesCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: string
    name?: string | null
    phone_number: string
    email?: string | null
    notificationToken?: string | null
    ratings?: number
    totalRides?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    rides?: ridesUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    notificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    ratings?: FloatFieldUpdateOperationsInput | number
    totalRides?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rides?: ridesUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    notificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    ratings?: FloatFieldUpdateOperationsInput | number
    totalRides?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rides?: ridesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: string
    name?: string | null
    phone_number: string
    email?: string | null
    notificationToken?: string | null
    ratings?: number
    totalRides?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    notificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    ratings?: FloatFieldUpdateOperationsInput | number
    totalRides?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    notificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    ratings?: FloatFieldUpdateOperationsInput | number
    totalRides?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type driverCreateInput = {
    id?: string
    name: string
    country: string
    phone_number: string
    email: string
    vehicle_type: $Enums.VehicleType
    registration_number: string
    registration_date: string
    driving_license: string
    vehicle_color?: string | null
    rate: string
    notificationToken?: string | null
    ratings?: number
    totalEarning?: number
    totalRides?: number
    pendingRides?: number
    cancelRides?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rides?: ridesCreateNestedManyWithoutDriverInput
  }

  export type driverUncheckedCreateInput = {
    id?: string
    name: string
    country: string
    phone_number: string
    email: string
    vehicle_type: $Enums.VehicleType
    registration_number: string
    registration_date: string
    driving_license: string
    vehicle_color?: string | null
    rate: string
    notificationToken?: string | null
    ratings?: number
    totalEarning?: number
    totalRides?: number
    pendingRides?: number
    cancelRides?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rides?: ridesUncheckedCreateNestedManyWithoutDriverInput
  }

  export type driverUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    vehicle_type?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    registration_number?: StringFieldUpdateOperationsInput | string
    registration_date?: StringFieldUpdateOperationsInput | string
    driving_license?: StringFieldUpdateOperationsInput | string
    vehicle_color?: NullableStringFieldUpdateOperationsInput | string | null
    rate?: StringFieldUpdateOperationsInput | string
    notificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    ratings?: FloatFieldUpdateOperationsInput | number
    totalEarning?: FloatFieldUpdateOperationsInput | number
    totalRides?: FloatFieldUpdateOperationsInput | number
    pendingRides?: FloatFieldUpdateOperationsInput | number
    cancelRides?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rides?: ridesUpdateManyWithoutDriverNestedInput
  }

  export type driverUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    vehicle_type?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    registration_number?: StringFieldUpdateOperationsInput | string
    registration_date?: StringFieldUpdateOperationsInput | string
    driving_license?: StringFieldUpdateOperationsInput | string
    vehicle_color?: NullableStringFieldUpdateOperationsInput | string | null
    rate?: StringFieldUpdateOperationsInput | string
    notificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    ratings?: FloatFieldUpdateOperationsInput | number
    totalEarning?: FloatFieldUpdateOperationsInput | number
    totalRides?: FloatFieldUpdateOperationsInput | number
    pendingRides?: FloatFieldUpdateOperationsInput | number
    cancelRides?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rides?: ridesUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type driverCreateManyInput = {
    id?: string
    name: string
    country: string
    phone_number: string
    email: string
    vehicle_type: $Enums.VehicleType
    registration_number: string
    registration_date: string
    driving_license: string
    vehicle_color?: string | null
    rate: string
    notificationToken?: string | null
    ratings?: number
    totalEarning?: number
    totalRides?: number
    pendingRides?: number
    cancelRides?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type driverUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    vehicle_type?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    registration_number?: StringFieldUpdateOperationsInput | string
    registration_date?: StringFieldUpdateOperationsInput | string
    driving_license?: StringFieldUpdateOperationsInput | string
    vehicle_color?: NullableStringFieldUpdateOperationsInput | string | null
    rate?: StringFieldUpdateOperationsInput | string
    notificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    ratings?: FloatFieldUpdateOperationsInput | number
    totalEarning?: FloatFieldUpdateOperationsInput | number
    totalRides?: FloatFieldUpdateOperationsInput | number
    pendingRides?: FloatFieldUpdateOperationsInput | number
    cancelRides?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type driverUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    vehicle_type?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    registration_number?: StringFieldUpdateOperationsInput | string
    registration_date?: StringFieldUpdateOperationsInput | string
    driving_license?: StringFieldUpdateOperationsInput | string
    vehicle_color?: NullableStringFieldUpdateOperationsInput | string | null
    rate?: StringFieldUpdateOperationsInput | string
    notificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    ratings?: FloatFieldUpdateOperationsInput | number
    totalEarning?: FloatFieldUpdateOperationsInput | number
    totalRides?: FloatFieldUpdateOperationsInput | number
    pendingRides?: FloatFieldUpdateOperationsInput | number
    cancelRides?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ridesCreateInput = {
    id?: string
    charge: number
    currentLocationName: string
    destinationLocationName: string
    distance: string
    status: string
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: userCreateNestedOneWithoutRidesInput
    driver: driverCreateNestedOneWithoutRidesInput
  }

  export type ridesUncheckedCreateInput = {
    id?: string
    userId: string
    driverId: string
    charge: number
    currentLocationName: string
    destinationLocationName: string
    distance: string
    status: string
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ridesUpdateInput = {
    charge?: FloatFieldUpdateOperationsInput | number
    currentLocationName?: StringFieldUpdateOperationsInput | string
    destinationLocationName?: StringFieldUpdateOperationsInput | string
    distance?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutRidesNestedInput
    driver?: driverUpdateOneRequiredWithoutRidesNestedInput
  }

  export type ridesUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    charge?: FloatFieldUpdateOperationsInput | number
    currentLocationName?: StringFieldUpdateOperationsInput | string
    destinationLocationName?: StringFieldUpdateOperationsInput | string
    distance?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ridesCreateManyInput = {
    id?: string
    userId: string
    driverId: string
    charge: number
    currentLocationName: string
    destinationLocationName: string
    distance: string
    status: string
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ridesUpdateManyMutationInput = {
    charge?: FloatFieldUpdateOperationsInput | number
    currentLocationName?: StringFieldUpdateOperationsInput | string
    destinationLocationName?: StringFieldUpdateOperationsInput | string
    distance?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ridesUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    charge?: FloatFieldUpdateOperationsInput | number
    currentLocationName?: StringFieldUpdateOperationsInput | string
    destinationLocationName?: StringFieldUpdateOperationsInput | string
    distance?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
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
    isSet?: boolean
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

  export type RidesListRelationFilter = {
    every?: ridesWhereInput
    some?: ridesWhereInput
    none?: ridesWhereInput
  }

  export type ridesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    notificationToken?: SortOrder
    ratings?: SortOrder
    totalRides?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    ratings?: SortOrder
    totalRides?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    notificationToken?: SortOrder
    ratings?: SortOrder
    totalRides?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    notificationToken?: SortOrder
    ratings?: SortOrder
    totalRides?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    ratings?: SortOrder
    totalRides?: SortOrder
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
    isSet?: boolean
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

  export type EnumVehicleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleTypeFilter<$PrismaModel> | $Enums.VehicleType
  }

  export type driverCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    vehicle_type?: SortOrder
    registration_number?: SortOrder
    registration_date?: SortOrder
    driving_license?: SortOrder
    vehicle_color?: SortOrder
    rate?: SortOrder
    notificationToken?: SortOrder
    ratings?: SortOrder
    totalEarning?: SortOrder
    totalRides?: SortOrder
    pendingRides?: SortOrder
    cancelRides?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type driverAvgOrderByAggregateInput = {
    ratings?: SortOrder
    totalEarning?: SortOrder
    totalRides?: SortOrder
    pendingRides?: SortOrder
    cancelRides?: SortOrder
  }

  export type driverMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    vehicle_type?: SortOrder
    registration_number?: SortOrder
    registration_date?: SortOrder
    driving_license?: SortOrder
    vehicle_color?: SortOrder
    rate?: SortOrder
    notificationToken?: SortOrder
    ratings?: SortOrder
    totalEarning?: SortOrder
    totalRides?: SortOrder
    pendingRides?: SortOrder
    cancelRides?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type driverMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    vehicle_type?: SortOrder
    registration_number?: SortOrder
    registration_date?: SortOrder
    driving_license?: SortOrder
    vehicle_color?: SortOrder
    rate?: SortOrder
    notificationToken?: SortOrder
    ratings?: SortOrder
    totalEarning?: SortOrder
    totalRides?: SortOrder
    pendingRides?: SortOrder
    cancelRides?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type driverSumOrderByAggregateInput = {
    ratings?: SortOrder
    totalEarning?: SortOrder
    totalRides?: SortOrder
    pendingRides?: SortOrder
    cancelRides?: SortOrder
  }

  export type EnumVehicleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleTypeWithAggregatesFilter<$PrismaModel> | $Enums.VehicleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleTypeFilter<$PrismaModel>
    _max?: NestedEnumVehicleTypeFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type DriverScalarRelationFilter = {
    is?: driverWhereInput
    isNot?: driverWhereInput
  }

  export type ridesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    driverId?: SortOrder
    charge?: SortOrder
    currentLocationName?: SortOrder
    destinationLocationName?: SortOrder
    distance?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ridesAvgOrderByAggregateInput = {
    charge?: SortOrder
    rating?: SortOrder
  }

  export type ridesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    driverId?: SortOrder
    charge?: SortOrder
    currentLocationName?: SortOrder
    destinationLocationName?: SortOrder
    distance?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ridesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    driverId?: SortOrder
    charge?: SortOrder
    currentLocationName?: SortOrder
    destinationLocationName?: SortOrder
    distance?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ridesSumOrderByAggregateInput = {
    charge?: SortOrder
    rating?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type ridesCreateNestedManyWithoutUserInput = {
    create?: XOR<ridesCreateWithoutUserInput, ridesUncheckedCreateWithoutUserInput> | ridesCreateWithoutUserInput[] | ridesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ridesCreateOrConnectWithoutUserInput | ridesCreateOrConnectWithoutUserInput[]
    createMany?: ridesCreateManyUserInputEnvelope
    connect?: ridesWhereUniqueInput | ridesWhereUniqueInput[]
  }

  export type ridesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ridesCreateWithoutUserInput, ridesUncheckedCreateWithoutUserInput> | ridesCreateWithoutUserInput[] | ridesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ridesCreateOrConnectWithoutUserInput | ridesCreateOrConnectWithoutUserInput[]
    createMany?: ridesCreateManyUserInputEnvelope
    connect?: ridesWhereUniqueInput | ridesWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ridesUpdateManyWithoutUserNestedInput = {
    create?: XOR<ridesCreateWithoutUserInput, ridesUncheckedCreateWithoutUserInput> | ridesCreateWithoutUserInput[] | ridesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ridesCreateOrConnectWithoutUserInput | ridesCreateOrConnectWithoutUserInput[]
    upsert?: ridesUpsertWithWhereUniqueWithoutUserInput | ridesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ridesCreateManyUserInputEnvelope
    set?: ridesWhereUniqueInput | ridesWhereUniqueInput[]
    disconnect?: ridesWhereUniqueInput | ridesWhereUniqueInput[]
    delete?: ridesWhereUniqueInput | ridesWhereUniqueInput[]
    connect?: ridesWhereUniqueInput | ridesWhereUniqueInput[]
    update?: ridesUpdateWithWhereUniqueWithoutUserInput | ridesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ridesUpdateManyWithWhereWithoutUserInput | ridesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ridesScalarWhereInput | ridesScalarWhereInput[]
  }

  export type ridesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ridesCreateWithoutUserInput, ridesUncheckedCreateWithoutUserInput> | ridesCreateWithoutUserInput[] | ridesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ridesCreateOrConnectWithoutUserInput | ridesCreateOrConnectWithoutUserInput[]
    upsert?: ridesUpsertWithWhereUniqueWithoutUserInput | ridesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ridesCreateManyUserInputEnvelope
    set?: ridesWhereUniqueInput | ridesWhereUniqueInput[]
    disconnect?: ridesWhereUniqueInput | ridesWhereUniqueInput[]
    delete?: ridesWhereUniqueInput | ridesWhereUniqueInput[]
    connect?: ridesWhereUniqueInput | ridesWhereUniqueInput[]
    update?: ridesUpdateWithWhereUniqueWithoutUserInput | ridesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ridesUpdateManyWithWhereWithoutUserInput | ridesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ridesScalarWhereInput | ridesScalarWhereInput[]
  }

  export type ridesCreateNestedManyWithoutDriverInput = {
    create?: XOR<ridesCreateWithoutDriverInput, ridesUncheckedCreateWithoutDriverInput> | ridesCreateWithoutDriverInput[] | ridesUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: ridesCreateOrConnectWithoutDriverInput | ridesCreateOrConnectWithoutDriverInput[]
    createMany?: ridesCreateManyDriverInputEnvelope
    connect?: ridesWhereUniqueInput | ridesWhereUniqueInput[]
  }

  export type ridesUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<ridesCreateWithoutDriverInput, ridesUncheckedCreateWithoutDriverInput> | ridesCreateWithoutDriverInput[] | ridesUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: ridesCreateOrConnectWithoutDriverInput | ridesCreateOrConnectWithoutDriverInput[]
    createMany?: ridesCreateManyDriverInputEnvelope
    connect?: ridesWhereUniqueInput | ridesWhereUniqueInput[]
  }

  export type EnumVehicleTypeFieldUpdateOperationsInput = {
    set?: $Enums.VehicleType
  }

  export type ridesUpdateManyWithoutDriverNestedInput = {
    create?: XOR<ridesCreateWithoutDriverInput, ridesUncheckedCreateWithoutDriverInput> | ridesCreateWithoutDriverInput[] | ridesUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: ridesCreateOrConnectWithoutDriverInput | ridesCreateOrConnectWithoutDriverInput[]
    upsert?: ridesUpsertWithWhereUniqueWithoutDriverInput | ridesUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: ridesCreateManyDriverInputEnvelope
    set?: ridesWhereUniqueInput | ridesWhereUniqueInput[]
    disconnect?: ridesWhereUniqueInput | ridesWhereUniqueInput[]
    delete?: ridesWhereUniqueInput | ridesWhereUniqueInput[]
    connect?: ridesWhereUniqueInput | ridesWhereUniqueInput[]
    update?: ridesUpdateWithWhereUniqueWithoutDriverInput | ridesUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: ridesUpdateManyWithWhereWithoutDriverInput | ridesUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: ridesScalarWhereInput | ridesScalarWhereInput[]
  }

  export type ridesUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<ridesCreateWithoutDriverInput, ridesUncheckedCreateWithoutDriverInput> | ridesCreateWithoutDriverInput[] | ridesUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: ridesCreateOrConnectWithoutDriverInput | ridesCreateOrConnectWithoutDriverInput[]
    upsert?: ridesUpsertWithWhereUniqueWithoutDriverInput | ridesUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: ridesCreateManyDriverInputEnvelope
    set?: ridesWhereUniqueInput | ridesWhereUniqueInput[]
    disconnect?: ridesWhereUniqueInput | ridesWhereUniqueInput[]
    delete?: ridesWhereUniqueInput | ridesWhereUniqueInput[]
    connect?: ridesWhereUniqueInput | ridesWhereUniqueInput[]
    update?: ridesUpdateWithWhereUniqueWithoutDriverInput | ridesUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: ridesUpdateManyWithWhereWithoutDriverInput | ridesUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: ridesScalarWhereInput | ridesScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutRidesInput = {
    create?: XOR<userCreateWithoutRidesInput, userUncheckedCreateWithoutRidesInput>
    connectOrCreate?: userCreateOrConnectWithoutRidesInput
    connect?: userWhereUniqueInput
  }

  export type driverCreateNestedOneWithoutRidesInput = {
    create?: XOR<driverCreateWithoutRidesInput, driverUncheckedCreateWithoutRidesInput>
    connectOrCreate?: driverCreateOrConnectWithoutRidesInput
    connect?: driverWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type userUpdateOneRequiredWithoutRidesNestedInput = {
    create?: XOR<userCreateWithoutRidesInput, userUncheckedCreateWithoutRidesInput>
    connectOrCreate?: userCreateOrConnectWithoutRidesInput
    upsert?: userUpsertWithoutRidesInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutRidesInput, userUpdateWithoutRidesInput>, userUncheckedUpdateWithoutRidesInput>
  }

  export type driverUpdateOneRequiredWithoutRidesNestedInput = {
    create?: XOR<driverCreateWithoutRidesInput, driverUncheckedCreateWithoutRidesInput>
    connectOrCreate?: driverCreateOrConnectWithoutRidesInput
    upsert?: driverUpsertWithoutRidesInput
    connect?: driverWhereUniqueInput
    update?: XOR<XOR<driverUpdateToOneWithWhereWithoutRidesInput, driverUpdateWithoutRidesInput>, driverUncheckedUpdateWithoutRidesInput>
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
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
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

  export type NestedEnumVehicleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleTypeFilter<$PrismaModel> | $Enums.VehicleType
  }

  export type NestedEnumVehicleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleTypeWithAggregatesFilter<$PrismaModel> | $Enums.VehicleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleTypeFilter<$PrismaModel>
    _max?: NestedEnumVehicleTypeFilter<$PrismaModel>
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
    isSet?: boolean
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type ridesCreateWithoutUserInput = {
    id?: string
    charge: number
    currentLocationName: string
    destinationLocationName: string
    distance: string
    status: string
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    driver: driverCreateNestedOneWithoutRidesInput
  }

  export type ridesUncheckedCreateWithoutUserInput = {
    id?: string
    driverId: string
    charge: number
    currentLocationName: string
    destinationLocationName: string
    distance: string
    status: string
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ridesCreateOrConnectWithoutUserInput = {
    where: ridesWhereUniqueInput
    create: XOR<ridesCreateWithoutUserInput, ridesUncheckedCreateWithoutUserInput>
  }

  export type ridesCreateManyUserInputEnvelope = {
    data: ridesCreateManyUserInput | ridesCreateManyUserInput[]
  }

  export type ridesUpsertWithWhereUniqueWithoutUserInput = {
    where: ridesWhereUniqueInput
    update: XOR<ridesUpdateWithoutUserInput, ridesUncheckedUpdateWithoutUserInput>
    create: XOR<ridesCreateWithoutUserInput, ridesUncheckedCreateWithoutUserInput>
  }

  export type ridesUpdateWithWhereUniqueWithoutUserInput = {
    where: ridesWhereUniqueInput
    data: XOR<ridesUpdateWithoutUserInput, ridesUncheckedUpdateWithoutUserInput>
  }

  export type ridesUpdateManyWithWhereWithoutUserInput = {
    where: ridesScalarWhereInput
    data: XOR<ridesUpdateManyMutationInput, ridesUncheckedUpdateManyWithoutUserInput>
  }

  export type ridesScalarWhereInput = {
    AND?: ridesScalarWhereInput | ridesScalarWhereInput[]
    OR?: ridesScalarWhereInput[]
    NOT?: ridesScalarWhereInput | ridesScalarWhereInput[]
    id?: StringFilter<"rides"> | string
    userId?: StringFilter<"rides"> | string
    driverId?: StringFilter<"rides"> | string
    charge?: FloatFilter<"rides"> | number
    currentLocationName?: StringFilter<"rides"> | string
    destinationLocationName?: StringFilter<"rides"> | string
    distance?: StringFilter<"rides"> | string
    status?: StringFilter<"rides"> | string
    rating?: FloatNullableFilter<"rides"> | number | null
    createdAt?: DateTimeFilter<"rides"> | Date | string
    updatedAt?: DateTimeFilter<"rides"> | Date | string
  }

  export type ridesCreateWithoutDriverInput = {
    id?: string
    charge: number
    currentLocationName: string
    destinationLocationName: string
    distance: string
    status: string
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: userCreateNestedOneWithoutRidesInput
  }

  export type ridesUncheckedCreateWithoutDriverInput = {
    id?: string
    userId: string
    charge: number
    currentLocationName: string
    destinationLocationName: string
    distance: string
    status: string
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ridesCreateOrConnectWithoutDriverInput = {
    where: ridesWhereUniqueInput
    create: XOR<ridesCreateWithoutDriverInput, ridesUncheckedCreateWithoutDriverInput>
  }

  export type ridesCreateManyDriverInputEnvelope = {
    data: ridesCreateManyDriverInput | ridesCreateManyDriverInput[]
  }

  export type ridesUpsertWithWhereUniqueWithoutDriverInput = {
    where: ridesWhereUniqueInput
    update: XOR<ridesUpdateWithoutDriverInput, ridesUncheckedUpdateWithoutDriverInput>
    create: XOR<ridesCreateWithoutDriverInput, ridesUncheckedCreateWithoutDriverInput>
  }

  export type ridesUpdateWithWhereUniqueWithoutDriverInput = {
    where: ridesWhereUniqueInput
    data: XOR<ridesUpdateWithoutDriverInput, ridesUncheckedUpdateWithoutDriverInput>
  }

  export type ridesUpdateManyWithWhereWithoutDriverInput = {
    where: ridesScalarWhereInput
    data: XOR<ridesUpdateManyMutationInput, ridesUncheckedUpdateManyWithoutDriverInput>
  }

  export type userCreateWithoutRidesInput = {
    id?: string
    name?: string | null
    phone_number: string
    email?: string | null
    notificationToken?: string | null
    ratings?: number
    totalRides?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userUncheckedCreateWithoutRidesInput = {
    id?: string
    name?: string | null
    phone_number: string
    email?: string | null
    notificationToken?: string | null
    ratings?: number
    totalRides?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userCreateOrConnectWithoutRidesInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutRidesInput, userUncheckedCreateWithoutRidesInput>
  }

  export type driverCreateWithoutRidesInput = {
    id?: string
    name: string
    country: string
    phone_number: string
    email: string
    vehicle_type: $Enums.VehicleType
    registration_number: string
    registration_date: string
    driving_license: string
    vehicle_color?: string | null
    rate: string
    notificationToken?: string | null
    ratings?: number
    totalEarning?: number
    totalRides?: number
    pendingRides?: number
    cancelRides?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type driverUncheckedCreateWithoutRidesInput = {
    id?: string
    name: string
    country: string
    phone_number: string
    email: string
    vehicle_type: $Enums.VehicleType
    registration_number: string
    registration_date: string
    driving_license: string
    vehicle_color?: string | null
    rate: string
    notificationToken?: string | null
    ratings?: number
    totalEarning?: number
    totalRides?: number
    pendingRides?: number
    cancelRides?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type driverCreateOrConnectWithoutRidesInput = {
    where: driverWhereUniqueInput
    create: XOR<driverCreateWithoutRidesInput, driverUncheckedCreateWithoutRidesInput>
  }

  export type userUpsertWithoutRidesInput = {
    update: XOR<userUpdateWithoutRidesInput, userUncheckedUpdateWithoutRidesInput>
    create: XOR<userCreateWithoutRidesInput, userUncheckedCreateWithoutRidesInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutRidesInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutRidesInput, userUncheckedUpdateWithoutRidesInput>
  }

  export type userUpdateWithoutRidesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    notificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    ratings?: FloatFieldUpdateOperationsInput | number
    totalRides?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateWithoutRidesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    notificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    ratings?: FloatFieldUpdateOperationsInput | number
    totalRides?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type driverUpsertWithoutRidesInput = {
    update: XOR<driverUpdateWithoutRidesInput, driverUncheckedUpdateWithoutRidesInput>
    create: XOR<driverCreateWithoutRidesInput, driverUncheckedCreateWithoutRidesInput>
    where?: driverWhereInput
  }

  export type driverUpdateToOneWithWhereWithoutRidesInput = {
    where?: driverWhereInput
    data: XOR<driverUpdateWithoutRidesInput, driverUncheckedUpdateWithoutRidesInput>
  }

  export type driverUpdateWithoutRidesInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    vehicle_type?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    registration_number?: StringFieldUpdateOperationsInput | string
    registration_date?: StringFieldUpdateOperationsInput | string
    driving_license?: StringFieldUpdateOperationsInput | string
    vehicle_color?: NullableStringFieldUpdateOperationsInput | string | null
    rate?: StringFieldUpdateOperationsInput | string
    notificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    ratings?: FloatFieldUpdateOperationsInput | number
    totalEarning?: FloatFieldUpdateOperationsInput | number
    totalRides?: FloatFieldUpdateOperationsInput | number
    pendingRides?: FloatFieldUpdateOperationsInput | number
    cancelRides?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type driverUncheckedUpdateWithoutRidesInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    vehicle_type?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    registration_number?: StringFieldUpdateOperationsInput | string
    registration_date?: StringFieldUpdateOperationsInput | string
    driving_license?: StringFieldUpdateOperationsInput | string
    vehicle_color?: NullableStringFieldUpdateOperationsInput | string | null
    rate?: StringFieldUpdateOperationsInput | string
    notificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    ratings?: FloatFieldUpdateOperationsInput | number
    totalEarning?: FloatFieldUpdateOperationsInput | number
    totalRides?: FloatFieldUpdateOperationsInput | number
    pendingRides?: FloatFieldUpdateOperationsInput | number
    cancelRides?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ridesCreateManyUserInput = {
    id?: string
    driverId: string
    charge: number
    currentLocationName: string
    destinationLocationName: string
    distance: string
    status: string
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ridesUpdateWithoutUserInput = {
    charge?: FloatFieldUpdateOperationsInput | number
    currentLocationName?: StringFieldUpdateOperationsInput | string
    destinationLocationName?: StringFieldUpdateOperationsInput | string
    distance?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: driverUpdateOneRequiredWithoutRidesNestedInput
  }

  export type ridesUncheckedUpdateWithoutUserInput = {
    driverId?: StringFieldUpdateOperationsInput | string
    charge?: FloatFieldUpdateOperationsInput | number
    currentLocationName?: StringFieldUpdateOperationsInput | string
    destinationLocationName?: StringFieldUpdateOperationsInput | string
    distance?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ridesUncheckedUpdateManyWithoutUserInput = {
    driverId?: StringFieldUpdateOperationsInput | string
    charge?: FloatFieldUpdateOperationsInput | number
    currentLocationName?: StringFieldUpdateOperationsInput | string
    destinationLocationName?: StringFieldUpdateOperationsInput | string
    distance?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ridesCreateManyDriverInput = {
    id?: string
    userId: string
    charge: number
    currentLocationName: string
    destinationLocationName: string
    distance: string
    status: string
    rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ridesUpdateWithoutDriverInput = {
    charge?: FloatFieldUpdateOperationsInput | number
    currentLocationName?: StringFieldUpdateOperationsInput | string
    destinationLocationName?: StringFieldUpdateOperationsInput | string
    distance?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutRidesNestedInput
  }

  export type ridesUncheckedUpdateWithoutDriverInput = {
    userId?: StringFieldUpdateOperationsInput | string
    charge?: FloatFieldUpdateOperationsInput | number
    currentLocationName?: StringFieldUpdateOperationsInput | string
    destinationLocationName?: StringFieldUpdateOperationsInput | string
    distance?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ridesUncheckedUpdateManyWithoutDriverInput = {
    userId?: StringFieldUpdateOperationsInput | string
    charge?: FloatFieldUpdateOperationsInput | number
    currentLocationName?: StringFieldUpdateOperationsInput | string
    destinationLocationName?: StringFieldUpdateOperationsInput | string
    distance?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
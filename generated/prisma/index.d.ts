
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Insumo
 * 
 */
export type Insumo = $Result.DefaultSelection<Prisma.$InsumoPayload>
/**
 * Model Receita
 * 
 */
export type Receita = $Result.DefaultSelection<Prisma.$ReceitaPayload>
/**
 * Model ReceitaInsumo
 * 
 */
export type ReceitaInsumo = $Result.DefaultSelection<Prisma.$ReceitaInsumoPayload>
/**
 * Model PlanejamentoProducao
 * 
 */
export type PlanejamentoProducao = $Result.DefaultSelection<Prisma.$PlanejamentoProducaoPayload>
/**
 * Model ReceitaPlanejada
 * 
 */
export type ReceitaPlanejada = $Result.DefaultSelection<Prisma.$ReceitaPlanejadaPayload>
/**
 * Model ListaCompra
 * 
 */
export type ListaCompra = $Result.DefaultSelection<Prisma.$ListaCompraPayload>
/**
 * Model EstoqueHistorico
 * 
 */
export type EstoqueHistorico = $Result.DefaultSelection<Prisma.$EstoqueHistoricoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UnidadeMedida: {
  KG: 'KG',
  G: 'G',
  L: 'L',
  ML: 'ML',
  UNIDADE: 'UNIDADE'
};

export type UnidadeMedida = (typeof UnidadeMedida)[keyof typeof UnidadeMedida]


export const TipoMovimentacao: {
  ENTRADA: 'ENTRADA',
  SAIDA: 'SAIDA'
};

export type TipoMovimentacao = (typeof TipoMovimentacao)[keyof typeof TipoMovimentacao]

}

export type UnidadeMedida = $Enums.UnidadeMedida

export const UnidadeMedida: typeof $Enums.UnidadeMedida

export type TipoMovimentacao = $Enums.TipoMovimentacao

export const TipoMovimentacao: typeof $Enums.TipoMovimentacao

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.insumo`: Exposes CRUD operations for the **Insumo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Insumos
    * const insumos = await prisma.insumo.findMany()
    * ```
    */
  get insumo(): Prisma.InsumoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.receita`: Exposes CRUD operations for the **Receita** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Receitas
    * const receitas = await prisma.receita.findMany()
    * ```
    */
  get receita(): Prisma.ReceitaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.receitaInsumo`: Exposes CRUD operations for the **ReceitaInsumo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReceitaInsumos
    * const receitaInsumos = await prisma.receitaInsumo.findMany()
    * ```
    */
  get receitaInsumo(): Prisma.ReceitaInsumoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.planejamentoProducao`: Exposes CRUD operations for the **PlanejamentoProducao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlanejamentoProducaos
    * const planejamentoProducaos = await prisma.planejamentoProducao.findMany()
    * ```
    */
  get planejamentoProducao(): Prisma.PlanejamentoProducaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.receitaPlanejada`: Exposes CRUD operations for the **ReceitaPlanejada** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReceitaPlanejadas
    * const receitaPlanejadas = await prisma.receitaPlanejada.findMany()
    * ```
    */
  get receitaPlanejada(): Prisma.ReceitaPlanejadaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listaCompra`: Exposes CRUD operations for the **ListaCompra** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ListaCompras
    * const listaCompras = await prisma.listaCompra.findMany()
    * ```
    */
  get listaCompra(): Prisma.ListaCompraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estoqueHistorico`: Exposes CRUD operations for the **EstoqueHistorico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EstoqueHistoricos
    * const estoqueHistoricos = await prisma.estoqueHistorico.findMany()
    * ```
    */
  get estoqueHistorico(): Prisma.EstoqueHistoricoDelegate<ExtArgs, ClientOptions>;
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
    Usuario: 'Usuario',
    Insumo: 'Insumo',
    Receita: 'Receita',
    ReceitaInsumo: 'ReceitaInsumo',
    PlanejamentoProducao: 'PlanejamentoProducao',
    ReceitaPlanejada: 'ReceitaPlanejada',
    ListaCompra: 'ListaCompra',
    EstoqueHistorico: 'EstoqueHistorico'
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
      modelProps: "usuario" | "insumo" | "receita" | "receitaInsumo" | "planejamentoProducao" | "receitaPlanejada" | "listaCompra" | "estoqueHistorico"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Insumo: {
        payload: Prisma.$InsumoPayload<ExtArgs>
        fields: Prisma.InsumoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InsumoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsumoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InsumoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsumoPayload>
          }
          findFirst: {
            args: Prisma.InsumoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsumoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InsumoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsumoPayload>
          }
          findMany: {
            args: Prisma.InsumoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsumoPayload>[]
          }
          create: {
            args: Prisma.InsumoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsumoPayload>
          }
          createMany: {
            args: Prisma.InsumoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InsumoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsumoPayload>[]
          }
          delete: {
            args: Prisma.InsumoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsumoPayload>
          }
          update: {
            args: Prisma.InsumoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsumoPayload>
          }
          deleteMany: {
            args: Prisma.InsumoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InsumoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InsumoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsumoPayload>[]
          }
          upsert: {
            args: Prisma.InsumoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsumoPayload>
          }
          aggregate: {
            args: Prisma.InsumoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInsumo>
          }
          groupBy: {
            args: Prisma.InsumoGroupByArgs<ExtArgs>
            result: $Utils.Optional<InsumoGroupByOutputType>[]
          }
          count: {
            args: Prisma.InsumoCountArgs<ExtArgs>
            result: $Utils.Optional<InsumoCountAggregateOutputType> | number
          }
        }
      }
      Receita: {
        payload: Prisma.$ReceitaPayload<ExtArgs>
        fields: Prisma.ReceitaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReceitaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReceitaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>
          }
          findFirst: {
            args: Prisma.ReceitaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReceitaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>
          }
          findMany: {
            args: Prisma.ReceitaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>[]
          }
          create: {
            args: Prisma.ReceitaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>
          }
          createMany: {
            args: Prisma.ReceitaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReceitaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>[]
          }
          delete: {
            args: Prisma.ReceitaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>
          }
          update: {
            args: Prisma.ReceitaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>
          }
          deleteMany: {
            args: Prisma.ReceitaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReceitaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReceitaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>[]
          }
          upsert: {
            args: Prisma.ReceitaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>
          }
          aggregate: {
            args: Prisma.ReceitaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceita>
          }
          groupBy: {
            args: Prisma.ReceitaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReceitaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReceitaCountArgs<ExtArgs>
            result: $Utils.Optional<ReceitaCountAggregateOutputType> | number
          }
        }
      }
      ReceitaInsumo: {
        payload: Prisma.$ReceitaInsumoPayload<ExtArgs>
        fields: Prisma.ReceitaInsumoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReceitaInsumoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaInsumoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReceitaInsumoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaInsumoPayload>
          }
          findFirst: {
            args: Prisma.ReceitaInsumoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaInsumoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReceitaInsumoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaInsumoPayload>
          }
          findMany: {
            args: Prisma.ReceitaInsumoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaInsumoPayload>[]
          }
          create: {
            args: Prisma.ReceitaInsumoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaInsumoPayload>
          }
          createMany: {
            args: Prisma.ReceitaInsumoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReceitaInsumoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaInsumoPayload>[]
          }
          delete: {
            args: Prisma.ReceitaInsumoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaInsumoPayload>
          }
          update: {
            args: Prisma.ReceitaInsumoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaInsumoPayload>
          }
          deleteMany: {
            args: Prisma.ReceitaInsumoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReceitaInsumoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReceitaInsumoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaInsumoPayload>[]
          }
          upsert: {
            args: Prisma.ReceitaInsumoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaInsumoPayload>
          }
          aggregate: {
            args: Prisma.ReceitaInsumoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceitaInsumo>
          }
          groupBy: {
            args: Prisma.ReceitaInsumoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReceitaInsumoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReceitaInsumoCountArgs<ExtArgs>
            result: $Utils.Optional<ReceitaInsumoCountAggregateOutputType> | number
          }
        }
      }
      PlanejamentoProducao: {
        payload: Prisma.$PlanejamentoProducaoPayload<ExtArgs>
        fields: Prisma.PlanejamentoProducaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanejamentoProducaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanejamentoProducaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanejamentoProducaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanejamentoProducaoPayload>
          }
          findFirst: {
            args: Prisma.PlanejamentoProducaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanejamentoProducaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanejamentoProducaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanejamentoProducaoPayload>
          }
          findMany: {
            args: Prisma.PlanejamentoProducaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanejamentoProducaoPayload>[]
          }
          create: {
            args: Prisma.PlanejamentoProducaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanejamentoProducaoPayload>
          }
          createMany: {
            args: Prisma.PlanejamentoProducaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanejamentoProducaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanejamentoProducaoPayload>[]
          }
          delete: {
            args: Prisma.PlanejamentoProducaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanejamentoProducaoPayload>
          }
          update: {
            args: Prisma.PlanejamentoProducaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanejamentoProducaoPayload>
          }
          deleteMany: {
            args: Prisma.PlanejamentoProducaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanejamentoProducaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlanejamentoProducaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanejamentoProducaoPayload>[]
          }
          upsert: {
            args: Prisma.PlanejamentoProducaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanejamentoProducaoPayload>
          }
          aggregate: {
            args: Prisma.PlanejamentoProducaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlanejamentoProducao>
          }
          groupBy: {
            args: Prisma.PlanejamentoProducaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanejamentoProducaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanejamentoProducaoCountArgs<ExtArgs>
            result: $Utils.Optional<PlanejamentoProducaoCountAggregateOutputType> | number
          }
        }
      }
      ReceitaPlanejada: {
        payload: Prisma.$ReceitaPlanejadaPayload<ExtArgs>
        fields: Prisma.ReceitaPlanejadaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReceitaPlanejadaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPlanejadaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReceitaPlanejadaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPlanejadaPayload>
          }
          findFirst: {
            args: Prisma.ReceitaPlanejadaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPlanejadaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReceitaPlanejadaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPlanejadaPayload>
          }
          findMany: {
            args: Prisma.ReceitaPlanejadaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPlanejadaPayload>[]
          }
          create: {
            args: Prisma.ReceitaPlanejadaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPlanejadaPayload>
          }
          createMany: {
            args: Prisma.ReceitaPlanejadaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReceitaPlanejadaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPlanejadaPayload>[]
          }
          delete: {
            args: Prisma.ReceitaPlanejadaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPlanejadaPayload>
          }
          update: {
            args: Prisma.ReceitaPlanejadaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPlanejadaPayload>
          }
          deleteMany: {
            args: Prisma.ReceitaPlanejadaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReceitaPlanejadaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReceitaPlanejadaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPlanejadaPayload>[]
          }
          upsert: {
            args: Prisma.ReceitaPlanejadaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPlanejadaPayload>
          }
          aggregate: {
            args: Prisma.ReceitaPlanejadaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceitaPlanejada>
          }
          groupBy: {
            args: Prisma.ReceitaPlanejadaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReceitaPlanejadaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReceitaPlanejadaCountArgs<ExtArgs>
            result: $Utils.Optional<ReceitaPlanejadaCountAggregateOutputType> | number
          }
        }
      }
      ListaCompra: {
        payload: Prisma.$ListaCompraPayload<ExtArgs>
        fields: Prisma.ListaCompraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListaCompraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaCompraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListaCompraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaCompraPayload>
          }
          findFirst: {
            args: Prisma.ListaCompraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaCompraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListaCompraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaCompraPayload>
          }
          findMany: {
            args: Prisma.ListaCompraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaCompraPayload>[]
          }
          create: {
            args: Prisma.ListaCompraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaCompraPayload>
          }
          createMany: {
            args: Prisma.ListaCompraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListaCompraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaCompraPayload>[]
          }
          delete: {
            args: Prisma.ListaCompraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaCompraPayload>
          }
          update: {
            args: Prisma.ListaCompraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaCompraPayload>
          }
          deleteMany: {
            args: Prisma.ListaCompraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListaCompraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListaCompraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaCompraPayload>[]
          }
          upsert: {
            args: Prisma.ListaCompraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListaCompraPayload>
          }
          aggregate: {
            args: Prisma.ListaCompraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListaCompra>
          }
          groupBy: {
            args: Prisma.ListaCompraGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListaCompraGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListaCompraCountArgs<ExtArgs>
            result: $Utils.Optional<ListaCompraCountAggregateOutputType> | number
          }
        }
      }
      EstoqueHistorico: {
        payload: Prisma.$EstoqueHistoricoPayload<ExtArgs>
        fields: Prisma.EstoqueHistoricoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstoqueHistoricoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstoqueHistoricoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstoqueHistoricoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstoqueHistoricoPayload>
          }
          findFirst: {
            args: Prisma.EstoqueHistoricoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstoqueHistoricoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstoqueHistoricoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstoqueHistoricoPayload>
          }
          findMany: {
            args: Prisma.EstoqueHistoricoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstoqueHistoricoPayload>[]
          }
          create: {
            args: Prisma.EstoqueHistoricoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstoqueHistoricoPayload>
          }
          createMany: {
            args: Prisma.EstoqueHistoricoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EstoqueHistoricoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstoqueHistoricoPayload>[]
          }
          delete: {
            args: Prisma.EstoqueHistoricoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstoqueHistoricoPayload>
          }
          update: {
            args: Prisma.EstoqueHistoricoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstoqueHistoricoPayload>
          }
          deleteMany: {
            args: Prisma.EstoqueHistoricoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstoqueHistoricoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EstoqueHistoricoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstoqueHistoricoPayload>[]
          }
          upsert: {
            args: Prisma.EstoqueHistoricoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstoqueHistoricoPayload>
          }
          aggregate: {
            args: Prisma.EstoqueHistoricoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstoqueHistorico>
          }
          groupBy: {
            args: Prisma.EstoqueHistoricoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstoqueHistoricoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstoqueHistoricoCountArgs<ExtArgs>
            result: $Utils.Optional<EstoqueHistoricoCountAggregateOutputType> | number
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
      isolationLevel?: Prisma.TransactionIsolationLevel
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
    usuario?: UsuarioOmit
    insumo?: InsumoOmit
    receita?: ReceitaOmit
    receitaInsumo?: ReceitaInsumoOmit
    planejamentoProducao?: PlanejamentoProducaoOmit
    receitaPlanejada?: ReceitaPlanejadaOmit
    listaCompra?: ListaCompraOmit
    estoqueHistorico?: EstoqueHistoricoOmit
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    historicoMovimentacoes: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historicoMovimentacoes?: boolean | UsuarioCountOutputTypeCountHistoricoMovimentacoesArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountHistoricoMovimentacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstoqueHistoricoWhereInput
  }


  /**
   * Count Type InsumoCountOutputType
   */

  export type InsumoCountOutputType = {
    receitas: number
    historico: number
    ListaCompra: number
  }

  export type InsumoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receitas?: boolean | InsumoCountOutputTypeCountReceitasArgs
    historico?: boolean | InsumoCountOutputTypeCountHistoricoArgs
    ListaCompra?: boolean | InsumoCountOutputTypeCountListaCompraArgs
  }

  // Custom InputTypes
  /**
   * InsumoCountOutputType without action
   */
  export type InsumoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsumoCountOutputType
     */
    select?: InsumoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InsumoCountOutputType without action
   */
  export type InsumoCountOutputTypeCountReceitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceitaInsumoWhereInput
  }

  /**
   * InsumoCountOutputType without action
   */
  export type InsumoCountOutputTypeCountHistoricoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstoqueHistoricoWhereInput
  }

  /**
   * InsumoCountOutputType without action
   */
  export type InsumoCountOutputTypeCountListaCompraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListaCompraWhereInput
  }


  /**
   * Count Type ReceitaCountOutputType
   */

  export type ReceitaCountOutputType = {
    insumos: number
    planejamentos: number
  }

  export type ReceitaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insumos?: boolean | ReceitaCountOutputTypeCountInsumosArgs
    planejamentos?: boolean | ReceitaCountOutputTypeCountPlanejamentosArgs
  }

  // Custom InputTypes
  /**
   * ReceitaCountOutputType without action
   */
  export type ReceitaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaCountOutputType
     */
    select?: ReceitaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReceitaCountOutputType without action
   */
  export type ReceitaCountOutputTypeCountInsumosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceitaInsumoWhereInput
  }

  /**
   * ReceitaCountOutputType without action
   */
  export type ReceitaCountOutputTypeCountPlanejamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceitaPlanejadaWhereInput
  }


  /**
   * Count Type PlanejamentoProducaoCountOutputType
   */

  export type PlanejamentoProducaoCountOutputType = {
    receitas: number
    compras: number
  }

  export type PlanejamentoProducaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receitas?: boolean | PlanejamentoProducaoCountOutputTypeCountReceitasArgs
    compras?: boolean | PlanejamentoProducaoCountOutputTypeCountComprasArgs
  }

  // Custom InputTypes
  /**
   * PlanejamentoProducaoCountOutputType without action
   */
  export type PlanejamentoProducaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanejamentoProducaoCountOutputType
     */
    select?: PlanejamentoProducaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlanejamentoProducaoCountOutputType without action
   */
  export type PlanejamentoProducaoCountOutputTypeCountReceitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceitaPlanejadaWhereInput
  }

  /**
   * PlanejamentoProducaoCountOutputType without action
   */
  export type PlanejamentoProducaoCountOutputTypeCountComprasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListaCompraWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    email: string | null
    senha: string | null
    nome: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    email: string | null
    senha: string | null
    nome: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    email: number
    senha: number
    nome: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    email?: true
    senha?: true
    nome?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    email?: true
    senha?: true
    nome?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    email?: true
    senha?: true
    nome?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    email: string
    senha: string
    nome: string
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    senha?: boolean
    nome?: boolean
    historicoMovimentacoes?: boolean | Usuario$historicoMovimentacoesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    senha?: boolean
    nome?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    senha?: boolean
    nome?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    email?: boolean
    senha?: boolean
    nome?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "senha" | "nome", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historicoMovimentacoes?: boolean | Usuario$historicoMovimentacoesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      historicoMovimentacoes: Prisma.$EstoqueHistoricoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      senha: string
      nome: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    historicoMovimentacoes<T extends Usuario$historicoMovimentacoesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$historicoMovimentacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstoqueHistoricoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly nome: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.historicoMovimentacoes
   */
  export type Usuario$historicoMovimentacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstoqueHistorico
     */
    select?: EstoqueHistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstoqueHistorico
     */
    omit?: EstoqueHistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoqueHistoricoInclude<ExtArgs> | null
    where?: EstoqueHistoricoWhereInput
    orderBy?: EstoqueHistoricoOrderByWithRelationInput | EstoqueHistoricoOrderByWithRelationInput[]
    cursor?: EstoqueHistoricoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EstoqueHistoricoScalarFieldEnum | EstoqueHistoricoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Insumo
   */

  export type AggregateInsumo = {
    _count: InsumoCountAggregateOutputType | null
    _avg: InsumoAvgAggregateOutputType | null
    _sum: InsumoSumAggregateOutputType | null
    _min: InsumoMinAggregateOutputType | null
    _max: InsumoMaxAggregateOutputType | null
  }

  export type InsumoAvgAggregateOutputType = {
    quantidade: number | null
  }

  export type InsumoSumAggregateOutputType = {
    quantidade: number | null
  }

  export type InsumoMinAggregateOutputType = {
    id: string | null
    nome: string | null
    unidade: $Enums.UnidadeMedida | null
    quantidade: number | null
    validade: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InsumoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    unidade: $Enums.UnidadeMedida | null
    quantidade: number | null
    validade: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InsumoCountAggregateOutputType = {
    id: number
    nome: number
    unidade: number
    quantidade: number
    validade: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InsumoAvgAggregateInputType = {
    quantidade?: true
  }

  export type InsumoSumAggregateInputType = {
    quantidade?: true
  }

  export type InsumoMinAggregateInputType = {
    id?: true
    nome?: true
    unidade?: true
    quantidade?: true
    validade?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InsumoMaxAggregateInputType = {
    id?: true
    nome?: true
    unidade?: true
    quantidade?: true
    validade?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InsumoCountAggregateInputType = {
    id?: true
    nome?: true
    unidade?: true
    quantidade?: true
    validade?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InsumoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Insumo to aggregate.
     */
    where?: InsumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insumos to fetch.
     */
    orderBy?: InsumoOrderByWithRelationInput | InsumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InsumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insumos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Insumos
    **/
    _count?: true | InsumoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InsumoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InsumoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InsumoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InsumoMaxAggregateInputType
  }

  export type GetInsumoAggregateType<T extends InsumoAggregateArgs> = {
        [P in keyof T & keyof AggregateInsumo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInsumo[P]>
      : GetScalarType<T[P], AggregateInsumo[P]>
  }




  export type InsumoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InsumoWhereInput
    orderBy?: InsumoOrderByWithAggregationInput | InsumoOrderByWithAggregationInput[]
    by: InsumoScalarFieldEnum[] | InsumoScalarFieldEnum
    having?: InsumoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InsumoCountAggregateInputType | true
    _avg?: InsumoAvgAggregateInputType
    _sum?: InsumoSumAggregateInputType
    _min?: InsumoMinAggregateInputType
    _max?: InsumoMaxAggregateInputType
  }

  export type InsumoGroupByOutputType = {
    id: string
    nome: string
    unidade: $Enums.UnidadeMedida
    quantidade: number
    validade: Date | null
    createdAt: Date
    updatedAt: Date
    _count: InsumoCountAggregateOutputType | null
    _avg: InsumoAvgAggregateOutputType | null
    _sum: InsumoSumAggregateOutputType | null
    _min: InsumoMinAggregateOutputType | null
    _max: InsumoMaxAggregateOutputType | null
  }

  type GetInsumoGroupByPayload<T extends InsumoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InsumoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InsumoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InsumoGroupByOutputType[P]>
            : GetScalarType<T[P], InsumoGroupByOutputType[P]>
        }
      >
    >


  export type InsumoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    unidade?: boolean
    quantidade?: boolean
    validade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    receitas?: boolean | Insumo$receitasArgs<ExtArgs>
    historico?: boolean | Insumo$historicoArgs<ExtArgs>
    ListaCompra?: boolean | Insumo$ListaCompraArgs<ExtArgs>
    _count?: boolean | InsumoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["insumo"]>

  export type InsumoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    unidade?: boolean
    quantidade?: boolean
    validade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["insumo"]>

  export type InsumoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    unidade?: boolean
    quantidade?: boolean
    validade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["insumo"]>

  export type InsumoSelectScalar = {
    id?: boolean
    nome?: boolean
    unidade?: boolean
    quantidade?: boolean
    validade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InsumoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "unidade" | "quantidade" | "validade" | "createdAt" | "updatedAt", ExtArgs["result"]["insumo"]>
  export type InsumoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receitas?: boolean | Insumo$receitasArgs<ExtArgs>
    historico?: boolean | Insumo$historicoArgs<ExtArgs>
    ListaCompra?: boolean | Insumo$ListaCompraArgs<ExtArgs>
    _count?: boolean | InsumoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InsumoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InsumoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InsumoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Insumo"
    objects: {
      receitas: Prisma.$ReceitaInsumoPayload<ExtArgs>[]
      historico: Prisma.$EstoqueHistoricoPayload<ExtArgs>[]
      ListaCompra: Prisma.$ListaCompraPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      unidade: $Enums.UnidadeMedida
      quantidade: number
      validade: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["insumo"]>
    composites: {}
  }

  type InsumoGetPayload<S extends boolean | null | undefined | InsumoDefaultArgs> = $Result.GetResult<Prisma.$InsumoPayload, S>

  type InsumoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InsumoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InsumoCountAggregateInputType | true
    }

  export interface InsumoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Insumo'], meta: { name: 'Insumo' } }
    /**
     * Find zero or one Insumo that matches the filter.
     * @param {InsumoFindUniqueArgs} args - Arguments to find a Insumo
     * @example
     * // Get one Insumo
     * const insumo = await prisma.insumo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InsumoFindUniqueArgs>(args: SelectSubset<T, InsumoFindUniqueArgs<ExtArgs>>): Prisma__InsumoClient<$Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Insumo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InsumoFindUniqueOrThrowArgs} args - Arguments to find a Insumo
     * @example
     * // Get one Insumo
     * const insumo = await prisma.insumo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InsumoFindUniqueOrThrowArgs>(args: SelectSubset<T, InsumoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InsumoClient<$Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Insumo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsumoFindFirstArgs} args - Arguments to find a Insumo
     * @example
     * // Get one Insumo
     * const insumo = await prisma.insumo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InsumoFindFirstArgs>(args?: SelectSubset<T, InsumoFindFirstArgs<ExtArgs>>): Prisma__InsumoClient<$Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Insumo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsumoFindFirstOrThrowArgs} args - Arguments to find a Insumo
     * @example
     * // Get one Insumo
     * const insumo = await prisma.insumo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InsumoFindFirstOrThrowArgs>(args?: SelectSubset<T, InsumoFindFirstOrThrowArgs<ExtArgs>>): Prisma__InsumoClient<$Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Insumos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsumoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Insumos
     * const insumos = await prisma.insumo.findMany()
     * 
     * // Get first 10 Insumos
     * const insumos = await prisma.insumo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const insumoWithIdOnly = await prisma.insumo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InsumoFindManyArgs>(args?: SelectSubset<T, InsumoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Insumo.
     * @param {InsumoCreateArgs} args - Arguments to create a Insumo.
     * @example
     * // Create one Insumo
     * const Insumo = await prisma.insumo.create({
     *   data: {
     *     // ... data to create a Insumo
     *   }
     * })
     * 
     */
    create<T extends InsumoCreateArgs>(args: SelectSubset<T, InsumoCreateArgs<ExtArgs>>): Prisma__InsumoClient<$Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Insumos.
     * @param {InsumoCreateManyArgs} args - Arguments to create many Insumos.
     * @example
     * // Create many Insumos
     * const insumo = await prisma.insumo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InsumoCreateManyArgs>(args?: SelectSubset<T, InsumoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Insumos and returns the data saved in the database.
     * @param {InsumoCreateManyAndReturnArgs} args - Arguments to create many Insumos.
     * @example
     * // Create many Insumos
     * const insumo = await prisma.insumo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Insumos and only return the `id`
     * const insumoWithIdOnly = await prisma.insumo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InsumoCreateManyAndReturnArgs>(args?: SelectSubset<T, InsumoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Insumo.
     * @param {InsumoDeleteArgs} args - Arguments to delete one Insumo.
     * @example
     * // Delete one Insumo
     * const Insumo = await prisma.insumo.delete({
     *   where: {
     *     // ... filter to delete one Insumo
     *   }
     * })
     * 
     */
    delete<T extends InsumoDeleteArgs>(args: SelectSubset<T, InsumoDeleteArgs<ExtArgs>>): Prisma__InsumoClient<$Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Insumo.
     * @param {InsumoUpdateArgs} args - Arguments to update one Insumo.
     * @example
     * // Update one Insumo
     * const insumo = await prisma.insumo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InsumoUpdateArgs>(args: SelectSubset<T, InsumoUpdateArgs<ExtArgs>>): Prisma__InsumoClient<$Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Insumos.
     * @param {InsumoDeleteManyArgs} args - Arguments to filter Insumos to delete.
     * @example
     * // Delete a few Insumos
     * const { count } = await prisma.insumo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InsumoDeleteManyArgs>(args?: SelectSubset<T, InsumoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Insumos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsumoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Insumos
     * const insumo = await prisma.insumo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InsumoUpdateManyArgs>(args: SelectSubset<T, InsumoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Insumos and returns the data updated in the database.
     * @param {InsumoUpdateManyAndReturnArgs} args - Arguments to update many Insumos.
     * @example
     * // Update many Insumos
     * const insumo = await prisma.insumo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Insumos and only return the `id`
     * const insumoWithIdOnly = await prisma.insumo.updateManyAndReturn({
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
    updateManyAndReturn<T extends InsumoUpdateManyAndReturnArgs>(args: SelectSubset<T, InsumoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Insumo.
     * @param {InsumoUpsertArgs} args - Arguments to update or create a Insumo.
     * @example
     * // Update or create a Insumo
     * const insumo = await prisma.insumo.upsert({
     *   create: {
     *     // ... data to create a Insumo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Insumo we want to update
     *   }
     * })
     */
    upsert<T extends InsumoUpsertArgs>(args: SelectSubset<T, InsumoUpsertArgs<ExtArgs>>): Prisma__InsumoClient<$Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Insumos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsumoCountArgs} args - Arguments to filter Insumos to count.
     * @example
     * // Count the number of Insumos
     * const count = await prisma.insumo.count({
     *   where: {
     *     // ... the filter for the Insumos we want to count
     *   }
     * })
    **/
    count<T extends InsumoCountArgs>(
      args?: Subset<T, InsumoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InsumoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Insumo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsumoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InsumoAggregateArgs>(args: Subset<T, InsumoAggregateArgs>): Prisma.PrismaPromise<GetInsumoAggregateType<T>>

    /**
     * Group by Insumo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsumoGroupByArgs} args - Group by arguments.
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
      T extends InsumoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InsumoGroupByArgs['orderBy'] }
        : { orderBy?: InsumoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InsumoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInsumoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Insumo model
   */
  readonly fields: InsumoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Insumo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InsumoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receitas<T extends Insumo$receitasArgs<ExtArgs> = {}>(args?: Subset<T, Insumo$receitasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaInsumoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historico<T extends Insumo$historicoArgs<ExtArgs> = {}>(args?: Subset<T, Insumo$historicoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstoqueHistoricoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ListaCompra<T extends Insumo$ListaCompraArgs<ExtArgs> = {}>(args?: Subset<T, Insumo$ListaCompraArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListaCompraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Insumo model
   */
  interface InsumoFieldRefs {
    readonly id: FieldRef<"Insumo", 'String'>
    readonly nome: FieldRef<"Insumo", 'String'>
    readonly unidade: FieldRef<"Insumo", 'UnidadeMedida'>
    readonly quantidade: FieldRef<"Insumo", 'Float'>
    readonly validade: FieldRef<"Insumo", 'DateTime'>
    readonly createdAt: FieldRef<"Insumo", 'DateTime'>
    readonly updatedAt: FieldRef<"Insumo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Insumo findUnique
   */
  export type InsumoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insumo
     */
    select?: InsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insumo
     */
    omit?: InsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsumoInclude<ExtArgs> | null
    /**
     * Filter, which Insumo to fetch.
     */
    where: InsumoWhereUniqueInput
  }

  /**
   * Insumo findUniqueOrThrow
   */
  export type InsumoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insumo
     */
    select?: InsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insumo
     */
    omit?: InsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsumoInclude<ExtArgs> | null
    /**
     * Filter, which Insumo to fetch.
     */
    where: InsumoWhereUniqueInput
  }

  /**
   * Insumo findFirst
   */
  export type InsumoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insumo
     */
    select?: InsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insumo
     */
    omit?: InsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsumoInclude<ExtArgs> | null
    /**
     * Filter, which Insumo to fetch.
     */
    where?: InsumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insumos to fetch.
     */
    orderBy?: InsumoOrderByWithRelationInput | InsumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Insumos.
     */
    cursor?: InsumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insumos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Insumos.
     */
    distinct?: InsumoScalarFieldEnum | InsumoScalarFieldEnum[]
  }

  /**
   * Insumo findFirstOrThrow
   */
  export type InsumoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insumo
     */
    select?: InsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insumo
     */
    omit?: InsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsumoInclude<ExtArgs> | null
    /**
     * Filter, which Insumo to fetch.
     */
    where?: InsumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insumos to fetch.
     */
    orderBy?: InsumoOrderByWithRelationInput | InsumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Insumos.
     */
    cursor?: InsumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insumos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Insumos.
     */
    distinct?: InsumoScalarFieldEnum | InsumoScalarFieldEnum[]
  }

  /**
   * Insumo findMany
   */
  export type InsumoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insumo
     */
    select?: InsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insumo
     */
    omit?: InsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsumoInclude<ExtArgs> | null
    /**
     * Filter, which Insumos to fetch.
     */
    where?: InsumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insumos to fetch.
     */
    orderBy?: InsumoOrderByWithRelationInput | InsumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Insumos.
     */
    cursor?: InsumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insumos.
     */
    skip?: number
    distinct?: InsumoScalarFieldEnum | InsumoScalarFieldEnum[]
  }

  /**
   * Insumo create
   */
  export type InsumoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insumo
     */
    select?: InsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insumo
     */
    omit?: InsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsumoInclude<ExtArgs> | null
    /**
     * The data needed to create a Insumo.
     */
    data: XOR<InsumoCreateInput, InsumoUncheckedCreateInput>
  }

  /**
   * Insumo createMany
   */
  export type InsumoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Insumos.
     */
    data: InsumoCreateManyInput | InsumoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Insumo createManyAndReturn
   */
  export type InsumoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insumo
     */
    select?: InsumoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Insumo
     */
    omit?: InsumoOmit<ExtArgs> | null
    /**
     * The data used to create many Insumos.
     */
    data: InsumoCreateManyInput | InsumoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Insumo update
   */
  export type InsumoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insumo
     */
    select?: InsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insumo
     */
    omit?: InsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsumoInclude<ExtArgs> | null
    /**
     * The data needed to update a Insumo.
     */
    data: XOR<InsumoUpdateInput, InsumoUncheckedUpdateInput>
    /**
     * Choose, which Insumo to update.
     */
    where: InsumoWhereUniqueInput
  }

  /**
   * Insumo updateMany
   */
  export type InsumoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Insumos.
     */
    data: XOR<InsumoUpdateManyMutationInput, InsumoUncheckedUpdateManyInput>
    /**
     * Filter which Insumos to update
     */
    where?: InsumoWhereInput
    /**
     * Limit how many Insumos to update.
     */
    limit?: number
  }

  /**
   * Insumo updateManyAndReturn
   */
  export type InsumoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insumo
     */
    select?: InsumoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Insumo
     */
    omit?: InsumoOmit<ExtArgs> | null
    /**
     * The data used to update Insumos.
     */
    data: XOR<InsumoUpdateManyMutationInput, InsumoUncheckedUpdateManyInput>
    /**
     * Filter which Insumos to update
     */
    where?: InsumoWhereInput
    /**
     * Limit how many Insumos to update.
     */
    limit?: number
  }

  /**
   * Insumo upsert
   */
  export type InsumoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insumo
     */
    select?: InsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insumo
     */
    omit?: InsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsumoInclude<ExtArgs> | null
    /**
     * The filter to search for the Insumo to update in case it exists.
     */
    where: InsumoWhereUniqueInput
    /**
     * In case the Insumo found by the `where` argument doesn't exist, create a new Insumo with this data.
     */
    create: XOR<InsumoCreateInput, InsumoUncheckedCreateInput>
    /**
     * In case the Insumo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InsumoUpdateInput, InsumoUncheckedUpdateInput>
  }

  /**
   * Insumo delete
   */
  export type InsumoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insumo
     */
    select?: InsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insumo
     */
    omit?: InsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsumoInclude<ExtArgs> | null
    /**
     * Filter which Insumo to delete.
     */
    where: InsumoWhereUniqueInput
  }

  /**
   * Insumo deleteMany
   */
  export type InsumoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Insumos to delete
     */
    where?: InsumoWhereInput
    /**
     * Limit how many Insumos to delete.
     */
    limit?: number
  }

  /**
   * Insumo.receitas
   */
  export type Insumo$receitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaInsumo
     */
    select?: ReceitaInsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaInsumo
     */
    omit?: ReceitaInsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInsumoInclude<ExtArgs> | null
    where?: ReceitaInsumoWhereInput
    orderBy?: ReceitaInsumoOrderByWithRelationInput | ReceitaInsumoOrderByWithRelationInput[]
    cursor?: ReceitaInsumoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceitaInsumoScalarFieldEnum | ReceitaInsumoScalarFieldEnum[]
  }

  /**
   * Insumo.historico
   */
  export type Insumo$historicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstoqueHistorico
     */
    select?: EstoqueHistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstoqueHistorico
     */
    omit?: EstoqueHistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoqueHistoricoInclude<ExtArgs> | null
    where?: EstoqueHistoricoWhereInput
    orderBy?: EstoqueHistoricoOrderByWithRelationInput | EstoqueHistoricoOrderByWithRelationInput[]
    cursor?: EstoqueHistoricoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EstoqueHistoricoScalarFieldEnum | EstoqueHistoricoScalarFieldEnum[]
  }

  /**
   * Insumo.ListaCompra
   */
  export type Insumo$ListaCompraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaCompra
     */
    select?: ListaCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaCompra
     */
    omit?: ListaCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaCompraInclude<ExtArgs> | null
    where?: ListaCompraWhereInput
    orderBy?: ListaCompraOrderByWithRelationInput | ListaCompraOrderByWithRelationInput[]
    cursor?: ListaCompraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListaCompraScalarFieldEnum | ListaCompraScalarFieldEnum[]
  }

  /**
   * Insumo without action
   */
  export type InsumoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insumo
     */
    select?: InsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insumo
     */
    omit?: InsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsumoInclude<ExtArgs> | null
  }


  /**
   * Model Receita
   */

  export type AggregateReceita = {
    _count: ReceitaCountAggregateOutputType | null
    _min: ReceitaMinAggregateOutputType | null
    _max: ReceitaMaxAggregateOutputType | null
  }

  export type ReceitaMinAggregateOutputType = {
    id: string | null
    nome: string | null
    descricao: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReceitaMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    descricao: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReceitaCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReceitaMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReceitaMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReceitaCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReceitaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Receita to aggregate.
     */
    where?: ReceitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receitas to fetch.
     */
    orderBy?: ReceitaOrderByWithRelationInput | ReceitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReceitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Receitas
    **/
    _count?: true | ReceitaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReceitaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReceitaMaxAggregateInputType
  }

  export type GetReceitaAggregateType<T extends ReceitaAggregateArgs> = {
        [P in keyof T & keyof AggregateReceita]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceita[P]>
      : GetScalarType<T[P], AggregateReceita[P]>
  }




  export type ReceitaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceitaWhereInput
    orderBy?: ReceitaOrderByWithAggregationInput | ReceitaOrderByWithAggregationInput[]
    by: ReceitaScalarFieldEnum[] | ReceitaScalarFieldEnum
    having?: ReceitaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReceitaCountAggregateInputType | true
    _min?: ReceitaMinAggregateInputType
    _max?: ReceitaMaxAggregateInputType
  }

  export type ReceitaGroupByOutputType = {
    id: string
    nome: string
    descricao: string | null
    createdAt: Date
    updatedAt: Date
    _count: ReceitaCountAggregateOutputType | null
    _min: ReceitaMinAggregateOutputType | null
    _max: ReceitaMaxAggregateOutputType | null
  }

  type GetReceitaGroupByPayload<T extends ReceitaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReceitaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReceitaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReceitaGroupByOutputType[P]>
            : GetScalarType<T[P], ReceitaGroupByOutputType[P]>
        }
      >
    >


  export type ReceitaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    insumos?: boolean | Receita$insumosArgs<ExtArgs>
    planejamentos?: boolean | Receita$planejamentosArgs<ExtArgs>
    _count?: boolean | ReceitaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receita"]>

  export type ReceitaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["receita"]>

  export type ReceitaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["receita"]>

  export type ReceitaSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReceitaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "createdAt" | "updatedAt", ExtArgs["result"]["receita"]>
  export type ReceitaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insumos?: boolean | Receita$insumosArgs<ExtArgs>
    planejamentos?: boolean | Receita$planejamentosArgs<ExtArgs>
    _count?: boolean | ReceitaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReceitaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ReceitaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ReceitaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Receita"
    objects: {
      insumos: Prisma.$ReceitaInsumoPayload<ExtArgs>[]
      planejamentos: Prisma.$ReceitaPlanejadaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      descricao: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["receita"]>
    composites: {}
  }

  type ReceitaGetPayload<S extends boolean | null | undefined | ReceitaDefaultArgs> = $Result.GetResult<Prisma.$ReceitaPayload, S>

  type ReceitaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReceitaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReceitaCountAggregateInputType | true
    }

  export interface ReceitaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Receita'], meta: { name: 'Receita' } }
    /**
     * Find zero or one Receita that matches the filter.
     * @param {ReceitaFindUniqueArgs} args - Arguments to find a Receita
     * @example
     * // Get one Receita
     * const receita = await prisma.receita.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReceitaFindUniqueArgs>(args: SelectSubset<T, ReceitaFindUniqueArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Receita that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReceitaFindUniqueOrThrowArgs} args - Arguments to find a Receita
     * @example
     * // Get one Receita
     * const receita = await prisma.receita.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReceitaFindUniqueOrThrowArgs>(args: SelectSubset<T, ReceitaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receita that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaFindFirstArgs} args - Arguments to find a Receita
     * @example
     * // Get one Receita
     * const receita = await prisma.receita.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReceitaFindFirstArgs>(args?: SelectSubset<T, ReceitaFindFirstArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receita that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaFindFirstOrThrowArgs} args - Arguments to find a Receita
     * @example
     * // Get one Receita
     * const receita = await prisma.receita.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReceitaFindFirstOrThrowArgs>(args?: SelectSubset<T, ReceitaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Receitas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Receitas
     * const receitas = await prisma.receita.findMany()
     * 
     * // Get first 10 Receitas
     * const receitas = await prisma.receita.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const receitaWithIdOnly = await prisma.receita.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReceitaFindManyArgs>(args?: SelectSubset<T, ReceitaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Receita.
     * @param {ReceitaCreateArgs} args - Arguments to create a Receita.
     * @example
     * // Create one Receita
     * const Receita = await prisma.receita.create({
     *   data: {
     *     // ... data to create a Receita
     *   }
     * })
     * 
     */
    create<T extends ReceitaCreateArgs>(args: SelectSubset<T, ReceitaCreateArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Receitas.
     * @param {ReceitaCreateManyArgs} args - Arguments to create many Receitas.
     * @example
     * // Create many Receitas
     * const receita = await prisma.receita.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReceitaCreateManyArgs>(args?: SelectSubset<T, ReceitaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Receitas and returns the data saved in the database.
     * @param {ReceitaCreateManyAndReturnArgs} args - Arguments to create many Receitas.
     * @example
     * // Create many Receitas
     * const receita = await prisma.receita.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Receitas and only return the `id`
     * const receitaWithIdOnly = await prisma.receita.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReceitaCreateManyAndReturnArgs>(args?: SelectSubset<T, ReceitaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Receita.
     * @param {ReceitaDeleteArgs} args - Arguments to delete one Receita.
     * @example
     * // Delete one Receita
     * const Receita = await prisma.receita.delete({
     *   where: {
     *     // ... filter to delete one Receita
     *   }
     * })
     * 
     */
    delete<T extends ReceitaDeleteArgs>(args: SelectSubset<T, ReceitaDeleteArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Receita.
     * @param {ReceitaUpdateArgs} args - Arguments to update one Receita.
     * @example
     * // Update one Receita
     * const receita = await prisma.receita.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReceitaUpdateArgs>(args: SelectSubset<T, ReceitaUpdateArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Receitas.
     * @param {ReceitaDeleteManyArgs} args - Arguments to filter Receitas to delete.
     * @example
     * // Delete a few Receitas
     * const { count } = await prisma.receita.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReceitaDeleteManyArgs>(args?: SelectSubset<T, ReceitaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Receitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Receitas
     * const receita = await prisma.receita.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReceitaUpdateManyArgs>(args: SelectSubset<T, ReceitaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Receitas and returns the data updated in the database.
     * @param {ReceitaUpdateManyAndReturnArgs} args - Arguments to update many Receitas.
     * @example
     * // Update many Receitas
     * const receita = await prisma.receita.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Receitas and only return the `id`
     * const receitaWithIdOnly = await prisma.receita.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReceitaUpdateManyAndReturnArgs>(args: SelectSubset<T, ReceitaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Receita.
     * @param {ReceitaUpsertArgs} args - Arguments to update or create a Receita.
     * @example
     * // Update or create a Receita
     * const receita = await prisma.receita.upsert({
     *   create: {
     *     // ... data to create a Receita
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Receita we want to update
     *   }
     * })
     */
    upsert<T extends ReceitaUpsertArgs>(args: SelectSubset<T, ReceitaUpsertArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Receitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaCountArgs} args - Arguments to filter Receitas to count.
     * @example
     * // Count the number of Receitas
     * const count = await prisma.receita.count({
     *   where: {
     *     // ... the filter for the Receitas we want to count
     *   }
     * })
    **/
    count<T extends ReceitaCountArgs>(
      args?: Subset<T, ReceitaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReceitaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Receita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReceitaAggregateArgs>(args: Subset<T, ReceitaAggregateArgs>): Prisma.PrismaPromise<GetReceitaAggregateType<T>>

    /**
     * Group by Receita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaGroupByArgs} args - Group by arguments.
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
      T extends ReceitaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReceitaGroupByArgs['orderBy'] }
        : { orderBy?: ReceitaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReceitaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceitaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Receita model
   */
  readonly fields: ReceitaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Receita.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReceitaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    insumos<T extends Receita$insumosArgs<ExtArgs> = {}>(args?: Subset<T, Receita$insumosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaInsumoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    planejamentos<T extends Receita$planejamentosArgs<ExtArgs> = {}>(args?: Subset<T, Receita$planejamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaPlanejadaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Receita model
   */
  interface ReceitaFieldRefs {
    readonly id: FieldRef<"Receita", 'String'>
    readonly nome: FieldRef<"Receita", 'String'>
    readonly descricao: FieldRef<"Receita", 'String'>
    readonly createdAt: FieldRef<"Receita", 'DateTime'>
    readonly updatedAt: FieldRef<"Receita", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Receita findUnique
   */
  export type ReceitaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * Filter, which Receita to fetch.
     */
    where: ReceitaWhereUniqueInput
  }

  /**
   * Receita findUniqueOrThrow
   */
  export type ReceitaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * Filter, which Receita to fetch.
     */
    where: ReceitaWhereUniqueInput
  }

  /**
   * Receita findFirst
   */
  export type ReceitaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * Filter, which Receita to fetch.
     */
    where?: ReceitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receitas to fetch.
     */
    orderBy?: ReceitaOrderByWithRelationInput | ReceitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Receitas.
     */
    cursor?: ReceitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Receitas.
     */
    distinct?: ReceitaScalarFieldEnum | ReceitaScalarFieldEnum[]
  }

  /**
   * Receita findFirstOrThrow
   */
  export type ReceitaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * Filter, which Receita to fetch.
     */
    where?: ReceitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receitas to fetch.
     */
    orderBy?: ReceitaOrderByWithRelationInput | ReceitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Receitas.
     */
    cursor?: ReceitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Receitas.
     */
    distinct?: ReceitaScalarFieldEnum | ReceitaScalarFieldEnum[]
  }

  /**
   * Receita findMany
   */
  export type ReceitaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * Filter, which Receitas to fetch.
     */
    where?: ReceitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receitas to fetch.
     */
    orderBy?: ReceitaOrderByWithRelationInput | ReceitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Receitas.
     */
    cursor?: ReceitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receitas.
     */
    skip?: number
    distinct?: ReceitaScalarFieldEnum | ReceitaScalarFieldEnum[]
  }

  /**
   * Receita create
   */
  export type ReceitaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * The data needed to create a Receita.
     */
    data: XOR<ReceitaCreateInput, ReceitaUncheckedCreateInput>
  }

  /**
   * Receita createMany
   */
  export type ReceitaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Receitas.
     */
    data: ReceitaCreateManyInput | ReceitaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Receita createManyAndReturn
   */
  export type ReceitaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * The data used to create many Receitas.
     */
    data: ReceitaCreateManyInput | ReceitaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Receita update
   */
  export type ReceitaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * The data needed to update a Receita.
     */
    data: XOR<ReceitaUpdateInput, ReceitaUncheckedUpdateInput>
    /**
     * Choose, which Receita to update.
     */
    where: ReceitaWhereUniqueInput
  }

  /**
   * Receita updateMany
   */
  export type ReceitaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Receitas.
     */
    data: XOR<ReceitaUpdateManyMutationInput, ReceitaUncheckedUpdateManyInput>
    /**
     * Filter which Receitas to update
     */
    where?: ReceitaWhereInput
    /**
     * Limit how many Receitas to update.
     */
    limit?: number
  }

  /**
   * Receita updateManyAndReturn
   */
  export type ReceitaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * The data used to update Receitas.
     */
    data: XOR<ReceitaUpdateManyMutationInput, ReceitaUncheckedUpdateManyInput>
    /**
     * Filter which Receitas to update
     */
    where?: ReceitaWhereInput
    /**
     * Limit how many Receitas to update.
     */
    limit?: number
  }

  /**
   * Receita upsert
   */
  export type ReceitaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * The filter to search for the Receita to update in case it exists.
     */
    where: ReceitaWhereUniqueInput
    /**
     * In case the Receita found by the `where` argument doesn't exist, create a new Receita with this data.
     */
    create: XOR<ReceitaCreateInput, ReceitaUncheckedCreateInput>
    /**
     * In case the Receita was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReceitaUpdateInput, ReceitaUncheckedUpdateInput>
  }

  /**
   * Receita delete
   */
  export type ReceitaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * Filter which Receita to delete.
     */
    where: ReceitaWhereUniqueInput
  }

  /**
   * Receita deleteMany
   */
  export type ReceitaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Receitas to delete
     */
    where?: ReceitaWhereInput
    /**
     * Limit how many Receitas to delete.
     */
    limit?: number
  }

  /**
   * Receita.insumos
   */
  export type Receita$insumosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaInsumo
     */
    select?: ReceitaInsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaInsumo
     */
    omit?: ReceitaInsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInsumoInclude<ExtArgs> | null
    where?: ReceitaInsumoWhereInput
    orderBy?: ReceitaInsumoOrderByWithRelationInput | ReceitaInsumoOrderByWithRelationInput[]
    cursor?: ReceitaInsumoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceitaInsumoScalarFieldEnum | ReceitaInsumoScalarFieldEnum[]
  }

  /**
   * Receita.planejamentos
   */
  export type Receita$planejamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaPlanejada
     */
    select?: ReceitaPlanejadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaPlanejada
     */
    omit?: ReceitaPlanejadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaPlanejadaInclude<ExtArgs> | null
    where?: ReceitaPlanejadaWhereInput
    orderBy?: ReceitaPlanejadaOrderByWithRelationInput | ReceitaPlanejadaOrderByWithRelationInput[]
    cursor?: ReceitaPlanejadaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceitaPlanejadaScalarFieldEnum | ReceitaPlanejadaScalarFieldEnum[]
  }

  /**
   * Receita without action
   */
  export type ReceitaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
  }


  /**
   * Model ReceitaInsumo
   */

  export type AggregateReceitaInsumo = {
    _count: ReceitaInsumoCountAggregateOutputType | null
    _avg: ReceitaInsumoAvgAggregateOutputType | null
    _sum: ReceitaInsumoSumAggregateOutputType | null
    _min: ReceitaInsumoMinAggregateOutputType | null
    _max: ReceitaInsumoMaxAggregateOutputType | null
  }

  export type ReceitaInsumoAvgAggregateOutputType = {
    quantidade: number | null
  }

  export type ReceitaInsumoSumAggregateOutputType = {
    quantidade: number | null
  }

  export type ReceitaInsumoMinAggregateOutputType = {
    id: string | null
    receitaId: string | null
    insumoId: string | null
    quantidade: number | null
  }

  export type ReceitaInsumoMaxAggregateOutputType = {
    id: string | null
    receitaId: string | null
    insumoId: string | null
    quantidade: number | null
  }

  export type ReceitaInsumoCountAggregateOutputType = {
    id: number
    receitaId: number
    insumoId: number
    quantidade: number
    _all: number
  }


  export type ReceitaInsumoAvgAggregateInputType = {
    quantidade?: true
  }

  export type ReceitaInsumoSumAggregateInputType = {
    quantidade?: true
  }

  export type ReceitaInsumoMinAggregateInputType = {
    id?: true
    receitaId?: true
    insumoId?: true
    quantidade?: true
  }

  export type ReceitaInsumoMaxAggregateInputType = {
    id?: true
    receitaId?: true
    insumoId?: true
    quantidade?: true
  }

  export type ReceitaInsumoCountAggregateInputType = {
    id?: true
    receitaId?: true
    insumoId?: true
    quantidade?: true
    _all?: true
  }

  export type ReceitaInsumoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReceitaInsumo to aggregate.
     */
    where?: ReceitaInsumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceitaInsumos to fetch.
     */
    orderBy?: ReceitaInsumoOrderByWithRelationInput | ReceitaInsumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReceitaInsumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceitaInsumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceitaInsumos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReceitaInsumos
    **/
    _count?: true | ReceitaInsumoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReceitaInsumoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReceitaInsumoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReceitaInsumoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReceitaInsumoMaxAggregateInputType
  }

  export type GetReceitaInsumoAggregateType<T extends ReceitaInsumoAggregateArgs> = {
        [P in keyof T & keyof AggregateReceitaInsumo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceitaInsumo[P]>
      : GetScalarType<T[P], AggregateReceitaInsumo[P]>
  }




  export type ReceitaInsumoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceitaInsumoWhereInput
    orderBy?: ReceitaInsumoOrderByWithAggregationInput | ReceitaInsumoOrderByWithAggregationInput[]
    by: ReceitaInsumoScalarFieldEnum[] | ReceitaInsumoScalarFieldEnum
    having?: ReceitaInsumoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReceitaInsumoCountAggregateInputType | true
    _avg?: ReceitaInsumoAvgAggregateInputType
    _sum?: ReceitaInsumoSumAggregateInputType
    _min?: ReceitaInsumoMinAggregateInputType
    _max?: ReceitaInsumoMaxAggregateInputType
  }

  export type ReceitaInsumoGroupByOutputType = {
    id: string
    receitaId: string
    insumoId: string
    quantidade: number
    _count: ReceitaInsumoCountAggregateOutputType | null
    _avg: ReceitaInsumoAvgAggregateOutputType | null
    _sum: ReceitaInsumoSumAggregateOutputType | null
    _min: ReceitaInsumoMinAggregateOutputType | null
    _max: ReceitaInsumoMaxAggregateOutputType | null
  }

  type GetReceitaInsumoGroupByPayload<T extends ReceitaInsumoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReceitaInsumoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReceitaInsumoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReceitaInsumoGroupByOutputType[P]>
            : GetScalarType<T[P], ReceitaInsumoGroupByOutputType[P]>
        }
      >
    >


  export type ReceitaInsumoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    receitaId?: boolean
    insumoId?: boolean
    quantidade?: boolean
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
    insumo?: boolean | InsumoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receitaInsumo"]>

  export type ReceitaInsumoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    receitaId?: boolean
    insumoId?: boolean
    quantidade?: boolean
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
    insumo?: boolean | InsumoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receitaInsumo"]>

  export type ReceitaInsumoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    receitaId?: boolean
    insumoId?: boolean
    quantidade?: boolean
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
    insumo?: boolean | InsumoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receitaInsumo"]>

  export type ReceitaInsumoSelectScalar = {
    id?: boolean
    receitaId?: boolean
    insumoId?: boolean
    quantidade?: boolean
  }

  export type ReceitaInsumoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "receitaId" | "insumoId" | "quantidade", ExtArgs["result"]["receitaInsumo"]>
  export type ReceitaInsumoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
    insumo?: boolean | InsumoDefaultArgs<ExtArgs>
  }
  export type ReceitaInsumoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
    insumo?: boolean | InsumoDefaultArgs<ExtArgs>
  }
  export type ReceitaInsumoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
    insumo?: boolean | InsumoDefaultArgs<ExtArgs>
  }

  export type $ReceitaInsumoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReceitaInsumo"
    objects: {
      receita: Prisma.$ReceitaPayload<ExtArgs>
      insumo: Prisma.$InsumoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      receitaId: string
      insumoId: string
      quantidade: number
    }, ExtArgs["result"]["receitaInsumo"]>
    composites: {}
  }

  type ReceitaInsumoGetPayload<S extends boolean | null | undefined | ReceitaInsumoDefaultArgs> = $Result.GetResult<Prisma.$ReceitaInsumoPayload, S>

  type ReceitaInsumoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReceitaInsumoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReceitaInsumoCountAggregateInputType | true
    }

  export interface ReceitaInsumoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReceitaInsumo'], meta: { name: 'ReceitaInsumo' } }
    /**
     * Find zero or one ReceitaInsumo that matches the filter.
     * @param {ReceitaInsumoFindUniqueArgs} args - Arguments to find a ReceitaInsumo
     * @example
     * // Get one ReceitaInsumo
     * const receitaInsumo = await prisma.receitaInsumo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReceitaInsumoFindUniqueArgs>(args: SelectSubset<T, ReceitaInsumoFindUniqueArgs<ExtArgs>>): Prisma__ReceitaInsumoClient<$Result.GetResult<Prisma.$ReceitaInsumoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReceitaInsumo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReceitaInsumoFindUniqueOrThrowArgs} args - Arguments to find a ReceitaInsumo
     * @example
     * // Get one ReceitaInsumo
     * const receitaInsumo = await prisma.receitaInsumo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReceitaInsumoFindUniqueOrThrowArgs>(args: SelectSubset<T, ReceitaInsumoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReceitaInsumoClient<$Result.GetResult<Prisma.$ReceitaInsumoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReceitaInsumo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaInsumoFindFirstArgs} args - Arguments to find a ReceitaInsumo
     * @example
     * // Get one ReceitaInsumo
     * const receitaInsumo = await prisma.receitaInsumo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReceitaInsumoFindFirstArgs>(args?: SelectSubset<T, ReceitaInsumoFindFirstArgs<ExtArgs>>): Prisma__ReceitaInsumoClient<$Result.GetResult<Prisma.$ReceitaInsumoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReceitaInsumo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaInsumoFindFirstOrThrowArgs} args - Arguments to find a ReceitaInsumo
     * @example
     * // Get one ReceitaInsumo
     * const receitaInsumo = await prisma.receitaInsumo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReceitaInsumoFindFirstOrThrowArgs>(args?: SelectSubset<T, ReceitaInsumoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReceitaInsumoClient<$Result.GetResult<Prisma.$ReceitaInsumoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReceitaInsumos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaInsumoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReceitaInsumos
     * const receitaInsumos = await prisma.receitaInsumo.findMany()
     * 
     * // Get first 10 ReceitaInsumos
     * const receitaInsumos = await prisma.receitaInsumo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const receitaInsumoWithIdOnly = await prisma.receitaInsumo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReceitaInsumoFindManyArgs>(args?: SelectSubset<T, ReceitaInsumoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaInsumoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReceitaInsumo.
     * @param {ReceitaInsumoCreateArgs} args - Arguments to create a ReceitaInsumo.
     * @example
     * // Create one ReceitaInsumo
     * const ReceitaInsumo = await prisma.receitaInsumo.create({
     *   data: {
     *     // ... data to create a ReceitaInsumo
     *   }
     * })
     * 
     */
    create<T extends ReceitaInsumoCreateArgs>(args: SelectSubset<T, ReceitaInsumoCreateArgs<ExtArgs>>): Prisma__ReceitaInsumoClient<$Result.GetResult<Prisma.$ReceitaInsumoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReceitaInsumos.
     * @param {ReceitaInsumoCreateManyArgs} args - Arguments to create many ReceitaInsumos.
     * @example
     * // Create many ReceitaInsumos
     * const receitaInsumo = await prisma.receitaInsumo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReceitaInsumoCreateManyArgs>(args?: SelectSubset<T, ReceitaInsumoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReceitaInsumos and returns the data saved in the database.
     * @param {ReceitaInsumoCreateManyAndReturnArgs} args - Arguments to create many ReceitaInsumos.
     * @example
     * // Create many ReceitaInsumos
     * const receitaInsumo = await prisma.receitaInsumo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReceitaInsumos and only return the `id`
     * const receitaInsumoWithIdOnly = await prisma.receitaInsumo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReceitaInsumoCreateManyAndReturnArgs>(args?: SelectSubset<T, ReceitaInsumoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaInsumoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReceitaInsumo.
     * @param {ReceitaInsumoDeleteArgs} args - Arguments to delete one ReceitaInsumo.
     * @example
     * // Delete one ReceitaInsumo
     * const ReceitaInsumo = await prisma.receitaInsumo.delete({
     *   where: {
     *     // ... filter to delete one ReceitaInsumo
     *   }
     * })
     * 
     */
    delete<T extends ReceitaInsumoDeleteArgs>(args: SelectSubset<T, ReceitaInsumoDeleteArgs<ExtArgs>>): Prisma__ReceitaInsumoClient<$Result.GetResult<Prisma.$ReceitaInsumoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReceitaInsumo.
     * @param {ReceitaInsumoUpdateArgs} args - Arguments to update one ReceitaInsumo.
     * @example
     * // Update one ReceitaInsumo
     * const receitaInsumo = await prisma.receitaInsumo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReceitaInsumoUpdateArgs>(args: SelectSubset<T, ReceitaInsumoUpdateArgs<ExtArgs>>): Prisma__ReceitaInsumoClient<$Result.GetResult<Prisma.$ReceitaInsumoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReceitaInsumos.
     * @param {ReceitaInsumoDeleteManyArgs} args - Arguments to filter ReceitaInsumos to delete.
     * @example
     * // Delete a few ReceitaInsumos
     * const { count } = await prisma.receitaInsumo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReceitaInsumoDeleteManyArgs>(args?: SelectSubset<T, ReceitaInsumoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReceitaInsumos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaInsumoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReceitaInsumos
     * const receitaInsumo = await prisma.receitaInsumo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReceitaInsumoUpdateManyArgs>(args: SelectSubset<T, ReceitaInsumoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReceitaInsumos and returns the data updated in the database.
     * @param {ReceitaInsumoUpdateManyAndReturnArgs} args - Arguments to update many ReceitaInsumos.
     * @example
     * // Update many ReceitaInsumos
     * const receitaInsumo = await prisma.receitaInsumo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReceitaInsumos and only return the `id`
     * const receitaInsumoWithIdOnly = await prisma.receitaInsumo.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReceitaInsumoUpdateManyAndReturnArgs>(args: SelectSubset<T, ReceitaInsumoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaInsumoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReceitaInsumo.
     * @param {ReceitaInsumoUpsertArgs} args - Arguments to update or create a ReceitaInsumo.
     * @example
     * // Update or create a ReceitaInsumo
     * const receitaInsumo = await prisma.receitaInsumo.upsert({
     *   create: {
     *     // ... data to create a ReceitaInsumo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReceitaInsumo we want to update
     *   }
     * })
     */
    upsert<T extends ReceitaInsumoUpsertArgs>(args: SelectSubset<T, ReceitaInsumoUpsertArgs<ExtArgs>>): Prisma__ReceitaInsumoClient<$Result.GetResult<Prisma.$ReceitaInsumoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReceitaInsumos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaInsumoCountArgs} args - Arguments to filter ReceitaInsumos to count.
     * @example
     * // Count the number of ReceitaInsumos
     * const count = await prisma.receitaInsumo.count({
     *   where: {
     *     // ... the filter for the ReceitaInsumos we want to count
     *   }
     * })
    **/
    count<T extends ReceitaInsumoCountArgs>(
      args?: Subset<T, ReceitaInsumoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReceitaInsumoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReceitaInsumo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaInsumoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReceitaInsumoAggregateArgs>(args: Subset<T, ReceitaInsumoAggregateArgs>): Prisma.PrismaPromise<GetReceitaInsumoAggregateType<T>>

    /**
     * Group by ReceitaInsumo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaInsumoGroupByArgs} args - Group by arguments.
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
      T extends ReceitaInsumoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReceitaInsumoGroupByArgs['orderBy'] }
        : { orderBy?: ReceitaInsumoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReceitaInsumoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceitaInsumoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReceitaInsumo model
   */
  readonly fields: ReceitaInsumoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReceitaInsumo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReceitaInsumoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receita<T extends ReceitaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReceitaDefaultArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    insumo<T extends InsumoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InsumoDefaultArgs<ExtArgs>>): Prisma__InsumoClient<$Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ReceitaInsumo model
   */
  interface ReceitaInsumoFieldRefs {
    readonly id: FieldRef<"ReceitaInsumo", 'String'>
    readonly receitaId: FieldRef<"ReceitaInsumo", 'String'>
    readonly insumoId: FieldRef<"ReceitaInsumo", 'String'>
    readonly quantidade: FieldRef<"ReceitaInsumo", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ReceitaInsumo findUnique
   */
  export type ReceitaInsumoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaInsumo
     */
    select?: ReceitaInsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaInsumo
     */
    omit?: ReceitaInsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInsumoInclude<ExtArgs> | null
    /**
     * Filter, which ReceitaInsumo to fetch.
     */
    where: ReceitaInsumoWhereUniqueInput
  }

  /**
   * ReceitaInsumo findUniqueOrThrow
   */
  export type ReceitaInsumoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaInsumo
     */
    select?: ReceitaInsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaInsumo
     */
    omit?: ReceitaInsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInsumoInclude<ExtArgs> | null
    /**
     * Filter, which ReceitaInsumo to fetch.
     */
    where: ReceitaInsumoWhereUniqueInput
  }

  /**
   * ReceitaInsumo findFirst
   */
  export type ReceitaInsumoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaInsumo
     */
    select?: ReceitaInsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaInsumo
     */
    omit?: ReceitaInsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInsumoInclude<ExtArgs> | null
    /**
     * Filter, which ReceitaInsumo to fetch.
     */
    where?: ReceitaInsumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceitaInsumos to fetch.
     */
    orderBy?: ReceitaInsumoOrderByWithRelationInput | ReceitaInsumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReceitaInsumos.
     */
    cursor?: ReceitaInsumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceitaInsumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceitaInsumos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReceitaInsumos.
     */
    distinct?: ReceitaInsumoScalarFieldEnum | ReceitaInsumoScalarFieldEnum[]
  }

  /**
   * ReceitaInsumo findFirstOrThrow
   */
  export type ReceitaInsumoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaInsumo
     */
    select?: ReceitaInsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaInsumo
     */
    omit?: ReceitaInsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInsumoInclude<ExtArgs> | null
    /**
     * Filter, which ReceitaInsumo to fetch.
     */
    where?: ReceitaInsumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceitaInsumos to fetch.
     */
    orderBy?: ReceitaInsumoOrderByWithRelationInput | ReceitaInsumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReceitaInsumos.
     */
    cursor?: ReceitaInsumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceitaInsumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceitaInsumos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReceitaInsumos.
     */
    distinct?: ReceitaInsumoScalarFieldEnum | ReceitaInsumoScalarFieldEnum[]
  }

  /**
   * ReceitaInsumo findMany
   */
  export type ReceitaInsumoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaInsumo
     */
    select?: ReceitaInsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaInsumo
     */
    omit?: ReceitaInsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInsumoInclude<ExtArgs> | null
    /**
     * Filter, which ReceitaInsumos to fetch.
     */
    where?: ReceitaInsumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceitaInsumos to fetch.
     */
    orderBy?: ReceitaInsumoOrderByWithRelationInput | ReceitaInsumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReceitaInsumos.
     */
    cursor?: ReceitaInsumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceitaInsumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceitaInsumos.
     */
    skip?: number
    distinct?: ReceitaInsumoScalarFieldEnum | ReceitaInsumoScalarFieldEnum[]
  }

  /**
   * ReceitaInsumo create
   */
  export type ReceitaInsumoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaInsumo
     */
    select?: ReceitaInsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaInsumo
     */
    omit?: ReceitaInsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInsumoInclude<ExtArgs> | null
    /**
     * The data needed to create a ReceitaInsumo.
     */
    data: XOR<ReceitaInsumoCreateInput, ReceitaInsumoUncheckedCreateInput>
  }

  /**
   * ReceitaInsumo createMany
   */
  export type ReceitaInsumoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReceitaInsumos.
     */
    data: ReceitaInsumoCreateManyInput | ReceitaInsumoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReceitaInsumo createManyAndReturn
   */
  export type ReceitaInsumoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaInsumo
     */
    select?: ReceitaInsumoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaInsumo
     */
    omit?: ReceitaInsumoOmit<ExtArgs> | null
    /**
     * The data used to create many ReceitaInsumos.
     */
    data: ReceitaInsumoCreateManyInput | ReceitaInsumoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInsumoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReceitaInsumo update
   */
  export type ReceitaInsumoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaInsumo
     */
    select?: ReceitaInsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaInsumo
     */
    omit?: ReceitaInsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInsumoInclude<ExtArgs> | null
    /**
     * The data needed to update a ReceitaInsumo.
     */
    data: XOR<ReceitaInsumoUpdateInput, ReceitaInsumoUncheckedUpdateInput>
    /**
     * Choose, which ReceitaInsumo to update.
     */
    where: ReceitaInsumoWhereUniqueInput
  }

  /**
   * ReceitaInsumo updateMany
   */
  export type ReceitaInsumoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReceitaInsumos.
     */
    data: XOR<ReceitaInsumoUpdateManyMutationInput, ReceitaInsumoUncheckedUpdateManyInput>
    /**
     * Filter which ReceitaInsumos to update
     */
    where?: ReceitaInsumoWhereInput
    /**
     * Limit how many ReceitaInsumos to update.
     */
    limit?: number
  }

  /**
   * ReceitaInsumo updateManyAndReturn
   */
  export type ReceitaInsumoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaInsumo
     */
    select?: ReceitaInsumoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaInsumo
     */
    omit?: ReceitaInsumoOmit<ExtArgs> | null
    /**
     * The data used to update ReceitaInsumos.
     */
    data: XOR<ReceitaInsumoUpdateManyMutationInput, ReceitaInsumoUncheckedUpdateManyInput>
    /**
     * Filter which ReceitaInsumos to update
     */
    where?: ReceitaInsumoWhereInput
    /**
     * Limit how many ReceitaInsumos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInsumoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReceitaInsumo upsert
   */
  export type ReceitaInsumoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaInsumo
     */
    select?: ReceitaInsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaInsumo
     */
    omit?: ReceitaInsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInsumoInclude<ExtArgs> | null
    /**
     * The filter to search for the ReceitaInsumo to update in case it exists.
     */
    where: ReceitaInsumoWhereUniqueInput
    /**
     * In case the ReceitaInsumo found by the `where` argument doesn't exist, create a new ReceitaInsumo with this data.
     */
    create: XOR<ReceitaInsumoCreateInput, ReceitaInsumoUncheckedCreateInput>
    /**
     * In case the ReceitaInsumo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReceitaInsumoUpdateInput, ReceitaInsumoUncheckedUpdateInput>
  }

  /**
   * ReceitaInsumo delete
   */
  export type ReceitaInsumoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaInsumo
     */
    select?: ReceitaInsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaInsumo
     */
    omit?: ReceitaInsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInsumoInclude<ExtArgs> | null
    /**
     * Filter which ReceitaInsumo to delete.
     */
    where: ReceitaInsumoWhereUniqueInput
  }

  /**
   * ReceitaInsumo deleteMany
   */
  export type ReceitaInsumoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReceitaInsumos to delete
     */
    where?: ReceitaInsumoWhereInput
    /**
     * Limit how many ReceitaInsumos to delete.
     */
    limit?: number
  }

  /**
   * ReceitaInsumo without action
   */
  export type ReceitaInsumoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaInsumo
     */
    select?: ReceitaInsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaInsumo
     */
    omit?: ReceitaInsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInsumoInclude<ExtArgs> | null
  }


  /**
   * Model PlanejamentoProducao
   */

  export type AggregatePlanejamentoProducao = {
    _count: PlanejamentoProducaoCountAggregateOutputType | null
    _min: PlanejamentoProducaoMinAggregateOutputType | null
    _max: PlanejamentoProducaoMaxAggregateOutputType | null
  }

  export type PlanejamentoProducaoMinAggregateOutputType = {
    id: string | null
    dataCriacao: Date | null
    confirmado: boolean | null
  }

  export type PlanejamentoProducaoMaxAggregateOutputType = {
    id: string | null
    dataCriacao: Date | null
    confirmado: boolean | null
  }

  export type PlanejamentoProducaoCountAggregateOutputType = {
    id: number
    dataCriacao: number
    confirmado: number
    _all: number
  }


  export type PlanejamentoProducaoMinAggregateInputType = {
    id?: true
    dataCriacao?: true
    confirmado?: true
  }

  export type PlanejamentoProducaoMaxAggregateInputType = {
    id?: true
    dataCriacao?: true
    confirmado?: true
  }

  export type PlanejamentoProducaoCountAggregateInputType = {
    id?: true
    dataCriacao?: true
    confirmado?: true
    _all?: true
  }

  export type PlanejamentoProducaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanejamentoProducao to aggregate.
     */
    where?: PlanejamentoProducaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanejamentoProducaos to fetch.
     */
    orderBy?: PlanejamentoProducaoOrderByWithRelationInput | PlanejamentoProducaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanejamentoProducaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanejamentoProducaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanejamentoProducaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlanejamentoProducaos
    **/
    _count?: true | PlanejamentoProducaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanejamentoProducaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanejamentoProducaoMaxAggregateInputType
  }

  export type GetPlanejamentoProducaoAggregateType<T extends PlanejamentoProducaoAggregateArgs> = {
        [P in keyof T & keyof AggregatePlanejamentoProducao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlanejamentoProducao[P]>
      : GetScalarType<T[P], AggregatePlanejamentoProducao[P]>
  }




  export type PlanejamentoProducaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanejamentoProducaoWhereInput
    orderBy?: PlanejamentoProducaoOrderByWithAggregationInput | PlanejamentoProducaoOrderByWithAggregationInput[]
    by: PlanejamentoProducaoScalarFieldEnum[] | PlanejamentoProducaoScalarFieldEnum
    having?: PlanejamentoProducaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanejamentoProducaoCountAggregateInputType | true
    _min?: PlanejamentoProducaoMinAggregateInputType
    _max?: PlanejamentoProducaoMaxAggregateInputType
  }

  export type PlanejamentoProducaoGroupByOutputType = {
    id: string
    dataCriacao: Date
    confirmado: boolean
    _count: PlanejamentoProducaoCountAggregateOutputType | null
    _min: PlanejamentoProducaoMinAggregateOutputType | null
    _max: PlanejamentoProducaoMaxAggregateOutputType | null
  }

  type GetPlanejamentoProducaoGroupByPayload<T extends PlanejamentoProducaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanejamentoProducaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanejamentoProducaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanejamentoProducaoGroupByOutputType[P]>
            : GetScalarType<T[P], PlanejamentoProducaoGroupByOutputType[P]>
        }
      >
    >


  export type PlanejamentoProducaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataCriacao?: boolean
    confirmado?: boolean
    receitas?: boolean | PlanejamentoProducao$receitasArgs<ExtArgs>
    compras?: boolean | PlanejamentoProducao$comprasArgs<ExtArgs>
    _count?: boolean | PlanejamentoProducaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planejamentoProducao"]>

  export type PlanejamentoProducaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataCriacao?: boolean
    confirmado?: boolean
  }, ExtArgs["result"]["planejamentoProducao"]>

  export type PlanejamentoProducaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataCriacao?: boolean
    confirmado?: boolean
  }, ExtArgs["result"]["planejamentoProducao"]>

  export type PlanejamentoProducaoSelectScalar = {
    id?: boolean
    dataCriacao?: boolean
    confirmado?: boolean
  }

  export type PlanejamentoProducaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dataCriacao" | "confirmado", ExtArgs["result"]["planejamentoProducao"]>
  export type PlanejamentoProducaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receitas?: boolean | PlanejamentoProducao$receitasArgs<ExtArgs>
    compras?: boolean | PlanejamentoProducao$comprasArgs<ExtArgs>
    _count?: boolean | PlanejamentoProducaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlanejamentoProducaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlanejamentoProducaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlanejamentoProducaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlanejamentoProducao"
    objects: {
      receitas: Prisma.$ReceitaPlanejadaPayload<ExtArgs>[]
      compras: Prisma.$ListaCompraPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dataCriacao: Date
      confirmado: boolean
    }, ExtArgs["result"]["planejamentoProducao"]>
    composites: {}
  }

  type PlanejamentoProducaoGetPayload<S extends boolean | null | undefined | PlanejamentoProducaoDefaultArgs> = $Result.GetResult<Prisma.$PlanejamentoProducaoPayload, S>

  type PlanejamentoProducaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlanejamentoProducaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlanejamentoProducaoCountAggregateInputType | true
    }

  export interface PlanejamentoProducaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlanejamentoProducao'], meta: { name: 'PlanejamentoProducao' } }
    /**
     * Find zero or one PlanejamentoProducao that matches the filter.
     * @param {PlanejamentoProducaoFindUniqueArgs} args - Arguments to find a PlanejamentoProducao
     * @example
     * // Get one PlanejamentoProducao
     * const planejamentoProducao = await prisma.planejamentoProducao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanejamentoProducaoFindUniqueArgs>(args: SelectSubset<T, PlanejamentoProducaoFindUniqueArgs<ExtArgs>>): Prisma__PlanejamentoProducaoClient<$Result.GetResult<Prisma.$PlanejamentoProducaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlanejamentoProducao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlanejamentoProducaoFindUniqueOrThrowArgs} args - Arguments to find a PlanejamentoProducao
     * @example
     * // Get one PlanejamentoProducao
     * const planejamentoProducao = await prisma.planejamentoProducao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanejamentoProducaoFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanejamentoProducaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanejamentoProducaoClient<$Result.GetResult<Prisma.$PlanejamentoProducaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlanejamentoProducao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanejamentoProducaoFindFirstArgs} args - Arguments to find a PlanejamentoProducao
     * @example
     * // Get one PlanejamentoProducao
     * const planejamentoProducao = await prisma.planejamentoProducao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanejamentoProducaoFindFirstArgs>(args?: SelectSubset<T, PlanejamentoProducaoFindFirstArgs<ExtArgs>>): Prisma__PlanejamentoProducaoClient<$Result.GetResult<Prisma.$PlanejamentoProducaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlanejamentoProducao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanejamentoProducaoFindFirstOrThrowArgs} args - Arguments to find a PlanejamentoProducao
     * @example
     * // Get one PlanejamentoProducao
     * const planejamentoProducao = await prisma.planejamentoProducao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanejamentoProducaoFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanejamentoProducaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanejamentoProducaoClient<$Result.GetResult<Prisma.$PlanejamentoProducaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlanejamentoProducaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanejamentoProducaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlanejamentoProducaos
     * const planejamentoProducaos = await prisma.planejamentoProducao.findMany()
     * 
     * // Get first 10 PlanejamentoProducaos
     * const planejamentoProducaos = await prisma.planejamentoProducao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planejamentoProducaoWithIdOnly = await prisma.planejamentoProducao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanejamentoProducaoFindManyArgs>(args?: SelectSubset<T, PlanejamentoProducaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanejamentoProducaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlanejamentoProducao.
     * @param {PlanejamentoProducaoCreateArgs} args - Arguments to create a PlanejamentoProducao.
     * @example
     * // Create one PlanejamentoProducao
     * const PlanejamentoProducao = await prisma.planejamentoProducao.create({
     *   data: {
     *     // ... data to create a PlanejamentoProducao
     *   }
     * })
     * 
     */
    create<T extends PlanejamentoProducaoCreateArgs>(args: SelectSubset<T, PlanejamentoProducaoCreateArgs<ExtArgs>>): Prisma__PlanejamentoProducaoClient<$Result.GetResult<Prisma.$PlanejamentoProducaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlanejamentoProducaos.
     * @param {PlanejamentoProducaoCreateManyArgs} args - Arguments to create many PlanejamentoProducaos.
     * @example
     * // Create many PlanejamentoProducaos
     * const planejamentoProducao = await prisma.planejamentoProducao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanejamentoProducaoCreateManyArgs>(args?: SelectSubset<T, PlanejamentoProducaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlanejamentoProducaos and returns the data saved in the database.
     * @param {PlanejamentoProducaoCreateManyAndReturnArgs} args - Arguments to create many PlanejamentoProducaos.
     * @example
     * // Create many PlanejamentoProducaos
     * const planejamentoProducao = await prisma.planejamentoProducao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlanejamentoProducaos and only return the `id`
     * const planejamentoProducaoWithIdOnly = await prisma.planejamentoProducao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanejamentoProducaoCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanejamentoProducaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanejamentoProducaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlanejamentoProducao.
     * @param {PlanejamentoProducaoDeleteArgs} args - Arguments to delete one PlanejamentoProducao.
     * @example
     * // Delete one PlanejamentoProducao
     * const PlanejamentoProducao = await prisma.planejamentoProducao.delete({
     *   where: {
     *     // ... filter to delete one PlanejamentoProducao
     *   }
     * })
     * 
     */
    delete<T extends PlanejamentoProducaoDeleteArgs>(args: SelectSubset<T, PlanejamentoProducaoDeleteArgs<ExtArgs>>): Prisma__PlanejamentoProducaoClient<$Result.GetResult<Prisma.$PlanejamentoProducaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlanejamentoProducao.
     * @param {PlanejamentoProducaoUpdateArgs} args - Arguments to update one PlanejamentoProducao.
     * @example
     * // Update one PlanejamentoProducao
     * const planejamentoProducao = await prisma.planejamentoProducao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanejamentoProducaoUpdateArgs>(args: SelectSubset<T, PlanejamentoProducaoUpdateArgs<ExtArgs>>): Prisma__PlanejamentoProducaoClient<$Result.GetResult<Prisma.$PlanejamentoProducaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlanejamentoProducaos.
     * @param {PlanejamentoProducaoDeleteManyArgs} args - Arguments to filter PlanejamentoProducaos to delete.
     * @example
     * // Delete a few PlanejamentoProducaos
     * const { count } = await prisma.planejamentoProducao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanejamentoProducaoDeleteManyArgs>(args?: SelectSubset<T, PlanejamentoProducaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlanejamentoProducaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanejamentoProducaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlanejamentoProducaos
     * const planejamentoProducao = await prisma.planejamentoProducao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanejamentoProducaoUpdateManyArgs>(args: SelectSubset<T, PlanejamentoProducaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlanejamentoProducaos and returns the data updated in the database.
     * @param {PlanejamentoProducaoUpdateManyAndReturnArgs} args - Arguments to update many PlanejamentoProducaos.
     * @example
     * // Update many PlanejamentoProducaos
     * const planejamentoProducao = await prisma.planejamentoProducao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlanejamentoProducaos and only return the `id`
     * const planejamentoProducaoWithIdOnly = await prisma.planejamentoProducao.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlanejamentoProducaoUpdateManyAndReturnArgs>(args: SelectSubset<T, PlanejamentoProducaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanejamentoProducaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlanejamentoProducao.
     * @param {PlanejamentoProducaoUpsertArgs} args - Arguments to update or create a PlanejamentoProducao.
     * @example
     * // Update or create a PlanejamentoProducao
     * const planejamentoProducao = await prisma.planejamentoProducao.upsert({
     *   create: {
     *     // ... data to create a PlanejamentoProducao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlanejamentoProducao we want to update
     *   }
     * })
     */
    upsert<T extends PlanejamentoProducaoUpsertArgs>(args: SelectSubset<T, PlanejamentoProducaoUpsertArgs<ExtArgs>>): Prisma__PlanejamentoProducaoClient<$Result.GetResult<Prisma.$PlanejamentoProducaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlanejamentoProducaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanejamentoProducaoCountArgs} args - Arguments to filter PlanejamentoProducaos to count.
     * @example
     * // Count the number of PlanejamentoProducaos
     * const count = await prisma.planejamentoProducao.count({
     *   where: {
     *     // ... the filter for the PlanejamentoProducaos we want to count
     *   }
     * })
    **/
    count<T extends PlanejamentoProducaoCountArgs>(
      args?: Subset<T, PlanejamentoProducaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanejamentoProducaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlanejamentoProducao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanejamentoProducaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlanejamentoProducaoAggregateArgs>(args: Subset<T, PlanejamentoProducaoAggregateArgs>): Prisma.PrismaPromise<GetPlanejamentoProducaoAggregateType<T>>

    /**
     * Group by PlanejamentoProducao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanejamentoProducaoGroupByArgs} args - Group by arguments.
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
      T extends PlanejamentoProducaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanejamentoProducaoGroupByArgs['orderBy'] }
        : { orderBy?: PlanejamentoProducaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlanejamentoProducaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanejamentoProducaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlanejamentoProducao model
   */
  readonly fields: PlanejamentoProducaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlanejamentoProducao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanejamentoProducaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receitas<T extends PlanejamentoProducao$receitasArgs<ExtArgs> = {}>(args?: Subset<T, PlanejamentoProducao$receitasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaPlanejadaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    compras<T extends PlanejamentoProducao$comprasArgs<ExtArgs> = {}>(args?: Subset<T, PlanejamentoProducao$comprasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListaCompraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PlanejamentoProducao model
   */
  interface PlanejamentoProducaoFieldRefs {
    readonly id: FieldRef<"PlanejamentoProducao", 'String'>
    readonly dataCriacao: FieldRef<"PlanejamentoProducao", 'DateTime'>
    readonly confirmado: FieldRef<"PlanejamentoProducao", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * PlanejamentoProducao findUnique
   */
  export type PlanejamentoProducaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanejamentoProducao
     */
    select?: PlanejamentoProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanejamentoProducao
     */
    omit?: PlanejamentoProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanejamentoProducaoInclude<ExtArgs> | null
    /**
     * Filter, which PlanejamentoProducao to fetch.
     */
    where: PlanejamentoProducaoWhereUniqueInput
  }

  /**
   * PlanejamentoProducao findUniqueOrThrow
   */
  export type PlanejamentoProducaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanejamentoProducao
     */
    select?: PlanejamentoProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanejamentoProducao
     */
    omit?: PlanejamentoProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanejamentoProducaoInclude<ExtArgs> | null
    /**
     * Filter, which PlanejamentoProducao to fetch.
     */
    where: PlanejamentoProducaoWhereUniqueInput
  }

  /**
   * PlanejamentoProducao findFirst
   */
  export type PlanejamentoProducaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanejamentoProducao
     */
    select?: PlanejamentoProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanejamentoProducao
     */
    omit?: PlanejamentoProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanejamentoProducaoInclude<ExtArgs> | null
    /**
     * Filter, which PlanejamentoProducao to fetch.
     */
    where?: PlanejamentoProducaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanejamentoProducaos to fetch.
     */
    orderBy?: PlanejamentoProducaoOrderByWithRelationInput | PlanejamentoProducaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanejamentoProducaos.
     */
    cursor?: PlanejamentoProducaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanejamentoProducaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanejamentoProducaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanejamentoProducaos.
     */
    distinct?: PlanejamentoProducaoScalarFieldEnum | PlanejamentoProducaoScalarFieldEnum[]
  }

  /**
   * PlanejamentoProducao findFirstOrThrow
   */
  export type PlanejamentoProducaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanejamentoProducao
     */
    select?: PlanejamentoProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanejamentoProducao
     */
    omit?: PlanejamentoProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanejamentoProducaoInclude<ExtArgs> | null
    /**
     * Filter, which PlanejamentoProducao to fetch.
     */
    where?: PlanejamentoProducaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanejamentoProducaos to fetch.
     */
    orderBy?: PlanejamentoProducaoOrderByWithRelationInput | PlanejamentoProducaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanejamentoProducaos.
     */
    cursor?: PlanejamentoProducaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanejamentoProducaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanejamentoProducaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanejamentoProducaos.
     */
    distinct?: PlanejamentoProducaoScalarFieldEnum | PlanejamentoProducaoScalarFieldEnum[]
  }

  /**
   * PlanejamentoProducao findMany
   */
  export type PlanejamentoProducaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanejamentoProducao
     */
    select?: PlanejamentoProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanejamentoProducao
     */
    omit?: PlanejamentoProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanejamentoProducaoInclude<ExtArgs> | null
    /**
     * Filter, which PlanejamentoProducaos to fetch.
     */
    where?: PlanejamentoProducaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanejamentoProducaos to fetch.
     */
    orderBy?: PlanejamentoProducaoOrderByWithRelationInput | PlanejamentoProducaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlanejamentoProducaos.
     */
    cursor?: PlanejamentoProducaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanejamentoProducaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanejamentoProducaos.
     */
    skip?: number
    distinct?: PlanejamentoProducaoScalarFieldEnum | PlanejamentoProducaoScalarFieldEnum[]
  }

  /**
   * PlanejamentoProducao create
   */
  export type PlanejamentoProducaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanejamentoProducao
     */
    select?: PlanejamentoProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanejamentoProducao
     */
    omit?: PlanejamentoProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanejamentoProducaoInclude<ExtArgs> | null
    /**
     * The data needed to create a PlanejamentoProducao.
     */
    data?: XOR<PlanejamentoProducaoCreateInput, PlanejamentoProducaoUncheckedCreateInput>
  }

  /**
   * PlanejamentoProducao createMany
   */
  export type PlanejamentoProducaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlanejamentoProducaos.
     */
    data: PlanejamentoProducaoCreateManyInput | PlanejamentoProducaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlanejamentoProducao createManyAndReturn
   */
  export type PlanejamentoProducaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanejamentoProducao
     */
    select?: PlanejamentoProducaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlanejamentoProducao
     */
    omit?: PlanejamentoProducaoOmit<ExtArgs> | null
    /**
     * The data used to create many PlanejamentoProducaos.
     */
    data: PlanejamentoProducaoCreateManyInput | PlanejamentoProducaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlanejamentoProducao update
   */
  export type PlanejamentoProducaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanejamentoProducao
     */
    select?: PlanejamentoProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanejamentoProducao
     */
    omit?: PlanejamentoProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanejamentoProducaoInclude<ExtArgs> | null
    /**
     * The data needed to update a PlanejamentoProducao.
     */
    data: XOR<PlanejamentoProducaoUpdateInput, PlanejamentoProducaoUncheckedUpdateInput>
    /**
     * Choose, which PlanejamentoProducao to update.
     */
    where: PlanejamentoProducaoWhereUniqueInput
  }

  /**
   * PlanejamentoProducao updateMany
   */
  export type PlanejamentoProducaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlanejamentoProducaos.
     */
    data: XOR<PlanejamentoProducaoUpdateManyMutationInput, PlanejamentoProducaoUncheckedUpdateManyInput>
    /**
     * Filter which PlanejamentoProducaos to update
     */
    where?: PlanejamentoProducaoWhereInput
    /**
     * Limit how many PlanejamentoProducaos to update.
     */
    limit?: number
  }

  /**
   * PlanejamentoProducao updateManyAndReturn
   */
  export type PlanejamentoProducaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanejamentoProducao
     */
    select?: PlanejamentoProducaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlanejamentoProducao
     */
    omit?: PlanejamentoProducaoOmit<ExtArgs> | null
    /**
     * The data used to update PlanejamentoProducaos.
     */
    data: XOR<PlanejamentoProducaoUpdateManyMutationInput, PlanejamentoProducaoUncheckedUpdateManyInput>
    /**
     * Filter which PlanejamentoProducaos to update
     */
    where?: PlanejamentoProducaoWhereInput
    /**
     * Limit how many PlanejamentoProducaos to update.
     */
    limit?: number
  }

  /**
   * PlanejamentoProducao upsert
   */
  export type PlanejamentoProducaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanejamentoProducao
     */
    select?: PlanejamentoProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanejamentoProducao
     */
    omit?: PlanejamentoProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanejamentoProducaoInclude<ExtArgs> | null
    /**
     * The filter to search for the PlanejamentoProducao to update in case it exists.
     */
    where: PlanejamentoProducaoWhereUniqueInput
    /**
     * In case the PlanejamentoProducao found by the `where` argument doesn't exist, create a new PlanejamentoProducao with this data.
     */
    create: XOR<PlanejamentoProducaoCreateInput, PlanejamentoProducaoUncheckedCreateInput>
    /**
     * In case the PlanejamentoProducao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanejamentoProducaoUpdateInput, PlanejamentoProducaoUncheckedUpdateInput>
  }

  /**
   * PlanejamentoProducao delete
   */
  export type PlanejamentoProducaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanejamentoProducao
     */
    select?: PlanejamentoProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanejamentoProducao
     */
    omit?: PlanejamentoProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanejamentoProducaoInclude<ExtArgs> | null
    /**
     * Filter which PlanejamentoProducao to delete.
     */
    where: PlanejamentoProducaoWhereUniqueInput
  }

  /**
   * PlanejamentoProducao deleteMany
   */
  export type PlanejamentoProducaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanejamentoProducaos to delete
     */
    where?: PlanejamentoProducaoWhereInput
    /**
     * Limit how many PlanejamentoProducaos to delete.
     */
    limit?: number
  }

  /**
   * PlanejamentoProducao.receitas
   */
  export type PlanejamentoProducao$receitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaPlanejada
     */
    select?: ReceitaPlanejadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaPlanejada
     */
    omit?: ReceitaPlanejadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaPlanejadaInclude<ExtArgs> | null
    where?: ReceitaPlanejadaWhereInput
    orderBy?: ReceitaPlanejadaOrderByWithRelationInput | ReceitaPlanejadaOrderByWithRelationInput[]
    cursor?: ReceitaPlanejadaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceitaPlanejadaScalarFieldEnum | ReceitaPlanejadaScalarFieldEnum[]
  }

  /**
   * PlanejamentoProducao.compras
   */
  export type PlanejamentoProducao$comprasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaCompra
     */
    select?: ListaCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaCompra
     */
    omit?: ListaCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaCompraInclude<ExtArgs> | null
    where?: ListaCompraWhereInput
    orderBy?: ListaCompraOrderByWithRelationInput | ListaCompraOrderByWithRelationInput[]
    cursor?: ListaCompraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListaCompraScalarFieldEnum | ListaCompraScalarFieldEnum[]
  }

  /**
   * PlanejamentoProducao without action
   */
  export type PlanejamentoProducaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanejamentoProducao
     */
    select?: PlanejamentoProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanejamentoProducao
     */
    omit?: PlanejamentoProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanejamentoProducaoInclude<ExtArgs> | null
  }


  /**
   * Model ReceitaPlanejada
   */

  export type AggregateReceitaPlanejada = {
    _count: ReceitaPlanejadaCountAggregateOutputType | null
    _avg: ReceitaPlanejadaAvgAggregateOutputType | null
    _sum: ReceitaPlanejadaSumAggregateOutputType | null
    _min: ReceitaPlanejadaMinAggregateOutputType | null
    _max: ReceitaPlanejadaMaxAggregateOutputType | null
  }

  export type ReceitaPlanejadaAvgAggregateOutputType = {
    quantidadePlanejada: number | null
  }

  export type ReceitaPlanejadaSumAggregateOutputType = {
    quantidadePlanejada: number | null
  }

  export type ReceitaPlanejadaMinAggregateOutputType = {
    id: string | null
    planejamentoId: string | null
    receitaId: string | null
    quantidadePlanejada: number | null
  }

  export type ReceitaPlanejadaMaxAggregateOutputType = {
    id: string | null
    planejamentoId: string | null
    receitaId: string | null
    quantidadePlanejada: number | null
  }

  export type ReceitaPlanejadaCountAggregateOutputType = {
    id: number
    planejamentoId: number
    receitaId: number
    quantidadePlanejada: number
    _all: number
  }


  export type ReceitaPlanejadaAvgAggregateInputType = {
    quantidadePlanejada?: true
  }

  export type ReceitaPlanejadaSumAggregateInputType = {
    quantidadePlanejada?: true
  }

  export type ReceitaPlanejadaMinAggregateInputType = {
    id?: true
    planejamentoId?: true
    receitaId?: true
    quantidadePlanejada?: true
  }

  export type ReceitaPlanejadaMaxAggregateInputType = {
    id?: true
    planejamentoId?: true
    receitaId?: true
    quantidadePlanejada?: true
  }

  export type ReceitaPlanejadaCountAggregateInputType = {
    id?: true
    planejamentoId?: true
    receitaId?: true
    quantidadePlanejada?: true
    _all?: true
  }

  export type ReceitaPlanejadaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReceitaPlanejada to aggregate.
     */
    where?: ReceitaPlanejadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceitaPlanejadas to fetch.
     */
    orderBy?: ReceitaPlanejadaOrderByWithRelationInput | ReceitaPlanejadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReceitaPlanejadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceitaPlanejadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceitaPlanejadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReceitaPlanejadas
    **/
    _count?: true | ReceitaPlanejadaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReceitaPlanejadaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReceitaPlanejadaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReceitaPlanejadaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReceitaPlanejadaMaxAggregateInputType
  }

  export type GetReceitaPlanejadaAggregateType<T extends ReceitaPlanejadaAggregateArgs> = {
        [P in keyof T & keyof AggregateReceitaPlanejada]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceitaPlanejada[P]>
      : GetScalarType<T[P], AggregateReceitaPlanejada[P]>
  }




  export type ReceitaPlanejadaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceitaPlanejadaWhereInput
    orderBy?: ReceitaPlanejadaOrderByWithAggregationInput | ReceitaPlanejadaOrderByWithAggregationInput[]
    by: ReceitaPlanejadaScalarFieldEnum[] | ReceitaPlanejadaScalarFieldEnum
    having?: ReceitaPlanejadaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReceitaPlanejadaCountAggregateInputType | true
    _avg?: ReceitaPlanejadaAvgAggregateInputType
    _sum?: ReceitaPlanejadaSumAggregateInputType
    _min?: ReceitaPlanejadaMinAggregateInputType
    _max?: ReceitaPlanejadaMaxAggregateInputType
  }

  export type ReceitaPlanejadaGroupByOutputType = {
    id: string
    planejamentoId: string
    receitaId: string
    quantidadePlanejada: number
    _count: ReceitaPlanejadaCountAggregateOutputType | null
    _avg: ReceitaPlanejadaAvgAggregateOutputType | null
    _sum: ReceitaPlanejadaSumAggregateOutputType | null
    _min: ReceitaPlanejadaMinAggregateOutputType | null
    _max: ReceitaPlanejadaMaxAggregateOutputType | null
  }

  type GetReceitaPlanejadaGroupByPayload<T extends ReceitaPlanejadaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReceitaPlanejadaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReceitaPlanejadaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReceitaPlanejadaGroupByOutputType[P]>
            : GetScalarType<T[P], ReceitaPlanejadaGroupByOutputType[P]>
        }
      >
    >


  export type ReceitaPlanejadaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planejamentoId?: boolean
    receitaId?: boolean
    quantidadePlanejada?: boolean
    planejamento?: boolean | PlanejamentoProducaoDefaultArgs<ExtArgs>
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receitaPlanejada"]>

  export type ReceitaPlanejadaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planejamentoId?: boolean
    receitaId?: boolean
    quantidadePlanejada?: boolean
    planejamento?: boolean | PlanejamentoProducaoDefaultArgs<ExtArgs>
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receitaPlanejada"]>

  export type ReceitaPlanejadaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planejamentoId?: boolean
    receitaId?: boolean
    quantidadePlanejada?: boolean
    planejamento?: boolean | PlanejamentoProducaoDefaultArgs<ExtArgs>
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receitaPlanejada"]>

  export type ReceitaPlanejadaSelectScalar = {
    id?: boolean
    planejamentoId?: boolean
    receitaId?: boolean
    quantidadePlanejada?: boolean
  }

  export type ReceitaPlanejadaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "planejamentoId" | "receitaId" | "quantidadePlanejada", ExtArgs["result"]["receitaPlanejada"]>
  export type ReceitaPlanejadaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planejamento?: boolean | PlanejamentoProducaoDefaultArgs<ExtArgs>
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
  }
  export type ReceitaPlanejadaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planejamento?: boolean | PlanejamentoProducaoDefaultArgs<ExtArgs>
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
  }
  export type ReceitaPlanejadaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planejamento?: boolean | PlanejamentoProducaoDefaultArgs<ExtArgs>
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
  }

  export type $ReceitaPlanejadaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReceitaPlanejada"
    objects: {
      planejamento: Prisma.$PlanejamentoProducaoPayload<ExtArgs>
      receita: Prisma.$ReceitaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      planejamentoId: string
      receitaId: string
      quantidadePlanejada: number
    }, ExtArgs["result"]["receitaPlanejada"]>
    composites: {}
  }

  type ReceitaPlanejadaGetPayload<S extends boolean | null | undefined | ReceitaPlanejadaDefaultArgs> = $Result.GetResult<Prisma.$ReceitaPlanejadaPayload, S>

  type ReceitaPlanejadaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReceitaPlanejadaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReceitaPlanejadaCountAggregateInputType | true
    }

  export interface ReceitaPlanejadaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReceitaPlanejada'], meta: { name: 'ReceitaPlanejada' } }
    /**
     * Find zero or one ReceitaPlanejada that matches the filter.
     * @param {ReceitaPlanejadaFindUniqueArgs} args - Arguments to find a ReceitaPlanejada
     * @example
     * // Get one ReceitaPlanejada
     * const receitaPlanejada = await prisma.receitaPlanejada.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReceitaPlanejadaFindUniqueArgs>(args: SelectSubset<T, ReceitaPlanejadaFindUniqueArgs<ExtArgs>>): Prisma__ReceitaPlanejadaClient<$Result.GetResult<Prisma.$ReceitaPlanejadaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReceitaPlanejada that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReceitaPlanejadaFindUniqueOrThrowArgs} args - Arguments to find a ReceitaPlanejada
     * @example
     * // Get one ReceitaPlanejada
     * const receitaPlanejada = await prisma.receitaPlanejada.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReceitaPlanejadaFindUniqueOrThrowArgs>(args: SelectSubset<T, ReceitaPlanejadaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReceitaPlanejadaClient<$Result.GetResult<Prisma.$ReceitaPlanejadaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReceitaPlanejada that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaPlanejadaFindFirstArgs} args - Arguments to find a ReceitaPlanejada
     * @example
     * // Get one ReceitaPlanejada
     * const receitaPlanejada = await prisma.receitaPlanejada.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReceitaPlanejadaFindFirstArgs>(args?: SelectSubset<T, ReceitaPlanejadaFindFirstArgs<ExtArgs>>): Prisma__ReceitaPlanejadaClient<$Result.GetResult<Prisma.$ReceitaPlanejadaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReceitaPlanejada that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaPlanejadaFindFirstOrThrowArgs} args - Arguments to find a ReceitaPlanejada
     * @example
     * // Get one ReceitaPlanejada
     * const receitaPlanejada = await prisma.receitaPlanejada.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReceitaPlanejadaFindFirstOrThrowArgs>(args?: SelectSubset<T, ReceitaPlanejadaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReceitaPlanejadaClient<$Result.GetResult<Prisma.$ReceitaPlanejadaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReceitaPlanejadas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaPlanejadaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReceitaPlanejadas
     * const receitaPlanejadas = await prisma.receitaPlanejada.findMany()
     * 
     * // Get first 10 ReceitaPlanejadas
     * const receitaPlanejadas = await prisma.receitaPlanejada.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const receitaPlanejadaWithIdOnly = await prisma.receitaPlanejada.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReceitaPlanejadaFindManyArgs>(args?: SelectSubset<T, ReceitaPlanejadaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaPlanejadaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReceitaPlanejada.
     * @param {ReceitaPlanejadaCreateArgs} args - Arguments to create a ReceitaPlanejada.
     * @example
     * // Create one ReceitaPlanejada
     * const ReceitaPlanejada = await prisma.receitaPlanejada.create({
     *   data: {
     *     // ... data to create a ReceitaPlanejada
     *   }
     * })
     * 
     */
    create<T extends ReceitaPlanejadaCreateArgs>(args: SelectSubset<T, ReceitaPlanejadaCreateArgs<ExtArgs>>): Prisma__ReceitaPlanejadaClient<$Result.GetResult<Prisma.$ReceitaPlanejadaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReceitaPlanejadas.
     * @param {ReceitaPlanejadaCreateManyArgs} args - Arguments to create many ReceitaPlanejadas.
     * @example
     * // Create many ReceitaPlanejadas
     * const receitaPlanejada = await prisma.receitaPlanejada.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReceitaPlanejadaCreateManyArgs>(args?: SelectSubset<T, ReceitaPlanejadaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReceitaPlanejadas and returns the data saved in the database.
     * @param {ReceitaPlanejadaCreateManyAndReturnArgs} args - Arguments to create many ReceitaPlanejadas.
     * @example
     * // Create many ReceitaPlanejadas
     * const receitaPlanejada = await prisma.receitaPlanejada.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReceitaPlanejadas and only return the `id`
     * const receitaPlanejadaWithIdOnly = await prisma.receitaPlanejada.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReceitaPlanejadaCreateManyAndReturnArgs>(args?: SelectSubset<T, ReceitaPlanejadaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaPlanejadaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReceitaPlanejada.
     * @param {ReceitaPlanejadaDeleteArgs} args - Arguments to delete one ReceitaPlanejada.
     * @example
     * // Delete one ReceitaPlanejada
     * const ReceitaPlanejada = await prisma.receitaPlanejada.delete({
     *   where: {
     *     // ... filter to delete one ReceitaPlanejada
     *   }
     * })
     * 
     */
    delete<T extends ReceitaPlanejadaDeleteArgs>(args: SelectSubset<T, ReceitaPlanejadaDeleteArgs<ExtArgs>>): Prisma__ReceitaPlanejadaClient<$Result.GetResult<Prisma.$ReceitaPlanejadaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReceitaPlanejada.
     * @param {ReceitaPlanejadaUpdateArgs} args - Arguments to update one ReceitaPlanejada.
     * @example
     * // Update one ReceitaPlanejada
     * const receitaPlanejada = await prisma.receitaPlanejada.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReceitaPlanejadaUpdateArgs>(args: SelectSubset<T, ReceitaPlanejadaUpdateArgs<ExtArgs>>): Prisma__ReceitaPlanejadaClient<$Result.GetResult<Prisma.$ReceitaPlanejadaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReceitaPlanejadas.
     * @param {ReceitaPlanejadaDeleteManyArgs} args - Arguments to filter ReceitaPlanejadas to delete.
     * @example
     * // Delete a few ReceitaPlanejadas
     * const { count } = await prisma.receitaPlanejada.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReceitaPlanejadaDeleteManyArgs>(args?: SelectSubset<T, ReceitaPlanejadaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReceitaPlanejadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaPlanejadaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReceitaPlanejadas
     * const receitaPlanejada = await prisma.receitaPlanejada.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReceitaPlanejadaUpdateManyArgs>(args: SelectSubset<T, ReceitaPlanejadaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReceitaPlanejadas and returns the data updated in the database.
     * @param {ReceitaPlanejadaUpdateManyAndReturnArgs} args - Arguments to update many ReceitaPlanejadas.
     * @example
     * // Update many ReceitaPlanejadas
     * const receitaPlanejada = await prisma.receitaPlanejada.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReceitaPlanejadas and only return the `id`
     * const receitaPlanejadaWithIdOnly = await prisma.receitaPlanejada.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReceitaPlanejadaUpdateManyAndReturnArgs>(args: SelectSubset<T, ReceitaPlanejadaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaPlanejadaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReceitaPlanejada.
     * @param {ReceitaPlanejadaUpsertArgs} args - Arguments to update or create a ReceitaPlanejada.
     * @example
     * // Update or create a ReceitaPlanejada
     * const receitaPlanejada = await prisma.receitaPlanejada.upsert({
     *   create: {
     *     // ... data to create a ReceitaPlanejada
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReceitaPlanejada we want to update
     *   }
     * })
     */
    upsert<T extends ReceitaPlanejadaUpsertArgs>(args: SelectSubset<T, ReceitaPlanejadaUpsertArgs<ExtArgs>>): Prisma__ReceitaPlanejadaClient<$Result.GetResult<Prisma.$ReceitaPlanejadaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReceitaPlanejadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaPlanejadaCountArgs} args - Arguments to filter ReceitaPlanejadas to count.
     * @example
     * // Count the number of ReceitaPlanejadas
     * const count = await prisma.receitaPlanejada.count({
     *   where: {
     *     // ... the filter for the ReceitaPlanejadas we want to count
     *   }
     * })
    **/
    count<T extends ReceitaPlanejadaCountArgs>(
      args?: Subset<T, ReceitaPlanejadaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReceitaPlanejadaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReceitaPlanejada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaPlanejadaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReceitaPlanejadaAggregateArgs>(args: Subset<T, ReceitaPlanejadaAggregateArgs>): Prisma.PrismaPromise<GetReceitaPlanejadaAggregateType<T>>

    /**
     * Group by ReceitaPlanejada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaPlanejadaGroupByArgs} args - Group by arguments.
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
      T extends ReceitaPlanejadaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReceitaPlanejadaGroupByArgs['orderBy'] }
        : { orderBy?: ReceitaPlanejadaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReceitaPlanejadaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceitaPlanejadaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReceitaPlanejada model
   */
  readonly fields: ReceitaPlanejadaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReceitaPlanejada.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReceitaPlanejadaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    planejamento<T extends PlanejamentoProducaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanejamentoProducaoDefaultArgs<ExtArgs>>): Prisma__PlanejamentoProducaoClient<$Result.GetResult<Prisma.$PlanejamentoProducaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receita<T extends ReceitaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReceitaDefaultArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ReceitaPlanejada model
   */
  interface ReceitaPlanejadaFieldRefs {
    readonly id: FieldRef<"ReceitaPlanejada", 'String'>
    readonly planejamentoId: FieldRef<"ReceitaPlanejada", 'String'>
    readonly receitaId: FieldRef<"ReceitaPlanejada", 'String'>
    readonly quantidadePlanejada: FieldRef<"ReceitaPlanejada", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ReceitaPlanejada findUnique
   */
  export type ReceitaPlanejadaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaPlanejada
     */
    select?: ReceitaPlanejadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaPlanejada
     */
    omit?: ReceitaPlanejadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaPlanejadaInclude<ExtArgs> | null
    /**
     * Filter, which ReceitaPlanejada to fetch.
     */
    where: ReceitaPlanejadaWhereUniqueInput
  }

  /**
   * ReceitaPlanejada findUniqueOrThrow
   */
  export type ReceitaPlanejadaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaPlanejada
     */
    select?: ReceitaPlanejadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaPlanejada
     */
    omit?: ReceitaPlanejadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaPlanejadaInclude<ExtArgs> | null
    /**
     * Filter, which ReceitaPlanejada to fetch.
     */
    where: ReceitaPlanejadaWhereUniqueInput
  }

  /**
   * ReceitaPlanejada findFirst
   */
  export type ReceitaPlanejadaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaPlanejada
     */
    select?: ReceitaPlanejadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaPlanejada
     */
    omit?: ReceitaPlanejadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaPlanejadaInclude<ExtArgs> | null
    /**
     * Filter, which ReceitaPlanejada to fetch.
     */
    where?: ReceitaPlanejadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceitaPlanejadas to fetch.
     */
    orderBy?: ReceitaPlanejadaOrderByWithRelationInput | ReceitaPlanejadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReceitaPlanejadas.
     */
    cursor?: ReceitaPlanejadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceitaPlanejadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceitaPlanejadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReceitaPlanejadas.
     */
    distinct?: ReceitaPlanejadaScalarFieldEnum | ReceitaPlanejadaScalarFieldEnum[]
  }

  /**
   * ReceitaPlanejada findFirstOrThrow
   */
  export type ReceitaPlanejadaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaPlanejada
     */
    select?: ReceitaPlanejadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaPlanejada
     */
    omit?: ReceitaPlanejadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaPlanejadaInclude<ExtArgs> | null
    /**
     * Filter, which ReceitaPlanejada to fetch.
     */
    where?: ReceitaPlanejadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceitaPlanejadas to fetch.
     */
    orderBy?: ReceitaPlanejadaOrderByWithRelationInput | ReceitaPlanejadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReceitaPlanejadas.
     */
    cursor?: ReceitaPlanejadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceitaPlanejadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceitaPlanejadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReceitaPlanejadas.
     */
    distinct?: ReceitaPlanejadaScalarFieldEnum | ReceitaPlanejadaScalarFieldEnum[]
  }

  /**
   * ReceitaPlanejada findMany
   */
  export type ReceitaPlanejadaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaPlanejada
     */
    select?: ReceitaPlanejadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaPlanejada
     */
    omit?: ReceitaPlanejadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaPlanejadaInclude<ExtArgs> | null
    /**
     * Filter, which ReceitaPlanejadas to fetch.
     */
    where?: ReceitaPlanejadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceitaPlanejadas to fetch.
     */
    orderBy?: ReceitaPlanejadaOrderByWithRelationInput | ReceitaPlanejadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReceitaPlanejadas.
     */
    cursor?: ReceitaPlanejadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceitaPlanejadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceitaPlanejadas.
     */
    skip?: number
    distinct?: ReceitaPlanejadaScalarFieldEnum | ReceitaPlanejadaScalarFieldEnum[]
  }

  /**
   * ReceitaPlanejada create
   */
  export type ReceitaPlanejadaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaPlanejada
     */
    select?: ReceitaPlanejadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaPlanejada
     */
    omit?: ReceitaPlanejadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaPlanejadaInclude<ExtArgs> | null
    /**
     * The data needed to create a ReceitaPlanejada.
     */
    data: XOR<ReceitaPlanejadaCreateInput, ReceitaPlanejadaUncheckedCreateInput>
  }

  /**
   * ReceitaPlanejada createMany
   */
  export type ReceitaPlanejadaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReceitaPlanejadas.
     */
    data: ReceitaPlanejadaCreateManyInput | ReceitaPlanejadaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReceitaPlanejada createManyAndReturn
   */
  export type ReceitaPlanejadaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaPlanejada
     */
    select?: ReceitaPlanejadaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaPlanejada
     */
    omit?: ReceitaPlanejadaOmit<ExtArgs> | null
    /**
     * The data used to create many ReceitaPlanejadas.
     */
    data: ReceitaPlanejadaCreateManyInput | ReceitaPlanejadaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaPlanejadaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReceitaPlanejada update
   */
  export type ReceitaPlanejadaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaPlanejada
     */
    select?: ReceitaPlanejadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaPlanejada
     */
    omit?: ReceitaPlanejadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaPlanejadaInclude<ExtArgs> | null
    /**
     * The data needed to update a ReceitaPlanejada.
     */
    data: XOR<ReceitaPlanejadaUpdateInput, ReceitaPlanejadaUncheckedUpdateInput>
    /**
     * Choose, which ReceitaPlanejada to update.
     */
    where: ReceitaPlanejadaWhereUniqueInput
  }

  /**
   * ReceitaPlanejada updateMany
   */
  export type ReceitaPlanejadaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReceitaPlanejadas.
     */
    data: XOR<ReceitaPlanejadaUpdateManyMutationInput, ReceitaPlanejadaUncheckedUpdateManyInput>
    /**
     * Filter which ReceitaPlanejadas to update
     */
    where?: ReceitaPlanejadaWhereInput
    /**
     * Limit how many ReceitaPlanejadas to update.
     */
    limit?: number
  }

  /**
   * ReceitaPlanejada updateManyAndReturn
   */
  export type ReceitaPlanejadaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaPlanejada
     */
    select?: ReceitaPlanejadaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaPlanejada
     */
    omit?: ReceitaPlanejadaOmit<ExtArgs> | null
    /**
     * The data used to update ReceitaPlanejadas.
     */
    data: XOR<ReceitaPlanejadaUpdateManyMutationInput, ReceitaPlanejadaUncheckedUpdateManyInput>
    /**
     * Filter which ReceitaPlanejadas to update
     */
    where?: ReceitaPlanejadaWhereInput
    /**
     * Limit how many ReceitaPlanejadas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaPlanejadaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReceitaPlanejada upsert
   */
  export type ReceitaPlanejadaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaPlanejada
     */
    select?: ReceitaPlanejadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaPlanejada
     */
    omit?: ReceitaPlanejadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaPlanejadaInclude<ExtArgs> | null
    /**
     * The filter to search for the ReceitaPlanejada to update in case it exists.
     */
    where: ReceitaPlanejadaWhereUniqueInput
    /**
     * In case the ReceitaPlanejada found by the `where` argument doesn't exist, create a new ReceitaPlanejada with this data.
     */
    create: XOR<ReceitaPlanejadaCreateInput, ReceitaPlanejadaUncheckedCreateInput>
    /**
     * In case the ReceitaPlanejada was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReceitaPlanejadaUpdateInput, ReceitaPlanejadaUncheckedUpdateInput>
  }

  /**
   * ReceitaPlanejada delete
   */
  export type ReceitaPlanejadaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaPlanejada
     */
    select?: ReceitaPlanejadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaPlanejada
     */
    omit?: ReceitaPlanejadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaPlanejadaInclude<ExtArgs> | null
    /**
     * Filter which ReceitaPlanejada to delete.
     */
    where: ReceitaPlanejadaWhereUniqueInput
  }

  /**
   * ReceitaPlanejada deleteMany
   */
  export type ReceitaPlanejadaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReceitaPlanejadas to delete
     */
    where?: ReceitaPlanejadaWhereInput
    /**
     * Limit how many ReceitaPlanejadas to delete.
     */
    limit?: number
  }

  /**
   * ReceitaPlanejada without action
   */
  export type ReceitaPlanejadaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaPlanejada
     */
    select?: ReceitaPlanejadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaPlanejada
     */
    omit?: ReceitaPlanejadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaPlanejadaInclude<ExtArgs> | null
  }


  /**
   * Model ListaCompra
   */

  export type AggregateListaCompra = {
    _count: ListaCompraCountAggregateOutputType | null
    _avg: ListaCompraAvgAggregateOutputType | null
    _sum: ListaCompraSumAggregateOutputType | null
    _min: ListaCompraMinAggregateOutputType | null
    _max: ListaCompraMaxAggregateOutputType | null
  }

  export type ListaCompraAvgAggregateOutputType = {
    quantidadeFaltante: number | null
  }

  export type ListaCompraSumAggregateOutputType = {
    quantidadeFaltante: number | null
  }

  export type ListaCompraMinAggregateOutputType = {
    id: string | null
    planejamentoId: string | null
    insumoId: string | null
    quantidadeFaltante: number | null
  }

  export type ListaCompraMaxAggregateOutputType = {
    id: string | null
    planejamentoId: string | null
    insumoId: string | null
    quantidadeFaltante: number | null
  }

  export type ListaCompraCountAggregateOutputType = {
    id: number
    planejamentoId: number
    insumoId: number
    quantidadeFaltante: number
    _all: number
  }


  export type ListaCompraAvgAggregateInputType = {
    quantidadeFaltante?: true
  }

  export type ListaCompraSumAggregateInputType = {
    quantidadeFaltante?: true
  }

  export type ListaCompraMinAggregateInputType = {
    id?: true
    planejamentoId?: true
    insumoId?: true
    quantidadeFaltante?: true
  }

  export type ListaCompraMaxAggregateInputType = {
    id?: true
    planejamentoId?: true
    insumoId?: true
    quantidadeFaltante?: true
  }

  export type ListaCompraCountAggregateInputType = {
    id?: true
    planejamentoId?: true
    insumoId?: true
    quantidadeFaltante?: true
    _all?: true
  }

  export type ListaCompraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListaCompra to aggregate.
     */
    where?: ListaCompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaCompras to fetch.
     */
    orderBy?: ListaCompraOrderByWithRelationInput | ListaCompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListaCompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaCompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ListaCompras
    **/
    _count?: true | ListaCompraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListaCompraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListaCompraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListaCompraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListaCompraMaxAggregateInputType
  }

  export type GetListaCompraAggregateType<T extends ListaCompraAggregateArgs> = {
        [P in keyof T & keyof AggregateListaCompra]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListaCompra[P]>
      : GetScalarType<T[P], AggregateListaCompra[P]>
  }




  export type ListaCompraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListaCompraWhereInput
    orderBy?: ListaCompraOrderByWithAggregationInput | ListaCompraOrderByWithAggregationInput[]
    by: ListaCompraScalarFieldEnum[] | ListaCompraScalarFieldEnum
    having?: ListaCompraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListaCompraCountAggregateInputType | true
    _avg?: ListaCompraAvgAggregateInputType
    _sum?: ListaCompraSumAggregateInputType
    _min?: ListaCompraMinAggregateInputType
    _max?: ListaCompraMaxAggregateInputType
  }

  export type ListaCompraGroupByOutputType = {
    id: string
    planejamentoId: string
    insumoId: string
    quantidadeFaltante: number
    _count: ListaCompraCountAggregateOutputType | null
    _avg: ListaCompraAvgAggregateOutputType | null
    _sum: ListaCompraSumAggregateOutputType | null
    _min: ListaCompraMinAggregateOutputType | null
    _max: ListaCompraMaxAggregateOutputType | null
  }

  type GetListaCompraGroupByPayload<T extends ListaCompraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListaCompraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListaCompraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListaCompraGroupByOutputType[P]>
            : GetScalarType<T[P], ListaCompraGroupByOutputType[P]>
        }
      >
    >


  export type ListaCompraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planejamentoId?: boolean
    insumoId?: boolean
    quantidadeFaltante?: boolean
    planejamento?: boolean | PlanejamentoProducaoDefaultArgs<ExtArgs>
    insumo?: boolean | InsumoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listaCompra"]>

  export type ListaCompraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planejamentoId?: boolean
    insumoId?: boolean
    quantidadeFaltante?: boolean
    planejamento?: boolean | PlanejamentoProducaoDefaultArgs<ExtArgs>
    insumo?: boolean | InsumoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listaCompra"]>

  export type ListaCompraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planejamentoId?: boolean
    insumoId?: boolean
    quantidadeFaltante?: boolean
    planejamento?: boolean | PlanejamentoProducaoDefaultArgs<ExtArgs>
    insumo?: boolean | InsumoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listaCompra"]>

  export type ListaCompraSelectScalar = {
    id?: boolean
    planejamentoId?: boolean
    insumoId?: boolean
    quantidadeFaltante?: boolean
  }

  export type ListaCompraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "planejamentoId" | "insumoId" | "quantidadeFaltante", ExtArgs["result"]["listaCompra"]>
  export type ListaCompraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planejamento?: boolean | PlanejamentoProducaoDefaultArgs<ExtArgs>
    insumo?: boolean | InsumoDefaultArgs<ExtArgs>
  }
  export type ListaCompraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planejamento?: boolean | PlanejamentoProducaoDefaultArgs<ExtArgs>
    insumo?: boolean | InsumoDefaultArgs<ExtArgs>
  }
  export type ListaCompraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planejamento?: boolean | PlanejamentoProducaoDefaultArgs<ExtArgs>
    insumo?: boolean | InsumoDefaultArgs<ExtArgs>
  }

  export type $ListaCompraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ListaCompra"
    objects: {
      planejamento: Prisma.$PlanejamentoProducaoPayload<ExtArgs>
      insumo: Prisma.$InsumoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      planejamentoId: string
      insumoId: string
      quantidadeFaltante: number
    }, ExtArgs["result"]["listaCompra"]>
    composites: {}
  }

  type ListaCompraGetPayload<S extends boolean | null | undefined | ListaCompraDefaultArgs> = $Result.GetResult<Prisma.$ListaCompraPayload, S>

  type ListaCompraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListaCompraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListaCompraCountAggregateInputType | true
    }

  export interface ListaCompraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ListaCompra'], meta: { name: 'ListaCompra' } }
    /**
     * Find zero or one ListaCompra that matches the filter.
     * @param {ListaCompraFindUniqueArgs} args - Arguments to find a ListaCompra
     * @example
     * // Get one ListaCompra
     * const listaCompra = await prisma.listaCompra.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListaCompraFindUniqueArgs>(args: SelectSubset<T, ListaCompraFindUniqueArgs<ExtArgs>>): Prisma__ListaCompraClient<$Result.GetResult<Prisma.$ListaCompraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ListaCompra that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListaCompraFindUniqueOrThrowArgs} args - Arguments to find a ListaCompra
     * @example
     * // Get one ListaCompra
     * const listaCompra = await prisma.listaCompra.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListaCompraFindUniqueOrThrowArgs>(args: SelectSubset<T, ListaCompraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListaCompraClient<$Result.GetResult<Prisma.$ListaCompraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListaCompra that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaCompraFindFirstArgs} args - Arguments to find a ListaCompra
     * @example
     * // Get one ListaCompra
     * const listaCompra = await prisma.listaCompra.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListaCompraFindFirstArgs>(args?: SelectSubset<T, ListaCompraFindFirstArgs<ExtArgs>>): Prisma__ListaCompraClient<$Result.GetResult<Prisma.$ListaCompraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListaCompra that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaCompraFindFirstOrThrowArgs} args - Arguments to find a ListaCompra
     * @example
     * // Get one ListaCompra
     * const listaCompra = await prisma.listaCompra.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListaCompraFindFirstOrThrowArgs>(args?: SelectSubset<T, ListaCompraFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListaCompraClient<$Result.GetResult<Prisma.$ListaCompraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ListaCompras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaCompraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ListaCompras
     * const listaCompras = await prisma.listaCompra.findMany()
     * 
     * // Get first 10 ListaCompras
     * const listaCompras = await prisma.listaCompra.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listaCompraWithIdOnly = await prisma.listaCompra.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListaCompraFindManyArgs>(args?: SelectSubset<T, ListaCompraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListaCompraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ListaCompra.
     * @param {ListaCompraCreateArgs} args - Arguments to create a ListaCompra.
     * @example
     * // Create one ListaCompra
     * const ListaCompra = await prisma.listaCompra.create({
     *   data: {
     *     // ... data to create a ListaCompra
     *   }
     * })
     * 
     */
    create<T extends ListaCompraCreateArgs>(args: SelectSubset<T, ListaCompraCreateArgs<ExtArgs>>): Prisma__ListaCompraClient<$Result.GetResult<Prisma.$ListaCompraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ListaCompras.
     * @param {ListaCompraCreateManyArgs} args - Arguments to create many ListaCompras.
     * @example
     * // Create many ListaCompras
     * const listaCompra = await prisma.listaCompra.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListaCompraCreateManyArgs>(args?: SelectSubset<T, ListaCompraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ListaCompras and returns the data saved in the database.
     * @param {ListaCompraCreateManyAndReturnArgs} args - Arguments to create many ListaCompras.
     * @example
     * // Create many ListaCompras
     * const listaCompra = await prisma.listaCompra.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ListaCompras and only return the `id`
     * const listaCompraWithIdOnly = await prisma.listaCompra.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListaCompraCreateManyAndReturnArgs>(args?: SelectSubset<T, ListaCompraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListaCompraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ListaCompra.
     * @param {ListaCompraDeleteArgs} args - Arguments to delete one ListaCompra.
     * @example
     * // Delete one ListaCompra
     * const ListaCompra = await prisma.listaCompra.delete({
     *   where: {
     *     // ... filter to delete one ListaCompra
     *   }
     * })
     * 
     */
    delete<T extends ListaCompraDeleteArgs>(args: SelectSubset<T, ListaCompraDeleteArgs<ExtArgs>>): Prisma__ListaCompraClient<$Result.GetResult<Prisma.$ListaCompraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ListaCompra.
     * @param {ListaCompraUpdateArgs} args - Arguments to update one ListaCompra.
     * @example
     * // Update one ListaCompra
     * const listaCompra = await prisma.listaCompra.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListaCompraUpdateArgs>(args: SelectSubset<T, ListaCompraUpdateArgs<ExtArgs>>): Prisma__ListaCompraClient<$Result.GetResult<Prisma.$ListaCompraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ListaCompras.
     * @param {ListaCompraDeleteManyArgs} args - Arguments to filter ListaCompras to delete.
     * @example
     * // Delete a few ListaCompras
     * const { count } = await prisma.listaCompra.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListaCompraDeleteManyArgs>(args?: SelectSubset<T, ListaCompraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListaCompras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaCompraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ListaCompras
     * const listaCompra = await prisma.listaCompra.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListaCompraUpdateManyArgs>(args: SelectSubset<T, ListaCompraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListaCompras and returns the data updated in the database.
     * @param {ListaCompraUpdateManyAndReturnArgs} args - Arguments to update many ListaCompras.
     * @example
     * // Update many ListaCompras
     * const listaCompra = await prisma.listaCompra.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ListaCompras and only return the `id`
     * const listaCompraWithIdOnly = await prisma.listaCompra.updateManyAndReturn({
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
    updateManyAndReturn<T extends ListaCompraUpdateManyAndReturnArgs>(args: SelectSubset<T, ListaCompraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListaCompraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ListaCompra.
     * @param {ListaCompraUpsertArgs} args - Arguments to update or create a ListaCompra.
     * @example
     * // Update or create a ListaCompra
     * const listaCompra = await prisma.listaCompra.upsert({
     *   create: {
     *     // ... data to create a ListaCompra
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ListaCompra we want to update
     *   }
     * })
     */
    upsert<T extends ListaCompraUpsertArgs>(args: SelectSubset<T, ListaCompraUpsertArgs<ExtArgs>>): Prisma__ListaCompraClient<$Result.GetResult<Prisma.$ListaCompraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ListaCompras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaCompraCountArgs} args - Arguments to filter ListaCompras to count.
     * @example
     * // Count the number of ListaCompras
     * const count = await prisma.listaCompra.count({
     *   where: {
     *     // ... the filter for the ListaCompras we want to count
     *   }
     * })
    **/
    count<T extends ListaCompraCountArgs>(
      args?: Subset<T, ListaCompraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListaCompraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ListaCompra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaCompraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ListaCompraAggregateArgs>(args: Subset<T, ListaCompraAggregateArgs>): Prisma.PrismaPromise<GetListaCompraAggregateType<T>>

    /**
     * Group by ListaCompra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListaCompraGroupByArgs} args - Group by arguments.
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
      T extends ListaCompraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListaCompraGroupByArgs['orderBy'] }
        : { orderBy?: ListaCompraGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ListaCompraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListaCompraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ListaCompra model
   */
  readonly fields: ListaCompraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ListaCompra.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListaCompraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    planejamento<T extends PlanejamentoProducaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanejamentoProducaoDefaultArgs<ExtArgs>>): Prisma__PlanejamentoProducaoClient<$Result.GetResult<Prisma.$PlanejamentoProducaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    insumo<T extends InsumoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InsumoDefaultArgs<ExtArgs>>): Prisma__InsumoClient<$Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ListaCompra model
   */
  interface ListaCompraFieldRefs {
    readonly id: FieldRef<"ListaCompra", 'String'>
    readonly planejamentoId: FieldRef<"ListaCompra", 'String'>
    readonly insumoId: FieldRef<"ListaCompra", 'String'>
    readonly quantidadeFaltante: FieldRef<"ListaCompra", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ListaCompra findUnique
   */
  export type ListaCompraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaCompra
     */
    select?: ListaCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaCompra
     */
    omit?: ListaCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaCompraInclude<ExtArgs> | null
    /**
     * Filter, which ListaCompra to fetch.
     */
    where: ListaCompraWhereUniqueInput
  }

  /**
   * ListaCompra findUniqueOrThrow
   */
  export type ListaCompraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaCompra
     */
    select?: ListaCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaCompra
     */
    omit?: ListaCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaCompraInclude<ExtArgs> | null
    /**
     * Filter, which ListaCompra to fetch.
     */
    where: ListaCompraWhereUniqueInput
  }

  /**
   * ListaCompra findFirst
   */
  export type ListaCompraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaCompra
     */
    select?: ListaCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaCompra
     */
    omit?: ListaCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaCompraInclude<ExtArgs> | null
    /**
     * Filter, which ListaCompra to fetch.
     */
    where?: ListaCompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaCompras to fetch.
     */
    orderBy?: ListaCompraOrderByWithRelationInput | ListaCompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListaCompras.
     */
    cursor?: ListaCompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaCompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListaCompras.
     */
    distinct?: ListaCompraScalarFieldEnum | ListaCompraScalarFieldEnum[]
  }

  /**
   * ListaCompra findFirstOrThrow
   */
  export type ListaCompraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaCompra
     */
    select?: ListaCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaCompra
     */
    omit?: ListaCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaCompraInclude<ExtArgs> | null
    /**
     * Filter, which ListaCompra to fetch.
     */
    where?: ListaCompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaCompras to fetch.
     */
    orderBy?: ListaCompraOrderByWithRelationInput | ListaCompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListaCompras.
     */
    cursor?: ListaCompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaCompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListaCompras.
     */
    distinct?: ListaCompraScalarFieldEnum | ListaCompraScalarFieldEnum[]
  }

  /**
   * ListaCompra findMany
   */
  export type ListaCompraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaCompra
     */
    select?: ListaCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaCompra
     */
    omit?: ListaCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaCompraInclude<ExtArgs> | null
    /**
     * Filter, which ListaCompras to fetch.
     */
    where?: ListaCompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListaCompras to fetch.
     */
    orderBy?: ListaCompraOrderByWithRelationInput | ListaCompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ListaCompras.
     */
    cursor?: ListaCompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListaCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListaCompras.
     */
    skip?: number
    distinct?: ListaCompraScalarFieldEnum | ListaCompraScalarFieldEnum[]
  }

  /**
   * ListaCompra create
   */
  export type ListaCompraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaCompra
     */
    select?: ListaCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaCompra
     */
    omit?: ListaCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaCompraInclude<ExtArgs> | null
    /**
     * The data needed to create a ListaCompra.
     */
    data: XOR<ListaCompraCreateInput, ListaCompraUncheckedCreateInput>
  }

  /**
   * ListaCompra createMany
   */
  export type ListaCompraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ListaCompras.
     */
    data: ListaCompraCreateManyInput | ListaCompraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ListaCompra createManyAndReturn
   */
  export type ListaCompraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaCompra
     */
    select?: ListaCompraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListaCompra
     */
    omit?: ListaCompraOmit<ExtArgs> | null
    /**
     * The data used to create many ListaCompras.
     */
    data: ListaCompraCreateManyInput | ListaCompraCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaCompraIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListaCompra update
   */
  export type ListaCompraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaCompra
     */
    select?: ListaCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaCompra
     */
    omit?: ListaCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaCompraInclude<ExtArgs> | null
    /**
     * The data needed to update a ListaCompra.
     */
    data: XOR<ListaCompraUpdateInput, ListaCompraUncheckedUpdateInput>
    /**
     * Choose, which ListaCompra to update.
     */
    where: ListaCompraWhereUniqueInput
  }

  /**
   * ListaCompra updateMany
   */
  export type ListaCompraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ListaCompras.
     */
    data: XOR<ListaCompraUpdateManyMutationInput, ListaCompraUncheckedUpdateManyInput>
    /**
     * Filter which ListaCompras to update
     */
    where?: ListaCompraWhereInput
    /**
     * Limit how many ListaCompras to update.
     */
    limit?: number
  }

  /**
   * ListaCompra updateManyAndReturn
   */
  export type ListaCompraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaCompra
     */
    select?: ListaCompraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListaCompra
     */
    omit?: ListaCompraOmit<ExtArgs> | null
    /**
     * The data used to update ListaCompras.
     */
    data: XOR<ListaCompraUpdateManyMutationInput, ListaCompraUncheckedUpdateManyInput>
    /**
     * Filter which ListaCompras to update
     */
    where?: ListaCompraWhereInput
    /**
     * Limit how many ListaCompras to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaCompraIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListaCompra upsert
   */
  export type ListaCompraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaCompra
     */
    select?: ListaCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaCompra
     */
    omit?: ListaCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaCompraInclude<ExtArgs> | null
    /**
     * The filter to search for the ListaCompra to update in case it exists.
     */
    where: ListaCompraWhereUniqueInput
    /**
     * In case the ListaCompra found by the `where` argument doesn't exist, create a new ListaCompra with this data.
     */
    create: XOR<ListaCompraCreateInput, ListaCompraUncheckedCreateInput>
    /**
     * In case the ListaCompra was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListaCompraUpdateInput, ListaCompraUncheckedUpdateInput>
  }

  /**
   * ListaCompra delete
   */
  export type ListaCompraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaCompra
     */
    select?: ListaCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaCompra
     */
    omit?: ListaCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaCompraInclude<ExtArgs> | null
    /**
     * Filter which ListaCompra to delete.
     */
    where: ListaCompraWhereUniqueInput
  }

  /**
   * ListaCompra deleteMany
   */
  export type ListaCompraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListaCompras to delete
     */
    where?: ListaCompraWhereInput
    /**
     * Limit how many ListaCompras to delete.
     */
    limit?: number
  }

  /**
   * ListaCompra without action
   */
  export type ListaCompraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListaCompra
     */
    select?: ListaCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListaCompra
     */
    omit?: ListaCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListaCompraInclude<ExtArgs> | null
  }


  /**
   * Model EstoqueHistorico
   */

  export type AggregateEstoqueHistorico = {
    _count: EstoqueHistoricoCountAggregateOutputType | null
    _avg: EstoqueHistoricoAvgAggregateOutputType | null
    _sum: EstoqueHistoricoSumAggregateOutputType | null
    _min: EstoqueHistoricoMinAggregateOutputType | null
    _max: EstoqueHistoricoMaxAggregateOutputType | null
  }

  export type EstoqueHistoricoAvgAggregateOutputType = {
    quantidade: number | null
  }

  export type EstoqueHistoricoSumAggregateOutputType = {
    quantidade: number | null
  }

  export type EstoqueHistoricoMinAggregateOutputType = {
    id: string | null
    insumoId: string | null
    usuarioId: string | null
    tipo: $Enums.TipoMovimentacao | null
    quantidade: number | null
    dataHora: Date | null
  }

  export type EstoqueHistoricoMaxAggregateOutputType = {
    id: string | null
    insumoId: string | null
    usuarioId: string | null
    tipo: $Enums.TipoMovimentacao | null
    quantidade: number | null
    dataHora: Date | null
  }

  export type EstoqueHistoricoCountAggregateOutputType = {
    id: number
    insumoId: number
    usuarioId: number
    tipo: number
    quantidade: number
    dataHora: number
    _all: number
  }


  export type EstoqueHistoricoAvgAggregateInputType = {
    quantidade?: true
  }

  export type EstoqueHistoricoSumAggregateInputType = {
    quantidade?: true
  }

  export type EstoqueHistoricoMinAggregateInputType = {
    id?: true
    insumoId?: true
    usuarioId?: true
    tipo?: true
    quantidade?: true
    dataHora?: true
  }

  export type EstoqueHistoricoMaxAggregateInputType = {
    id?: true
    insumoId?: true
    usuarioId?: true
    tipo?: true
    quantidade?: true
    dataHora?: true
  }

  export type EstoqueHistoricoCountAggregateInputType = {
    id?: true
    insumoId?: true
    usuarioId?: true
    tipo?: true
    quantidade?: true
    dataHora?: true
    _all?: true
  }

  export type EstoqueHistoricoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EstoqueHistorico to aggregate.
     */
    where?: EstoqueHistoricoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstoqueHistoricos to fetch.
     */
    orderBy?: EstoqueHistoricoOrderByWithRelationInput | EstoqueHistoricoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstoqueHistoricoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstoqueHistoricos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstoqueHistoricos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EstoqueHistoricos
    **/
    _count?: true | EstoqueHistoricoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstoqueHistoricoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstoqueHistoricoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstoqueHistoricoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstoqueHistoricoMaxAggregateInputType
  }

  export type GetEstoqueHistoricoAggregateType<T extends EstoqueHistoricoAggregateArgs> = {
        [P in keyof T & keyof AggregateEstoqueHistorico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstoqueHistorico[P]>
      : GetScalarType<T[P], AggregateEstoqueHistorico[P]>
  }




  export type EstoqueHistoricoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstoqueHistoricoWhereInput
    orderBy?: EstoqueHistoricoOrderByWithAggregationInput | EstoqueHistoricoOrderByWithAggregationInput[]
    by: EstoqueHistoricoScalarFieldEnum[] | EstoqueHistoricoScalarFieldEnum
    having?: EstoqueHistoricoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstoqueHistoricoCountAggregateInputType | true
    _avg?: EstoqueHistoricoAvgAggregateInputType
    _sum?: EstoqueHistoricoSumAggregateInputType
    _min?: EstoqueHistoricoMinAggregateInputType
    _max?: EstoqueHistoricoMaxAggregateInputType
  }

  export type EstoqueHistoricoGroupByOutputType = {
    id: string
    insumoId: string
    usuarioId: string
    tipo: $Enums.TipoMovimentacao
    quantidade: number
    dataHora: Date
    _count: EstoqueHistoricoCountAggregateOutputType | null
    _avg: EstoqueHistoricoAvgAggregateOutputType | null
    _sum: EstoqueHistoricoSumAggregateOutputType | null
    _min: EstoqueHistoricoMinAggregateOutputType | null
    _max: EstoqueHistoricoMaxAggregateOutputType | null
  }

  type GetEstoqueHistoricoGroupByPayload<T extends EstoqueHistoricoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstoqueHistoricoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstoqueHistoricoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstoqueHistoricoGroupByOutputType[P]>
            : GetScalarType<T[P], EstoqueHistoricoGroupByOutputType[P]>
        }
      >
    >


  export type EstoqueHistoricoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    insumoId?: boolean
    usuarioId?: boolean
    tipo?: boolean
    quantidade?: boolean
    dataHora?: boolean
    insumo?: boolean | InsumoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estoqueHistorico"]>

  export type EstoqueHistoricoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    insumoId?: boolean
    usuarioId?: boolean
    tipo?: boolean
    quantidade?: boolean
    dataHora?: boolean
    insumo?: boolean | InsumoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estoqueHistorico"]>

  export type EstoqueHistoricoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    insumoId?: boolean
    usuarioId?: boolean
    tipo?: boolean
    quantidade?: boolean
    dataHora?: boolean
    insumo?: boolean | InsumoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estoqueHistorico"]>

  export type EstoqueHistoricoSelectScalar = {
    id?: boolean
    insumoId?: boolean
    usuarioId?: boolean
    tipo?: boolean
    quantidade?: boolean
    dataHora?: boolean
  }

  export type EstoqueHistoricoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "insumoId" | "usuarioId" | "tipo" | "quantidade" | "dataHora", ExtArgs["result"]["estoqueHistorico"]>
  export type EstoqueHistoricoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insumo?: boolean | InsumoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type EstoqueHistoricoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insumo?: boolean | InsumoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type EstoqueHistoricoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insumo?: boolean | InsumoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $EstoqueHistoricoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EstoqueHistorico"
    objects: {
      insumo: Prisma.$InsumoPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      insumoId: string
      usuarioId: string
      tipo: $Enums.TipoMovimentacao
      quantidade: number
      dataHora: Date
    }, ExtArgs["result"]["estoqueHistorico"]>
    composites: {}
  }

  type EstoqueHistoricoGetPayload<S extends boolean | null | undefined | EstoqueHistoricoDefaultArgs> = $Result.GetResult<Prisma.$EstoqueHistoricoPayload, S>

  type EstoqueHistoricoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstoqueHistoricoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstoqueHistoricoCountAggregateInputType | true
    }

  export interface EstoqueHistoricoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EstoqueHistorico'], meta: { name: 'EstoqueHistorico' } }
    /**
     * Find zero or one EstoqueHistorico that matches the filter.
     * @param {EstoqueHistoricoFindUniqueArgs} args - Arguments to find a EstoqueHistorico
     * @example
     * // Get one EstoqueHistorico
     * const estoqueHistorico = await prisma.estoqueHistorico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstoqueHistoricoFindUniqueArgs>(args: SelectSubset<T, EstoqueHistoricoFindUniqueArgs<ExtArgs>>): Prisma__EstoqueHistoricoClient<$Result.GetResult<Prisma.$EstoqueHistoricoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EstoqueHistorico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstoqueHistoricoFindUniqueOrThrowArgs} args - Arguments to find a EstoqueHistorico
     * @example
     * // Get one EstoqueHistorico
     * const estoqueHistorico = await prisma.estoqueHistorico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstoqueHistoricoFindUniqueOrThrowArgs>(args: SelectSubset<T, EstoqueHistoricoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstoqueHistoricoClient<$Result.GetResult<Prisma.$EstoqueHistoricoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EstoqueHistorico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstoqueHistoricoFindFirstArgs} args - Arguments to find a EstoqueHistorico
     * @example
     * // Get one EstoqueHistorico
     * const estoqueHistorico = await prisma.estoqueHistorico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstoqueHistoricoFindFirstArgs>(args?: SelectSubset<T, EstoqueHistoricoFindFirstArgs<ExtArgs>>): Prisma__EstoqueHistoricoClient<$Result.GetResult<Prisma.$EstoqueHistoricoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EstoqueHistorico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstoqueHistoricoFindFirstOrThrowArgs} args - Arguments to find a EstoqueHistorico
     * @example
     * // Get one EstoqueHistorico
     * const estoqueHistorico = await prisma.estoqueHistorico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstoqueHistoricoFindFirstOrThrowArgs>(args?: SelectSubset<T, EstoqueHistoricoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstoqueHistoricoClient<$Result.GetResult<Prisma.$EstoqueHistoricoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EstoqueHistoricos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstoqueHistoricoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EstoqueHistoricos
     * const estoqueHistoricos = await prisma.estoqueHistorico.findMany()
     * 
     * // Get first 10 EstoqueHistoricos
     * const estoqueHistoricos = await prisma.estoqueHistorico.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estoqueHistoricoWithIdOnly = await prisma.estoqueHistorico.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EstoqueHistoricoFindManyArgs>(args?: SelectSubset<T, EstoqueHistoricoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstoqueHistoricoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EstoqueHistorico.
     * @param {EstoqueHistoricoCreateArgs} args - Arguments to create a EstoqueHistorico.
     * @example
     * // Create one EstoqueHistorico
     * const EstoqueHistorico = await prisma.estoqueHistorico.create({
     *   data: {
     *     // ... data to create a EstoqueHistorico
     *   }
     * })
     * 
     */
    create<T extends EstoqueHistoricoCreateArgs>(args: SelectSubset<T, EstoqueHistoricoCreateArgs<ExtArgs>>): Prisma__EstoqueHistoricoClient<$Result.GetResult<Prisma.$EstoqueHistoricoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EstoqueHistoricos.
     * @param {EstoqueHistoricoCreateManyArgs} args - Arguments to create many EstoqueHistoricos.
     * @example
     * // Create many EstoqueHistoricos
     * const estoqueHistorico = await prisma.estoqueHistorico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstoqueHistoricoCreateManyArgs>(args?: SelectSubset<T, EstoqueHistoricoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EstoqueHistoricos and returns the data saved in the database.
     * @param {EstoqueHistoricoCreateManyAndReturnArgs} args - Arguments to create many EstoqueHistoricos.
     * @example
     * // Create many EstoqueHistoricos
     * const estoqueHistorico = await prisma.estoqueHistorico.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EstoqueHistoricos and only return the `id`
     * const estoqueHistoricoWithIdOnly = await prisma.estoqueHistorico.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EstoqueHistoricoCreateManyAndReturnArgs>(args?: SelectSubset<T, EstoqueHistoricoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstoqueHistoricoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EstoqueHistorico.
     * @param {EstoqueHistoricoDeleteArgs} args - Arguments to delete one EstoqueHistorico.
     * @example
     * // Delete one EstoqueHistorico
     * const EstoqueHistorico = await prisma.estoqueHistorico.delete({
     *   where: {
     *     // ... filter to delete one EstoqueHistorico
     *   }
     * })
     * 
     */
    delete<T extends EstoqueHistoricoDeleteArgs>(args: SelectSubset<T, EstoqueHistoricoDeleteArgs<ExtArgs>>): Prisma__EstoqueHistoricoClient<$Result.GetResult<Prisma.$EstoqueHistoricoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EstoqueHistorico.
     * @param {EstoqueHistoricoUpdateArgs} args - Arguments to update one EstoqueHistorico.
     * @example
     * // Update one EstoqueHistorico
     * const estoqueHistorico = await prisma.estoqueHistorico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstoqueHistoricoUpdateArgs>(args: SelectSubset<T, EstoqueHistoricoUpdateArgs<ExtArgs>>): Prisma__EstoqueHistoricoClient<$Result.GetResult<Prisma.$EstoqueHistoricoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EstoqueHistoricos.
     * @param {EstoqueHistoricoDeleteManyArgs} args - Arguments to filter EstoqueHistoricos to delete.
     * @example
     * // Delete a few EstoqueHistoricos
     * const { count } = await prisma.estoqueHistorico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstoqueHistoricoDeleteManyArgs>(args?: SelectSubset<T, EstoqueHistoricoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EstoqueHistoricos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstoqueHistoricoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EstoqueHistoricos
     * const estoqueHistorico = await prisma.estoqueHistorico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstoqueHistoricoUpdateManyArgs>(args: SelectSubset<T, EstoqueHistoricoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EstoqueHistoricos and returns the data updated in the database.
     * @param {EstoqueHistoricoUpdateManyAndReturnArgs} args - Arguments to update many EstoqueHistoricos.
     * @example
     * // Update many EstoqueHistoricos
     * const estoqueHistorico = await prisma.estoqueHistorico.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EstoqueHistoricos and only return the `id`
     * const estoqueHistoricoWithIdOnly = await prisma.estoqueHistorico.updateManyAndReturn({
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
    updateManyAndReturn<T extends EstoqueHistoricoUpdateManyAndReturnArgs>(args: SelectSubset<T, EstoqueHistoricoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstoqueHistoricoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EstoqueHistorico.
     * @param {EstoqueHistoricoUpsertArgs} args - Arguments to update or create a EstoqueHistorico.
     * @example
     * // Update or create a EstoqueHistorico
     * const estoqueHistorico = await prisma.estoqueHistorico.upsert({
     *   create: {
     *     // ... data to create a EstoqueHistorico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EstoqueHistorico we want to update
     *   }
     * })
     */
    upsert<T extends EstoqueHistoricoUpsertArgs>(args: SelectSubset<T, EstoqueHistoricoUpsertArgs<ExtArgs>>): Prisma__EstoqueHistoricoClient<$Result.GetResult<Prisma.$EstoqueHistoricoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EstoqueHistoricos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstoqueHistoricoCountArgs} args - Arguments to filter EstoqueHistoricos to count.
     * @example
     * // Count the number of EstoqueHistoricos
     * const count = await prisma.estoqueHistorico.count({
     *   where: {
     *     // ... the filter for the EstoqueHistoricos we want to count
     *   }
     * })
    **/
    count<T extends EstoqueHistoricoCountArgs>(
      args?: Subset<T, EstoqueHistoricoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstoqueHistoricoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EstoqueHistorico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstoqueHistoricoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstoqueHistoricoAggregateArgs>(args: Subset<T, EstoqueHistoricoAggregateArgs>): Prisma.PrismaPromise<GetEstoqueHistoricoAggregateType<T>>

    /**
     * Group by EstoqueHistorico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstoqueHistoricoGroupByArgs} args - Group by arguments.
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
      T extends EstoqueHistoricoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstoqueHistoricoGroupByArgs['orderBy'] }
        : { orderBy?: EstoqueHistoricoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EstoqueHistoricoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstoqueHistoricoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EstoqueHistorico model
   */
  readonly fields: EstoqueHistoricoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EstoqueHistorico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstoqueHistoricoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    insumo<T extends InsumoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InsumoDefaultArgs<ExtArgs>>): Prisma__InsumoClient<$Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EstoqueHistorico model
   */
  interface EstoqueHistoricoFieldRefs {
    readonly id: FieldRef<"EstoqueHistorico", 'String'>
    readonly insumoId: FieldRef<"EstoqueHistorico", 'String'>
    readonly usuarioId: FieldRef<"EstoqueHistorico", 'String'>
    readonly tipo: FieldRef<"EstoqueHistorico", 'TipoMovimentacao'>
    readonly quantidade: FieldRef<"EstoqueHistorico", 'Float'>
    readonly dataHora: FieldRef<"EstoqueHistorico", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EstoqueHistorico findUnique
   */
  export type EstoqueHistoricoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstoqueHistorico
     */
    select?: EstoqueHistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstoqueHistorico
     */
    omit?: EstoqueHistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoqueHistoricoInclude<ExtArgs> | null
    /**
     * Filter, which EstoqueHistorico to fetch.
     */
    where: EstoqueHistoricoWhereUniqueInput
  }

  /**
   * EstoqueHistorico findUniqueOrThrow
   */
  export type EstoqueHistoricoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstoqueHistorico
     */
    select?: EstoqueHistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstoqueHistorico
     */
    omit?: EstoqueHistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoqueHistoricoInclude<ExtArgs> | null
    /**
     * Filter, which EstoqueHistorico to fetch.
     */
    where: EstoqueHistoricoWhereUniqueInput
  }

  /**
   * EstoqueHistorico findFirst
   */
  export type EstoqueHistoricoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstoqueHistorico
     */
    select?: EstoqueHistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstoqueHistorico
     */
    omit?: EstoqueHistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoqueHistoricoInclude<ExtArgs> | null
    /**
     * Filter, which EstoqueHistorico to fetch.
     */
    where?: EstoqueHistoricoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstoqueHistoricos to fetch.
     */
    orderBy?: EstoqueHistoricoOrderByWithRelationInput | EstoqueHistoricoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EstoqueHistoricos.
     */
    cursor?: EstoqueHistoricoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstoqueHistoricos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstoqueHistoricos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EstoqueHistoricos.
     */
    distinct?: EstoqueHistoricoScalarFieldEnum | EstoqueHistoricoScalarFieldEnum[]
  }

  /**
   * EstoqueHistorico findFirstOrThrow
   */
  export type EstoqueHistoricoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstoqueHistorico
     */
    select?: EstoqueHistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstoqueHistorico
     */
    omit?: EstoqueHistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoqueHistoricoInclude<ExtArgs> | null
    /**
     * Filter, which EstoqueHistorico to fetch.
     */
    where?: EstoqueHistoricoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstoqueHistoricos to fetch.
     */
    orderBy?: EstoqueHistoricoOrderByWithRelationInput | EstoqueHistoricoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EstoqueHistoricos.
     */
    cursor?: EstoqueHistoricoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstoqueHistoricos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstoqueHistoricos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EstoqueHistoricos.
     */
    distinct?: EstoqueHistoricoScalarFieldEnum | EstoqueHistoricoScalarFieldEnum[]
  }

  /**
   * EstoqueHistorico findMany
   */
  export type EstoqueHistoricoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstoqueHistorico
     */
    select?: EstoqueHistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstoqueHistorico
     */
    omit?: EstoqueHistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoqueHistoricoInclude<ExtArgs> | null
    /**
     * Filter, which EstoqueHistoricos to fetch.
     */
    where?: EstoqueHistoricoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstoqueHistoricos to fetch.
     */
    orderBy?: EstoqueHistoricoOrderByWithRelationInput | EstoqueHistoricoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EstoqueHistoricos.
     */
    cursor?: EstoqueHistoricoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstoqueHistoricos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstoqueHistoricos.
     */
    skip?: number
    distinct?: EstoqueHistoricoScalarFieldEnum | EstoqueHistoricoScalarFieldEnum[]
  }

  /**
   * EstoqueHistorico create
   */
  export type EstoqueHistoricoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstoqueHistorico
     */
    select?: EstoqueHistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstoqueHistorico
     */
    omit?: EstoqueHistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoqueHistoricoInclude<ExtArgs> | null
    /**
     * The data needed to create a EstoqueHistorico.
     */
    data: XOR<EstoqueHistoricoCreateInput, EstoqueHistoricoUncheckedCreateInput>
  }

  /**
   * EstoqueHistorico createMany
   */
  export type EstoqueHistoricoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EstoqueHistoricos.
     */
    data: EstoqueHistoricoCreateManyInput | EstoqueHistoricoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EstoqueHistorico createManyAndReturn
   */
  export type EstoqueHistoricoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstoqueHistorico
     */
    select?: EstoqueHistoricoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EstoqueHistorico
     */
    omit?: EstoqueHistoricoOmit<ExtArgs> | null
    /**
     * The data used to create many EstoqueHistoricos.
     */
    data: EstoqueHistoricoCreateManyInput | EstoqueHistoricoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoqueHistoricoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EstoqueHistorico update
   */
  export type EstoqueHistoricoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstoqueHistorico
     */
    select?: EstoqueHistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstoqueHistorico
     */
    omit?: EstoqueHistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoqueHistoricoInclude<ExtArgs> | null
    /**
     * The data needed to update a EstoqueHistorico.
     */
    data: XOR<EstoqueHistoricoUpdateInput, EstoqueHistoricoUncheckedUpdateInput>
    /**
     * Choose, which EstoqueHistorico to update.
     */
    where: EstoqueHistoricoWhereUniqueInput
  }

  /**
   * EstoqueHistorico updateMany
   */
  export type EstoqueHistoricoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EstoqueHistoricos.
     */
    data: XOR<EstoqueHistoricoUpdateManyMutationInput, EstoqueHistoricoUncheckedUpdateManyInput>
    /**
     * Filter which EstoqueHistoricos to update
     */
    where?: EstoqueHistoricoWhereInput
    /**
     * Limit how many EstoqueHistoricos to update.
     */
    limit?: number
  }

  /**
   * EstoqueHistorico updateManyAndReturn
   */
  export type EstoqueHistoricoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstoqueHistorico
     */
    select?: EstoqueHistoricoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EstoqueHistorico
     */
    omit?: EstoqueHistoricoOmit<ExtArgs> | null
    /**
     * The data used to update EstoqueHistoricos.
     */
    data: XOR<EstoqueHistoricoUpdateManyMutationInput, EstoqueHistoricoUncheckedUpdateManyInput>
    /**
     * Filter which EstoqueHistoricos to update
     */
    where?: EstoqueHistoricoWhereInput
    /**
     * Limit how many EstoqueHistoricos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoqueHistoricoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EstoqueHistorico upsert
   */
  export type EstoqueHistoricoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstoqueHistorico
     */
    select?: EstoqueHistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstoqueHistorico
     */
    omit?: EstoqueHistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoqueHistoricoInclude<ExtArgs> | null
    /**
     * The filter to search for the EstoqueHistorico to update in case it exists.
     */
    where: EstoqueHistoricoWhereUniqueInput
    /**
     * In case the EstoqueHistorico found by the `where` argument doesn't exist, create a new EstoqueHistorico with this data.
     */
    create: XOR<EstoqueHistoricoCreateInput, EstoqueHistoricoUncheckedCreateInput>
    /**
     * In case the EstoqueHistorico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstoqueHistoricoUpdateInput, EstoqueHistoricoUncheckedUpdateInput>
  }

  /**
   * EstoqueHistorico delete
   */
  export type EstoqueHistoricoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstoqueHistorico
     */
    select?: EstoqueHistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstoqueHistorico
     */
    omit?: EstoqueHistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoqueHistoricoInclude<ExtArgs> | null
    /**
     * Filter which EstoqueHistorico to delete.
     */
    where: EstoqueHistoricoWhereUniqueInput
  }

  /**
   * EstoqueHistorico deleteMany
   */
  export type EstoqueHistoricoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EstoqueHistoricos to delete
     */
    where?: EstoqueHistoricoWhereInput
    /**
     * Limit how many EstoqueHistoricos to delete.
     */
    limit?: number
  }

  /**
   * EstoqueHistorico without action
   */
  export type EstoqueHistoricoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstoqueHistorico
     */
    select?: EstoqueHistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstoqueHistorico
     */
    omit?: EstoqueHistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstoqueHistoricoInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    email: 'email',
    senha: 'senha',
    nome: 'nome'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const InsumoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    unidade: 'unidade',
    quantidade: 'quantidade',
    validade: 'validade',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InsumoScalarFieldEnum = (typeof InsumoScalarFieldEnum)[keyof typeof InsumoScalarFieldEnum]


  export const ReceitaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReceitaScalarFieldEnum = (typeof ReceitaScalarFieldEnum)[keyof typeof ReceitaScalarFieldEnum]


  export const ReceitaInsumoScalarFieldEnum: {
    id: 'id',
    receitaId: 'receitaId',
    insumoId: 'insumoId',
    quantidade: 'quantidade'
  };

  export type ReceitaInsumoScalarFieldEnum = (typeof ReceitaInsumoScalarFieldEnum)[keyof typeof ReceitaInsumoScalarFieldEnum]


  export const PlanejamentoProducaoScalarFieldEnum: {
    id: 'id',
    dataCriacao: 'dataCriacao',
    confirmado: 'confirmado'
  };

  export type PlanejamentoProducaoScalarFieldEnum = (typeof PlanejamentoProducaoScalarFieldEnum)[keyof typeof PlanejamentoProducaoScalarFieldEnum]


  export const ReceitaPlanejadaScalarFieldEnum: {
    id: 'id',
    planejamentoId: 'planejamentoId',
    receitaId: 'receitaId',
    quantidadePlanejada: 'quantidadePlanejada'
  };

  export type ReceitaPlanejadaScalarFieldEnum = (typeof ReceitaPlanejadaScalarFieldEnum)[keyof typeof ReceitaPlanejadaScalarFieldEnum]


  export const ListaCompraScalarFieldEnum: {
    id: 'id',
    planejamentoId: 'planejamentoId',
    insumoId: 'insumoId',
    quantidadeFaltante: 'quantidadeFaltante'
  };

  export type ListaCompraScalarFieldEnum = (typeof ListaCompraScalarFieldEnum)[keyof typeof ListaCompraScalarFieldEnum]


  export const EstoqueHistoricoScalarFieldEnum: {
    id: 'id',
    insumoId: 'insumoId',
    usuarioId: 'usuarioId',
    tipo: 'tipo',
    quantidade: 'quantidade',
    dataHora: 'dataHora'
  };

  export type EstoqueHistoricoScalarFieldEnum = (typeof EstoqueHistoricoScalarFieldEnum)[keyof typeof EstoqueHistoricoScalarFieldEnum]


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
   * Reference to a field of type 'UnidadeMedida'
   */
  export type EnumUnidadeMedidaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UnidadeMedida'>
    


  /**
   * Reference to a field of type 'UnidadeMedida[]'
   */
  export type ListEnumUnidadeMedidaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UnidadeMedida[]'>
    


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'TipoMovimentacao'
   */
  export type EnumTipoMovimentacaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoMovimentacao'>
    


  /**
   * Reference to a field of type 'TipoMovimentacao[]'
   */
  export type ListEnumTipoMovimentacaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoMovimentacao[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    historicoMovimentacoes?: EstoqueHistoricoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
    historicoMovimentacoes?: EstoqueHistoricoOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    senha?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    historicoMovimentacoes?: EstoqueHistoricoListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    nome?: StringWithAggregatesFilter<"Usuario"> | string
  }

  export type InsumoWhereInput = {
    AND?: InsumoWhereInput | InsumoWhereInput[]
    OR?: InsumoWhereInput[]
    NOT?: InsumoWhereInput | InsumoWhereInput[]
    id?: StringFilter<"Insumo"> | string
    nome?: StringFilter<"Insumo"> | string
    unidade?: EnumUnidadeMedidaFilter<"Insumo"> | $Enums.UnidadeMedida
    quantidade?: FloatFilter<"Insumo"> | number
    validade?: DateTimeNullableFilter<"Insumo"> | Date | string | null
    createdAt?: DateTimeFilter<"Insumo"> | Date | string
    updatedAt?: DateTimeFilter<"Insumo"> | Date | string
    receitas?: ReceitaInsumoListRelationFilter
    historico?: EstoqueHistoricoListRelationFilter
    ListaCompra?: ListaCompraListRelationFilter
  }

  export type InsumoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    unidade?: SortOrder
    quantidade?: SortOrder
    validade?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    receitas?: ReceitaInsumoOrderByRelationAggregateInput
    historico?: EstoqueHistoricoOrderByRelationAggregateInput
    ListaCompra?: ListaCompraOrderByRelationAggregateInput
  }

  export type InsumoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nome?: string
    AND?: InsumoWhereInput | InsumoWhereInput[]
    OR?: InsumoWhereInput[]
    NOT?: InsumoWhereInput | InsumoWhereInput[]
    unidade?: EnumUnidadeMedidaFilter<"Insumo"> | $Enums.UnidadeMedida
    quantidade?: FloatFilter<"Insumo"> | number
    validade?: DateTimeNullableFilter<"Insumo"> | Date | string | null
    createdAt?: DateTimeFilter<"Insumo"> | Date | string
    updatedAt?: DateTimeFilter<"Insumo"> | Date | string
    receitas?: ReceitaInsumoListRelationFilter
    historico?: EstoqueHistoricoListRelationFilter
    ListaCompra?: ListaCompraListRelationFilter
  }, "id" | "nome">

  export type InsumoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    unidade?: SortOrder
    quantidade?: SortOrder
    validade?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InsumoCountOrderByAggregateInput
    _avg?: InsumoAvgOrderByAggregateInput
    _max?: InsumoMaxOrderByAggregateInput
    _min?: InsumoMinOrderByAggregateInput
    _sum?: InsumoSumOrderByAggregateInput
  }

  export type InsumoScalarWhereWithAggregatesInput = {
    AND?: InsumoScalarWhereWithAggregatesInput | InsumoScalarWhereWithAggregatesInput[]
    OR?: InsumoScalarWhereWithAggregatesInput[]
    NOT?: InsumoScalarWhereWithAggregatesInput | InsumoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Insumo"> | string
    nome?: StringWithAggregatesFilter<"Insumo"> | string
    unidade?: EnumUnidadeMedidaWithAggregatesFilter<"Insumo"> | $Enums.UnidadeMedida
    quantidade?: FloatWithAggregatesFilter<"Insumo"> | number
    validade?: DateTimeNullableWithAggregatesFilter<"Insumo"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Insumo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Insumo"> | Date | string
  }

  export type ReceitaWhereInput = {
    AND?: ReceitaWhereInput | ReceitaWhereInput[]
    OR?: ReceitaWhereInput[]
    NOT?: ReceitaWhereInput | ReceitaWhereInput[]
    id?: StringFilter<"Receita"> | string
    nome?: StringFilter<"Receita"> | string
    descricao?: StringNullableFilter<"Receita"> | string | null
    createdAt?: DateTimeFilter<"Receita"> | Date | string
    updatedAt?: DateTimeFilter<"Receita"> | Date | string
    insumos?: ReceitaInsumoListRelationFilter
    planejamentos?: ReceitaPlanejadaListRelationFilter
  }

  export type ReceitaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    insumos?: ReceitaInsumoOrderByRelationAggregateInput
    planejamentos?: ReceitaPlanejadaOrderByRelationAggregateInput
  }

  export type ReceitaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReceitaWhereInput | ReceitaWhereInput[]
    OR?: ReceitaWhereInput[]
    NOT?: ReceitaWhereInput | ReceitaWhereInput[]
    nome?: StringFilter<"Receita"> | string
    descricao?: StringNullableFilter<"Receita"> | string | null
    createdAt?: DateTimeFilter<"Receita"> | Date | string
    updatedAt?: DateTimeFilter<"Receita"> | Date | string
    insumos?: ReceitaInsumoListRelationFilter
    planejamentos?: ReceitaPlanejadaListRelationFilter
  }, "id">

  export type ReceitaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReceitaCountOrderByAggregateInput
    _max?: ReceitaMaxOrderByAggregateInput
    _min?: ReceitaMinOrderByAggregateInput
  }

  export type ReceitaScalarWhereWithAggregatesInput = {
    AND?: ReceitaScalarWhereWithAggregatesInput | ReceitaScalarWhereWithAggregatesInput[]
    OR?: ReceitaScalarWhereWithAggregatesInput[]
    NOT?: ReceitaScalarWhereWithAggregatesInput | ReceitaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Receita"> | string
    nome?: StringWithAggregatesFilter<"Receita"> | string
    descricao?: StringNullableWithAggregatesFilter<"Receita"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Receita"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Receita"> | Date | string
  }

  export type ReceitaInsumoWhereInput = {
    AND?: ReceitaInsumoWhereInput | ReceitaInsumoWhereInput[]
    OR?: ReceitaInsumoWhereInput[]
    NOT?: ReceitaInsumoWhereInput | ReceitaInsumoWhereInput[]
    id?: StringFilter<"ReceitaInsumo"> | string
    receitaId?: StringFilter<"ReceitaInsumo"> | string
    insumoId?: StringFilter<"ReceitaInsumo"> | string
    quantidade?: FloatFilter<"ReceitaInsumo"> | number
    receita?: XOR<ReceitaScalarRelationFilter, ReceitaWhereInput>
    insumo?: XOR<InsumoScalarRelationFilter, InsumoWhereInput>
  }

  export type ReceitaInsumoOrderByWithRelationInput = {
    id?: SortOrder
    receitaId?: SortOrder
    insumoId?: SortOrder
    quantidade?: SortOrder
    receita?: ReceitaOrderByWithRelationInput
    insumo?: InsumoOrderByWithRelationInput
  }

  export type ReceitaInsumoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReceitaInsumoWhereInput | ReceitaInsumoWhereInput[]
    OR?: ReceitaInsumoWhereInput[]
    NOT?: ReceitaInsumoWhereInput | ReceitaInsumoWhereInput[]
    receitaId?: StringFilter<"ReceitaInsumo"> | string
    insumoId?: StringFilter<"ReceitaInsumo"> | string
    quantidade?: FloatFilter<"ReceitaInsumo"> | number
    receita?: XOR<ReceitaScalarRelationFilter, ReceitaWhereInput>
    insumo?: XOR<InsumoScalarRelationFilter, InsumoWhereInput>
  }, "id">

  export type ReceitaInsumoOrderByWithAggregationInput = {
    id?: SortOrder
    receitaId?: SortOrder
    insumoId?: SortOrder
    quantidade?: SortOrder
    _count?: ReceitaInsumoCountOrderByAggregateInput
    _avg?: ReceitaInsumoAvgOrderByAggregateInput
    _max?: ReceitaInsumoMaxOrderByAggregateInput
    _min?: ReceitaInsumoMinOrderByAggregateInput
    _sum?: ReceitaInsumoSumOrderByAggregateInput
  }

  export type ReceitaInsumoScalarWhereWithAggregatesInput = {
    AND?: ReceitaInsumoScalarWhereWithAggregatesInput | ReceitaInsumoScalarWhereWithAggregatesInput[]
    OR?: ReceitaInsumoScalarWhereWithAggregatesInput[]
    NOT?: ReceitaInsumoScalarWhereWithAggregatesInput | ReceitaInsumoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReceitaInsumo"> | string
    receitaId?: StringWithAggregatesFilter<"ReceitaInsumo"> | string
    insumoId?: StringWithAggregatesFilter<"ReceitaInsumo"> | string
    quantidade?: FloatWithAggregatesFilter<"ReceitaInsumo"> | number
  }

  export type PlanejamentoProducaoWhereInput = {
    AND?: PlanejamentoProducaoWhereInput | PlanejamentoProducaoWhereInput[]
    OR?: PlanejamentoProducaoWhereInput[]
    NOT?: PlanejamentoProducaoWhereInput | PlanejamentoProducaoWhereInput[]
    id?: StringFilter<"PlanejamentoProducao"> | string
    dataCriacao?: DateTimeFilter<"PlanejamentoProducao"> | Date | string
    confirmado?: BoolFilter<"PlanejamentoProducao"> | boolean
    receitas?: ReceitaPlanejadaListRelationFilter
    compras?: ListaCompraListRelationFilter
  }

  export type PlanejamentoProducaoOrderByWithRelationInput = {
    id?: SortOrder
    dataCriacao?: SortOrder
    confirmado?: SortOrder
    receitas?: ReceitaPlanejadaOrderByRelationAggregateInput
    compras?: ListaCompraOrderByRelationAggregateInput
  }

  export type PlanejamentoProducaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlanejamentoProducaoWhereInput | PlanejamentoProducaoWhereInput[]
    OR?: PlanejamentoProducaoWhereInput[]
    NOT?: PlanejamentoProducaoWhereInput | PlanejamentoProducaoWhereInput[]
    dataCriacao?: DateTimeFilter<"PlanejamentoProducao"> | Date | string
    confirmado?: BoolFilter<"PlanejamentoProducao"> | boolean
    receitas?: ReceitaPlanejadaListRelationFilter
    compras?: ListaCompraListRelationFilter
  }, "id">

  export type PlanejamentoProducaoOrderByWithAggregationInput = {
    id?: SortOrder
    dataCriacao?: SortOrder
    confirmado?: SortOrder
    _count?: PlanejamentoProducaoCountOrderByAggregateInput
    _max?: PlanejamentoProducaoMaxOrderByAggregateInput
    _min?: PlanejamentoProducaoMinOrderByAggregateInput
  }

  export type PlanejamentoProducaoScalarWhereWithAggregatesInput = {
    AND?: PlanejamentoProducaoScalarWhereWithAggregatesInput | PlanejamentoProducaoScalarWhereWithAggregatesInput[]
    OR?: PlanejamentoProducaoScalarWhereWithAggregatesInput[]
    NOT?: PlanejamentoProducaoScalarWhereWithAggregatesInput | PlanejamentoProducaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlanejamentoProducao"> | string
    dataCriacao?: DateTimeWithAggregatesFilter<"PlanejamentoProducao"> | Date | string
    confirmado?: BoolWithAggregatesFilter<"PlanejamentoProducao"> | boolean
  }

  export type ReceitaPlanejadaWhereInput = {
    AND?: ReceitaPlanejadaWhereInput | ReceitaPlanejadaWhereInput[]
    OR?: ReceitaPlanejadaWhereInput[]
    NOT?: ReceitaPlanejadaWhereInput | ReceitaPlanejadaWhereInput[]
    id?: StringFilter<"ReceitaPlanejada"> | string
    planejamentoId?: StringFilter<"ReceitaPlanejada"> | string
    receitaId?: StringFilter<"ReceitaPlanejada"> | string
    quantidadePlanejada?: IntFilter<"ReceitaPlanejada"> | number
    planejamento?: XOR<PlanejamentoProducaoScalarRelationFilter, PlanejamentoProducaoWhereInput>
    receita?: XOR<ReceitaScalarRelationFilter, ReceitaWhereInput>
  }

  export type ReceitaPlanejadaOrderByWithRelationInput = {
    id?: SortOrder
    planejamentoId?: SortOrder
    receitaId?: SortOrder
    quantidadePlanejada?: SortOrder
    planejamento?: PlanejamentoProducaoOrderByWithRelationInput
    receita?: ReceitaOrderByWithRelationInput
  }

  export type ReceitaPlanejadaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReceitaPlanejadaWhereInput | ReceitaPlanejadaWhereInput[]
    OR?: ReceitaPlanejadaWhereInput[]
    NOT?: ReceitaPlanejadaWhereInput | ReceitaPlanejadaWhereInput[]
    planejamentoId?: StringFilter<"ReceitaPlanejada"> | string
    receitaId?: StringFilter<"ReceitaPlanejada"> | string
    quantidadePlanejada?: IntFilter<"ReceitaPlanejada"> | number
    planejamento?: XOR<PlanejamentoProducaoScalarRelationFilter, PlanejamentoProducaoWhereInput>
    receita?: XOR<ReceitaScalarRelationFilter, ReceitaWhereInput>
  }, "id">

  export type ReceitaPlanejadaOrderByWithAggregationInput = {
    id?: SortOrder
    planejamentoId?: SortOrder
    receitaId?: SortOrder
    quantidadePlanejada?: SortOrder
    _count?: ReceitaPlanejadaCountOrderByAggregateInput
    _avg?: ReceitaPlanejadaAvgOrderByAggregateInput
    _max?: ReceitaPlanejadaMaxOrderByAggregateInput
    _min?: ReceitaPlanejadaMinOrderByAggregateInput
    _sum?: ReceitaPlanejadaSumOrderByAggregateInput
  }

  export type ReceitaPlanejadaScalarWhereWithAggregatesInput = {
    AND?: ReceitaPlanejadaScalarWhereWithAggregatesInput | ReceitaPlanejadaScalarWhereWithAggregatesInput[]
    OR?: ReceitaPlanejadaScalarWhereWithAggregatesInput[]
    NOT?: ReceitaPlanejadaScalarWhereWithAggregatesInput | ReceitaPlanejadaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReceitaPlanejada"> | string
    planejamentoId?: StringWithAggregatesFilter<"ReceitaPlanejada"> | string
    receitaId?: StringWithAggregatesFilter<"ReceitaPlanejada"> | string
    quantidadePlanejada?: IntWithAggregatesFilter<"ReceitaPlanejada"> | number
  }

  export type ListaCompraWhereInput = {
    AND?: ListaCompraWhereInput | ListaCompraWhereInput[]
    OR?: ListaCompraWhereInput[]
    NOT?: ListaCompraWhereInput | ListaCompraWhereInput[]
    id?: StringFilter<"ListaCompra"> | string
    planejamentoId?: StringFilter<"ListaCompra"> | string
    insumoId?: StringFilter<"ListaCompra"> | string
    quantidadeFaltante?: FloatFilter<"ListaCompra"> | number
    planejamento?: XOR<PlanejamentoProducaoScalarRelationFilter, PlanejamentoProducaoWhereInput>
    insumo?: XOR<InsumoScalarRelationFilter, InsumoWhereInput>
  }

  export type ListaCompraOrderByWithRelationInput = {
    id?: SortOrder
    planejamentoId?: SortOrder
    insumoId?: SortOrder
    quantidadeFaltante?: SortOrder
    planejamento?: PlanejamentoProducaoOrderByWithRelationInput
    insumo?: InsumoOrderByWithRelationInput
  }

  export type ListaCompraWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ListaCompraWhereInput | ListaCompraWhereInput[]
    OR?: ListaCompraWhereInput[]
    NOT?: ListaCompraWhereInput | ListaCompraWhereInput[]
    planejamentoId?: StringFilter<"ListaCompra"> | string
    insumoId?: StringFilter<"ListaCompra"> | string
    quantidadeFaltante?: FloatFilter<"ListaCompra"> | number
    planejamento?: XOR<PlanejamentoProducaoScalarRelationFilter, PlanejamentoProducaoWhereInput>
    insumo?: XOR<InsumoScalarRelationFilter, InsumoWhereInput>
  }, "id">

  export type ListaCompraOrderByWithAggregationInput = {
    id?: SortOrder
    planejamentoId?: SortOrder
    insumoId?: SortOrder
    quantidadeFaltante?: SortOrder
    _count?: ListaCompraCountOrderByAggregateInput
    _avg?: ListaCompraAvgOrderByAggregateInput
    _max?: ListaCompraMaxOrderByAggregateInput
    _min?: ListaCompraMinOrderByAggregateInput
    _sum?: ListaCompraSumOrderByAggregateInput
  }

  export type ListaCompraScalarWhereWithAggregatesInput = {
    AND?: ListaCompraScalarWhereWithAggregatesInput | ListaCompraScalarWhereWithAggregatesInput[]
    OR?: ListaCompraScalarWhereWithAggregatesInput[]
    NOT?: ListaCompraScalarWhereWithAggregatesInput | ListaCompraScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ListaCompra"> | string
    planejamentoId?: StringWithAggregatesFilter<"ListaCompra"> | string
    insumoId?: StringWithAggregatesFilter<"ListaCompra"> | string
    quantidadeFaltante?: FloatWithAggregatesFilter<"ListaCompra"> | number
  }

  export type EstoqueHistoricoWhereInput = {
    AND?: EstoqueHistoricoWhereInput | EstoqueHistoricoWhereInput[]
    OR?: EstoqueHistoricoWhereInput[]
    NOT?: EstoqueHistoricoWhereInput | EstoqueHistoricoWhereInput[]
    id?: StringFilter<"EstoqueHistorico"> | string
    insumoId?: StringFilter<"EstoqueHistorico"> | string
    usuarioId?: StringFilter<"EstoqueHistorico"> | string
    tipo?: EnumTipoMovimentacaoFilter<"EstoqueHistorico"> | $Enums.TipoMovimentacao
    quantidade?: FloatFilter<"EstoqueHistorico"> | number
    dataHora?: DateTimeFilter<"EstoqueHistorico"> | Date | string
    insumo?: XOR<InsumoScalarRelationFilter, InsumoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type EstoqueHistoricoOrderByWithRelationInput = {
    id?: SortOrder
    insumoId?: SortOrder
    usuarioId?: SortOrder
    tipo?: SortOrder
    quantidade?: SortOrder
    dataHora?: SortOrder
    insumo?: InsumoOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type EstoqueHistoricoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EstoqueHistoricoWhereInput | EstoqueHistoricoWhereInput[]
    OR?: EstoqueHistoricoWhereInput[]
    NOT?: EstoqueHistoricoWhereInput | EstoqueHistoricoWhereInput[]
    insumoId?: StringFilter<"EstoqueHistorico"> | string
    usuarioId?: StringFilter<"EstoqueHistorico"> | string
    tipo?: EnumTipoMovimentacaoFilter<"EstoqueHistorico"> | $Enums.TipoMovimentacao
    quantidade?: FloatFilter<"EstoqueHistorico"> | number
    dataHora?: DateTimeFilter<"EstoqueHistorico"> | Date | string
    insumo?: XOR<InsumoScalarRelationFilter, InsumoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type EstoqueHistoricoOrderByWithAggregationInput = {
    id?: SortOrder
    insumoId?: SortOrder
    usuarioId?: SortOrder
    tipo?: SortOrder
    quantidade?: SortOrder
    dataHora?: SortOrder
    _count?: EstoqueHistoricoCountOrderByAggregateInput
    _avg?: EstoqueHistoricoAvgOrderByAggregateInput
    _max?: EstoqueHistoricoMaxOrderByAggregateInput
    _min?: EstoqueHistoricoMinOrderByAggregateInput
    _sum?: EstoqueHistoricoSumOrderByAggregateInput
  }

  export type EstoqueHistoricoScalarWhereWithAggregatesInput = {
    AND?: EstoqueHistoricoScalarWhereWithAggregatesInput | EstoqueHistoricoScalarWhereWithAggregatesInput[]
    OR?: EstoqueHistoricoScalarWhereWithAggregatesInput[]
    NOT?: EstoqueHistoricoScalarWhereWithAggregatesInput | EstoqueHistoricoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EstoqueHistorico"> | string
    insumoId?: StringWithAggregatesFilter<"EstoqueHistorico"> | string
    usuarioId?: StringWithAggregatesFilter<"EstoqueHistorico"> | string
    tipo?: EnumTipoMovimentacaoWithAggregatesFilter<"EstoqueHistorico"> | $Enums.TipoMovimentacao
    quantidade?: FloatWithAggregatesFilter<"EstoqueHistorico"> | number
    dataHora?: DateTimeWithAggregatesFilter<"EstoqueHistorico"> | Date | string
  }

  export type UsuarioCreateInput = {
    id?: string
    email: string
    senha: string
    nome: string
    historicoMovimentacoes?: EstoqueHistoricoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    email: string
    senha: string
    nome: string
    historicoMovimentacoes?: EstoqueHistoricoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    historicoMovimentacoes?: EstoqueHistoricoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    historicoMovimentacoes?: EstoqueHistoricoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    email: string
    senha: string
    nome: string
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type InsumoCreateInput = {
    id?: string
    nome: string
    unidade: $Enums.UnidadeMedida
    quantidade: number
    validade?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    receitas?: ReceitaInsumoCreateNestedManyWithoutInsumoInput
    historico?: EstoqueHistoricoCreateNestedManyWithoutInsumoInput
    ListaCompra?: ListaCompraCreateNestedManyWithoutInsumoInput
  }

  export type InsumoUncheckedCreateInput = {
    id?: string
    nome: string
    unidade: $Enums.UnidadeMedida
    quantidade: number
    validade?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    receitas?: ReceitaInsumoUncheckedCreateNestedManyWithoutInsumoInput
    historico?: EstoqueHistoricoUncheckedCreateNestedManyWithoutInsumoInput
    ListaCompra?: ListaCompraUncheckedCreateNestedManyWithoutInsumoInput
  }

  export type InsumoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    unidade?: EnumUnidadeMedidaFieldUpdateOperationsInput | $Enums.UnidadeMedida
    quantidade?: FloatFieldUpdateOperationsInput | number
    validade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receitas?: ReceitaInsumoUpdateManyWithoutInsumoNestedInput
    historico?: EstoqueHistoricoUpdateManyWithoutInsumoNestedInput
    ListaCompra?: ListaCompraUpdateManyWithoutInsumoNestedInput
  }

  export type InsumoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    unidade?: EnumUnidadeMedidaFieldUpdateOperationsInput | $Enums.UnidadeMedida
    quantidade?: FloatFieldUpdateOperationsInput | number
    validade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receitas?: ReceitaInsumoUncheckedUpdateManyWithoutInsumoNestedInput
    historico?: EstoqueHistoricoUncheckedUpdateManyWithoutInsumoNestedInput
    ListaCompra?: ListaCompraUncheckedUpdateManyWithoutInsumoNestedInput
  }

  export type InsumoCreateManyInput = {
    id?: string
    nome: string
    unidade: $Enums.UnidadeMedida
    quantidade: number
    validade?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InsumoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    unidade?: EnumUnidadeMedidaFieldUpdateOperationsInput | $Enums.UnidadeMedida
    quantidade?: FloatFieldUpdateOperationsInput | number
    validade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InsumoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    unidade?: EnumUnidadeMedidaFieldUpdateOperationsInput | $Enums.UnidadeMedida
    quantidade?: FloatFieldUpdateOperationsInput | number
    validade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceitaCreateInput = {
    id?: string
    nome: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    insumos?: ReceitaInsumoCreateNestedManyWithoutReceitaInput
    planejamentos?: ReceitaPlanejadaCreateNestedManyWithoutReceitaInput
  }

  export type ReceitaUncheckedCreateInput = {
    id?: string
    nome: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    insumos?: ReceitaInsumoUncheckedCreateNestedManyWithoutReceitaInput
    planejamentos?: ReceitaPlanejadaUncheckedCreateNestedManyWithoutReceitaInput
  }

  export type ReceitaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    insumos?: ReceitaInsumoUpdateManyWithoutReceitaNestedInput
    planejamentos?: ReceitaPlanejadaUpdateManyWithoutReceitaNestedInput
  }

  export type ReceitaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    insumos?: ReceitaInsumoUncheckedUpdateManyWithoutReceitaNestedInput
    planejamentos?: ReceitaPlanejadaUncheckedUpdateManyWithoutReceitaNestedInput
  }

  export type ReceitaCreateManyInput = {
    id?: string
    nome: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReceitaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceitaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceitaInsumoCreateInput = {
    id?: string
    quantidade: number
    receita: ReceitaCreateNestedOneWithoutInsumosInput
    insumo: InsumoCreateNestedOneWithoutReceitasInput
  }

  export type ReceitaInsumoUncheckedCreateInput = {
    id?: string
    receitaId: string
    insumoId: string
    quantidade: number
  }

  export type ReceitaInsumoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantidade?: FloatFieldUpdateOperationsInput | number
    receita?: ReceitaUpdateOneRequiredWithoutInsumosNestedInput
    insumo?: InsumoUpdateOneRequiredWithoutReceitasNestedInput
  }

  export type ReceitaInsumoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    receitaId?: StringFieldUpdateOperationsInput | string
    insumoId?: StringFieldUpdateOperationsInput | string
    quantidade?: FloatFieldUpdateOperationsInput | number
  }

  export type ReceitaInsumoCreateManyInput = {
    id?: string
    receitaId: string
    insumoId: string
    quantidade: number
  }

  export type ReceitaInsumoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantidade?: FloatFieldUpdateOperationsInput | number
  }

  export type ReceitaInsumoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    receitaId?: StringFieldUpdateOperationsInput | string
    insumoId?: StringFieldUpdateOperationsInput | string
    quantidade?: FloatFieldUpdateOperationsInput | number
  }

  export type PlanejamentoProducaoCreateInput = {
    id?: string
    dataCriacao?: Date | string
    confirmado?: boolean
    receitas?: ReceitaPlanejadaCreateNestedManyWithoutPlanejamentoInput
    compras?: ListaCompraCreateNestedManyWithoutPlanejamentoInput
  }

  export type PlanejamentoProducaoUncheckedCreateInput = {
    id?: string
    dataCriacao?: Date | string
    confirmado?: boolean
    receitas?: ReceitaPlanejadaUncheckedCreateNestedManyWithoutPlanejamentoInput
    compras?: ListaCompraUncheckedCreateNestedManyWithoutPlanejamentoInput
  }

  export type PlanejamentoProducaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmado?: BoolFieldUpdateOperationsInput | boolean
    receitas?: ReceitaPlanejadaUpdateManyWithoutPlanejamentoNestedInput
    compras?: ListaCompraUpdateManyWithoutPlanejamentoNestedInput
  }

  export type PlanejamentoProducaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmado?: BoolFieldUpdateOperationsInput | boolean
    receitas?: ReceitaPlanejadaUncheckedUpdateManyWithoutPlanejamentoNestedInput
    compras?: ListaCompraUncheckedUpdateManyWithoutPlanejamentoNestedInput
  }

  export type PlanejamentoProducaoCreateManyInput = {
    id?: string
    dataCriacao?: Date | string
    confirmado?: boolean
  }

  export type PlanejamentoProducaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PlanejamentoProducaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReceitaPlanejadaCreateInput = {
    id?: string
    quantidadePlanejada: number
    planejamento: PlanejamentoProducaoCreateNestedOneWithoutReceitasInput
    receita: ReceitaCreateNestedOneWithoutPlanejamentosInput
  }

  export type ReceitaPlanejadaUncheckedCreateInput = {
    id?: string
    planejamentoId: string
    receitaId: string
    quantidadePlanejada: number
  }

  export type ReceitaPlanejadaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantidadePlanejada?: IntFieldUpdateOperationsInput | number
    planejamento?: PlanejamentoProducaoUpdateOneRequiredWithoutReceitasNestedInput
    receita?: ReceitaUpdateOneRequiredWithoutPlanejamentosNestedInput
  }

  export type ReceitaPlanejadaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    planejamentoId?: StringFieldUpdateOperationsInput | string
    receitaId?: StringFieldUpdateOperationsInput | string
    quantidadePlanejada?: IntFieldUpdateOperationsInput | number
  }

  export type ReceitaPlanejadaCreateManyInput = {
    id?: string
    planejamentoId: string
    receitaId: string
    quantidadePlanejada: number
  }

  export type ReceitaPlanejadaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantidadePlanejada?: IntFieldUpdateOperationsInput | number
  }

  export type ReceitaPlanejadaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    planejamentoId?: StringFieldUpdateOperationsInput | string
    receitaId?: StringFieldUpdateOperationsInput | string
    quantidadePlanejada?: IntFieldUpdateOperationsInput | number
  }

  export type ListaCompraCreateInput = {
    id?: string
    quantidadeFaltante: number
    planejamento: PlanejamentoProducaoCreateNestedOneWithoutComprasInput
    insumo: InsumoCreateNestedOneWithoutListaCompraInput
  }

  export type ListaCompraUncheckedCreateInput = {
    id?: string
    planejamentoId: string
    insumoId: string
    quantidadeFaltante: number
  }

  export type ListaCompraUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantidadeFaltante?: FloatFieldUpdateOperationsInput | number
    planejamento?: PlanejamentoProducaoUpdateOneRequiredWithoutComprasNestedInput
    insumo?: InsumoUpdateOneRequiredWithoutListaCompraNestedInput
  }

  export type ListaCompraUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    planejamentoId?: StringFieldUpdateOperationsInput | string
    insumoId?: StringFieldUpdateOperationsInput | string
    quantidadeFaltante?: FloatFieldUpdateOperationsInput | number
  }

  export type ListaCompraCreateManyInput = {
    id?: string
    planejamentoId: string
    insumoId: string
    quantidadeFaltante: number
  }

  export type ListaCompraUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantidadeFaltante?: FloatFieldUpdateOperationsInput | number
  }

  export type ListaCompraUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    planejamentoId?: StringFieldUpdateOperationsInput | string
    insumoId?: StringFieldUpdateOperationsInput | string
    quantidadeFaltante?: FloatFieldUpdateOperationsInput | number
  }

  export type EstoqueHistoricoCreateInput = {
    id?: string
    tipo: $Enums.TipoMovimentacao
    quantidade: number
    dataHora?: Date | string
    insumo: InsumoCreateNestedOneWithoutHistoricoInput
    usuario: UsuarioCreateNestedOneWithoutHistoricoMovimentacoesInput
  }

  export type EstoqueHistoricoUncheckedCreateInput = {
    id?: string
    insumoId: string
    usuarioId: string
    tipo: $Enums.TipoMovimentacao
    quantidade: number
    dataHora?: Date | string
  }

  export type EstoqueHistoricoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    quantidade?: FloatFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    insumo?: InsumoUpdateOneRequiredWithoutHistoricoNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutHistoricoMovimentacoesNestedInput
  }

  export type EstoqueHistoricoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    insumoId?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    quantidade?: FloatFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstoqueHistoricoCreateManyInput = {
    id?: string
    insumoId: string
    usuarioId: string
    tipo: $Enums.TipoMovimentacao
    quantidade: number
    dataHora?: Date | string
  }

  export type EstoqueHistoricoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    quantidade?: FloatFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstoqueHistoricoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    insumoId?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    quantidade?: FloatFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EstoqueHistoricoListRelationFilter = {
    every?: EstoqueHistoricoWhereInput
    some?: EstoqueHistoricoWhereInput
    none?: EstoqueHistoricoWhereInput
  }

  export type EstoqueHistoricoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
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

  export type EnumUnidadeMedidaFilter<$PrismaModel = never> = {
    equals?: $Enums.UnidadeMedida | EnumUnidadeMedidaFieldRefInput<$PrismaModel>
    in?: $Enums.UnidadeMedida[] | ListEnumUnidadeMedidaFieldRefInput<$PrismaModel>
    notIn?: $Enums.UnidadeMedida[] | ListEnumUnidadeMedidaFieldRefInput<$PrismaModel>
    not?: NestedEnumUnidadeMedidaFilter<$PrismaModel> | $Enums.UnidadeMedida
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

  export type ReceitaInsumoListRelationFilter = {
    every?: ReceitaInsumoWhereInput
    some?: ReceitaInsumoWhereInput
    none?: ReceitaInsumoWhereInput
  }

  export type ListaCompraListRelationFilter = {
    every?: ListaCompraWhereInput
    some?: ListaCompraWhereInput
    none?: ListaCompraWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReceitaInsumoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ListaCompraOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InsumoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    unidade?: SortOrder
    quantidade?: SortOrder
    validade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InsumoAvgOrderByAggregateInput = {
    quantidade?: SortOrder
  }

  export type InsumoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    unidade?: SortOrder
    quantidade?: SortOrder
    validade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InsumoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    unidade?: SortOrder
    quantidade?: SortOrder
    validade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InsumoSumOrderByAggregateInput = {
    quantidade?: SortOrder
  }

  export type EnumUnidadeMedidaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UnidadeMedida | EnumUnidadeMedidaFieldRefInput<$PrismaModel>
    in?: $Enums.UnidadeMedida[] | ListEnumUnidadeMedidaFieldRefInput<$PrismaModel>
    notIn?: $Enums.UnidadeMedida[] | ListEnumUnidadeMedidaFieldRefInput<$PrismaModel>
    not?: NestedEnumUnidadeMedidaWithAggregatesFilter<$PrismaModel> | $Enums.UnidadeMedida
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUnidadeMedidaFilter<$PrismaModel>
    _max?: NestedEnumUnidadeMedidaFilter<$PrismaModel>
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

  export type ReceitaPlanejadaListRelationFilter = {
    every?: ReceitaPlanejadaWhereInput
    some?: ReceitaPlanejadaWhereInput
    none?: ReceitaPlanejadaWhereInput
  }

  export type ReceitaPlanejadaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReceitaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReceitaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReceitaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type ReceitaScalarRelationFilter = {
    is?: ReceitaWhereInput
    isNot?: ReceitaWhereInput
  }

  export type InsumoScalarRelationFilter = {
    is?: InsumoWhereInput
    isNot?: InsumoWhereInput
  }

  export type ReceitaInsumoCountOrderByAggregateInput = {
    id?: SortOrder
    receitaId?: SortOrder
    insumoId?: SortOrder
    quantidade?: SortOrder
  }

  export type ReceitaInsumoAvgOrderByAggregateInput = {
    quantidade?: SortOrder
  }

  export type ReceitaInsumoMaxOrderByAggregateInput = {
    id?: SortOrder
    receitaId?: SortOrder
    insumoId?: SortOrder
    quantidade?: SortOrder
  }

  export type ReceitaInsumoMinOrderByAggregateInput = {
    id?: SortOrder
    receitaId?: SortOrder
    insumoId?: SortOrder
    quantidade?: SortOrder
  }

  export type ReceitaInsumoSumOrderByAggregateInput = {
    quantidade?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PlanejamentoProducaoCountOrderByAggregateInput = {
    id?: SortOrder
    dataCriacao?: SortOrder
    confirmado?: SortOrder
  }

  export type PlanejamentoProducaoMaxOrderByAggregateInput = {
    id?: SortOrder
    dataCriacao?: SortOrder
    confirmado?: SortOrder
  }

  export type PlanejamentoProducaoMinOrderByAggregateInput = {
    id?: SortOrder
    dataCriacao?: SortOrder
    confirmado?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type PlanejamentoProducaoScalarRelationFilter = {
    is?: PlanejamentoProducaoWhereInput
    isNot?: PlanejamentoProducaoWhereInput
  }

  export type ReceitaPlanejadaCountOrderByAggregateInput = {
    id?: SortOrder
    planejamentoId?: SortOrder
    receitaId?: SortOrder
    quantidadePlanejada?: SortOrder
  }

  export type ReceitaPlanejadaAvgOrderByAggregateInput = {
    quantidadePlanejada?: SortOrder
  }

  export type ReceitaPlanejadaMaxOrderByAggregateInput = {
    id?: SortOrder
    planejamentoId?: SortOrder
    receitaId?: SortOrder
    quantidadePlanejada?: SortOrder
  }

  export type ReceitaPlanejadaMinOrderByAggregateInput = {
    id?: SortOrder
    planejamentoId?: SortOrder
    receitaId?: SortOrder
    quantidadePlanejada?: SortOrder
  }

  export type ReceitaPlanejadaSumOrderByAggregateInput = {
    quantidadePlanejada?: SortOrder
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

  export type ListaCompraCountOrderByAggregateInput = {
    id?: SortOrder
    planejamentoId?: SortOrder
    insumoId?: SortOrder
    quantidadeFaltante?: SortOrder
  }

  export type ListaCompraAvgOrderByAggregateInput = {
    quantidadeFaltante?: SortOrder
  }

  export type ListaCompraMaxOrderByAggregateInput = {
    id?: SortOrder
    planejamentoId?: SortOrder
    insumoId?: SortOrder
    quantidadeFaltante?: SortOrder
  }

  export type ListaCompraMinOrderByAggregateInput = {
    id?: SortOrder
    planejamentoId?: SortOrder
    insumoId?: SortOrder
    quantidadeFaltante?: SortOrder
  }

  export type ListaCompraSumOrderByAggregateInput = {
    quantidadeFaltante?: SortOrder
  }

  export type EnumTipoMovimentacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMovimentacao | EnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMovimentacao[] | ListEnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoMovimentacao[] | ListEnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoMovimentacaoFilter<$PrismaModel> | $Enums.TipoMovimentacao
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type EstoqueHistoricoCountOrderByAggregateInput = {
    id?: SortOrder
    insumoId?: SortOrder
    usuarioId?: SortOrder
    tipo?: SortOrder
    quantidade?: SortOrder
    dataHora?: SortOrder
  }

  export type EstoqueHistoricoAvgOrderByAggregateInput = {
    quantidade?: SortOrder
  }

  export type EstoqueHistoricoMaxOrderByAggregateInput = {
    id?: SortOrder
    insumoId?: SortOrder
    usuarioId?: SortOrder
    tipo?: SortOrder
    quantidade?: SortOrder
    dataHora?: SortOrder
  }

  export type EstoqueHistoricoMinOrderByAggregateInput = {
    id?: SortOrder
    insumoId?: SortOrder
    usuarioId?: SortOrder
    tipo?: SortOrder
    quantidade?: SortOrder
    dataHora?: SortOrder
  }

  export type EstoqueHistoricoSumOrderByAggregateInput = {
    quantidade?: SortOrder
  }

  export type EnumTipoMovimentacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMovimentacao | EnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMovimentacao[] | ListEnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoMovimentacao[] | ListEnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoMovimentacaoWithAggregatesFilter<$PrismaModel> | $Enums.TipoMovimentacao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoMovimentacaoFilter<$PrismaModel>
    _max?: NestedEnumTipoMovimentacaoFilter<$PrismaModel>
  }

  export type EstoqueHistoricoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<EstoqueHistoricoCreateWithoutUsuarioInput, EstoqueHistoricoUncheckedCreateWithoutUsuarioInput> | EstoqueHistoricoCreateWithoutUsuarioInput[] | EstoqueHistoricoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EstoqueHistoricoCreateOrConnectWithoutUsuarioInput | EstoqueHistoricoCreateOrConnectWithoutUsuarioInput[]
    createMany?: EstoqueHistoricoCreateManyUsuarioInputEnvelope
    connect?: EstoqueHistoricoWhereUniqueInput | EstoqueHistoricoWhereUniqueInput[]
  }

  export type EstoqueHistoricoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<EstoqueHistoricoCreateWithoutUsuarioInput, EstoqueHistoricoUncheckedCreateWithoutUsuarioInput> | EstoqueHistoricoCreateWithoutUsuarioInput[] | EstoqueHistoricoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EstoqueHistoricoCreateOrConnectWithoutUsuarioInput | EstoqueHistoricoCreateOrConnectWithoutUsuarioInput[]
    createMany?: EstoqueHistoricoCreateManyUsuarioInputEnvelope
    connect?: EstoqueHistoricoWhereUniqueInput | EstoqueHistoricoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EstoqueHistoricoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<EstoqueHistoricoCreateWithoutUsuarioInput, EstoqueHistoricoUncheckedCreateWithoutUsuarioInput> | EstoqueHistoricoCreateWithoutUsuarioInput[] | EstoqueHistoricoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EstoqueHistoricoCreateOrConnectWithoutUsuarioInput | EstoqueHistoricoCreateOrConnectWithoutUsuarioInput[]
    upsert?: EstoqueHistoricoUpsertWithWhereUniqueWithoutUsuarioInput | EstoqueHistoricoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: EstoqueHistoricoCreateManyUsuarioInputEnvelope
    set?: EstoqueHistoricoWhereUniqueInput | EstoqueHistoricoWhereUniqueInput[]
    disconnect?: EstoqueHistoricoWhereUniqueInput | EstoqueHistoricoWhereUniqueInput[]
    delete?: EstoqueHistoricoWhereUniqueInput | EstoqueHistoricoWhereUniqueInput[]
    connect?: EstoqueHistoricoWhereUniqueInput | EstoqueHistoricoWhereUniqueInput[]
    update?: EstoqueHistoricoUpdateWithWhereUniqueWithoutUsuarioInput | EstoqueHistoricoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: EstoqueHistoricoUpdateManyWithWhereWithoutUsuarioInput | EstoqueHistoricoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: EstoqueHistoricoScalarWhereInput | EstoqueHistoricoScalarWhereInput[]
  }

  export type EstoqueHistoricoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<EstoqueHistoricoCreateWithoutUsuarioInput, EstoqueHistoricoUncheckedCreateWithoutUsuarioInput> | EstoqueHistoricoCreateWithoutUsuarioInput[] | EstoqueHistoricoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EstoqueHistoricoCreateOrConnectWithoutUsuarioInput | EstoqueHistoricoCreateOrConnectWithoutUsuarioInput[]
    upsert?: EstoqueHistoricoUpsertWithWhereUniqueWithoutUsuarioInput | EstoqueHistoricoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: EstoqueHistoricoCreateManyUsuarioInputEnvelope
    set?: EstoqueHistoricoWhereUniqueInput | EstoqueHistoricoWhereUniqueInput[]
    disconnect?: EstoqueHistoricoWhereUniqueInput | EstoqueHistoricoWhereUniqueInput[]
    delete?: EstoqueHistoricoWhereUniqueInput | EstoqueHistoricoWhereUniqueInput[]
    connect?: EstoqueHistoricoWhereUniqueInput | EstoqueHistoricoWhereUniqueInput[]
    update?: EstoqueHistoricoUpdateWithWhereUniqueWithoutUsuarioInput | EstoqueHistoricoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: EstoqueHistoricoUpdateManyWithWhereWithoutUsuarioInput | EstoqueHistoricoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: EstoqueHistoricoScalarWhereInput | EstoqueHistoricoScalarWhereInput[]
  }

  export type ReceitaInsumoCreateNestedManyWithoutInsumoInput = {
    create?: XOR<ReceitaInsumoCreateWithoutInsumoInput, ReceitaInsumoUncheckedCreateWithoutInsumoInput> | ReceitaInsumoCreateWithoutInsumoInput[] | ReceitaInsumoUncheckedCreateWithoutInsumoInput[]
    connectOrCreate?: ReceitaInsumoCreateOrConnectWithoutInsumoInput | ReceitaInsumoCreateOrConnectWithoutInsumoInput[]
    createMany?: ReceitaInsumoCreateManyInsumoInputEnvelope
    connect?: ReceitaInsumoWhereUniqueInput | ReceitaInsumoWhereUniqueInput[]
  }

  export type EstoqueHistoricoCreateNestedManyWithoutInsumoInput = {
    create?: XOR<EstoqueHistoricoCreateWithoutInsumoInput, EstoqueHistoricoUncheckedCreateWithoutInsumoInput> | EstoqueHistoricoCreateWithoutInsumoInput[] | EstoqueHistoricoUncheckedCreateWithoutInsumoInput[]
    connectOrCreate?: EstoqueHistoricoCreateOrConnectWithoutInsumoInput | EstoqueHistoricoCreateOrConnectWithoutInsumoInput[]
    createMany?: EstoqueHistoricoCreateManyInsumoInputEnvelope
    connect?: EstoqueHistoricoWhereUniqueInput | EstoqueHistoricoWhereUniqueInput[]
  }

  export type ListaCompraCreateNestedManyWithoutInsumoInput = {
    create?: XOR<ListaCompraCreateWithoutInsumoInput, ListaCompraUncheckedCreateWithoutInsumoInput> | ListaCompraCreateWithoutInsumoInput[] | ListaCompraUncheckedCreateWithoutInsumoInput[]
    connectOrCreate?: ListaCompraCreateOrConnectWithoutInsumoInput | ListaCompraCreateOrConnectWithoutInsumoInput[]
    createMany?: ListaCompraCreateManyInsumoInputEnvelope
    connect?: ListaCompraWhereUniqueInput | ListaCompraWhereUniqueInput[]
  }

  export type ReceitaInsumoUncheckedCreateNestedManyWithoutInsumoInput = {
    create?: XOR<ReceitaInsumoCreateWithoutInsumoInput, ReceitaInsumoUncheckedCreateWithoutInsumoInput> | ReceitaInsumoCreateWithoutInsumoInput[] | ReceitaInsumoUncheckedCreateWithoutInsumoInput[]
    connectOrCreate?: ReceitaInsumoCreateOrConnectWithoutInsumoInput | ReceitaInsumoCreateOrConnectWithoutInsumoInput[]
    createMany?: ReceitaInsumoCreateManyInsumoInputEnvelope
    connect?: ReceitaInsumoWhereUniqueInput | ReceitaInsumoWhereUniqueInput[]
  }

  export type EstoqueHistoricoUncheckedCreateNestedManyWithoutInsumoInput = {
    create?: XOR<EstoqueHistoricoCreateWithoutInsumoInput, EstoqueHistoricoUncheckedCreateWithoutInsumoInput> | EstoqueHistoricoCreateWithoutInsumoInput[] | EstoqueHistoricoUncheckedCreateWithoutInsumoInput[]
    connectOrCreate?: EstoqueHistoricoCreateOrConnectWithoutInsumoInput | EstoqueHistoricoCreateOrConnectWithoutInsumoInput[]
    createMany?: EstoqueHistoricoCreateManyInsumoInputEnvelope
    connect?: EstoqueHistoricoWhereUniqueInput | EstoqueHistoricoWhereUniqueInput[]
  }

  export type ListaCompraUncheckedCreateNestedManyWithoutInsumoInput = {
    create?: XOR<ListaCompraCreateWithoutInsumoInput, ListaCompraUncheckedCreateWithoutInsumoInput> | ListaCompraCreateWithoutInsumoInput[] | ListaCompraUncheckedCreateWithoutInsumoInput[]
    connectOrCreate?: ListaCompraCreateOrConnectWithoutInsumoInput | ListaCompraCreateOrConnectWithoutInsumoInput[]
    createMany?: ListaCompraCreateManyInsumoInputEnvelope
    connect?: ListaCompraWhereUniqueInput | ListaCompraWhereUniqueInput[]
  }

  export type EnumUnidadeMedidaFieldUpdateOperationsInput = {
    set?: $Enums.UnidadeMedida
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReceitaInsumoUpdateManyWithoutInsumoNestedInput = {
    create?: XOR<ReceitaInsumoCreateWithoutInsumoInput, ReceitaInsumoUncheckedCreateWithoutInsumoInput> | ReceitaInsumoCreateWithoutInsumoInput[] | ReceitaInsumoUncheckedCreateWithoutInsumoInput[]
    connectOrCreate?: ReceitaInsumoCreateOrConnectWithoutInsumoInput | ReceitaInsumoCreateOrConnectWithoutInsumoInput[]
    upsert?: ReceitaInsumoUpsertWithWhereUniqueWithoutInsumoInput | ReceitaInsumoUpsertWithWhereUniqueWithoutInsumoInput[]
    createMany?: ReceitaInsumoCreateManyInsumoInputEnvelope
    set?: ReceitaInsumoWhereUniqueInput | ReceitaInsumoWhereUniqueInput[]
    disconnect?: ReceitaInsumoWhereUniqueInput | ReceitaInsumoWhereUniqueInput[]
    delete?: ReceitaInsumoWhereUniqueInput | ReceitaInsumoWhereUniqueInput[]
    connect?: ReceitaInsumoWhereUniqueInput | ReceitaInsumoWhereUniqueInput[]
    update?: ReceitaInsumoUpdateWithWhereUniqueWithoutInsumoInput | ReceitaInsumoUpdateWithWhereUniqueWithoutInsumoInput[]
    updateMany?: ReceitaInsumoUpdateManyWithWhereWithoutInsumoInput | ReceitaInsumoUpdateManyWithWhereWithoutInsumoInput[]
    deleteMany?: ReceitaInsumoScalarWhereInput | ReceitaInsumoScalarWhereInput[]
  }

  export type EstoqueHistoricoUpdateManyWithoutInsumoNestedInput = {
    create?: XOR<EstoqueHistoricoCreateWithoutInsumoInput, EstoqueHistoricoUncheckedCreateWithoutInsumoInput> | EstoqueHistoricoCreateWithoutInsumoInput[] | EstoqueHistoricoUncheckedCreateWithoutInsumoInput[]
    connectOrCreate?: EstoqueHistoricoCreateOrConnectWithoutInsumoInput | EstoqueHistoricoCreateOrConnectWithoutInsumoInput[]
    upsert?: EstoqueHistoricoUpsertWithWhereUniqueWithoutInsumoInput | EstoqueHistoricoUpsertWithWhereUniqueWithoutInsumoInput[]
    createMany?: EstoqueHistoricoCreateManyInsumoInputEnvelope
    set?: EstoqueHistoricoWhereUniqueInput | EstoqueHistoricoWhereUniqueInput[]
    disconnect?: EstoqueHistoricoWhereUniqueInput | EstoqueHistoricoWhereUniqueInput[]
    delete?: EstoqueHistoricoWhereUniqueInput | EstoqueHistoricoWhereUniqueInput[]
    connect?: EstoqueHistoricoWhereUniqueInput | EstoqueHistoricoWhereUniqueInput[]
    update?: EstoqueHistoricoUpdateWithWhereUniqueWithoutInsumoInput | EstoqueHistoricoUpdateWithWhereUniqueWithoutInsumoInput[]
    updateMany?: EstoqueHistoricoUpdateManyWithWhereWithoutInsumoInput | EstoqueHistoricoUpdateManyWithWhereWithoutInsumoInput[]
    deleteMany?: EstoqueHistoricoScalarWhereInput | EstoqueHistoricoScalarWhereInput[]
  }

  export type ListaCompraUpdateManyWithoutInsumoNestedInput = {
    create?: XOR<ListaCompraCreateWithoutInsumoInput, ListaCompraUncheckedCreateWithoutInsumoInput> | ListaCompraCreateWithoutInsumoInput[] | ListaCompraUncheckedCreateWithoutInsumoInput[]
    connectOrCreate?: ListaCompraCreateOrConnectWithoutInsumoInput | ListaCompraCreateOrConnectWithoutInsumoInput[]
    upsert?: ListaCompraUpsertWithWhereUniqueWithoutInsumoInput | ListaCompraUpsertWithWhereUniqueWithoutInsumoInput[]
    createMany?: ListaCompraCreateManyInsumoInputEnvelope
    set?: ListaCompraWhereUniqueInput | ListaCompraWhereUniqueInput[]
    disconnect?: ListaCompraWhereUniqueInput | ListaCompraWhereUniqueInput[]
    delete?: ListaCompraWhereUniqueInput | ListaCompraWhereUniqueInput[]
    connect?: ListaCompraWhereUniqueInput | ListaCompraWhereUniqueInput[]
    update?: ListaCompraUpdateWithWhereUniqueWithoutInsumoInput | ListaCompraUpdateWithWhereUniqueWithoutInsumoInput[]
    updateMany?: ListaCompraUpdateManyWithWhereWithoutInsumoInput | ListaCompraUpdateManyWithWhereWithoutInsumoInput[]
    deleteMany?: ListaCompraScalarWhereInput | ListaCompraScalarWhereInput[]
  }

  export type ReceitaInsumoUncheckedUpdateManyWithoutInsumoNestedInput = {
    create?: XOR<ReceitaInsumoCreateWithoutInsumoInput, ReceitaInsumoUncheckedCreateWithoutInsumoInput> | ReceitaInsumoCreateWithoutInsumoInput[] | ReceitaInsumoUncheckedCreateWithoutInsumoInput[]
    connectOrCreate?: ReceitaInsumoCreateOrConnectWithoutInsumoInput | ReceitaInsumoCreateOrConnectWithoutInsumoInput[]
    upsert?: ReceitaInsumoUpsertWithWhereUniqueWithoutInsumoInput | ReceitaInsumoUpsertWithWhereUniqueWithoutInsumoInput[]
    createMany?: ReceitaInsumoCreateManyInsumoInputEnvelope
    set?: ReceitaInsumoWhereUniqueInput | ReceitaInsumoWhereUniqueInput[]
    disconnect?: ReceitaInsumoWhereUniqueInput | ReceitaInsumoWhereUniqueInput[]
    delete?: ReceitaInsumoWhereUniqueInput | ReceitaInsumoWhereUniqueInput[]
    connect?: ReceitaInsumoWhereUniqueInput | ReceitaInsumoWhereUniqueInput[]
    update?: ReceitaInsumoUpdateWithWhereUniqueWithoutInsumoInput | ReceitaInsumoUpdateWithWhereUniqueWithoutInsumoInput[]
    updateMany?: ReceitaInsumoUpdateManyWithWhereWithoutInsumoInput | ReceitaInsumoUpdateManyWithWhereWithoutInsumoInput[]
    deleteMany?: ReceitaInsumoScalarWhereInput | ReceitaInsumoScalarWhereInput[]
  }

  export type EstoqueHistoricoUncheckedUpdateManyWithoutInsumoNestedInput = {
    create?: XOR<EstoqueHistoricoCreateWithoutInsumoInput, EstoqueHistoricoUncheckedCreateWithoutInsumoInput> | EstoqueHistoricoCreateWithoutInsumoInput[] | EstoqueHistoricoUncheckedCreateWithoutInsumoInput[]
    connectOrCreate?: EstoqueHistoricoCreateOrConnectWithoutInsumoInput | EstoqueHistoricoCreateOrConnectWithoutInsumoInput[]
    upsert?: EstoqueHistoricoUpsertWithWhereUniqueWithoutInsumoInput | EstoqueHistoricoUpsertWithWhereUniqueWithoutInsumoInput[]
    createMany?: EstoqueHistoricoCreateManyInsumoInputEnvelope
    set?: EstoqueHistoricoWhereUniqueInput | EstoqueHistoricoWhereUniqueInput[]
    disconnect?: EstoqueHistoricoWhereUniqueInput | EstoqueHistoricoWhereUniqueInput[]
    delete?: EstoqueHistoricoWhereUniqueInput | EstoqueHistoricoWhereUniqueInput[]
    connect?: EstoqueHistoricoWhereUniqueInput | EstoqueHistoricoWhereUniqueInput[]
    update?: EstoqueHistoricoUpdateWithWhereUniqueWithoutInsumoInput | EstoqueHistoricoUpdateWithWhereUniqueWithoutInsumoInput[]
    updateMany?: EstoqueHistoricoUpdateManyWithWhereWithoutInsumoInput | EstoqueHistoricoUpdateManyWithWhereWithoutInsumoInput[]
    deleteMany?: EstoqueHistoricoScalarWhereInput | EstoqueHistoricoScalarWhereInput[]
  }

  export type ListaCompraUncheckedUpdateManyWithoutInsumoNestedInput = {
    create?: XOR<ListaCompraCreateWithoutInsumoInput, ListaCompraUncheckedCreateWithoutInsumoInput> | ListaCompraCreateWithoutInsumoInput[] | ListaCompraUncheckedCreateWithoutInsumoInput[]
    connectOrCreate?: ListaCompraCreateOrConnectWithoutInsumoInput | ListaCompraCreateOrConnectWithoutInsumoInput[]
    upsert?: ListaCompraUpsertWithWhereUniqueWithoutInsumoInput | ListaCompraUpsertWithWhereUniqueWithoutInsumoInput[]
    createMany?: ListaCompraCreateManyInsumoInputEnvelope
    set?: ListaCompraWhereUniqueInput | ListaCompraWhereUniqueInput[]
    disconnect?: ListaCompraWhereUniqueInput | ListaCompraWhereUniqueInput[]
    delete?: ListaCompraWhereUniqueInput | ListaCompraWhereUniqueInput[]
    connect?: ListaCompraWhereUniqueInput | ListaCompraWhereUniqueInput[]
    update?: ListaCompraUpdateWithWhereUniqueWithoutInsumoInput | ListaCompraUpdateWithWhereUniqueWithoutInsumoInput[]
    updateMany?: ListaCompraUpdateManyWithWhereWithoutInsumoInput | ListaCompraUpdateManyWithWhereWithoutInsumoInput[]
    deleteMany?: ListaCompraScalarWhereInput | ListaCompraScalarWhereInput[]
  }

  export type ReceitaInsumoCreateNestedManyWithoutReceitaInput = {
    create?: XOR<ReceitaInsumoCreateWithoutReceitaInput, ReceitaInsumoUncheckedCreateWithoutReceitaInput> | ReceitaInsumoCreateWithoutReceitaInput[] | ReceitaInsumoUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: ReceitaInsumoCreateOrConnectWithoutReceitaInput | ReceitaInsumoCreateOrConnectWithoutReceitaInput[]
    createMany?: ReceitaInsumoCreateManyReceitaInputEnvelope
    connect?: ReceitaInsumoWhereUniqueInput | ReceitaInsumoWhereUniqueInput[]
  }

  export type ReceitaPlanejadaCreateNestedManyWithoutReceitaInput = {
    create?: XOR<ReceitaPlanejadaCreateWithoutReceitaInput, ReceitaPlanejadaUncheckedCreateWithoutReceitaInput> | ReceitaPlanejadaCreateWithoutReceitaInput[] | ReceitaPlanejadaUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: ReceitaPlanejadaCreateOrConnectWithoutReceitaInput | ReceitaPlanejadaCreateOrConnectWithoutReceitaInput[]
    createMany?: ReceitaPlanejadaCreateManyReceitaInputEnvelope
    connect?: ReceitaPlanejadaWhereUniqueInput | ReceitaPlanejadaWhereUniqueInput[]
  }

  export type ReceitaInsumoUncheckedCreateNestedManyWithoutReceitaInput = {
    create?: XOR<ReceitaInsumoCreateWithoutReceitaInput, ReceitaInsumoUncheckedCreateWithoutReceitaInput> | ReceitaInsumoCreateWithoutReceitaInput[] | ReceitaInsumoUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: ReceitaInsumoCreateOrConnectWithoutReceitaInput | ReceitaInsumoCreateOrConnectWithoutReceitaInput[]
    createMany?: ReceitaInsumoCreateManyReceitaInputEnvelope
    connect?: ReceitaInsumoWhereUniqueInput | ReceitaInsumoWhereUniqueInput[]
  }

  export type ReceitaPlanejadaUncheckedCreateNestedManyWithoutReceitaInput = {
    create?: XOR<ReceitaPlanejadaCreateWithoutReceitaInput, ReceitaPlanejadaUncheckedCreateWithoutReceitaInput> | ReceitaPlanejadaCreateWithoutReceitaInput[] | ReceitaPlanejadaUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: ReceitaPlanejadaCreateOrConnectWithoutReceitaInput | ReceitaPlanejadaCreateOrConnectWithoutReceitaInput[]
    createMany?: ReceitaPlanejadaCreateManyReceitaInputEnvelope
    connect?: ReceitaPlanejadaWhereUniqueInput | ReceitaPlanejadaWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ReceitaInsumoUpdateManyWithoutReceitaNestedInput = {
    create?: XOR<ReceitaInsumoCreateWithoutReceitaInput, ReceitaInsumoUncheckedCreateWithoutReceitaInput> | ReceitaInsumoCreateWithoutReceitaInput[] | ReceitaInsumoUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: ReceitaInsumoCreateOrConnectWithoutReceitaInput | ReceitaInsumoCreateOrConnectWithoutReceitaInput[]
    upsert?: ReceitaInsumoUpsertWithWhereUniqueWithoutReceitaInput | ReceitaInsumoUpsertWithWhereUniqueWithoutReceitaInput[]
    createMany?: ReceitaInsumoCreateManyReceitaInputEnvelope
    set?: ReceitaInsumoWhereUniqueInput | ReceitaInsumoWhereUniqueInput[]
    disconnect?: ReceitaInsumoWhereUniqueInput | ReceitaInsumoWhereUniqueInput[]
    delete?: ReceitaInsumoWhereUniqueInput | ReceitaInsumoWhereUniqueInput[]
    connect?: ReceitaInsumoWhereUniqueInput | ReceitaInsumoWhereUniqueInput[]
    update?: ReceitaInsumoUpdateWithWhereUniqueWithoutReceitaInput | ReceitaInsumoUpdateWithWhereUniqueWithoutReceitaInput[]
    updateMany?: ReceitaInsumoUpdateManyWithWhereWithoutReceitaInput | ReceitaInsumoUpdateManyWithWhereWithoutReceitaInput[]
    deleteMany?: ReceitaInsumoScalarWhereInput | ReceitaInsumoScalarWhereInput[]
  }

  export type ReceitaPlanejadaUpdateManyWithoutReceitaNestedInput = {
    create?: XOR<ReceitaPlanejadaCreateWithoutReceitaInput, ReceitaPlanejadaUncheckedCreateWithoutReceitaInput> | ReceitaPlanejadaCreateWithoutReceitaInput[] | ReceitaPlanejadaUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: ReceitaPlanejadaCreateOrConnectWithoutReceitaInput | ReceitaPlanejadaCreateOrConnectWithoutReceitaInput[]
    upsert?: ReceitaPlanejadaUpsertWithWhereUniqueWithoutReceitaInput | ReceitaPlanejadaUpsertWithWhereUniqueWithoutReceitaInput[]
    createMany?: ReceitaPlanejadaCreateManyReceitaInputEnvelope
    set?: ReceitaPlanejadaWhereUniqueInput | ReceitaPlanejadaWhereUniqueInput[]
    disconnect?: ReceitaPlanejadaWhereUniqueInput | ReceitaPlanejadaWhereUniqueInput[]
    delete?: ReceitaPlanejadaWhereUniqueInput | ReceitaPlanejadaWhereUniqueInput[]
    connect?: ReceitaPlanejadaWhereUniqueInput | ReceitaPlanejadaWhereUniqueInput[]
    update?: ReceitaPlanejadaUpdateWithWhereUniqueWithoutReceitaInput | ReceitaPlanejadaUpdateWithWhereUniqueWithoutReceitaInput[]
    updateMany?: ReceitaPlanejadaUpdateManyWithWhereWithoutReceitaInput | ReceitaPlanejadaUpdateManyWithWhereWithoutReceitaInput[]
    deleteMany?: ReceitaPlanejadaScalarWhereInput | ReceitaPlanejadaScalarWhereInput[]
  }

  export type ReceitaInsumoUncheckedUpdateManyWithoutReceitaNestedInput = {
    create?: XOR<ReceitaInsumoCreateWithoutReceitaInput, ReceitaInsumoUncheckedCreateWithoutReceitaInput> | ReceitaInsumoCreateWithoutReceitaInput[] | ReceitaInsumoUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: ReceitaInsumoCreateOrConnectWithoutReceitaInput | ReceitaInsumoCreateOrConnectWithoutReceitaInput[]
    upsert?: ReceitaInsumoUpsertWithWhereUniqueWithoutReceitaInput | ReceitaInsumoUpsertWithWhereUniqueWithoutReceitaInput[]
    createMany?: ReceitaInsumoCreateManyReceitaInputEnvelope
    set?: ReceitaInsumoWhereUniqueInput | ReceitaInsumoWhereUniqueInput[]
    disconnect?: ReceitaInsumoWhereUniqueInput | ReceitaInsumoWhereUniqueInput[]
    delete?: ReceitaInsumoWhereUniqueInput | ReceitaInsumoWhereUniqueInput[]
    connect?: ReceitaInsumoWhereUniqueInput | ReceitaInsumoWhereUniqueInput[]
    update?: ReceitaInsumoUpdateWithWhereUniqueWithoutReceitaInput | ReceitaInsumoUpdateWithWhereUniqueWithoutReceitaInput[]
    updateMany?: ReceitaInsumoUpdateManyWithWhereWithoutReceitaInput | ReceitaInsumoUpdateManyWithWhereWithoutReceitaInput[]
    deleteMany?: ReceitaInsumoScalarWhereInput | ReceitaInsumoScalarWhereInput[]
  }

  export type ReceitaPlanejadaUncheckedUpdateManyWithoutReceitaNestedInput = {
    create?: XOR<ReceitaPlanejadaCreateWithoutReceitaInput, ReceitaPlanejadaUncheckedCreateWithoutReceitaInput> | ReceitaPlanejadaCreateWithoutReceitaInput[] | ReceitaPlanejadaUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: ReceitaPlanejadaCreateOrConnectWithoutReceitaInput | ReceitaPlanejadaCreateOrConnectWithoutReceitaInput[]
    upsert?: ReceitaPlanejadaUpsertWithWhereUniqueWithoutReceitaInput | ReceitaPlanejadaUpsertWithWhereUniqueWithoutReceitaInput[]
    createMany?: ReceitaPlanejadaCreateManyReceitaInputEnvelope
    set?: ReceitaPlanejadaWhereUniqueInput | ReceitaPlanejadaWhereUniqueInput[]
    disconnect?: ReceitaPlanejadaWhereUniqueInput | ReceitaPlanejadaWhereUniqueInput[]
    delete?: ReceitaPlanejadaWhereUniqueInput | ReceitaPlanejadaWhereUniqueInput[]
    connect?: ReceitaPlanejadaWhereUniqueInput | ReceitaPlanejadaWhereUniqueInput[]
    update?: ReceitaPlanejadaUpdateWithWhereUniqueWithoutReceitaInput | ReceitaPlanejadaUpdateWithWhereUniqueWithoutReceitaInput[]
    updateMany?: ReceitaPlanejadaUpdateManyWithWhereWithoutReceitaInput | ReceitaPlanejadaUpdateManyWithWhereWithoutReceitaInput[]
    deleteMany?: ReceitaPlanejadaScalarWhereInput | ReceitaPlanejadaScalarWhereInput[]
  }

  export type ReceitaCreateNestedOneWithoutInsumosInput = {
    create?: XOR<ReceitaCreateWithoutInsumosInput, ReceitaUncheckedCreateWithoutInsumosInput>
    connectOrCreate?: ReceitaCreateOrConnectWithoutInsumosInput
    connect?: ReceitaWhereUniqueInput
  }

  export type InsumoCreateNestedOneWithoutReceitasInput = {
    create?: XOR<InsumoCreateWithoutReceitasInput, InsumoUncheckedCreateWithoutReceitasInput>
    connectOrCreate?: InsumoCreateOrConnectWithoutReceitasInput
    connect?: InsumoWhereUniqueInput
  }

  export type ReceitaUpdateOneRequiredWithoutInsumosNestedInput = {
    create?: XOR<ReceitaCreateWithoutInsumosInput, ReceitaUncheckedCreateWithoutInsumosInput>
    connectOrCreate?: ReceitaCreateOrConnectWithoutInsumosInput
    upsert?: ReceitaUpsertWithoutInsumosInput
    connect?: ReceitaWhereUniqueInput
    update?: XOR<XOR<ReceitaUpdateToOneWithWhereWithoutInsumosInput, ReceitaUpdateWithoutInsumosInput>, ReceitaUncheckedUpdateWithoutInsumosInput>
  }

  export type InsumoUpdateOneRequiredWithoutReceitasNestedInput = {
    create?: XOR<InsumoCreateWithoutReceitasInput, InsumoUncheckedCreateWithoutReceitasInput>
    connectOrCreate?: InsumoCreateOrConnectWithoutReceitasInput
    upsert?: InsumoUpsertWithoutReceitasInput
    connect?: InsumoWhereUniqueInput
    update?: XOR<XOR<InsumoUpdateToOneWithWhereWithoutReceitasInput, InsumoUpdateWithoutReceitasInput>, InsumoUncheckedUpdateWithoutReceitasInput>
  }

  export type ReceitaPlanejadaCreateNestedManyWithoutPlanejamentoInput = {
    create?: XOR<ReceitaPlanejadaCreateWithoutPlanejamentoInput, ReceitaPlanejadaUncheckedCreateWithoutPlanejamentoInput> | ReceitaPlanejadaCreateWithoutPlanejamentoInput[] | ReceitaPlanejadaUncheckedCreateWithoutPlanejamentoInput[]
    connectOrCreate?: ReceitaPlanejadaCreateOrConnectWithoutPlanejamentoInput | ReceitaPlanejadaCreateOrConnectWithoutPlanejamentoInput[]
    createMany?: ReceitaPlanejadaCreateManyPlanejamentoInputEnvelope
    connect?: ReceitaPlanejadaWhereUniqueInput | ReceitaPlanejadaWhereUniqueInput[]
  }

  export type ListaCompraCreateNestedManyWithoutPlanejamentoInput = {
    create?: XOR<ListaCompraCreateWithoutPlanejamentoInput, ListaCompraUncheckedCreateWithoutPlanejamentoInput> | ListaCompraCreateWithoutPlanejamentoInput[] | ListaCompraUncheckedCreateWithoutPlanejamentoInput[]
    connectOrCreate?: ListaCompraCreateOrConnectWithoutPlanejamentoInput | ListaCompraCreateOrConnectWithoutPlanejamentoInput[]
    createMany?: ListaCompraCreateManyPlanejamentoInputEnvelope
    connect?: ListaCompraWhereUniqueInput | ListaCompraWhereUniqueInput[]
  }

  export type ReceitaPlanejadaUncheckedCreateNestedManyWithoutPlanejamentoInput = {
    create?: XOR<ReceitaPlanejadaCreateWithoutPlanejamentoInput, ReceitaPlanejadaUncheckedCreateWithoutPlanejamentoInput> | ReceitaPlanejadaCreateWithoutPlanejamentoInput[] | ReceitaPlanejadaUncheckedCreateWithoutPlanejamentoInput[]
    connectOrCreate?: ReceitaPlanejadaCreateOrConnectWithoutPlanejamentoInput | ReceitaPlanejadaCreateOrConnectWithoutPlanejamentoInput[]
    createMany?: ReceitaPlanejadaCreateManyPlanejamentoInputEnvelope
    connect?: ReceitaPlanejadaWhereUniqueInput | ReceitaPlanejadaWhereUniqueInput[]
  }

  export type ListaCompraUncheckedCreateNestedManyWithoutPlanejamentoInput = {
    create?: XOR<ListaCompraCreateWithoutPlanejamentoInput, ListaCompraUncheckedCreateWithoutPlanejamentoInput> | ListaCompraCreateWithoutPlanejamentoInput[] | ListaCompraUncheckedCreateWithoutPlanejamentoInput[]
    connectOrCreate?: ListaCompraCreateOrConnectWithoutPlanejamentoInput | ListaCompraCreateOrConnectWithoutPlanejamentoInput[]
    createMany?: ListaCompraCreateManyPlanejamentoInputEnvelope
    connect?: ListaCompraWhereUniqueInput | ListaCompraWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ReceitaPlanejadaUpdateManyWithoutPlanejamentoNestedInput = {
    create?: XOR<ReceitaPlanejadaCreateWithoutPlanejamentoInput, ReceitaPlanejadaUncheckedCreateWithoutPlanejamentoInput> | ReceitaPlanejadaCreateWithoutPlanejamentoInput[] | ReceitaPlanejadaUncheckedCreateWithoutPlanejamentoInput[]
    connectOrCreate?: ReceitaPlanejadaCreateOrConnectWithoutPlanejamentoInput | ReceitaPlanejadaCreateOrConnectWithoutPlanejamentoInput[]
    upsert?: ReceitaPlanejadaUpsertWithWhereUniqueWithoutPlanejamentoInput | ReceitaPlanejadaUpsertWithWhereUniqueWithoutPlanejamentoInput[]
    createMany?: ReceitaPlanejadaCreateManyPlanejamentoInputEnvelope
    set?: ReceitaPlanejadaWhereUniqueInput | ReceitaPlanejadaWhereUniqueInput[]
    disconnect?: ReceitaPlanejadaWhereUniqueInput | ReceitaPlanejadaWhereUniqueInput[]
    delete?: ReceitaPlanejadaWhereUniqueInput | ReceitaPlanejadaWhereUniqueInput[]
    connect?: ReceitaPlanejadaWhereUniqueInput | ReceitaPlanejadaWhereUniqueInput[]
    update?: ReceitaPlanejadaUpdateWithWhereUniqueWithoutPlanejamentoInput | ReceitaPlanejadaUpdateWithWhereUniqueWithoutPlanejamentoInput[]
    updateMany?: ReceitaPlanejadaUpdateManyWithWhereWithoutPlanejamentoInput | ReceitaPlanejadaUpdateManyWithWhereWithoutPlanejamentoInput[]
    deleteMany?: ReceitaPlanejadaScalarWhereInput | ReceitaPlanejadaScalarWhereInput[]
  }

  export type ListaCompraUpdateManyWithoutPlanejamentoNestedInput = {
    create?: XOR<ListaCompraCreateWithoutPlanejamentoInput, ListaCompraUncheckedCreateWithoutPlanejamentoInput> | ListaCompraCreateWithoutPlanejamentoInput[] | ListaCompraUncheckedCreateWithoutPlanejamentoInput[]
    connectOrCreate?: ListaCompraCreateOrConnectWithoutPlanejamentoInput | ListaCompraCreateOrConnectWithoutPlanejamentoInput[]
    upsert?: ListaCompraUpsertWithWhereUniqueWithoutPlanejamentoInput | ListaCompraUpsertWithWhereUniqueWithoutPlanejamentoInput[]
    createMany?: ListaCompraCreateManyPlanejamentoInputEnvelope
    set?: ListaCompraWhereUniqueInput | ListaCompraWhereUniqueInput[]
    disconnect?: ListaCompraWhereUniqueInput | ListaCompraWhereUniqueInput[]
    delete?: ListaCompraWhereUniqueInput | ListaCompraWhereUniqueInput[]
    connect?: ListaCompraWhereUniqueInput | ListaCompraWhereUniqueInput[]
    update?: ListaCompraUpdateWithWhereUniqueWithoutPlanejamentoInput | ListaCompraUpdateWithWhereUniqueWithoutPlanejamentoInput[]
    updateMany?: ListaCompraUpdateManyWithWhereWithoutPlanejamentoInput | ListaCompraUpdateManyWithWhereWithoutPlanejamentoInput[]
    deleteMany?: ListaCompraScalarWhereInput | ListaCompraScalarWhereInput[]
  }

  export type ReceitaPlanejadaUncheckedUpdateManyWithoutPlanejamentoNestedInput = {
    create?: XOR<ReceitaPlanejadaCreateWithoutPlanejamentoInput, ReceitaPlanejadaUncheckedCreateWithoutPlanejamentoInput> | ReceitaPlanejadaCreateWithoutPlanejamentoInput[] | ReceitaPlanejadaUncheckedCreateWithoutPlanejamentoInput[]
    connectOrCreate?: ReceitaPlanejadaCreateOrConnectWithoutPlanejamentoInput | ReceitaPlanejadaCreateOrConnectWithoutPlanejamentoInput[]
    upsert?: ReceitaPlanejadaUpsertWithWhereUniqueWithoutPlanejamentoInput | ReceitaPlanejadaUpsertWithWhereUniqueWithoutPlanejamentoInput[]
    createMany?: ReceitaPlanejadaCreateManyPlanejamentoInputEnvelope
    set?: ReceitaPlanejadaWhereUniqueInput | ReceitaPlanejadaWhereUniqueInput[]
    disconnect?: ReceitaPlanejadaWhereUniqueInput | ReceitaPlanejadaWhereUniqueInput[]
    delete?: ReceitaPlanejadaWhereUniqueInput | ReceitaPlanejadaWhereUniqueInput[]
    connect?: ReceitaPlanejadaWhereUniqueInput | ReceitaPlanejadaWhereUniqueInput[]
    update?: ReceitaPlanejadaUpdateWithWhereUniqueWithoutPlanejamentoInput | ReceitaPlanejadaUpdateWithWhereUniqueWithoutPlanejamentoInput[]
    updateMany?: ReceitaPlanejadaUpdateManyWithWhereWithoutPlanejamentoInput | ReceitaPlanejadaUpdateManyWithWhereWithoutPlanejamentoInput[]
    deleteMany?: ReceitaPlanejadaScalarWhereInput | ReceitaPlanejadaScalarWhereInput[]
  }

  export type ListaCompraUncheckedUpdateManyWithoutPlanejamentoNestedInput = {
    create?: XOR<ListaCompraCreateWithoutPlanejamentoInput, ListaCompraUncheckedCreateWithoutPlanejamentoInput> | ListaCompraCreateWithoutPlanejamentoInput[] | ListaCompraUncheckedCreateWithoutPlanejamentoInput[]
    connectOrCreate?: ListaCompraCreateOrConnectWithoutPlanejamentoInput | ListaCompraCreateOrConnectWithoutPlanejamentoInput[]
    upsert?: ListaCompraUpsertWithWhereUniqueWithoutPlanejamentoInput | ListaCompraUpsertWithWhereUniqueWithoutPlanejamentoInput[]
    createMany?: ListaCompraCreateManyPlanejamentoInputEnvelope
    set?: ListaCompraWhereUniqueInput | ListaCompraWhereUniqueInput[]
    disconnect?: ListaCompraWhereUniqueInput | ListaCompraWhereUniqueInput[]
    delete?: ListaCompraWhereUniqueInput | ListaCompraWhereUniqueInput[]
    connect?: ListaCompraWhereUniqueInput | ListaCompraWhereUniqueInput[]
    update?: ListaCompraUpdateWithWhereUniqueWithoutPlanejamentoInput | ListaCompraUpdateWithWhereUniqueWithoutPlanejamentoInput[]
    updateMany?: ListaCompraUpdateManyWithWhereWithoutPlanejamentoInput | ListaCompraUpdateManyWithWhereWithoutPlanejamentoInput[]
    deleteMany?: ListaCompraScalarWhereInput | ListaCompraScalarWhereInput[]
  }

  export type PlanejamentoProducaoCreateNestedOneWithoutReceitasInput = {
    create?: XOR<PlanejamentoProducaoCreateWithoutReceitasInput, PlanejamentoProducaoUncheckedCreateWithoutReceitasInput>
    connectOrCreate?: PlanejamentoProducaoCreateOrConnectWithoutReceitasInput
    connect?: PlanejamentoProducaoWhereUniqueInput
  }

  export type ReceitaCreateNestedOneWithoutPlanejamentosInput = {
    create?: XOR<ReceitaCreateWithoutPlanejamentosInput, ReceitaUncheckedCreateWithoutPlanejamentosInput>
    connectOrCreate?: ReceitaCreateOrConnectWithoutPlanejamentosInput
    connect?: ReceitaWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PlanejamentoProducaoUpdateOneRequiredWithoutReceitasNestedInput = {
    create?: XOR<PlanejamentoProducaoCreateWithoutReceitasInput, PlanejamentoProducaoUncheckedCreateWithoutReceitasInput>
    connectOrCreate?: PlanejamentoProducaoCreateOrConnectWithoutReceitasInput
    upsert?: PlanejamentoProducaoUpsertWithoutReceitasInput
    connect?: PlanejamentoProducaoWhereUniqueInput
    update?: XOR<XOR<PlanejamentoProducaoUpdateToOneWithWhereWithoutReceitasInput, PlanejamentoProducaoUpdateWithoutReceitasInput>, PlanejamentoProducaoUncheckedUpdateWithoutReceitasInput>
  }

  export type ReceitaUpdateOneRequiredWithoutPlanejamentosNestedInput = {
    create?: XOR<ReceitaCreateWithoutPlanejamentosInput, ReceitaUncheckedCreateWithoutPlanejamentosInput>
    connectOrCreate?: ReceitaCreateOrConnectWithoutPlanejamentosInput
    upsert?: ReceitaUpsertWithoutPlanejamentosInput
    connect?: ReceitaWhereUniqueInput
    update?: XOR<XOR<ReceitaUpdateToOneWithWhereWithoutPlanejamentosInput, ReceitaUpdateWithoutPlanejamentosInput>, ReceitaUncheckedUpdateWithoutPlanejamentosInput>
  }

  export type PlanejamentoProducaoCreateNestedOneWithoutComprasInput = {
    create?: XOR<PlanejamentoProducaoCreateWithoutComprasInput, PlanejamentoProducaoUncheckedCreateWithoutComprasInput>
    connectOrCreate?: PlanejamentoProducaoCreateOrConnectWithoutComprasInput
    connect?: PlanejamentoProducaoWhereUniqueInput
  }

  export type InsumoCreateNestedOneWithoutListaCompraInput = {
    create?: XOR<InsumoCreateWithoutListaCompraInput, InsumoUncheckedCreateWithoutListaCompraInput>
    connectOrCreate?: InsumoCreateOrConnectWithoutListaCompraInput
    connect?: InsumoWhereUniqueInput
  }

  export type PlanejamentoProducaoUpdateOneRequiredWithoutComprasNestedInput = {
    create?: XOR<PlanejamentoProducaoCreateWithoutComprasInput, PlanejamentoProducaoUncheckedCreateWithoutComprasInput>
    connectOrCreate?: PlanejamentoProducaoCreateOrConnectWithoutComprasInput
    upsert?: PlanejamentoProducaoUpsertWithoutComprasInput
    connect?: PlanejamentoProducaoWhereUniqueInput
    update?: XOR<XOR<PlanejamentoProducaoUpdateToOneWithWhereWithoutComprasInput, PlanejamentoProducaoUpdateWithoutComprasInput>, PlanejamentoProducaoUncheckedUpdateWithoutComprasInput>
  }

  export type InsumoUpdateOneRequiredWithoutListaCompraNestedInput = {
    create?: XOR<InsumoCreateWithoutListaCompraInput, InsumoUncheckedCreateWithoutListaCompraInput>
    connectOrCreate?: InsumoCreateOrConnectWithoutListaCompraInput
    upsert?: InsumoUpsertWithoutListaCompraInput
    connect?: InsumoWhereUniqueInput
    update?: XOR<XOR<InsumoUpdateToOneWithWhereWithoutListaCompraInput, InsumoUpdateWithoutListaCompraInput>, InsumoUncheckedUpdateWithoutListaCompraInput>
  }

  export type InsumoCreateNestedOneWithoutHistoricoInput = {
    create?: XOR<InsumoCreateWithoutHistoricoInput, InsumoUncheckedCreateWithoutHistoricoInput>
    connectOrCreate?: InsumoCreateOrConnectWithoutHistoricoInput
    connect?: InsumoWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutHistoricoMovimentacoesInput = {
    create?: XOR<UsuarioCreateWithoutHistoricoMovimentacoesInput, UsuarioUncheckedCreateWithoutHistoricoMovimentacoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutHistoricoMovimentacoesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EnumTipoMovimentacaoFieldUpdateOperationsInput = {
    set?: $Enums.TipoMovimentacao
  }

  export type InsumoUpdateOneRequiredWithoutHistoricoNestedInput = {
    create?: XOR<InsumoCreateWithoutHistoricoInput, InsumoUncheckedCreateWithoutHistoricoInput>
    connectOrCreate?: InsumoCreateOrConnectWithoutHistoricoInput
    upsert?: InsumoUpsertWithoutHistoricoInput
    connect?: InsumoWhereUniqueInput
    update?: XOR<XOR<InsumoUpdateToOneWithWhereWithoutHistoricoInput, InsumoUpdateWithoutHistoricoInput>, InsumoUncheckedUpdateWithoutHistoricoInput>
  }

  export type UsuarioUpdateOneRequiredWithoutHistoricoMovimentacoesNestedInput = {
    create?: XOR<UsuarioCreateWithoutHistoricoMovimentacoesInput, UsuarioUncheckedCreateWithoutHistoricoMovimentacoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutHistoricoMovimentacoesInput
    upsert?: UsuarioUpsertWithoutHistoricoMovimentacoesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutHistoricoMovimentacoesInput, UsuarioUpdateWithoutHistoricoMovimentacoesInput>, UsuarioUncheckedUpdateWithoutHistoricoMovimentacoesInput>
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

  export type NestedEnumUnidadeMedidaFilter<$PrismaModel = never> = {
    equals?: $Enums.UnidadeMedida | EnumUnidadeMedidaFieldRefInput<$PrismaModel>
    in?: $Enums.UnidadeMedida[] | ListEnumUnidadeMedidaFieldRefInput<$PrismaModel>
    notIn?: $Enums.UnidadeMedida[] | ListEnumUnidadeMedidaFieldRefInput<$PrismaModel>
    not?: NestedEnumUnidadeMedidaFilter<$PrismaModel> | $Enums.UnidadeMedida
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

  export type NestedEnumUnidadeMedidaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UnidadeMedida | EnumUnidadeMedidaFieldRefInput<$PrismaModel>
    in?: $Enums.UnidadeMedida[] | ListEnumUnidadeMedidaFieldRefInput<$PrismaModel>
    notIn?: $Enums.UnidadeMedida[] | ListEnumUnidadeMedidaFieldRefInput<$PrismaModel>
    not?: NestedEnumUnidadeMedidaWithAggregatesFilter<$PrismaModel> | $Enums.UnidadeMedida
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUnidadeMedidaFilter<$PrismaModel>
    _max?: NestedEnumUnidadeMedidaFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumTipoMovimentacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMovimentacao | EnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMovimentacao[] | ListEnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoMovimentacao[] | ListEnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoMovimentacaoFilter<$PrismaModel> | $Enums.TipoMovimentacao
  }

  export type NestedEnumTipoMovimentacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMovimentacao | EnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMovimentacao[] | ListEnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoMovimentacao[] | ListEnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoMovimentacaoWithAggregatesFilter<$PrismaModel> | $Enums.TipoMovimentacao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoMovimentacaoFilter<$PrismaModel>
    _max?: NestedEnumTipoMovimentacaoFilter<$PrismaModel>
  }

  export type EstoqueHistoricoCreateWithoutUsuarioInput = {
    id?: string
    tipo: $Enums.TipoMovimentacao
    quantidade: number
    dataHora?: Date | string
    insumo: InsumoCreateNestedOneWithoutHistoricoInput
  }

  export type EstoqueHistoricoUncheckedCreateWithoutUsuarioInput = {
    id?: string
    insumoId: string
    tipo: $Enums.TipoMovimentacao
    quantidade: number
    dataHora?: Date | string
  }

  export type EstoqueHistoricoCreateOrConnectWithoutUsuarioInput = {
    where: EstoqueHistoricoWhereUniqueInput
    create: XOR<EstoqueHistoricoCreateWithoutUsuarioInput, EstoqueHistoricoUncheckedCreateWithoutUsuarioInput>
  }

  export type EstoqueHistoricoCreateManyUsuarioInputEnvelope = {
    data: EstoqueHistoricoCreateManyUsuarioInput | EstoqueHistoricoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type EstoqueHistoricoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: EstoqueHistoricoWhereUniqueInput
    update: XOR<EstoqueHistoricoUpdateWithoutUsuarioInput, EstoqueHistoricoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<EstoqueHistoricoCreateWithoutUsuarioInput, EstoqueHistoricoUncheckedCreateWithoutUsuarioInput>
  }

  export type EstoqueHistoricoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: EstoqueHistoricoWhereUniqueInput
    data: XOR<EstoqueHistoricoUpdateWithoutUsuarioInput, EstoqueHistoricoUncheckedUpdateWithoutUsuarioInput>
  }

  export type EstoqueHistoricoUpdateManyWithWhereWithoutUsuarioInput = {
    where: EstoqueHistoricoScalarWhereInput
    data: XOR<EstoqueHistoricoUpdateManyMutationInput, EstoqueHistoricoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type EstoqueHistoricoScalarWhereInput = {
    AND?: EstoqueHistoricoScalarWhereInput | EstoqueHistoricoScalarWhereInput[]
    OR?: EstoqueHistoricoScalarWhereInput[]
    NOT?: EstoqueHistoricoScalarWhereInput | EstoqueHistoricoScalarWhereInput[]
    id?: StringFilter<"EstoqueHistorico"> | string
    insumoId?: StringFilter<"EstoqueHistorico"> | string
    usuarioId?: StringFilter<"EstoqueHistorico"> | string
    tipo?: EnumTipoMovimentacaoFilter<"EstoqueHistorico"> | $Enums.TipoMovimentacao
    quantidade?: FloatFilter<"EstoqueHistorico"> | number
    dataHora?: DateTimeFilter<"EstoqueHistorico"> | Date | string
  }

  export type ReceitaInsumoCreateWithoutInsumoInput = {
    id?: string
    quantidade: number
    receita: ReceitaCreateNestedOneWithoutInsumosInput
  }

  export type ReceitaInsumoUncheckedCreateWithoutInsumoInput = {
    id?: string
    receitaId: string
    quantidade: number
  }

  export type ReceitaInsumoCreateOrConnectWithoutInsumoInput = {
    where: ReceitaInsumoWhereUniqueInput
    create: XOR<ReceitaInsumoCreateWithoutInsumoInput, ReceitaInsumoUncheckedCreateWithoutInsumoInput>
  }

  export type ReceitaInsumoCreateManyInsumoInputEnvelope = {
    data: ReceitaInsumoCreateManyInsumoInput | ReceitaInsumoCreateManyInsumoInput[]
    skipDuplicates?: boolean
  }

  export type EstoqueHistoricoCreateWithoutInsumoInput = {
    id?: string
    tipo: $Enums.TipoMovimentacao
    quantidade: number
    dataHora?: Date | string
    usuario: UsuarioCreateNestedOneWithoutHistoricoMovimentacoesInput
  }

  export type EstoqueHistoricoUncheckedCreateWithoutInsumoInput = {
    id?: string
    usuarioId: string
    tipo: $Enums.TipoMovimentacao
    quantidade: number
    dataHora?: Date | string
  }

  export type EstoqueHistoricoCreateOrConnectWithoutInsumoInput = {
    where: EstoqueHistoricoWhereUniqueInput
    create: XOR<EstoqueHistoricoCreateWithoutInsumoInput, EstoqueHistoricoUncheckedCreateWithoutInsumoInput>
  }

  export type EstoqueHistoricoCreateManyInsumoInputEnvelope = {
    data: EstoqueHistoricoCreateManyInsumoInput | EstoqueHistoricoCreateManyInsumoInput[]
    skipDuplicates?: boolean
  }

  export type ListaCompraCreateWithoutInsumoInput = {
    id?: string
    quantidadeFaltante: number
    planejamento: PlanejamentoProducaoCreateNestedOneWithoutComprasInput
  }

  export type ListaCompraUncheckedCreateWithoutInsumoInput = {
    id?: string
    planejamentoId: string
    quantidadeFaltante: number
  }

  export type ListaCompraCreateOrConnectWithoutInsumoInput = {
    where: ListaCompraWhereUniqueInput
    create: XOR<ListaCompraCreateWithoutInsumoInput, ListaCompraUncheckedCreateWithoutInsumoInput>
  }

  export type ListaCompraCreateManyInsumoInputEnvelope = {
    data: ListaCompraCreateManyInsumoInput | ListaCompraCreateManyInsumoInput[]
    skipDuplicates?: boolean
  }

  export type ReceitaInsumoUpsertWithWhereUniqueWithoutInsumoInput = {
    where: ReceitaInsumoWhereUniqueInput
    update: XOR<ReceitaInsumoUpdateWithoutInsumoInput, ReceitaInsumoUncheckedUpdateWithoutInsumoInput>
    create: XOR<ReceitaInsumoCreateWithoutInsumoInput, ReceitaInsumoUncheckedCreateWithoutInsumoInput>
  }

  export type ReceitaInsumoUpdateWithWhereUniqueWithoutInsumoInput = {
    where: ReceitaInsumoWhereUniqueInput
    data: XOR<ReceitaInsumoUpdateWithoutInsumoInput, ReceitaInsumoUncheckedUpdateWithoutInsumoInput>
  }

  export type ReceitaInsumoUpdateManyWithWhereWithoutInsumoInput = {
    where: ReceitaInsumoScalarWhereInput
    data: XOR<ReceitaInsumoUpdateManyMutationInput, ReceitaInsumoUncheckedUpdateManyWithoutInsumoInput>
  }

  export type ReceitaInsumoScalarWhereInput = {
    AND?: ReceitaInsumoScalarWhereInput | ReceitaInsumoScalarWhereInput[]
    OR?: ReceitaInsumoScalarWhereInput[]
    NOT?: ReceitaInsumoScalarWhereInput | ReceitaInsumoScalarWhereInput[]
    id?: StringFilter<"ReceitaInsumo"> | string
    receitaId?: StringFilter<"ReceitaInsumo"> | string
    insumoId?: StringFilter<"ReceitaInsumo"> | string
    quantidade?: FloatFilter<"ReceitaInsumo"> | number
  }

  export type EstoqueHistoricoUpsertWithWhereUniqueWithoutInsumoInput = {
    where: EstoqueHistoricoWhereUniqueInput
    update: XOR<EstoqueHistoricoUpdateWithoutInsumoInput, EstoqueHistoricoUncheckedUpdateWithoutInsumoInput>
    create: XOR<EstoqueHistoricoCreateWithoutInsumoInput, EstoqueHistoricoUncheckedCreateWithoutInsumoInput>
  }

  export type EstoqueHistoricoUpdateWithWhereUniqueWithoutInsumoInput = {
    where: EstoqueHistoricoWhereUniqueInput
    data: XOR<EstoqueHistoricoUpdateWithoutInsumoInput, EstoqueHistoricoUncheckedUpdateWithoutInsumoInput>
  }

  export type EstoqueHistoricoUpdateManyWithWhereWithoutInsumoInput = {
    where: EstoqueHistoricoScalarWhereInput
    data: XOR<EstoqueHistoricoUpdateManyMutationInput, EstoqueHistoricoUncheckedUpdateManyWithoutInsumoInput>
  }

  export type ListaCompraUpsertWithWhereUniqueWithoutInsumoInput = {
    where: ListaCompraWhereUniqueInput
    update: XOR<ListaCompraUpdateWithoutInsumoInput, ListaCompraUncheckedUpdateWithoutInsumoInput>
    create: XOR<ListaCompraCreateWithoutInsumoInput, ListaCompraUncheckedCreateWithoutInsumoInput>
  }

  export type ListaCompraUpdateWithWhereUniqueWithoutInsumoInput = {
    where: ListaCompraWhereUniqueInput
    data: XOR<ListaCompraUpdateWithoutInsumoInput, ListaCompraUncheckedUpdateWithoutInsumoInput>
  }

  export type ListaCompraUpdateManyWithWhereWithoutInsumoInput = {
    where: ListaCompraScalarWhereInput
    data: XOR<ListaCompraUpdateManyMutationInput, ListaCompraUncheckedUpdateManyWithoutInsumoInput>
  }

  export type ListaCompraScalarWhereInput = {
    AND?: ListaCompraScalarWhereInput | ListaCompraScalarWhereInput[]
    OR?: ListaCompraScalarWhereInput[]
    NOT?: ListaCompraScalarWhereInput | ListaCompraScalarWhereInput[]
    id?: StringFilter<"ListaCompra"> | string
    planejamentoId?: StringFilter<"ListaCompra"> | string
    insumoId?: StringFilter<"ListaCompra"> | string
    quantidadeFaltante?: FloatFilter<"ListaCompra"> | number
  }

  export type ReceitaInsumoCreateWithoutReceitaInput = {
    id?: string
    quantidade: number
    insumo: InsumoCreateNestedOneWithoutReceitasInput
  }

  export type ReceitaInsumoUncheckedCreateWithoutReceitaInput = {
    id?: string
    insumoId: string
    quantidade: number
  }

  export type ReceitaInsumoCreateOrConnectWithoutReceitaInput = {
    where: ReceitaInsumoWhereUniqueInput
    create: XOR<ReceitaInsumoCreateWithoutReceitaInput, ReceitaInsumoUncheckedCreateWithoutReceitaInput>
  }

  export type ReceitaInsumoCreateManyReceitaInputEnvelope = {
    data: ReceitaInsumoCreateManyReceitaInput | ReceitaInsumoCreateManyReceitaInput[]
    skipDuplicates?: boolean
  }

  export type ReceitaPlanejadaCreateWithoutReceitaInput = {
    id?: string
    quantidadePlanejada: number
    planejamento: PlanejamentoProducaoCreateNestedOneWithoutReceitasInput
  }

  export type ReceitaPlanejadaUncheckedCreateWithoutReceitaInput = {
    id?: string
    planejamentoId: string
    quantidadePlanejada: number
  }

  export type ReceitaPlanejadaCreateOrConnectWithoutReceitaInput = {
    where: ReceitaPlanejadaWhereUniqueInput
    create: XOR<ReceitaPlanejadaCreateWithoutReceitaInput, ReceitaPlanejadaUncheckedCreateWithoutReceitaInput>
  }

  export type ReceitaPlanejadaCreateManyReceitaInputEnvelope = {
    data: ReceitaPlanejadaCreateManyReceitaInput | ReceitaPlanejadaCreateManyReceitaInput[]
    skipDuplicates?: boolean
  }

  export type ReceitaInsumoUpsertWithWhereUniqueWithoutReceitaInput = {
    where: ReceitaInsumoWhereUniqueInput
    update: XOR<ReceitaInsumoUpdateWithoutReceitaInput, ReceitaInsumoUncheckedUpdateWithoutReceitaInput>
    create: XOR<ReceitaInsumoCreateWithoutReceitaInput, ReceitaInsumoUncheckedCreateWithoutReceitaInput>
  }

  export type ReceitaInsumoUpdateWithWhereUniqueWithoutReceitaInput = {
    where: ReceitaInsumoWhereUniqueInput
    data: XOR<ReceitaInsumoUpdateWithoutReceitaInput, ReceitaInsumoUncheckedUpdateWithoutReceitaInput>
  }

  export type ReceitaInsumoUpdateManyWithWhereWithoutReceitaInput = {
    where: ReceitaInsumoScalarWhereInput
    data: XOR<ReceitaInsumoUpdateManyMutationInput, ReceitaInsumoUncheckedUpdateManyWithoutReceitaInput>
  }

  export type ReceitaPlanejadaUpsertWithWhereUniqueWithoutReceitaInput = {
    where: ReceitaPlanejadaWhereUniqueInput
    update: XOR<ReceitaPlanejadaUpdateWithoutReceitaInput, ReceitaPlanejadaUncheckedUpdateWithoutReceitaInput>
    create: XOR<ReceitaPlanejadaCreateWithoutReceitaInput, ReceitaPlanejadaUncheckedCreateWithoutReceitaInput>
  }

  export type ReceitaPlanejadaUpdateWithWhereUniqueWithoutReceitaInput = {
    where: ReceitaPlanejadaWhereUniqueInput
    data: XOR<ReceitaPlanejadaUpdateWithoutReceitaInput, ReceitaPlanejadaUncheckedUpdateWithoutReceitaInput>
  }

  export type ReceitaPlanejadaUpdateManyWithWhereWithoutReceitaInput = {
    where: ReceitaPlanejadaScalarWhereInput
    data: XOR<ReceitaPlanejadaUpdateManyMutationInput, ReceitaPlanejadaUncheckedUpdateManyWithoutReceitaInput>
  }

  export type ReceitaPlanejadaScalarWhereInput = {
    AND?: ReceitaPlanejadaScalarWhereInput | ReceitaPlanejadaScalarWhereInput[]
    OR?: ReceitaPlanejadaScalarWhereInput[]
    NOT?: ReceitaPlanejadaScalarWhereInput | ReceitaPlanejadaScalarWhereInput[]
    id?: StringFilter<"ReceitaPlanejada"> | string
    planejamentoId?: StringFilter<"ReceitaPlanejada"> | string
    receitaId?: StringFilter<"ReceitaPlanejada"> | string
    quantidadePlanejada?: IntFilter<"ReceitaPlanejada"> | number
  }

  export type ReceitaCreateWithoutInsumosInput = {
    id?: string
    nome: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    planejamentos?: ReceitaPlanejadaCreateNestedManyWithoutReceitaInput
  }

  export type ReceitaUncheckedCreateWithoutInsumosInput = {
    id?: string
    nome: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    planejamentos?: ReceitaPlanejadaUncheckedCreateNestedManyWithoutReceitaInput
  }

  export type ReceitaCreateOrConnectWithoutInsumosInput = {
    where: ReceitaWhereUniqueInput
    create: XOR<ReceitaCreateWithoutInsumosInput, ReceitaUncheckedCreateWithoutInsumosInput>
  }

  export type InsumoCreateWithoutReceitasInput = {
    id?: string
    nome: string
    unidade: $Enums.UnidadeMedida
    quantidade: number
    validade?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    historico?: EstoqueHistoricoCreateNestedManyWithoutInsumoInput
    ListaCompra?: ListaCompraCreateNestedManyWithoutInsumoInput
  }

  export type InsumoUncheckedCreateWithoutReceitasInput = {
    id?: string
    nome: string
    unidade: $Enums.UnidadeMedida
    quantidade: number
    validade?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    historico?: EstoqueHistoricoUncheckedCreateNestedManyWithoutInsumoInput
    ListaCompra?: ListaCompraUncheckedCreateNestedManyWithoutInsumoInput
  }

  export type InsumoCreateOrConnectWithoutReceitasInput = {
    where: InsumoWhereUniqueInput
    create: XOR<InsumoCreateWithoutReceitasInput, InsumoUncheckedCreateWithoutReceitasInput>
  }

  export type ReceitaUpsertWithoutInsumosInput = {
    update: XOR<ReceitaUpdateWithoutInsumosInput, ReceitaUncheckedUpdateWithoutInsumosInput>
    create: XOR<ReceitaCreateWithoutInsumosInput, ReceitaUncheckedCreateWithoutInsumosInput>
    where?: ReceitaWhereInput
  }

  export type ReceitaUpdateToOneWithWhereWithoutInsumosInput = {
    where?: ReceitaWhereInput
    data: XOR<ReceitaUpdateWithoutInsumosInput, ReceitaUncheckedUpdateWithoutInsumosInput>
  }

  export type ReceitaUpdateWithoutInsumosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planejamentos?: ReceitaPlanejadaUpdateManyWithoutReceitaNestedInput
  }

  export type ReceitaUncheckedUpdateWithoutInsumosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planejamentos?: ReceitaPlanejadaUncheckedUpdateManyWithoutReceitaNestedInput
  }

  export type InsumoUpsertWithoutReceitasInput = {
    update: XOR<InsumoUpdateWithoutReceitasInput, InsumoUncheckedUpdateWithoutReceitasInput>
    create: XOR<InsumoCreateWithoutReceitasInput, InsumoUncheckedCreateWithoutReceitasInput>
    where?: InsumoWhereInput
  }

  export type InsumoUpdateToOneWithWhereWithoutReceitasInput = {
    where?: InsumoWhereInput
    data: XOR<InsumoUpdateWithoutReceitasInput, InsumoUncheckedUpdateWithoutReceitasInput>
  }

  export type InsumoUpdateWithoutReceitasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    unidade?: EnumUnidadeMedidaFieldUpdateOperationsInput | $Enums.UnidadeMedida
    quantidade?: FloatFieldUpdateOperationsInput | number
    validade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    historico?: EstoqueHistoricoUpdateManyWithoutInsumoNestedInput
    ListaCompra?: ListaCompraUpdateManyWithoutInsumoNestedInput
  }

  export type InsumoUncheckedUpdateWithoutReceitasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    unidade?: EnumUnidadeMedidaFieldUpdateOperationsInput | $Enums.UnidadeMedida
    quantidade?: FloatFieldUpdateOperationsInput | number
    validade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    historico?: EstoqueHistoricoUncheckedUpdateManyWithoutInsumoNestedInput
    ListaCompra?: ListaCompraUncheckedUpdateManyWithoutInsumoNestedInput
  }

  export type ReceitaPlanejadaCreateWithoutPlanejamentoInput = {
    id?: string
    quantidadePlanejada: number
    receita: ReceitaCreateNestedOneWithoutPlanejamentosInput
  }

  export type ReceitaPlanejadaUncheckedCreateWithoutPlanejamentoInput = {
    id?: string
    receitaId: string
    quantidadePlanejada: number
  }

  export type ReceitaPlanejadaCreateOrConnectWithoutPlanejamentoInput = {
    where: ReceitaPlanejadaWhereUniqueInput
    create: XOR<ReceitaPlanejadaCreateWithoutPlanejamentoInput, ReceitaPlanejadaUncheckedCreateWithoutPlanejamentoInput>
  }

  export type ReceitaPlanejadaCreateManyPlanejamentoInputEnvelope = {
    data: ReceitaPlanejadaCreateManyPlanejamentoInput | ReceitaPlanejadaCreateManyPlanejamentoInput[]
    skipDuplicates?: boolean
  }

  export type ListaCompraCreateWithoutPlanejamentoInput = {
    id?: string
    quantidadeFaltante: number
    insumo: InsumoCreateNestedOneWithoutListaCompraInput
  }

  export type ListaCompraUncheckedCreateWithoutPlanejamentoInput = {
    id?: string
    insumoId: string
    quantidadeFaltante: number
  }

  export type ListaCompraCreateOrConnectWithoutPlanejamentoInput = {
    where: ListaCompraWhereUniqueInput
    create: XOR<ListaCompraCreateWithoutPlanejamentoInput, ListaCompraUncheckedCreateWithoutPlanejamentoInput>
  }

  export type ListaCompraCreateManyPlanejamentoInputEnvelope = {
    data: ListaCompraCreateManyPlanejamentoInput | ListaCompraCreateManyPlanejamentoInput[]
    skipDuplicates?: boolean
  }

  export type ReceitaPlanejadaUpsertWithWhereUniqueWithoutPlanejamentoInput = {
    where: ReceitaPlanejadaWhereUniqueInput
    update: XOR<ReceitaPlanejadaUpdateWithoutPlanejamentoInput, ReceitaPlanejadaUncheckedUpdateWithoutPlanejamentoInput>
    create: XOR<ReceitaPlanejadaCreateWithoutPlanejamentoInput, ReceitaPlanejadaUncheckedCreateWithoutPlanejamentoInput>
  }

  export type ReceitaPlanejadaUpdateWithWhereUniqueWithoutPlanejamentoInput = {
    where: ReceitaPlanejadaWhereUniqueInput
    data: XOR<ReceitaPlanejadaUpdateWithoutPlanejamentoInput, ReceitaPlanejadaUncheckedUpdateWithoutPlanejamentoInput>
  }

  export type ReceitaPlanejadaUpdateManyWithWhereWithoutPlanejamentoInput = {
    where: ReceitaPlanejadaScalarWhereInput
    data: XOR<ReceitaPlanejadaUpdateManyMutationInput, ReceitaPlanejadaUncheckedUpdateManyWithoutPlanejamentoInput>
  }

  export type ListaCompraUpsertWithWhereUniqueWithoutPlanejamentoInput = {
    where: ListaCompraWhereUniqueInput
    update: XOR<ListaCompraUpdateWithoutPlanejamentoInput, ListaCompraUncheckedUpdateWithoutPlanejamentoInput>
    create: XOR<ListaCompraCreateWithoutPlanejamentoInput, ListaCompraUncheckedCreateWithoutPlanejamentoInput>
  }

  export type ListaCompraUpdateWithWhereUniqueWithoutPlanejamentoInput = {
    where: ListaCompraWhereUniqueInput
    data: XOR<ListaCompraUpdateWithoutPlanejamentoInput, ListaCompraUncheckedUpdateWithoutPlanejamentoInput>
  }

  export type ListaCompraUpdateManyWithWhereWithoutPlanejamentoInput = {
    where: ListaCompraScalarWhereInput
    data: XOR<ListaCompraUpdateManyMutationInput, ListaCompraUncheckedUpdateManyWithoutPlanejamentoInput>
  }

  export type PlanejamentoProducaoCreateWithoutReceitasInput = {
    id?: string
    dataCriacao?: Date | string
    confirmado?: boolean
    compras?: ListaCompraCreateNestedManyWithoutPlanejamentoInput
  }

  export type PlanejamentoProducaoUncheckedCreateWithoutReceitasInput = {
    id?: string
    dataCriacao?: Date | string
    confirmado?: boolean
    compras?: ListaCompraUncheckedCreateNestedManyWithoutPlanejamentoInput
  }

  export type PlanejamentoProducaoCreateOrConnectWithoutReceitasInput = {
    where: PlanejamentoProducaoWhereUniqueInput
    create: XOR<PlanejamentoProducaoCreateWithoutReceitasInput, PlanejamentoProducaoUncheckedCreateWithoutReceitasInput>
  }

  export type ReceitaCreateWithoutPlanejamentosInput = {
    id?: string
    nome: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    insumos?: ReceitaInsumoCreateNestedManyWithoutReceitaInput
  }

  export type ReceitaUncheckedCreateWithoutPlanejamentosInput = {
    id?: string
    nome: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    insumos?: ReceitaInsumoUncheckedCreateNestedManyWithoutReceitaInput
  }

  export type ReceitaCreateOrConnectWithoutPlanejamentosInput = {
    where: ReceitaWhereUniqueInput
    create: XOR<ReceitaCreateWithoutPlanejamentosInput, ReceitaUncheckedCreateWithoutPlanejamentosInput>
  }

  export type PlanejamentoProducaoUpsertWithoutReceitasInput = {
    update: XOR<PlanejamentoProducaoUpdateWithoutReceitasInput, PlanejamentoProducaoUncheckedUpdateWithoutReceitasInput>
    create: XOR<PlanejamentoProducaoCreateWithoutReceitasInput, PlanejamentoProducaoUncheckedCreateWithoutReceitasInput>
    where?: PlanejamentoProducaoWhereInput
  }

  export type PlanejamentoProducaoUpdateToOneWithWhereWithoutReceitasInput = {
    where?: PlanejamentoProducaoWhereInput
    data: XOR<PlanejamentoProducaoUpdateWithoutReceitasInput, PlanejamentoProducaoUncheckedUpdateWithoutReceitasInput>
  }

  export type PlanejamentoProducaoUpdateWithoutReceitasInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmado?: BoolFieldUpdateOperationsInput | boolean
    compras?: ListaCompraUpdateManyWithoutPlanejamentoNestedInput
  }

  export type PlanejamentoProducaoUncheckedUpdateWithoutReceitasInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmado?: BoolFieldUpdateOperationsInput | boolean
    compras?: ListaCompraUncheckedUpdateManyWithoutPlanejamentoNestedInput
  }

  export type ReceitaUpsertWithoutPlanejamentosInput = {
    update: XOR<ReceitaUpdateWithoutPlanejamentosInput, ReceitaUncheckedUpdateWithoutPlanejamentosInput>
    create: XOR<ReceitaCreateWithoutPlanejamentosInput, ReceitaUncheckedCreateWithoutPlanejamentosInput>
    where?: ReceitaWhereInput
  }

  export type ReceitaUpdateToOneWithWhereWithoutPlanejamentosInput = {
    where?: ReceitaWhereInput
    data: XOR<ReceitaUpdateWithoutPlanejamentosInput, ReceitaUncheckedUpdateWithoutPlanejamentosInput>
  }

  export type ReceitaUpdateWithoutPlanejamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    insumos?: ReceitaInsumoUpdateManyWithoutReceitaNestedInput
  }

  export type ReceitaUncheckedUpdateWithoutPlanejamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    insumos?: ReceitaInsumoUncheckedUpdateManyWithoutReceitaNestedInput
  }

  export type PlanejamentoProducaoCreateWithoutComprasInput = {
    id?: string
    dataCriacao?: Date | string
    confirmado?: boolean
    receitas?: ReceitaPlanejadaCreateNestedManyWithoutPlanejamentoInput
  }

  export type PlanejamentoProducaoUncheckedCreateWithoutComprasInput = {
    id?: string
    dataCriacao?: Date | string
    confirmado?: boolean
    receitas?: ReceitaPlanejadaUncheckedCreateNestedManyWithoutPlanejamentoInput
  }

  export type PlanejamentoProducaoCreateOrConnectWithoutComprasInput = {
    where: PlanejamentoProducaoWhereUniqueInput
    create: XOR<PlanejamentoProducaoCreateWithoutComprasInput, PlanejamentoProducaoUncheckedCreateWithoutComprasInput>
  }

  export type InsumoCreateWithoutListaCompraInput = {
    id?: string
    nome: string
    unidade: $Enums.UnidadeMedida
    quantidade: number
    validade?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    receitas?: ReceitaInsumoCreateNestedManyWithoutInsumoInput
    historico?: EstoqueHistoricoCreateNestedManyWithoutInsumoInput
  }

  export type InsumoUncheckedCreateWithoutListaCompraInput = {
    id?: string
    nome: string
    unidade: $Enums.UnidadeMedida
    quantidade: number
    validade?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    receitas?: ReceitaInsumoUncheckedCreateNestedManyWithoutInsumoInput
    historico?: EstoqueHistoricoUncheckedCreateNestedManyWithoutInsumoInput
  }

  export type InsumoCreateOrConnectWithoutListaCompraInput = {
    where: InsumoWhereUniqueInput
    create: XOR<InsumoCreateWithoutListaCompraInput, InsumoUncheckedCreateWithoutListaCompraInput>
  }

  export type PlanejamentoProducaoUpsertWithoutComprasInput = {
    update: XOR<PlanejamentoProducaoUpdateWithoutComprasInput, PlanejamentoProducaoUncheckedUpdateWithoutComprasInput>
    create: XOR<PlanejamentoProducaoCreateWithoutComprasInput, PlanejamentoProducaoUncheckedCreateWithoutComprasInput>
    where?: PlanejamentoProducaoWhereInput
  }

  export type PlanejamentoProducaoUpdateToOneWithWhereWithoutComprasInput = {
    where?: PlanejamentoProducaoWhereInput
    data: XOR<PlanejamentoProducaoUpdateWithoutComprasInput, PlanejamentoProducaoUncheckedUpdateWithoutComprasInput>
  }

  export type PlanejamentoProducaoUpdateWithoutComprasInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmado?: BoolFieldUpdateOperationsInput | boolean
    receitas?: ReceitaPlanejadaUpdateManyWithoutPlanejamentoNestedInput
  }

  export type PlanejamentoProducaoUncheckedUpdateWithoutComprasInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmado?: BoolFieldUpdateOperationsInput | boolean
    receitas?: ReceitaPlanejadaUncheckedUpdateManyWithoutPlanejamentoNestedInput
  }

  export type InsumoUpsertWithoutListaCompraInput = {
    update: XOR<InsumoUpdateWithoutListaCompraInput, InsumoUncheckedUpdateWithoutListaCompraInput>
    create: XOR<InsumoCreateWithoutListaCompraInput, InsumoUncheckedCreateWithoutListaCompraInput>
    where?: InsumoWhereInput
  }

  export type InsumoUpdateToOneWithWhereWithoutListaCompraInput = {
    where?: InsumoWhereInput
    data: XOR<InsumoUpdateWithoutListaCompraInput, InsumoUncheckedUpdateWithoutListaCompraInput>
  }

  export type InsumoUpdateWithoutListaCompraInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    unidade?: EnumUnidadeMedidaFieldUpdateOperationsInput | $Enums.UnidadeMedida
    quantidade?: FloatFieldUpdateOperationsInput | number
    validade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receitas?: ReceitaInsumoUpdateManyWithoutInsumoNestedInput
    historico?: EstoqueHistoricoUpdateManyWithoutInsumoNestedInput
  }

  export type InsumoUncheckedUpdateWithoutListaCompraInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    unidade?: EnumUnidadeMedidaFieldUpdateOperationsInput | $Enums.UnidadeMedida
    quantidade?: FloatFieldUpdateOperationsInput | number
    validade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receitas?: ReceitaInsumoUncheckedUpdateManyWithoutInsumoNestedInput
    historico?: EstoqueHistoricoUncheckedUpdateManyWithoutInsumoNestedInput
  }

  export type InsumoCreateWithoutHistoricoInput = {
    id?: string
    nome: string
    unidade: $Enums.UnidadeMedida
    quantidade: number
    validade?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    receitas?: ReceitaInsumoCreateNestedManyWithoutInsumoInput
    ListaCompra?: ListaCompraCreateNestedManyWithoutInsumoInput
  }

  export type InsumoUncheckedCreateWithoutHistoricoInput = {
    id?: string
    nome: string
    unidade: $Enums.UnidadeMedida
    quantidade: number
    validade?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    receitas?: ReceitaInsumoUncheckedCreateNestedManyWithoutInsumoInput
    ListaCompra?: ListaCompraUncheckedCreateNestedManyWithoutInsumoInput
  }

  export type InsumoCreateOrConnectWithoutHistoricoInput = {
    where: InsumoWhereUniqueInput
    create: XOR<InsumoCreateWithoutHistoricoInput, InsumoUncheckedCreateWithoutHistoricoInput>
  }

  export type UsuarioCreateWithoutHistoricoMovimentacoesInput = {
    id?: string
    email: string
    senha: string
    nome: string
  }

  export type UsuarioUncheckedCreateWithoutHistoricoMovimentacoesInput = {
    id?: string
    email: string
    senha: string
    nome: string
  }

  export type UsuarioCreateOrConnectWithoutHistoricoMovimentacoesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutHistoricoMovimentacoesInput, UsuarioUncheckedCreateWithoutHistoricoMovimentacoesInput>
  }

  export type InsumoUpsertWithoutHistoricoInput = {
    update: XOR<InsumoUpdateWithoutHistoricoInput, InsumoUncheckedUpdateWithoutHistoricoInput>
    create: XOR<InsumoCreateWithoutHistoricoInput, InsumoUncheckedCreateWithoutHistoricoInput>
    where?: InsumoWhereInput
  }

  export type InsumoUpdateToOneWithWhereWithoutHistoricoInput = {
    where?: InsumoWhereInput
    data: XOR<InsumoUpdateWithoutHistoricoInput, InsumoUncheckedUpdateWithoutHistoricoInput>
  }

  export type InsumoUpdateWithoutHistoricoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    unidade?: EnumUnidadeMedidaFieldUpdateOperationsInput | $Enums.UnidadeMedida
    quantidade?: FloatFieldUpdateOperationsInput | number
    validade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receitas?: ReceitaInsumoUpdateManyWithoutInsumoNestedInput
    ListaCompra?: ListaCompraUpdateManyWithoutInsumoNestedInput
  }

  export type InsumoUncheckedUpdateWithoutHistoricoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    unidade?: EnumUnidadeMedidaFieldUpdateOperationsInput | $Enums.UnidadeMedida
    quantidade?: FloatFieldUpdateOperationsInput | number
    validade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receitas?: ReceitaInsumoUncheckedUpdateManyWithoutInsumoNestedInput
    ListaCompra?: ListaCompraUncheckedUpdateManyWithoutInsumoNestedInput
  }

  export type UsuarioUpsertWithoutHistoricoMovimentacoesInput = {
    update: XOR<UsuarioUpdateWithoutHistoricoMovimentacoesInput, UsuarioUncheckedUpdateWithoutHistoricoMovimentacoesInput>
    create: XOR<UsuarioCreateWithoutHistoricoMovimentacoesInput, UsuarioUncheckedCreateWithoutHistoricoMovimentacoesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutHistoricoMovimentacoesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutHistoricoMovimentacoesInput, UsuarioUncheckedUpdateWithoutHistoricoMovimentacoesInput>
  }

  export type UsuarioUpdateWithoutHistoricoMovimentacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateWithoutHistoricoMovimentacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type EstoqueHistoricoCreateManyUsuarioInput = {
    id?: string
    insumoId: string
    tipo: $Enums.TipoMovimentacao
    quantidade: number
    dataHora?: Date | string
  }

  export type EstoqueHistoricoUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    quantidade?: FloatFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    insumo?: InsumoUpdateOneRequiredWithoutHistoricoNestedInput
  }

  export type EstoqueHistoricoUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    insumoId?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    quantidade?: FloatFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstoqueHistoricoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    insumoId?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    quantidade?: FloatFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceitaInsumoCreateManyInsumoInput = {
    id?: string
    receitaId: string
    quantidade: number
  }

  export type EstoqueHistoricoCreateManyInsumoInput = {
    id?: string
    usuarioId: string
    tipo: $Enums.TipoMovimentacao
    quantidade: number
    dataHora?: Date | string
  }

  export type ListaCompraCreateManyInsumoInput = {
    id?: string
    planejamentoId: string
    quantidadeFaltante: number
  }

  export type ReceitaInsumoUpdateWithoutInsumoInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantidade?: FloatFieldUpdateOperationsInput | number
    receita?: ReceitaUpdateOneRequiredWithoutInsumosNestedInput
  }

  export type ReceitaInsumoUncheckedUpdateWithoutInsumoInput = {
    id?: StringFieldUpdateOperationsInput | string
    receitaId?: StringFieldUpdateOperationsInput | string
    quantidade?: FloatFieldUpdateOperationsInput | number
  }

  export type ReceitaInsumoUncheckedUpdateManyWithoutInsumoInput = {
    id?: StringFieldUpdateOperationsInput | string
    receitaId?: StringFieldUpdateOperationsInput | string
    quantidade?: FloatFieldUpdateOperationsInput | number
  }

  export type EstoqueHistoricoUpdateWithoutInsumoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    quantidade?: FloatFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutHistoricoMovimentacoesNestedInput
  }

  export type EstoqueHistoricoUncheckedUpdateWithoutInsumoInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    quantidade?: FloatFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstoqueHistoricoUncheckedUpdateManyWithoutInsumoInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    quantidade?: FloatFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListaCompraUpdateWithoutInsumoInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantidadeFaltante?: FloatFieldUpdateOperationsInput | number
    planejamento?: PlanejamentoProducaoUpdateOneRequiredWithoutComprasNestedInput
  }

  export type ListaCompraUncheckedUpdateWithoutInsumoInput = {
    id?: StringFieldUpdateOperationsInput | string
    planejamentoId?: StringFieldUpdateOperationsInput | string
    quantidadeFaltante?: FloatFieldUpdateOperationsInput | number
  }

  export type ListaCompraUncheckedUpdateManyWithoutInsumoInput = {
    id?: StringFieldUpdateOperationsInput | string
    planejamentoId?: StringFieldUpdateOperationsInput | string
    quantidadeFaltante?: FloatFieldUpdateOperationsInput | number
  }

  export type ReceitaInsumoCreateManyReceitaInput = {
    id?: string
    insumoId: string
    quantidade: number
  }

  export type ReceitaPlanejadaCreateManyReceitaInput = {
    id?: string
    planejamentoId: string
    quantidadePlanejada: number
  }

  export type ReceitaInsumoUpdateWithoutReceitaInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantidade?: FloatFieldUpdateOperationsInput | number
    insumo?: InsumoUpdateOneRequiredWithoutReceitasNestedInput
  }

  export type ReceitaInsumoUncheckedUpdateWithoutReceitaInput = {
    id?: StringFieldUpdateOperationsInput | string
    insumoId?: StringFieldUpdateOperationsInput | string
    quantidade?: FloatFieldUpdateOperationsInput | number
  }

  export type ReceitaInsumoUncheckedUpdateManyWithoutReceitaInput = {
    id?: StringFieldUpdateOperationsInput | string
    insumoId?: StringFieldUpdateOperationsInput | string
    quantidade?: FloatFieldUpdateOperationsInput | number
  }

  export type ReceitaPlanejadaUpdateWithoutReceitaInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantidadePlanejada?: IntFieldUpdateOperationsInput | number
    planejamento?: PlanejamentoProducaoUpdateOneRequiredWithoutReceitasNestedInput
  }

  export type ReceitaPlanejadaUncheckedUpdateWithoutReceitaInput = {
    id?: StringFieldUpdateOperationsInput | string
    planejamentoId?: StringFieldUpdateOperationsInput | string
    quantidadePlanejada?: IntFieldUpdateOperationsInput | number
  }

  export type ReceitaPlanejadaUncheckedUpdateManyWithoutReceitaInput = {
    id?: StringFieldUpdateOperationsInput | string
    planejamentoId?: StringFieldUpdateOperationsInput | string
    quantidadePlanejada?: IntFieldUpdateOperationsInput | number
  }

  export type ReceitaPlanejadaCreateManyPlanejamentoInput = {
    id?: string
    receitaId: string
    quantidadePlanejada: number
  }

  export type ListaCompraCreateManyPlanejamentoInput = {
    id?: string
    insumoId: string
    quantidadeFaltante: number
  }

  export type ReceitaPlanejadaUpdateWithoutPlanejamentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantidadePlanejada?: IntFieldUpdateOperationsInput | number
    receita?: ReceitaUpdateOneRequiredWithoutPlanejamentosNestedInput
  }

  export type ReceitaPlanejadaUncheckedUpdateWithoutPlanejamentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    receitaId?: StringFieldUpdateOperationsInput | string
    quantidadePlanejada?: IntFieldUpdateOperationsInput | number
  }

  export type ReceitaPlanejadaUncheckedUpdateManyWithoutPlanejamentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    receitaId?: StringFieldUpdateOperationsInput | string
    quantidadePlanejada?: IntFieldUpdateOperationsInput | number
  }

  export type ListaCompraUpdateWithoutPlanejamentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantidadeFaltante?: FloatFieldUpdateOperationsInput | number
    insumo?: InsumoUpdateOneRequiredWithoutListaCompraNestedInput
  }

  export type ListaCompraUncheckedUpdateWithoutPlanejamentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    insumoId?: StringFieldUpdateOperationsInput | string
    quantidadeFaltante?: FloatFieldUpdateOperationsInput | number
  }

  export type ListaCompraUncheckedUpdateManyWithoutPlanejamentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    insumoId?: StringFieldUpdateOperationsInput | string
    quantidadeFaltante?: FloatFieldUpdateOperationsInput | number
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
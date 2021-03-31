
import {VSchema} from './schema'

describe('schema', () => {
  it('number', async () => {

    const val:number = 1;
    const x: VSchema<{type: 'number'}> = val;

    expect(x).toBe(val);
  });

  it('number 2', async () => {

    const val:number = 1;
    const x: VSchema<{type:'number'}> = val;

    expect(x).toBe(val);

  });

  it('string', async() => {

    const val:string = 'my string';
    const x: VSchema<{type: 'string'}> = val;

    expect(x).toBe(val);
  });

  it('boolean', async() => {

    const val:boolean = true;
    const x: VSchema<{type: 'boolean'}> = val;

    expect(x).toBe(val);
  });

  it('null', async() => {

    const val:null = null;
    const x: VSchema<{type: 'null'}> = val;

    expect(x).toBe(val);
  });

  it('undefined', async() => {

    const val:undefined = undefined;
    const x: VSchema<{type: 'undefined'}> = val;

    expect(x).toBe(val);
  });

  it('direct ref', async() => {

    const val:number = 1;
    const x: VSchema<{definitions: {num: {$id: 'def', type: 'number'}}, $ref: 'def'}> = val;

    expect(x).toBe(val);
  });

  it('recursive ref', async() => {

    const val:string = 'my string';
    const x: VSchema<{definitions: {str1: {$id: 'def', $ref: 'def2'}, str2: {$id: 'def2', type: 'string'}}, $ref: 'def'}> = val;

    expect(x).toBe(val);
  });

  it('array of numbers', async() => {

    const val:number[] = [1,2,3];
    const x: VSchema<{type: 'array', items: {type: 'number'}}> = val;

    expect(x[0]).toBe(val[0]);
    expect(x).toBe(val);
  });

  it('array of string', async() => {

    const val:string[] = ['a','b', 'c'];
    const x: VSchema<{type: 'array', items: {type: 'string'}}> = val;

    expect(x[0]).toBe(val[0]);
    expect(x).toBe(val);
  });

  it('array of bool', async() => {

    const val:boolean[] = [true, true, false];
    const x: VSchema<{type: 'array', items: {type: 'boolean'}}> = val;

    expect(x[0]).toBe(val[0]);
    expect(x).toBe(val);
  });

  it('matrix of string', async() => {

    const val:string[][] = [['a', 'b'], ['c','d']];
    const x: VSchema<{type: 'array', items: {type: 'array', items: {type: 'string'}}}> = val;

    expect(x[0][0]).toBe(val[0][0]);
    expect(x).toBe(val);
  });

  
  it('object of bool', async() => {

    const val:{b?: boolean} = {b:true};
    const x: VSchema<{type: 'object', properties: {b: {type: 'boolean'}}}> = val;

    expect(x).toBe(val);
  });

  it('object with number and string', async() => {

    const val:{a: number, b?: string} = {a: 3, b: '1'};
    const x: VSchema<{type: 'object', properties: {a: {type: 'number'}, b: {type: 'string'}}}> = val;

    expect(x).toBe(val); 
    expect(x.a).toBe(val.a); 
    expect(x.b).toBe(val.b);
  });


  
  

});
  

/*
// should be valid
const objectOfAnyNumbers: VSchema<{type: 'object', additionalProperties: {type: 'number'}}> = {xfg: 3, dhi: 1} // {[name: string]: number}
const reqProps: VSchema<{type: 'object', properties: {a: {type: 'number'}, b: {type: 'string'}}, required: ['a']}> = {a: 3, b: '5'} // {a: number, b?: string}
const not: VSchema<{not: {type: 'number'}}> = '1'
const not2: VSchema<{not: {type: 'string'}}> = {a: '1'}
const oneOf: VSchema<{oneOf: [{type: 'string'}, {type: 'number'}]}> = 1 // string | number
const oneOfObject: VSchema<{oneOf: [{type: 'string'}, {type: 'object', properties: {a: {type: 'number'}}}]}> = {a: 1} // string | {a: number}
const allOf: VSchema<{allOf: [{type: 'object', properties: {a: {type: 'number'}}}, {type: 'object', properties: {b: {type: 'string'}}}]}> = {a: 1, b: 'str'} // {a: number} & {b: string}
const tuple: VSchema<{type: 'array', items: [{type: 'number'}, {type: 'string'}]}> = [1, '123'] // [number, string]
const tupleWithAdditional: VSchema<{type: 'array', items: [{type: 'number'}, {type: 'string'}], additionalItems: {type: 'string'}}> = [1, '123', 'abc'] // [number, string, ...string[]]
const tupleWithAdditionalObject: VSchema<{type: 'array', items: [{type: 'number'}, {type: 'string'}], additionalItems: {type: 'object', properties: {bla: {type: 'string'}}}}> = [1, '123', {bla: 'abc'}] // [number, string, ...{bla: string}[]]
const recursiveObject: VSchema<{type: 'object', properties: {arr: {type: 'array', items: {type: 'object', additionalProperties: {type: 'string'}}}}}> = {arr: [{somthing: '1'}]} // {arr: {[name: string]: string}[]}
const IfThenElse1: VSchema<{If: {type: 'object', properties: {a: {type: 'number'}}}, Then: {type: 'object', properties: {b: {type: 'string'}}}, Else: {type: 'object', properties: {c: {type: 'array', items: {type: 'string'}}}}}> = {a: '1', b: '2'}
const WithConst: VSchema<{type: 'object', properties: {a: {type: 'string', const: '123'}}}> = {a: '123'}
const withEnum: VSchema<{type: 'string', enum: ['123', '456']}> = '123'

// should be invalid
const numberAndString: VSchema<{type: 'number'}> = '123' // number
const stringAndNumber: VSchema<{type: 'string'}> = 123 // string
const propsAndAdditional: VSchema<{type: 'object', properties: {a: {type: 'number'}}}> = {a: 1, b: '123', c: 3} // {a?: number}
const MissingReqProps: VSchema<{type: 'object', properties: {a: {type: 'number'}, b: {type: 'string'}}, required: ['a']}> = {b: '3'} // {a: number, b?: string}
const notBad: VSchema<{not: {type: 'number'}}> = 1 // anything but number
const oneOfBad: VSchema<{oneOf: [{type: 'string'}, {type: 'number'}]}> = {} // string|number
const oneOfObjectBad: VSchema<{oneOf: [{type: 'string'}, {type: 'object', properties: {a: {type: 'number'}}}]}> = {a: '123'} // string | {a: number}
const withEnumBad: VSchema<{type: 'string', enum: ['123', '456']}> = '789'
const withConstBad: VSchema<{type: 'string', const: '123'}> = '789'

// TODO: Should be invalid but currently pass
const oneOfWithAllOf: VSchema<{oneOf: [{type: 'object', properties: {a: {type: 'string'}}}, {type: 'object', properties: {b: {type: 'number'}}}]}> = {a: '123', b: 3} // string|number
const IfThenElseBad: VSchema<{If: {type: 'object', properties: {a: {type: 'number'}}}, Then: {type: 'object', properties: {b: {type: 'string'}}}, Else: {type: 'object', properties: {c: {type: 'array', items: {type: 'string'}}}}}> = {a: '1', b: '2', c:['3']}


*/
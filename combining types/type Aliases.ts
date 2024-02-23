// A Type Alias in typescript allows you to create a new name for a type  

//primitive types
type UserName =  string
type YesorNo = boolean
type Age = number

let userName:UserName = 'dhamo'
let yeesorNo:YesorNo = true
let age:Age =  24

//array

type NameArray = string[]

let Name:NameArray = ['dhamo', 'jagan']


//object

type User = {
    name : UserName,
    age : Age,
    isEng : YesorNo
}

let user:User = {
    name: 'dhamo',
    age: 0,
    isEng: false
}

//union type

type StrOrNum = string | number

let errorCode:StrOrNum = '401'

errorCode = 401

//tuples

type NameAndAge = [name:string, age:number]

let usertuple:NameAndAge = ['dhamo',23]
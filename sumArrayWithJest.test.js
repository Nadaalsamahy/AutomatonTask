const sum= require('./sumWithJest')
test("test case ",()=>{
    expect (sum(10,20)).toBe(30)
})

test ("Expect array to be found in the main array",()=>{
const myArray =[1,5,3,4]
expect(myArray).toEqual(expect.arrayContaining([1,5]))
});

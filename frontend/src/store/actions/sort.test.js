const sort = require("./sort")
// @ponicode
describe("sort.setSortBy", () => {
    test("0", () => {
        let callFunction = () => {
            sort.setSortBy([true, false, false])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            sort.setSortBy([true, true, true])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            sort.setSortBy([false, false, true])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            sort.setSortBy([false, true, false])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            sort.setSortBy([false, true, true])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            sort.setSortBy(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

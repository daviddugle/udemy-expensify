const expenses = require("./expenses")
// @ponicode
describe("expenses.default", () => {
    test("0", () => {
        let param1 = [[false, false, true], [false, true, true], [true, true, true]]
        let callFunction = () => {
            expenses.default(param1, { text: "foo bar", sortBy: "amount", startDate: { isSameOrBefore: () => true }, endDate: { isSameOrAfter: () => false } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [[false, true, true], [true, false, true], [false, false, false]]
        let callFunction = () => {
            expenses.default(param1, { text: "This is a Text", sortBy: "date", startDate: { isSameOrBefore: () => true }, endDate: { isSameOrAfter: () => true } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [[true, false, true], [true, false, true], [true, true, true]]
        let callFunction = () => {
            expenses.default(param1, { text: "This is a Text", sortBy: "amount", startDate: { isSameOrBefore: () => false }, endDate: { isSameOrAfter: () => false } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [[true, true, true], [false, true, false], [true, true, true]]
        let callFunction = () => {
            expenses.default(param1, { text: "Hello, world!", sortBy: "amount", startDate: { isSameOrBefore: () => false }, endDate: { isSameOrAfter: () => true } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [[false, false, true], [true, false, true], [true, true, true]]
        let callFunction = () => {
            expenses.default(param1, { text: "FOo bar", sortBy: "amount", startDate: { isSameOrBefore: () => true }, endDate: { isSameOrAfter: () => true } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            expenses.default([], { text: "", sortBy: undefined, startDate: undefined, endDate: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})

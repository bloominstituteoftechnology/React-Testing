import calculate from '../logic/calculate';


describe('calculate', () => {
    it('renders the calculation', () => {
        expect(calculate({ "next": "2", "operation": "+", "total": "8" }, "=")).toBe({ "next": null, "operation": null, "total": "6" });
    })
})
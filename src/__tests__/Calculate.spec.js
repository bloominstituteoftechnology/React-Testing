import calculate from "../logic/calculate";
describe("calculate", () => {
	it("clears data on ac", () => {
		const output = calculate({}, "AC");

		expect(output).toEqual({
			total: null,
			next: null,
			operation: null,
		});
	});
	it("adds 2 numbers", () => {
		const output = calculate(
			{
				total: "1",
				next: "1",
				operation: "+",
			},
			"=",
		);
		expect(output).toEqual({
			total: "2",
			next: null,
			operation: null,
		});
	});
	it("concatenates digits", () => {
		let output = calculate(
			{
				total: "0",
				next: null,
				operation: null,
			},
			"1",
		);
		expect(output.next).toBe("1");

		output = calculate(output, "2");
		expect(output.next).toBe("12");
	});

	it("inverts negativity", () => {
		let output = calculate(
			{
				total: null,
				next: "1",
				operation: null,
			},
			"+/-",
		);
		expect(output.next).toBe("-1");
		output = calculate(output, "+/-");
		expect(output.next).toBe("1");
	});
});

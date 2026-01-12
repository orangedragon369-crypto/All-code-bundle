describe("MathUtils", () => {
    let mathUtils;

    beforeEach(() => {
        mathUtils = new MathUtils(); 
    });

    describe("add", () => {
        it('should add 2 numbers', () => {
            expect(mathUtils.add(1,2)).toBe(3);
        });
        it('should add 2 negative numbers', () => {
            expect(mathUtils.add(-1,-2)).toBe(-3);
        });
        it('should work with positive negative numbers', () => {
            expect(mathUtils.add(1,-2)).toBe(-1);
            expect(mathUtils.add(-1,2)).toBe(1);
        });
        it('should work with strings', () => {
            expect(mathUtils.add("cat","dog")).toBe("catdog");
        });
    });

    describe("subtract", () => {
        it("should subtract 2 numbers",  () => {
            expect(mathUtils.subtract(2, 1)).toBe(1);
            expect(mathUtils.subtract(3, 0)).toEqual(3);
        })
        it("should throw an error with non numbers",  () => {
            expect(() => {
                mathUtils.subtract("not", "numbers")
            }).toBe(1);
        })
    })
});
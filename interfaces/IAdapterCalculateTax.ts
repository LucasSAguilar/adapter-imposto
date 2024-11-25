export default interface IAdapterCalculateTax {
    calculateTax(amount: number, rate: number): number;
}
export default class TaxLibB {
    compute(amount: number, { taxRate }: { taxRate: number }): number {
      return amount * taxRate;
    }
  }
  
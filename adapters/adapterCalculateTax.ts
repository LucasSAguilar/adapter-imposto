import IAdapterCalculateTax from "../interfaces/IAdapterCalculateTax";
import TaxLibA from "../services/taxLibA";
import TaxLibB from "../services/taxLibB";

export default class adapterCalculateTax implements IAdapterCalculateTax {
    
    private taxLibA = new TaxLibA();
    private taxLibB = new TaxLibB();
    
    calculateTax(amount: number, rate: number): number {

        // Aqui estão as duas formas de calcular o imposto

        return this.taxLibA.calculateTax(amount, rate);
        // return this.taxLibB.compute(amount, {taxRate: rate});
    }
}
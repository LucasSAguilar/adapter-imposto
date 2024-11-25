
# **Adapter Exemplo**

Este projeto demonstra o uso do padrão de design **Adapter** em TypeScript para integrar e alternar entre diferentes bibliotecas de cálculo de impostos. O objetivo é encapsular as dependências de forma que seja fácil trocar ou adicionar novas bibliotecas no futuro sem alterar o restante do código.

----------

## **Arquitetura**

### **Diretórios**

-   **adapters/**: Contém os adaptadores que implementam interfaces para encapsular bibliotecas externas.
-   **interfaces/**: Define os contratos que os adaptadores devem seguir.
-   **services/**: Implementações das bibliotecas de terceiros.
-   **app/**: Contém o ponto de entrada principal do aplicativo.

----------

## **Código**

### **Adapter: adapterCalculateTax**

Arquivo: `adapters/adapterCalculateTax.ts`

Este adaptador implementa a interface `IAdapterCalculateTax` para fornecer um método unificado de cálculo de impostos. Ele encapsula duas bibliotecas diferentes:

-   `TaxLibA`: Biblioteca com método `calculateTax(amount, rate)`.
-   `TaxLibB`: Biblioteca com método `compute(amount, {taxRate})`.

#### **Código**

```typescript

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
}` 

```

----------

### **Interface: IAdapterCalculateTax**

Arquivo: `interfaces/IAdapterCalculateTax.ts`

Define o contrato que os adaptadores devem seguir para realizar cálculos de impostos.

#### **Código**

```typescript
export default interface IAdapterCalculateTax {
    calculateTax(amount: number, rate: number): number;
}` 
```
----------

### **Bibliotecas de Terceiros**

#### **TaxLibA**

Arquivo: `services/taxLibA.ts`

Simula uma biblioteca externa com um método `calculateTax`.

```typescript

export default class TaxLibA {
    calculateTax(amount: number, rate: number): number {
        return amount * rate;
    }
}` 
```
#### **TaxLibB**

Arquivo: `services/taxLibB.ts`

Simula outra biblioteca externa com um método `compute`.

```typescript

export default class TaxLibB {
    compute(amount: number, options: { taxRate: number }): number {
        return amount * options.taxRate;
    }
}` 
```
----------

### **Ponto de Entrada**

Arquivo: `app/index.ts`

Exemplo de uso do adaptador para calcular o imposto.

#### **Código**

```typescript

import adapterCalculateTax from "../adapters/adapterCalculateTax.js";

const data = {
    amount: 100,
    rate: 0.1
}

const adapter = new adapterCalculateTax();
console.log(adapter.calculateTax(data.amount, data.rate));` 
```
----------

## **Execução**

### **Scripts**

-   **`start`**: Compila o projeto TypeScript e executa o arquivo principal.

#### **Exemplo de Execução**

bash

Copiar código

`npm run start` 

### **Saída Esperada**

Copiar código

`10` 

----------

## **Como Funciona o Adapter**

O adaptador permite alternar facilmente entre diferentes bibliotecas de cálculo de impostos. Para mudar de `TaxLibA` para `TaxLibB`, basta alterar o método ativo no adaptador:

```typescript
calculateTax(amount: number, rate: number): number {
    return this.taxLibB.compute(amount, { taxRate: rate });
}` 
```
Essa abordagem desacopla o restante do sistema das bibliotecas externas, tornando a manutenção e substituição mais simples.

----------

## **Dependências**

-   **Node.js** com suporte a módulos ES6.
-   **TypeScript**.
import type { CalculatorTool } from '@/types/calculator';

export const calculatorCatalog: CalculatorTool[] = [
  {
    slug: 'bmi-calculator',
    name: 'BMI Calculator',
    category: 'Health',
    description: 'Calculate body mass index from height and weight.',
  },
  {
    slug: 'salary-calculator',
    name: 'Salary Calculator',
    category: 'Finance',
    description: 'Estimate take-home salary after taxes and deductions.',
  },
  {
    slug: 'loan-calculator',
    name: 'Loan Calculator',
    category: 'Finance',
    description: 'Estimate monthly loan repayments and total interest.',
  },
  {
    slug: 'mortgage-calculator',
    name: 'Mortgage Calculator',
    category: 'Finance',
    description: 'Calculate mortgage repayments based on principal and rate.',
  },
  {
    slug: 'profit-margin-calculator',
    name: 'Profit Margin Calculator',
    category: 'Business',
    description: 'Measure profit based on revenue and cost inputs.',
  },
  {
    slug: 'roi-calculator',
    name: 'ROI Calculator',
    category: 'Business',
    description: 'Calculate return on investment percentage in one view.',
  },
  {
    slug: 'inflation-calculator',
    name: 'Inflation Calculator',
    category: 'Finance',
    description: 'Project what money may be worth in the future.',
  },
  {
    slug: 'currency-converter',
    name: 'Currency Converter',
    category: 'Utility',
    description: 'Convert between major currencies quickly.',
  },
  {
    slug: 'age-calculator',
    name: 'Age Calculator',
    category: 'Utility',
    description: 'Measure age from a specific birth date.',
  },
  {
    slug: 'unit-converter',
    name: 'Unit Converter',
    category: 'Utility',
    description: 'Convert units such as miles, kilograms, and feet.',
  },
];

export function getCalculatorBySlug(slug: string) {
  return calculatorCatalog.find((tool) => tool.slug === slug) ?? null;
}

import React from 'react'
import { calculateInvestmentResults, formatter } from '../util/investment'

export const Table = ({userInput}) => {
    const data=calculateInvestmentResults(userInput)
    const initialInvestmentResults =data[0].valueEndOfYear-data[0].interest-data[0].annualInvestment
   
    
  return (
    <table id='result'>
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {data.map((yearData, index) =>
            
            {
                const totalInterest=yearData.valueEndOfYear-yearData.annualInvestment * yearData.year - initialInvestmentResults ;
                const totalAmountInvested=yearData.valueEndOfYear-totalInterest
                return(
                <tr key={index}>
                    <td>{ yearData.year}</td>
                    <td>{formatter.format( yearData.valueEndOfYear)}</td>
                    <td>{formatter.format( yearData.interest)}</td>
                    <td>{formatter.format( totalInterest)}</td>
                    <td>{formatter.format( totalAmountInvested)}</td>
                </tr>
                )
})}
        </tbody>
    </table>
  )
}

import { useContext } from 'react'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContexts'

import { Container } from './styles'

export function Summary() {
  const { transactions } = useContext(TransactionsContext)

  console.log(transactions)

  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="Income" />
        </header>
        <strong>€2500.00</strong>
      </div>

      <div>
        <header>
          <p>Outcome</p>
          <img src={outcomeImg} alt="Outcome" />
        </header>
        <strong>- €500.00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>€2000.00</strong>
      </div>
    </Container>
  )
}

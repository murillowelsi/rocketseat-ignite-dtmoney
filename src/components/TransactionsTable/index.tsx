import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Dev web</td>
            <td className="deposit">€12000</td>
            <td>Web Dev</td>
            <td>20/02/2022</td>
          </tr>
          <tr>
            <td>Rental</td>
            <td className="withdraw">- €750</td>
            <td>Home</td>
            <td>01/03/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

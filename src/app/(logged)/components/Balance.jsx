function Balance() {
  return (
    <table>
      <thead>
        <tr>
          <th>Currency</th>
          <th>Amount</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div style={{ backgroundColor: "#E2F3E2" }}>USD</div>
          </td>
          <td>
            <div style={{ backgroundColor: "#E2F3E2" }}>1000</div>
          </td>
          <td>
            <div style={{ backgroundColor: "#E2F3E2" }}>$1000</div>
          </td>
        </tr>
        <tr>
          <td>
            <div style={{ backgroundColor: "#EBC2BC" }}>BTC</div>
          </td>
          <td>
            <div style={{ backgroundColor: "#EBC2BC" }}>1.00</div>
          </td>
          <td>
            <div style={{ backgroundColor: "#EBC2BC" }}>$61.000,00</div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

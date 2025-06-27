import { styled } from "styled-components";
import type { ProductTableProps } from "../types";
import { Button, Table } from "react-bootstrap";

const StyledTableCell = styled.td<{ isBought?: boolean }>`
  text-decoration: ${({ isBought }) => (isBought ? "line-through" : "none")};
`;

export const ProductTable = ({
  products,
  onDelete,
  onToggleBought,
}: ProductTableProps) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Shop</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <StyledTableCell isBought={product.isBought}>
              {product.id}
            </StyledTableCell>
            <StyledTableCell isBought={product.isBought}>
              {product.name}
            </StyledTableCell>
            <StyledTableCell isBought={product.isBought}>
              {product.shop}
            </StyledTableCell>
            <StyledTableCell isBought={product.isBought}>
              {product.category}
            </StyledTableCell>
            <td>
              <Button onClick={() => onToggleBought(product.id)}>
                {product.isBought
                  ? "Satın Alınmadı olarak işaretle"
                  : "Satın Alındı olarak işaretle"}
              </Button>
              <Button variant="danger" onClick={() => onDelete(product.id)}>
                Sil
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

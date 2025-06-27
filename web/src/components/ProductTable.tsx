import { styled } from "styled-components";
import type { ProductTableProps } from "../types";
import { Button, Table } from "react-bootstrap";

const StyledTableCell = styled.td<{ isBought?: boolean }>`
  text-decoration: ${({ isBought }) => (isBought ? "line-through" : "none")};
`;

export const ProductTable = ({ products }: ProductTableProps) => {
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
              <Button> Satın Alındı olarak işaretle</Button>
              <Button> Sil</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

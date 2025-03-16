import { render, screen, fireEvent } from "@testing-library/react";
import { it, expect, describe, vi } from "vitest";
import Allproduct from "../ProductList/Allproduct";
import { StoreProvider } from "../Context/Context";
import "@testing-library/jest-dom/vitest"; // this helps for testing library

describe("Product", () => {
  it("renders the list of product", () => {
    //create a mock product object
    const product = {
      title: "Product Title",
      price: 1000,
      image: "https://via.placeholder.com/150",
      description: "Product Description",
      id: 1,
    };
    //pass product as a props
    render(<Allproduct {...product} />);
    const title = screen.getByRole("title");
    const price = screen.getByRole("price");
    const img = screen.getByRole("img");
    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });
});

describe("popup", () => {
  it("shows the popup", () => {
    const product = {
      title: "Product Title",
      price: 1000,
      image: "https://via.placeholder.com/150",
      description: "Product Description",
      id: 1,
    };
    const setPopupMock = vi.fn();
    render(
      <StoreProvider>
        <Allproduct {...product}/>
      </StoreProvider>
    );
    const div = screen.getByTestId("product-Popup");
    expect(div).toBeInTheDocument();
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
    const title = screen.getByRole("title");
    fireEvent.click(div);
    expect(title).toBeInTheDocument();
  });
});

package inventory;

import java.util.*;

public class ProductApp {
	static Scanner sc = new Scanner(System.in);

	public static void main(String[] args) {
		int count = 0;
		System.out.println("Enter the number of Products");
		int noOfProducts = sc.nextInt();
		Product p[] = new Product[noOfProducts];
		boolean flag = true;
		do {
			displayMainMenu();
			System.out.println("Enter Your Choice");
			int choice = sc.nextInt();
			switch (choice) {
			case 1:
				p = AddProductDetails(p, count);
				displayProductdetails(p);
				break;
			case 2:
				System.out.println("Enter the  id of the  Product which you want to update the Quantity ");
				int id = sc.nextInt();
				int f = 0;
				for (int i = 0; i < p.length; i++) {
					if (id == p[i].getId()) {
						f = 1;
						break;
					}
				}
				if (f == 0) {
					System.out.println("The given id is not present");
					break;
				}
				UpdateQuantity(p, id);
				break;
			case 3:
				System.out.println("Enter the user quantity");
				int checkQuantity = sc.nextInt();
				System.out.println("The Quantity which is less than that is ");
				checkingQuantity(p, checkQuantity);
				break;
			case 4:
				displayProductSort(p);
				break;
			case 5:
				deleteProduct(p);
				break;
			case 6:
				flag = false;
				System.out.println("Thanks for visiting");
				break;
			default:
				System.out.println("Invalid Choice Please REENTER");
			}

		} while (flag);

	}

	private static void deleteProduct(Product[] p) {
		System.out.println("Enter the id which you want to delete");
		int id = sc.nextInt();
		for (int i = 0; i < p.length; i++) {
			if (p[i] != null && p[i].getId() == id) {
				p[i] = null;
			} else {
				displayDetails(p[i]);
			}

		}
	}

	private static void displayProductSort(Product[] p) {
		Product[] sortedProduct = p;
		for (int i = 0; i < sortedProduct.length; i++) {
			for (int j = 1; j < sortedProduct.length - i; j++) {
				if (sortedProduct[j - 1].getQuantity() > sortedProduct[j].getQuantity()) {
					Product temp = sortedProduct[j - 1];
					sortedProduct[j - 1] = sortedProduct[j];
					sortedProduct[j] = temp;
				}
			}
		}
		displayProductdetails(p);

	}

	private static void checkingQuantity(Product[] p, int checkQuantity) {
		int flag = 0;
		for (int i = 0; i < p.length; i++) {
			if (p[i].getQuantity() < checkQuantity) {
				displayDetails(p[i]);
			} else {
				flag = 1;
			}
		}
		if (flag == 1) {
			System.out.println("There is No elements Below That");
		}
	}

	private static void UpdateQuantity(Product[] p, int id) {
		System.out.println("Enter the Updated Quantity");
		int UpdatedQuantity = sc.nextInt();
		int flag = 0;
		for (int i = 0; i < p.length; i++) {
			if (p[i].getId() == id) {
				p[i].setQuantity(UpdatedQuantity);
				displayDetails(p[i]);
				flag = 1;
				break;
			}
		}
		if (flag == 0) {
			System.out.println("The given id is not present int the App");
		}
	}

	private static void displayDetails(Product p) {
		System.out.println("The Product id is " + p.getId());
		System.out.println("The Product Name is " + p.getName());
		System.out.println("The Product quantity is " + p.getQuantity());
		System.out.println("The Product PricePerUnit is " + p.getPricePerUnit());
		System.out.println();
	}

	private static void displayProductdetails(Product[] p) {
		for (int i = 0; i < p.length; i++) {
			System.out.println("The Product id is " + p[i].getId());
			System.out.println("The Product Name is " + p[i].getName());
			System.out.println("The Product quantity is " + p[i].getQuantity());
			System.out.println("The Product PricePerUnit is " + p[i].getPricePerUnit());
			System.out.println();
		}

	}

	private static Product[] AddProductDetails(Product[] p, int ProductDetailcount) {
		for (int i = 0; i < p.length; i++) {
			System.out.println("Enter The Product ID");
			int id = sc.nextInt();
			System.out.println("Enter The Product Name");
			sc.nextLine();
			String name = sc.nextLine();
			System.out.println("Enter the Product Quantity");
			int quantity = sc.nextInt();
			System.out.println("Enter the Product Price Per Unit");
			double PricePerUnit = sc.nextDouble();
			p[ProductDetailcount] = new Product(id, name, quantity, PricePerUnit);
			ProductDetailcount++;
		}
		return p;
	}

	private static void displayMainMenu() {
		System.out.println("===================================================================");
		System.out.println("1. Add new product in inventory ");
		System.out.println("2. Update the quantity of particular product ");
		System.out.println("3. Display products where quantity is less than provided by a user ");
		System.out.println("4. Display product sort on the basis of quantity");
		System.out.println("5. Delete a particular product from inventory ");
		System.out.println("6. Exit");
		System.out.println("===================================================================");
	}
}